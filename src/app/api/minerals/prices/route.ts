import { NextRequest, NextResponse } from 'next/server';
import { getAllPrices, getMineralBySlug } from '@/lib/minerals/data';
import type { PriceSnapshot } from '@/lib/minerals/types';

async function fetchMetalsApiPrecious(): Promise<Partial<Record<string, number>> | null> {
  const apiKey = process.env.METALS_API_KEY;
  if (!apiKey) return null;
  try {
    const symbols = 'XAU,XAG,XPT,XPD';
    const res = await fetch(`https://api.metalpriceapi.com/v1/latest?api_key=${apiKey}&base=USD&currencies=${symbols}`, {
      next: { revalidate: 900 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    if (!json.success || !json.rates) return null;
    return {
      gold: json.rates.USDXAU ? 1 / json.rates.USDXAU : undefined,
      silver: json.rates.USDXAG ? 1 / json.rates.USDXAG : undefined,
      platinum: json.rates.USDXPT ? 1 / json.rates.USDXPT : undefined,
      palladium: json.rates.USDXPD ? 1 / json.rates.USDXPD : undefined,
    };
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest) {
  const slugsParam = req.nextUrl.searchParams.get('slugs');
  const slugs = slugsParam ? slugsParam.split(',').map(s => s.trim()) : null;

  const [seedPrices, liveMetals] = await Promise.all([
    getAllPrices(),
    fetchMetalsApiPrecious(),
  ]);

  const result: PriceSnapshot[] = [];
  const allSlugs = slugs ?? Object.keys(seedPrices);

  for (const slug of allSlugs) {
    const base = seedPrices[slug];
    if (!base) continue;

    if (liveMetals?.[slug] !== undefined) {
      const livePrice = liveMetals[slug]!;
      const change = livePrice - base.priceUSD;
      const changePct = (change / base.priceUSD) * 100;
      result.push({
        ...base,
        priceUSD: livePrice,
        change24h: change,
        changePct24h: changePct,
        timestamp: new Date().toISOString(),
        source: 'metals_api',
      });
    } else {
      result.push(base);
    }
  }

  return NextResponse.json({ prices: result, timestamp: new Date().toISOString() });
}

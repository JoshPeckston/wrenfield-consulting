import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import type { FxRates } from '@/lib/minerals/types';

const FX_FILE = path.join(process.cwd(), 'src/data/minerals/fx-rates.json');
const CACHE_MS = 60 * 60 * 1000; // 1 hour

const FALLBACK: FxRates = {
  base: 'USD',
  timestamp: new Date().toISOString(),
  rates: { USD: 1, EUR: 0.921, GBP: 0.788, AUD: 1.543, CAD: 1.362, JPY: 157.24, CNY: 7.264 },
};

async function readCached(): Promise<FxRates | null> {
  try {
    const raw = await fs.readFile(FX_FILE, 'utf-8');
    const data = JSON.parse(raw) as FxRates;
    const age = Date.now() - new Date(data.timestamp).getTime();
    if (age < CACHE_MS) return data;
    return null;
  } catch {
    return null;
  }
}

async function fetchLive(): Promise<FxRates | null> {
  const apiKey = process.env.EXCHANGE_RATE_API_KEY;
  if (!apiKey) return null;
  try {
    const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const json = await res.json();
    const rates: FxRates = {
      base: 'USD',
      timestamp: new Date().toISOString(),
      rates: {
        USD: 1,
        EUR: json.conversion_rates.EUR,
        GBP: json.conversion_rates.GBP,
        AUD: json.conversion_rates.AUD,
        CAD: json.conversion_rates.CAD,
        JPY: json.conversion_rates.JPY,
        CNY: json.conversion_rates.CNY,
      },
    };
    await fs.writeFile(FX_FILE, JSON.stringify(rates, null, 2));
    return rates;
  } catch {
    return null;
  }
}

export async function GET() {
  const cached = await readCached();
  if (cached) return NextResponse.json(cached);

  const live = await fetchLive();
  if (live) return NextResponse.json(live);

  return NextResponse.json(FALLBACK);
}

import { NextRequest, NextResponse } from 'next/server';
import { getSupplyChainData, getMineralBySlug } from '@/lib/minerals/data';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const mineral = await getMineralBySlug(slug);
  if (!mineral) return NextResponse.json({ error: 'Mineral not found' }, { status: 404 });

  const data = await getSupplyChainData(slug);
  if (!data) return NextResponse.json({ error: 'Supply chain data not available' }, { status: 404 });

  return NextResponse.json(data, { headers: { 'Cache-Control': 'public, s-maxage=86400' } });
}

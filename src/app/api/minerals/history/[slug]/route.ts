import { NextRequest, NextResponse } from 'next/server';
import { getHistoricalData, getMineralBySlug } from '@/lib/minerals/data';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const mineral = await getMineralBySlug(slug);
  if (!mineral) return NextResponse.json({ error: 'Mineral not found' }, { status: 404 });

  const data = await getHistoricalData(slug);
  return NextResponse.json({ mineral: slug, data }, { headers: { 'Cache-Control': 'public, s-maxage=86400' } });
}

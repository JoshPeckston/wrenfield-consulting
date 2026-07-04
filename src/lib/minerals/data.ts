import 'server-only';
import fs from 'fs/promises';
import path from 'path';
import type { MineralMeta, PriceSnapshot, PriceDataPoint, SupplyChainData, FxRates, MineralCategory, CategoryMeta } from './types';

const DATA_DIR = path.join(process.cwd(), 'src/data/minerals');

async function readJson<T>(filePath: string): Promise<T> {
  const raw = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(raw) as T;
}

export const CATEGORY_META: CategoryMeta[] = [
  { slug: 'precious', label: 'Precious Metals', description: 'Gold, silver, and platinum group metals — the bedrock of monetary value and industrial demand.', color: '#F5A623' },
  { slug: 'battery', label: 'Battery & EV Metals', description: 'Critical inputs for lithium-ion batteries powering the global energy transition.', color: '#3F8EFC' },
  { slug: 'base', label: 'Base Metals', description: 'High-volume industrial metals underpinning construction, manufacturing, and infrastructure.', color: '#9B9B9B' },
  { slug: 'rare-earth', label: 'Rare Earth Elements', description: 'Exotic elements essential for magnets, electronics, and advanced defence systems.', color: '#C77DFF' },
  { slug: 'industrial', label: 'Industrial Minerals', description: 'Bulk commodities driving agriculture, energy, and heavy industry globally.', color: '#8B6914' },
  { slug: 'critical', label: 'Critical & Strategic', description: 'Minerals with severe supply concentration risk and irreplaceable technological roles.', color: '#FF3B30' },
];

export async function getAllMinerals(): Promise<MineralMeta[]> {
  const data = await readJson<{ minerals: MineralMeta[] }>(path.join(DATA_DIR, 'minerals-meta.json'));
  return data.minerals;
}

export async function getMineralBySlug(slug: string): Promise<MineralMeta | null> {
  const all = await getAllMinerals();
  return all.find(m => m.slug === slug) ?? null;
}

export async function getMineralsByCategory(category: MineralCategory): Promise<MineralMeta[]> {
  const all = await getAllMinerals();
  return all.filter(m => m.category === category);
}

export async function getAllPrices(): Promise<Record<string, PriceSnapshot>> {
  const data = await readJson<{ lastUpdated: string; prices: Record<string, Omit<PriceSnapshot, 'mineral' | 'timestamp' | 'source'>> }>(
    path.join(DATA_DIR, 'prices-seed.json')
  );
  const result: Record<string, PriceSnapshot> = {};
  for (const [slug, price] of Object.entries(data.prices)) {
    result[slug] = { ...price, mineral: slug, timestamp: data.lastUpdated, source: 'static_seed' };
  }
  return result;
}

export async function getPriceSnapshot(slug: string): Promise<PriceSnapshot | null> {
  const all = await getAllPrices();
  return all[slug] ?? null;
}

export async function getHistoricalData(slug: string): Promise<PriceDataPoint[]> {
  try {
    const data = await readJson<{ data: PriceDataPoint[] }>(path.join(DATA_DIR, 'history', `${slug}-1y.json`));
    return data.data;
  } catch {
    return [];
  }
}

export async function getSupplyChainData(slug: string): Promise<SupplyChainData | null> {
  try {
    return await readJson<SupplyChainData>(path.join(DATA_DIR, 'supply-chain', `${slug}.json`));
  } catch {
    return null;
  }
}

export async function getAllSupplyChainData(): Promise<SupplyChainData[]> {
  const minerals = await getAllMinerals();
  const results = await Promise.all(minerals.map(m => getSupplyChainData(m.slug)));
  return results.filter((d): d is SupplyChainData => d !== null);
}

export async function getFxRates(): Promise<FxRates> {
  try {
    return await readJson<FxRates>(path.join(DATA_DIR, 'fx-rates.json'));
  } catch {
    return {
      base: 'USD',
      timestamp: new Date().toISOString(),
      rates: { USD: 1, EUR: 0.92, GBP: 0.79, AUD: 1.54, CAD: 1.36, JPY: 157.2, CNY: 7.26 },
    };
  }
}

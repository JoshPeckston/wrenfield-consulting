export type MineralCategory = 'precious' | 'battery' | 'base' | 'rare-earth' | 'industrial' | 'critical';

export type PriceUnit = 'troy_oz' | 'gram' | 'kg' | 'tonne' | 'lb' | 'short_ton' | 'long_ton';

export type Currency = 'USD' | 'EUR' | 'GBP' | 'AUD' | 'CAD' | 'JPY' | 'CNY';

export type DataSource = 'metals_api' | 'alpha_vantage' | 'world_bank' | 'usgs' | 'static_seed';

export interface MineralMeta {
  slug: string;
  name: string;
  symbol: string;
  category: MineralCategory;
  atomicNumber?: number;
  description: string;
  longDescription: string;
  unit: PriceUnit;
  industries: string[];
  keyProducers: string[];
  tags: string[];
  priceDrivers: string[];
  esgNotes: string[];
  demandSectors: { sector: string; share: number }[];
}

export interface PriceSnapshot {
  mineral: string;
  priceUSD: number;
  unit: PriceUnit;
  change24h: number;
  changePct24h: number;
  change7d: number;
  changePct7d: number;
  change30d: number;
  changePct30d: number;
  high52w: number;
  low52w: number;
  timestamp: string;
  source: DataSource;
}

export interface PriceDataPoint {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume?: number;
}

export interface CountryProducer {
  rank: number;
  country: string;
  countryCode: string;
  annualProductionTonnes: number;
  globalSharePct: number;
  notes?: string;
}

export interface MiningCompany {
  name: string;
  ticker?: string;
  country: string;
  marketSharePct?: number;
  notes?: string;
}

export interface SupplyChainData {
  mineral: string;
  topProducers: CountryProducer[];
  topConsumers: { country: string; countryCode: string; sharePct: number }[];
  processingConcentration: string;
  reservesEstimate: string;
  supplyRiskScore: number;
  geopoliticalNotes: string[];
  majorCompanies: MiningCompany[];
  tradeFlowNotes: string;
}

export interface FxRates {
  base: 'USD';
  timestamp: string;
  rates: Record<Currency, number>;
}

export interface CategoryMeta {
  slug: MineralCategory;
  label: string;
  description: string;
  color: string;
}

import type { PriceUnit } from './types';

export const UNIT_TO_KG: Record<PriceUnit, number> = {
  troy_oz: 0.0311035,
  gram: 0.001,
  kg: 1,
  tonne: 1000,
  lb: 0.453592,
  short_ton: 907.185,
  long_ton: 1016.05,
};

export const UNIT_LABELS: Record<PriceUnit, string> = {
  troy_oz: 'Troy Oz',
  gram: 'Gram',
  kg: 'Kilogram',
  tonne: 'Metric Tonne',
  lb: 'Pound',
  short_ton: 'Short Ton (US)',
  long_ton: 'Long Ton (UK)',
};

export const UNIT_ABBREVIATIONS: Record<PriceUnit, string> = {
  troy_oz: 'troy oz',
  gram: 'g',
  kg: 'kg',
  tonne: 't',
  lb: 'lb',
  short_ton: 'st',
  long_ton: 'lt',
};

export const ALL_UNITS: PriceUnit[] = ['troy_oz', 'gram', 'kg', 'tonne', 'lb', 'short_ton', 'long_ton'];

export function convertWeight(value: number, from: PriceUnit, to: PriceUnit): number {
  const inKg = value * UNIT_TO_KG[from];
  return inKg / UNIT_TO_KG[to];
}

/** Given a price per `fromUnit`, return price per `toUnit` */
export function convertPricePerUnit(pricePerFromUnit: number, from: PriceUnit, to: PriceUnit): number {
  const pricePerKg = pricePerFromUnit / UNIT_TO_KG[from];
  return pricePerKg * UNIT_TO_KG[to];
}

/** Given a price per canonical unit, return all unit prices */
export function allUnitPrices(priceUSD: number, canonicalUnit: PriceUnit): Record<PriceUnit, number> {
  const result = {} as Record<PriceUnit, number>;
  for (const unit of ALL_UNITS) {
    result[unit] = convertPricePerUnit(priceUSD, canonicalUnit, unit);
  }
  return result;
}

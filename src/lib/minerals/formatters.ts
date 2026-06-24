import type { Currency, PriceUnit } from './types';
import { getCurrencySymbol } from './currencies';
import { UNIT_ABBREVIATIONS } from './conversions';

export function formatPrice(value: number, currency: Currency = 'USD', decimals?: number): string {
  const symbol = getCurrencySymbol(currency);
  const d = decimals ?? (value >= 100 ? 2 : value >= 1 ? 4 : 6);
  const formatted = value.toLocaleString('en-US', {
    minimumFractionDigits: d,
    maximumFractionDigits: d,
  });
  return `${symbol}${formatted}`;
}

export function formatChange(value: number, pct: number): string {
  const sign = value >= 0 ? '+' : '';
  return `${sign}${pct.toFixed(2)}%`;
}

export function formatUnit(unit: PriceUnit): string {
  return UNIT_ABBREVIATIONS[unit];
}

export function formatLargeNumber(n: number): string {
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toLocaleString('en-US');
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function isPositive(value: number): boolean {
  return value >= 0;
}

export function trendArrow(value: number): string {
  return value >= 0 ? '▲' : '▼';
}

export function trendClass(value: number): string {
  return value >= 0 ? 'text-terminal-green' : 'text-signal-red';
}

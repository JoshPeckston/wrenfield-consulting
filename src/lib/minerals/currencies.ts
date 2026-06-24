import type { Currency, FxRates } from './types';

export const ALL_CURRENCIES: Currency[] = ['USD', 'EUR', 'GBP', 'AUD', 'CAD', 'JPY', 'CNY'];

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  AUD: 'A$',
  CAD: 'C$',
  JPY: '¥',
  CNY: '¥',
};

export const CURRENCY_LABELS: Record<Currency, string> = {
  USD: 'US Dollar',
  EUR: 'Euro',
  GBP: 'British Pound',
  AUD: 'Australian Dollar',
  CAD: 'Canadian Dollar',
  JPY: 'Japanese Yen',
  CNY: 'Chinese Yuan',
};

export function getCurrencySymbol(currency: Currency): string {
  return CURRENCY_SYMBOLS[currency];
}

export function convertCurrency(amountUSD: number, to: Currency, rates: FxRates): number {
  if (to === 'USD') return amountUSD;
  return amountUSD * rates.rates[to];
}

export function convertAllCurrencies(amountUSD: number, rates: FxRates): Record<Currency, number> {
  const result = {} as Record<Currency, number>;
  for (const currency of ALL_CURRENCIES) {
    result[currency] = convertCurrency(amountUSD, currency, rates);
  }
  return result;
}

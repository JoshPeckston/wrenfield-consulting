'use client';

import { useState, useMemo } from 'react';
import type { PriceSnapshot, Currency, PriceUnit } from '@/lib/minerals/types';
import type { FxRates } from '@/lib/minerals/types';
import { ALL_UNITS, UNIT_LABELS, UNIT_ABBREVIATIONS, convertPricePerUnit } from '@/lib/minerals/conversions';
import { ALL_CURRENCIES, CURRENCY_SYMBOLS, convertCurrency } from '@/lib/minerals/currencies';
import CurrencyToggle from './CurrencyToggle';

export default function PriceCalculator({
  price,
  fxRates,
}: {
  price: PriceSnapshot;
  fxRates: FxRates;
}) {
  const [qty, setQty] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState<PriceUnit>(price.unit);
  const [currency, setCurrency] = useState<Currency>('USD');

  const results = useMemo(() => {
    const quantity = parseFloat(qty) || 0;
    const pricePerFromUnit = convertPricePerUnit(price.priceUSD, price.unit, fromUnit);
    const totalUSD = pricePerFromUnit * quantity;
    const totalInCurrency = convertCurrency(totalUSD, currency, fxRates);

    return ALL_UNITS.map(unit => {
      const pricePerUnit = convertPricePerUnit(price.priceUSD, price.unit, unit);
      const total = convertCurrency(pricePerUnit * quantity, currency, fxRates);
      return { unit, pricePerUnit: convertCurrency(pricePerUnit, currency, fxRates), total };
    });
  }, [qty, fromUnit, currency, price, fxRates]);

  const sym = CURRENCY_SYMBOLS[currency];

  return (
    <div className="bg-charcoal-gray border border-gray-700/60 rounded-md p-5">
      <p className="text-terminal-green/60 uppercase tracking-wider text-[10px] font-mono mb-4">// Weight & Currency Calculator</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <div>
          <label className="block text-gray-500 text-xs font-mono mb-1">Quantity</label>
          <input
            type="number"
            min="0"
            step="any"
            value={qty}
            onChange={e => setQty(e.target.value)}
            className="w-full bg-deep-black border border-gray-700 rounded px-3 py-2 text-sm font-mono text-off-white outline-none focus:border-terminal-green/50 transition-colors"
          />
        </div>
        <div>
          <label className="block text-gray-500 text-xs font-mono mb-1">Unit</label>
          <select
            value={fromUnit}
            onChange={e => setFromUnit(e.target.value as PriceUnit)}
            className="w-full bg-deep-black border border-gray-700 rounded px-3 py-2 text-sm font-mono text-off-white outline-none focus:border-terminal-green/50 transition-colors"
          >
            {ALL_UNITS.map(u => (
              <option key={u} value={u}>{UNIT_LABELS[u]}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-gray-500 text-xs font-mono mb-1">Currency</label>
          <CurrencyToggle value={currency} onChange={setCurrency} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs font-mono">
          <thead>
            <tr className="border-b border-terminal-green/20">
              <th className="text-terminal-green/60 uppercase tracking-widest text-[10px] text-left py-2 pr-4">Unit</th>
              <th className="text-terminal-green/60 uppercase tracking-widest text-[10px] text-right py-2 pr-4">Price / Unit</th>
              <th className="text-terminal-green/60 uppercase tracking-widest text-[10px] text-right py-2">Total ({qty || '0'} {UNIT_ABBREVIATIONS[fromUnit]})</th>
            </tr>
          </thead>
          <tbody>
            {results.map(r => (
              <tr key={r.unit} className={`border-b border-gray-800/50 ${r.unit === fromUnit ? 'bg-terminal-green/5' : ''}`}>
                <td className="py-2 pr-4 text-gray-400">{UNIT_LABELS[r.unit]}</td>
                <td className="py-2 pr-4 text-right text-light-gray">{sym}{r.pricePerUnit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 })}</td>
                <td className={`py-2 text-right font-bold ${r.unit === fromUnit ? 'text-terminal-green' : 'text-off-white'}`}>
                  {sym}{r.total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

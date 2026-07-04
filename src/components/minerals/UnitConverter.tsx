'use client';

import { useState } from 'react';
import { ALL_UNITS, UNIT_LABELS, UNIT_ABBREVIATIONS, convertWeight } from '@/lib/minerals/conversions';
import type { PriceUnit } from '@/lib/minerals/types';

export default function UnitConverter() {
  const [value, setValue] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState<PriceUnit>('troy_oz');

  const qty = parseFloat(value) || 0;

  return (
    <div className="bg-charcoal-gray border border-gray-700/60 rounded-md p-6">
      <p className="text-terminal-green/60 uppercase tracking-wider text-[10px] font-mono mb-4">// Weight Unit Converter</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        <div>
          <label className="block text-gray-500 text-xs font-mono mb-1">Value</label>
          <input
            type="number"
            min="0"
            step="any"
            value={value}
            onChange={e => setValue(e.target.value)}
            className="w-full bg-deep-black border border-gray-700 rounded px-3 py-2 text-sm font-mono text-off-white outline-none focus:border-terminal-green/50 transition-colors"
          />
        </div>
        <div>
          <label className="block text-gray-500 text-xs font-mono mb-1">From Unit</label>
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
      </div>

      <div className="space-y-2">
        {ALL_UNITS.map(unit => {
          const converted = convertWeight(qty, fromUnit, unit);
          return (
            <div
              key={unit}
              className={`flex items-center justify-between py-2.5 px-3 rounded border ${
                unit === fromUnit
                  ? 'border-terminal-green/40 bg-terminal-green/5'
                  : 'border-gray-800 bg-deep-black/30'
              }`}
            >
              <span className="text-gray-400 font-mono text-sm">{UNIT_LABELS[unit]}</span>
              <span className={`font-mono font-bold text-sm ${unit === fromUnit ? 'text-terminal-green' : 'text-off-white'}`}>
                {converted.toLocaleString('en-US', { maximumFractionDigits: 8 })} {UNIT_ABBREVIATIONS[unit]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

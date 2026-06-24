'use client';

import { useState } from 'react';
import type { MineralMeta, PriceSnapshot, FxRates } from '@/lib/minerals/types';
import PriceCalculator from '@/components/minerals/PriceCalculator';

export default function PriceCalculatorFull({
  minerals,
  prices,
  fxRates,
}: {
  minerals: MineralMeta[];
  prices: Record<string, PriceSnapshot>;
  fxRates: FxRates;
}) {
  const [selectedSlug, setSelectedSlug] = useState(minerals[0]?.slug ?? '');
  const price = prices[selectedSlug];

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <label className="block text-gray-500 text-xs font-mono mb-1">Select Mineral</label>
        <select
          value={selectedSlug}
          onChange={e => setSelectedSlug(e.target.value)}
          className="bg-charcoal-gray border border-gray-700 rounded px-3 py-2 text-sm font-mono text-off-white outline-none focus:border-terminal-green/50 transition-colors w-full max-w-xs"
        >
          {minerals.map(m => (
            <option key={m.slug} value={m.slug}>{m.name} ({m.symbol})</option>
          ))}
        </select>
      </div>
      {price ? (
        <PriceCalculator price={price} fxRates={fxRates} />
      ) : (
        <p className="text-gray-600 font-mono text-sm">No price data for selected mineral.</p>
      )}
    </div>
  );
}

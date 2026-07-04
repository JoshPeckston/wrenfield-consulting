'use client';

import type { PriceSnapshot } from '@/lib/minerals/types';

export default function MarketSentimentGauge({ prices }: { prices: PriceSnapshot[] }) {
  const total = prices.length;
  if (total === 0) return null;

  const positive = prices.filter(p => p.changePct24h >= 0).length;
  const pct = Math.round((positive / total) * 100);

  const label = pct >= 65 ? 'BULLISH' : pct >= 45 ? 'NEUTRAL' : 'BEARISH';
  const color = pct >= 65 ? '#00C77D' : pct >= 45 ? '#F5A623' : '#FF3B30';

  return (
    <div className="bg-charcoal-gray border border-gray-700/60 rounded-md p-5">
      <p className="text-terminal-green/60 uppercase tracking-wider text-[10px] font-mono mb-4">// Market Sentiment (24h)</p>
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-3xl font-bold" style={{ color }}>{pct}%</span>
        <span className="font-mono text-sm px-3 py-1 rounded border" style={{ color, borderColor: `${color}40`, backgroundColor: `${color}15` }}>
          {label}
        </span>
      </div>
      <div className="w-full h-3 rounded-full bg-gray-800 overflow-hidden mb-2">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
      <p className="text-gray-600 text-xs font-mono">{positive}/{total} minerals advancing</p>
    </div>
  );
}

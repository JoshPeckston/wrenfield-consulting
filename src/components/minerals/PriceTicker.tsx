'use client';

import type { MineralMeta, PriceSnapshot } from '@/lib/minerals/types';
import { formatPrice, trendArrow, trendClass } from '@/lib/minerals/formatters';
import { UNIT_ABBREVIATIONS } from '@/lib/minerals/conversions';

interface TickerItem {
  mineral: MineralMeta;
  price: PriceSnapshot;
}

export default function PriceTicker({ items }: { items: TickerItem[] }) {
  if (items.length === 0) return null;

  const doubled = [...items, ...items];

  return (
    <div className="border-b border-terminal-green/20 bg-deep-black/80 overflow-hidden py-2">
      <div className="flex animate-marquee whitespace-nowrap" style={{ width: 'max-content' }}>
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 px-6 font-mono text-xs border-r border-gray-800">
            <span className="text-terminal-green/50 uppercase">[{item.mineral.symbol}]</span>
            <span className="text-off-white font-semibold uppercase">{item.mineral.name}</span>
            <span className="text-off-white">
              {formatPrice(item.price.priceUSD)}/{UNIT_ABBREVIATIONS[item.price.unit]}
            </span>
            <span className={trendClass(item.price.changePct24h)}>
              {trendArrow(item.price.changePct24h)} {Math.abs(item.price.changePct24h).toFixed(2)}%
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

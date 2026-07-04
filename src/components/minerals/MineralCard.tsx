import Link from 'next/link';
import type { MineralMeta, PriceSnapshot } from '@/lib/minerals/types';
import { formatPrice, trendArrow, trendClass } from '@/lib/minerals/formatters';
import { UNIT_ABBREVIATIONS } from '@/lib/minerals/conversions';
import CategoryBadge from './CategoryBadge';

export default function MineralCard({ mineral, price }: { mineral: MineralMeta; price: PriceSnapshot | null }) {
  return (
    <Link
      href={`/minerals/${mineral.slug}`}
      className="group block bg-charcoal-gray border border-gray-700/60 rounded-md p-4 hover:border-terminal-green/60 transition-all duration-200 hover:bg-terminal-green/5"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-terminal-green/50 font-mono text-xs uppercase tracking-widest">{mineral.symbol}</p>
          <h3 className="text-off-white font-mono font-bold text-lg group-hover:text-terminal-green transition-colors">
            {mineral.name}
          </h3>
        </div>
        <CategoryBadge category={mineral.category} size="xs" />
      </div>

      {price ? (
        <>
          <p className="text-2xl font-mono font-bold text-off-white">
            {formatPrice(price.priceUSD)}
            <span className="text-gray-500 text-sm font-normal ml-1">/{UNIT_ABBREVIATIONS[price.unit]}</span>
          </p>
          <p className={`text-sm font-mono mt-1 ${trendClass(price.changePct24h)}`}>
            {trendArrow(price.changePct24h)} {Math.abs(price.changePct24h).toFixed(2)}% (24h)
          </p>
        </>
      ) : (
        <p className="text-gray-600 font-mono text-sm">Price unavailable</p>
      )}
    </Link>
  );
}

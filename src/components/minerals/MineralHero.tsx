import type { MineralMeta, PriceSnapshot } from '@/lib/minerals/types';
import { formatPrice, trendArrow, trendClass } from '@/lib/minerals/formatters';
import { UNIT_ABBREVIATIONS } from '@/lib/minerals/conversions';
import CategoryBadge from './CategoryBadge';

export default function MineralHero({ mineral, price }: { mineral: MineralMeta; price: PriceSnapshot | null }) {
  const isPos = price ? price.changePct24h >= 0 : true;

  return (
    <div className="border-b border-gray-700/50 pb-8 mb-8">
      <div className="flex flex-wrap items-start gap-3 mb-4">
        <span className="text-terminal-green/60 font-mono text-sm uppercase tracking-widest">{mineral.symbol}</span>
        <CategoryBadge category={mineral.category} />
        {price && (
          <span className="flex items-center gap-1.5 text-terminal-green text-xs font-mono">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-terminal-green animate-pulse" />
            LIVE
          </span>
        )}
      </div>

      <h1 className="text-4xl md:text-5xl font-mono font-bold text-off-white mb-6">{mineral.name}</h1>

      {price ? (
        <div className="flex flex-wrap items-end gap-6">
          <div>
            <p className="text-5xl md:text-6xl font-mono font-bold text-off-white">
              {formatPrice(price.priceUSD)}
            </p>
            <p className="text-gray-500 font-mono text-sm mt-1">per {UNIT_ABBREVIATIONS[price.unit]}</p>
          </div>
          <div className="pb-2 space-y-1">
            <p className={`text-xl font-mono font-bold ${trendClass(price.changePct24h)}`}>
              {trendArrow(price.changePct24h)} {Math.abs(price.changePct24h).toFixed(2)}%
              <span className="text-sm font-normal ml-1">24h</span>
            </p>
            <p className={`text-sm font-mono ${trendClass(price.changePct7d)}`}>
              {trendArrow(price.changePct7d)} {Math.abs(price.changePct7d).toFixed(2)}%
              <span className="text-gray-500 ml-1">7d</span>
            </p>
          </div>
          <div className="pb-2 space-y-1 text-sm font-mono">
            <p className="text-gray-500">52w High: <span className="text-off-white">{formatPrice(price.high52w)}</span></p>
            <p className="text-gray-500">52w Low: <span className="text-off-white">{formatPrice(price.low52w)}</span></p>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 font-mono">Price data unavailable</p>
      )}

      {price && (
        <p className="text-gray-600 font-mono text-xs mt-4">
          UPDATED {new Date(price.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' })} UTC
          <span className="ml-3 text-gray-700">SRC: {price.source.toUpperCase().replace('_', '-')}</span>
        </p>
      )}
    </div>
  );
}

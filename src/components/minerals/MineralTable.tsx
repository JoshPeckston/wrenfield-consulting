'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { MineralMeta, PriceSnapshot } from '@/lib/minerals/types';
import { formatPrice, trendArrow, trendClass } from '@/lib/minerals/formatters';
import { UNIT_ABBREVIATIONS } from '@/lib/minerals/conversions';
import CategoryBadge from './CategoryBadge';

type SortKey = 'name' | 'price' | 'change24h' | 'change7d' | 'high52w' | 'low52w';

export default function MineralTable({
  minerals,
  prices,
}: {
  minerals: MineralMeta[];
  prices: Record<string, PriceSnapshot>;
}) {
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortDir, setSortDir] = useState<1 | -1>(1);

  function toggleSort(key: SortKey) {
    if (sortKey === key) setSortDir(d => (d === 1 ? -1 : 1));
    else { setSortKey(key); setSortDir(1); }
  }

  const sorted = [...minerals].sort((a, b) => {
    const pa = prices[a.slug];
    const pb = prices[b.slug];
    if (sortKey === 'name') return sortDir * a.name.localeCompare(b.name);
    if (!pa || !pb) return 0;
    const vals: Record<SortKey, number> = {
      name: 0,
      price: pa.priceUSD - pb.priceUSD,
      change24h: pa.changePct24h - pb.changePct24h,
      change7d: pa.changePct7d - pb.changePct7d,
      high52w: pa.high52w - pb.high52w,
      low52w: pa.low52w - pb.low52w,
    };
    return sortDir * vals[sortKey];
  });

  const thClass = (key: SortKey) =>
    `text-terminal-green/70 uppercase tracking-widest text-[10px] py-3 pr-4 font-mono cursor-pointer hover:text-terminal-green transition-colors select-none ${sortKey === key ? 'text-terminal-green' : ''}`;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm font-mono">
        <thead>
          <tr className="border-b border-terminal-green/20">
            <th className={`${thClass('name')} text-left`} onClick={() => toggleSort('name')}>Mineral {sortKey === 'name' ? (sortDir === 1 ? '↑' : '↓') : ''}</th>
            <th className="text-terminal-green/70 uppercase tracking-widest text-[10px] py-3 pr-4 font-mono text-left">Category</th>
            <th className={`${thClass('price')} text-right`} onClick={() => toggleSort('price')}>Price {sortKey === 'price' ? (sortDir === 1 ? '↑' : '↓') : ''}</th>
            <th className={`${thClass('change24h')} text-right`} onClick={() => toggleSort('change24h')}>24h {sortKey === 'change24h' ? (sortDir === 1 ? '↑' : '↓') : ''}</th>
            <th className={`${thClass('change7d')} text-right`} onClick={() => toggleSort('change7d')}>7d {sortKey === 'change7d' ? (sortDir === 1 ? '↑' : '↓') : ''}</th>
            <th className={`${thClass('high52w')} text-right`} onClick={() => toggleSort('high52w')}>52w High {sortKey === 'high52w' ? (sortDir === 1 ? '↑' : '↓') : ''}</th>
            <th className={`${thClass('low52w')} text-right`} onClick={() => toggleSort('low52w')}>52w Low {sortKey === 'low52w' ? (sortDir === 1 ? '↑' : '↓') : ''}</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((m, i) => {
            const p = prices[m.slug];
            return (
              <tr
                key={m.slug}
                className={`border-b border-gray-800/50 hover:bg-terminal-green/5 hover:border-l-2 hover:border-l-terminal-green transition-all cursor-pointer ${i % 2 === 1 ? 'bg-deep-black/20' : ''}`}
              >
                <td className="py-3 pr-4">
                  <Link href={`/minerals/${m.slug}`} className="flex items-center gap-2 hover:text-terminal-green transition-colors">
                    <span className="text-terminal-green/40 text-xs w-6 shrink-0">{m.symbol}</span>
                    <span className="text-off-white">{m.name}</span>
                  </Link>
                </td>
                <td className="py-3 pr-4"><CategoryBadge category={m.category} size="xs" /></td>
                {p ? (
                  <>
                    <td className="py-3 pr-4 text-right text-off-white">
                      {formatPrice(p.priceUSD)}<span className="text-gray-600 text-xs ml-1">/{UNIT_ABBREVIATIONS[p.unit]}</span>
                    </td>
                    <td className={`py-3 pr-4 text-right ${trendClass(p.changePct24h)}`}>{trendArrow(p.changePct24h)} {Math.abs(p.changePct24h).toFixed(2)}%</td>
                    <td className={`py-3 pr-4 text-right ${trendClass(p.changePct7d)}`}>{trendArrow(p.changePct7d)} {Math.abs(p.changePct7d).toFixed(2)}%</td>
                    <td className="py-3 pr-4 text-right text-light-gray">{formatPrice(p.high52w)}</td>
                    <td className="py-3 text-right text-light-gray">{formatPrice(p.low52w)}</td>
                  </>
                ) : (
                  <td colSpan={5} className="py-3 text-center text-gray-700">No data</td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

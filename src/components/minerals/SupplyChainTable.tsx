import type { CountryProducer } from '@/lib/minerals/types';
import { formatLargeNumber } from '@/lib/minerals/formatters';

export default function SupplyChainTable({ producers }: { producers: CountryProducer[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm font-mono">
        <thead>
          <tr className="border-b border-terminal-green/20">
            <th className="text-terminal-green/70 uppercase tracking-widest text-[10px] text-left py-2 pr-4 w-8">#</th>
            <th className="text-terminal-green/70 uppercase tracking-widest text-[10px] text-left py-2 pr-4">Country</th>
            <th className="text-terminal-green/70 uppercase tracking-widest text-[10px] text-right py-2 pr-4">Production</th>
            <th className="text-terminal-green/70 uppercase tracking-widest text-[10px] text-right py-2">Global Share</th>
          </tr>
        </thead>
        <tbody>
          {producers.map((p) => (
            <tr
              key={p.rank}
              className="border-b border-gray-800/50 hover:bg-terminal-green/5 hover:border-l-2 hover:border-l-terminal-green transition-all"
            >
              <td className="py-2.5 pr-4 text-gray-600">{p.rank}</td>
              <td className="py-2.5 pr-4 text-off-white">{p.country}</td>
              <td className="py-2.5 pr-4 text-right text-light-gray">
                {p.annualProductionTonnes > 0 ? `${formatLargeNumber(p.annualProductionTonnes)} t` : '—'}
              </td>
              <td className="py-2.5 text-right">
                <div className="flex items-center justify-end gap-2">
                  <div className="w-16 h-1.5 bg-gray-800 rounded-full overflow-hidden hidden sm:block">
                    <div
                      className="h-full bg-terminal-green/60 rounded-full"
                      style={{ width: `${Math.min(p.globalSharePct, 100)}%` }}
                    />
                  </div>
                  <span className="text-terminal-green">{p.globalSharePct.toFixed(1)}%</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

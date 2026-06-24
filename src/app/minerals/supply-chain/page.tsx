import { getAllMinerals, getAllPrices, getAllSupplyChainData } from '@/lib/minerals/data';
import SupplyRiskIndicator from '@/components/minerals/SupplyRiskIndicator';
import Link from 'next/link';

export const metadata = {
  title: 'Mineral Supply Chain Overview | Mineral Prices Info Centre',
};

export default async function SupplyChainOverviewPage() {
  const [minerals, prices, supplyData] = await Promise.all([
    getAllMinerals(),
    getAllPrices(),
    getAllSupplyChainData(),
  ]);

  const mineralMap = Object.fromEntries(minerals.map(m => [m.slug, m]));

  const sorted = supplyData
    .filter(d => d.topProducers.length > 0 && d.topProducers[0].annualProductionTonnes > 0)
    .sort((a, b) => b.supplyRiskScore - a.supplyRiskScore);

  return (
    <>
      <div className="mb-8">
        <p className="text-terminal-green/60 font-mono text-xs uppercase tracking-widest mb-2">// Global Supply Chain Intelligence</p>
        <h1 className="text-4xl font-mono font-bold text-off-white mb-3">Supply Chain Overview</h1>
        <p className="text-light-gray max-w-2xl">
          Supply chain risk scores, producer concentration, and geopolitical intelligence across the mineral complex. High scores indicate critical supply vulnerabilities.
        </p>
      </div>

      {/* Risk leaderboard */}
      <section className="mb-10">
        <p className="text-terminal-green/60 uppercase tracking-widest text-[10px] font-mono mb-4">// Supply Risk Ranking (High → Low)</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sorted.map(d => {
            const m = mineralMap[d.mineral];
            if (!m) return null;
            return (
              <Link
                key={d.mineral}
                href={`/minerals/${d.mineral}`}
                className="group block bg-charcoal-gray border border-gray-700/60 rounded-md p-5 hover:border-terminal-green/60 transition-all hover:bg-terminal-green/5"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-terminal-green/50 font-mono text-xs mr-2">{m.symbol}</span>
                    <span className="text-off-white font-mono font-bold group-hover:text-terminal-green transition-colors">{m.name}</span>
                  </div>
                </div>
                <SupplyRiskIndicator score={d.supplyRiskScore} />
                {d.topProducers.length > 0 && d.topProducers[0].annualProductionTonnes > 0 && (
                  <p className="text-gray-600 text-xs font-mono mt-3">
                    Top producer: {d.topProducers[0].country} ({d.topProducers[0].globalSharePct.toFixed(1)}%)
                  </p>
                )}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Key risk notes */}
      <section className="mb-8">
        <p className="text-terminal-green/60 uppercase tracking-widest text-[10px] font-mono mb-4">// Key Geopolitical Risks</p>
        <div className="bg-charcoal-gray border border-signal-red/20 rounded-md p-5">
          <div className="space-y-3">
            {[
              { flag: '[CHINA]', note: 'China controls 60-90% of rare earth processing and dominates gallium, germanium, and graphite supply chains. Export controls imposed in 2023 demonstrate willingness to weaponise mineral access.' },
              { flag: '[DRC]', note: 'Democratic Republic of Congo supplies 70%+ of global cobalt and is one of the fastest-growing copper producers. Political instability and artisanal mining conditions are persistent risks.' },
              { flag: '[SOUTH AFRICA]', note: 'Controls 70%+ of platinum and rhodium supply. Power grid failures (load-shedding), ageing infrastructure, and labour disputes regularly disrupt production.' },
              { flag: '[CHILE/PERU]', note: 'Combined 40%+ of global copper supply. Community opposition to mining, water stress in Atacama, and government resource nationalism create recurring disruptions.' },
              { flag: '[RUSSIA]', note: 'Major supplier of palladium, nickel, platinum, and uranium. Western sanctions have restructured trade flows without eliminating supply.' },
            ].map(({ flag, note }) => (
              <div key={flag} className="flex gap-3">
                <span className="text-signal-red font-mono text-xs shrink-0 mt-0.5">{flag}</span>
                <p className="text-gray-400 text-sm leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

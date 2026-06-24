import { getAllMinerals, getAllPrices } from '@/lib/minerals/data';
import MarketSentimentGauge from '@/components/minerals/MarketSentimentGauge';
import MineralTable from '@/components/minerals/MineralTable';
import MetricCard from '@/components/minerals/MetricCard';
import { CATEGORY_META } from '@/lib/minerals/data';

export const metadata = {
  title: 'Market Overview | Mineral Prices Info Centre',
};

export default async function MarketOverviewPage() {
  const [minerals, prices] = await Promise.all([getAllMinerals(), getAllPrices()]);
  const priceList = Object.values(prices);

  const gainers = minerals
    .filter(m => prices[m.slug]?.changePct24h > 0)
    .sort((a, b) => (prices[b.slug]?.changePct24h ?? 0) - (prices[a.slug]?.changePct24h ?? 0))
    .slice(0, 5);

  const losers = minerals
    .filter(m => prices[m.slug]?.changePct24h < 0)
    .sort((a, b) => (prices[a.slug]?.changePct24h ?? 0) - (prices[b.slug]?.changePct24h ?? 0))
    .slice(0, 5);

  return (
    <>
      <div className="mb-8">
        <p className="text-terminal-green/60 font-mono text-xs uppercase tracking-widest mb-2">// Global Market Intelligence</p>
        <h1 className="text-4xl font-mono font-bold text-off-white mb-3">Market Overview</h1>
        <p className="text-gray-500 font-mono text-xs">
          Data as of {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Sentiment + quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="md:col-span-2">
          <MarketSentimentGauge prices={priceList} />
        </div>
        <MetricCard label="Minerals Tracked" value={String(minerals.length)} sub="20 across 6 categories" />
        <MetricCard
          label="Avg 24h Change"
          value={`${(priceList.reduce((s, p) => s + p.changePct24h, 0) / priceList.length).toFixed(2)}%`}
          accent
        />
      </div>

      {/* Gainers / Losers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-charcoal-gray border border-gray-700/60 rounded-md p-5">
          <p className="text-terminal-green/60 uppercase tracking-widest text-[10px] font-mono mb-3">// Top Gainers (24h)</p>
          <div className="space-y-2">
            {gainers.map(m => {
              const p = prices[m.slug];
              return (
                <div key={m.slug} className="flex items-center justify-between font-mono text-sm">
                  <span className="text-off-white">{m.name}</span>
                  <span className="text-terminal-green font-bold">▲ {p.changePct24h.toFixed(2)}%</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-charcoal-gray border border-gray-700/60 rounded-md p-5">
          <p className="text-signal-red/60 uppercase tracking-widest text-[10px] font-mono mb-3">// Top Losers (24h)</p>
          <div className="space-y-2">
            {losers.map(m => {
              const p = prices[m.slug];
              return (
                <div key={m.slug} className="flex items-center justify-between font-mono text-sm">
                  <span className="text-off-white">{m.name}</span>
                  <span className="text-signal-red font-bold">▼ {Math.abs(p.changePct24h).toFixed(2)}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Category performance */}
      <section className="mb-8">
        <p className="text-terminal-green/60 uppercase tracking-widest text-[10px] font-mono mb-4">// Performance by Category (24h Avg)</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {CATEGORY_META.map(cat => {
            const catMinerals = minerals.filter(m => m.category === cat.slug);
            const catPrices = catMinerals.map(m => prices[m.slug]).filter(Boolean);
            if (catPrices.length === 0) return null;
            const avg = catPrices.reduce((s, p) => s + p.changePct24h, 0) / catPrices.length;
            const isPos = avg >= 0;
            return (
              <div key={cat.slug} className="bg-charcoal-gray border border-gray-700/60 rounded-md p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
                  <p className="text-gray-400 font-mono text-xs">{cat.label}</p>
                </div>
                <p className={`font-mono text-xl font-bold ${isPos ? 'text-terminal-green' : 'text-signal-red'}`}>
                  {isPos ? '▲' : '▼'} {Math.abs(avg).toFixed(2)}%
                </p>
                <p className="text-gray-700 text-xs font-mono mt-1">{catPrices.length} minerals</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Full table */}
      <section>
        <p className="text-terminal-green/60 uppercase tracking-widest text-[10px] font-mono mb-4">// Complete Price Table</p>
        <div className="bg-charcoal-gray border border-gray-700/60 rounded-md p-5">
          <MineralTable minerals={minerals} prices={prices} />
        </div>
      </section>
    </>
  );
}

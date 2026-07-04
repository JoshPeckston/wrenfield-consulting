import { getAllMinerals, getAllPrices, CATEGORY_META } from '@/lib/minerals/data';
import Link from 'next/link';
import MineralCard from '@/components/minerals/MineralCard';
import PriceTicker from '@/components/minerals/PriceTicker';
import MineralSearch from '@/components/minerals/MineralSearch';
import MineralTable from '@/components/minerals/MineralTable';

export const metadata = {
  title: 'Mineral Prices Info Centre | Wrenfield Consulting',
  description: 'Real-time mineral prices, supply chain intelligence, market analysis, and interactive tools for 20+ commodities.',
};

export default async function MineralsHub() {
  const [minerals, prices] = await Promise.all([getAllMinerals(), getAllPrices()]);

  const tickerItems = minerals
    .filter(m => prices[m.slug])
    .map(m => ({ mineral: m, price: prices[m.slug] }));

  const featuredSlugs = ['gold', 'copper', 'lithium', 'silver', 'nickel', 'neodymium'];
  const featured = featuredSlugs
    .map(slug => minerals.find(m => m.slug === slug))
    .filter(Boolean) as typeof minerals;

  return (
    <>
      {/* Ticker */}
      <div className="-mx-6 -mt-8 mb-8">
        <PriceTicker items={tickerItems} />
      </div>

      {/* Hero */}
      <div className="mb-12">
        <p className="text-terminal-green/60 font-mono text-xs uppercase tracking-widest mb-2">// Mineral Prices Info Centre</p>
        <h1 className="text-4xl md:text-5xl font-mono font-bold text-off-white mb-4">
          The complete resource<br />
          <span className="text-terminal-green">for mineral markets.</span>
        </h1>
        <p className="text-light-gray max-w-2xl mb-6">
          Live prices across all weight units and currencies. Deep supply chain intelligence. Market analysis, demand forecasts, and geopolitical risk — for 20 minerals and growing.
        </p>
        <MineralSearch minerals={minerals} />
      </div>

      {/* Featured minerals */}
      <section className="mb-12">
        <p className="text-terminal-green/60 uppercase tracking-widest text-[10px] font-mono mb-4">// Most Watched</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map(m => (
            <MineralCard key={m.slug} mineral={m} price={prices[m.slug] ?? null} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mb-12">
        <p className="text-terminal-green/60 uppercase tracking-widest text-[10px] font-mono mb-4">// Browse by Category</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORY_META.map(cat => (
            <Link
              key={cat.slug}
              href={`/minerals/categories/${cat.slug}`}
              className="group block bg-charcoal-gray border border-gray-700/60 rounded-md p-5 hover:border-terminal-green/60 transition-all hover:bg-terminal-green/5"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: cat.color }} />
                <h3 className="font-mono font-bold text-off-white group-hover:text-terminal-green transition-colors">{cat.label}</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{cat.description}</p>
              <p className="text-terminal-green/50 font-mono text-xs mt-3">
                {minerals.filter(m => m.category === cat.slug).length} minerals →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Full price table */}
      <section className="mb-12">
        <p className="text-terminal-green/60 uppercase tracking-widest text-[10px] font-mono mb-4">// All Mineral Prices</p>
        <div className="bg-charcoal-gray border border-gray-700/60 rounded-md p-5">
          <MineralTable minerals={minerals} prices={prices} />
        </div>
      </section>

      {/* Tools CTA */}
      <section className="mb-8">
        <p className="text-terminal-green/60 uppercase tracking-widest text-[10px] font-mono mb-4">// Tools</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { href: '/minerals/tools/price-calculator', label: 'Price Calculator', desc: 'Convert any quantity to any weight unit and currency instantly.' },
            { href: '/minerals/tools/comparison', label: 'Comparison Table', desc: 'Compare up to 6 minerals side by side with sortable metrics.' },
            { href: '/minerals/tools/unit-converter', label: 'Unit Converter', desc: 'Convert between troy oz, gram, kg, tonne, lb, and more.' },
          ].map(t => (
            <Link
              key={t.href}
              href={t.href}
              className="group block bg-charcoal-gray border border-gray-700/60 rounded-md p-5 hover:border-terminal-green/60 transition-all hover:bg-terminal-green/5"
            >
              <h3 className="font-mono font-bold text-off-white group-hover:text-terminal-green transition-colors mb-1">{t.label}</h3>
              <p className="text-gray-500 text-sm">{t.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

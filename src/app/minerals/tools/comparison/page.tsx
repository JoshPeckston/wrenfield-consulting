import { getAllMinerals, getAllPrices } from '@/lib/minerals/data';
import MineralTable from '@/components/minerals/MineralTable';

export const metadata = { title: 'Mineral Comparison | Mineral Prices Info Centre' };

export default async function ComparisonPage() {
  const [minerals, prices] = await Promise.all([getAllMinerals(), getAllPrices()]);

  return (
    <>
      <div className="mb-8">
        <p className="text-terminal-green/60 font-mono text-xs uppercase tracking-widest mb-2">// Tools</p>
        <h1 className="text-4xl font-mono font-bold text-off-white mb-3">Comparison Table</h1>
        <p className="text-light-gray max-w-xl">
          Sort and compare all tracked minerals by price, 24h change, 7-day performance, and 52-week ranges. Click any column header to sort.
        </p>
      </div>
      <div className="bg-charcoal-gray border border-gray-700/60 rounded-md p-5">
        <MineralTable minerals={minerals} prices={prices} />
      </div>
    </>
  );
}

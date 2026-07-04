import { notFound } from 'next/navigation';
import { getMineralsByCategory, getAllPrices, CATEGORY_META } from '@/lib/minerals/data';
import type { MineralCategory } from '@/lib/minerals/types';
import MineralCard from '@/components/minerals/MineralCard';
import MineralTable from '@/components/minerals/MineralTable';

const VALID_CATEGORIES: MineralCategory[] = ['precious', 'battery', 'base', 'rare-earth', 'industrial', 'critical'];

export async function generateStaticParams() {
  return VALID_CATEGORIES.map(slug => ({ 'category-slug': slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ 'category-slug': string }> }) {
  const { 'category-slug': slug } = await params;

  if (!VALID_CATEGORIES.includes(slug as MineralCategory)) notFound();

  const category = slug as MineralCategory;
  const catMeta = CATEGORY_META.find(c => c.slug === category)!;

  const [minerals, allPrices] = await Promise.all([
    getMineralsByCategory(category),
    getAllPrices(),
  ]);

  const prices = Object.fromEntries(minerals.map(m => [m.slug, allPrices[m.slug]]));

  return (
    <>
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-3 w-3 rounded-full" style={{ backgroundColor: catMeta.color }} />
          <p className="text-terminal-green/60 font-mono text-xs uppercase tracking-widest">// Category</p>
        </div>
        <h1 className="text-4xl font-mono font-bold text-off-white mb-3">{catMeta.label}</h1>
        <p className="text-light-gray max-w-2xl">{catMeta.description}</p>
      </div>

      <section className="mb-10">
        <p className="text-terminal-green/60 uppercase tracking-widest text-[10px] font-mono mb-4">// {minerals.length} Minerals</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {minerals.map(m => (
            <MineralCard key={m.slug} mineral={m} price={prices[m.slug] ?? null} />
          ))}
        </div>
      </section>

      <section>
        <p className="text-terminal-green/60 uppercase tracking-widest text-[10px] font-mono mb-4">// Price Table</p>
        <div className="bg-charcoal-gray border border-gray-700/60 rounded-md p-5">
          <MineralTable minerals={minerals} prices={prices} />
        </div>
      </section>
    </>
  );
}

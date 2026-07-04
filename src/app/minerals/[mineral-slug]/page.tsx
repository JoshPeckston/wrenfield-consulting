import { notFound } from 'next/navigation';
import { getMineralBySlug, getPriceSnapshot, getHistoricalData, getSupplyChainData, getFxRates, getAllMinerals, getMineralsByCategory } from '@/lib/minerals/data';
import { formatPrice } from '@/lib/minerals/formatters';
import { allUnitPrices, UNIT_LABELS, UNIT_ABBREVIATIONS } from '@/lib/minerals/conversions';
import MineralHero from '@/components/minerals/MineralHero';
import PriceChart from '@/components/minerals/PriceChart';
import PriceCalculator from '@/components/minerals/PriceCalculator';
import PriceDriversList from '@/components/minerals/PriceDriversList';
import SectorDemandChart from '@/components/minerals/SectorDemandChart';
import SupplyChainTable from '@/components/minerals/SupplyChainTable';
import SupplyRiskIndicator from '@/components/minerals/SupplyRiskIndicator';
import ESGNotesPanel from '@/components/minerals/ESGNotesPanel';
import MetricCard from '@/components/minerals/MetricCard';
import MineralCard from '@/components/minerals/MineralCard';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ 'mineral-slug': string }> }) {
  const { 'mineral-slug': slug } = await params;
  const mineral = await getMineralBySlug(slug);
  if (!mineral) return { title: 'Mineral Not Found' };
  return {
    title: `${mineral.name} Price Today | Mineral Prices Info Centre`,
    description: `Live ${mineral.name} price in USD, EUR, GBP and more. Charts, supply chain data, weight calculator and market analysis for ${mineral.name} (${mineral.symbol}).`,
  };
}

export async function generateStaticParams() {
  const minerals = await getAllMinerals();
  return minerals.map(m => ({ 'mineral-slug': m.slug }));
}

export default async function MineralDetailPage({ params }: { params: Promise<{ 'mineral-slug': string }> }) {
  const { 'mineral-slug': slug } = await params;

  const [mineral, price, history, supplyChain, fxRates] = await Promise.all([
    getMineralBySlug(slug),
    getPriceSnapshot(slug),
    getHistoricalData(slug),
    getSupplyChainData(slug),
    getFxRates(),
  ]);

  if (!mineral) notFound();

  const unitPrices = price ? allUnitPrices(price.priceUSD, price.unit) : null;

  const relatedMinerals = await getMineralsByCategory(mineral.category);
  const others = relatedMinerals.filter(m => m.slug !== slug).slice(0, 4);
  const otherPrices = await Promise.all(others.map(m => getPriceSnapshot(m.slug)));

  return (
    <>
      <div className="mb-2">
        <Link href="/minerals" className="text-gray-600 font-mono text-xs hover:text-terminal-green transition-colors">
          ← Minerals Hub
        </Link>
      </div>

      {/* Hero */}
      <MineralHero mineral={mineral} price={price} />

      {/* Description */}
      <section className="mb-8">
        <p className="text-terminal-green/60 uppercase tracking-widest text-[10px] font-mono mb-3">// Overview</p>
        <p className="text-light-gray leading-relaxed max-w-3xl">{mineral.longDescription}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {mineral.industries.map(ind => (
            <span key={ind} className="text-xs font-mono px-2 py-0.5 rounded bg-gray-800 text-gray-400 border border-gray-700">{ind}</span>
          ))}
        </div>
      </section>

      {/* Chart */}
      {history.length > 0 && (
        <section className="mb-8">
          <PriceChart data={history} unit={UNIT_ABBREVIATIONS[mineral.unit]} />
        </section>
      )}

      {/* Key metrics */}
      {price && unitPrices && (
        <section className="mb-8">
          <p className="text-terminal-green/60 uppercase tracking-widest text-[10px] font-mono mb-3">// Key Metrics</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <MetricCard label="52-Week High" value={formatPrice(price.high52w)} />
            <MetricCard label="52-Week Low" value={formatPrice(price.low52w)} />
            <MetricCard label="7-Day Change" value={`${price.changePct7d >= 0 ? '+' : ''}${price.changePct7d.toFixed(2)}%`} accent={price.changePct7d >= 0} />
            <MetricCard label="30-Day Change" value={`${price.changePct30d >= 0 ? '+' : ''}${price.changePct30d.toFixed(2)}%`} accent={price.changePct30d >= 0} />
          </div>
          <div className="bg-charcoal-gray border border-gray-700/60 rounded-md p-5">
            <p className="text-terminal-green/60 uppercase tracking-widest text-[10px] font-mono mb-3">// Price Per Weight Unit (USD)</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {Object.entries(unitPrices).map(([unit, val]) => (
                <div key={unit} className={`${unit === mineral.unit ? 'text-terminal-green' : 'text-light-gray'}`}>
                  <p className="text-gray-600 text-[10px] font-mono uppercase tracking-wider">{UNIT_LABELS[unit as keyof typeof UNIT_LABELS]}</p>
                  <p className="font-mono text-sm font-bold mt-0.5">{formatPrice(val)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Calculator */}
      {price && (
        <section className="mb-8">
          <PriceCalculator price={price} fxRates={fxRates} />
        </section>
      )}

      {/* Market Intelligence */}
      <section className="mb-8">
        <p className="text-terminal-green/60 uppercase tracking-widest text-[10px] font-mono mb-4">// Market Intelligence</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-charcoal-gray border border-gray-700/60 rounded-md p-5">
            <p className="text-terminal-green/60 uppercase tracking-widest text-[10px] font-mono mb-3">// Price Drivers</p>
            <PriceDriversList drivers={mineral.priceDrivers} />
          </div>
          {mineral.demandSectors && mineral.demandSectors.length > 0 && (
            <SectorDemandChart sectors={mineral.demandSectors} />
          )}
        </div>
      </section>

      {/* Supply Chain */}
      {supplyChain && supplyChain.topProducers.length > 0 && supplyChain.topProducers[0].annualProductionTonnes > 0 && (
        <section className="mb-8">
          <p className="text-terminal-green/60 uppercase tracking-widest text-[10px] font-mono mb-4">// Supply Chain Analysis</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-charcoal-gray border border-gray-700/60 rounded-md p-5">
              <p className="text-terminal-green/60 uppercase tracking-widest text-[10px] font-mono mb-3">// Top Producers</p>
              <SupplyChainTable producers={supplyChain.topProducers} />
            </div>
            <div className="space-y-4">
              <div className="bg-charcoal-gray border border-gray-700/60 rounded-md p-5">
                <p className="text-terminal-green/60 uppercase tracking-widest text-[10px] font-mono mb-3">// Supply Risk</p>
                <SupplyRiskIndicator score={supplyChain.supplyRiskScore} />
                <div className="mt-4 space-y-2">
                  {supplyChain.geopoliticalNotes.slice(0, 3).map((note, i) => (
                    <p key={i} className="text-gray-500 text-xs leading-relaxed flex gap-2">
                      <span className="text-terminal-green/40 shrink-0">▸</span>{note}
                    </p>
                  ))}
                </div>
              </div>
              <div className="bg-charcoal-gray border border-gray-700/60 rounded-md p-4">
                <p className="text-gray-600 text-[10px] font-mono uppercase tracking-wider mb-1">Processing</p>
                <p className="text-gray-400 text-xs leading-relaxed">{supplyChain.processingConcentration}</p>
              </div>
              <div className="bg-charcoal-gray border border-gray-700/60 rounded-md p-4">
                <p className="text-gray-600 text-[10px] font-mono uppercase tracking-wider mb-1">Global Reserves</p>
                <p className="text-off-white font-mono text-sm">{supplyChain.reservesEstimate}</p>
              </div>
            </div>
          </div>

          {/* Major companies */}
          {supplyChain.majorCompanies.length > 0 && (
            <div className="mt-4 bg-charcoal-gray border border-gray-700/60 rounded-md p-5">
              <p className="text-terminal-green/60 uppercase tracking-widest text-[10px] font-mono mb-3">// Major Companies</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {supplyChain.majorCompanies.map(c => (
                  <div key={c.name} className="border border-gray-800 rounded p-3">
                    <p className="text-off-white font-mono text-sm font-bold">{c.name}</p>
                    {c.ticker && <p className="text-terminal-green/60 font-mono text-xs">{c.ticker}</p>}
                    <p className="text-gray-600 text-xs mt-0.5">{c.country}{c.marketSharePct ? ` · ${c.marketSharePct}% market share` : ''}</p>
                    {c.notes && <p className="text-gray-600 text-xs mt-1 leading-relaxed">{c.notes}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* ESG */}
      {mineral.esgNotes && mineral.esgNotes.length > 0 && (
        <section className="mb-8">
          <ESGNotesPanel notes={mineral.esgNotes} />
        </section>
      )}

      {/* Related minerals */}
      {others.length > 0 && (
        <section className="mb-8">
          <p className="text-terminal-green/60 uppercase tracking-widest text-[10px] font-mono mb-4">// Related Minerals</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {others.map((m, i) => (
              <MineralCard key={m.slug} mineral={m} price={otherPrices[i]} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

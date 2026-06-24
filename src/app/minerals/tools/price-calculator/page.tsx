import { getAllMinerals, getAllPrices, getFxRates } from '@/lib/minerals/data';
import PriceCalculatorFull from './_client';

export const metadata = { title: 'Price Calculator | Mineral Prices Info Centre' };

export default async function PriceCalculatorPage() {
  const [minerals, prices, fxRates] = await Promise.all([getAllMinerals(), getAllPrices(), getFxRates()]);
  return (
    <>
      <div className="mb-8">
        <p className="text-terminal-green/60 font-mono text-xs uppercase tracking-widest mb-2">// Tools</p>
        <h1 className="text-4xl font-mono font-bold text-off-white mb-3">Price Calculator</h1>
        <p className="text-light-gray max-w-xl">
          Select a mineral, enter a quantity and weight unit, choose your currency — and see the total value across every weight denomination instantly.
        </p>
      </div>
      <PriceCalculatorFull minerals={minerals} prices={prices} fxRates={fxRates} />
    </>
  );
}

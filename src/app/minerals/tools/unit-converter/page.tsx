import UnitConverter from '@/components/minerals/UnitConverter';

export const metadata = { title: 'Unit Converter | Mineral Prices Info Centre' };

export default function UnitConverterPage() {
  return (
    <>
      <div className="mb-8">
        <p className="text-terminal-green/60 font-mono text-xs uppercase tracking-widest mb-2">// Tools</p>
        <h1 className="text-4xl font-mono font-bold text-off-white mb-3">Unit Converter</h1>
        <p className="text-light-gray max-w-xl">
          Convert between all mineral weight units — troy ounces, grams, kilograms, metric tonnes, pounds, US short tons, and UK long tons.
        </p>
      </div>
      <div className="max-w-md">
        <UnitConverter />
      </div>
      <div className="mt-8 bg-charcoal-gray border border-gray-700/60 rounded-md p-5 max-w-md">
        <p className="text-terminal-green/60 uppercase tracking-widest text-[10px] font-mono mb-3">// Reference Factors (relative to 1 kg)</p>
        <table className="w-full font-mono text-xs">
          <thead><tr className="border-b border-gray-800"><th className="text-left text-gray-600 py-1">Unit</th><th className="text-right text-gray-600 py-1">= kg</th></tr></thead>
          <tbody>
            {[
              ['1 Troy Ounce', '0.0311035'],
              ['1 Gram', '0.001'],
              ['1 Kilogram', '1'],
              ['1 Metric Tonne', '1,000'],
              ['1 Pound', '0.453592'],
              ['1 Short Ton (US)', '907.185'],
              ['1 Long Ton (UK)', '1,016.05'],
            ].map(([unit, val]) => (
              <tr key={unit} className="border-b border-gray-800/40">
                <td className="text-gray-400 py-1.5">{unit}</td>
                <td className="text-terminal-green text-right py-1.5">{val} kg</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

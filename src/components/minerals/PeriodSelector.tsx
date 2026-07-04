'use client';

export type Period = '7D' | '1M' | '3M' | '1Y' | 'ALL';

export const PERIODS: Period[] = ['7D', '1M', '3M', '1Y', 'ALL'];

export default function PeriodSelector({ value, onChange }: { value: Period; onChange: (p: Period) => void }) {
  return (
    <div className="flex gap-1">
      {PERIODS.map(p => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
            value === p
              ? 'bg-terminal-green text-deep-black font-bold'
              : 'text-gray-500 hover:text-terminal-green hover:bg-terminal-green/10'
          }`}
        >
          {p}
        </button>
      ))}
    </div>
  );
}

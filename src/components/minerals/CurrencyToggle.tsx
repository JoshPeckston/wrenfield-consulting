'use client';

import type { Currency } from '@/lib/minerals/types';
import { ALL_CURRENCIES } from '@/lib/minerals/currencies';

export default function CurrencyToggle({ value, onChange }: { value: Currency; onChange: (c: Currency) => void }) {
  return (
    <div className="flex flex-wrap gap-1">
      {ALL_CURRENCIES.map(c => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`px-2.5 py-1 text-xs font-mono rounded border transition-colors ${
            value === c
              ? 'bg-terminal-green/20 text-terminal-green border-terminal-green/50'
              : 'text-gray-500 border-gray-700 hover:text-terminal-green hover:border-terminal-green/30'
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}

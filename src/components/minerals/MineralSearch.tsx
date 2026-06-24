'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { MineralMeta } from '@/lib/minerals/types';

export default function MineralSearch({ minerals }: { minerals: MineralMeta[] }) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  const filtered = query.length >= 1
    ? minerals.filter(m =>
        m.name.toLowerCase().includes(query.toLowerCase()) ||
        m.symbol.toLowerCase().includes(query.toLowerCase()) ||
        m.tags.some(t => t.includes(query.toLowerCase()))
      ).slice(0, 8)
    : [];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function select(slug: string) {
    setQuery('');
    setOpen(false);
    router.push(`/minerals/${slug}`);
  }

  return (
    <div ref={ref} className="relative w-full max-w-md">
      <div className="flex items-center border border-gray-700 rounded-md bg-charcoal-gray focus-within:border-terminal-green/60 transition-colors">
        <span className="text-terminal-green/40 font-mono text-sm px-3">⌕</span>
        <input
          type="text"
          placeholder="Search minerals — gold, lithium, copper..."
          value={query}
          onChange={e => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          className="flex-1 bg-transparent py-2.5 pr-3 text-sm font-mono text-off-white placeholder:text-gray-600 outline-none"
        />
      </div>
      {open && filtered.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-charcoal-gray border border-terminal-green/30 rounded-md shadow-xl z-50 overflow-hidden">
          {filtered.map(m => (
            <button
              key={m.slug}
              onClick={() => select(m.slug)}
              className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-terminal-green/10 text-left transition-colors"
            >
              <span className="text-terminal-green/50 font-mono text-xs w-6">{m.symbol}</span>
              <span className="text-off-white font-mono text-sm">{m.name}</span>
              <span className="text-gray-600 text-xs ml-auto capitalize">{m.category.replace('-', ' ')}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

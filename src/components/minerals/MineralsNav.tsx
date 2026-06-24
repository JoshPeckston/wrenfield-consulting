'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const categories = [
  { slug: 'precious', label: 'Precious Metals' },
  { slug: 'battery', label: 'Battery & EV Metals' },
  { slug: 'base', label: 'Base Metals' },
  { slug: 'rare-earth', label: 'Rare Earth Elements' },
  { slug: 'industrial', label: 'Industrial Minerals' },
  { slug: 'critical', label: 'Critical & Strategic' },
];

const tools = [
  { href: '/minerals/tools/price-calculator', label: 'Price Calculator' },
  { href: '/minerals/tools/comparison', label: 'Comparison Table' },
  { href: '/minerals/tools/unit-converter', label: 'Unit Converter' },
];

export default function MineralsNav() {
  const pathname = usePathname();
  const [catOpen, setCatOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  const linkClass = (href: string) =>
    `text-xs font-mono uppercase tracking-wider transition-colors hover:text-terminal-green ${
      pathname === href ? 'text-terminal-green' : 'text-gray-400'
    }`;

  return (
    <nav className="sticky top-0 z-40 bg-deep-black/95 border-b border-terminal-green/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 flex items-center gap-6 h-10 overflow-x-auto">
        <Link href="/minerals" className={linkClass('/minerals')}>Hub</Link>
        <Link href="/minerals/market-overview" className={linkClass('/minerals/market-overview')}>Market Overview</Link>

        {/* Categories dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setCatOpen(true)}
          onMouseLeave={() => setCatOpen(false)}
        >
          <button className="text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-terminal-green transition-colors flex items-center gap-1">
            Categories <span className="text-[8px]">▼</span>
          </button>
          {catOpen && (
            <div className="absolute top-full left-0 mt-1 bg-charcoal-gray border border-terminal-green/30 rounded-md shadow-xl z-50 w-48 py-1">
              {categories.map(c => (
                <Link
                  key={c.slug}
                  href={`/minerals/categories/${c.slug}`}
                  className="block px-4 py-2 text-xs font-mono text-gray-300 hover:text-terminal-green hover:bg-terminal-green/10 transition-colors"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link href="/minerals/supply-chain" className={linkClass('/minerals/supply-chain')}>Supply Chain</Link>

        {/* Tools dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setToolsOpen(true)}
          onMouseLeave={() => setToolsOpen(false)}
        >
          <button className="text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-terminal-green transition-colors flex items-center gap-1">
            Tools <span className="text-[8px]">▼</span>
          </button>
          {toolsOpen && (
            <div className="absolute top-full left-0 mt-1 bg-charcoal-gray border border-terminal-green/30 rounded-md shadow-xl z-50 w-48 py-1">
              {tools.map(t => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="block px-4 py-2 text-xs font-mono text-gray-300 hover:text-terminal-green hover:bg-terminal-green/10 transition-colors"
                >
                  {t.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link href="/minerals/data-sources" className={`${linkClass('/minerals/data-sources')} ml-auto shrink-0`}>
          Data Sources
        </Link>
      </div>
    </nav>
  );
}

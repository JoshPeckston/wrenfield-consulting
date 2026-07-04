import type { MineralCategory } from '@/lib/minerals/types';

const CATEGORY_STYLES: Record<MineralCategory, string> = {
  precious: 'bg-yellow-900/30 text-yellow-400 border-yellow-600/30',
  battery: 'bg-steel-blue/10 text-steel-blue border-steel-blue/30',
  base: 'bg-gray-700/30 text-gray-300 border-gray-500/30',
  'rare-earth': 'bg-purple-900/30 text-purple-300 border-purple-600/30',
  industrial: 'bg-amber-900/30 text-amber-400 border-amber-600/30',
  critical: 'bg-signal-red/10 text-signal-red border-signal-red/30',
};

const CATEGORY_LABELS: Record<MineralCategory, string> = {
  precious: 'Precious',
  battery: 'Battery / EV',
  base: 'Base Metal',
  'rare-earth': 'Rare Earth',
  industrial: 'Industrial',
  critical: 'Critical',
};

export default function CategoryBadge({ category, size = 'sm' }: { category: MineralCategory; size?: 'xs' | 'sm' }) {
  const base = size === 'xs' ? 'text-[10px] px-1.5 py-0.5' : 'text-xs px-2 py-0.5';
  return (
    <span className={`${base} font-mono rounded border uppercase tracking-wider ${CATEGORY_STYLES[category]}`}>
      {CATEGORY_LABELS[category]}
    </span>
  );
}

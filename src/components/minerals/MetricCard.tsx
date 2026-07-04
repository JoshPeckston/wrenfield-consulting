export default function MetricCard({
  label,
  value,
  sub,
  accent = false,
}: {
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <div className={`bg-charcoal-gray border rounded-md p-4 ${accent ? 'border-terminal-green/40' : 'border-gray-700/60'}`}>
      <p className="text-terminal-green/60 uppercase tracking-wider text-[10px] font-mono mb-1">{label}</p>
      <p className={`text-xl font-mono font-bold ${accent ? 'text-terminal-green' : 'text-off-white'}`}>{value}</p>
      {sub && <p className="text-gray-500 text-xs mt-0.5 font-mono">{sub}</p>}
    </div>
  );
}

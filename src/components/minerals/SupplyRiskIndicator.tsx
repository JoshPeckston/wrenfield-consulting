import { getRiskLabel, getRiskColor, getRiskBgClass } from '@/lib/minerals/risk';

export default function SupplyRiskIndicator({ score }: { score: number }) {
  const label = getRiskLabel(score);
  const badgeClass = getRiskBgClass(score);

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-terminal-green/60 uppercase tracking-wider text-[10px] font-mono">Supply Risk Score</span>
        <span className={`text-xs font-mono px-2 py-0.5 rounded border ${badgeClass}`}>
          {label} ({score}/10)
        </span>
      </div>
      <div className="w-full h-2 rounded-full bg-gray-800 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${score * 10}%`,
            background: `linear-gradient(90deg, #00C77D, ${getRiskColor(score)})`,
          }}
        />
      </div>
    </div>
  );
}

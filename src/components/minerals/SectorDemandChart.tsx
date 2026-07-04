'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

interface SectorShare {
  sector: string;
  share: number;
}

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-charcoal-gray border border-terminal-green/40 rounded px-3 py-2 text-xs font-mono shadow-xl">
      <p className="text-off-white">{payload[0]?.payload?.sector}</p>
      <p className="text-terminal-green font-bold">{payload[0]?.value}%</p>
    </div>
  );
}

export default function SectorDemandChart({ sectors }: { sectors: SectorShare[] }) {
  return (
    <div className="bg-charcoal-gray border border-gray-700/60 rounded-md p-5">
      <p className="text-terminal-green/60 uppercase tracking-wider text-[10px] font-mono mb-4">// Demand by Sector</p>
      <ResponsiveContainer width="100%" height={sectors.length * 40 + 20}>
        <BarChart data={sectors} layout="vertical" margin={{ top: 0, right: 40, bottom: 0, left: 8 }}>
          <XAxis
            type="number"
            domain={[0, 100]}
            tick={{ fill: '#F2F2F2', opacity: 0.3, fontSize: 10, fontFamily: 'Space Grotesk' }}
            tickLine={false}
            axisLine={false}
            tickFormatter={v => `${v}%`}
          />
          <YAxis
            type="category"
            dataKey="sector"
            tick={{ fill: '#F2F2F2', opacity: 0.6, fontSize: 11, fontFamily: 'Space Grotesk' }}
            tickLine={false}
            axisLine={false}
            width={140}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="share" radius={[0, 3, 3, 0]}>
            {sectors.map((_, i) => (
              <Cell key={i} fill={i === 0 ? '#00C77D' : `rgba(0,199,125,${0.6 - i * 0.1})`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

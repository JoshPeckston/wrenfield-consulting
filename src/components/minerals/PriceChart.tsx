'use client';

import { useState, useMemo } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import type { PriceDataPoint } from '@/lib/minerals/types';
import PeriodSelector, { type Period } from './PeriodSelector';

function filterByPeriod(data: PriceDataPoint[], period: Period): PriceDataPoint[] {
  const now = new Date();
  const cutoffs: Record<Period, number> = {
    '7D': 7,
    '1M': 30,
    '3M': 90,
    '1Y': 365,
    'ALL': 99999,
  };
  const cutoff = new Date(now);
  cutoff.setDate(cutoff.getDate() - cutoffs[period]);
  return data.filter(d => new Date(d.date) >= cutoff);
}

function formatAxisDate(date: string, period: Period): string {
  const d = new Date(date);
  if (period === '7D') return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  if (period === '1M') return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  if (period === '3M') return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  return d.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
}

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload || payload.length === 0) return null;
  return (
    <div className="bg-charcoal-gray border border-terminal-green/40 rounded px-3 py-2 text-xs font-mono shadow-xl">
      <p className="text-gray-400 mb-1">{new Date(label).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
      <p className="text-terminal-green font-bold">${Number(payload[0]?.value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 })}</p>
    </div>
  );
}

export default function PriceChart({ data, unit }: { data: PriceDataPoint[]; unit: string }) {
  const [period, setPeriod] = useState<Period>('1Y');

  const filtered = useMemo(() => filterByPeriod(data, period), [data, period]);

  const isPositive = useMemo(() => {
    if (filtered.length < 2) return true;
    return filtered[filtered.length - 1].close >= filtered[0].close;
  }, [filtered]);

  const color = isPositive ? '#00C77D' : '#FF3B30';
  const fillColor = isPositive ? 'rgba(0,199,125,0.08)' : 'rgba(255,59,48,0.08)';

  const tickInterval = Math.max(1, Math.floor(filtered.length / 6));

  return (
    <div className="bg-charcoal-gray border border-gray-700/60 rounded-md p-5">
      <div className="flex items-center justify-between mb-4">
        <p className="text-terminal-green/60 uppercase tracking-wider text-[10px] font-mono">// Price History ({unit})</p>
        <PeriodSelector value={period} onChange={setPeriod} />
      </div>
      {filtered.length === 0 ? (
        <p className="text-gray-600 font-mono text-sm text-center py-12">No data available</p>
      ) : (
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={filtered} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.15} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(242,242,242,0.04)" vertical={false} />
            <XAxis
              dataKey="date"
              tick={{ fill: '#F2F2F2', opacity: 0.3, fontSize: 10, fontFamily: 'Space Grotesk' }}
              tickLine={false}
              axisLine={false}
              interval={tickInterval}
              tickFormatter={d => formatAxisDate(d, period)}
            />
            <YAxis
              tick={{ fill: '#F2F2F2', opacity: 0.3, fontSize: 10, fontFamily: 'Space Grotesk' }}
              tickLine={false}
              axisLine={false}
              width={70}
              tickFormatter={v => `$${Number(v).toLocaleString('en-US', { maximumFractionDigits: 0 })}`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="close"
              stroke={color}
              strokeWidth={1.5}
              fill="url(#chartFill)"
              dot={false}
              activeDot={{ r: 4, fill: color, strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

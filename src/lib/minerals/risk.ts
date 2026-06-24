export function getRiskLabel(score: number): string {
  if (score <= 2) return 'Very Low';
  if (score <= 4) return 'Low';
  if (score <= 6) return 'Moderate';
  if (score <= 8) return 'High';
  return 'Critical';
}

export function getRiskColor(score: number): string {
  if (score <= 2) return '#00C77D';
  if (score <= 4) return '#7BC67E';
  if (score <= 6) return '#F5A623';
  if (score <= 8) return '#FF7B54';
  return '#FF3B30';
}

export function getRiskBgClass(score: number): string {
  if (score <= 2) return 'bg-terminal-green/10 text-terminal-green border-terminal-green/30';
  if (score <= 4) return 'bg-green-700/10 text-green-400 border-green-600/30';
  if (score <= 6) return 'bg-yellow-700/10 text-yellow-400 border-yellow-600/30';
  if (score <= 8) return 'bg-orange-700/10 text-orange-400 border-orange-600/30';
  return 'bg-signal-red/10 text-signal-red border-signal-red/30';
}

export default function PriceDriversList({ drivers }: { drivers: string[] }) {
  return (
    <ul className="space-y-2">
      {drivers.map((driver, i) => (
        <li key={i} className="flex gap-3 text-sm">
          <span className="text-terminal-green font-mono text-xs shrink-0 mt-0.5 select-none">[DRIVER]</span>
          <span className="text-light-gray leading-relaxed">{driver}</span>
        </li>
      ))}
    </ul>
  );
}

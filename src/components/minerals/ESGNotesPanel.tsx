export default function ESGNotesPanel({ notes }: { notes: string[] }) {
  if (!notes || notes.length === 0) return null;
  return (
    <div className="bg-charcoal-gray border border-terminal-green/20 rounded-md p-5">
      <p className="text-terminal-green/60 uppercase tracking-wider text-[10px] font-mono mb-3">// ESG & Environmental Notes</p>
      <ul className="space-y-2">
        {notes.map((note, i) => (
          <li key={i} className="flex gap-3 text-sm">
            <span className="text-terminal-green/50 font-mono text-xs shrink-0 mt-0.5 select-none">▸</span>
            <span className="text-light-gray leading-relaxed">{note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

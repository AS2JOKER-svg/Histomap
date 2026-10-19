/** « Camp contre camp » : deux listes de belligérants (fiche, onglet Guerres). */
export default function Versus({ left, right }) {
  return (
    <div className="mt-3 grid grid-cols-[1fr_auto_1fr] gap-2 items-center">
      <span className="text-[13px] font-semibold text-ink px-2.5 py-2 rounded-lg bg-surface2 leading-snug">{left.join(', ') || '—'}</span>
      <span className="text-[11px] font-extrabold text-danger">VS</span>
      <span className="text-[13px] font-semibold text-ink px-2.5 py-2 rounded-lg bg-surface2 leading-snug">{right.join(', ') || '—'}</span>
    </div>
  )
}

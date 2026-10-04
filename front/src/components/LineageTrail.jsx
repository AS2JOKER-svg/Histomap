import { Link } from 'react-router-dom'
import { useProgress } from '../store/progress'
import Icon from './ui/Icon'

/**
 * « Fil de l'histoire » : les étapes d'une même civilisation d'une époque à
 * l'autre (ex. Royaume franc → France capétienne → Ancien Régime → France).
 *
 * variant="full"    : frise d'étapes cliquables (page fiche)
 * variant="compact" : liens « ← Avant » / « La suite → » (aperçu)
 *
 * `linkTo(ref)` construit le lien d'une étape : vers la fiche, ou vers la
 * frise de l'époque avec mise en évidence (?focus=…).
 */
export default function LineageTrail({ civ, variant = 'full', linkTo }) {
  const lineage = civ.lineage
  const fiches = useProgress((s) => s.fiches)
  if (!lineage) return null

  if (variant === 'compact') {
    return (
      <section>
        <h3 className="eyebrow mb-2.5">Fil de l'histoire · {lineage.label}</h3>
        <div className="grid gap-2">
          {lineage.prev && <StepLink dir="prev" step={lineage.prev} to={linkTo(lineage.prev)} color={civ.color} />}
          {lineage.next && <StepLink dir="next" step={lineage.next} to={linkTo(lineage.next)} color={civ.color} />}
        </div>
      </section>
    )
  }

  const index = lineage.members.findIndex((m) => m.civId === civ.id)
  return (
    <section className="card p-5 sm:p-6 mb-6" aria-labelledby="lineage-title">
      <div className="flex items-center justify-between gap-3 mb-4">
        <h2 id="lineage-title" className="font-display text-lg font-semibold text-ink flex items-center gap-2.5">
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-surface2" style={{ color: civ.color }}>
            <Icon name="timeline" size={17} />
          </span>
          Fil de l'histoire · {lineage.label}
        </h2>
        <span className="text-xs text-muted shrink-0">Étape {index + 1} / {lineage.members.length}</span>
      </div>

      <ol className="flex gap-2 overflow-x-auto no-scrollbar -mx-1 px-1 pb-1">
        {lineage.members.map((m, i) => {
          const current = m.civId === civ.id
          const read = !!fiches[m.civId]
          return (
            <li key={m.civId} className="flex items-center gap-2 shrink-0">
              {i > 0 && <Icon name="chevronRight" size={16} className="text-muted/60 shrink-0" />}
              {current ? (
                <span
                  className="flex flex-col px-3.5 py-2.5 rounded-xl text-white shadow-soft min-w-[9rem]"
                  style={{ background: civ.color }}
                  aria-current="step"
                >
                  <span className="text-[10.5px] font-semibold uppercase tracking-wider opacity-85">{m.epochLabel}</span>
                  <span className="text-sm font-semibold">{m.label}</span>
                </span>
              ) : (
                <Link
                  to={linkTo(m)}
                  className="flex flex-col px-3.5 py-2.5 rounded-xl border border-line bg-surface hover:border-muted/40 transition min-w-[9rem]"
                >
                  <span className="text-[10.5px] font-semibold uppercase tracking-wider text-muted flex items-center gap-1">
                    {m.epochLabel}
                    {read && <Icon name="check" size={12} strokeWidth={2.6} className="text-success" aria-label="lue" />}
                  </span>
                  <span className="text-sm font-medium text-ink">{m.label}</span>
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </section>
  )
}

function StepLink({ dir, step, to, color }) {
  const next = dir === 'next'
  return (
    <Link
      to={to}
      className="group flex items-center gap-3 p-3 rounded-xl border border-line hover:border-muted/40 bg-surface transition"
    >
      {!next && <Icon name="arrowLeft" size={18} className="text-muted shrink-0" />}
      <span className="min-w-0 flex-1">
        <span className="block text-[11px] text-muted">{next ? 'La suite' : 'Avant'} · {step.epochLabel}</span>
        <span className="block text-sm font-medium text-ink truncate">{step.label}</span>
      </span>
      {next && (
        <span className="grid place-items-center w-8 h-8 rounded-full text-white shrink-0 group-hover:translate-x-0.5 transition" style={{ background: color }}>
          <Icon name="arrowRight" size={16} />
        </span>
      )}
    </Link>
  )
}

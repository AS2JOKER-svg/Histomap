import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getEpochs, countCivilizations, findCivilization } from '../lib/data'
import { formatYear } from '../lib/time'
import { PASS_MARK } from '../lib/quiz'
import useDocumentTitle from '../lib/useDocumentTitle'
import PageHeader from '../components/ui/PageHeader'
import Icon from '../components/ui/Icon'
import { useProgress } from '../store/progress'

const STEPS = [
  { icon: 'clock', title: 'Une période', text: 'Antiquité, Moyen Âge…' },
  { icon: 'globe', title: 'Une civilisation', text: 'Europe → France' },
  { icon: 'cards', title: 'Des cartes', text: 'À faire glisser' },
  { icon: 'check', title: 'Un quiz', text: '20 questions, validé dès 15/20' },
]

/** Hub temporel « On avance » : choisir une époque à réviser. */
export default function RevisePage() {
  useDocumentTitle('On avance')
  const epochs = getEpochs()
  const chapters = useProgress((s) => s.chapters)
  const quizzes = useProgress((s) => s.quizzes)

  // Séances en cours (la plus récente d'abord) → « Continuer »
  const inProgress = Object.entries(chapters)
    .filter(([, ch]) => ch.current)
    .map(([id, ch]) => ({ ref: findCivilization(id), ch }))
    .filter((x) => x.ref)

  return (
    <>
      <PageHeader
        eyebrow="On avance · réviser"
        title="Révisez une époque, pas à pas"
        description="Choisissez une période puis une civilisation : des cartes courtes à faire glisser, illustrées de cartes, de dates et de schémas, puis un quiz de 20 questions. Sous 15/20, reprenez le chapitre : de nouvelles cartes et de nouvelles questions vous attendent."
      />

      {inProgress.length > 0 && (
        <section className="mb-8" aria-labelledby="continue-title">
          <h2 id="continue-title" className="eyebrow mb-3">Continuer</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {inProgress.map(({ ref, ch }) => (
              <Link
                key={ref.civ.id}
                to={`/reviser/${ref.epoch.id}/${ref.civ.id}`}
                className="card hoverable p-4 flex items-center gap-4"
              >
                <ProgressRing value={ch.current.pos / Math.max(ch.current.queue.length - 1, 1)} color={ref.civ.color} />
                <span className="min-w-0 flex-1">
                  <span className="block text-[11px] text-muted">{ref.epoch.label}</span>
                  <span className="block font-semibold text-ink truncate">{ref.civ.label}</span>
                  <span className="block text-xs text-muted">Carte {ch.current.pos + 1} / {ch.current.queue.length}</span>
                </span>
                <Icon name="arrowRight" className="text-muted" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Le parcours en 4 étapes */}
      <ol className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        {STEPS.map((s, i) => (
          <li key={s.title} className="card p-4 relative overflow-hidden">
            <span className="absolute right-3 top-2 font-display text-4xl font-bold text-line select-none">{i + 1}</span>
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-surface2 text-accent mb-3">
              <Icon name={s.icon} />
            </span>
            <span className="block text-sm font-semibold text-ink">{s.title}</span>
            <span className="block text-xs text-muted mt-0.5">{s.text}</span>
          </li>
        ))}
      </ol>

      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Choisissez une période</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {epochs.map((epoch, i) => {
          const total = countCivilizations(epoch)
          const civIds = epoch.continents.flatMap((c) => c.civilizations.map((v) => v.id))
          const finished = civIds.filter((id) => chapters[id]?.rounds > 0 || quizzes[id]?.best >= PASS_MARK).length
          const validated = civIds.filter((id) => quizzes[id]?.best >= PASS_MARK).length
          return (
            <motion.div key={epoch.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <Link to={`/reviser/${epoch.id}`} className="group card hoverable p-5 flex items-center gap-4 h-full">
                <ProgressRing value={finished / total} color={epoch.color} label={`${finished}/${total}`} />
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-lg font-semibold text-ink leading-tight">{epoch.label}</span>
                  <span className="block text-xs text-muted mt-0.5">
                    {formatYear(epoch.start)} → {formatYear(epoch.end)}
                  </span>
                  <span className="block text-xs text-muted mt-1.5">
                    {finished ? `${finished} chapitre${finished > 1 ? 's' : ''} fait${finished > 1 ? 's' : ''} sur ${total}` : `${total} chapitres à découvrir`}
                    {validated > 0 && <span className="text-success font-medium"> · {validated} validé{validated > 1 ? 's' : ''} ✓</span>}
                  </span>
                </span>
                <Icon name="chevronRight" className="text-muted group-hover:text-ink group-hover:translate-x-0.5 transition" />
              </Link>
            </motion.div>
          )
        })}
      </div>
    </>
  )
}

/** Anneau de progression (0 → 1). */
export function ProgressRing({ value, color, label, size = 52 }) {
  const r = (size - 8) / 2
  const c = 2 * Math.PI * r
  return (
    <span className="relative shrink-0 grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgb(var(--c-line))" strokeWidth="5" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - Math.min(Math.max(value, 0), 1))}
          style={{ transition: 'stroke-dashoffset .6s ease' }}
        />
      </svg>
      {label && <span className="absolute text-[11px] font-semibold text-ink tabular-nums">{label}</span>}
    </span>
  )
}

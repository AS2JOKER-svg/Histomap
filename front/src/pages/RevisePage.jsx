import { Link } from 'react-router-dom'
import { getEpochs, countCivilizations } from '../lib/data'
import { formatYear } from '../lib/time'
import useDocumentTitle from '../lib/useDocumentTitle'
import PageHeader from '../components/ui/PageHeader'
import Icon from '../components/ui/Icon'
import { useProgress, readCount } from '../store/progress'

const STEPS = [
  { icon: 'clock', title: 'Une période', text: 'Antiquité, Moyen Âge…' },
  { icon: 'globe', title: 'Une civilisation', text: 'Europe → France' },
  { icon: 'cards', title: 'Des fiches', text: 'Courtes, à faire glisser' },
  { icon: 'check', title: 'Un quiz', text: '20 questions, une note' },
]

export default function RevisePage() {
  useDocumentTitle('On avance')
  const epochs = getEpochs()
  const fiches = useProgress((s) => s.fiches)

  return (
    <>
      <PageHeader
        eyebrow="On avance · réviser"
        title="Révisez une époque, pas à pas"
        description="Choisissez une période, une civilisation, parcourez des fiches courtes illustrées de cartes et de dates… puis testez-vous. Sous 15/20, reprenez le chapitre : de nouvelles fiches et de nouvelles questions vous attendent."
      />

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

      <div className="flex flex-wrap items-end justify-between gap-3 mb-4">
        <div>
          <p className="eyebrow mb-1">Hub temporel · aperçu</p>
          <h2 className="font-display text-2xl font-semibold text-ink">Par où commencer ?</h2>
        </div>
        <span
          className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg text-warning"
          style={{ background: 'rgb(var(--c-warning) / .14)' }}
        >
          <Icon name="sparkles" size={14} /> Révisions & quiz : sprints 5 et 6
        </span>
      </div>

      <p className="text-sm text-muted mb-5 max-w-2xl">
        Les fiches de révision et les quiz arrivent bientôt. En attendant, chaque période ouvre sa frise
        et ses fiches détaillées.
      </p>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {epochs.map((epoch) => (
          <Link
            key={epoch.id}
            to={`/frise/${epoch.id}`}
            className="group card hoverable p-5 flex items-center gap-4"
          >
            <span
              className="shrink-0 w-12 h-12 rounded-2xl grid place-items-center text-white"
              style={{ background: `linear-gradient(140deg, ${epoch.color}, ${epoch.color}c0)` }}
            >
              <Icon name="layers" size={22} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-display text-lg font-semibold text-ink leading-tight">{epoch.label}</span>
              <span className="block text-xs text-muted mt-0.5">
                {formatYear(epoch.start)} → {formatYear(epoch.end)} · {countCivilizations(epoch)} civilisations
              </span>
              {/* Progression : fiches lues (les révisions s'y ajouteront au sprint 5) */}
              <span className="mt-2.5 flex items-center gap-2">
                <span className="flex-1 block h-1.5 rounded-full bg-surface2 overflow-hidden">
                  <span
                    className="block h-full rounded-full"
                    style={{ background: epoch.color, width: `${(readCount(fiches, epoch) / countCivilizations(epoch)) * 100}%` }}
                  />
                </span>
                <span className="text-[11px] text-muted tabular-nums">{readCount(fiches, epoch)}/{countCivilizations(epoch)}</span>
              </span>
            </span>
            <Icon name="chevronRight" className="text-muted group-hover:text-ink group-hover:translate-x-0.5 transition" />
          </Link>
        ))}
      </div>
    </>
  )
}

import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getEpoch, getEpochs } from '../lib/data'
import { formatYear } from '../lib/time'
import { chapterSize, isHandwritten } from '../lib/revision'
import { PASS_MARK } from '../lib/quiz'
import useDocumentTitle from '../lib/useDocumentTitle'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import PageHeader from '../components/ui/PageHeader'
import Icon from '../components/ui/Icon'
import { useProgress } from '../store/progress'
import { ProgressRing } from './RevisePage'
import NotFoundPage from './NotFoundPage'
import { solidBg } from '../lib/color'

/** Choisir une civilisation (chapitre) dans une époque, par continent. */
export default function ReviseEpochPage() {
  const { epochId } = useParams()
  const epoch = getEpoch(epochId)
  useDocumentTitle(epoch ? `Réviser · ${epoch.label}` : 'Époque introuvable')
  const chapters = useProgress((s) => s.chapters)
  const quizzes = useProgress((s) => s.quizzes)
  const [continentId, setContinentId] = useState(null)

  if (!epoch) return <NotFoundPage title="Époque introuvable" />

  const continents = epoch.continents.filter((c) => !continentId || c.id === continentId)
  const civIds = epoch.continents.flatMap((c) => c.civilizations.map((v) => v.id))
  const finished = civIds.filter((id) => chapters[id]?.rounds > 0 || quizzes[id]?.best >= PASS_MARK).length
  const validated = civIds.filter((id) => quizzes[id]?.best >= PASS_MARK).length

  return (
    <section>
      <Breadcrumbs items={[{ label: 'On avance', to: '/reviser' }, { label: epoch.label }]} />
      <PageHeader
        eyebrow={`${formatYear(epoch.start)} → ${formatYear(epoch.end)}`}
        color={epoch.color}
        title={`Réviser : ${epoch.label}`}
        description={`Choisissez une civilisation : des cartes à faire glisser, puis un quiz de 20 questions (validé dès ${PASS_MARK}/20).${validated ? ` ${validated} chapitre${validated > 1 ? "s" : ""} validé${validated > 1 ? "s" : ""} ici.` : ""}`}
        actions={<ProgressRing value={finished / civIds.length} color={epoch.color} label={`${finished}/${civIds.length}`} size={60} />}
      />

      {/* Autres époques */}
      <nav aria-label="Autres époques" className="flex gap-1.5 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 mb-5">
        {getEpochs().map((e) => (
          <Link
            key={e.id}
            to={`/reviser/${e.id}`}
            aria-current={e.id === epoch.id ? 'page' : undefined}
            className={`shrink-0 h-9 px-3.5 rounded-xl text-sm font-medium border transition ${
              e.id === epoch.id ? 'text-white border-transparent' : 'bg-surface border-line text-muted hover:text-ink'
            }`}
            style={e.id === epoch.id ? { background: solidBg(e.color) } : undefined}
          >
            {e.label}
          </Link>
        ))}
      </nav>

      {/* Filtre continent */}
      <div className="flex gap-1.5 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 mb-6" role="group" aria-label="Continent">
        {[{ id: null, label: 'Tous' }, ...epoch.continents].map((c) => (
          <button
            key={c.id ?? 'all'}
            type="button"
            onClick={() => setContinentId(c.id)}
            aria-pressed={continentId === c.id}
            className={`shrink-0 h-9 px-3.5 rounded-xl text-sm font-medium transition ${continentId === c.id ? 'bg-ink text-bg' : 'bg-surface2 text-muted hover:text-ink'}`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        {continents.map((continent) => (
          <section key={continent.id} aria-labelledby={`cont-${continent.id}`}>
            <h2 id={`cont-${continent.id}`} className="eyebrow mb-3">{continent.label}</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {continent.civilizations.map((civ, i) => (
                <ChapterCard key={civ.id} epoch={epoch} continent={continent} civ={civ} chapter={chapters[civ.id]} quiz={quizzes[civ.id]} index={i} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}

function ChapterCard({ epoch, continent, civ, chapter, quiz, index }) {
  const validated = quiz?.best >= PASS_MARK
  const size = chapterSize({ epoch, continent, civ })
  const status = chapter?.current
    ? { label: `En cours · ${chapter.current.pos + 1}/${chapter.current.queue.length}`, tone: 'accent' }
    : !chapter
    ? validated
      ? { label: 'Validé au quiz', tone: 'success' }
      : { label: 'Nouveau', tone: 'muted' }
    : chapter.current
      ? { label: `En cours · ${chapter.current.pos + 1}/${chapter.current.queue.length}`, tone: 'accent' }
      : chapter.rounds === 1 && size.tier2 > 0
        ? { label: `Niveau 2 : ${size.tier2} nouvelles cartes`, tone: 'warning' }
        : { label: chapter.rounds > 1 ? `Terminé ×${chapter.rounds}` : 'Terminé', tone: 'success' }
  const toneStyle = {
    muted: 'bg-surface2 text-muted',
    accent: 'bg-accent/10 text-accent',
    warning: 'bg-warning/15 text-warning',
    success: 'bg-success/10 text-success',
  }[status.tone]

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(index * 0.03, 0.3) }}>
      <Link to={`/reviser/${epoch.id}/${civ.id}`} className="group card hoverable flex flex-col h-full overflow-hidden">
        <span className="h-1.5" style={{ background: civ.color }} />
        <span className="p-4 flex flex-col flex-1">
          <span className="flex items-start justify-between gap-2">
            <span className="font-semibold text-ink leading-snug">{civ.label}</span>
            {validated && (
              <span className="grid place-items-center w-6 h-6 rounded-full bg-success text-white shrink-0" title="Chapitre validé au quiz">
                <Icon name="check" size={13} strokeWidth={2.8} />
              </span>
            )}
          </span>
          <span className="text-xs text-muted mt-0.5">{civ.period}</span>
          <span className="mt-3 flex flex-wrap items-center gap-1.5">
            <span className={`text-[11px] font-semibold px-2 py-1 rounded-md ${toneStyle}`}>{status.label}</span>
            {isHandwritten(civ.id) && (
              <span className="text-[11px] font-semibold px-2 py-1 rounded-md bg-accent/10 text-accent inline-flex items-center gap-1">
                <Icon name="star" size={11} /> Enrichi
              </span>
            )}
            {quiz?.best != null && (
              <span className={`text-[11px] font-semibold px-2 py-1 rounded-md tabular-nums ${validated ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'}`}>
                Quiz {quiz.best}/20
              </span>
            )}
            <span className="text-[11px] text-muted ml-auto">{size.tier1} cartes</span>
          </span>
        </span>
      </Link>
    </motion.div>
  )
}

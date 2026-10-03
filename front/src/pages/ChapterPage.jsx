import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getCivilization } from '../lib/data'
import { buildDeck, chapterCards, chapterSize } from '../lib/revision'
import { useProgress } from '../store/progress'
import useDocumentTitle from '../lib/useDocumentTitle'
import Icon from '../components/ui/Icon'
import CardDeck from '../components/revision/CardDeck'
import NotFoundPage from './NotFoundPage'

/**
 * Chapitre de révision (plein écran) : paquet de cartes puis écran de fin.
 * La séance est sauvegardée carte par carte : on peut quitter et reprendre.
 */
export default function ChapterPage() {
  const { epochId, civId } = useParams()
  const ref = getCivilization(epochId, civId)
  useDocumentTitle(ref ? `Réviser · ${ref.civ.label}` : 'Chapitre introuvable')
  if (!ref) return <NotFoundPage title="Chapitre introuvable" text="Cette civilisation n'existe pas dans cette époque." />
  return createPortal(<Chapter key={civId} refCiv={ref} />, document.body)
}

function Chapter({ refCiv }) {
  const { epoch, civ } = refCiv
  const navigate = useNavigate()
  const chapter = useProgress((s) => s.chapters[civ.id])
  const startChapter = useProgress((s) => s.startChapter)
  const answerCard = useProgress((s) => s.answerCard)
  const previousCard = useProgress((s) => s.previousCard)
  const finishChapter = useProgress((s) => s.finishChapter)
  const setLast = useProgress((s) => s.setLast)
  const [done, setDone] = useState(null) // résultat affiché après « Terminer »

  const byId = useMemo(() => Object.fromEntries(chapterCards(refCiv).map((c) => [c.id, c])), [refCiv])

  // Pas de séance en cours → on en démarre une (niveau selon les passages déjà faits)
  const start = () => {
    const round = chapter?.rounds ?? 0
    const deck = buildDeck(refCiv, { round, toReview: chapter?.toReview ?? [] })
    startChapter(civ.id, round, deck.map((c) => c.id))
  }
  useEffect(() => {
    if (!chapter?.current && !done) start()
  }, [chapter?.current, done]) // eslint-disable-line react-hooks/exhaustive-deps

  const current = chapter?.current
  // Cartes de la séance (on ignore celles qui n'existeraient plus après une mise à jour du contenu)
  const cards = useMemo(() => (current?.queue ?? []).map((id) => byId[id]).filter(Boolean), [current?.queue, byId])
  const pos = Math.min(current?.pos ?? 0, Math.max(cards.length - 1, 0))

  // Bloque le défilement de la page derrière le plein écran
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  useEffect(() => {
    if (!current) return
    setLast({
      path: `/reviser/${epoch.id}/${civ.id}`,
      kind: 'revision',
      title: civ.label,
      subtitle: `Révision · carte ${pos + 1} / ${cards.length}`,
      color: civ.color,
    })
  }, [pos, cards.length, current, epoch.id, civ, setLast])

  const finish = () => {
    setDone({ round: current.round, total: cards.length - 2, review: current.review.length })
    finishChapter(civ.id)
  }

  const close = () => navigate(`/reviser/${epoch.id}`)

  return (
    <div className="fixed inset-0 z-50 bg-bg flex flex-col" role="dialog" aria-label={`Révision : ${civ.label}`}>
      {/* Halo de couleur */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{ background: civ.color }}
      />

      {/* Barre du haut */}
      <header className="relative shrink-0 px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-2 max-w-[560px] w-full mx-auto">
        <div className="flex items-center gap-3">
          <button onClick={close} className="btn-icon -ml-2" aria-label="Quitter (la progression est gardée)" title="Quitter (la progression est gardée)">
            <Icon name="close" />
          </button>
          <div className="min-w-0 flex-1 text-center">
            <p className="text-sm font-semibold text-ink truncate">{civ.label}</p>
            <p className="text-[11px] text-muted">
              {epoch.label} · {current?.round > 0 ? (current.round === 1 ? 'Niveau 2' : 'Révision complète') : 'Niveau 1'}
            </p>
          </div>
          <span className="w-10 text-right text-xs text-muted tabular-nums">{done ? '' : `${pos + 1}/${cards.length}`}</span>
        </div>
        {/* Progression façon « stories » */}
        {!done && (
          <div className="mt-3 flex gap-1" aria-hidden="true">
            {cards.map((c, i) => (
              <span key={i} className="h-1 flex-1 rounded-full overflow-hidden bg-line">
                <span className="block h-full rounded-full transition-all duration-300" style={{ width: i <= pos ? '100%' : '0%', background: civ.color }} />
              </span>
            ))}
          </div>
        )}
      </header>

      <main className="relative flex-1 min-h-0 flex flex-col px-4 pt-3 pb-4 sm:pb-8">
        {done ? (
          <ChapterDone refCiv={refCiv} result={done} onRestart={() => setDone(null)} />
        ) : cards.length ? (
          <CardDeck
            cards={cards}
            pos={pos}
            civ={civ}
            epoch={epoch}
            round={current.round}
            onAnswer={(verdict) => answerCard(civ.id, verdict)}
            onBack={() => previousCard(civ.id)}
            onFinish={finish}
          />
        ) : null}
      </main>
    </div>
  )
}

/** Écran de fin de chapitre. */
function ChapterDone({ refCiv, result, onRestart }) {
  const { epoch, continent, civ } = refCiv
  const chapter = useProgress((s) => s.chapters[civ.id])
  const size = chapterSize(refCiv)
  const nextRound = chapter?.rounds ?? 1
  const next = civ.lineage?.next
  const sibling = !next ? continent.civilizations[continent.civilizations.findIndex((c) => c.id === civ.id) + 1] : null
  const understood = Math.max(result.total - result.review, 0)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', damping: 22, stiffness: 260 }}
      className="w-full max-w-[440px] mx-auto my-auto text-center"
    >
      <motion.span
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', delay: 0.1, damping: 12 }}
        className="inline-grid place-items-center w-20 h-20 rounded-3xl text-white shadow-lift mb-5"
        style={{ background: civ.color }}
      >
        <Icon name="check" size={40} strokeWidth={2.6} />
      </motion.span>
      <h2 className="font-display text-3xl font-semibold text-ink">Chapitre terminé !</h2>
      <p className="text-muted mt-2">{civ.label} · {result.round === 0 ? 'niveau 1' : result.round === 1 ? 'niveau 2' : 'révision complète'}</p>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="card p-4">
          <p className="font-display text-3xl font-semibold text-success tabular-nums">{understood}</p>
          <p className="text-xs text-muted mt-0.5">cartes comprises</p>
        </div>
        <div className="card p-4">
          <p className="font-display text-3xl font-semibold text-warning tabular-nums">{result.review}</p>
          <p className="text-xs text-muted mt-0.5">à revoir au prochain passage</p>
        </div>
      </div>

      {/* Quiz : sprint 6 */}
      <div className="mt-4 p-4 rounded-2xl border border-dashed border-line text-left flex items-center gap-3">
        <span className="grid place-items-center w-10 h-10 rounded-xl bg-surface2 text-muted shrink-0"><Icon name="sparkles" size={18} /></span>
        <span className="text-sm">
          <span className="block font-semibold text-ink">Le quiz arrive bientôt</span>
          <span className="block text-muted">20 questions pour valider ce chapitre.</span>
        </span>
      </div>

      <div className="mt-6 grid gap-2.5">
        {nextRound === 1 && size.tier2 > 0 && (
          <button onClick={onRestart} className="btn-accent h-12 w-full">
            <Icon name="sparkles" size={18} /> Approfondir : {size.tier2} nouvelles cartes
          </button>
        )}
        {nextRound >= 2 && (
          <button onClick={onRestart} className="btn-secondary h-12 w-full">Tout réviser à nouveau</button>
        )}
        {next && (
          <Link to={`/reviser/${next.epochId}/${next.civId}`} className="btn-primary h-12 w-full">
            La suite : {next.label} <Icon name="arrowRight" size={18} />
          </Link>
        )}
        {!next && sibling && (
          <Link to={`/reviser/${epoch.id}/${sibling.id}`} className="btn-primary h-12 w-full">
            Chapitre suivant : {sibling.label} <Icon name="arrowRight" size={18} />
          </Link>
        )}
        <Link to={`/frise/${epoch.id}/${civ.id}`} className="btn-ghost h-11 w-full">Lire la fiche complète</Link>
        <Link to={`/reviser/${epoch.id}`} className="btn-ghost h-11 w-full">Retour aux chapitres</Link>
      </div>
    </motion.div>
  )
}

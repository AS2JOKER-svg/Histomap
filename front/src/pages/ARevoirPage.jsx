import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { findCivilization } from '../lib/data'
import { chapterCards } from '../lib/revision'
import { prepareQuestion, questionPool } from '../lib/quiz'
import { haptic } from '../lib/haptics'
import useDocumentTitle from '../lib/useDocumentTitle'
import { useProgress } from '../store/progress'
import { REVISION } from '../lib/aventure'
import { useAmbiance } from '../lib/musique'
import Icon from '../components/ui/Icon'
import CardDeck from '../components/revision/CardDeck'
import ChapterGate from '../components/revision/ChapterGate'
import QuestionView from '../components/quiz/QuestionView'
import { useApresCelebrations } from '../components/celebration/Celebrations'

/**
 * Séance « À revoir » d'une salle (V3, sprint 23) : les cartes marquées « à revoir » au dernier
 * passage, puis les questions ratées à la dernière épreuve. Une carte comprise ou une question
 * réussie sort de sa liste. +20 XP une fois par jour, et la séance compte pour la série.
 */
export default function ARevoirPage() {
  const { civId } = useParams()
  const ref = findCivilization(civId)
  const cartes = useProgress((s) => s.chapters[civId]?.toReview ?? [])
  const questions = useProgress((s) => s.quizzes[civId]?.failed ?? [])
  useDocumentTitle(ref ? `À revoir · ${ref.civ.label}` : 'À revoir')
  useAmbiance(ref ? civId : null)
  // Rien à revoir (ou plus rien) : retour au Profil
  const [depart] = useState(() => cartes.length + questions.length)
  if (!ref || !depart) return <Navigate to="/profil" replace />
  return <ChapterGate refCiv={ref}>{(full) => <Seance refCiv={full} cartesIds={cartes} questionsIds={questions} />}</ChapterGate>
}

function Seance({ refCiv, cartesIds, questionsIds }) {
  const { civ } = refCiv
  const navigate = useNavigate()
  const terminer = useProgress((s) => s.terminerARevoir)
  // Liste figée au début de la séance (le store change à la fin)
  // Séance courte : au plus 6 cartes et 6 questions (le reste attend la séance suivante)
  const [ids] = useState(() => ({ cartes: cartesIds.slice(0, REVISION.parSeance), questions: questionsIds.slice(0, REVISION.parSeance) }))
  const byId = useMemo(() => Object.fromEntries(chapterCards(refCiv).map((c) => [c.id, c])), [refCiv])
  const cartes = useMemo(() => [...ids.cartes.map((id) => byId[id]).filter(Boolean), byId.recap].filter(Boolean), [ids, byId])
  const questions = useMemo(() => {
    const pool = Object.fromEntries(questionPool(refCiv).map((q) => [q.id, q]))
    return ids.questions.map((id) => pool[id] && prepareQuestion(pool[id], 1)).filter(Boolean)
  }, [ids, refCiv])
  const aDesCartes = cartes.length > 1
  const [phase, setPhase] = useState(aDesCartes ? 'cartes' : 'questions')
  const [pos, setPos] = useState(0)
  const [cartesOk, setCartesOk] = useState([])
  const [qi, setQi] = useState(0)
  const [questionsOk, setQuestionsOk] = useState([])
  const [evenements, setEvenements] = useState(null)
  const { faire, ecran } = useApresCelebrations(evenements ?? [])

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  const finir = (okQ = questionsOk) => {
    setEvenements(terminer(civ.id, cartesOk, okQ))
    haptic('complete')
    setPhase('fin')
  }
  const apresCartes = () => (questions.length ? setPhase('questions') : finir([]))
  const xp = (evenements ?? []).filter((e) => e.type === 'xp').reduce((n, e) => n + e.montant, 0)

  return (
    <div className="fixed inset-0 z-50 bg-bg flex flex-col" role="dialog" aria-label={`À revoir : ${civ.label}`}>
      <div className="shrink-0 px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-2 max-w-[600px] w-full mx-auto flex items-center gap-2">
        <button onClick={() => navigate('/profil')} className="btn-icon -ml-2" aria-label="Quitter la séance"><Icon name="close" /></button>
        <p className="eyebrow flex-1">
          À revoir · {civ.label}
          {phase === 'cartes' && ` · carte ${Math.min(pos + 1, cartes.length - 1)} / ${cartes.length - 1}`}
          {phase === 'questions' && ` · question ${qi + 1} / ${questions.length}`}
        </p>
      </div>
      <div className="relative flex-1 min-h-0 flex flex-col px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))] overflow-y-auto">
        {phase === 'cartes' && (
          <CardDeck
            cards={cartes}
            pos={pos}
            civ={civ}
            epoch={refCiv.epoch}
            round={1}
            onAnswer={(verdict) => {
              if (verdict === 'ok') setCartesOk((l) => [...l, cartes[pos].id])
              setPos((p) => p + 1)
            }}
            onBack={() => setPos((p) => Math.max(0, p - 1))}
            onFinish={apresCartes}
          />
        )}
        {phase === 'questions' && questions[qi] && (
          <AnimatePresence mode="wait">
            <QuestionView
              key={questions[qi].id}
              question={questions[qi]}
              index={qi}
              total={questions.length}
              civ={civ}
              onAnswer={(_, ok) => ok && setQuestionsOk((l) => [...l, questions[qi].id])}
              onNext={() => (qi < questions.length - 1 ? setQi(qi + 1) : finir(questionsOk))}
              isLast={qi === questions.length - 1}
            />
          </AnimatePresence>
        )}
        {phase === 'fin' && (
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-[440px] mx-auto my-auto text-center">
            <p className="eyebrow">Séance terminée</p>
            <h2 className="font-display text-4xl font-bold text-ink mt-2 leading-none">{civ.label}</h2>
            <div className="mt-5 grid grid-cols-3 gap-2">
              <div className="card p-3"><p className="font-display text-3xl font-bold text-ink">{cartesOk.length}</p><p className="text-xs text-muted">carte{cartesOk.length > 1 ? 's' : ''} comprise{cartesOk.length > 1 ? 's' : ''}</p></div>
              <div className="card p-3"><p className="font-display text-3xl font-bold text-ink">{questionsOk.length}</p><p className="text-xs text-muted">question{questionsOk.length > 1 ? 's' : ''} réussie{questionsOk.length > 1 ? 's' : ''}</p></div>
              <div className="card p-3"><p className="font-display text-3xl font-bold text-ink">+{xp}</p><p className="text-xs text-muted">XP{xp ? '' : ' (déjà gagnés aujourd’hui)'}</p></div>
            </div>
            <p className="mt-3 text-sm text-muted">Ce qui reste à revoir t’attend dans le Profil.</p>
            <div className="mt-6 grid gap-2.5">
              <button onClick={() => faire(() => navigate('/profil'))} className="btn-accent h-12 w-full font-bold">Retour au Profil</button>
              <Link to="/" className="btn-secondary h-12 w-full">Aller au parcours</Link>
            </div>
            {ecran}
          </motion.div>
        )}
      </div>
    </div>
  )
}

import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { findCivilization } from '../lib/data'
import { buildDeck, chapterCards } from '../lib/revision'
import { composeQuiz, prepareQuestion, questionPool, rng, shuffle } from '../lib/quiz'
import { haptic } from '../lib/haptics'
import useDocumentTitle from '../lib/useDocumentTitle'
import { EPREUVE, MEDAILLE, estOuvert, etoiles } from '../lib/aventure'
import { gainReponse, niveau } from '../lib/xp'
import { xpReponses } from '../lib/progression'
import { PARCOURS_AVENTURE as P, useProgress } from '../store/progress'
import Icon from '../components/ui/Icon'
import CardDeck from '../components/revision/CardDeck'
import ChapterGate from '../components/revision/ChapterGate'
import QuestionView from '../components/quiz/QuestionView'
import Medaille, { ETAPE_LABEL } from '../components/aventure/Medaille'
import NotFoundPage from './NotFoundPage'

/**
 * Une étape d'une salle de l'Aventure (plein écran) — maquettes 5 à 8 du sprint 16 :
 *   /aventure/salle/:civId/decouvrir     cartes de niveau 1 + 3 questions éclair → bronze
 *   /aventure/salle/:civId/approfondir   cartes de niveau 2 (+ cartes à revoir) + 5 questions → argent
 *   /aventure/salle/:civId/epreuve       20 questions, XP en direct, combo, mi-temps → or dès 15/20
 * Les paquets de cartes et les questions sont exactement ceux des chapitres et quiz d'avant
 * (buildDeck, composeQuiz) : seule la présentation change.
 */
const ECLAIRS = { decouvrir: 3, approfondir: 5 }

export default function SallePage() {
  const { civId, etape } = useParams()
  const ref = findCivilization(civId)
  const salles = useProgress((s) => s.aventure.salles)
  useDocumentTitle(ref ? `${ETAPE_LABEL[etape] ?? 'Salle'} · ${ref.civ.label}` : 'Salle introuvable')
  if (!ref || !ETAPE_LABEL[etape]) return <NotFoundPage title="Salle introuvable" />
  // Étape pas encore accessible → le panneau de la salle explique pourquoi
  if (!etapeAccessible(salles, civId, etape)) return <Navigate to={`/?salle=${civId}`} replace />
  return (
    <ChapterGate key={`${civId}-${etape}`} refCiv={ref}>
      {(full) => (etape === 'epreuve' ? <Epreuve refCiv={full} /> : <Etape refCiv={full} etape={etape} />)}
    </ChapterGate>
  )
}

/** Découvrir dès que la salle est ouverte ; Approfondir après le bronze ; l'Épreuve après l'argent. */
export function etapeAccessible(salles, civId, etape) {
  if (!estOuvert(P, salles, civId)) return false
  const m = salles[civId]?.medaille ?? 0
  return etape === 'decouvrir' || (etape === 'approfondir' && m >= MEDAILLE.BRONZE) || (etape === 'epreuve' && m >= MEDAILLE.ARGENT)
}

/** Plein écran : bloque le défilement de la page derrière. */
function usePleinEcran() {
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])
}

function Barre({ titre, onClose, segments, xp }) {
  return (
    <div className="relative shrink-0 px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-2 max-w-[600px] w-full mx-auto">
      <div className="flex items-center gap-2">
        <button onClick={onClose} className="btn-icon -ml-2" aria-label="Quitter (la progression est gardée)">
          <Icon name="close" />
        </button>
        <div className="flex-1 flex gap-[2px]" aria-hidden="true">
          {segments.map((c, i) => (
            <span key={i} className={`h-[6px] flex-1 ${c}`} />
          ))}
        </div>
        {xp !== undefined && (
          <span className="h-8 px-2.5 inline-flex items-center text-[13px] font-bold tabular-nums" style={{ background: '#2a2118', color: '#e0c27a' }} aria-label={`${xp} XP gagnés`}>
            {xp} XP
          </span>
        )}
      </div>
      <p className="eyebrow mt-2">{titre}</p>
    </div>
  )
}

// ── Découvrir / Approfondir ─────────────────────────────────────────────────

function Etape({ refCiv, etape }) {
  usePleinEcran()
  const { civ } = refCiv
  const navigate = useNavigate()
  const chapter = useProgress((s) => s.chapters[civ.id])
  const startChapter = useProgress((s) => s.startChapter)
  const answerCard = useProgress((s) => s.answerCard)
  const previousCard = useProgress((s) => s.previousCard)
  const finishChapter = useProgress((s) => s.finishChapter)
  const [phase, setPhase] = useState('cartes') // cartes → questions → fin
  const [justes, setJustes] = useState([])
  const [evenements, setEvenements] = useState(null)
  const round = etape === 'decouvrir' ? 0 : 1

  const byId = useMemo(() => Object.fromEntries(chapterCards(refCiv).map((c) => [c.id, c])), [refCiv])
  const current = chapter?.current
  // Séance de cartes : on reprend celle en cours si elle correspond à cette étape, sinon on en démarre une
  useEffect(() => {
    if (phase !== 'cartes') return
    if (current && (current.round === 0) === (round === 0)) return
    const deck = buildDeck(refCiv, { round, toReview: chapter?.toReview ?? [] })
    startChapter(civ.id, round, deck.map((c) => c.id))
  }, [current, phase]) // eslint-disable-line react-hooks/exhaustive-deps
  const cards = useMemo(() => (current?.queue ?? []).map((id) => byId[id]).filter(Boolean), [current?.queue, byId])
  const pos = Math.min(current?.pos ?? 0, Math.max(cards.length - 1, 0))

  // Questions éclair : tirées du réservoir du quiz (questions rédigées d'abord), toujours les mêmes pour ce passage
  const questions = useMemo(() => {
    const pool = questionPool(refCiv)
    const redigees = pool.filter((q) => q.id.startsWith('hand-'))
    const source = redigees.length >= ECLAIRS[etape] ? redigees : pool
    const rand = rng(`eclair:${civ.id}:${etape}:${chapter?.rounds ?? 0}`)
    return shuffle(source, rand).slice(0, ECLAIRS[etape]).map((q) => prepareQuestion(q, chapter?.rounds ?? 0))
  }, [refCiv, etape]) // eslint-disable-line react-hooks/exhaustive-deps
  const [qi, setQi] = useState(0)

  const terminer = () => {
    const ev = finishChapter(civ.id, { eclairs: justes.filter(Boolean).length })
    haptic('complete')
    setEvenements(ev)
    setPhase('fin')
  }
  const fermer = () => navigate(`/?salle=${civ.id}`)

  const segments =
    phase === 'cartes'
      ? cards.map((_, i) => (i <= pos ? 'bg-accent' : 'bg-line'))
      : questions.map((_, i) => (i < justes.length ? (justes[i] ? 'bg-accent2' : 'bg-accent') : i === qi ? 'bg-ink' : 'bg-line'))

  return (
    <div className="fixed inset-0 z-50 bg-bg flex flex-col" role="dialog" aria-label={`${ETAPE_LABEL[etape]} : ${civ.label}`}>
      {phase !== 'fin' && (
        <Barre
          titre={`${civ.label} · ${ETAPE_LABEL[etape]}${phase === 'questions' ? ` · question éclair ${qi + 1} / ${questions.length}` : cards.length ? ` · carte ${pos + 1} / ${cards.length}` : ''}`}
          onClose={fermer}
          segments={segments}
          xp={phase === 'questions' ? justes.filter(Boolean).length * 5 : undefined}
        />
      )}
      <div className="relative flex-1 min-h-0 flex flex-col px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))] overflow-y-auto">
        {phase === 'cartes' && cards.length > 0 && (
          <CardDeck
            cards={cards}
            pos={pos}
            civ={civ}
            epoch={refCiv.epoch}
            round={round}
            onAnswer={(verdict) => answerCard(civ.id, verdict)}
            onBack={() => previousCard(civ.id)}
            onFinish={() => (questions.length ? setPhase('questions') : terminer())}
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
              onAnswer={(_, ok) => setJustes((j) => [...j, ok])}
              onNext={() => (qi < questions.length - 1 ? setQi(qi + 1) : terminer())}
              isLast={qi === questions.length - 1}
            />
          </AnimatePresence>
        )}
        {phase === 'fin' && <EtapeFin refCiv={refCiv} etape={etape} evenements={evenements ?? []} justes={justes.filter(Boolean).length} total={questions.length} />}
      </div>
    </div>
  )
}

const xpDe = (evenements) => evenements.filter((e) => e.type === 'xp').reduce((n, e) => n + e.montant, 0)
const nomDe = (id) => findCivilization(id)?.civ.label ?? id

function EtapeFin({ refCiv, etape, evenements, justes, total }) {
  const { civ } = refCiv
  const medaille = evenements.find((e) => e.type === 'medaille')?.medaille
  const ouvertes = evenements.find((e) => e.type === 'ouverture')?.salles ?? []
  const niveaux = evenements.filter((e) => e.type === 'niveau')
  const xp = xpDe(evenements)
  const suite = etape === 'decouvrir' ? 'approfondir' : 'epreuve'
  return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-[440px] mx-auto my-auto text-center py-6">
      <p className="eyebrow">{ETAPE_LABEL[etape]} terminé</p>
      <motion.div initial={{ scale: 0.4, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', damping: 12, delay: 0.1 }} className="inline-block mt-4">
        <Medaille medaille={medaille ?? (etape === 'decouvrir' ? MEDAILLE.BRONZE : MEDAILLE.ARGENT)} taille={96} />
      </motion.div>
      <h2 className="font-display text-4xl font-bold text-ink mt-4 leading-none">{civ.label}</h2>
      <p className="text-muted mt-2">
        {medaille ? `Médaille ${medaille === MEDAILLE.BRONZE ? 'de bronze' : 'd’argent'} gagnée` : 'Étape revue'} · {justes} / {total} questions éclair
      </p>
      <div className="mt-5 grid grid-cols-2 gap-2.5">
        <Bloc valeur={`+${xp}`} label="XP" />
        <Bloc valeur={ouvertes.length} label={ouvertes.length > 1 ? 'salles ouvertes' : 'salle ouverte'} />
      </div>
      {ouvertes.length > 0 && <p className="text-sm text-ink mt-3">Nouveau : {ouvertes.map(nomDe).join(', ')}</p>}
      {niveaux.map((n) => (
        <p key={n.niveau} className="mt-3 p-3 text-sm font-semibold" style={{ background: '#2a2118', color: '#e0c27a' }}>
          Niveau {n.niveau} atteint{n.recompenses.length ? ` · ${n.recompenses.map((r) => r.nom).join(', ')}` : ''}
        </p>
      ))}
      <div className="mt-6 grid gap-2.5">
        <Link to={`/aventure/salle/${civ.id}/${suite}`} className="btn-accent h-12 w-full text-[15px] font-bold">
          {suite === 'approfondir' ? 'Approfondir maintenant' : 'Passer l’épreuve'} <Icon name="arrowRight" size={18} />
        </Link>
        <Link to="/" className="btn-secondary h-12 w-full">Retour au parcours</Link>
      </div>
    </motion.div>
  )
}

function Bloc({ valeur, label, ton }) {
  return (
    <div className="card p-3.5">
      <p className={`font-display text-3xl font-bold tabular-nums ${ton ?? 'text-ink'}`}>{valeur}</p>
      <p className="text-xs text-muted">{label}</p>
    </div>
  )
}

// ── Épreuve ──────────────────────────────────────────────────────────────────

function Epreuve({ refCiv }) {
  usePleinEcran()
  const { civ } = refCiv
  const navigate = useNavigate()
  const quiz = useProgress((s) => s.quizzes[civ.id])
  const startQuiz = useProgress((s) => s.startQuiz)
  const answerQuestion = useProgress((s) => s.answerQuestion)
  const finishQuiz = useProgress((s) => s.finishQuiz)
  const [step, setStep] = useState(null)
  const [miTemps, setMiTemps] = useState(false)
  const [result, setResult] = useState(null)

  const pool = useMemo(() => questionPool(refCiv), [refCiv])
  const byId = useMemo(() => Object.fromEntries(pool.map((q) => [q.id, q])), [pool])
  const begin = () => {
    const ids = composeQuiz(pool, { failed: quiz?.failed ?? [], asked: quiz?.asked ?? [], attempt: quiz?.attempts ?? 0 })
    startQuiz(civ.id, ids)
    setStep(0)
  }
  useEffect(() => {
    if (!quiz?.current && !result) begin()
    else if (quiz?.current && step === null) setStep(quiz.current.answers.length)
  }, [quiz?.current, result]) // eslint-disable-line react-hooks/exhaustive-deps

  const current = quiz?.current
  const questions = useMemo(
    () => (current?.ids ?? []).map((id) => byId[id] && prepareQuestion(byId[id], current.attempt)).filter(Boolean),
    [current?.ids, current?.attempt, byId]
  )
  const answers = current?.answers ?? []
  const index = Math.min(step ?? 0, Math.max(questions.length - 1, 0))
  const q = questions[index]
  const rejeu = (current?.attempt ?? quiz?.attempts ?? 0) > 0 // épreuve déjà passée : XP des réponses divisée par deux

  // XP en direct et combo
  const justes = questions.map((x) => answers.find((a) => a.id === x.id)?.correct).filter((v) => v !== undefined)
  const xp = xpReponses(justes, { rejeu })
  let serie = 0
  for (let i = justes.length - 1; i >= 0 && justes[i]; i--) serie++
  const dernier = justes.length && justes.at(-1) ? gainReponse(serie, { rejeu }) : 0
  const bonnes = justes.filter(Boolean).length
  const total = questions.length || EPREUVE.questions

  const suivante = () => {
    if (index === Math.floor(total / 2) - 1 && !miTemps && total >= 12) {
      setMiTemps(true)
      return
    }
    if (index < questions.length - 1) setStep(index + 1)
    else {
      const r = finishQuiz(civ.id)
      haptic(r.score >= EPREUVE.reussite ? 'complete' : 'error')
      setResult(r)
    }
  }
  const pause = miTemps && step === index && index === Math.floor(total / 2) - 1

  return (
    <div className="fixed inset-0 z-50 bg-bg flex flex-col" role="dialog" aria-label={`Épreuve : ${civ.label}`}>
      {!result && !pause && (
        <Barre
          titre={`Épreuve · ${civ.label} · question ${index + 1} / ${total}`}
          onClose={() => navigate(`/?salle=${civ.id}`)}
          segments={questions.map((x, i) => {
            const a = answers.find((y) => y.id === x.id)
            return a ? (a.correct ? 'bg-accent2' : 'bg-accent') : i === index ? 'bg-ink' : 'bg-line'
          })}
          xp={xp}
        />
      )}
      {!result && !pause && serie >= 2 && (
        <div className="max-w-[600px] w-full mx-auto px-4">
          <motion.div key={serie} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex items-center gap-3 px-3 py-2" style={{ background: '#2a2118', color: '#f6efe2' }}>
            <span className="flex gap-[3px]" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((k) => <span key={k} className="w-2.5 h-4" style={{ background: k <= serie ? '#e0c27a' : '#4a3d2c' }} />)}
            </span>
            <span className="flex-1 text-sm font-bold" style={{ color: '#e0c27a' }}>Combo ×{Math.min(serie, 5)}</span>
            <span className="font-display text-xl font-bold" style={{ color: '#e0c27a' }}>+{dernier}</span>
          </motion.div>
        </div>
      )}
      <div className="relative flex-1 min-h-0 flex flex-col px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] overflow-y-auto">
        {result ? (
          <Resultat refCiv={refCiv} result={result} onRetry={() => { setResult(null); setMiTemps(false); setStep(null) }} />
        ) : pause ? (
          <MiTemps bonnes={bonnes} faites={index + 1} restantes={total - index - 1} xp={xp} onReprendre={() => setStep(index + 1)} />
        ) : q ? (
          <AnimatePresence mode="wait">
            <QuestionView
              key={q.id}
              question={q}
              index={index}
              total={questions.length}
              civ={civ}
              answered={answers.find((a) => a.id === q.id)}
              onAnswer={(response, correct) => answerQuestion(civ.id, q.id, response, correct)}
              onNext={suivante}
              isLast={index === questions.length - 1}
            />
          </AnimatePresence>
        ) : null}
        {!result && !pause && (
          <p className="text-center text-xs text-muted mt-3">
            {bonnes} bonne{bonnes > 1 ? 's' : ''} réponse{bonnes > 1 ? 's' : ''}
            {bonnes < EPREUVE.reussite ? ` · encore ${EPREUVE.reussite - bonnes} pour réussir` : ' · épreuve réussie, vise les étoiles !'}
          </p>
        )}
      </div>
    </div>
  )
}

function MiTemps({ bonnes, faites, restantes, xp, onReprendre }) {
  const paliers = [
    { label: 'Réussir l’épreuve', seuil: 15 },
    { label: 'Deux étoiles ★★', seuil: 17 },
    { label: 'Trois étoiles ★★★', seuil: 19 },
  ]
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-10 flex flex-col items-center px-5" style={{ background: '#2a2118', color: '#f6efe2' }}>
      <p className="mt-[12vh] text-xs font-bold uppercase tracking-[.2em]" style={{ color: '#c9b48c' }}>Épreuve</p>
      <h2 className="font-display text-5xl font-bold" style={{ color: '#e0c27a' }}>Mi-temps</h2>
      <p className="mt-6 font-display text-7xl font-bold leading-none">{bonnes}</p>
      <p className="text-sm" style={{ color: '#c9b48c' }}>bonnes réponses sur {faites}</p>
      <ul className="mt-6 w-full max-w-sm border-t" style={{ borderColor: '#4a3d2c' }}>
        {paliers.map((p) => {
          const manque = p.seuil - bonnes
          return (
            <li key={p.seuil} className="flex justify-between py-3 border-b text-[15px]" style={{ borderColor: '#4a3d2c' }}>
              <span>{p.label}</span>
              <span className="font-bold" style={{ color: manque <= 0 ? '#e0c27a' : manque > restantes ? '#c9b48c' : '#f6efe2' }}>
                {manque <= 0 ? 'acquis' : manque > restantes ? 'plus possible' : `encore ${manque}`}
              </span>
            </li>
          )
        })}
      </ul>
      <p className="mt-4 text-sm" style={{ color: '#c9b48c' }}>{xp} XP gagnés jusqu’ici</p>
      <button onClick={onReprendre} className="mt-auto mb-[max(1.75rem,env(safe-area-inset-bottom))] w-full max-w-sm min-h-[54px] font-bold text-[16px]" style={{ background: '#e0c27a', color: '#2a2118' }}>
        Reprendre — question {faites + 1}
      </button>
    </motion.div>
  )
}

/** Résultat de l'épreuve (sobre ; la grande célébration arrive au sprint 22). */
function Resultat({ refCiv, result, onRetry }) {
  const { civ } = refCiv
  const meilleur = useProgress((s) => s.aventure.salles[civ.id]?.meilleur ?? 0)
  const xpTotal = useProgress((s) => s.aventure.xp)
  const reussi = result.score >= EPREUVE.reussite
  const ev = result.evenements ?? []
  const parRaison = (r) => ev.filter((e) => e.type === 'xp' && e.raison === r).reduce((n, e) => n + e.montant, 0)
  const lignes = [
    ['Réponses et combos', parRaison('epreuve')],
    ['Médaille d’or', parRaison('or')],
    ['Nouvelles étoiles', parRaison('etoiles')],
    ['Coffres', parRaison('coffre')],
    ['Bonus du jour', parRaison('bonus-jour')],
  ].filter(([, v]) => v > 0)
  const nb = etoiles(result.score)
  const coffres = ev.filter((e) => e.type === 'coffre')
  const niveaux = ev.filter((e) => e.type === 'niveau')
  const titres = ev.filter((e) => e.type === 'titre')

  return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-[460px] mx-auto text-center py-4">
      <p className="eyebrow">{reussi ? 'Épreuve réussie' : 'Épreuve à retenter'}</p>
      <motion.div initial={{ scale: 0.4, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', damping: 12, delay: 0.1 }} className="mt-4 mx-auto w-36 h-36 rounded-full grid place-items-center" style={{ background: reussi ? '#e0c27a' : 'rgb(var(--c-surface-2))', color: '#2a2118' }}>
        <span>
          <span className={`block font-display text-5xl font-bold leading-none ${reussi ? '' : 'text-ink'}`}>{result.score}/20</span>
          {reussi && <span className="block text-lg tracking-[3px]" aria-label={`${nb} étoile(s) sur 3`}>{'★'.repeat(nb)}{'☆'.repeat(3 - nb)}</span>}
        </span>
      </motion.div>
      <h2 className="font-display text-4xl font-bold text-ink mt-4 leading-none">{civ.label}</h2>
      <p className="text-muted mt-2">
        {reussi
          ? nb < 3 ? `Encore ${[17, 19][nb - 1] - result.score} bonne(s) réponse(s) pour l’étoile suivante` : 'Trois étoiles : la salle est parfaitement maîtrisée'
          : `Encore ${EPREUVE.reussite - result.score} point(s) pour l’or · 5 questions ratées reviendront`}
        {meilleur > result.score ? ` · meilleur score ${meilleur}/20` : ''}
      </p>

      {lignes.length > 0 && (
        <div className="mt-5 text-left border-t border-line">
          {lignes.map(([label, v]) => (
            <div key={label} className="flex justify-between py-2.5 border-b border-line text-sm">
              <span className="text-muted">{label}</span>
              <span className="font-bold text-ink tabular-nums">+{v} XP</span>
            </div>
          ))}
          <p className="text-xs text-muted mt-2">Niveau {niveau(xpTotal).niveau} · {xpTotal.toLocaleString('fr-FR')} XP au total</p>
        </div>
      )}
      {[...coffres.map((c) => `Coffre ouvert : +${c.xp} XP${c.joker ? ' et 1 joker' : ''}`), ...niveaux.map((n) => `Niveau ${n.niveau} atteint${n.recompenses.length ? ' · ' + n.recompenses.map((r) => r.nom).join(', ') : ''}`), ...titres.map((t) => `Nouveau titre : ${t.titre}`)].map((t) => (
        <p key={t} className="mt-2.5 p-3 text-sm font-semibold text-left" style={{ background: '#2a2118', color: '#e0c27a' }}>{t}</p>
      ))}

      <div className="mt-6 grid gap-2.5">
        {reussi ? (
          <>
            <Link to="/" className="btn-accent h-12 w-full text-[15px] font-bold">Continuer le parcours <Icon name="arrowRight" size={18} /></Link>
            {nb < 3 && <button onClick={onRetry} className="btn-secondary h-12 w-full">Rejouer pour les étoiles</button>}
          </>
        ) : (
          <>
            <button onClick={onRetry} className="btn-accent h-12 w-full text-[15px] font-bold">Retenter l’épreuve</button>
            <Link to={`/aventure/salle/${civ.id}/approfondir`} className="btn-secondary h-12 w-full">Revoir les cartes</Link>
          </>
        )}
        <Link to={`/?salle=${civ.id}`} className="btn-ghost h-11 w-full">Retour à la salle</Link>
      </div>
    </motion.div>
  )
}

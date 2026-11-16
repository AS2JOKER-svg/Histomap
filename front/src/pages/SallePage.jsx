import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { findCivilization } from '../lib/data'
import { buildDeck, chapterCards } from '../lib/revision'
import { composerEpreuve, prepareQuestion, questionPool } from '../lib/quiz'
import { bonneReponse, premiereSansReponse } from '../lib/questions'
import { choisirEclairs } from '../lib/eclairs'
import { imageResultat, partagerImage } from '../lib/partage'
import { epreuveDe, estTronc, etapeAccessible, etoilesEpreuve, niveauxVus, salleDe, salleEnCours, seuilsEtoiles, titresObtenus } from '../lib/aventure'
import { haptic } from '../lib/haptics'
import useDocumentTitle from '../lib/useDocumentTitle'
import { BAREME, gainReponse, niveau } from '../lib/xp'
import { xpReponses } from '../lib/progression'
import { useAmbiance } from '../lib/musique'
import { definirCombo } from '../lib/sons'
import { PARCOURS_AVENTURE as P, useProgress } from '../store/progress'
import { useUI } from '../store/ui'
import { useApresCelebrations } from '../components/celebration/Celebrations'
import { EFFET, Particules, Rayons } from '../components/celebration/elements'
import Icon from '../components/ui/Icon'
import CardDeck from '../components/revision/CardDeck'
import ChapterGate from '../components/revision/ChapterGate'
import QuestionView from '../components/quiz/QuestionView'
import EtatSalle, { ETAPE_LABEL, Etoiles } from '../components/aventure/EtatSalle'
import NotFoundPage from './NotFoundPage'

/**
 * Une étape d'une salle de l'Aventure (plein écran) — maquettes 5 à 8 du sprint 16, règles V3.1 (sprint 29) :
 *   /aventure/salle/:civId/decouvrir     tronc : cartes de niveau 1 + 3 questions éclair → salle découverte ;
 *                                        annexe : cartes de niveau 1, puis la mini-épreuve (une seule séance)
 *   /aventure/salle/:civId/approfondir   tronc, bonus : cartes de niveau 2 (+ cartes à revoir) + 5 questions
 *   /aventure/salle/:civId/epreuve       12 questions (annexe : 8) sur les cartes vues, XP en direct, combo
 *                                        sans fin (XP plafonnée à ×5) → ★ 9, ★★ 11, ★★★ 12 (annexe : 6, 7, 8)
 * Refonte des écrans au sprint 31 (panneau court, séance d'annexe en un bloc, célébrations).
 */
const ECLAIRS = { decouvrir: 3, approfondir: 5 }

export default function SallePage() {
  const { civId, etape } = useParams()
  const ref = findCivilization(civId)
  const av = useProgress((s) => s.aventure)
  useDocumentTitle(ref ? `${ETAPE_LABEL[etape] ?? 'Salle'} · ${ref.civ.label}` : 'Salle introuvable')
  useAmbiance(ref ? civId : null)
  if (!ref || !ETAPE_LABEL[etape]) return <NotFoundPage title="Salle introuvable" />
  // Étape pas encore accessible → le panneau de la salle explique pourquoi
  // (terminer une étape ne la rend jamais inaccessible : découverte et étoiles ne se perdent pas)
  if (!etapeAccessible(P, av, civId, etape)) return <Navigate to={`/?salle=${civId}`} replace />
  return (
    <ChapterGate key={`${civId}-${etape}`} refCiv={ref}>
      {(full) => (etape === 'epreuve' ? <Epreuve refCiv={full} /> : <Etape refCiv={full} etape={etape} />)}
    </ChapterGate>
  )
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
  const tronc = estTronc(P, civ.id)
  // annexe : pas de questions éclair, la séance continue par la mini-épreuve
  const nbEclairs = tronc ? ECLAIRS[etape] : 0

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
  const seanceCourante = !!current && (current.round === 0) === (round === 0)

  // Micro-rythme (sprint 25) : au-delà de 8 cartes, la 1re question éclair arrive au milieu du paquet
  // (les autres restent à la fin) : on vérifie qu'on a lu avant de continuer.
  // Calculé sur les cartes distinctes : une carte « à revoir » remise en fin de paquet ne déplace pas le milieu.
  const distinctes = useMemo(() => [...new Set(current?.queue ?? [])], [current?.queue])
  const nbContenu = distinctes.filter((id) => byId[id] && byId[id].type !== 'cover' && byId[id].type !== 'recap').length
  const milieuPrevu = nbContenu > 8 ? Math.floor(distinctes.length / 2) : null

  // Questions éclair (sprints 26 et 28) : seulement des questions dont la carte (champ `carte`) a été lue
  // dans la séance (lib/eclairs.js) ; celle du milieu, dans la 1re moitié du paquet. S'il en manque, on en pose moins.
  // Choisies une fois par séance : elles ne changent plus ensuite (cartes remises en fin de paquet, fin de l'étape).
  const [eclairs, setEclairs] = useState(null)
  useEffect(() => {
    if (eclairs || !seanceCourante) return
    const pool = questionPool(refCiv)
    const redigees = pool.filter((q) => q.id.startsWith('hand-'))
    const rounds = chapter?.rounds ?? 0
    const choix = choisirEclairs({
      questions: redigees.length ? redigees : pool,
      paquet: distinctes,
      nombre: nbEclairs,
      milieu: milieuPrevu,
      graine: `${civ.id}:${etape}:${rounds}`,
    })
    setEclairs({ milieu: choix.milieu && prepareQuestion(choix.milieu, rounds), fin: choix.fin.map((q) => prepareQuestion(q, rounds)) })
  }, [seanceCourante, eclairs]) // eslint-disable-line react-hooks/exhaustive-deps
  const questions = useMemo(() => (eclairs ? [eclairs.milieu, ...eclairs.fin].filter(Boolean) : []), [eclairs])
  const [qi, setQi] = useState(0)

  const milieu = eclairs?.milieu ? milieuPrevu : null
  const [milieuFait, setMilieuFait] = useState(false)
  const pauseMilieu = phase === 'cartes' && milieu !== null && pos >= milieu && !milieuFait && qi === 0

  const terminer = () => {
    const ev = finishChapter(civ.id, { eclairs: justes.filter(Boolean).length })
    haptic('complete')
    // annexe : les cartes lues, place à la mini-épreuve (la séance n'est terminée qu'après elle)
    if (!tronc && round === 0) return navigate(`/aventure/salle/${civ.id}/epreuve`, { replace: true })
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
          titre={`${civ.label} · ${tronc ? ETAPE_LABEL[etape] : 'Séance'}${pauseMilieu ? ' · question d’étape' : phase === 'questions' ? ` · question éclair ${qi + 1} / ${questions.length}` : cards.length ? ` · carte ${pos + 1} / ${cards.length}` : ''}`}
          onClose={fermer}
          segments={segments}
          xp={phase === 'questions' ? justes.filter(Boolean).length * 5 : undefined}
        />
      )}
      <div className="relative flex-1 min-h-0 flex flex-col px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))] overflow-y-auto">
        {pauseMilieu && questions[0] && (
          <AnimatePresence mode="wait">
            <QuestionView
              key={`milieu-${questions[0].id}`}
              question={questions[0]}
              index={0}
              total={questions.length}
              civ={civ}
              onAnswer={(_, ok) => setJustes((j) => [...j, ok])}
              onNext={() => {
                setQi(1)
                setMilieuFait(true)
              }}
            />
          </AnimatePresence>
        )}
        {phase === 'cartes' && cards.length > 0 && !pauseMilieu && (
          <CardDeck
            cards={cards}
            pos={pos}
            civ={civ}
            epoch={refCiv.epoch}
            round={round}
            onAnswer={(verdict) => answerCard(civ.id, verdict)}
            onBack={() => previousCard(civ.id)}
            onFinish={() => (qi < questions.length ? setPhase('questions') : terminer())}
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
  const navigate = useNavigate()
  const av = useProgress((s) => s.aventure)
  const decouverte = evenements.some((e) => e.type === 'decouverte')
  const ouvertes = evenements.find((e) => e.type === 'ouverture')?.salles ?? []
  const xp = xpDe(evenements)
  const suivante = salleEnCours(P, av)
  const { faire, ecran } = useApresCelebrations(evenements)
  useEffect(() => {
    if (decouverte) haptic('recompense')
  }, [decouverte])
  return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="relative w-full max-w-[440px] mx-auto my-auto text-center py-6">
      {decouverte && <Particules effet={EFFET} nombre={16} />}
      <p className="eyebrow">{etape === 'decouvrir' ? 'Découvrir terminé' : 'Approfondir terminé (bonus)'}</p>
      <motion.div initial={{ scale: 0.3, opacity: 0, rotate: -20 }} animate={{ scale: 1, opacity: 1, rotate: 0 }} transition={{ type: 'spring', damping: 10, delay: 0.1 }} className="inline-block mt-4">
        <EtatSalle decouverte etoiles={0} taille={104} />
      </motion.div>
      <h2 className="font-display text-4xl font-bold text-ink mt-4 leading-none">{civ.label}</h2>
      <p className="text-muted mt-2">
        {decouverte ? 'Salle découverte' : etape === 'approfondir' ? 'Ses cartes entrent dans l’épreuve' : 'Étape revue'}
        {total > 0 && ` · ${justes} / ${total} question${total > 1 ? 's' : ''} éclair`}
      </p>
      <div className="mt-5 grid grid-cols-2 gap-2.5">
        <Bloc valeur={`+${xp}`} label="XP" />
        <Bloc valeur={ouvertes.length} label={ouvertes.length > 1 ? 'salles ouvertes' : 'salle ouverte'} />
      </div>
      {ouvertes.length > 0 && <p className="text-sm text-ink mt-3">Nouveau : {ouvertes.map(nomDe).join(', ')}</p>}
      <div className="mt-6 grid gap-2.5">
        <button onClick={() => faire(() => navigate(`/aventure/salle/${civ.id}/epreuve`))} className="btn-accent h-12 w-full text-[15px] font-bold">
          Passer l’épreuve <Icon name="arrowRight" size={18} />
        </button>
        {suivante && suivante !== civ.id ? (
          <button onClick={() => faire(() => navigate(`/?salle=${suivante}`))} className="btn-secondary h-12 w-full">Salle suivante : {nomDe(suivante)}</button>
        ) : (
          <button onClick={() => faire(() => navigate('/'))} className="btn-secondary h-12 w-full">Retour au parcours</button>
        )}
      </div>
      {ecran}
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
  const etoilesSalle = useProgress((s) => s.aventure.salles[civ.id]?.etoiles ?? 0)
  const niveaux = useProgress((s) => niveauxVus(P, s.aventure, civ.id).join())
  const [step, setStep] = useState(null)
  const [result, setResult] = useState(null)
  const tronc = estTronc(P, civ.id)
  const { questions: longueur, rattrapage } = epreuveDe(P, civ.id)

  // Questions sur les cartes vues : Découvrir (+ Approfondir s'il est fait) ; annexe : cartes de la séance
  const pool = useMemo(() => questionPool(refCiv, { niveaux: niveaux.split(',').map(Number) }), [refCiv, niveaux])
  const byId = useMemo(() => Object.fromEntries(pool.map((q) => [q.id, q])), [pool])
  const begin = () => {
    const ids = composerEpreuve(pool, { longueur, rattrapage, failed: quiz?.failed ?? [], asked: quiz?.asked ?? [], attempt: quiz?.attempts ?? 0 })
    startQuiz(civ.id, ids)
    setStep(0)
  }
  const current = quiz?.current
  // Questions de l'épreuve en cours. Une question qui n'existe plus (contenu mis à jour entre deux
  // ouvertures) est écartée : elle ne compte ni à l'écran ni dans la note (finishQuiz reçoit ces ids).
  const questions = useMemo(
    () => (current?.ids ?? []).map((id) => byId[id] && prepareQuestion(byId[id], current.attempt)).filter(Boolean),
    [current?.ids, current?.attempt, byId]
  )
  useEffect(() => {
    // pas d'épreuve en cours, ou plus aucune de ses questions n'existe : on en compose une nouvelle
    if ((!current || !questions.length) && !result) begin()
    // reprise : première question sans réponse (et non « autant de questions que de réponses » :
    // une réponse à une question disparue décalerait tout et ferait sauter une question)
    else if (current && step === null) setStep(premiereSansReponse(questions, current.answers))
  }, [current, result]) // eslint-disable-line react-hooks/exhaustive-deps
  const answers = current?.answers ?? []
  const index = Math.min(step ?? 0, Math.max(questions.length - 1, 0))
  const q = questions[index]
  const rejeu = etoilesSalle >= 1 // salle déjà étoilée : XP des réponses divisée par deux

  // XP en direct et combo
  const justes = questions.map((x) => answers.find((a) => a.id === x.id)?.correct).filter((v) => v !== undefined)
  const xp = xpReponses(justes, { rejeu })
  let serie = 0
  for (let i = justes.length - 1; i >= 0 && justes[i]; i--) serie++
  const dernier = justes.length && justes.at(-1) ? gainReponse(serie, { rejeu }) : 0
  const comboMax = serie >= BAREME.comboMax
  const bonnes = justes.filter(Boolean).length
  const total = questions.length || longueur
  const [seuil] = seuilsEtoiles(total)
  // le son d'une bonne réponse monte avec le combo (lib/sons.js)
  useEffect(() => {
    definirCombo(serie)
    return () => definirCombo(0)
  }, [serie])
  // Si ★ n'est plus atteignable, l'épreuve sera ratée : on affiche l'XP réelle (2 par bonne réponse)
  const reussitePossible = bonnes + (total - justes.length) >= seuil
  const xpAffiche = reussitePossible ? xp : BAREME.reponseEchec * bonnes

  const suivante = () => {
    if (index < questions.length - 1) setStep(index + 1)
    else {
      // mêmes questions comptées à l'écran et dans la note
      const r = finishQuiz(civ.id, questions.map((x) => x.id))
      if (r) setResult({ ...r, questions, answers }) // garde les questions et réponses pour « Revoir mes erreurs »
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-bg flex flex-col" role="dialog" aria-label={`${tronc ? 'Épreuve' : 'Mini-épreuve'} : ${civ.label}`}>
      {!result && (
        <Barre
          titre={`${tronc ? 'Épreuve' : 'Mini-épreuve'} · ${civ.label}`}
          onClose={() => navigate(`/?salle=${civ.id}`)}
          segments={questions.map((x, i) => {
            const a = answers.find((y) => y.id === x.id)
            return a ? (a.correct ? 'bg-accent2' : 'bg-accent') : i === index ? 'bg-ink' : 'bg-line'
          })}
          xp={xpAffiche}
        />
      )}
      {!result && serie >= 2 && reussitePossible && (
        <div className="max-w-[600px] w-full mx-auto px-4">
          {/* Le compteur continue au-delà de ×5 (sprint 26), l'XP reste plafonnée à ×5 (BAREME.comboMax) ;
              l'effet monte avec la série : apparition plus marquée et halo doré qui grandit. */}
          <motion.div
            key={serie}
            initial={{ scale: comboMax ? 1.08 + Math.min(serie - BAREME.comboMax, 7) * 0.012 : 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: comboMax ? 9 : 14, stiffness: 260 }}
            className="flex items-center gap-3 px-3 py-2"
            style={{ background: '#2a2118', color: '#f6efe2', boxShadow: comboMax ? `0 0 ${8 + Math.min(serie - BAREME.comboMax, 7) * 3}px rgba(224,194,122,.5)` : undefined }}
          >
            <span className="flex gap-[3px]" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((k) => <span key={k} className="w-2.5 h-4" style={{ background: k <= serie ? '#e0c27a' : '#4a3d2c' }} />)}
            </span>
            <span className="flex-1 min-w-0 flex items-baseline flex-wrap gap-x-2 text-sm font-bold" style={{ color: '#e0c27a' }}>
              <span className="tabular-nums">Combo ×{serie}</span>
              {comboMax && <span className="text-[11px] uppercase tracking-[.12em]" style={{ color: '#f6efe2' }}>Combo max !</span>}
            </span>
            <span className="font-display text-xl font-bold" style={{ color: '#e0c27a' }}>+{dernier}</span>
          </motion.div>
        </div>
      )}
      <div className="relative flex-1 min-h-0 flex flex-col px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] overflow-y-auto">
        {result ? (
          <Resultat refCiv={refCiv} result={result} questions={result.questions} answers={result.answers} onRetry={() => { setResult(null); setStep(null) }} />
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
        {!result && (
          <p className="text-center text-xs text-muted mt-3">
            {bonnes} bonne{bonnes > 1 ? 's' : ''} réponse{bonnes > 1 ? 's' : ''}
            {bonnes < seuil ? ` · encore ${seuil - bonnes} pour réussir` : ' · épreuve réussie, vise les étoiles !'}
          </p>
        )}
      </div>
    </div>
  )
}

/** Résultat de l'épreuve : étoiles et grande célébration si réussie (maquette 10 du sprint 27), écran sobre sinon. */
function Resultat({ refCiv, result, questions, answers, onRetry }) {
  const { civ } = refCiv
  const navigate = useNavigate()
  const av = useProgress((s) => s.aventure)
  const showToast = useUI((s) => s.showToast)
  const tronc = estTronc(P, civ.id)
  const nb = etoilesEpreuve(result.correct, result.total)
  const seuils = seuilsEtoiles(result.total)
  const reussi = nb >= 1
  const note = `${result.correct}/${result.total}`
  const ev = result.evenements ?? []
  const { faire, ecran } = useApresCelebrations(ev)
  const parRaison = (r) => ev.filter((e) => e.type === 'xp' && e.raison === r).reduce((n, e) => n + e.montant, 0)
  const lignes = [
    [reussi ? 'Réponses et combos' : 'Réponses (épreuve ratée : 2 XP chacune)', parRaison('epreuve')],
    ['Annexe faite', parRaison('annexe')],
    ['Épreuve réussie', parRaison('reussite')],
    ['Nouvelles étoiles', parRaison('etoiles')],
    ['Bonus du jour', parRaison('bonus-jour')],
    ['Palier de série', parRaison('palier')],
    ['Titre', parRaison('titre')],
  ].filter(([, v]) => v > 0)
  const erreurs = questions.filter((q) => answers.some((a) => a.id === q.id && !a.correct))
  const n = niveau(av.xp)
  const meilleures = salleDe(av, civ.id).etoiles // étoiles gardées (la meilleure épreuve)
  useEffect(() => {
    haptic(reussi ? 'recompense' : 'error')
  }, [reussi])

  const partager = async () => {
    const titre = titresObtenus(P, av).find((t) => t.id === av.titreAffiche)?.titre
    const blob = await imageResultat({ titre: civ.label, sousTitre: tronc ? 'Épreuve réussie' : 'Annexe réussie', note, etoiles: nb, niveau: n.niveau, rang: n.rang, titreAffiche: titre })
    const r = await partagerImage(blob, `histomap-${civ.id}.png`, `${civ.label} : ${note} sur HistoMap`)
    if (r === 'telecharge') showToast({ text: 'Image enregistrée dans vos téléchargements', tone: 'success' })
  }

  const Erreurs = () =>
    erreurs.length > 0 && (
      <details className="mt-4 text-left border-t pt-3" style={{ borderColor: 'rgba(128, 112, 90, .4)' }}>
        <summary className="min-h-[44px] flex items-center cursor-pointer font-semibold">Revoir mes erreurs ({erreurs.length})</summary>
        <ul className="mt-1 space-y-3 text-sm">
          {erreurs.map((q) => (
            <li key={q.id}>
              <p className="opacity-80">{q.prompt}</p>
              <p className="font-semibold mt-0.5">→ {bonneReponse(q)}</p>
            </li>
          ))}
        </ul>
      </details>
    )

  const Seuils = ({ style }) => (
    <p className="mt-3 text-xs tabular-nums" style={style}>
      ★ {seuils[0]} · ★★ {seuils[1]} · ★★★ {seuils[2]} bonnes réponses sur {result.total}
    </p>
  )

  if (!reussi)
    return (
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-[460px] mx-auto text-center py-4 text-ink">
        <p className="eyebrow">{meilleures ? 'Pas cette fois' : tronc ? 'Épreuve à retenter' : 'Annexe faite'}</p>
        <div className="mt-4 mx-auto w-36 h-36 rounded-full grid place-items-center bg-surface2">
          <span className="font-display text-5xl font-bold">{note}</span>
        </div>
        <h2 className="font-display text-4xl font-bold mt-4 leading-none">{civ.label}</h2>
        <p className="text-muted mt-2">
          {meilleures
            ? 'Tes étoiles restent acquises. Rejoue quand tu veux pour en gagner d’autres.'
            : `Encore ${seuils[0] - result.correct} bonne${seuils[0] - result.correct > 1 ? 's' : ''} réponse${seuils[0] - result.correct > 1 ? 's' : ''} pour ★. Tes erreurs reviendront en partie à la prochaine tentative.`}
        </p>
        <Seuils />
        {lignes.length > 0 && (
          <div className="mt-5 text-left border-t border-line">
            {lignes.map(([label, v]) => (
              <div key={label} className="flex justify-between py-2.5 border-b border-line text-sm"><span className="text-muted">{label}</span><span className="font-bold tabular-nums">+{v} XP</span></div>
            ))}
          </div>
        )}
        <Erreurs />
        <div className="mt-6 grid gap-2.5">
          <button onClick={() => faire(onRetry)} className="btn-accent h-12 w-full text-[15px] font-bold">{meilleures ? 'Rejouer' : 'Retenter'}</button>
          <button onClick={() => faire(() => navigate(`/aventure/salle/${civ.id}/decouvrir`))} className="btn-secondary h-12 w-full">Revoir les cartes</button>
          <button onClick={() => faire(() => navigate(`/?salle=${civ.id}`))} className="btn-ghost h-11 w-full">Retour à la salle</button>
        </div>
        {ecran}
      </motion.div>
    )

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto overscroll-contain" style={{ background: '#1f1812', color: '#f6efe2' }}>
      <Particules effet={EFFET} />
      <div className="relative w-full max-w-[440px] mx-auto px-5 pt-[max(2.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center">
        <p className="text-xs font-bold uppercase tracking-[.22em]" style={{ color: '#e0c27a' }}>{tronc ? 'Épreuve réussie' : 'Annexe réussie'}</p>
        <div className="relative mt-6 h-56 grid place-items-center">
          <Rayons taille={460} />
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 9, stiffness: 160, delay: 0.15 }}
            className="relative w-48 h-48 rounded-full grid place-items-center overflow-hidden"
            style={{ background: '#e0c27a', color: '#2a2118', boxShadow: '0 0 0 8px #a8791c, 0 0 70px rgba(224,194,122,.55)' }}
          >
            <span aria-hidden="true" className="hm-reflet absolute -top-10 left-0 w-10 h-72" style={{ background: 'rgba(255,255,255,.35)' }} />
            <span className="relative">
              <span className="block font-display text-6xl font-bold leading-none">{note}</span>
              <Etoiles n={nb} className="block text-3xl mt-1" />
            </span>
          </motion.div>
        </div>
        <h2 className="font-display text-5xl font-bold mt-4 leading-none">{civ.label}</h2>
        <p className="mt-2 text-[15px]" style={{ color: '#c9b48c' }}>
          {nb < 3 ? `Encore ${seuils[nb] - result.correct} bonne(s) réponse(s) pour ${'★'.repeat(nb + 1)}` : 'Trois étoiles : salle parfaitement maîtrisée'}
        </p>
        <Seuils style={{ color: '#c9b48c' }} />

        <div className="mt-5 text-left border-t" style={{ borderColor: '#4a3d2c' }}>
          {lignes.map(([label, v]) => (
            <div key={label} className="flex justify-between py-2.5 border-b text-sm" style={{ borderColor: '#3a2f22' }}>
              <span style={{ color: '#d8c7a6' }}>{label}</span><span className="font-bold tabular-nums">+{v} XP</span>
            </div>
          ))}
          <p className="text-xs mt-2" style={{ color: '#c9b48c' }}>Niveau {n.niveau} · {n.rang} · {av.xp.toLocaleString('fr-FR')} XP</p>
        </div>

        <Erreurs />

        <div className="mt-6 grid gap-2.5">
          <button onClick={() => faire(() => navigate('/'))} className="min-h-[54px] font-bold text-[16px]" style={{ background: '#e0c27a', color: '#2a2118' }}>Continuer le parcours</button>
          <button onClick={partager} className="min-h-[48px] font-semibold border" style={{ borderColor: '#a8791c' }}>Partager mon résultat</button>
          {nb < 3 && <button onClick={() => faire(onRetry)} className="min-h-[44px] text-sm font-semibold" style={{ color: '#e0c27a' }}>Rejouer pour les étoiles</button>}
        </div>
      </div>
      {ecran}
    </div>
  )
}

import { useEffect, useMemo, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { findCivilization } from '../lib/data'
import { buildDeck, chapterCards, chapterSize } from '../lib/revision'
import { composerEpreuve, prepareQuestion, questionPool } from '../lib/quiz'
import { bonneReponse, premiereSansReponse } from '../lib/questions'
import { cartesDe } from '../lib/questionsCartes'
import { choisirEclairs } from '../lib/eclairs'
import { imageResultat, partagerImage } from '../lib/partage'
import { cheminDe, epreuveDe, estTronc, etapeAccessible, etoilesEpreuve, initiales, niveauxVus, nomCourt, salleDe, salleEnCours, seuilsEtoiles, titresObtenus } from '../lib/aventure'
import { ceQuiSouvre } from '../lib/ecransSalle'
import { haptic } from '../lib/haptics'
import useDocumentTitle from '../lib/useDocumentTitle'
import { BAREME, gainReponse, niveau } from '../lib/xp'
import { xpReponses } from '../lib/progression'
import { useAmbiance } from '../lib/musique'
import { definirCombo } from '../lib/sons'
import { PARCOURS_AVENTURE as P, useProgress } from '../store/progress'
import { useUI } from '../store/ui'
import { useApresCelebrations } from '../components/celebration/Celebrations'
import { EFFET, GrandesEtoiles, Particules, Rayons, SeuilsEtoiles } from '../components/celebration/elements'
import Icon from '../components/ui/Icon'
import CardDeck from '../components/revision/CardDeck'
import ChapterGate from '../components/revision/ChapterGate'
import QuestionView from '../components/quiz/QuestionView'
import { ETAPE_LABEL } from '../components/aventure/EtatSalle'
import NotFoundPage from './NotFoundPage'

/**
 * Une étape d'une salle de l'Aventure (plein écran) — V3.1, sprint 31 (maquettes 8 à 11 du sprint 27) :
 *   /aventure/salle/:civId/decouvrir     tronc : cartes de niveau 1 + 3 questions éclair → salle découverte (fin : ce qui s'ouvre) ;
 *                                        annexe : LA séance, d'un seul tenant : cartes de niveau 1 puis mini-épreuve de 8
 *   /aventure/salle/:civId/approfondir   tronc, bonus : cartes de niveau 2 (+ cartes à revoir) + 5 questions éclair ;
 *                                        une fois fait, « Revoir les cartes » : tout le chapitre
 *   /aventure/salle/:civId/epreuve       12 questions (annexe : 8) sur les cartes vues, XP en direct, combo sans fin
 *                                        (XP plafonnée à ×5) → résultat en étoiles ★ 9, ★★ 11, ★★★ 12 (annexe : 6, 7, 8)
 * Les seuils des étoiles ne s'affichent qu'à l'écran de résultat (décision 4).
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
  // Annexe : la séance est un seul bloc ; passer des cartes (/decouvrir) à la mini-épreuve (/epreuve) garde le même écran
  const cle = estTronc(P, civId) || etape === 'approfondir' ? `${civId}-${etape}` : `${civId}-seance`
  return (
    <ChapterGate key={cle} refCiv={ref}>
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

/**
 * Barre du haut : quitter, progression, XP. `cartes` (séance d'annexe) : les cartes forment un premier bloc
 * continu, suivi des segments de la mini-épreuve — une seule barre pour toute la séance.
 */
function Barre({ titre, onClose, segments, xp, cartes }) {
  return (
    <div className="relative shrink-0 px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-2 max-w-[600px] w-full mx-auto">
      <div className="flex items-center gap-2">
        <button onClick={onClose} className="btn-icon -ml-2" aria-label="Quitter (la progression est gardée)">
          <Icon name="close" />
        </button>
        <div className="flex-1 flex gap-[3px]" aria-hidden="true">
          {cartes && (
            <span className="h-2 bg-line overflow-hidden mr-1" style={{ flex: '4 1 0' }}>
              <span className="block h-full bg-accent transition-[width] duration-300" style={{ width: `${Math.min(100, (cartes.fait / Math.max(1, cartes.total)) * 100)}%` }} />
            </span>
          )}
          {segments.map((c, i) => (
            <span key={i} className={`h-2 flex-1 ${c}`} />
          ))}
        </div>
        {xp !== undefined && (
          <span className="h-8 px-2.5 inline-flex items-center text-[13px] font-bold tabular-nums shrink-0" style={{ background: '#2a2118', color: '#e0c27a' }} aria-label={`${xp} XP gagnés`}>
            {xp} XP
          </span>
        )}
      </div>
      <p className="eyebrow mt-2">{titre}</p>
    </div>
  )
}

/** Titre(s) des cartes où se lit la réponse d'une question (« Les guerres puniques contre Rome »). */
function useSources(refCiv) {
  return useMemo(() => {
    const titres = Object.fromEntries(chapterCards(refCiv).map((c) => [c.id, c.title ?? c.nom ?? c.kicker]))
    return (q) => {
      const ids = (cartesDe(q) ?? []).filter((id) => titres[id])
      return ids.length ? ids.map((id) => titres[id]).join(' ; ') : null
    }
  }, [refCiv])
}

const themeDe = (civId) => P.mondes[P.monde.get(civId)].theme
const nomDe = (id) => findCivilization(id)?.civ.label ?? id
const court = (id) => nomCourt(P, id, nomDe(id))
const xpDe = (evenements) => evenements.filter((e) => e.type === 'xp').reduce((n, e) => n + e.montant, 0)
const pluriel = (n, mot, motPluriel = `${mot}s`) => `${n} ${n > 1 ? motPluriel : mot}`

/** Pastille d'une salle (initiales dans la couleur de son monde, liseré or) ; `fait` : coche dorée. */
function Pastille({ civId, taille = 40, fait = false }) {
  return (
    <span
      aria-hidden="true"
      className="relative shrink-0 rounded-full grid place-items-center font-display font-bold"
      style={{ width: taille, height: taille, fontSize: taille * 0.4, background: `var(--m-${themeDe(civId)}-acc)`, color: '#fff', border: `${Math.max(2, Math.round(taille / 22))}px solid #e0c27a` }}
    >
      {initiales(court(civId))}
      {fait && (
        <span className="absolute -right-1 -bottom-1 rounded-full grid place-items-center" style={{ width: taille * 0.3, height: taille * 0.3, background: '#e0c27a', color: '#2a2118' }}>
          <Icon name="check" size={taille * 0.16} strokeWidth={3} />
        </span>
      )}
    </span>
  )
}

// ── Découvrir / Approfondir (et cartes de la séance d'une annexe) ─────────────────

function Etape({ refCiv, etape }) {
  usePleinEcran()
  const { civ } = refCiv
  const navigate = useNavigate()
  const chapter = useProgress((s) => s.chapters[civ.id])
  const approfondi = useProgress((s) => s.aventure.salles[civ.id]?.approfondi ?? false)
  const startChapter = useProgress((s) => s.startChapter)
  const answerCard = useProgress((s) => s.answerCard)
  const previousCard = useProgress((s) => s.previousCard)
  const finishChapter = useProgress((s) => s.finishChapter)
  const [phase, setPhase] = useState('cartes') // cartes → questions → fin
  const [justes, setJustes] = useState([])
  const [evenements, setEvenements] = useState(null)
  // Approfondir déjà fait : « Revoir les cartes » = tout le chapitre (round 2)
  const [round] = useState(() => (etape === 'decouvrir' ? 0 : approfondi ? 2 : 1))
  const tronc = estTronc(P, civ.id)
  // annexe : pas de questions éclair, la séance continue par la mini-épreuve
  const nbEclairs = tronc ? ECLAIRS[etape] : 0
  const sources = useSources(refCiv)

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
  const [nbLues, setNbLues] = useState(0)

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
    setNbLues(nbContenu)
    const ev = finishChapter(civ.id, { eclairs: justes.filter(Boolean).length })
    haptic('complete')
    // annexe : les cartes lues, place à la mini-épreuve, sur le même écran (la séance n'est terminée qu'après elle)
    if (!tronc && round === 0) return navigate(`/aventure/salle/${civ.id}/epreuve`, { replace: true })
    setEvenements(ev)
    setPhase('fin')
  }
  const fermer = () => navigate(`/?salle=${civ.id}`)

  const annexe = !tronc && round === 0
  const nomEtape = annexe ? 'Séance' : round === 2 ? 'Cartes revues' : ETAPE_LABEL[etape]
  const segments = annexe
    ? Array.from({ length: epreuveDe(P, civ.id).questions }, () => 'bg-line')
    : phase === 'cartes'
      ? cards.map((_, i) => (i <= pos ? 'bg-accent' : 'bg-line'))
      : questions.map((_, i) => (i < justes.length ? (justes[i] ? 'bg-accent2' : 'bg-accent') : i === qi ? 'bg-ink' : 'bg-line'))
  const finLabel = annexe ? 'Passer aux questions' : qi < questions.length ? 'Questions éclair' : 'Terminer'

  return (
    <div className="fixed inset-0 z-50 bg-bg flex flex-col" role="dialog" aria-label={`${nomEtape} : ${civ.label}`}>
      {phase !== 'fin' && (
        <Barre
          titre={`${civ.label} · ${nomEtape}${pauseMilieu ? ' · question d’étape' : phase === 'questions' ? ' · questions éclair' : cards.length ? ` · carte ${pos + 1} / ${cards.length}` : ''}`}
          onClose={fermer}
          segments={segments}
          cartes={annexe ? { fait: pos + 1, total: cards.length } : undefined}
          xp={phase === 'questions' ? justes.filter(Boolean).length * BAREME.eclair : undefined}
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
              source={sources(questions[0])}
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
            finLabel={finLabel}
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
              source={sources(questions[qi])}
              onAnswer={(_, ok) => setJustes((j) => [...j, ok])}
              onNext={() => (qi < questions.length - 1 ? setQi(qi + 1) : terminer())}
              isLast={qi === questions.length - 1}
            />
          </AnimatePresence>
        )}
        {phase === 'fin' && <EtapeFin refCiv={refCiv} etape={etape} evenements={evenements ?? []} justes={justes.filter(Boolean).length} total={questions.length} cartes={nbLues} />}
      </div>
    </div>
  )
}

/** Fin de Découvrir (maquette 8) ou d'Approfondir : salle découverte, XP, ce qui s'ouvre, la suite. */
function EtapeFin({ refCiv, etape, evenements, justes, total, cartes }) {
  const { civ } = refCiv
  const navigate = useNavigate()
  const av = useProgress((s) => s.aventure)
  const premiere = evenements.some((e) => e.type === (etape === 'decouvrir' ? 'decouverte' : 'approfondi'))
  const ouvre = ceQuiSouvre(P, av, evenements)
  const xp = xpDe(evenements)
  const s = salleDe(av, civ.id)
  const suivante = salleEnCours(P, av)
  const n = epreuveDe(P, civ.id).questions
  const tailles = chapterSize(refCiv)
  const { faire, ecran } = useApresCelebrations(evenements)
  useEffect(() => {
    if (premiere) haptic('recompense')
  }, [premiere])

  const surtitre = etape === 'decouvrir' ? (premiere ? 'Salle découverte' : 'Découvrir revu') : premiere ? 'Approfondir terminé' : 'Cartes revues'
  const lignes = [
    ...ouvre.mondes.map((w) => ({ cle: `monde-${w}`, titre: `Nouveau monde : ${P.mondes[w].nom}`, detail: 'Le chemin continue', id: null })),
    ...ouvre.chemin.map((id, i) => ({ cle: id, titre: nomDe(id), detail: i === 0 && id === suivante ? 'Salle suivante du chemin' : 'Sur ton chemin', id })),
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative w-full max-w-[440px] mx-auto flex-1 flex flex-col">
      {premiere && etape === 'decouvrir' && <Particules effet={EFFET} nombre={14} />}
      <div className="relative pt-8 flex flex-col items-center gap-3.5 text-center">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-accent">{surtitre}</p>
        <motion.span initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', damping: 11, delay: 0.1 }} className="shadow-lift rounded-full">
          <Pastille civId={civ.id} taille={112} fait />
        </motion.span>
        <h2 className="font-display text-[42px] font-bold text-ink leading-none text-balance">{civ.label}</h2>
        <span className="px-3 py-1 text-[15px] font-bold tabular-nums" style={{ background: '#2a2118', color: '#e0c27a' }}>
          +{xp} XP
        </span>
        <p className="text-[13px] text-muted">
          {cartes > 0 && pluriel(cartes, 'carte lue', 'cartes lues')}
          {total > 0 && ` · ${pluriel(justes, 'question éclair juste', 'questions éclair justes')} sur ${total}`}
        </p>
        {etape === 'approfondir' && <p className="text-sm text-ink">Ces cartes entrent maintenant dans l’épreuve.</p>}
      </div>

      {(lignes.length > 0 || ouvre.annexes.length > 0) && (
        <div className="relative mt-6 flex flex-col border-t border-line">
          <p className="pt-2.5 pb-1 text-[11px] font-bold uppercase tracking-[.14em] text-muted">Ce qui s’ouvre</p>
          {lignes.map((l) => (
            <div key={l.cle} className="flex items-center gap-3 py-2.5 border-b border-line">
              {l.id ? <Pastille civId={l.id} /> : <span aria-hidden="true" className="w-10 h-10 shrink-0 rounded-full grid place-items-center bg-surface2 text-accent"><Icon name="compass" size={20} /></span>}
              <span className="flex flex-col text-left">
                <span className="font-bold text-ink">{l.titre}</span>
                <span className="text-xs text-muted">{l.detail}</span>
              </span>
            </div>
          ))}
          {ouvre.annexes.length > 0 && (
            <div className="flex items-center gap-3 py-2.5 border-b border-line">
              <span aria-hidden="true" className="relative w-10 h-10 shrink-0">
                {ouvre.annexes.slice(0, 2).map((id, i) => (
                  <span
                    key={id}
                    className="absolute w-[26px] h-[26px] rounded-full grid place-items-center text-[10px] font-bold bg-surface text-ink border-2"
                    style={{ left: i * 14, top: i * 12, borderColor: `var(--m-${themeDe(id)}-trait)` }}
                  >
                    {initiales(court(id))}
                  </span>
                ))}
              </span>
              <span className="flex flex-col text-left min-w-0">
                <span className="font-bold text-ink">
                  {pluriel(ouvre.annexes.length, 'annexe')} : {ouvre.annexes.map(court).join(', ')}
                </span>
                <span className="text-xs text-muted">Bonus, quand tu veux</span>
              </span>
            </div>
          )}
        </div>
      )}

      <div className="flex-1 min-h-6" />
      <div className="relative grid gap-2.5 pb-2">
        <button
          onClick={() => faire(() => navigate(`/aventure/salle/${civ.id}/epreuve`))}
          className="min-h-[60px] px-[18px] py-2 flex items-center justify-between gap-3 bg-accentbtn text-white text-left shadow-soft hover:brightness-110 transition active:scale-[.99]"
        >
          <span className="flex flex-col">
            <span className="text-lg font-bold leading-tight">{s.etoiles ? 'Rejouer l’épreuve' : 'Passer l’épreuve'}</span>
            <span className="text-[13px] opacity-90">
              {etape === 'decouvrir' && !s.approfondi && cartes ? `${n} questions sur ces ${cartes} cartes` : s.approfondi ? `${n} questions · cartes de Découvrir et d’Approfondir` : `${n} questions sur les cartes vues`}
            </span>
          </span>
          <Icon name="play" size={22} className="shrink-0" />
        </button>
        <button onClick={() => faire(() => navigate('/'))} className="min-h-[52px] border border-ink text-ink font-bold flex items-center justify-center gap-2 hover:bg-surface transition">
          {suivante && suivante !== civ.id ? (
            <>
              Salle suivante : {court(suivante)} <Icon name="arrowRight" size={18} className="-rotate-90" />
            </>
          ) : (
            'Retour à la carte'
          )}
        </button>
        {etape === 'decouvrir' && !s.approfondi && (
          <button onClick={() => faire(() => navigate(`/aventure/salle/${civ.id}/approfondir`))} className="min-h-[44px] text-sm font-bold text-accent">
            + Approfondir (bonus){tailles?.tier2 ? ` · ${pluriel(tailles.tier2, 'carte')}` : ''}
          </button>
        )}
      </div>
      {ecran}
    </motion.div>
  )
}

// ── Épreuve (et mini-épreuve d'une annexe) ───────────────────────────────────────

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
  // Séance d'annexe (première fois) : la barre garde le bloc des cartes déjà lues
  const [seance] = useState(() => !tronc && !useProgress.getState().aventure.salles[civ.id]?.decouverte)
  const { questions: longueur, rattrapage } = epreuveDe(P, civ.id)
  const sources = useSources(refCiv)

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

  const nomEtape = tronc ? 'Épreuve' : seance ? 'Séance' : 'Mini-épreuve'
  return (
    <div className="fixed inset-0 z-50 bg-bg flex flex-col" role="dialog" aria-label={`${nomEtape} : ${civ.label}`}>
      {!result && (
        <Barre
          titre={`${civ.label} · ${nomEtape}`}
          onClose={() => navigate(`/?salle=${civ.id}`)}
          segments={questions.map((x, i) => {
            const a = answers.find((y) => y.id === x.id)
            return a ? (a.correct ? 'bg-accent2' : 'bg-accent') : i === index ? 'bg-ink' : 'bg-line'
          })}
          cartes={seance ? { fait: 1, total: 1 } : undefined}
          xp={xpAffiche}
        />
      )}
      {!result && serie >= 2 && reussitePossible && <Combo serie={serie} total={total} gain={dernier} />}
      <div className="relative flex-1 min-h-0 flex flex-col px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] overflow-y-auto">
        {result ? (
          <Resultat refCiv={refCiv} result={result} onRetry={() => { setResult(null); setStep(null) }} />
        ) : q ? (
          <AnimatePresence mode="wait">
            <QuestionView
              key={q.id}
              question={q}
              index={index}
              total={questions.length}
              civ={civ}
              source={sources(q)}
              answered={answers.find((a) => a.id === q.id)}
              onAnswer={(response, correct) => answerQuestion(civ.id, q.id, response, correct)}
              onNext={suivante}
              isLast={index === questions.length - 1}
            />
          </AnimatePresence>
        ) : null}
      </div>
    </div>
  )
}

/**
 * Combo (maquette 9) : le compteur continue au-delà de ×5 (sprint 26), l'XP reste plafonnée à ×5
 * (BAREME.comboMax) ; l'effet monte avec la série : halo doré qui grandit, barre de la série qui s'éclaircit.
 */
function Combo({ serie, total, gain }) {
  const max = serie >= BAREME.comboMax
  const auDela = Math.min(Math.max(0, serie - BAREME.comboMax), 7)
  return (
    <div className="max-w-[600px] w-full mx-auto px-4 shrink-0">
      <motion.div
        key={serie}
        initial={{ scale: max ? 1.06 + auDela * 0.01 : 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: max ? 9 : 14, stiffness: 260 }}
        className="flex items-center gap-3.5 px-3.5 py-2.5"
        style={{ background: '#2a2118', color: '#f6efe2' }}
        role="status"
        aria-label={`Combo ×${serie}${max ? ', combo max' : ''} : ${serie} bonnes réponses d’affilée, +${gain} XP`}
      >
        <span
          aria-hidden="true"
          className={`w-[52px] h-[52px] shrink-0 rounded-full grid place-items-center font-display text-2xl font-bold ${max ? 'hm-flare' : ''}`}
          style={{ background: '#3a2f22', border: `2px solid ${max ? '#e0c27a' : '#6e5a3c'}`, color: '#f2d896', '--flare': `${10 + auDela * 3}px` }}
        >
          ×{serie}
        </span>
        <span aria-hidden="true" className="flex-1 min-w-0 flex flex-col gap-1.5">
          <span className="flex items-center gap-1.5 text-[15px] font-bold" style={{ color: '#e0c27a' }}>
            {max && <Icon name="flame" size={16} />}
            {max ? 'Combo max !' : `Combo ×${serie}`}
          </span>
          <span className="grid gap-[2px]" style={{ gridTemplateColumns: `repeat(${total}, minmax(0, 1fr))` }}>
            {Array.from({ length: total }, (_, k) => (
              <span key={k} className="h-2" style={{ background: k >= serie ? '#4a3d2c' : k < BAREME.comboMax ? '#a8791c' : k < BAREME.comboMax + 2 ? '#e0c27a' : '#f2d896' }} />
            ))}
          </span>
          <span className="text-xs" style={{ color: '#c9b48c' }}>{serie} bonnes réponses d’affilée</span>
        </span>
        <motion.span aria-hidden="true" key={`g-${serie}`} initial={{ y: 8, scale: 0.7, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }} transition={{ duration: 0.45 }} className="font-display text-[28px] font-bold" style={{ color: '#e0c27a' }}>
          +{gain}
        </motion.span>
      </motion.div>
    </div>
  )
}

// ── Résultat ─────────────────────────────────────────────────────────────────────

const NOMBRE = ['', 'Une', 'Deux', 'Trois']

/** Lignes d'XP d'un résultat, dans l'ordre des maquettes. */
function lignesXp(ev, { reussi, tronc }) {
  const parRaison = (r) => ev.filter((e) => e.type === 'xp' && e.raison === r).reduce((n, e) => n + e.montant, 0)
  const nouvelles = ev.find((e) => e.type === 'etoiles')?.nouvelles ?? 0
  return [
    ['Séance terminée', parRaison('annexe')],
    [reussi ? 'Bonnes réponses et combo' : 'Bonnes réponses (2 XP chacune)', parRaison('epreuve')],
    [tronc ? 'Première épreuve réussie' : 'Première mini-épreuve réussie', parRaison('reussite')],
    [nouvelles > 1 ? `${NOMBRE[nouvelles]} nouvelles étoiles` : 'Nouvelle étoile', parRaison('etoiles')],
    ['Bonus du jour', parRaison('bonus-jour')],
    ['Palier de série', parRaison('palier')],
    ['Titre', parRaison('titre')],
  ].filter(([, v]) => v > 0)
}

/** Erreurs de l'épreuve, repliées. `nuit` : sur fond encre. */
function Erreurs({ questions, answers, nuit }) {
  const erreurs = questions.filter((q) => answers.some((a) => a.id === q.id && !a.correct))
  if (!erreurs.length) return null
  return (
    <details className={`mt-2 text-left ${nuit ? '' : 'text-ink'}`}>
      <summary className="min-h-[44px] flex items-center gap-2 cursor-pointer text-sm font-bold" style={nuit ? { color: '#e0c27a' } : undefined}>
        <Icon name="chevronRight" size={16} className="rotate-90" />
        {erreurs.length > 1 ? `Revoir mes erreurs (${erreurs.length})` : 'Revoir mon erreur (1)'}
      </summary>
      <ul className="mt-1 mb-2 space-y-3 text-sm">
        {erreurs.map((q) => (
          <li key={q.id}>
            <p className={nuit ? '' : 'text-muted'} style={nuit ? { color: '#d8c7a6' } : undefined}>{q.prompt}</p>
            <p className="font-semibold mt-0.5">→ {bonneReponse(q)}</p>
          </li>
        ))}
      </ul>
    </details>
  )
}

/**
 * Résultat : épreuve du tronc réussie = grande célébration sur fond encre (maquette 10) ; épreuve ratée = écran sobre ;
 * annexe = bandeau couleur du monde (maquette 11). Les seuils des étoiles ne s'affichent qu'ici.
 */
function Resultat({ refCiv, result, onRetry }) {
  const { civ } = refCiv
  const navigate = useNavigate()
  const av = useProgress((s) => s.aventure)
  const showToast = useUI((s) => s.showToast)
  const tronc = estTronc(P, civ.id)
  const nb = etoilesEpreuve(result.correct, result.total)
  const seuils = seuilsEtoiles(result.total)
  const reussi = nb >= 1
  const note = `${result.correct} / ${result.total}`
  const ev = result.evenements ?? []
  const { faire, ecran } = useApresCelebrations(ev)
  const lignes = lignesXp(ev, { reussi, tronc })
  const n = niveau(av.xp)
  const gardees = salleDe(av, civ.id).etoiles // étoiles gardées (la meilleure épreuve)
  const theme = themeDe(civ.id)
  useEffect(() => {
    haptic(reussi ? 'recompense' : tronc ? 'error' : 'complete')
  }, [reussi, tronc])

  const partager = async () => {
    const titre = titresObtenus(P, av).find((t) => t.id === av.titreAffiche)?.titre
    const blob = await imageResultat({ titre: civ.label, sousTitre: tronc ? 'Épreuve réussie' : 'Annexe réussie', note: `${result.correct}/${result.total}`, etoiles: nb, niveau: n.niveau, rang: n.rang, titreAffiche: titre })
    const r = await partagerImage(blob, `histomap-${civ.id}.png`, `${civ.label} : ${result.correct}/${result.total} sur HistoMap`)
    if (r === 'telecharge') showToast({ text: 'Image enregistrée dans vos téléchargements', tone: 'success' })
  }
  const encore = (k) => seuils[k] - result.correct
  const objectif = nb < 3 ? `Encore ${pluriel(encore(nb), 'bonne réponse', 'bonnes réponses')} pour ${'★'.repeat(nb + 1)}` : null

  const XP = ({ nuit }) =>
    lignes.length > 0 && (
      <div className="mt-5 w-full text-left border-t" style={{ borderColor: nuit ? '#4a3d2c' : 'rgb(var(--c-line))' }}>
        {lignes.map(([label, v]) => (
          <div key={label} className="flex justify-between py-2.5 border-b text-sm" style={{ borderColor: nuit ? '#3a2f22' : 'rgb(var(--c-line))' }}>
            <span style={nuit ? { color: '#d8c7a6' } : undefined} className={nuit ? '' : 'text-muted'}>{label}</span>
            <span className="font-bold tabular-nums">+{v} XP</span>
          </div>
        ))}
      </div>
    )

  // Annexe (séance ou mini-épreuve rejouée) : maquette 11
  if (!tronc) {
    const parente = P.parent.get(civ.id)
    const surChemin = cheminDe(P, av).includes(civ.id)
    const sousTitre = [surChemin ? 'Salle de ton fil rouge' : parente ? `Annexe de la salle ${court(parente)}` : 'Annexe', result.correct === result.total ? 'sans faute' : null].filter(Boolean).join(' · ')
    const premiere = ev.some((e) => e.type === 'decouverte')
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-10 overflow-y-auto overscroll-contain bg-bg text-ink">
        <div className="w-full max-w-[460px] mx-auto min-h-full flex flex-col px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <div className="-mx-5 px-5 pt-[max(3rem,env(safe-area-inset-top))] pb-7 flex flex-col items-center gap-2.5 text-center" style={{ background: `var(--m-${theme}-acc)`, color: '#f6efe2' }}>
            <p className="text-xs font-bold uppercase tracking-[.2em]">{premiere ? 'Annexe terminée' : reussi ? 'Mini-épreuve réussie' : 'Mini-épreuve'}</p>
            <GrandesEtoiles n={nb} taille={56} vide="rgba(246,239,226,.7)" />
            <p className="font-display text-[44px] font-bold leading-none" style={{ color: '#e0c27a' }}>{note}</p>
            <h2 className="font-display text-[34px] font-bold leading-none text-balance">{civ.label}</h2>
            <p className="text-[13px]">{sousTitre}</p>
          </div>
          <div className="mt-4">
            <SeuilsEtoiles seuils={seuils} atteint={nb} />
          </div>
          {!reussi && <p className="mt-3 text-sm text-center">{gardees ? 'Tes étoiles restent acquises.' : `Annexe faite. ${objectif} : rejoue la mini-épreuve quand tu veux.`}</p>}
          <XP />
          <Erreurs questions={result.questions} answers={result.answers} />
          <p className="mt-3 text-[13px] text-muted text-center">Toutes ses cartes restent lisibles dans la fiche.</p>
          <div className="flex-1 min-h-6" />
          <div className="grid gap-2.5">
            <button onClick={() => faire(() => navigate('/'))} className="min-h-[56px] bg-accentbtn text-white text-[17px] font-bold hover:brightness-110 transition">Retour à la carte</button>
            {reussi && (
              <button onClick={partager} className="min-h-[48px] border border-ink text-ink font-bold flex items-center justify-center gap-2 hover:bg-surface transition">
                <Icon name="share" size={18} /> Partager
              </button>
            )}
            {nb < 3 && <button onClick={() => faire(onRetry)} className="min-h-[44px] text-sm font-bold text-accent">{reussi ? 'Rejouer pour les étoiles' : 'Rejouer la mini-épreuve'}</button>}
          </div>
        </div>
        {ecran}
      </motion.div>
    )
  }

  // Épreuve du tronc ratée : écran sobre
  if (!reussi)
    return (
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-[460px] mx-auto flex-1 flex flex-col text-center text-ink py-4">
        <p className="eyebrow">{gardees ? 'Pas cette fois' : 'Épreuve à retenter'}</p>
        <GrandesEtoiles n={0} taille={52} vide="rgb(var(--c-muted))" className="mt-5" />
        <p className="font-display text-5xl font-bold mt-3 leading-none">{note}</p>
        <h2 className="font-display text-4xl font-bold mt-2 leading-none text-balance">{civ.label}</h2>
        <p className="text-muted mt-3">
          {gardees ? 'Tes étoiles restent acquises. Rejoue quand tu veux pour en gagner d’autres.' : `${objectif}. Tes erreurs reviendront en partie à la prochaine tentative.`}
        </p>
        <div className="mt-4">
          <SeuilsEtoiles seuils={seuils} atteint={0} />
        </div>
        <XP />
        <Erreurs questions={result.questions} answers={result.answers} />
        <div className="flex-1 min-h-6" />
        <div className="grid gap-2.5">
          <button onClick={() => faire(onRetry)} className="btn-accent h-12 w-full text-[15px] font-bold">{gardees ? 'Rejouer' : 'Retenter'}</button>
          <button onClick={() => faire(() => navigate(`/aventure/salle/${civ.id}/decouvrir`))} className="btn-secondary h-12 w-full">Revoir les cartes</button>
          <button onClick={() => faire(() => navigate('/'))} className="btn-ghost h-11 w-full">Retour à la carte</button>
        </div>
        {ecran}
      </motion.div>
    )

  // Épreuve du tronc réussie : maquette 10
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto overscroll-contain" style={{ background: '#1f1812', color: '#f6efe2' }}>
      <Particules effet={EFFET} />
      <div className="relative w-full max-w-[440px] min-h-full mx-auto px-5 pt-[max(2.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] flex flex-col items-center text-center">
        <p className="text-xs font-bold uppercase tracking-[.22em]" style={{ color: '#e0c27a' }}>Épreuve réussie</p>
        <div className="relative mt-6 w-full grid place-items-center">
          <Rayons taille={400} />
          <GrandesEtoiles n={nb} vide="#6e5a3c" className="relative" />
        </div>
        <p className="relative mt-4 font-display text-[52px] font-bold leading-none" style={{ color: '#e0c27a' }}>{note}</p>
        <h2 className="relative mt-2 font-display text-[38px] font-bold leading-none text-balance">{civ.label}</h2>
        <p className="relative mt-2 text-sm" style={{ color: '#c9b48c' }}>{objectif ?? 'Trois étoiles : salle parfaitement maîtrisée'}</p>
        <div className="relative mt-4">
          <SeuilsEtoiles seuils={seuils} atteint={nb} ton="nuit" />
        </div>
        <XP nuit />
        <p className="relative w-full text-left text-xs mt-2" style={{ color: '#c9b48c' }}>Niveau {n.niveau} · {n.rang} · {av.xp.toLocaleString('fr-FR')} XP</p>
        <div className="relative w-full">
          <Erreurs questions={result.questions} answers={result.answers} nuit />
        </div>
        <div className="flex-1 min-h-6" />
        <div className="relative w-full grid gap-2.5">
          <button onClick={() => faire(() => navigate('/'))} className="min-h-[54px] font-bold text-[16px]" style={{ background: '#e0c27a', color: '#2a2118' }}>Continuer</button>
          <button onClick={partager} className="min-h-[48px] font-semibold border flex items-center justify-center gap-2" style={{ borderColor: '#a8791c' }}>
            <Icon name="share" size={18} /> Partager mon résultat
          </button>
          {nb < 3 && <button onClick={() => faire(onRetry)} className="min-h-[44px] text-sm font-semibold" style={{ color: '#e0c27a' }}>Rejouer pour les étoiles</button>}
        </div>
      </div>
      {ecran}
    </div>
  )
}

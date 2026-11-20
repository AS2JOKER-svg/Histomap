import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { findCivilization, getStats, useCiv } from '../lib/data'
import { useChapter } from '../lib/chapters'
import { prepareQuestion, questionPool, rng, shuffle } from '../lib/quiz'
import { haptic } from '../lib/haptics'
import useDocumentTitle from '../lib/useDocumentTitle'
import { BAREME } from '../lib/xp'
import { solidBg } from '../lib/color'
import { useAmbiance } from '../lib/musique'
import { PARCOURS_AVENTURE as P, useProgress } from '../store/progress'
import QuestionView from '../components/quiz/QuestionView'
import { EFFET, Particules } from '../components/celebration/elements'

/**
 * Premier lancement (maquette 4, V3, sprint 23) : bienvenue → fil rouge → 3 questions éclair
 * sur la première salle → première récompense (+50 XP, la série commence). « Passer » à tout moment.
 * Revu plus tard (Profil › Réglages › « Revoir la présentation ») : même parcours, sans nouvelle récompense.
 */
const POPULAIRES = ['france', 'rome', 'egypte', 'chine', 'japon', 'perse', 'mexique', 'angleterre']
const PREMIERE_SALLE = P.mondes[0].tronc[0]

export default function BienvenuePage() {
  useDocumentTitle('Bienvenue')
  useAmbiance(PREMIERE_SALLE)
  const navigate = useNavigate()
  const dejaFait = useRef(useProgress.getState().aventure.onboarding).current
  const filActuel = useProgress((s) => s.aventure.filRouge)
  const terminer = useProgress((s) => s.terminerOnboarding)
  const [etape, setEtape] = useState(0) // 0 bienvenue · 1 fil rouge · 2 questions · 3 récompense
  const [fil, setFil] = useState(filActuel)
  const [justes, setJustes] = useState(0)
  const [gain, setGain] = useState(0)
  const bouton = useRef(null)

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])
  useEffect(() => {
    bouton.current?.focus({ preventScroll: true })
  }, [etape])

  const passer = () => {
    terminer({ filRouge: fil, recompense: false })
    navigate('/', { replace: true })
  }
  const finir = (nbJustes) => {
    setJustes(nbJustes)
    const ev = terminer({ filRouge: fil, recompense: !dejaFait })
    setGain(ev.filter((e) => e.type === 'xp').reduce((n, e) => n + e.montant, 0))
    haptic('recompense')
    setEtape(3)
  }

  return (
    <div className="fixed inset-0 z-[60] bg-bg flex flex-col overflow-y-auto" role="dialog" aria-modal="true" aria-label="Bienvenue dans HistoMap">
      <div className="w-full max-w-md mx-auto px-5 pt-[max(1rem,env(safe-area-inset-top))] flex items-center justify-between">
        <div className="flex gap-1.5" role="img" aria-label={`Étape ${etape + 1} sur 4`}>
          {[0, 1, 2, 3].map((k) => <span key={k} className={`w-7 h-1 ${k <= etape ? 'bg-accent' : 'bg-line'}`} />)}
        </div>
        {etape < 3 && <button onClick={passer} className="min-h-[44px] px-2 text-sm font-semibold text-muted hover:text-ink">Passer</button>}
      </div>

      <div className="flex-1 w-full max-w-md mx-auto px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div key={etape} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }} className="flex-1 flex flex-col">
            {etape === 0 && (
              <>
                <p className="mt-10 eyebrow text-accent">Bienvenue au musée</p>
                <h1 className="font-display text-5xl font-bold text-ink leading-[1.02] mt-2">L’histoire du monde, salle après salle</h1>
                <p className="mt-4 text-[17px] leading-relaxed text-ink/90">
                  {getStats().civs} civilisations réparties en 5 mondes, de la Préhistoire à nos jours. Chaque salle se découvre en quelques minutes, puis se gagne à l’Épreuve : jusqu’à trois étoiles.
                </p>
                <ul className="mt-6 space-y-2.5 text-[15px] text-ink">
                  <li className="flex gap-3"><span className="font-display text-xl font-bold text-accent w-6">1</span> Découvrir, puis l’Épreuve ; Approfondir en bonus</li>
                  <li className="flex gap-3"><span className="font-display text-xl font-bold text-accent w-6">2</span> XP, rangs, étoiles et titres à collectionner</li>
                  <li className="flex gap-3"><span className="font-display text-xl font-bold text-accent w-6">3</span> L’Atlas reste ouvert : frise, carte, fiches</li>
                </ul>
                <button ref={bouton} onClick={() => setEtape(1)} className="btn-accent h-[52px] w-full text-base font-bold mt-auto">Commencer</button>
              </>
            )}

            {etape === 1 && (
              <>
                <h1 className="mt-8 font-display text-4xl font-bold text-ink leading-tight">Quel fil rouge te fait envie ?</h1>
                <p className="mt-2 text-[15px] text-ink/90">Tu traverseras toutes les époques ; les salles de ton fil rouge s’ajoutent à ton chemin, de la première à la dernière.</p>
                <div className="mt-5 grid grid-cols-2 gap-2.5" role="group" aria-label="Fils rouges">
                  {POPULAIRES.map((id) => P.filsRouges.find((f) => f.id === id)).filter(Boolean).map((f) => (
                    <button
                      key={f.id}
                      onClick={() => { haptic('select'); setFil(f.id) }}
                      aria-pressed={fil === f.id}
                      className={`min-h-[60px] p-2.5 text-left flex items-center gap-2.5 border transition ${fil === f.id ? 'border-accent ring-2 ring-accent bg-surface' : 'border-line bg-surface hover:border-muted'}`}
                    >
                      <span aria-hidden="true" className="w-8 h-8 shrink-0 rounded-full grid place-items-center text-[12px] font-bold text-white" style={{ background: solidBg(f.couleur ?? '#6e5a3c') }}>{f.label.slice(0, 2)}</span>
                      <span className="text-sm font-semibold text-ink leading-tight">{f.label}</span>
                    </button>
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted">{P.filsRouges.length} fils rouges en tout, à retrouver dans ton Profil (Collections).</p>
                <button ref={bouton} onClick={() => setEtape(2)} className="btn-accent h-[52px] w-full text-base font-bold mt-auto">{fil ? 'Continuer' : 'Choisir plus tard'}</button>
              </>
            )}

            {etape === 2 && <Questions onFin={finir} />}

            {etape === 3 && <Recompense gain={gain} justes={justes} dejaFait={dejaFait} bouton={bouton} onEntrer={() => navigate('/', { replace: true })} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

/**
 * 3 questions éclair sur la première salle de l'Aventure. Le chapitre est chargé ici même
 * (pas de ChapterGate : il s'affiche dans une couche à part, qui serait cachée sous cet écran).
 */
function Questions({ onFin }) {
  const ref = findCivilization(PREMIERE_SALLE)
  const chapitre = useChapter(PREMIERE_SALLE)
  const fiche = useCiv(PREMIERE_SALLE)
  const pret = chapitre.status === 'ready' && fiche.status === 'ready'
  const erreur = chapitre.status === 'error' || fiche.status === 'error'
  const full = useMemo(() => (pret ? { ...ref, civ: fiche.civ, hand: chapitre.chapter } : null), [pret, ref, fiche.civ, chapitre.chapter])
  return (
    <>
      <p className="mt-6 eyebrow">Première salle · {ref.civ.label}</p>
      <h1 className="font-display text-3xl font-bold text-ink leading-tight mt-1">Trois questions pour te mettre en jambes</h1>
      {full ? (
        <Serie refCiv={full} onFin={onFin} />
      ) : erreur ? (
        <div className="mt-6">
          <p className="text-[15px] text-ink">Les questions n’ont pas pu être chargées (connexion ?). Tu les retrouveras dans la première salle.</p>
          <button onClick={() => onFin(0)} className="btn-accent h-12 w-full mt-4 font-bold">Continuer</button>
        </div>
      ) : (
        <div className="mt-6 space-y-3 animate-pulse" aria-busy="true" aria-label="Chargement des questions">
          <div className="h-6 w-3/4 bg-surface2" />
          {[0, 1, 2, 3].map((k) => <div key={k} className="h-14 bg-surface2" />)}
        </div>
      )}
    </>
  )
}

function Serie({ refCiv, onFin }) {
  const questions = useMemo(() => {
    const pool = questionPool(refCiv, { niveaux: [1] })
    const redigees = pool.filter((q) => q.id.startsWith('hand-'))
    return shuffle(redigees.length >= 3 ? redigees : pool, rng('bienvenue')).slice(0, 3).map((q) => prepareQuestion(q, 0))
  }, [refCiv])
  const [i, setI] = useState(0)
  const [justes, setJustes] = useState(0)
  const q = questions[i]
  if (!q) return null
  return (
    <div className="mt-4 relative">
      <AnimatePresence mode="wait">
        <QuestionView
          key={q.id}
          question={q}
          index={i}
          total={questions.length}
          civ={refCiv.civ}
          onAnswer={(_, ok) => ok && setJustes((n) => n + 1)}
          onNext={() => (i < questions.length - 1 ? setI(i + 1) : onFin(justes))}
          isLast={i === questions.length - 1}
        />
      </AnimatePresence>
    </div>
  )
}

function Recompense({ gain, justes, dejaFait, bouton, onEntrer }) {
  return (
    <div className="fixed inset-0 z-10 flex flex-col items-center px-5 text-center overflow-hidden" style={{ background: '#1f1812', color: '#f6efe2' }}>
      {!dejaFait && <Particules effet={EFFET} />}
      <div className="relative w-full max-w-sm flex-1 flex flex-col items-center pt-[14vh]">
        <p className="text-xs font-bold uppercase tracking-[.22em]" style={{ color: '#e0c27a' }}>{dejaFait ? 'Bon retour' : 'Première récompense'}</p>
        <motion.p initial={{ scale: 0.3, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', damping: 9, delay: 0.1 }} className="mt-6 font-display text-8xl font-bold leading-none" style={{ color: '#e0c27a' }}>
          {dejaFait ? `${justes}/3` : `+${gain || BAREME.onboarding}`}
        </motion.p>
        <p className="mt-2 text-sm" style={{ color: '#c9b48c' }}>{dejaFait ? 'bonnes réponses' : 'XP'}</p>
        <h2 className="mt-6 font-display text-4xl font-bold leading-tight">{dejaFait ? 'Tu connais déjà la maison' : 'Rang : Curieux'}</h2>
        <p className="mt-2 text-[15px]" style={{ color: '#d8c7a6' }}>
          {dejaFait ? 'Ton fil rouge est enregistré.' : `${justes} bonne${justes > 1 ? 's' : ''} réponse${justes > 1 ? 's' : ''} sur 3. Ta série de jours commence aujourd’hui : reviens demain pour l’entretenir.`}
        </p>
        <button ref={bouton} onClick={onEntrer} className="mt-auto mb-[max(1.75rem,env(safe-area-inset-bottom))] w-full min-h-[54px] font-bold text-base" style={{ background: '#e0c27a', color: '#2a2118' }}>
          Entrer dans l’Aventure
        </button>
      </div>
    </div>
  )
}

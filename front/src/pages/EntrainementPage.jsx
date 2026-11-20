import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { findCivilization, loadCiv } from '../lib/data'
import { loadChapter } from '../lib/chapters'
import { prepareQuestion, questionPool, shuffle } from '../lib/quiz'
import { useAmbiance } from '../lib/musique'
import useDocumentTitle from '../lib/useDocumentTitle'
import { PARCOURS_AVENTURE as P, useProgress } from '../store/progress'
import Icon from '../components/ui/Icon'
import QuestionView from '../components/quiz/QuestionView'
import { ENCRE, OR, usePleinEcran } from './DefiPage'

/**
 * Quiz infini (V3, sprint 25) : des questions sans fin, tirées des civilisations déjà découvertes
 * (la Préhistoire pour commencer), 4 par civilisation, sans répétition dans une séance.
 * Pour s'entraîner : pas d'XP, pas d'effet sur la progression.
 */
const PAR_LOT = 4

export default function EntrainementPage() {
  useDocumentTitle('Quiz infini')
  usePleinEcran()
  const navigate = useNavigate()
  const salles = useProgress((s) => s.aventure.salles)
  const [eligibles] = useState(() => {
    const d = P.ordre.filter((id) => salles[id]?.decouverte)
    return d.length ? d : P.mondes[0].tronc
  })
  const [file, setFile] = useState([]) // [{ q, civId }]
  const [i, setI] = useState(0)
  const [stats, setStats] = useState({ bonnes: 0, faites: 0, serie: 0, record: 0 })
  const [etat, setEtat] = useState('chargement') // chargement → jeu ; erreur ; pause (récapitulatif)
  const vues = useRef(new Set())
  const enCours = useRef(false)

  // Charge un lot de questions d'une civilisation tirée au hasard (essaie-en une autre si tout a déjà été vu)
  const charger = useCallback(async () => {
    if (enCours.current) return
    enCours.current = true
    try {
      for (let essai = 0; essai < 8; essai++) {
        if (essai === 6) vues.current.clear() // très longue séance : tout a été vu, les questions peuvent revenir
        const civId = eligibles[Math.floor(Math.random() * eligibles.length)]
        const ref = findCivilization(civId)
        const [civ, hand] = await Promise.all([loadCiv(civId), loadChapter(civId)])
        // questions sur les cartes de la salle (Découvrir + Approfondir), décision 8 de la V3.1
        const neuves = questionPool({ ...ref, civ, hand }).filter((q) => !vues.current.has(`${civId}:${q.id}`))
        const lot = shuffle(neuves, Math.random).slice(0, PAR_LOT)
        if (!lot.length) continue
        lot.forEach((q) => vues.current.add(`${civId}:${q.id}`))
        setFile((f) => [...f, ...lot.map((q) => ({ q: prepareQuestion(q, `infini-${Date.now()}`), civId }))])
        setEtat((e) => (e === 'chargement' ? 'jeu' : e))
        return
      }
      setEtat((e) => (e === 'chargement' ? 'erreur' : e))
    } catch {
      setEtat((e) => (e === 'chargement' ? 'erreur' : e))
    } finally {
      enCours.current = false
    }
  }, [eligibles])

  // toujours quelques questions d'avance
  useEffect(() => {
    if (file.length - i < 3) charger()
  }, [i, file.length, charger])

  const actuelle = file[i]
  useAmbiance(actuelle?.civId ?? eligibles[0])
  const ref = actuelle ? findCivilization(actuelle.civId) : null

  const repondre = (ok) =>
    setStats((s) => {
      const serie = ok ? s.serie + 1 : 0
      return { bonnes: s.bonnes + (ok ? 1 : 0), faites: s.faites + 1, serie, record: Math.max(s.record, serie) }
    })

  if (etat === 'pause' || etat === 'erreur')
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto" style={ENCRE} role="dialog" aria-label="Quiz infini">
        <div className="w-full max-w-md mx-auto px-5 pt-[max(2.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] min-h-full flex flex-col text-center">
          <p className="text-xs font-bold uppercase tracking-[.22em]" style={{ color: OR }}>Quiz infini</p>
          {etat === 'erreur' ? (
            <p className="mt-10 text-lg">Les questions n’ont pas pu être chargées. Vérifie ta connexion, puis réessaie.</p>
          ) : (
            <>
              <p className="mt-8 font-display text-8xl font-bold leading-none" style={{ color: OR }}>{stats.bonnes}<span className="text-4xl">/{stats.faites}</span></p>
              <p className="mt-2" style={{ color: '#d8c7a6' }}>bonnes réponses</p>
              <p className="mt-6 text-lg">Meilleure série : <strong style={{ color: OR }}>{stats.record}</strong> d’affilée</p>
            </>
          )}
          <div className="mt-auto pt-8 grid gap-2.5">
            {etat === 'pause' && (
              <button onClick={() => setEtat('jeu')} className="min-h-[54px] font-bold text-[16px]" style={{ background: OR, color: '#2a2118' }}>Continuer</button>
            )}
            <Link to="/defis" className="min-h-[48px] inline-flex items-center justify-center font-semibold border" style={{ borderColor: '#a8791c' }}>Retour aux défis</Link>
          </div>
        </div>
      </div>
    )

  return (
    <div className="fixed inset-0 z-50 bg-bg flex flex-col" role="dialog" aria-label="Quiz infini">
      <div className="shrink-0 px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-2 max-w-[600px] w-full mx-auto">
        <div className="flex items-center gap-2">
          <button onClick={() => (stats.faites ? setEtat('pause') : navigate('/defis'))} className="btn-icon -ml-2" aria-label="Terminer">
            <Icon name="close" />
          </button>
          <p className="flex-1 eyebrow">Quiz infini</p>
          <span className="h-8 px-2.5 inline-flex items-center gap-1 text-[13px] font-bold tabular-nums text-accent border border-line" aria-label={`Série de ${stats.serie}`}>
            <Icon name="flame" size={15} /> {stats.serie}
          </span>
          <span className="h-8 px-2.5 inline-flex items-center text-[13px] font-bold tabular-nums" style={{ background: '#2a2118', color: OR }} aria-label={`${stats.bonnes} bonnes réponses sur ${stats.faites}`}>
            {stats.bonnes} / {stats.faites}
          </span>
        </div>
        {ref && <p className="text-xs text-muted mt-2">Thème : {ref.civ.label} · {ref.epoch.label}</p>}
      </div>
      <div className="relative flex-1 min-h-0 flex flex-col px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))] overflow-y-auto">
        {actuelle ? (
          <AnimatePresence mode="wait">
            <QuestionView key={i} question={actuelle.q} index={stats.faites} total={0} civ={ref.civ} onAnswer={(_, ok) => repondre(ok)} onNext={() => setI(i + 1)} isLast={false} />
          </AnimatePresence>
        ) : (
          <div className="space-y-3 animate-pulse w-full max-w-[560px] mx-auto" aria-busy="true" aria-label="Chargement des questions">
            <div className="h-6 w-3/4 bg-surface2" />
            {[0, 1, 2, 3].map((k) => <div key={k} className="h-14 bg-surface2" />)}
          </div>
        )}
      </div>
    </div>
  )
}

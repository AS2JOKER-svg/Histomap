import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { findCivilization } from '../lib/data'
import { questionPool } from '../lib/quiz'
import { nettoyerPrenom, nouvelleGraine, questionsDefi } from '../lib/defi'
import { load, save } from '../lib/storage'
import { haptic } from '../lib/haptics'
import { useAmbiance } from '../lib/musique'
import useDocumentTitle from '../lib/useDocumentTitle'
import PageHeader from '../components/ui/PageHeader'
import Icon from '../components/ui/Icon'
import ChapterGate from '../components/revision/ChapterGate'
import ChoixCivilisation from '../components/defi/ChoixCivilisation'
import Serie from '../components/defi/Serie'
import { EFFET, Particules } from '../components/celebration/elements'
import { ENCRE, OR, Score, usePleinEcran } from './DefiPage'

/**
 * À deux sur le même téléphone (V3, sprint 25) : chacun son tour, les mêmes 10 questions ;
 * entre les deux, un écran « Passe le téléphone » cache le score du premier. Aucune donnée ne sort.
 */
export default function DeuxJoueursPage() {
  useDocumentTitle('Défi à deux')
  const navigate = useNavigate()
  const [noms, setNoms] = useState(() => load('histomap_duo', ['', '']))
  const [partie, setPartie] = useState(null) // { civId, graine }
  useAmbiance(partie?.civId ?? null)

  const lancer = (civId) => {
    const n = noms.map((x, i) => nettoyerPrenom(x) || `Joueur ${i + 1}`)
    save('histomap_duo', noms.map(nettoyerPrenom))
    setPartie({ civId, graine: nouvelleGraine(), noms: n })
  }

  if (partie) {
    const ref = findCivilization(partie.civId)
    return (
      <ChapterGate refCiv={ref}>
        {(full) => <Partie key={partie.graine} refCiv={full} partie={partie} onRevanche={() => setPartie({ ...partie, graine: nouvelleGraine(), noms: [...partie.noms].reverse() })} onChanger={() => setPartie(null)} onQuitter={() => navigate('/defis')} />}
      </ChapterGate>
    )
  }

  return (
    <section className="max-w-xl mx-auto">
      <div className="flex items-center gap-2 -ml-2">
        <Link to="/defis" className="btn-icon" aria-label="Retour aux défis"><Icon name="arrowLeft" /></Link>
        <span className="eyebrow">Défis</span>
      </div>
      <PageHeader title="À deux sur ce téléphone" description="Chacun son tour, les mêmes 10 questions. Le meilleur score gagne." />
      <div className="card p-4 mb-4 grid grid-cols-2 gap-3">
        {[0, 1].map((i) => (
          <label key={i} className="block">
            <span className="eyebrow">Joueur {i + 1}</span>
            <input
              value={noms[i]}
              onChange={(e) => setNoms((n) => n.map((x, k) => (k === i ? e.target.value : x)))}
              maxLength={20}
              placeholder={`Joueur ${i + 1}`}
              className="mt-1.5 w-full h-12 px-3 bg-surface border border-line text-ink placeholder:text-muted focus:border-ink outline-none"
            />
          </label>
        ))}
      </div>
      <div className="card p-4">
        <ChoixCivilisation onChoix={lancer} />
      </div>
    </section>
  )
}

function Partie({ refCiv, partie, onRevanche, onChanger, onQuitter }) {
  usePleinEcran()
  const { civ } = refCiv
  const questions = useMemo(() => questionsDefi(questionPool(refCiv), partie.graine), [refCiv, partie.graine])
  const [phase, setPhase] = useState('j1') // j1 → passe → j2 → resultat
  const [scores, setScores] = useState([0, 0])
  const [a, b] = partie.noms

  if (phase === 'j1' || phase === 'j2') {
    const k = phase === 'j1' ? 0 : 1
    return (
      <div className="fixed inset-0 z-50 bg-bg flex flex-col" role="dialog" aria-label={`Défi à deux : ${partie.noms[k]}`}>
        <Serie
          cle={phase}
          questions={questions}
          civ={civ}
          titre={`${partie.noms[k]} · ${civ.label}`}
          onQuitter={onQuitter}
          onFin={(justes) => {
            const n = justes.filter(Boolean).length
            setScores((s) => s.map((x, i) => (i === k ? n : x)))
            haptic('complete')
            setPhase(k === 0 ? 'passe' : 'resultat')
          }}
        />
      </div>
    )
  }

  const gagnant = scores[0] === scores[1] ? null : scores[0] > scores[1] ? 0 : 1
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" style={ENCRE} role="dialog" aria-label="Défi à deux">
      {phase === 'resultat' && gagnant !== null && <Particules effet={EFFET} />}
      <div className="relative w-full max-w-md mx-auto px-5 pt-[max(2.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] min-h-full flex flex-col text-center">
        <p className="text-xs font-bold uppercase tracking-[.22em]" style={{ color: OR }}>Défi à deux · {civ.label}</p>
        {phase === 'passe' ? (
          <>
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mt-[12vh]">
              <Icon name="users" size={48} className="mx-auto" style={{ color: OR }} />
              <h1 className="font-display text-4xl font-bold leading-tight mt-4">Passe le téléphone à {b}</h1>
              <p className="mt-3" style={{ color: '#d8c7a6' }}>{a} a terminé. Son score reste caché jusqu’à la fin !</p>
            </motion.div>
            <button onClick={() => setPhase('j2')} className="mt-auto min-h-[56px] w-full font-bold text-lg" style={{ background: OR, color: '#2a2118' }}>
              Je suis {b}, c’est parti
            </button>
          </>
        ) : (
          <>
            <h1 className="font-display text-5xl font-bold leading-tight mt-6" style={{ color: OR }}>
              {gagnant === null ? 'Égalité parfaite' : `${partie.noms[gagnant]} gagne !`}
            </h1>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <Score nom={a} score={scores[0]} total={questions.length} gagnant={gagnant === 0} />
              <Score nom={b} score={scores[1]} total={questions.length} gagnant={gagnant === 1} />
            </div>
            <div className="mt-auto pt-8 grid gap-2.5">
              <button onClick={onRevanche} className="min-h-[54px] font-bold text-[16px]" style={{ background: OR, color: '#2a2118' }}>Revanche (nouvelles questions)</button>
              <button onClick={onChanger} className="min-h-[48px] font-semibold border" style={{ borderColor: '#a8791c' }}>Changer de civilisation</button>
              <button onClick={onQuitter} className="min-h-[44px] text-sm font-semibold" style={{ color: '#d8c7a6' }}>Retour aux défis</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

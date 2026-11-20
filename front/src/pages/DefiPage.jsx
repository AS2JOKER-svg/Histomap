import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { findCivilization } from '../lib/data'
import { questionPool } from '../lib/quiz'
import { lienDefi, lireDefi, nettoyerPrenom, nouvelleGraine, questionsDefi, verdict, DEFI_LONGUEUR } from '../lib/defi'
import { load, save } from '../lib/storage'
import { haptic } from '../lib/haptics'
import { useAmbiance } from '../lib/musique'
import useDocumentTitle from '../lib/useDocumentTitle'
import { useUI } from '../store/ui'
import ChapterGate from '../components/revision/ChapterGate'
import Serie from '../components/defi/Serie'
import { EFFET, Particules } from '../components/celebration/elements'
import NotFoundPage from './NotFoundPage'

/**
 * Défi par lien (V3, sprint 25) : #/defi/<civ>?g=<graine>&s=<score>&n=<prénom>.
 * Sans graine : nouveau défi (on joue, puis on envoie le lien). Avec graine et score : défi reçu.
 */
export default function DefiPage() {
  const { civId } = useParams()
  const [params] = useSearchParams()
  const ref = findCivilization(civId)
  const lu = lireDefi(params)
  const recu = lu.graine && lu.score !== null ? lu : null
  useDocumentTitle(ref ? `Défi · ${ref.civ.label}` : 'Défi introuvable')
  useAmbiance(ref ? civId : null)
  if (!ref) return <NotFoundPage title="Défi introuvable" text="Ce lien de défi ne correspond à aucune civilisation." />
  return <ChapterGate refCiv={ref}>{(full) => <Defi key={`${civId}-${recu?.graine ?? 'nouveau'}`} refCiv={full} recu={recu} />}</ChapterGate>
}

export const ENCRE = { background: '#1f1812', color: '#f6efe2' }
export const OR = '#e0c27a'

export function usePleinEcran() {
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])
}

/** Partage natif du lien, sinon copie dans le presse-papiers. → 'partage' | 'copie' | 'echec' */
export async function partagerLien(url, texte) {
  try {
    if (navigator.share) {
      await navigator.share({ title: 'Défi HistoMap', text: texte, url })
      return 'partage'
    }
  } catch (e) {
    if (e?.name === 'AbortError') return 'annule'
  }
  try {
    await navigator.clipboard.writeText(`${texte} ${url}`)
    return 'copie'
  } catch {
    return 'echec'
  }
}

function Defi({ refCiv, recu }) {
  usePleinEcran()
  const { civ } = refCiv
  const navigate = useNavigate()
  const showToast = useUI((s) => s.showToast)
  const [graine, setGraine] = useState(() => recu?.graine ?? nouvelleGraine())
  const questions = useMemo(() => questionsDefi(questionPool(refCiv), graine), [refCiv, graine])
  const [phase, setPhase] = useState('intro') // intro → jeu → resultat
  const [score, setScore] = useState(0)
  const [prenom, setPrenom] = useState(() => load('histomap_prenom', ''))
  const [lienVisible, setLienVisible] = useState(null)
  const issue = recu && phase === 'resultat' ? verdict(score, recu.score) : null
  const adversaire = recu?.nom ?? 'Ton ami'

  const fin = (justes) => {
    const n = justes.filter(Boolean).length
    setScore(n)
    setPhase('resultat')
    haptic(recu ? (verdict(n, recu.score) === 'gagne' ? 'recompense' : 'complete') : 'complete')
  }
  const envoyer = async () => {
    const nom = nettoyerPrenom(prenom)
    save('histomap_prenom', nom)
    const url = lienDefi({ civId: civ.id, graine, score, nom })
    const texte = recu
      ? `J’ai relevé ton défi HistoMap sur « ${civ.label} » : ${score}/${questions.length} (toi : ${recu.score}/${questions.length}). Revanche ?`
      : `Défi HistoMap : ${score}/${questions.length} sur « ${civ.label} ». À toi de faire mieux !`
    const r = await partagerLien(url, texte)
    if (r === 'copie') showToast({ text: 'Lien du défi copié : colle-le dans un message', tone: 'success' })
    if (r === 'echec') setLienVisible(url)
  }
  const nouveau = () => {
    setGraine(nouvelleGraine())
    setScore(0)
    setLienVisible(null)
    setPhase('intro')
    navigate(`/defi/${civ.id}`, { replace: true })
  }

  if (phase === 'jeu')
    return (
      <div className="fixed inset-0 z-50 bg-bg flex flex-col" role="dialog" aria-label={`Défi : ${civ.label}`}>
        <Serie questions={questions} civ={civ} titre={`Défi · ${civ.label}${recu ? ` · ${adversaire} : ${recu.score}/${questions.length}` : ''}`} onFin={fin} onQuitter={() => navigate('/defis')} cle={graine} />
      </div>
    )

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" style={ENCRE} role="dialog" aria-label={`Défi : ${civ.label}`}>
      {issue === 'gagne' && <Particules effet={EFFET} />}
      <div className="relative w-full max-w-md mx-auto px-5 pt-[max(2.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] min-h-full flex flex-col text-center">
        <p className="text-xs font-bold uppercase tracking-[.22em]" style={{ color: OR }}>{recu ? 'Défi reçu' : 'Défi'}</p>
        <h1 className="font-display text-5xl font-bold leading-none mt-3">{civ.label}</h1>

        {phase === 'intro' ? (
          <>
            {recu ? (
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mt-8">
                <p className="text-lg" style={{ color: '#d8c7a6' }}>{adversaire} a fait</p>
                <p className="font-display text-8xl font-bold leading-none mt-1" style={{ color: OR }}>{recu.score}/{questions.length || DEFI_LONGUEUR}</p>
                <p className="mt-4 text-lg">À toi de faire mieux !</p>
              </motion.div>
            ) : (
              <p className="mt-8 text-lg leading-relaxed" style={{ color: '#d8c7a6' }}>
                {questions.length} questions. Fais ton meilleur score, puis envoie le défi : ton ami aura exactement les mêmes questions.
              </p>
            )}
            <p className="mt-6 text-sm" style={{ color: '#c9b48c' }}>Pour le plaisir : un défi ne rapporte pas d’XP et ne change pas ta progression.</p>
            <button onClick={() => setPhase('jeu')} className="mt-auto min-h-[56px] w-full font-bold text-lg" style={{ background: OR, color: '#2a2118' }}>
              {recu ? 'Relever le défi' : 'C’est parti'}
            </button>
            <Link to="/defis" className="mt-3 min-h-[44px] inline-flex items-center justify-center text-sm font-semibold" style={{ color: '#d8c7a6' }}>Retour aux défis</Link>
          </>
        ) : (
          <>
            {recu ? (
              <>
                <p className="mt-6 font-display text-4xl font-bold" style={{ color: OR }}>
                  {issue === 'gagne' ? 'Tu as gagné !' : issue === 'perdu' ? `${adversaire} garde l’avantage` : 'Égalité parfaite'}
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Score nom="Toi" score={score} total={questions.length} gagnant={issue === 'gagne'} />
                  <Score nom={adversaire} score={recu.score} total={questions.length} gagnant={issue === 'perdu'} />
                </div>
              </>
            ) : (
              <>
                <p className="mt-6 font-display text-8xl font-bold leading-none" style={{ color: OR }}>{score}/{questions.length}</p>
                <p className="mt-2" style={{ color: '#d8c7a6' }}>{score === questions.length ? 'Sans faute ! Bon courage à ton ami.' : 'Envoie le défi : ton ami fera-t-il mieux ?'}</p>
              </>
            )}

            <label className="block text-left mt-8">
              <span className="text-xs font-bold uppercase tracking-[.14em]" style={{ color: '#c9b48c' }}>Ton prénom (facultatif)</span>
              <input
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                maxLength={20}
                autoComplete="given-name"
                placeholder="Il apparaîtra dans le lien"
                className="mt-1.5 w-full h-12 px-3 border border-[#6e5a3c] outline-none placeholder:text-[#a89878] focus:border-[#e0c27a]"
                style={{ background: '#2a2118', color: '#f6efe2' }}
              />
            </label>
            {lienVisible && (
              <input readOnly value={lienVisible} onFocus={(e) => e.target.select()} aria-label="Lien du défi" className="mt-3 w-full h-11 px-3 text-sm" style={{ background: '#2a2118', color: '#f6efe2' }} />
            )}
            <div className="mt-6 grid gap-2.5">
              <button onClick={envoyer} className="min-h-[54px] font-bold text-[16px]" style={{ background: OR, color: '#2a2118' }}>
                {recu ? 'Renvoyer le défi' : 'Envoyer le défi'}
              </button>
              <button onClick={nouveau} className="min-h-[48px] font-semibold border" style={{ borderColor: '#a8791c' }}>Nouveau défi (autres questions)</button>
              <Link to="/" className="min-h-[44px] inline-flex items-center justify-center text-sm font-semibold" style={{ color: '#d8c7a6' }}>Retour à l’Aventure</Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export function Score({ nom, score, total, gagnant }) {
  return (
    <div className="p-4 border" style={{ background: gagnant ? '#3a2f22' : 'transparent', borderColor: gagnant ? OR : '#4a3d2c' }}>
      <p className="text-sm truncate" style={{ color: '#d8c7a6' }}>{nom}</p>
      <p className="font-display text-5xl font-bold leading-none mt-1" style={{ color: gagnant ? OR : '#f6efe2' }}>{score}<span className="text-2xl">/{total}</span></p>
    </div>
  )
}

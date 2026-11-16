import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { haptic } from '../../lib/haptics'
import { prochaineRecompense } from '../../lib/xp'
import { EFFET, Particules } from './elements'

/**
 * Les célébrations « plein écran » d'une liste d'événements (V3.1) : nouveaux rangs, fil rouge terminé,
 * titres. Un titre de fil gagné en même temps que la fin de ce fil s'affiche sur l'écran du fil (une seule fois).
 */
export function aCelebrer(evenements = []) {
  const filsMerites = new Set(evenements.filter((e) => e.type === 'fil-termine' && e.merite).map((e) => `fil:${e.fil}`))
  return evenements.filter((e) => e.type === 'rang' || e.type === 'fil-termine' || (e.type === 'titre' && !filsMerites.has(e.id)))
}

const ENTETE = {
  rang: () => 'Nouveau rang',
  'fil-termine': () => 'Fil rouge terminé',
  titre: (e) => (e.sorte === 'monde' ? 'Monde terminé' : e.sorte === 'filRouge' ? 'Fil rouge complet' : 'Tout le parcours'),
}
const libelle = (e) => (e.type === 'rang' ? `Nouveau rang : ${e.rang}` : e.type === 'fil-termine' ? `Fil rouge terminé : ${e.label}` : `Nouveau titre : ${e.titre}`)

/**
 * Suite d'écrans de célébration (maquettes 9, 10 et 12) : un écran par nouveau rang, fil terminé et titre.
 * `onFin` est appelé après le dernier. Vibration à chaque écran ; focus sur « Continuer ».
 */
export default function Celebrations({ evenements, onFin }) {
  const liste = aCelebrer(evenements)
  const [i, setI] = useState(0)
  const bouton = useRef(null)
  const e = liste[i]

  useEffect(() => {
    if (!e) return
    haptic(e.type === 'rang' ? 'niveau' : 'coffre')
    bouton.current?.focus({ preventScroll: true })
  }, [i, e])
  useEffect(() => {
    if (!e) onFin()
  }, [e, onFin])
  if (!e) return null
  const suivant = () => (i < liste.length - 1 ? setI(i + 1) : onFin())
  const prochaine = e.type === 'rang' ? prochaineRecompense(e.niveau) : null

  return (
    <div className="fixed inset-0 z-[60] flex flex-col items-center overflow-hidden px-5 text-center" style={{ background: '#1f1812', color: '#f6efe2' }} role="dialog" aria-modal="true" aria-label={libelle(e)}>
      <Particules effet={EFFET} />
      <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', damping: 18 }} className="relative w-full max-w-sm flex flex-col items-center flex-1 pt-[10vh]">
        <p className="text-xs font-bold uppercase tracking-[.22em]" style={{ color: '#e0c27a' }}>{ENTETE[e.type](e)}</p>
        {e.type === 'rang' ? (
          <>
            <div className="relative mt-6 w-48 h-48 grid place-items-center">
              <span aria-hidden="true" className="absolute inset-0 rounded-full border-2 hm-pulse-or" style={{ borderColor: '#e0c27a' }} />
              <svg aria-hidden="true" viewBox="0 0 200 200" className="absolute inset-0">
                <g fill="none" stroke="#e0c27a" strokeWidth="3" strokeLinecap="round"><path d="M58 160C30 130 30 80 60 46" /><path d="M142 160C170 130 170 80 140 46" /></g>
              </svg>
              <motion.span initial={{ scale: 0.3 }} animate={{ scale: 1 }} transition={{ type: 'spring', damping: 9, delay: 0.15 }} className="font-display text-[96px] font-bold leading-none" style={{ color: '#e0c27a' }}>
                {e.niveau}
              </motion.span>
            </div>
            <h2 className="font-display text-4xl font-bold mt-4">{e.rang}</h2>
            <p className="mt-1 text-sm" style={{ color: '#c9b48c' }}>Niveau {e.niveau} atteint</p>
            {prochaine && (
              <p className="mt-6 w-full p-3 text-sm flex justify-between border border-dashed" style={{ borderColor: '#6e5a3c', color: '#d8c7a6' }}>
                <span>Prochaine récompense</span>
                <span className="font-bold" style={{ color: '#f6efe2' }}>Niveau {prochaine.niveau}</span>
              </p>
            )}
          </>
        ) : e.type === 'fil-termine' ? (
          <>
            <h2 className="font-display text-5xl font-bold mt-6 leading-none">{e.label}</h2>
            <p className="mt-2 text-sm" style={{ color: '#c9b48c' }}>Toutes les salles de ton fil rouge sont découvertes.</p>
            <div className="mt-6 w-full p-4" style={{ background: '#f6efe2', color: '#2a2118' }}>
              <p className="text-[11px] font-bold uppercase tracking-[.14em]" style={{ color: '#8a3a1e' }}>{e.merite ? 'Nouveau titre' : 'Titre à gagner'}</p>
              <p className="font-display text-3xl font-bold leading-tight mt-1">{e.titre}</p>
              {!e.merite && (
                <p className="text-sm mt-1">
                  Encore {e.manque} salle{e.manque > 1 ? 's' : ''} à mener à ★ (épreuve réussie).
                </p>
              )}
            </div>
            <p className="mt-3 text-sm" style={{ color: '#d8c7a6' }}>Le chemin continue ; tu peux choisir un autre fil rouge dans ton Profil.</p>
          </>
        ) : (
          <>
            <div className="mt-6 w-full p-4" style={{ background: '#f6efe2', color: '#2a2118' }}>
              <p className="text-[11px] font-bold uppercase tracking-[.14em]" style={{ color: '#8a3a1e' }}>Nouveau titre</p>
              <p className="font-display text-3xl font-bold leading-tight mt-1">{e.titre}</p>
            </div>
            {e.xp > 0 && (
              <div className="mt-2.5 w-full p-3 text-left border" style={{ background: '#3a2f22', borderColor: '#a8791c' }}>
                <p className="font-display text-3xl font-bold leading-none" style={{ color: '#e0c27a' }}>+{e.xp}</p>
                <p className="text-xs" style={{ color: '#d8c7a6' }}>XP</p>
              </div>
            )}
          </>
        )}
        <div className="mt-auto w-full pb-[max(1.75rem,env(safe-area-inset-bottom))] grid gap-2.5">
          <button ref={bouton} onClick={suivant} className="min-h-[48px] font-semibold border" style={{ background: '#e0c27a', color: '#2a2118', borderColor: '#e0c27a' }}>
            {i < liste.length - 1 ? 'Suivant' : 'Continuer'}
          </button>
        </div>
      </motion.div>
    </div>
  )
}

/**
 * Les célébrations plein écran (rangs, fil terminé, titres) passent avant l'action choisie (continuer,
 * rejouer…), une seule fois. → { faire(action), ecran }
 */
export function useApresCelebrations(evenements) {
  const [suite, setSuite] = useState(null)
  const [vu, setVu] = useState(false)
  const fetes = aCelebrer(evenements)
  const faire = (action) => {
    if (fetes.length && !vu) {
      setVu(true)
      setSuite(() => action)
    } else action()
  }
  const ecran = suite ? <Celebrations evenements={evenements} onFin={() => { setSuite(null); suite() }} /> : null
  return { faire, ecran }
}

import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { haptic } from '../../lib/haptics'
import { prochaineRecompense } from '../../lib/xp'
import { filDe } from '../../lib/aventure'
import { findCivilization } from '../../lib/data'
import { PARCOURS_AVENTURE as P } from '../../store/progress'
import { EFFET, Particules, Rayons } from './elements'

/** Page du choix d'un fil rouge (maquette 13). */
export const LIEN_CHOIX_FIL = '/aventure/fil-rouge'

/**
 * Les célébrations « plein écran » d'une liste d'événements (V3.1) : nouveaux rangs, fil rouge terminé,
 * titres. Un titre de fil gagné en même temps que la fin de ce fil s'affiche sur l'écran du fil (une seule fois).
 * Plus de coffres ni de cosmétiques depuis la V3.1.
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
const nomDe = (id) => findCivilization(id)?.civ.label ?? id
const OR = '#e0c27a'

/**
 * Suite d'écrans de célébration (maquette 12 du sprint 27) : un écran par nouveau rang, fil terminé et titre.
 * `onFin(sortie)` est appelé après le dernier ; `sortie` = 'fil' si le joueur a demandé à choisir un nouveau fil rouge.
 * Vibration à chaque écran ; focus sur le bouton principal.
 */
export default function Celebrations({ evenements, onFin }) {
  const liste = aCelebrer(evenements)
  const [i, setI] = useState(0)
  const [sortie, setSortie] = useState(null)
  const bouton = useRef(null)
  const e = liste[i]

  useEffect(() => {
    if (!e) return
    haptic(e.type === 'rang' ? 'niveau' : 'coffre')
    bouton.current?.focus({ preventScroll: true })
  }, [i, e])
  useEffect(() => {
    if (!e) onFin(sortie)
  }, [e, onFin, sortie])
  if (!e) return null
  const dernier = i === liste.length - 1
  const suivant = (s = sortie) => {
    if (s !== sortie) setSortie(s)
    if (!dernier) setI(i + 1)
    else onFin(s)
  }
  const prochaine = e.type === 'rang' ? prochaineRecompense(e.niveau) : null
  const fil = e.type === 'fil-termine' ? filDe(P, e.fil) : null
  // titre du fil gagné en même temps : affiché sur l'écran du fil (son XP comprise)
  const xpTitre = fil ? evenements.find((x) => x.type === 'titre' && x.id === `fil:${fil.id}`)?.xp ?? 0 : 0

  return (
    <div className="fixed inset-0 z-[60] flex flex-col items-center overflow-y-auto overflow-x-hidden px-5 text-center" style={{ background: '#1f1812', color: '#f6efe2' }} role="dialog" aria-modal="true" aria-label={libelle(e)}>
      <Particules effet={EFFET} />
      <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', damping: 18 }} className="relative w-full max-w-sm flex flex-col items-center flex-1 pt-[max(3rem,8vh)]">
        <p className="text-xs font-bold uppercase tracking-[.22em]" style={{ color: OR }}>{ENTETE[e.type](e)}</p>
        {e.type === 'rang' ? (
          <>
            <div className="relative mt-6 w-48 h-48 grid place-items-center">
              <span aria-hidden="true" className="absolute inset-0 rounded-full border-2 hm-pulse-or" style={{ borderColor: OR }} />
              <svg aria-hidden="true" viewBox="0 0 200 200" className="absolute inset-0">
                <g fill="none" stroke={OR} strokeWidth="3" strokeLinecap="round"><path d="M58 160C30 130 30 80 60 46" /><path d="M142 160C170 130 170 80 140 46" /></g>
              </svg>
              <motion.span initial={{ scale: 0.3 }} animate={{ scale: 1 }} transition={{ type: 'spring', damping: 9, delay: 0.15 }} className="font-display text-[96px] font-bold leading-none" style={{ color: OR }}>
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
            {/* Maquette 12 : médaille du fil, ses salles, le titre (mérité, ou ce qu'il manque) */}
            <div className="relative mt-7 grid place-items-center">
              <Rayons taille={340} />
              <motion.div
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', damping: 10, stiffness: 170, delay: 0.1 }}
                className="relative w-40 h-40 rounded-full flex flex-col items-center justify-center gap-1"
                style={{ background: '#8a3a1e', boxShadow: `0 0 0 8px ${OR}, 0 0 60px rgba(224,194,122,.45)` }}
              >
                <span className="font-display text-lg font-bold uppercase tracking-[.14em] px-3 leading-tight">Fil rouge</span>
                <span className="font-display text-4xl font-bold leading-none" style={{ color: OR }}>
                  {fil ? `${fil.membres.length} / ${fil.membres.length}` : '✓'}
                </span>
              </motion.div>
            </div>
            <h2 className="relative font-display text-[46px] font-bold mt-8 leading-none text-balance">{e.label}</h2>
            {fil && (
              <p className="relative mt-3 text-[15px]" style={{ color: '#d8c7a6' }}>
                {fil.membres.length} salles, de « {nomDe(fil.membres[0])} » à « {nomDe(fil.membres.at(-1))} ».
              </p>
            )}
            <div className="relative mt-6 w-full p-4 text-left" style={{ background: '#f6efe2', color: '#2a2118' }}>
              <p className="text-[11px] font-bold uppercase tracking-[.14em]" style={{ color: '#8a3a1e' }}>{e.merite ? 'Nouveau titre' : 'Titre à gagner'}</p>
              <p className="font-display text-3xl font-bold leading-tight mt-1">{e.titre}</p>
              <p className="text-sm mt-1">
                {e.merite
                  ? `Au moins ★ dans ${fil ? `les ${fil.membres.length}` : 'toutes les'} salles du fil${xpTitre ? ` · +${xpTitre} XP` : ''}`
                  : `Encore ${e.manque} salle${e.manque > 1 ? 's' : ''} à mener à ★ (épreuve réussie).`}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="mt-6 w-full p-4" style={{ background: '#f6efe2', color: '#2a2118' }}>
              <p className="text-[11px] font-bold uppercase tracking-[.14em]" style={{ color: '#8a3a1e' }}>Nouveau titre</p>
              <p className="font-display text-3xl font-bold leading-tight mt-1">{e.titre}</p>
            </div>
            {e.xp > 0 && (
              <div className="mt-2.5 w-full p-3 text-left border" style={{ background: '#3a2f22', borderColor: '#a8791c' }}>
                <p className="font-display text-3xl font-bold leading-none" style={{ color: OR }}>+{e.xp}</p>
                <p className="text-xs" style={{ color: '#d8c7a6' }}>XP</p>
              </div>
            )}
          </>
        )}
        <div className="relative mt-auto w-full pt-8 pb-[max(1.75rem,env(safe-area-inset-bottom))] grid gap-2.5">
          {e.type === 'fil-termine' ? (
            <>
              <button ref={bouton} onClick={() => suivant('fil')} className="min-h-[54px] font-bold text-[16px]" style={{ background: OR, color: '#2a2118' }}>
                Choisir un nouveau fil rouge
              </button>
              <button onClick={() => suivant()} className="min-h-[48px] font-semibold border" style={{ borderColor: '#a8791c' }}>
                {dernier ? 'Continuer le chemin' : 'Suivant'}
              </button>
            </>
          ) : (
            <button ref={bouton} onClick={() => suivant()} className="min-h-[48px] font-semibold border" style={{ background: OR, color: '#2a2118', borderColor: OR }}>
              {dernier ? 'Continuer' : 'Suivant'}
            </button>
          )}
        </div>
      </motion.div>
    </div>
  )
}

/**
 * Les célébrations plein écran (rangs, fil terminé, titres) passent avant l'action choisie (continuer,
 * rejouer…), une seule fois. Si le joueur choisit un nouveau fil rouge depuis l'écran du fil terminé,
 * on va au choix du fil au lieu de l'action. → { faire(action), ecran }
 */
export function useApresCelebrations(evenements) {
  const navigate = useNavigate()
  const [suite, setSuite] = useState(null)
  const [vu, setVu] = useState(false)
  const fetes = aCelebrer(evenements)
  const faire = (action) => {
    if (fetes.length && !vu) {
      setVu(true)
      setSuite(() => action)
    } else action()
  }
  const ecran = suite ? (
    <Celebrations
      evenements={evenements}
      onFin={(sortie) => {
        setSuite(null)
        // remplace l'écran de l'étape : « Retour » depuis le choix du fil ne relance pas une épreuve
        if (sortie === 'fil') navigate(LIEN_CHOIX_FIL, { replace: true })
        else suite()
      }}
    />
  ) : null
  return { faire, ecran }
}

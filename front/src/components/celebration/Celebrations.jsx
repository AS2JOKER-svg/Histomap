import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { haptic } from '../../lib/haptics'
import { choisi, THEMES } from '../../lib/cosmetiques'
import { prochaineRecompense, rang } from '../../lib/xp'
import { useProgress } from '../../store/progress'
import { Coffre, Particules } from './elements'

/** Effet de célébration choisi par le joueur (Profil). */
export function useEffet() {
  const av = useProgress((s) => s.aventure)
  return choisi('effet', av.cosmetiques, av.recompenses)
}

/** Les célébrations « plein écran » à montrer pour une liste d'événements : niveaux puis titres. */
export const aCelebrer = (evenements = []) => evenements.filter((e) => e.type === 'niveau' || e.type === 'titre')

/**
 * Suite d'écrans de célébration (maquettes 9 et 10) : un écran par niveau gagné et par titre obtenu.
 * `onFin` est appelé après le dernier. Vibration à chaque écran ; focus sur « Continuer ».
 */
export default function Celebrations({ evenements, onFin }) {
  const liste = aCelebrer(evenements)
  const [i, setI] = useState(0)
  const effet = useEffet()
  const choisirCosmetique = useProgress((s) => s.choisirCosmetique)
  const bouton = useRef(null)
  const e = liste[i]

  useEffect(() => {
    if (!e) return
    haptic(e.type === 'niveau' ? 'niveau' : 'coffre')
    bouton.current?.focus({ preventScroll: true })
  }, [i, e])
  useEffect(() => {
    if (!e) onFin()
  }, [e, onFin])
  if (!e) return null
  const suivant = () => (i < liste.length - 1 ? setI(i + 1) : onFin())
  const sceau = e.type === 'niveau' ? e.recompenses.find((r) => r.type === 'sceau') : null

  return (
    <div className="fixed inset-0 z-[60] flex flex-col items-center overflow-hidden px-5 text-center" style={{ background: '#1f1812', color: '#f6efe2' }} role="dialog" aria-modal="true" aria-label={e.type === 'niveau' ? `Niveau ${e.niveau} atteint` : `Nouveau titre : ${e.titre}`}>
      <Particules effet={effet} />
      <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', damping: 18 }} className="relative w-full max-w-sm flex flex-col items-center flex-1 pt-[10vh]">
        {e.type === 'niveau' ? (
          <>
            <p className="text-xs font-bold uppercase tracking-[.22em]" style={{ color: '#e0c27a' }}>Nouveau niveau</p>
            <div className="relative mt-6 w-48 h-48 grid place-items-center">
              <span aria-hidden="true" className="absolute inset-0 rounded-full border-2 hm-pulse-or" style={{ borderColor: '#e0c27a' }} />
              <svg aria-hidden="true" viewBox="0 0 200 200" className="absolute inset-0">
                <g fill="none" stroke="#e0c27a" strokeWidth="3" strokeLinecap="round"><path d="M58 160C30 130 30 80 60 46" /><path d="M142 160C170 130 170 80 140 46" /></g>
              </svg>
              <motion.span initial={{ scale: 0.3 }} animate={{ scale: 1 }} transition={{ type: 'spring', damping: 9, delay: 0.15 }} className="font-display text-[96px] font-bold leading-none" style={{ color: '#e0c27a' }}>
                {e.niveau}
              </motion.span>
            </div>
            <h2 className="font-display text-4xl font-bold mt-4">Niveau {e.niveau} atteint</h2>
            <p className="mt-1 text-sm" style={{ color: '#c9b48c' }}>Rang : {rang(e.niveau)}</p>
            {e.recompenses.length > 0 && (
              <div className="mt-6 w-full p-4 text-left" style={{ background: '#f6efe2', color: '#2a2118' }}>
                <p className="text-[11px] font-bold uppercase tracking-[.14em]" style={{ color: '#8a3a1e' }}>Récompense débloquée</p>
                {e.recompenses.map((r) => (
                  <p key={r.id} className="font-display text-2xl font-bold leading-tight mt-1">{r.type === 'coffre' ? 'Petit coffre (bonus d’XP)' : r.nom}</p>
                ))}
              </div>
            )}
            {prochaineRecompense(e.niveau) && (
              <p className="mt-3 w-full p-3 text-sm flex justify-between border border-dashed" style={{ borderColor: '#6e5a3c', color: '#d8c7a6' }}>
                <span>Prochaine récompense</span>
                <span className="font-bold" style={{ color: '#f6efe2' }}>Niveau {prochaineRecompense(e.niveau).niveau}</span>
              </p>
            )}
          </>
        ) : (
          <>
            <p className="text-xs font-bold uppercase tracking-[.22em]" style={{ color: '#e0c27a' }}>
              {e.sorte === 'monde' ? 'Monde terminé en or' : e.sorte === 'filRouge' ? 'Fil rouge complet' : 'Tout le parcours en or'}
            </p>
            <div className="mt-4"><Coffre /></div>
            <div className="w-full p-4" style={{ background: '#f6efe2', color: '#2a2118' }}>
              <p className="text-[11px] font-bold uppercase tracking-[.14em]" style={{ color: '#8a3a1e' }}>Nouveau titre</p>
              <p className="font-display text-3xl font-bold leading-tight mt-1">{e.titre}</p>
            </div>
            <div className="mt-2.5 w-full grid grid-cols-2 gap-2.5">
              {e.theme && (
                <div className="p-3 text-left border" style={{ background: '#3a2f22', borderColor: '#a8791c' }}>
                  <p className="text-[11px] font-bold uppercase tracking-[.12em]" style={{ color: '#e0c27a' }}>Thème {THEMES.find((t) => t.id === e.theme)?.nom}</p>
                  <span className="mt-2 block w-8 h-8" style={{ background: THEMES.find((t) => t.id === e.theme)?.apercu }} />
                </div>
              )}
              {e.xp > 0 && (
                <div className={`p-3 text-left border ${e.theme ? '' : 'col-span-2'}`} style={{ background: '#3a2f22', borderColor: '#a8791c' }}>
                  <p className="font-display text-3xl font-bold leading-none" style={{ color: '#e0c27a' }}>+{e.xp}</p>
                  <p className="text-xs" style={{ color: '#d8c7a6' }}>XP du coffre</p>
                </div>
              )}
            </div>
          </>
        )}
        <div className="mt-auto w-full pb-[max(1.75rem,env(safe-area-inset-bottom))] grid gap-2.5">
          {sceau && (
            <button onClick={() => { choisirCosmetique('sceau', sceau.id.split(':')[1]); suivant() }} className="min-h-[52px] font-bold" style={{ background: '#e0c27a', color: '#2a2118' }}>
              Porter ce sceau
            </button>
          )}
          {e.theme && (
            <button onClick={() => { choisirCosmetique('theme', e.theme); suivant() }} className="min-h-[52px] font-bold" style={{ background: '#e0c27a', color: '#2a2118' }}>
              Essayer le thème
            </button>
          )}
          <button ref={bouton} onClick={suivant} className="min-h-[48px] font-semibold border" style={sceau || e.theme ? { borderColor: '#a8791c', color: '#f6efe2' } : { background: '#e0c27a', color: '#2a2118', borderColor: '#e0c27a' }}>
            {i < liste.length - 1 ? 'Suivant' : 'Continuer'}
          </button>
        </div>
      </motion.div>
    </div>
  )
}

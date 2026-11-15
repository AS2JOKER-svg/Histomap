import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { findCivilization } from '../../lib/data'
import { formatYear } from '../../lib/time'
import { EPREUVE, MEDAILLE, estTronc, etapeSuivante, etoiles, ouverture } from '../../lib/aventure'
import { BAREME } from '../../lib/xp'
import { PARCOURS_AVENTURE as P } from '../../store/progress'
import Icon from '../ui/Icon'
import Medaille, { ETAPE_LABEL } from './Medaille'
import { lienEtape, raisonVerrou } from './liens'

const ROMAIN = ['I', 'II', 'III', 'IV', 'V']
const ETAPES = [
  { id: 'decouvrir', medaille: MEDAILLE.BRONZE, detail: 'Cartes essentielles + 3 questions éclair', xp: `+${BAREME.decouvrir} XP` },
  { id: 'approfondir', medaille: MEDAILLE.ARGENT, detail: 'Cartes pour aller plus loin + 5 questions', xp: `+${BAREME.approfondir} XP` },
  { id: 'epreuve', medaille: MEDAILLE.OR, detail: `${EPREUVE.questions} questions · réussie dès ${EPREUVE.reussite} · ★ 15 · ★★ 17 · ★★★ 19`, xp: 'jusqu’à 400 XP' },
]

/** Panneau d'une salle (maquette 2) : ses 3 étapes, ses annexes, sa fiche. */
export default function SalleSheet({ civId, salles, onClose, onPlay }) {
  const closeRef = useRef(null)
  const [opener] = useState(() => document.activeElement)
  useEffect(() => {
    closeRef.current?.focus({ preventScroll: true })
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      if (opener instanceof HTMLElement && document.contains(opener)) opener.focus({ preventScroll: true })
    }
  }, [onClose, opener])

  const ref = findCivilization(civId)
  if (!ref) return null
  const s = salles[civId]
  const medaille = s?.medaille ?? MEDAILLE.AUCUNE
  const { ouvert, raison } = ouverture(P, salles, civId)
  const prochaine = ouvert ? etapeSuivante(medaille) : null
  const w = P.monde.get(civId)
  const tronc = estTronc(P, civId)
  const annexes = (P.enfants.get(civId) ?? []).map((id) => ({ id, label: findCivilization(id)?.civ.label, ...ouverture(P, salles, id), medaille: salles[id]?.medaille ?? 0 }))
  const nbEtoiles = etoiles(s?.meilleur ?? 0)

  return (
    <>
      <motion.div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center pointer-events-none sm:p-4">
        <motion.section
          role="dialog"
          aria-modal="true"
          aria-label={`Salle : ${ref.civ.label}`}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ type: 'spring', damping: 30, stiffness: 340 }}
          className="pointer-events-auto w-full sm:w-[460px] max-h-[88vh] overflow-y-auto overscroll-contain bg-bg rounded-t-4xl sm:rounded-4xl sm:border sm:border-line shadow-lift px-5 pt-3 pb-[calc(1.5rem+env(safe-area-inset-bottom))] sm:pb-6"
        >
          <span className="sm:hidden block mx-auto mb-3 w-11 h-1 rounded-full bg-line" />
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="eyebrow">
                Monde {ROMAIN[w]} · {tronc ? `Salle ${P.position.get(civId) + 1}` : 'Annexe'} · {ref.continent.label}
              </p>
              <h2 className="font-display text-4xl font-bold text-ink leading-none mt-1">{ref.civ.label}</h2>
              <p className="text-sm text-muted mt-1 tabular-nums">
                {formatYear(ref.civ.start)} → {formatYear(ref.civ.end)}
                {nbEtoiles > 0 && <span className="ml-2 text-ink" aria-label={`${nbEtoiles} étoile(s) sur 3`}>{'★'.repeat(nbEtoiles)}{'☆'.repeat(3 - nbEtoiles)}</span>}
              </p>
            </div>
            <button ref={closeRef} onClick={onClose} className="btn-icon -mr-2" aria-label="Fermer">
              <Icon name="close" />
            </button>
          </div>

          {!ouvert && (
            <p className="mt-4 p-3 rounded-xl bg-surface2 text-sm text-ink flex items-center gap-2">
              <Icon name="lock" size={16} /> {raisonVerrou(raison)}
            </p>
          )}

          <ol className="mt-4 border-t border-line">
            {ETAPES.map((e) => {
              const fait = medaille >= e.medaille
              const suivante = e.id === prochaine
              return (
                <li key={e.id} className="flex items-center gap-3 py-3 border-b border-line">
                  {fait ? (
                    <Medaille medaille={e.medaille} taille={34} />
                  ) : (
                    <span className={`w-[34px] h-[34px] shrink-0 rounded-full border-2 grid place-items-center text-xs font-bold ${suivante ? 'border-accent text-accent' : 'border-dashed border-line text-muted'}`} aria-hidden="true">
                      {['Br', 'Ag', 'Or'][e.medaille - 1]}
                    </span>
                  )}
                  <span className="flex-1 min-w-0">
                    <span className="block font-semibold text-ink">{ETAPE_LABEL[e.id]}</span>
                    <span className="block text-xs text-muted">{fait ? 'Fait' : e.detail}</span>
                  </span>
                  {suivante ? (
                    <Link to={lienEtape(civId, e.id)} onClick={() => onPlay(civId, e.id)} className="btn-accent h-11 px-4 text-sm shrink-0">
                      {e.xp}
                    </Link>
                  ) : (
                    !fait && <span className="text-xs font-semibold text-muted shrink-0">{e.xp}</span>
                  )}
                </li>
              )
            })}
          </ol>

          {annexes.length > 0 && (
            <div className="mt-4">
              <p className="eyebrow mb-2">Salles annexes qui s’ouvrent ici</p>
              <div className="grid grid-cols-2 gap-2">
                {annexes.map((a) => (
                  <span key={a.id} className="p-2.5 rounded-xl border border-dashed border-muted/50 flex items-center gap-2">
                    <Medaille medaille={a.medaille} ouvert={a.ouvert} taille={22} />
                    <span className="min-w-0">
                      <span className="block font-display text-lg font-semibold text-ink leading-tight line-clamp-2">{a.label}</span>
                      <span className="block text-xs text-muted">{a.ouvert ? 'ouverte' : a.raison?.type === 'monde' ? 'monde pas encore ouvert' : 'après le bronze ici'}</span>
                    </span>
                  </span>
                ))}
              </div>
            </div>
          )}

          <Link to={`/frise/${ref.epoch.id}/${civId}`} className="btn-secondary w-full h-12 mt-4">
            <Icon name="book" size={18} /> Lire la fiche dans l’Atlas
          </Link>
        </motion.section>
      </div>
    </>
  )
}

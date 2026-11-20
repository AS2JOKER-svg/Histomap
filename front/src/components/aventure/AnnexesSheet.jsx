import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { findCivilization } from '../../lib/data'
import { formatYear } from '../../lib/time'
import Icon from '../ui/Icon'
import EtatSalle from './EtatSalle'

/**
 * Liste des annexes d'un îlot replié (« +N » sur la carte du parcours, au-delà de 6 annexes).
 * Une ligne par annexe, dans l'ordre de l'îlot ; une suite (s'ouvre après la précédente) est décalée avec « › ».
 * Toucher une annexe ouvre son panneau (SalleSheet).
 */
export default function AnnexesSheet({ salle, onClose, onOuvrir }) {
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

  const faites = salle.annexes.filter((b) => b.etat === 'faite').length
  return (
    <>
      <motion.div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center pointer-events-none sm:p-4">
        <motion.section
          role="dialog"
          aria-modal="true"
          aria-label={`Annexes de ${salle.label}`}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ type: 'spring', damping: 30, stiffness: 340 }}
          className="pointer-events-auto w-full sm:w-[460px] max-h-[88vh] overflow-y-auto overscroll-contain bg-bg rounded-t-4xl sm:rounded-4xl sm:border sm:border-line shadow-lift px-5 pt-3 pb-[calc(1.5rem+env(safe-area-inset-bottom))] sm:pb-6"
        >
          <span className="sm:hidden block mx-auto mb-3 w-11 h-1 rounded-full bg-line" />
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="eyebrow">Annexes de la salle · {faites} / {salle.annexes.length} faites</p>
              <h2 className="font-display text-3xl font-bold text-ink leading-none mt-1">{salle.label}</h2>
            </div>
            <button ref={closeRef} onClick={onClose} className="btn-icon -mr-2" aria-label="Fermer">
              <Icon name="close" />
            </button>
          </div>
          <ul className="mt-4 border-t border-line">
            {salle.annexes.map((b) => {
              const ref = findCivilization(b.id)
              if (!ref) return null
              return (
                <li key={b.id} className="border-b border-line">
                  <button onClick={() => onOuvrir(b.id)} className={`w-full min-h-[56px] py-2 flex items-center gap-3 text-left ${b.suite ? 'pl-6' : ''}`}>
                    {b.suite && <span aria-hidden="true" className="-ml-4 text-muted">›</span>}
                    <EtatSalle decouverte={b.etat === 'faite'} etoiles={b.nbEtoiles} ouvert={b.etat !== 'fermee'} taille={30} />
                    <span className="flex-1 min-w-0">
                      <span className={`block font-semibold truncate ${b.etat === 'fermee' ? 'text-muted' : 'text-ink'}`}>{ref.civ.label}</span>
                      <span className="block text-xs text-muted tabular-nums">
                        {formatYear(ref.civ.start)} · {ref.continent.label}
                        {b.suite ? ' · après la précédente' : ''}
                      </span>
                    </span>
                    <Icon name="chevronRight" size={18} className="text-muted shrink-0" />
                  </button>
                </li>
              )
            })}
          </ul>
        </motion.section>
      </div>
    </>
  )
}

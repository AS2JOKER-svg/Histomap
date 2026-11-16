import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { findCivilization } from '../../lib/data'
import { formatYear } from '../../lib/time'
import { EPREUVE, aRattraper, estTronc, etapeAccessible, etapeSuivante, ouverture, salleDe } from '../../lib/aventure'
import { PARCOURS_AVENTURE as P } from '../../store/progress'
import Icon from '../ui/Icon'
import EtatSalle, { Etoiles } from './EtatSalle'
import { lienEtape, raisonVerrou } from './liens'

const ROMAIN = ['I', 'II', 'III', 'IV', 'V']

/** Libellé du gros bouton selon l'étape à jouer. */
function libelle(etape, s, tronc) {
  if (etape === 'decouvrir') return s.enCours === 'decouvrir' ? 'Reprendre' : tronc ? 'Découvrir' : 'Commencer la séance'
  if (etape === 'approfondir') return 'Reprendre Approfondir'
  if (s.enCours === 'epreuve') return tronc ? 'Reprendre l’épreuve' : 'Passer la mini-épreuve'
  return s.etoiles ? 'Rejouer pour les étoiles' : 'Passer l’épreuve'
}

/**
 * Panneau d'une salle (V3.1, version courte en attendant le sprint 31) : nom, dates, étoiles,
 * un seul gros bouton (étape suivante), une ligne par étape, Approfondir en bonus, la fiche.
 */
export default function SalleSheet({ civId, av, onClose, onPlay }) {
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
  const s = salleDe(av, civId)
  const { ouvert, raison } = ouverture(P, av, civId)
  const tronc = estTronc(P, civId)
  const prochaine = ouvert ? etapeSuivante(P, av, civId) : null
  const w = P.monde.get(civId)
  const surFil = !tronc && P.filRougeDe.get(civId) === av.filRouge
  const rattraper = aRattraper(P, av).has(civId)
  const place = tronc ? `Salle ${P.position.get(civId) + 1}` : surFil ? `Salle de ton fil${rattraper ? ' · à rattraper' : ''}` : 'Annexe'
  const n = tronc ? EPREUVE.tronc.questions : EPREUVE.annexe.questions
  const etapes = tronc
    ? [
        { id: 'decouvrir', titre: 'Découvrir', detail: s.decouverte ? 'Fait' : 'Cartes essentielles + 3 questions éclair', fait: s.decouverte },
        { id: 'epreuve', titre: 'Épreuve', detail: s.decouverte ? `${n} questions sur les cartes vues` : 'Après Découvrir', fait: s.etoiles > 0, etoiles: true },
      ]
    : [
        { id: 'decouvrir', titre: 'Séance', detail: s.decouverte ? 'Faite' : `Cartes essentielles puis mini-épreuve de ${n} questions`, fait: s.decouverte },
        ...(s.decouverte ? [{ id: 'epreuve', titre: 'Mini-épreuve', detail: `${n} questions`, fait: s.etoiles > 0, etoiles: true }] : []),
      ]
  const approfondir = tronc && etapeAccessible(P, av, civId, 'approfondir')

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
                Monde {ROMAIN[w]} · {place} · {ref.continent.label}
              </p>
              <h2 className="font-display text-4xl font-bold text-ink leading-none mt-1">{ref.civ.label}</h2>
              <p className="text-sm text-muted mt-1 tabular-nums">
                {formatYear(ref.civ.start)} → {formatYear(ref.civ.end)}
                {s.decouverte && <Etoiles n={s.etoiles} className="ml-2 text-ink" />}
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

          {prochaine && (
            <Link to={lienEtape(civId, prochaine)} onClick={() => onPlay(civId, prochaine)} className="btn-accent h-12 w-full mt-4 text-[15px] font-bold">
              {libelle(prochaine, s, tronc)} <Icon name="arrowRight" size={18} />
            </Link>
          )}

          <ol className="mt-4 border-t border-line">
            {etapes.map((e) => (
              <li key={e.id} className="flex items-center gap-3 py-3 border-b border-line">
                <EtatSalle decouverte={e.fait} etoiles={e.etoiles ? s.etoiles : 0} ouvert={ouvert} taille={30} />
                <span className="flex-1 min-w-0">
                  <span className="block font-semibold text-ink">{e.titre}</span>
                  <span className="block text-xs text-muted">{e.detail}</span>
                </span>
                {e.etoiles && <Etoiles n={s.etoiles} className="text-sm text-ink shrink-0" />}
              </li>
            ))}
          </ol>

          {tronc && (
            <p className="mt-3 text-sm">
              {approfondir ? (
                <Link to={lienEtape(civId, 'approfondir')} onClick={() => onPlay(civId, 'approfondir')} className="min-h-[44px] inline-flex items-center gap-1.5 font-semibold text-accent">
                  <Icon name="plus" size={16} /> {s.approfondi ? 'Revoir les cartes d’Approfondir' : 'Approfondir (bonus)'}
                </Link>
              ) : (
                <span className="min-h-[44px] inline-flex items-center gap-1.5 text-muted">
                  <Icon name="plus" size={16} /> Approfondir (bonus), après Découvrir
                </span>
              )}
            </p>
          )}

          <Link to={`/frise/${ref.epoch.id}/${civId}`} className="btn-secondary h-12 w-full mt-3 text-sm">
            <Icon name="book" size={18} /> Lire la fiche
          </Link>
        </motion.section>
      </div>
    </>
  )
}

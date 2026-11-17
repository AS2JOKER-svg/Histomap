import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { findCivilization } from '../../lib/data'
import { formatYear } from '../../lib/time'
import { chapterSize } from '../../lib/revision'
import { panneauSalle } from '../../lib/ecransSalle'
import { nomCourt } from '../../lib/aventure'
import { PARCOURS_AVENTURE as P } from '../../store/progress'
import Icon from '../ui/Icon'
import { Etoiles } from './EtatSalle'
import { lienEtape, raisonVerrou } from './liens'

const nomDe = (id) => findCivilization(id)?.civ.label ?? id

/** Pastille d'une étape dans la ligne d'étapes : coche (faite), numéro (à faire), pointillés (plus tard). */
function Puce({ etat, num, theme }) {
  if (etat === 'fait')
    return (
      <span aria-hidden="true" className="w-[22px] h-[22px] rounded-full grid place-items-center text-white shrink-0" style={{ background: `var(--m-${theme}-acc)` }}>
        <Icon name="check" size={12} strokeWidth={3.2} />
      </span>
    )
  return (
    <span aria-hidden="true" className={`w-[22px] h-[22px] rounded-full grid place-items-center text-xs font-bold shrink-0 border-2 ${etat === 'actif' ? 'border-accent text-accent' : 'border-dashed border-muted/70 text-muted'}`}>
      {num}
    </span>
  )
}

const ETAT_LU = { fait: 'faite', actif: 'à faire', 'a-venir': 'plus tard' }

/**
 * Panneau court d'une salle (V3.1, sprint 31 ; maquettes 4 à 7 du sprint 27, décision 19) :
 * nom, dates, étoiles ; une ligne d'étapes (« Découvrir ✓ · Épreuve ★★☆ ») ; un seul gros bouton (étape suivante) ;
 * « Approfondir (bonus) » (grisé avant Découvrir, « Revoir les cartes » une fois fait) ; « Lire la fiche ».
 * Plus de détail d'XP, de seuils, de liste d'annexes ni de « Défier un ami ».
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
  const m = panneauSalle(P, av, civId, { tailles: chapterSize(ref), nom: nomDe })
  const monde = P.mondes[m.place.monde]
  const theme = monde.theme
  const surtitre = m.tronc
    ? `${monde.nom} · salle ${m.place.salle}`
    : m.surChemin
      ? `${monde.nom} · salle ${m.place.salle} · ton fil rouge${m.rattraper ? ' · à rattraper' : ''}`
      : m.annexeDeNom ? `Annexe de la salle ${nomCourt(P, m.place.annexeDe, m.annexeDeNom)}` : 'Annexe'

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
          className="pointer-events-auto w-full sm:w-[460px] max-h-[88vh] overflow-y-auto overscroll-contain bg-bg rounded-t-4xl sm:rounded-4xl sm:border sm:border-line shadow-lift px-5 pt-2.5 pb-[calc(1.5rem+env(safe-area-inset-bottom))] sm:pb-6 flex flex-col gap-4"
        >
          <span aria-hidden="true" className="sm:hidden block mx-auto w-11 h-[5px] rounded-full bg-line" />

          {/* En-tête : où, nom, dates, étoiles */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[.14em] text-muted">
                {!m.tronc && !m.surChemin && <span aria-hidden="true" className="w-3 h-3 rounded-full border-2 shrink-0" style={{ borderColor: `var(--m-${theme}-trait)` }} />}
                <span>{surtitre}</span>
              </p>
              <h2 className="font-display text-[40px] font-bold text-ink leading-none mt-1 text-balance">{ref.civ.label}</h2>
            </div>
            <button ref={closeRef} onClick={onClose} className="btn-icon -mr-2 shrink-0" aria-label="Fermer">
              <Icon name="close" />
            </button>
          </div>
          <p className="-mt-3 flex items-center justify-between gap-3 text-sm text-muted tabular-nums">
            <span>
              <span className="whitespace-nowrap">{formatYear(ref.civ.start)}</span> – <span className="whitespace-nowrap">{formatYear(ref.civ.end)}</span>
            </span>
            {m.etoiles > 0 && <Etoiles n={m.etoiles} className="text-[26px] leading-none text-accent2 tracking-[3px] shrink-0" />}
          </p>

          {!m.ouvert && (
            <p className="p-3 bg-surface2 text-sm text-ink flex items-center gap-2">
              <Icon name="lock" size={16} className="shrink-0" /> {raisonVerrou(m.raison)}
            </p>
          )}
          {m.rattraper && m.ouvert && <p className="-mt-1 text-sm text-muted">Une salle de ton fil rouge restée derrière toi : elle ne bloque rien.</p>}

          {/* Ligne d'étapes */}
          {m.ouvert && (
            <div className="flex items-center flex-wrap gap-x-4 gap-y-2 px-3 py-2.5 bg-surface border border-line text-sm">
              {m.resume ? (
                <>
                  <span className="font-bold text-accent">Une seule séance</span>
                  <span className="text-ink">{m.resume}</span>
                </>
              ) : (
                m.etapes.map((e, i) =>
                  e.id === 'approfondir' ? (
                    // bonus fait : simple coche (maquette 6)
                    <span key={e.id} className="flex items-center gap-1 font-bold whitespace-nowrap" style={{ color: `var(--m-${theme}-trait)` }}>
                      <Icon name="check" size={14} strokeWidth={3} /> {e.titre}
                      <span className="sr-only">: fait (bonus)</span>
                    </span>
                  ) : (
                    <span key={e.id} className={`flex items-center gap-1.5 font-bold whitespace-nowrap ${e.etat === 'actif' ? 'text-accent' : e.etat === 'fait' ? 'text-ink' : 'text-muted font-medium'}`}>
                      {(e.etoiles === undefined || e.etat !== 'fait') && <Puce etat={e.etat} num={i + 1} theme={theme} />}
                      {e.titre}
                      <span className="sr-only">: {ETAT_LU[e.etat]}</span>
                      {e.etoiles !== undefined && <Etoiles n={e.etoiles} className="font-normal" style={{ color: 'var(--carte-etoiles)' }} />}
                    </span>
                  )
                )
              )}
            </div>
          )}

          {/* Un seul gros bouton : l'étape suivante */}
          {m.bouton && (
            <Link
              to={lienEtape(civId, m.bouton.etape)}
              onClick={() => onPlay(civId, m.bouton.etape)}
              className="min-h-[60px] px-[18px] py-2 flex items-center justify-between gap-3 bg-accentbtn text-white shadow-soft hover:brightness-110 transition active:scale-[.99]"
            >
              <span className="flex flex-col">
                <span className="text-lg font-bold leading-tight">{m.bouton.titre}</span>
                <span className="text-[13px] opacity-90">{m.bouton.detail}</span>
              </span>
              <Icon name={m.bouton.rejouer ? 'refresh' : 'play'} size={22} className="shrink-0" />
            </Link>
          )}

          {/* Lignes secondaires */}
          <div className="flex flex-col border-t border-line">
            {m.approfondir &&
              (m.approfondir.etat === 'ferme' ? (
                <span aria-disabled="true" className="min-h-[52px] flex items-center gap-3 border-b border-line text-muted">
                  <Icon name="plus" size={20} className="shrink-0" />
                  <span className="flex flex-col flex-1">
                    <span className="font-bold">
                      Approfondir <span className="font-medium">(bonus)</span>
                    </span>
                    <span className="text-xs">{m.approfondir.detail}</span>
                  </span>
                  <Icon name="lock" size={16} className="shrink-0" />
                </span>
              ) : (
                <Link
                  to={lienEtape(civId, 'approfondir')}
                  onClick={() => onPlay(civId, 'approfondir')}
                  className="min-h-[52px] flex items-center gap-3 border-b border-line text-ink hover:bg-surface transition"
                >
                  <Icon name={m.approfondir.etat === 'fait' ? 'layers' : 'plus'} size={20} className="shrink-0 text-accent" />
                  <span className="flex flex-col flex-1">
                    <span className="font-bold">
                      {m.approfondir.titre} {m.approfondir.etat === 'ouvert' && <span className="font-medium text-muted">(bonus)</span>}
                    </span>
                    <span className="text-xs text-muted">{m.approfondir.detail}</span>
                  </span>
                  <Icon name="chevronRight" size={16} className="shrink-0 text-muted" />
                </Link>
              ))}
            <Link to={`/frise/${ref.epoch.id}/${civId}`} className="min-h-[52px] flex items-center gap-3 border-b border-line text-ink hover:bg-surface transition">
              <Icon name="book" size={20} className="shrink-0" />
              <span className="flex flex-col flex-1">
                <span className="font-bold">Lire la fiche</span>
                {!m.tronc && <span className="text-xs text-muted">Toutes ses cartes y restent lisibles</span>}
              </span>
              <Icon name="chevronRight" size={16} className="shrink-0 text-muted" />
            </Link>
          </div>
        </motion.section>
      </div>
    </>
  )
}

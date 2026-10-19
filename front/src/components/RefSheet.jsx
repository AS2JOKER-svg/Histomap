import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useUI } from '../store/ui'
import { findCivilization } from '../lib/data'
import { ENTITY_TYPES, hasEntity, useEntity } from '../lib/entities'
import { formatYear } from '../lib/time'
import Icon from './ui/Icon'
import RichText from './ui/RichText'

const BADGE = {
  personne: 'Personne',
  evenement: 'Événement',
  decouverte: 'Découverte',
  guerre: 'Guerre',
  civ: 'Civilisation',
}

/**
 * Aperçu d'une fiche, ouvert depuis n'importe où (mot souligné, dirigeant,
 * guerre…) via useUI().openSheet(...). Répond à « qui / quoi / quand ? » sans
 * quitter la page ; « Ouvrir la fiche » mène à la fiche complète.
 * Mobile : feuille qui monte du bas. Desktop : fenêtre centrée.
 */
export default function RefSheet() {
  const sheet = useUI((s) => s.sheet)
  const close = useUI((s) => s.closeSheet)
  const location = useLocation()

  // Quitter la page où l'aperçu a été ouvert le ferme (lien « Ouvrir la fiche », retour…)
  // (on compare l'adresse et non location.key : une adresse saisie à la main garde la clé « default »)
  const here = location.pathname + location.search
  const openedAt = useRef(null)
  useEffect(() => {
    if (sheet) openedAt.current = here
  }, [sheet?.key]) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (sheet && openedAt.current && here !== openedAt.current) close()
  }, [here]) // eslint-disable-line react-hooks/exhaustive-deps

  return <AnimatePresence>{sheet && <Sheet key={sheet.key} sheet={sheet} onClose={close} />}</AnimatePresence>
}

function Sheet({ sheet, onClose }) {
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

  const content = useContent(sheet)

  return (
    <>
      <motion.div
        className="fixed inset-0 z-50 bg-black/35 backdrop-blur-[2px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      {/* Conteneur de placement (bas sur mobile, centre sur desktop) ; l'animation est sur l'enfant */}
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center pointer-events-none sm:p-4">
      <motion.section
        role="dialog"
        aria-modal="true"
        aria-label={content.title ? `Aperçu : ${content.title}` : 'Aperçu'}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ type: 'spring', damping: 30, stiffness: 340 }}
        className="pointer-events-auto w-full sm:w-[440px] max-h-[80vh] overflow-y-auto overscroll-contain bg-surface rounded-t-4xl sm:rounded-4xl sm:border sm:border-line shadow-lift px-5 pt-3 pb-[calc(1.5rem+env(safe-area-inset-bottom))] sm:pb-6"
      >
        <span className="sm:hidden block mx-auto mb-3 w-10 h-1 rounded-full bg-line" />
        <div className="flex items-start justify-between gap-3">
          {content.badge ? <span className={`badge badge-${content.badge}`}>{BADGE[content.badge]}</span> : <span />}
          <button ref={closeRef} onClick={onClose} className="btn-icon -mr-2 -mt-2" aria-label="Fermer l'aperçu">
            <Icon name="close" />
          </button>
        </div>

        {content.loading ? (
          <div className="animate-pulse space-y-3 mt-2" aria-busy="true" aria-label="Chargement">
            <div className="h-7 w-2/3 rounded-lg bg-surface2" />
            <div className="h-4 w-24 rounded bg-surface2" />
            <div className="h-16 rounded-lg bg-surface2" />
          </div>
        ) : (
          <>
            <h2 className="font-display text-2xl font-semibold text-ink leading-tight mt-1">{content.title}</h2>
            {content.subtitle && <p className="text-sm text-muted tabular-nums mt-1">{content.subtitle}</p>}
            {content.text && <RichText as="p" className="text-[15px] text-ink/85 leading-relaxed mt-3" text={content.text} />}
            {content.rows?.length > 0 && (
              <dl className="mt-3 space-y-1.5 text-sm">
                {content.rows.map((r) => (
                  <div key={r.label} className="flex gap-2">
                    <dt className="text-muted shrink-0">{r.label} :</dt>
                    <dd className="text-ink">{r.value}</dd>
                  </div>
                ))}
              </dl>
            )}
            {content.note && <p className="mt-4 text-xs text-muted">{content.note}</p>}
            {content.actions?.length > 0 && (
              <div className="mt-5 grid gap-2">
                {content.actions.map((a, i) =>
                  a.href ? (
                    <a key={i} href={a.href} target="_blank" rel="noreferrer" className="btn-secondary h-12">
                      {a.label} <Icon name="external" size={16} />
                    </a>
                  ) : (
                    <Link key={i} to={a.to} className={`${i === 0 ? 'btn-primary' : 'btn-secondary'} h-12`}>
                      {a.label} {i === 0 && <Icon name="arrowRight" size={18} />}
                    </Link>
                  )
                )}
              </div>
            )}
          </>
        )}
      </motion.section>
      </div>
    </>
  )
}

/** Contenu affiché selon ce qu'on a ouvert : fiche liée, civilisation, ou contenu fourni. */
function useContent(sheet) {
  const civRef = sheet.id ? findCivilization(sheet.id) : null
  const entityId = sheet.id && !civRef && hasEntity(sheet.id) ? sheet.id : '__aucune__'
  const { status, entity } = useEntity(entityId)

  if (civRef) {
    const { civ, epoch } = civRef
    return {
      badge: 'civ',
      title: civ.label,
      subtitle: `${civ.period} · ${epoch.label}`,
      text: civ.description,
      actions: [{ label: 'Ouvrir la fiche', to: `/frise/${epoch.id}/${civ.id}` }],
    }
  }
  if (entityId !== '__aucune__') {
    if (status !== 'ready') return { badge: null, loading: status === 'loading', title: sheet.title ?? '', text: status === 'error' ? 'Aperçu indisponible hors ligne.' : null }
    const type = ENTITY_TYPES[entity.type] ? entity.type : 'personne'
    return {
      badge: type,
      title: entity.nom,
      subtitle: entity.dates ?? (entity.annee != null ? formatYear(entity.annee) : null),
      text: entity.description,
      actions: [{ label: 'Ouvrir la fiche', to: `/fiche/${entity.id}` }],
    }
  }
  // Contenu fourni directement (dirigeant sans fiche, guerre…), ou fiche pas encore écrite
  return {
    badge: sheet.badge ?? null,
    title: sheet.title ?? sheet.id,
    subtitle: sheet.subtitle,
    text: sheet.text,
    rows: sheet.rows,
    note: sheet.note,
    actions: sheet.actions,
  }
}

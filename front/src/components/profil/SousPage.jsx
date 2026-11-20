import { Link } from 'react-router-dom'
import useDocumentTitle from '../../lib/useDocumentTitle'
import Icon from '../ui/Icon'

/**
 * Sous-page du Profil (V3.1, sprint 32, maquettes 15 et 16) : bouton retour + titre, puis le contenu.
 * Collections, À revoir, Réglages, À propos ; les Défis gardent leur adresse (/defis) mais reviennent ici.
 */
export default function SousPage({ titre, retour = '/profil', retourLabel = 'Retour au profil', children }) {
  useDocumentTitle(titre)
  return (
    <section className="max-w-xl mx-auto">
      <header className="flex items-center gap-1 -ml-2 -mt-2 mb-4">
        <Link to={retour} className="btn-icon shrink-0" aria-label={retourLabel}>
          <Icon name="arrowLeft" />
        </Link>
        <h1 className="font-display text-[28px] font-bold text-ink leading-tight">{titre}</h1>
      </header>
      {children}
    </section>
  )
}

/** Titre de section des sous-pages (petites capitales). */
export function TitreSection({ id, children, className = '' }) {
  return (
    <h2 id={id} className={`eyebrow ${className}`}>
      {children}
    </h2>
  )
}

/** Ligne-lien d'une liste (Profil, Réglages) : icône facultative, titre, détail, chevron. */
export function LigneLien({ to, href, icone, titre, detail, state, grande = false }) {
  const contenu = (
    <>
      {icone && (
        <span aria-hidden="true" className="w-10 h-10 shrink-0 grid place-items-center bg-surface2 text-accent">
          <Icon name={icone} size={22} />
        </span>
      )}
      <span className="flex-1 min-w-0">
        <span className={`block font-semibold text-ink ${grande ? 'text-base font-bold' : ''}`}>{titre}</span>
        {detail && <span className="block text-[13px] text-muted">{detail}</span>}
      </span>
      <Icon name={href ? 'external' : 'chevronRight'} size={16} className="text-muted shrink-0" />
    </>
  )
  const cls = `flex items-center gap-3.5 border-b border-line text-ink hover:bg-surface2/60 transition-colors ${grande ? 'min-h-[64px] py-2' : 'min-h-[52px] py-1.5'}`
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {contenu}
    </a>
  ) : (
    <Link to={to} state={state} className={cls}>
      {contenu}
    </Link>
  )
}

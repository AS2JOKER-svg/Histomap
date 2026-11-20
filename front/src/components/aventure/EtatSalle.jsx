import Icon from '../ui/Icon'

export const ETAPE_LABEL = { decouvrir: 'Découvrir', approfondir: 'Approfondir', epreuve: 'Épreuve', 'a-revoir': 'À revoir' }

// Couleurs fixes (identiques en clair et en sombre), texte encre : contraste ≥ 5:1.
const OR = '#e0c27a'
const PIERRE = '#d3cfc6'

/**
 * Pastille d'état d'une salle (V3.1) : étoiles gagnées (fond or), salle découverte sans étoile (coche),
 * salle ouverte (cercle vide) ou fermée (cadenas). Plus de médailles bronze / argent / or.
 */
export default function EtatSalle({ decouverte = false, etoiles = 0, ouvert = true, taille = 32, className = '' }) {
  const style = { width: taille, height: taille }
  if (decouverte)
    return (
      <span
        className={`shrink-0 rounded-full grid place-items-center font-bold ${className}`}
        style={{ ...style, background: etoiles ? OR : PIERRE, color: '#2a2118', fontSize: taille * 0.38 }}
        role="img"
        aria-label={etoiles ? `Découverte, ${etoiles} étoile${etoiles > 1 ? 's' : ''} sur 3` : 'Découverte, pas encore d’étoile'}
      >
        {etoiles ? `${etoiles}★` : <Icon name="check" size={taille * 0.5} />}
      </span>
    )
  return (
    <span
      className={`shrink-0 rounded-full grid place-items-center border-2 bg-bg ${ouvert ? 'border-muted' : 'border-line text-muted'} ${className}`}
      style={style}
      role="img"
      aria-label={ouvert ? 'Ouverte, pas encore découverte' : 'Verrouillée'}
    >
      {!ouvert && <Icon name="lock" size={taille * 0.45} />}
    </span>
  )
}

/** Trois étoiles, pleines ou vides (« ★★☆ »). */
export function Etoiles({ n = 0, className = '', style }) {
  return (
    <span className={`tracking-[2px] ${className}`} style={style} role="img" aria-label={`${n} étoile${n > 1 ? 's' : ''} sur 3`}>
      {'★'.repeat(n)}
      {'☆'.repeat(3 - n)}
    </span>
  )
}

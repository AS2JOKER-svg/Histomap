import Icon from '../ui/Icon'

// Couleurs fixes des médailles (identiques en clair et en sombre), texte encre : contraste ≥ 5:1.
export const MEDAILLES = [
  null,
  { court: 'Br', nom: 'Bronze', bg: '#c9966a' },
  { court: 'Ag', nom: 'Argent', bg: '#d3cfc6' },
  { court: 'Or', nom: 'Or', bg: '#e0c27a' },
]
export const ETAPE_LABEL = { decouvrir: 'Découvrir', approfondir: 'Approfondir', epreuve: 'Épreuve' }

/** Pastille de médaille d'une salle ; sans médaille : cercle vide (ouverte) ou cadenas. */
export default function Medaille({ medaille = 0, ouvert = true, taille = 32, className = '' }) {
  const m = MEDAILLES[medaille]
  const style = { width: taille, height: taille }
  if (m)
    return (
      <span
        className={`shrink-0 rounded-full grid place-items-center font-display font-bold ${className}`}
        style={{ ...style, background: m.bg, color: '#2a2118', fontSize: taille * 0.42 }}
        role="img"
        aria-label={`Médaille ${m.nom.toLowerCase()}`}
      >
        {m.court}
      </span>
    )
  return (
    <span
      className={`shrink-0 rounded-full grid place-items-center border-2 bg-bg ${ouvert ? 'border-muted' : 'border-line text-muted'} ${className}`}
      style={style}
      role="img"
      aria-label={ouvert ? 'Pas encore de médaille' : 'Verrouillée'}
    >
      {!ouvert && <Icon name="lock" size={taille * 0.45} />}
    </span>
  )
}

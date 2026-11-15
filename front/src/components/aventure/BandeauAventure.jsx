import { Link } from 'react-router-dom'
import { estTronc, ouverture } from '../../lib/aventure'
import { PARCOURS_AVENTURE as P, useProgress } from '../../store/progress'
import Medaille from './Medaille'

const ROMAIN = ['I', 'II', 'III', 'IV', 'V']
const MEDAILLE_NOM = ['pas encore commencée', 'bronze', 'argent', 'or']

/** Fiche d'une civilisation : où elle se trouve dans l'Aventure, et un accès direct à sa salle. */
export default function BandeauAventure({ civId, label }) {
  const salles = useProgress((s) => s.aventure.salles)
  if (!P.monde.has(civId)) return null
  const w = P.monde.get(civId)
  const medaille = salles[civId]?.medaille ?? 0
  const { ouvert } = ouverture(P, salles, civId)
  const place = estTronc(P, civId) ? `salle ${P.position.get(civId) + 1}` : 'annexe'
  return (
    <Link to={`/?salle=${civId}`} className="flex items-center gap-3 p-3 bg-surface border border-muted/40 shadow-lift min-h-[56px]" aria-label={`${label} dans l’Aventure : monde ${ROMAIN[w]}, ${place}, ${ouvert ? MEDAILLE_NOM[medaille] : 'verrouillée'}`}>
      <Medaille medaille={medaille} ouvert={ouvert} taille={36} />
      <span className="flex-1 min-w-0">
        <span className="block text-[11px] font-bold uppercase tracking-[.12em] text-accent">Dans l’Aventure</span>
        <span className="block text-sm text-ink truncate">
          Monde {ROMAIN[w]} · {place} · {ouvert ? MEDAILLE_NOM[medaille] : 'verrouillée'}
        </span>
      </span>
      <span className="btn-accent h-11 px-4 text-sm shrink-0" aria-hidden="true">{ouvert ? 'Jouer' : 'Voir'}</span>
    </Link>
  )
}

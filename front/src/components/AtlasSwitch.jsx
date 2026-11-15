import { Link, Navigate } from 'react-router-dom'
import { load, save } from '../lib/storage'
import { haptic } from '../lib/haptics'
import Icon from './ui/Icon'

const KEY = 'histomap_atlas_view'
const VIEWS = [
  { id: 'frise', to: '/frise', label: 'Frise', icon: 'timeline' },
  { id: 'carte', to: '/carte', label: 'Carte', icon: 'globe' },
]

/**
 * Bascule de l'Atlas (onglet qui réunit la Frise et la Carte) : deux gros segments en haut
 * des deux vues. Les adresses restent `#/frise` et `#/carte` (anciens liens intacts) ;
 * la dernière vue est mémorisée pour l'onglet Atlas (`#/atlas`).
 */
export default function AtlasSwitch({ current }) {
  return (
    <div role="group" aria-label="Vue de l’Atlas" className="grid grid-cols-2 p-1 mb-5 rounded-2xl bg-surface2/80 max-w-sm">
      {VIEWS.map((v) => {
        const on = v.id === current
        return (
          <Link
            key={v.id}
            to={v.to}
            aria-current={on ? 'page' : undefined}
            onClick={() => {
              save(KEY, v.id)
              if (!on) haptic('tap')
            }}
            className={`min-h-[44px] flex items-center justify-center gap-2 rounded-xl text-[15px] font-semibold transition ${
              on ? 'bg-surface text-ink shadow-soft' : 'text-muted hover:text-ink'
            }`}
          >
            <Icon name={v.icon} size={18} /> {v.label}
          </Link>
        )
      })}
    </div>
  )
}

/** Mémorise la vue affichée (appelé par les pages Frise et Carte). */
export const rememberAtlasView = (id) => save(KEY, id)

/** `#/atlas` : ouvre la dernière vue utilisée (la Frise par défaut). */
export function AtlasRedirect() {
  const view = VIEWS.find((v) => v.id === load(KEY, 'frise')) ?? VIEWS[0]
  return <Navigate to={view.to} replace />
}

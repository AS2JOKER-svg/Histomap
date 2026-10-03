import { Link } from 'react-router-dom'
import Icon from './Icon'

/**
 * Fil d'Ariane. items = [{ label, to? }] — le dernier élément est la page courante.
 * Sur mobile, défile horizontalement au lieu de passer à la ligne.
 */
export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Fil d'Ariane" className="mb-4 -mx-1 overflow-x-auto no-scrollbar">
      <ol className="flex items-center gap-1 text-sm whitespace-nowrap px-1">
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && <Icon name="chevronRight" size={14} className="text-muted/60" />}
              {last || !item.to ? (
                <span aria-current={last ? 'page' : undefined} className="px-2 py-1 rounded-lg font-medium text-ink bg-surface2">
                  {item.label}
                </span>
              ) : (
                <Link to={item.to} className="px-2 py-1 rounded-lg text-muted hover:text-ink hover:bg-surface2 transition">
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

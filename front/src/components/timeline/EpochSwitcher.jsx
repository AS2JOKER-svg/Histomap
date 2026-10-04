import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { readableText } from '../../lib/color'

/** Sélecteur d'époques : passer de l'une à l'autre sans revenir en arrière. */
export default function EpochSwitcher({ epochs, currentId }) {
  const activeRef = useRef(null)

  // Sur mobile, amène l'époque courante dans le champ de vision
  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: 'nearest', inline: 'center' })
  }, [currentId])

  return (
    <nav aria-label="Époques" className="-mx-4 sm:mx-0 mb-6">
      <ol className="flex gap-1.5 overflow-x-auto no-scrollbar px-4 sm:px-0 sm:flex-wrap">
        {epochs.map((e, i) => {
          const active = e.id === currentId
          return (
            <li key={e.id} className="shrink-0">
              <Link
                ref={active ? activeRef : null}
                to={`/frise/${e.id}`}
                aria-current={active ? 'page' : undefined}
                className={`flex items-center gap-2 h-10 pl-2 pr-3.5 rounded-xl text-sm font-medium border transition ${
                  active ? 'border-transparent shadow-soft' : 'bg-surface border-line text-muted hover:text-ink'
                }`}
                style={active ? { background: e.color, color: readableText(e.color) } : undefined}
              >
                <span
                  className="grid place-items-center w-6 h-6 rounded-lg text-[11px] font-bold tabular-nums"
                  style={active ? { background: 'rgba(255,255,255,.22)' } : { background: e.color, color: readableText(e.color) }}
                >
                  {i + 1}
                </span>
                {e.label}
              </Link>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

import { useEffect, useMemo, useState } from 'react'
import { geoNaturalEarth1, geoPath } from 'd3-geo'
import { linkTerritory, loadLand, loadSnapshot } from '../../lib/map'
import { formatYear } from '../../lib/time'

const W = 360
const H = 220

/**
 * Mini-carte d'une civilisation pour les cartes de révision.
 * Même cadrage pour toutes les années (on voit le territoire grandir ou
 * rétrécir), avec un sélecteur d'année.
 */
export default function MiniMap({ civ, years }) {
  const [data, setData] = useState(null) // { land, snapshots: { [year]: FeatureCollection } }
  const [index, setIndex] = useState(0)
  const key = years.join(',')
  const [error, setError] = useState(false)

  useEffect(() => {
    let alive = true
    Promise.all([loadLand(), ...years.map(loadSnapshot)])
      .then(([land, ...fcs]) => alive && setData({ land, snapshots: Object.fromEntries(years.map((y, i) => [y, fcs[i]])) }))
      .catch(() => alive && setError(true))
    return () => {
      alive = false
    }
  }, [key]) // eslint-disable-line react-hooks/exhaustive-deps

  // Territoires de la civilisation par année + cadrage commun
  const view = useMemo(() => {
    if (!data) return null
    const own = {}
    const all = []
    for (const y of years) {
      own[y] = data.snapshots[y].features.map((f) => ({ f, link: linkTerritory(f.properties, y) }))
      all.push(...own[y].filter((t) => t.link?.civ.id === civ.id && !t.link.colony).map((t) => t.f))
    }
    const projection = geoNaturalEarth1()
    if (all.length) projection.fitExtent([[W * 0.22, H * 0.16], [W * 0.78, H * 0.84]], { type: 'FeatureCollection', features: all })
    else projection.fitSize([W, H], { type: 'Sphere' })
    return { own, path: geoPath(projection), found: all.length > 0 }
  }, [data, key, civ.id]) // eslint-disable-line react-hooks/exhaustive-deps

  const year = years[Math.min(index, years.length - 1)]

  // Territoire minuscule (ex. Rome en 500 av. J.-C.) : on ajoute un repère visible
  const marker = useMemo(() => {
    if (!view) return null
    const mine = view.own[year].filter((t) => t.link?.civ.id === civ.id && !t.link.colony)
    if (!mine.length) return null
    const areas = mine.map((t) => view.path.area(t.f))
    if (areas.reduce((a, b) => a + b, 0) > 60) return null
    const biggest = mine[areas.indexOf(Math.max(...areas))]
    const [x, y] = view.path.centroid(biggest.f)
    return Number.isFinite(x) ? { x, y } : null
  }, [view, year, civ.id])

  return (
    <div>
      <div className="relative rounded-2xl overflow-hidden border border-line" style={{ background: 'var(--map-sea)' }}>
        <svg viewBox={`0 0 ${W} ${H}`} className="block w-full h-auto map-svg" role="img" aria-label={`Territoire de ${civ.label} en ${formatYear(year)}`}>
          {view && (
            <>
              <path d={view.path(data.land)} fill="var(--map-land)" />
              {view.own[year].map(({ f, link }, i) => {
                const mine = link?.civ.id === civ.id
                return (
                  <path
                    key={i}
                    d={view.path(f)}
                    fill={mine ? civ.color : 'var(--map-other)'}
                    fillOpacity={mine ? (link.colony ? 0.45 : 0.95) : 1}
                    stroke="var(--map-border)"
                    strokeWidth={0.5}
                    style={{ transition: 'fill .3s' }}
                  />
                )
              })}
              {marker && (
                <g transform={`translate(${marker.x},${marker.y})`} pointerEvents="none">
                  <circle r="9" fill={civ.color} className="map-pulse" />
                  <circle r="5" fill={civ.color} stroke="#fff" strokeWidth="2" />
                </g>
              )}
            </>
          )}
        </svg>
        {!data && !error && <div className="absolute inset-0 grid place-items-center text-xs text-muted animate-pulse">Chargement de la carte…</div>}
        {error && <div className="absolute inset-0 grid place-items-center text-xs text-muted">Carte indisponible hors connexion</div>}
        {view && !view.found && <p className="absolute bottom-2 left-2 right-2 text-[11px] text-muted text-center">Territoire non identifié sur ces cartes</p>}
        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-lg glass text-xs font-semibold text-ink tabular-nums">{formatYear(year)}</span>
      </div>

      {years.length > 1 && (
        <div className="mt-2.5 flex gap-1.5 p-1 rounded-xl bg-surface2" role="tablist" aria-label="Année de la carte">
          {years.map((y, i) => (
            <button
              key={y}
              type="button"
              role="tab"
              aria-selected={i === index}
              onClick={(e) => {
                e.stopPropagation()
                setIndex(i)
              }}
              onPointerDownCapture={(e) => e.stopPropagation()}
              className={`flex-1 h-9 rounded-lg text-sm font-medium tabular-nums transition ${i === index ? 'bg-surface text-ink shadow-sm' : 'text-muted hover:text-ink'}`}
            >
              {formatYear(y)}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

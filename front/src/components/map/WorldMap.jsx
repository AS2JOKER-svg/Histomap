import { forwardRef, memo, useCallback, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { geoGraticule10, geoNaturalEarth1, geoPath } from 'd3-geo'
import { select } from 'd3-selection'
import { zoom as d3zoom, zoomIdentity } from 'd3-zoom'
import 'd3-transition' // active selection.transition() pour les zooms animés
import { AnimatePresence, motion } from 'framer-motion'
import { formatYear } from '../../lib/time'
import { linkTerritory } from '../../lib/map'

// Cadre affiché : on coupe l'Antarctique et le Grand Nord, inutiles ici
const FRAME = { type: 'MultiPoint', coordinates: [[-179.9, -56], [179.9, -56], [-179.9, 82], [179.9, 82], [0, -56], [0, 82]] }
const K_MAX = 14
const LABEL_MIN_AREA = 900 // px² (à zoom 1) pour afficher le nom d'un territoire

/**
 * Carte du monde historique (SVG + d3-geo).
 * Le zoom est appliqué directement au DOM (pas de re-rendu React à chaque
 * mouvement) : fluide même avec 800 territoires (carte de 1492).
 *
 * ref → { zoomBy(f), reset(), focusCiv(civId) }
 */
const WorldMap = forwardRef(function WorldMap(
  { year, features, land, conflicts, selectedCivId, onSelectTerritory, onSelectConflict, selectedConflictKey },
  ref
) {
  const wrapRef = useRef(null)
  const svgRef = useRef(null)
  const gRef = useRef(null)
  const zoomRef = useRef(null)
  const [size, setSize] = useState({ w: 0, h: 0 })
  const [hover, setHover] = useState(null)

  useLayoutEffect(() => {
    const el = wrapRef.current
    const ro = new ResizeObserver(([e]) => setSize({ w: e.contentRect.width, h: e.contentRect.height }))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const { w, h } = size
  // Écran étroit (téléphone) : le monde entier serait minuscule. On cale la
  // carte sur la hauteur (largeur « virtuelle » vw > w) et on se déplace au doigt.
  const vw = Math.max(w, Math.round((h - 12) * 1.95))
  const path = useMemo(() => {
    if (!w || !h) return null
    return geoPath(geoNaturalEarth1().fitExtent([[6, 6], [vw - 6, h - 6]], FRAME))
  }, [w, h, vw])
  // Vue de départ : centrée sur l'Ancien Monde (longitude 35° E) si la carte déborde
  const home = useMemo(() => {
    if (!path || vw <= w) return zoomIdentity
    const x = path.projection()([35, 20])[0]
    return zoomIdentity.translate(Math.max(w - vw, Math.min(0, w / 2 - x)), 0)
  }, [path, vw, w])

  // ── Zoom / déplacement (souris, molette, pincement) ──────────────────────
  useEffect(() => {
    if (!w || !h) return
    const svg = select(svgRef.current)
    const z = d3zoom()
      .scaleExtent([1, K_MAX])
      .translateExtent([[0, 0], [vw, h]])
      .on('zoom', (e) => {
        gRef.current.setAttribute('transform', e.transform.toString())
        svgRef.current.style.setProperty('--k', e.transform.k)
        setHover(null)
      })
    svg.call(z).on('dblclick.zoom', null)
    svg.call(z.transform, home)
    zoomRef.current = z
    return () => svg.on('.zoom', null)
  }, [w, h, vw, home])

  // ── Territoires de l'année ──────────────────────────────────────────────
  const shapes = useMemo(() => {
    if (!path || !features) return []
    return features.features.map((f, i) => ({
      key: `${i}-${f.properties.NAME}`,
      d: path(f),
      name: f.properties.NAME,
      link: linkTerritory(f.properties, year),
      area: path.area(f),
      centroid: path.centroid(f),
      bounds: path.bounds(f),
    }))
  }, [features, path, year])

  // Un nom par civilisation, sur son plus grand territoire
  const labels = useMemo(() => {
    const best = new Map()
    for (const s of shapes) {
      if (!s.link || s.link.colony || s.area < LABEL_MIN_AREA || !Number.isFinite(s.centroid[0])) continue
      const prev = best.get(s.link.civ.id)
      if (!prev || s.area > prev.area) best.set(s.link.civ.id, s)
    }
    return [...best.values()]
  }, [shapes])

  useImperativeHandle(ref, () => ({
    zoomBy(f) {
      select(svgRef.current).transition().duration(300).call(zoomRef.current.scaleBy, f)
    },
    reset() {
      select(svgRef.current).transition().duration(500).call(zoomRef.current.transform, home)
    },
    /** Centre la carte sur les territoires d'une civilisation. */
    focusCiv(civId) {
      const own = shapes.filter((s) => s.link?.civ.id === civId && !s.link.colony)
      if (!own.length) return
      const [[x0, y0], [x1, y1]] = own.reduce(
        ([[a, b], [c, d]], s) => [[Math.min(a, s.bounds[0][0]), Math.min(b, s.bounds[0][1])], [Math.max(c, s.bounds[1][0]), Math.max(d, s.bounds[1][1])]],
        [[Infinity, Infinity], [-Infinity, -Infinity]]
      )
      const k = Math.max(1, Math.min(K_MAX, 0.6 / Math.max((x1 - x0) / w, (y1 - y0) / h)))
      const t = zoomIdentity.translate(w / 2, h / 2).scale(k).translate(-(x0 + x1) / 2, -(y0 + y1) / 2)
      select(svgRef.current).transition().duration(750).call(zoomRef.current.transform, t)
    },
  }))

  // Stable (useCallback) : sinon la couche des territoires serait re-rendue à chaque survol
  const onMove = useCallback((e, s) => {
    if (e.pointerType !== 'mouse') return
    const r = wrapRef.current.getBoundingClientRect()
    setHover({ x: e.clientX - r.left, y: e.clientY - r.top, name: s.name, link: s.link })
  }, [])

  return (
    <div ref={wrapRef} className="absolute inset-0" onPointerLeave={() => setHover(null)}>
      {path && (
        <svg
          ref={svgRef}
          width={w}
          height={h}
          className="map-svg block touch-none select-none cursor-grab active:cursor-grabbing"
          style={{ background: 'var(--map-sea)' }}
          role="img"
          aria-label={`Carte du monde en ${formatYear(year)}`}
        >
          <g ref={gRef}>
            <path d={path(geoGraticule10())} fill="none" stroke="var(--map-grid)" strokeWidth="0.6" />
            {land && <path d={path(land)} fill="var(--map-land)" />}

            <AnimatePresence initial={false}>
              <motion.g
                key={year}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                <Territories
                  shapes={shapes}
                  selectedCivId={selectedCivId}
                  onSelect={onSelectTerritory}
                  onMove={onMove}
                />
                {labels.map((s) => (
                  <g key={s.key} transform={`translate(${s.centroid[0]},${s.centroid[1]})`} pointerEvents="none">
                    <g className="map-fixed">
                      <text
                        textAnchor="middle"
                        dy="0.35em"
                        className="font-body"
                        style={{ fontSize: 10.5, fontWeight: 600, fill: '#fff', paintOrder: 'stroke', stroke: 'rgba(0,0,0,.45)', strokeWidth: 2.5, letterSpacing: '.01em' }}
                      >
                        {s.link.civ.label}
                      </text>
                    </g>
                  </g>
                ))}
              </motion.g>
            </AnimatePresence>

            {conflicts.map((c) => {
              const p = path.projection()(c.coords)
              if (!p) return null
              const key = `${c.nom}|${c.annee}`
              const active = key === selectedConflictKey
              return (
                <g key={key} transform={`translate(${p[0]},${p[1]})`}>
                  <g className="map-fixed">
                    <circle r="7" fill="rgb(var(--c-danger))" className="map-pulse" pointerEvents="none" />
                    <circle
                      r={active ? 8 : 6}
                      fill="rgb(var(--c-danger))"
                      stroke="#fff"
                      strokeWidth="2"
                      className="cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation()
                        onSelectConflict(c)
                      }}
                      onPointerMove={(e) => onMove(e, { name: `⚔ ${c.nom} (${formatYear(c.annee)})`, link: null })}
                    >
                      <title>{c.nom}</title>
                    </circle>
                  </g>
                </g>
              )
            })}
          </g>
        </svg>
      )}

      {hover && (
        <div
          className="pointer-events-none absolute z-10 px-3 py-2 rounded-xl bg-ink text-bg shadow-lift text-xs max-w-[240px]"
          style={{ left: Math.min(hover.x + 14, w - 250), top: Math.max(hover.y - 12, 8), transform: 'translateY(-100%)' }}
        >
          {hover.link ? (
            <>
              <span className="block font-semibold text-[13px]">{hover.link.civ.label}</span>
              <span className="block opacity-75">
                {hover.link.colony ? `${hover.name} · sous domination` : hover.name !== hover.link.civ.label ? hover.name : hover.link.civ.period}
              </span>
              <span className="block mt-1 opacity-90">Cliquer pour l'aperçu →</span>
            </>
          ) : (
            <span className="block font-medium">{hover.name}</span>
          )}
        </div>
      )}
    </div>
  )
})

export default WorldMap

/** Couche des territoires : mémorisée pour ne pas être recalculée au survol. */
const Territories = memo(function Territories({ shapes, selectedCivId, onSelect, onMove }) {
  return shapes.map((s) => {
    const civ = s.link?.civ
    const selected = civ && civ.id === selectedCivId
    return (
      <path
        key={s.key}
        d={s.d}
        className="map-territory"
        fill={civ ? civ.color : 'var(--map-other)'}
        fillOpacity={civ ? (s.link.colony ? 0.45 : selectedCivId && !selected ? 0.55 : 0.9) : 1}
        stroke={selected ? 'rgb(var(--c-ink))' : 'var(--map-border)'}
        strokeWidth={selected ? 1.6 : 0.5}
        onClick={() => onSelect(s)}
        onPointerMove={(e) => onMove(e, s)}
      />
    )
  })
})

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useProgress } from '../../store/progress'
import { createEpochScale, formatTick, formatYear } from '../../lib/time'
import { readableText, shade } from '../../lib/color'
import { layoutContinent, textWidth } from './layout'
import Icon from '../ui/Icon'

const PAD = 24          // marge gauche/droite de la toile (px)
const LANE_H = 40       // hauteur d'une barre
const LANE_GAP = 8      // espace entre deux couloirs
const HEADER_H = 40     // bandeau de continent
const AXIS_H = 30       // axe des années
const MIN_W = 760       // largeur minimale de la frise (mobile : on fait défiler)
const ZOOM_MIN = 1
const ZOOM_MAX = 16
const TICK_FONT = '500 11px Inter, system-ui, sans-serif'

/**
 * Frise d'une époque : une seule toile, un seul axe, tous les continents.
 *   - noms dans les barres (restent visibles en défilant) ou juste à côté ;
 *   - points = dates clés ; ligne verticale + année sous la souris ;
 *   - zoom : boutons, ou Ctrl/⌘ + molette (et pincement au pavé tactile),
 *     centré sur le curseur ;
 *   - filtre par continent ;
 *   - ✓ sur les fiches déjà lues, flèche « la suite » vers l'époque suivante ;
 *   - `focusId` : barre mise en évidence à l'arrivée (centrée + pulsation).
 */
export default function EpochTimeline({ epoch, selectedId, onSelect, focusId }) {
  const scrollRef = useRef(null)
  const contentRef = useRef(null)
  const crossRef = useRef(null)
  const anchorRef = useRef(null) // { year, offset } à conserver après un zoom

  const [containerW, setContainerW] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [continentId, setContinentId] = useState(null)
  const fiches = useProgress((st) => st.fiches)
  const [pulseId, setPulseId] = useState(null)

  // Largeur disponible
  useLayoutEffect(() => {
    const el = scrollRef.current
    const ro = new ResizeObserver(([entry]) => setContainerW(entry.contentRect.width))
    ro.observe(el)
    setContainerW(el.clientWidth)
    return () => ro.disconnect()
  }, [])

  const width = Math.max(containerW - PAD * 2, MIN_W) * zoom
  const scale = useMemo(() => createEpochScale(epoch.start, epoch.end, width), [epoch.start, epoch.end, width])
  // Graduations : on retire celles dont le libellé toucherait le précédent
  const ticks = useMemo(() => {
    const out = []
    let lastEnd = -Infinity
    for (const t of scale.ticks(110)) {
      const w = textWidth(formatTick(t), TICK_FONT)
      const left = scale.x(t) - w * tickAnchor(scale.x(t), width)
      if (left < lastEnd + 16) continue
      out.push(t)
      lastEnd = left + w
    }
    return out
  }, [scale, width])

  const continents = useMemo(
    () => epoch.continents.filter((c) => !continentId || c.id === continentId),
    [epoch.continents, continentId]
  )
  const sections = useMemo(
    () => continents.map((c) => ({ continent: c, ...layoutContinent(c.civilizations, epoch, scale, { minX: 8 - PAD, maxX: width + PAD - 8 }) })),
    [continents, epoch, scale, width]
  )

  // ── Zoom ancré : l'année sous le curseur (ou au centre) ne bouge pas ──────
  const zoomTo = useCallback(
    (next, clientX) => {
      const el = scrollRef.current
      const z = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, next))
      if (!el || z === zoom) return
      const rect = el.getBoundingClientRect()
      const offset = clientX === undefined ? rect.width / 2 : clientX - rect.left
      anchorRef.current = { year: scale.invert(el.scrollLeft + offset - PAD), offset }
      setZoom(z)
    },
    [zoom, scale]
  )

  useLayoutEffect(() => {
    const a = anchorRef.current
    if (!a || !scrollRef.current) return
    scrollRef.current.scrollLeft = PAD + scale.x(a.year) - a.offset
    anchorRef.current = null
  }, [scale])

  useEffect(() => {
    const el = scrollRef.current
    const onWheel = (e) => {
      if (!e.ctrlKey && !e.metaKey) return
      e.preventDefault()
      zoomTo(zoom * Math.exp(-e.deltaY * 0.01), e.clientX)
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [zoom, zoomTo])

  // ── Arrivée depuis « la suite » : on centre la barre et on la fait pulser ──
  useEffect(() => {
    if (!focusId || !containerW) return
    const t1 = setTimeout(() => {
      const el = contentRef.current?.querySelector(`[data-civ="${CSS.escape(focusId)}"]`)
      el?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
      setPulseId(focusId)
    }, 350)
    const t2 = setTimeout(() => setPulseId(null), 3200)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [focusId, containerW > 0]) // eslint-disable-line react-hooks/exhaustive-deps

  // ── Ligne verticale sous la souris (mise à jour directe du DOM, sans re-rendu) ──
  const onPointerMove = (e) => {
    const cross = crossRef.current
    if (!cross || e.pointerType !== 'mouse') return
    const px = e.clientX - contentRef.current.getBoundingClientRect().left
    if (px < PAD || px > PAD + width) {
      cross.style.opacity = '0'
      return
    }
    cross.style.opacity = '1'
    cross.style.transform = `translateX(${px}px)`
    cross.firstChild.textContent = formatYear(scale.invert(px - PAD))
  }
  const hideCross = () => crossRef.current && (crossRef.current.style.opacity = '0')

  return (
    <div className="card overflow-hidden">
      {/* Barre d'outils */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 sm:px-4 border-b border-line">
        <div className="flex gap-1.5 overflow-x-auto no-scrollbar -mx-1 px-1" role="group" aria-label="Filtrer par continent">
          <FilterChip active={!continentId} onClick={() => setContinentId(null)}>
            Tous
          </FilterChip>
          {epoch.continents.map((c) => (
            <FilterChip key={c.id} active={continentId === c.id} onClick={() => setContinentId(c.id)}>
              {c.label} <span className="opacity-60 tabular-nums">{c.civilizations.length}</span>
            </FilterChip>
          ))}
        </div>

        <div className="flex items-center gap-1 bg-surface2 rounded-xl p-1 ml-auto">
          <button className="btn-icon w-9 h-9" onClick={() => zoomTo(zoom / 1.5)} disabled={zoom <= ZOOM_MIN} aria-label="Dézoomer">
            <Icon name="minus" size={18} />
          </button>
          <button
            className="text-xs font-medium text-muted hover:text-ink w-14 h-9 rounded-lg tabular-nums"
            onClick={() => zoomTo(1)}
            title="Revenir à la vue d'ensemble"
          >
            {zoom === 1 ? 'Zoom' : `×${zoom.toFixed(1).replace('.0', '')}`}
          </button>
          <button className="btn-icon w-9 h-9" onClick={() => zoomTo(zoom * 1.5)} disabled={zoom >= ZOOM_MAX} aria-label="Zoomer">
            <Icon name="plus" size={18} />
          </button>
        </div>
      </div>

      {/* Toile */}
      <div
        ref={scrollRef}
        className="overflow-x-auto overscroll-x-contain"
        onPointerMove={onPointerMove}
        onPointerLeave={hideCross}
      >
        <div ref={contentRef} className="relative" style={{ width: width + PAD * 2 }}>
          <Grid ticks={ticks} scale={scale} />
          <Axis ticks={ticks} scale={scale} width={width} position="top" />

          {sections.map(({ continent, items, laneCount }) => (
            <section key={continent.id} className="relative border-t border-line/70" aria-label={continent.label}>
              <div className="flex items-center" style={{ height: HEADER_H }}>
                <h3 className="sticky left-0 pl-4 pr-3 flex items-center gap-2 text-sm font-semibold text-ink">
                  <span className="px-2.5 py-1 rounded-lg bg-surface/90 backdrop-blur-sm border border-line shadow-sm">
                    {continent.label}
                    <span className="ml-1.5 font-normal text-muted tabular-nums">{items.length}</span>
                  </span>
                </h3>
              </div>
              <div className="relative" style={{ height: laneCount * (LANE_H + LANE_GAP) + 4 }}>
                {items.map((item, i) => (
                  <Bar
                    key={item.civ.id}
                    item={item}
                    index={i}
                    scale={scale}
                    epoch={epoch}
                    selected={selectedId === item.civ.id}
                    dimmed={!!selectedId && selectedId !== item.civ.id}
                    read={!!fiches[item.civ.id]}
                    pulse={pulseId === item.civ.id}
                    onSelect={onSelect}
                  />
                ))}
              </div>
            </section>
          ))}

          <Axis ticks={ticks} scale={scale} width={width} position="bottom" />

          {/* Curseur temporel (souris) */}
          <div
            ref={crossRef}
            aria-hidden="true"
            className="pointer-events-none absolute top-0 bottom-0 left-0 w-px bg-ink/30 opacity-0 transition-opacity duration-150 z-20"
          >
            <span className="absolute top-1 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-md bg-ink text-bg text-[11px] font-semibold tabular-nums shadow-soft" />
          </div>
        </div>
      </div>

      <p className="px-4 py-2.5 text-[11px] text-muted border-t border-line flex flex-wrap gap-x-4 gap-y-1">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-muted" /> date clé
        </span>
        <span className="flex items-center gap-1"><Icon name="check" size={12} strokeWidth={2.6} /> fiche lue</span>
        <span className="flex items-center gap-1"><Icon name="arrowRight" size={12} /> la civilisation continue à l'époque suivante</span>
        <span>‹ › déborde de l'époque</span>
        {scale.isLog && <span>Échelle logarithmique : les périodes récentes sont agrandies.</span>}
        <span className="hidden md:inline">Ctrl / ⌘ + molette pour zoomer</span>
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────── */

const NEXT_SIZE = 24 // bouton « la suite » en bout de barre

function Bar({ item, index, scale, epoch, selected, dimmed, read, pulse, onSelect }) {
  const { civ, x, w, labelSide, labelW, overflowBefore, overflowAfter } = item
  const labelInside = labelSide === 'inside'
  const next = civ.lineage?.next
  // Place pour le bouton « la suite » sans masquer le nom
  const showNext = !!next && w >= NEXT_SIZE + 12 && (!labelInside || w >= labelW + 20 + NEXT_SIZE + 8)
  const top = item.lane * (LANE_H + LANE_GAP)
  const fg = readableText(civ.color)
  const showPeriod = labelInside && textWidth(civ.period, '400 10.5px Inter, system-ui, sans-serif') + 20 <= w
  const events = w > 36 ? (civ.datesCles ?? []).filter((d) => d.annee >= epoch.start && d.annee <= epoch.end) : []

  return (
    <>
    <motion.button
      type="button"
      data-civ={civ.id}
      onClick={() => onSelect(civ)}
      initial={{ opacity: 0, x: -6 }}
      animate={{ opacity: dimmed ? 0.35 : 1, x: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.2) }}
      className="group absolute flex items-center text-left rounded-[10px] focus-visible:outline-offset-4"
      style={{ left: PAD + item.from, top, height: LANE_H }}
      aria-label={`${civ.label}, ${civ.period}${read ? ', fiche lue' : ''}`}
      aria-pressed={selected}
    >
      {labelSide === 'left' && <OutsideLabel read={read}>{civ.label}</OutsideLabel>}
      <span
        className={`relative h-full rounded-[10px] flex flex-col justify-center transition-[transform,box-shadow] duration-200 group-hover:-translate-y-0.5 group-hover:shadow-lift shadow-sm ${pulse ? 'bar-pulse' : ''}`}
        style={{
          width: w,
          color: fg,
          overflow: 'clip',
          background: `linear-gradient(135deg, ${civ.color}, ${shade(civ.color, -10)})`,
          boxShadow: selected ? `0 0 0 2px rgb(var(--c-surface)), 0 0 0 4px ${civ.color}` : undefined,
          '--pulse': civ.color,
        }}
      >
        {labelInside && (
          <span className="sticky left-2 px-2.5 max-w-full self-start">
            <span className="flex items-center gap-1 text-xs font-semibold leading-tight">
              {read && <Icon name="check" size={12} strokeWidth={3} className="shrink-0" />}
              <span className="truncate">{civ.label}</span>
            </span>
            {showPeriod && <span className="block text-[10.5px] leading-tight opacity-80 truncate">{civ.period}</span>}
          </span>
        )}
        {events.map((d, i) => (
          <span
            key={i}
            className="absolute bottom-[3px] w-1 h-1 -ml-0.5 rounded-full"
            style={{ left: scale.x(d.annee) - x, background: fg, opacity: 0.55 }}
          />
        ))}
        {overflowBefore && <span className="absolute left-0.5 top-0.5 text-[10px] leading-none opacity-80">‹</span>}
        {overflowAfter && !showNext && <span className="absolute right-1 top-0.5 text-[10px] leading-none opacity-80">›</span>}
      </span>
      {labelSide === 'right' && <OutsideLabel read={read}>{civ.label}</OutsideLabel>}
    </motion.button>

    {/* « La suite » : même civilisation à l'époque suivante (bouton distinct de la barre) */}
    {showNext && (
      <Link
        to={`/frise/${next.epochId}?focus=${next.civId}&from=${civ.id}`}
        className="absolute z-10 grid place-items-center rounded-full bg-white/90 text-ink shadow-sm hover:scale-110 hover:bg-white transition"
        style={{ left: PAD + x + w - NEXT_SIZE - 6, top: top + (LANE_H - NEXT_SIZE) / 2, width: NEXT_SIZE, height: NEXT_SIZE, opacity: dimmed ? 0.35 : 1 }}
        title={`La suite : ${next.label} (${next.epochLabel})`}
        aria-label={`La suite : ${next.label}, ${next.epochLabel}`}
      >
        <Icon name="arrowRight" size={14} strokeWidth={2.4} />
      </Link>
    )}
    </>
  )
}

function OutsideLabel({ children, read }) {
  return (
    <span className="mx-2 first:ml-0 last:mr-0 whitespace-nowrap text-xs font-semibold text-ink group-hover:text-accent transition-colors inline-flex items-center gap-1">
      {read && <Icon name="check" size={12} strokeWidth={3} className="text-success" />}
      {children}
    </span>
  )
}

function FilterChip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`shrink-0 h-9 px-3.5 rounded-xl text-sm font-medium transition-colors ${
        active ? 'bg-ink text-bg' : 'bg-surface2 text-muted hover:text-ink'
      }`}
    >
      {children}
    </button>
  )
}

/** Bandes alternées + lignes verticales : repères de lecture sur toute la hauteur. */
function Grid({ ticks, scale }) {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {ticks.map((t, i) => {
        const left = PAD + scale.x(t)
        const next = ticks[i + 1]
        return (
          <div key={t}>
            {i % 2 === 0 && next !== undefined && (
              <div className="absolute top-0 bottom-0 bg-surface2/45" style={{ left, width: scale.x(next) - scale.x(t) }} />
            )}
            <div className="absolute top-0 bottom-0 w-px bg-line/80" style={{ left }} />
          </div>
        )
      })}
    </div>
  )
}

/** Ancrage d'un libellé d'axe : aligné à gauche au début, à droite à la fin, centré ailleurs. */
function tickAnchor(x, width) {
  return x < 50 ? 0 : x > width - 50 ? 1 : 0.5
}

function Axis({ ticks, scale, width, position }) {
  return (
    <div className="relative" style={{ height: AXIS_H }} aria-hidden="true">
      {ticks.map((t) => {
        const x = scale.x(t)
        return (
          <span
            key={t}
            className={`absolute ${position === 'top' ? 'top-2' : 'top-1.5'} whitespace-nowrap text-[11px] font-medium text-muted tabular-nums`}
            style={{ left: PAD + x, transform: `translateX(${-tickAnchor(x, width) * 100}%)` }}
          >
            {formatTick(t)}
          </span>
        )
      })}
    </div>
  )
}

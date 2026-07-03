import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigation } from '../store/navigation'
import {
  createLinearScale,
  clampPeriod,
  formatYear,
} from '../store/timeScale'

const LANE_H = 46
const LANE_GAP = 10
const AXIS_H = 34
const LABEL_W = 150

export default function ContinentsView({ epoch }) {
  const goToCivilization = useNavigation((s) => s.goToCivilization)
  const [zoom, setZoom] = useState(1)

  const baseWidth = 900
  const width = baseWidth * zoom

  const scale = useMemo(
    () => createLinearScale(epoch.start, epoch.end, width),
    [epoch.start, epoch.end, width]
  )

  // Graduations d'axe
  const ticks = useMemo(() => {
    const span = epoch.end - epoch.start
    const step = niceStep(span / 6)
    const arr = []
    let t = Math.ceil(epoch.start / step) * step
    for (; t <= epoch.end; t += step) arr.push(t)
    return arr
  }, [epoch.start, epoch.end])

  return (
    <section>
      {/* Header époque */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span
              className="w-3 h-3 rounded-full"
              style={{ background: epoch.color }}
            />
            <span className="text-xs font-medium text-muted">
              {formatYear(epoch.start)} → {formatYear(epoch.end)}
            </span>
          </div>
          <h2 className="font-display text-3xl font-semibold text-ink">
            {epoch.label}
          </h2>
          <p className="text-muted mt-1 max-w-2xl">{epoch.description}</p>
        </div>

        {/* Contrôles de zoom */}
        <div className="flex items-center gap-2">
          <ZoomBtn onClick={() => setZoom((z) => Math.max(0.6, z - 0.25))}>−</ZoomBtn>
          <span className="text-xs text-muted w-10 text-center">
            {Math.round(zoom * 100)}%
          </span>
          <ZoomBtn onClick={() => setZoom((z) => Math.min(3, z + 0.25))}>+</ZoomBtn>
        </div>
      </div>

      {/* Une timeline par continent */}
      <div className="space-y-5">
        {epoch.continents.map((continent) => (
          <ContinentTimeline
            key={continent.id}
            continent={continent}
            epoch={epoch}
            width={width}
            scale={scale}
            ticks={ticks}
            onSelect={(civ) =>
              goToCivilization({ ...civ, epochLabel: epoch.label })
            }
          />
        ))}
      </div>

      <p className="text-xs text-muted mt-6 flex flex-wrap items-center gap-4">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-6 h-0.5" style={{ background: '#e74c3c' }} /> conflit
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-6 h-0.5" style={{ background: '#27ae60' }} /> alliance
        </span>
        <span>· Cliquez sur une barre pour ouvrir la fiche.</span>
      </p>
    </section>
  )
}

function ContinentTimeline({ continent, epoch, width, scale, ticks, onSelect }) {
  const civs = continent.civilizations

  // Une ligne par civilisation, triée par date de début (puis fin).
  // Garantit que la colonne de labels (à gauche) et les barres (à droite)
  // restent toujours alignées, quel que soit le nombre de civilisations.
  const orderedCivs = useMemo(
    () =>
      [...civs].sort((a, b) => {
        const sa = a.start ?? epoch.start
        const sb = b.start ?? epoch.start
        if (sa !== sb) return sa - sb
        return (a.end ?? epoch.end) - (b.end ?? epoch.end)
      }),
    [civs, epoch.start, epoch.end]
  )

  // rowOf : id de civ -> index de ligne (0-based)
  const rowOf = useMemo(() => {
    const map = {}
    orderedCivs.forEach((c, i) => {
      map[c.id] = i
    })
    return map
  }, [orderedCivs])

  const count = Math.max(orderedCivs.length, 1)
  const chartH = count * LANE_H + (count - 1) * LANE_GAP
  const totalH = chartH + AXIS_H

  // Position centrale d'une civ (pour tracer les flèches)
  const centerOf = (civ) => {
    const p = clampPeriod(civ, epoch.start, epoch.end)
    const row = rowOf[civ.id] ?? 0
    return {
      x: (scale(p.start) + scale(p.end)) / 2,
      y: row * (LANE_H + LANE_GAP) + LANE_H / 2,
    }
  }

  return (
    <div className="card p-4">
      <h3 className="font-display text-lg font-semibold text-ink mb-3 flex items-center gap-2">
        <span className="text-accent">◆</span> {continent.label}
        <span className="text-xs font-body font-normal text-muted">
          ({civs.length})
        </span>
      </h3>

      <div className="flex">
        {/* Colonne labels (fixe) — même ordre que les lignes des barres */}
        <div className="shrink-0" style={{ width: LABEL_W }}>
          {orderedCivs.map((civ) => (
            <div
              key={civ.id}
              className="text-xs text-ink font-medium truncate pr-3 flex items-center"
              style={{ height: LANE_H, marginBottom: LANE_GAP }}
              title={civ.label}
            >
              <span
                className="w-2 h-2 rounded-full mr-2 shrink-0"
                style={{ background: civ.color }}
              />
              {civ.label}
            </div>
          ))}
        </div>

        {/* Zone graphique scrollable */}
        <div className="overflow-x-auto flex-1">
          <div className="relative" style={{ width, height: totalH }}>
            {/* Grille + flèches en SVG */}
            <svg
              className="absolute inset-0 pointer-events-none"
              width={width}
              height={totalH}
            >
              {ticks.map((t) => (
                <line
                  key={t}
                  x1={scale(t)}
                  x2={scale(t)}
                  y1={0}
                  y2={chartH}
                  stroke="#eef1f6"
                  strokeWidth="1"
                />
              ))}

              <defs>
                <marker id="arrow-conflit" markerWidth="8" markerHeight="8"
                        refX="6" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#e74c3c" />
                </marker>
                <marker id="arrow-alliance" markerWidth="8" markerHeight="8"
                        refX="6" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#27ae60" />
                </marker>
              </defs>

              {civs.flatMap((civ) =>
                (civ.relations ?? []).map((rel, ri) => {
                  const target = civs.find((c) => c.id === rel.with)
                  if (!target) return null // relation inter-continent : non tracée ici
                  const a = centerOf(civ)
                  const b = centerOf(target)
                  const color = rel.type === 'conflit' ? '#e74c3c' : '#27ae60'
                  const midY = Math.min(a.y, b.y) - 16
                  return (
                    <path
                      key={`${civ.id}-${ri}`}
                      d={`M ${a.x} ${a.y} Q ${(a.x + b.x) / 2} ${midY} ${b.x} ${b.y}`}
                      fill="none"
                      stroke={color}
                      strokeWidth="1.5"
                      strokeDasharray={rel.type === 'alliance' ? '4 3' : undefined}
                      opacity="0.55"
                      markerEnd={`url(#arrow-${rel.type})`}
                    />
                  )
                })
              )}
            </svg>

            {/* Barres des civilisations — une par ligne */}
            {orderedCivs.map((civ) => {
              const p = clampPeriod(civ, epoch.start, epoch.end)
              const row = rowOf[civ.id] ?? 0
              const x = scale(p.start)
              const w = Math.max(scale(p.end) - x, 8)
              const y = row * (LANE_H + LANE_GAP)
              return (
                <motion.button
                  key={civ.id}
                  onClick={() => onSelect(civ)}
                  initial={{ opacity: 0, scaleX: 0.9 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  whileHover={{ y: -2, scale: 1.01 }}
                  className="absolute rounded-xl text-white text-left px-3 flex flex-col justify-center shadow-soft hoverable overflow-hidden"
                  style={{
                    left: x,
                    top: y,
                    width: w,
                    height: LANE_H,
                    background: `linear-gradient(135deg, ${civ.color}, ${civ.color}d0)`,
                    border: civ.isRiver ? '2px solid rgba(255,255,255,.7)' : 'none',
                  }}
                  title={`${civ.label} — ${civ.period}`}
                >
                  <span className="text-[11px] font-semibold leading-tight truncate">
                    {civ.label}
                  </span>
                  {w > 90 && (
                    <span className="text-[9px] opacity-90 truncate">
                      {civ.period}
                    </span>
                  )}
                  {p.overflowBefore && (
                    <span className="absolute left-0.5 top-1/2 -translate-y-1/2 text-[10px]">‹</span>
                  )}
                  {p.overflowAfter && (
                    <span className="absolute right-0.5 top-1/2 -translate-y-1/2 text-[10px]">›</span>
                  )}
                </motion.button>
              )
            })}

            {/* Axe des années */}
            <div className="absolute left-0 right-0" style={{ top: chartH, height: AXIS_H }}>
              <div className="relative w-full h-full border-t border-line">
                {ticks.map((t) => (
                  <span
                    key={t}
                    className="absolute text-[10px] text-muted -translate-x-1/2 pt-1"
                    style={{ left: scale(t) }}
                  >
                    {formatYear(t)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ZoomBtn({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-8 h-8 rounded-lg border border-line bg-surface text-ink hover:bg-line/50 transition grid place-items-center text-lg leading-none"
    >
      {children}
    </button>
  )
}

// Arrondit un pas à une valeur "propre" (1, 2, 5 × 10^n)
function niceStep(raw) {
  const pow = Math.pow(10, Math.floor(Math.log10(Math.abs(raw) || 1)))
  const n = raw / pow
  const nice = n >= 5 ? 5 : n >= 2 ? 2 : 1
  return Math.max(nice * pow, 1)
}

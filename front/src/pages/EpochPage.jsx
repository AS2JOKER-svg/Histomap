import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getEpoch, getEpochs } from '../lib/data'
import { createLinearScale, clampPeriod, formatYear } from '../lib/time'
import useDocumentTitle from '../lib/useDocumentTitle'
import PageHeader from '../components/ui/PageHeader'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import Icon from '../components/ui/Icon'
import NotFoundPage from './NotFoundPage'

const LANE_H = 46
const LANE_GAP = 10
const AXIS_H = 34

export default function EpochPage() {
  const { epochId } = useParams()
  const epoch = getEpoch(epochId)
  useDocumentTitle(epoch?.label ?? 'Époque introuvable')

  if (!epoch) {
    return <NotFoundPage title="Époque introuvable" text="Cette époque n'existe pas (encore) dans HistoMap." />
  }
  // key : remet le zoom à zéro quand on passe d'une époque à l'autre
  return <EpochTimeline key={epoch.id} epoch={epoch} />
}

function EpochTimeline({ epoch }) {
  const navigate = useNavigate()
  const [zoom, setZoom] = useState(1)
  const labelW = useLabelWidth()

  const width = 900 * zoom
  const scale = useMemo(() => createLinearScale(epoch.start, epoch.end, width), [epoch.start, epoch.end, width])

  // Graduations d'axe
  const ticks = useMemo(() => {
    const step = niceStep((epoch.end - epoch.start) / 6)
    const arr = []
    for (let t = Math.ceil(epoch.start / step) * step; t <= epoch.end; t += step) arr.push(t)
    return arr
  }, [epoch.start, epoch.end])

  const epochs = getEpochs()
  const idx = epochs.findIndex((e) => e.id === epoch.id)
  const prev = epochs[idx - 1]
  const next = epochs[idx + 1]

  return (
    <section>
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Frise', to: '/frise' }, { label: epoch.label }]} />
      <PageHeader
        eyebrow={`${formatYear(epoch.start)} → ${formatYear(epoch.end)}`}
        color={epoch.color}
        title={epoch.label}
        description={epoch.description}
        actions={
          <div className="flex items-center gap-1 bg-surface border border-line rounded-xl p-1">
            <button className="btn-icon w-9 h-9" onClick={() => setZoom((z) => Math.max(0.6, z - 0.25))} aria-label="Dézoomer">
              <Icon name="minus" size={18} />
            </button>
            <span className="text-xs text-muted w-11 text-center tabular-nums" aria-live="polite">{Math.round(zoom * 100)}%</span>
            <button className="btn-icon w-9 h-9" onClick={() => setZoom((z) => Math.min(3, z + 0.25))} aria-label="Zoomer">
              <Icon name="plus" size={18} />
            </button>
          </div>
        }
      />

      {/* Une timeline par continent */}
      <div className="space-y-5">
        {epoch.continents.map((continent) => (
          <ContinentTimeline
            key={continent.id}
            continent={continent}
            epoch={epoch}
            width={width}
            labelW={labelW}
            scale={scale}
            ticks={ticks}
            onSelect={(civ) => navigate(`/frise/${epoch.id}/${civ.id}`)}
          />
        ))}
      </div>

      <p className="text-xs text-muted mt-4">Touchez une barre pour ouvrir la fiche de la civilisation.</p>

      {/* Époque précédente / suivante */}
      <nav aria-label="Autres époques" className="mt-8 grid grid-cols-2 gap-3">
        {prev ? <EpochLink epoch={prev} dir="prev" /> : <span />}
        {next ? <EpochLink epoch={next} dir="next" /> : <span />}
      </nav>
    </section>
  )
}

function EpochLink({ epoch, dir }) {
  const isNext = dir === 'next'
  return (
    <Link
      to={`/frise/${epoch.id}`}
      className={`card hoverable p-4 flex items-center gap-3 ${isNext ? 'justify-end text-right' : ''}`}
    >
      {!isNext && <Icon name="arrowLeft" className="text-muted shrink-0" />}
      <span className="min-w-0">
        <span className="eyebrow block">{isNext ? 'Époque suivante' : 'Époque précédente'}</span>
        <span className="font-display font-semibold text-ink truncate block">{epoch.label}</span>
      </span>
      {isNext && <Icon name="arrowRight" className="text-muted shrink-0" />}
    </Link>
  )
}

function ContinentTimeline({ continent, epoch, width, labelW, scale, ticks, onSelect }) {
  const civs = continent.civilizations

  // Couloirs : les civilisations d'un même `trackId` partagent une ligne
  // (ex. Rome puis Byzance), triées par `row` puis par date de début.
  const lanes = useMemo(() => {
    const groups = {}
    civs.forEach((civ) => {
      const laneId = civ.trackId || civ.id
      const start = civ.start ?? epoch.start
      if (!groups[laneId]) {
        groups[laneId] = { id: laneId, civs: [], label: civ.label, color: civ.color, start, row: civ.row ?? 999 }
      }
      groups[laneId].civs.push(civ)
      if (start < groups[laneId].start) {
        Object.assign(groups[laneId], { start, label: civ.label, color: civ.color, row: civ.row ?? 999 })
      }
    })
    return Object.values(groups).sort((a, b) => (a.row !== b.row ? a.row - b.row : a.start - b.start))
  }, [civs, epoch.start])

  const count = Math.max(lanes.length, 1)
  const chartH = count * LANE_H + (count - 1) * LANE_GAP
  const totalH = chartH + AXIS_H

  return (
    <div className="card p-4">
      <h2 className="font-display text-lg font-semibold text-ink mb-3 flex items-center gap-2">
        {continent.label}
        <span className="text-xs font-body font-normal text-muted">({civs.length})</span>
      </h2>

      <div className="flex">
        {/* Colonne des noms (fixe) */}
        <div className="shrink-0" style={{ width: labelW }}>
          {lanes.map((lane) => (
            <div
              key={lane.id}
              className="text-xs text-ink font-medium pr-2 flex items-center leading-tight"
              style={{ height: LANE_H, marginBottom: LANE_GAP }}
              title={lane.label}
            >
              <span className="w-2 h-2 rounded-full mr-2 shrink-0" style={{ background: lane.color }} />
              <span className="line-clamp-2">{lane.label}</span>
            </div>
          ))}
        </div>

        {/* Zone graphique défilante */}
        <div className="overflow-x-auto flex-1">
          <div className="relative" style={{ width, height: totalH }}>
            <svg className="absolute inset-0 pointer-events-none" width={width} height={totalH} aria-hidden="true">
              {ticks.map((t) => (
                <line key={t} x1={scale(t)} x2={scale(t)} y1={0} y2={chartH} stroke="rgb(var(--c-line))" strokeWidth="1" />
              ))}
            </svg>

            {lanes.flatMap((lane, row) =>
              lane.civs.map((civ) => {
                const p = clampPeriod(civ, epoch.start, epoch.end)
                const x = scale(p.start)
                const w = Math.max(scale(p.end) - x, 8)
                return (
                  <motion.button
                    key={civ.id}
                    onClick={() => onSelect(civ)}
                    initial={{ opacity: 0, scaleX: 0.9 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="absolute rounded-xl text-white text-left px-3 flex flex-col justify-center shadow-soft overflow-hidden"
                    style={{
                      left: x,
                      top: row * (LANE_H + LANE_GAP),
                      width: w,
                      height: LANE_H,
                      background: `linear-gradient(135deg, ${civ.color}, ${civ.color}d0)`,
                      border: civ.isRiver ? '2px solid rgba(255,255,255,.7)' : 'none',
                    }}
                    aria-label={`${civ.label} — ${civ.period}`}
                    title={`${civ.label} — ${civ.period}`}
                  >
                    <span className="text-[11px] font-semibold leading-tight truncate">{civ.label}</span>
                    {w > 90 && <span className="text-[9px] opacity-90 truncate">{civ.period}</span>}
                    {p.overflowBefore && <span className="absolute left-0.5 top-1/2 -translate-y-1/2 text-[10px]">‹</span>}
                    {p.overflowAfter && <span className="absolute right-0.5 top-1/2 -translate-y-1/2 text-[10px]">›</span>}
                  </motion.button>
                )
              })
            )}

            {/* Axe des années */}
            <div className="absolute left-0 right-0" style={{ top: chartH, height: AXIS_H }}>
              <div className="relative w-full h-full border-t border-line">
                {ticks.map((t) => (
                  <span key={t} className="absolute text-[10px] text-muted -translate-x-1/2 pt-1 whitespace-nowrap" style={{ left: scale(t) }}>
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

/** Colonne des noms plus étroite sur mobile pour laisser de la place à la frise. */
function useLabelWidth() {
  const query = '(min-width: 640px)'
  const [wide, setWide] = useState(() => typeof matchMedia === 'function' && matchMedia(query).matches)
  useEffect(() => {
    const mq = matchMedia(query)
    const onChange = () => setWide(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return wide ? 150 : 96
}

function niceStep(raw) {
  const pow = Math.pow(10, Math.floor(Math.log10(Math.abs(raw) || 1)))
  const n = raw / pow
  const nice = n >= 5 ? 5 : n >= 2 ? 2 : 1
  return Math.max(nice * pow, 1)
}

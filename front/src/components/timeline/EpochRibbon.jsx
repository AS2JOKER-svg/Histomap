import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { countCivilizations } from '../../lib/data'
import { createEpochScale, formatDuration, formatTick, clampPeriod } from '../../lib/time'
import { shade } from '../../lib/color'
import Icon from '../ui/Icon'
import { useProgress, readCount } from '../../store/progress'

/**
 * La grande flèche des époques.
 * Chaque époque occupe la même largeur (sinon la Préhistoire écraserait tout)
 * et montre en miniature ses civilisations, rangées par continent : on voit d'un
 * coup d'œil quelles périodes sont denses, et où.
 * Desktop : flèche horizontale. Mobile : flèche verticale (de haut en bas).
 */
export default function EpochRibbon({ epochs }) {
  const [hovered, setHovered] = useState(null)

  return (
    <div>
      <ol
        className="epoch-ribbon flex flex-col md:flex-row gap-1.5 md:gap-1"
        onMouseLeave={() => setHovered(null)}
      >
        {epochs.map((epoch, i) => (
          <Segment
            key={epoch.id}
            epoch={epoch}
            index={i}
            isLast={i === epochs.length - 1}
            dimmed={hovered !== null && hovered !== epoch.id}
            onHover={() => setHovered(epoch.id)}
          />
        ))}
      </ol>

      {/* Bornes sous la flèche (desktop) */}
      <div className="hidden md:flex mt-2 pr-8 text-[11px] text-muted tabular-nums">
        {epochs.map((epoch, i) => (
          <div key={epoch.id} className="flex-1 flex justify-between">
            <span>{formatTick(epoch.start)}</span>
            {i === epochs.length - 1 && <span>{formatTick(epoch.end)}</span>}
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted flex items-start gap-1.5">
        <Icon name="info" size={14} className="shrink-0 mt-px" />
        Chaque époque a la même place sur la flèche, quelle que soit sa durée réelle (indiquée en bas de chaque bloc).
      </p>
    </div>
  )
}

function Segment({ epoch, index, isLast, dimmed, onHover }) {
  const civCount = countCivilizations(epoch)
  const read = useProgress((s) => readCount(s.fiches, epoch))

  return (
    <motion.li
      className={`relative md:flex-1 min-w-0 ${isLast ? 'epoch-ribbon-tip' : ''}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: dimmed ? 0.55 : 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      onMouseEnter={onHover}
      onFocus={onHover}
    >
      <Link
        to={`/frise/${epoch.id}`}
        className={`group relative flex flex-col h-full min-h-[190px] md:min-h-[300px] p-4 md:p-5 text-white overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${
          index === 0 ? 'rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl' : ''
        } ${isLast ? 'pb-12 md:pb-5 md:pr-12' : ''}`}
        style={{ background: `linear-gradient(160deg, ${epoch.color} 0%, ${shade(epoch.color, -18)} 100%)` }}
      >
        {/* Grand numéro décoratif */}
        <span aria-hidden="true" className="absolute right-3 top-1 font-display text-7xl font-bold opacity-15 leading-none select-none">
          {index + 1}
        </span>

        <span className="text-[11px] font-semibold uppercase tracking-[.14em] opacity-85">{formatTick(epoch.start)}</span>
        <span className="font-display text-xl md:text-[1.35rem] font-semibold leading-tight mt-1 pr-8">{epoch.label}</span>

        <MiniHistomap epoch={epoch} />

        <span className="mt-3 flex items-end justify-between gap-2 text-xs">
          <span className="opacity-90">
            <span className="block font-semibold">
              {civCount} civilisations{read > 0 && <span className="font-normal opacity-90"> · {read} lue{read > 1 ? 's' : ''}</span>}
            </span>
            <span className="block opacity-80">{formatDuration(epoch.start, epoch.end)}</span>
          </span>
          <span className="shrink-0 grid place-items-center w-8 h-8 rounded-full bg-white/20 group-hover:bg-white/35 transition">
            <Icon name="arrowRight" size={16} />
          </span>
        </span>
      </Link>
    </motion.li>
  )
}

/** Les civilisations d'une époque en fines lignes, groupées par continent. */
function MiniHistomap({ epoch }) {
  const groups = useMemo(() => {
    const scale = createEpochScale(epoch.start, epoch.end, 100)
    return epoch.continents.map((continent) => {
      const lanes = [] // fin (en %) du dernier élément de chaque ligne
      const bars = [...continent.civilizations]
        .sort((a, b) => a.start - b.start)
        .map((civ) => {
          const p = clampPeriod(civ, epoch.start, epoch.end)
          const left = scale.x(p.start)
          const width = Math.max(scale.x(p.end) - left, 2.5)
          let lane = lanes.findIndex((end) => end + 1.5 <= left)
          if (lane === -1) lane = lanes.push(0) - 1
          lanes[lane] = left + width
          return { id: civ.id, label: civ.label, left, width, lane }
        })
      return { id: continent.id, label: continent.label, bars, laneCount: lanes.length }
    })
  }, [epoch])

  return (
    <div className="mt-4 flex-1 flex flex-col justify-center gap-2" aria-hidden="true">
      {groups.map((g) => (
        <div key={g.id} className="relative" style={{ height: g.laneCount * 6 - 2 }} title={g.label}>
          {g.bars.map((b) => (
            <span
              key={b.id}
              className="absolute h-1 rounded-full bg-white/80 group-hover:bg-white transition-colors"
              style={{ left: `${b.left}%`, width: `${b.width}%`, top: b.lane * 6 }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

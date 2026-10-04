import { useMemo } from 'react'
import { MAP_YEARS, epochOfYear } from '../../lib/map'
import { formatYear } from '../../lib/time'
import Icon from '../ui/Icon'

/**
 * Curseur temporel de la carte : lecture automatique, carte précédente /
 * suivante, et une piste colorée par époque (un cran = une carte).
 */
export default function TimeSlider({ index, onChange, playing, onTogglePlay }) {
  const segments = useMemo(() => MAP_YEARS.map((y) => epochOfYear(y)), [])
  // Premier cran de chaque époque, pour les repères sous la piste
  const marks = useMemo(
    () => segments.map((e, i) => (i === 0 || segments[i - 1].id !== e.id ? { i, epoch: e } : null)).filter(Boolean),
    [segments]
  )
  const last = MAP_YEARS.length - 1
  const pct = (i) => (i / last) * 100

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <button className="btn-icon shrink-0" onClick={() => onChange(index - 1)} disabled={index === 0} aria-label="Carte précédente">
        <Icon name="arrowLeft" />
      </button>
      <button
        className="shrink-0 grid place-items-center w-12 h-12 rounded-full bg-ink text-bg shadow-soft active:scale-95 transition"
        onClick={onTogglePlay}
        aria-label={playing ? 'Mettre en pause' : 'Faire défiler le temps'}
      >
        {playing ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
        ) : (
          <Icon name="play" size={18} className="translate-x-px" />
        )}
      </button>
      <button className="btn-icon shrink-0" onClick={() => onChange(index + 1)} disabled={index === last} aria-label="Carte suivante">
        <Icon name="arrowRight" />
      </button>

      <div className="relative flex-1 min-w-0 pt-1 pb-6">
        {/* Piste colorée par époque */}
        <div className="absolute left-0 right-0 top-1/2 -mt-[13px] h-2 rounded-full overflow-hidden flex" aria-hidden="true">
          {segments.map((e, i) => (
            <span key={i} className="flex-1 transition-opacity" style={{ background: e.color, opacity: i <= index ? 1 : 0.3 }} />
          ))}
        </div>
        <input
          type="range"
          min={0}
          max={last}
          step={1}
          value={index}
          onChange={(e) => onChange(Number(e.target.value))}
          className="map-range relative w-full h-8 bg-transparent appearance-none cursor-pointer"
          aria-label="Année de la carte"
          aria-valuetext={formatYear(MAP_YEARS[index])}
        />
        {/* Repères d'époque */}
        <div className="absolute left-0 right-0 bottom-0 h-5 text-[10.5px] text-muted" aria-hidden="true">
          {marks.map(({ i, epoch }) => (
            <button
              key={epoch.id}
              type="button"
              tabIndex={-1}
              onClick={() => onChange(i)}
              className="absolute -translate-x-1/2 first:translate-x-0 whitespace-nowrap hover:text-ink hidden sm:block"
              style={{ left: `${pct(i)}%` }}
            >
              {epoch.label.replace(/^Époque\s+/, '')}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

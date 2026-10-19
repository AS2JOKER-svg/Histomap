import Icon from './ui/Icon'

/* Illustrations de l'accueil et de la présentation : 100 % CSS/SVG, aucune image à charger. */

export function TimelineIllustration({ epochs }) {
  const rows = [
    [[4, 30, 0], [38, 34, 1], [76, 20, 2]],
    [[12, 40, 1], [56, 36, 3]],
    [[0, 22, 0], [26, 28, 2], [58, 38, 4]],
  ]
  return (
    <div className="absolute inset-0 px-5 py-6 flex flex-col justify-center gap-3" aria-hidden="true">
      {rows.map((row, r) => (
        <div key={r} className="relative h-6">
          {row.map(([left, width, c], i) => (
            <span
              key={i}
              className="absolute top-0 h-6 rounded-lg shadow-sm transition-transform duration-500 group-hover:translate-x-1"
              style={{ left: `${left}%`, width: `${width}%`, background: epochs[c % epochs.length].color }}
            />
          ))}
        </div>
      ))}
      <div className="h-px bg-line mt-1" />
    </div>
  )
}

export function MapIllustration() {
  return (
    <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
      <svg viewBox="0 0 200 120" className="w-full h-full text-muted/40">
        <g fill="none" stroke="currentColor" strokeWidth="0.8">
          <circle cx="100" cy="56" r="44" />
          <ellipse cx="100" cy="56" rx="20" ry="44" />
          <ellipse cx="100" cy="56" rx="36" ry="44" />
          <path d="M56 56h88M62 34h76M62 78h76" />
        </g>
        <g className="transition-transform duration-700 origin-center group-hover:scale-105">
          <path d="M78 30c8-4 18-2 22 4s-2 12-10 12-16-10-12-16Z" fill="#d4a373" opacity=".9" />
          <path d="M104 48c8-3 20 0 22 8s-6 14-14 12-14-16-8-20Z" fill="#7c8bbf" opacity=".9" />
          <path d="M80 64c6-2 12 2 12 8s-6 12-12 10-6-16 0-18Z" fill="#c98bb9" opacity=".9" />
        </g>
        <g>
          <rect x="40" y="108" width="120" height="3" rx="1.5" fill="currentColor" />
          <rect x="40" y="108" width="62" height="3" rx="1.5" fill="rgb(var(--c-accent))" />
          <circle cx="102" cy="109.5" r="4.5" fill="rgb(var(--c-surface))" stroke="rgb(var(--c-accent))" strokeWidth="2" />
        </g>
      </svg>
    </div>
  )
}

export function ReviseIllustration({ score = '18/20' }) {
  return (
    <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
      <div className="relative w-28 h-32">
        {[-10, 6].map((rot, i) => (
          <span
            key={i}
            className="absolute inset-0 rounded-2xl bg-surface border border-line shadow-soft transition-transform duration-500"
            style={{ transform: `rotate(${rot}deg) translateY(${i * 2}px)` }}
          />
        ))}
        <span className="absolute inset-0 rounded-2xl bg-surface border border-line shadow-lift p-3 flex flex-col transition-transform duration-500 group-hover:-rotate-3 group-hover:-translate-y-1">
          <span className="h-2 w-10 rounded bg-accent/60" />
          <span className="mt-2 h-1.5 w-16 rounded bg-line" />
          <span className="mt-1 h-1.5 w-14 rounded bg-line" />
          <span className="mt-auto self-center inline-flex items-center gap-1 text-[11px] font-semibold text-success">
            <Icon name="check" size={14} strokeWidth={2.5} /> {score}
          </span>
        </span>
      </div>
    </div>
  )
}

export function WarsIllustration() {
  return (
    <div className="absolute inset-0 grid place-items-center px-6" aria-hidden="true">
      <div className="w-full max-w-[220px] grid grid-cols-[1fr_auto_1fr] items-center gap-2">
        <span className="h-10 rounded-xl grid place-items-center text-white text-xs font-bold shadow-soft" style={{ background: '#2e6f95' }}>
          Camp A
        </span>
        <span className="text-[11px] font-extrabold text-danger">VS</span>
        <span className="h-10 rounded-xl grid place-items-center text-white text-xs font-bold shadow-soft" style={{ background: '#7b2d26' }}>
          Camp B
        </span>
        <span className="col-span-3 mt-2 h-1.5 rounded-full bg-line overflow-hidden">
          <span className="block h-full w-3/5 rounded-full bg-danger/70 transition-[width] duration-700 group-hover:w-4/5" />
        </span>
      </div>
    </div>
  )
}

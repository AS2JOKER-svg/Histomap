import { useMemo } from 'react'
import { SCEAUX } from '../../lib/cosmetiques'

/** Particules qui tombent (effet de célébration choisi dans le Profil). Décor : masqué aux lecteurs d'écran. */
export function Particules({ effet, nombre = 26 }) {
  const items = useMemo(
    () =>
      Array.from({ length: nombre }, (_, i) => {
        const x = (i * 37) % 100 // réparti, mais toujours pareil (pas de hasard au rendu)
        return {
          left: `${x}%`,
          '--delai': `${((i * 0.29) % 3).toFixed(2)}s`,
          '--duree': `${2.6 + ((i * 7) % 10) / 6}s`,
          '--dx': `${((i % 5) - 2) * 18}px`,
          '--rot': `${360 + (i % 4) * 120}deg`,
          couleur: effet.couleurs[i % effet.couleurs.length],
          taille: 6 + (i % 4) * 2,
        }
      }),
    [effet, nombre]
  )
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map(({ couleur, taille, ...style }, i) => (
        <span key={i} className="hm-particule" style={style}>
          <Forme forme={effet.forme} couleur={couleur} taille={taille} />
        </span>
      ))}
    </div>
  )
}

function Forme({ forme, couleur, taille }) {
  if (forme === 'etoile')
    return (
      <svg width={taille * 1.8} height={taille * 1.8} viewBox="0 0 24 24"><path d="m12 2 2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 20.9l1.6-7L2 9.2l7.1-.6Z" fill={couleur} /></svg>
    )
  if (forme === 'trait') return <span style={{ display: 'block', width: 2, height: taille * 2, background: couleur, borderRadius: 2 }} />
  if (forme === 'petale') return <span style={{ display: 'block', width: taille, height: taille * 1.5, background: couleur, borderRadius: '60% 0 60% 0' }} />
  if (forme === 'eclat') return <span style={{ display: 'block', width: taille, height: taille, background: couleur, transform: 'rotate(45deg)' }} />
  return <span style={{ display: 'block', width: taille, height: taille, background: couleur, borderRadius: '50%' }} />
}

/** Halo et rayons dorés qui tournent derrière une médaille. */
export function Rayons({ taille = 420 }) {
  const r = taille / 2
  const rayons = Array.from({ length: 12 }, (_, i) => (i * 360) / 12)
  return (
    <svg aria-hidden="true" width={taille} height={taille} viewBox={`0 0 ${taille} ${taille}`} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <circle cx={r} cy={r} r={r * 0.8} fill="#e0c27a" fillOpacity=".08" />
      <circle cx={r} cy={r} r={r * 0.55} fill="#e0c27a" fillOpacity=".1" />
      <g className="hm-rayons" style={{ transformOrigin: `${r}px ${r}px` }}>
        {rayons.map((a) => (
          <path key={a} d={`M${r} ${r} L${r - 10} 0 L${r + 10} 0 Z`} fill="#e0c27a" fillOpacity=".13" transform={`rotate(${a} ${r} ${r})`} />
        ))}
      </g>
    </svg>
  )
}

/** Coffre qui s'ouvre (le couvercle bascule, des étincelles montent). */
export function Coffre({ taille = 120 }) {
  return (
    <svg aria-hidden="true" width={taille * 1.6} height={taille * 1.3} viewBox="0 0 160 130">
      <ellipse className="hm-pulse-or" cx="80" cy="62" rx="70" ry="42" fill="#e0c27a" fillOpacity=".22" />
      <rect x="28" y="62" width="104" height="58" fill="#8a3a1e" stroke="#e0c27a" strokeWidth="3" />
      <rect x="28" y="80" width="104" height="9" fill="#e0c27a" />
      <rect x="71" y="74" width="18" height="20" fill="#2a2118" stroke="#e0c27a" strokeWidth="2" />
      <g className="hm-couvercle">
        <path d="M28 62V50Q80 22 132 50V62Z" fill="#8a3a1e" stroke="#e0c27a" strokeWidth="3" />
      </g>
    </svg>
  )
}

/** Sceau du profil : pictogramme dans un cachet terre cuite, ou le niveau en monogramme. */
export function Sceau({ sceau, niveau, taille = 64 }) {
  const s = SCEAUX.find((x) => x.id === sceau?.id && x.d)
  return (
    <svg width={taille} height={taille} viewBox="0 0 72 72" role="img" aria-label={s ? `Sceau ${s.nom}, niveau ${niveau}` : `Niveau ${niveau}`}>
      <circle cx="36" cy="36" r="34" fill="#8a3a1e" />
      <circle cx="36" cy="36" r="28" fill="none" stroke="#e0c27a" strokeWidth="1.5" strokeDasharray="2 3" />
      {s ? (
        <g transform="translate(18 18) scale(1.5)" fill="none" stroke="#e0c27a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d={s.d} />
        </g>
      ) : (
        <text x="36" y="46" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="28" fontWeight="700" fill="#e0c27a">{niveau}</text>
      )}
    </svg>
  )
}

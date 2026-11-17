import { useMemo } from 'react'
import { motion } from 'framer-motion'

/** Effet des célébrations : poussière d'or (plus d'effets à choisir depuis la V3.1). */
export const EFFET = { couleurs: ['#e0c27a', '#f6efe2', '#c9966a'], forme: 'rond' }

/** Particules qui tombent. Décor : masqué aux lecteurs d'écran. */
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

/** Sceau du profil : le niveau en monogramme dans un cachet terre cuite. */
export function Sceau({ niveau, taille = 64 }) {
  return (
    <svg width={taille} height={taille} viewBox="0 0 72 72" role="img" aria-label={`Niveau ${niveau}`}>
      <circle cx="36" cy="36" r="34" fill="#8a3a1e" />
      <circle cx="36" cy="36" r="28" fill="none" stroke="#e0c27a" strokeWidth="1.5" strokeDasharray="2 3" />
      <text x="36" y="46" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="28" fontWeight="700" fill="#e0c27a">{niveau}</text>
    </svg>
  )
}

const ETOILE = 'M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z'

/**
 * Trois grandes étoiles du résultat (maquettes 10 et 11) : celle du milieu plus grande et plus haute ;
 * les étoiles gagnées arrivent l'une après l'autre (rien ne bouge si « mouvement réduit »).
 * `vide` : couleur du contour des étoiles non gagnées (selon le fond).
 */
export function GrandesEtoiles({ n, taille = 78, vide = '#6e5a3c', className = '' }) {
  return (
    <div role="img" aria-label={`${n} étoile${n > 1 ? 's' : ''} sur 3`} className={`flex items-end justify-center gap-2.5 ${className}`}>
      {[0, 1, 2].map((i) => {
        const t = i === 1 ? Math.round(taille * 1.28) : taille
        const pleine = i < n
        return (
          <motion.svg
            key={i}
            aria-hidden="true"
            width={t}
            height={t}
            viewBox="0 0 24 24"
            style={i === 1 ? { marginBottom: Math.round(taille * 0.23) } : undefined}
            initial={pleine ? { scale: 0.2, rotate: -30, opacity: 0 } : false}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: 'spring', damping: 9, stiffness: 220, delay: 0.15 + i * 0.32 }}
          >
            <path d={ETOILE} fill={pleine ? '#e0c27a' : 'none'} stroke={pleine ? '#a8791c' : vide} strokeWidth={pleine ? 1 : 1.2} strokeLinejoin="round" />
          </motion.svg>
        )
      })}
    </div>
  )
}

/** Seuils des étoiles (seul endroit où ils s'affichent) ; le palier atteint est plein. `ton` : 'nuit' | 'jour'. */
export function SeuilsEtoiles({ seuils, atteint, ton = 'jour' }) {
  const nuit = ton === 'nuit'
  return (
    <ul className="flex gap-2 justify-center text-[13px] tabular-nums" aria-label="Seuils des étoiles">
      {seuils.map((s, i) => {
        const plein = i + 1 === atteint
        const style = plein
          ? nuit ? { background: '#e0c27a', color: '#2a2118' } : { background: '#2a2118', color: '#e0c27a' }
          : nuit ? { border: `1px solid ${i < atteint ? '#a8791c' : '#4a3d2c'}`, color: i < atteint ? '#e0c27a' : '#c9b48c' } : undefined
        return (
          <li key={i} className={`px-2.5 py-[5px] ${plein ? 'font-bold' : nuit ? '' : 'border border-line text-muted'}`} style={style}>
            <span aria-hidden="true">{'★'.repeat(i + 1)}</span>
            <span className="sr-only">{i + 1} étoile{i ? 's' : ''} :</span> {s}
          </li>
        )
      })}
    </ul>
  )
}

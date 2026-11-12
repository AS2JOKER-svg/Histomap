import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { geoNaturalEarth1, geoPath } from 'd3-geo'
import { loadLand, loadSnapshot } from '../../lib/map'

const W = 360
const H = 240

/**
 * Carte d'une phase d'un dossier de guerre : la carte historique de `dossier.carte.annee`,
 * chaque territoire coloré selon son statut à cette phase (Axe, Alliés, occupé, neutre),
 * et les batailles de la phase (celles des phases précédentes en pâle).
 * Toucher un territoire affiche son statut ; toucher une bataille appelle onBattle.
 */
export default function WarMap({ dossier, phaseIndex, onBattle }) {
  const [data, setData] = useState(null) // { land, fc }
  const [error, setError] = useState(false)
  const [picked, setPicked] = useState(null) // nom du territoire touché
  const phase = dossier.phases[phaseIndex]

  useEffect(() => {
    let alive = true
    Promise.all([loadLand(), loadSnapshot(dossier.carte.annee)])
      .then(([land, fc]) => alive && setData({ land, fc }))
      .catch(() => alive && setError(true))
    return () => {
      alive = false
    }
  }, [dossier.carte.annee])
  useEffect(() => setPicked(null), [phaseIndex])

  const camp = useMemo(() => Object.fromEntries(dossier.camps.map((c) => [c.id, c])), [dossier.camps])
  const battles = useMemo(() => new Map(dossier.batailles.map((b) => [b.id, b])), [dossier.batailles])

  const view = useMemo(() => {
    const projection = geoNaturalEarth1().rotate([phase.carte.rotation ?? 0, 0])
    projection.fitExtent([[12, 12], [W - 12, H - 12]], { type: 'MultiPoint', coordinates: phase.carte.cadre })
    return { projection, path: geoPath(projection) }
  }, [phase])

  const statuts = phase.carte.statuts
  const statusOf = (props) => {
    const own = statuts[props.NAME] ?? (props.SUBJECTO && props.SUBJECTO !== props.NAME ? statuts[props.SUBJECTO] : undefined)
    if (!own) return { statut: 'neutre', note: null }
    return typeof own === 'string' ? { statut: own, note: null } : own
  }
  const fillOf = (s) => (s === 'axe' || s === 'occupe' ? camp.axe?.couleur : s === 'allies' ? camp.allies?.couleur : 'var(--map-other)')

  // Batailles : celles de la phase, et en pâle celles des phases précédentes
  const pins = useMemo(() => {
    const out = []
    dossier.phases.slice(0, phaseIndex + 1).forEach((p, i) =>
      p.batailles.forEach((id, j) => {
        const b = battles.get(id)
        const xy = b && view.projection(b.coords)
        if (xy && xy.every(Number.isFinite)) out.push({ b, x: xy[0], y: xy[1], current: i === phaseIndex, order: j })
      })
    )
    return out
  }, [dossier.phases, phaseIndex, battles, view])

  const pickedInfo = picked && data ? (() => {
    const f = data.fc.features.find((x) => x.properties.NAME === picked)
    if (!f) return null
    const s = statusOf(f.properties)
    return { nom: dossier.carte.noms?.[picked] ?? picked, ...s }
  })() : null

  return (
    <div>
      <div className="relative rounded-2xl overflow-hidden border border-line" style={{ background: 'var(--map-sea)' }}>
        <svg viewBox={`0 0 ${W} ${H}`} className="block w-full h-auto map-svg" role="img" aria-label={`Carte : ${phase.nom}`}>
          <defs>
            <pattern id="war-occupe" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="6" height="6" fill={camp.axe?.couleur} fillOpacity="0.28" />
              <line x1="0" y1="0" x2="0" y2="6" stroke={camp.axe?.couleur} strokeWidth="2.4" strokeOpacity="0.8" />
            </pattern>
          </defs>
          {data && (
            <motion.g key={phase.id} initial={{ opacity: 0.25 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <path d={view.path(data.land)} fill="var(--map-land)" />
              {data.fc.features.map((f, i) => {
                const s = statusOf(f.properties).statut
                return (
                  <path
                    key={i}
                    d={view.path(f)}
                    fill={s === 'occupe' ? 'url(#war-occupe)' : fillOf(s)}
                    fillOpacity={s === 'neutre' ? 1 : 0.88}
                    stroke={picked === f.properties.NAME ? 'rgb(var(--c-ink))' : 'var(--map-border)'}
                    strokeWidth={picked === f.properties.NAME ? 1.4 : 0.5}
                    onClick={() => setPicked(f.properties.NAME)}
                    className="cursor-pointer"
                  />
                )
              })}
              {pins.map(({ b, x, y, current, order }) =>
                current ? (
                  <motion.g
                    key={b.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.35 + order * 0.3, type: 'spring', stiffness: 260, damping: 18 }}
                    style={{ x, y }}
                  >
                    <circle r="10" fill={camp[b.vainqueur]?.couleur ?? '#555'} className="map-pulse" />
                    <circle
                      r="6"
                      fill={camp[b.vainqueur]?.couleur ?? '#555'}
                      stroke="#fff"
                      strokeWidth="2"
                      className="cursor-pointer"
                      onClick={() => onBattle?.(b)}
                      role="button"
                      aria-label={`Bataille : ${b.nom}`}
                    />
                  </motion.g>
                ) : (
                  <circle key={b.id} cx={x} cy={y} r="3" fill="rgb(var(--c-ink))" fillOpacity="0.35" pointerEvents="none" />
                )
              )}
            </motion.g>
          )}
        </svg>
        {!data && !error && <div className="absolute inset-0 grid place-items-center text-xs text-muted animate-pulse">Chargement de la carte…</div>}
        {error && <div className="absolute inset-0 grid place-items-center text-xs text-muted">Carte indisponible hors connexion</div>}
      </div>

      <p className="mt-2 min-h-[2.75rem] text-sm text-ink/85 leading-snug" aria-live="polite">
        {pickedInfo ? (
          <>
            <strong className="text-ink">{pickedInfo.nom}</strong> — {STATUT_LABEL[pickedInfo.statut]}
            {pickedInfo.note ? ` : ${pickedInfo.note}` : ''}
          </>
        ) : (
          <span className="text-muted">Touchez un pays pour voir sa situation, ou une bataille pour la découvrir.</span>
        )}
      </p>

      <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted" aria-label="Légende">
        <Swatch color={camp.axe?.couleur}>{camp.axe?.nom} et ses alliés</Swatch>
        <Swatch color={camp.allies?.couleur}>{camp.allies?.nom}</Swatch>
        <Swatch pattern color={camp.axe?.couleur}>Occupé par l’Axe</Swatch>
        <Swatch color="var(--map-other)">Neutre ou hors du conflit</Swatch>
      </ul>
      {dossier.carte.note && <p className="mt-2 text-[12px] text-muted leading-snug">{dossier.carte.note}</p>}
    </div>
  )
}

export const STATUT_LABEL = { axe: 'Axe ou allié de l’Axe', allies: 'Alliés', occupe: 'occupé par l’Axe', neutre: 'neutre ou hors du conflit' }

function Swatch({ color, pattern, children }) {
  return (
    <li className="flex items-center gap-1.5">
      <span
        aria-hidden="true"
        className="inline-block w-3.5 h-3.5 rounded-[4px] border border-line"
        style={pattern ? { background: `repeating-linear-gradient(45deg, ${color} 0 2px, transparent 2px 5px)` } : { background: color }}
      />
      {children}
    </li>
  )
}

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { MAP_YEARS, conflictsAt, epochOfYear, loadLand, loadSnapshot, nearestMapYear, linkTerritory } from '../lib/map'
import { findCivilization } from '../lib/data'
import { formatYear } from '../lib/time'
import { haptic } from '../lib/haptics'
import { load, save } from '../lib/storage'
import { useProgress } from '../store/progress'
import useDocumentTitle from '../lib/useDocumentTitle'
import Icon from '../components/ui/Icon'
import WorldMap from '../components/map/WorldMap'
import TimeSlider from '../components/map/TimeSlider'
import CivPreview from '../components/timeline/CivPreview'

const YEAR_KEY = 'histomap_map_year'
const DEFAULT_YEAR = 1279
const PLAY_DELAY = 1700 // ms entre deux cartes en lecture automatique

export default function MapPage() {
  const [params, setParams] = useSearchParams()
  const mapRef = useRef(null)

  // Année : URL (?annee=) > dernière année consultée > 1279
  const year = useMemo(() => {
    const fromUrl = Number(params.get('annee'))
    if (params.has('annee') && Number.isFinite(fromUrl)) return nearestMapYear(fromUrl)
    return nearestMapYear(load(YEAR_KEY, DEFAULT_YEAR))
  }, [params])
  const index = MAP_YEARS.indexOf(year)
  const epoch = epochOfYear(year)
  const selected = params.get('civ') ? findCivilization(params.get('civ')) : null

  useDocumentTitle(`Carte du monde · ${formatYear(year)}`)

  const setLast = useProgress((s) => s.setLast)
  useEffect(() => {
    setLast({ path: `/carte?annee=${year}`, kind: 'carte', title: `Le monde en ${formatYear(year)}`, subtitle: 'Carte du monde', color: epoch.color })
  }, [year, epoch.color, setLast])

  const update = useCallback(
    (patch) =>
      setParams(
        (prev) => {
          const next = new URLSearchParams(prev)
          for (const [k, v] of Object.entries(patch)) (v == null ? next.delete(k) : next.set(k, String(v)))
          return next
        },
        { replace: true, preventScrollReset: true }
      ),
    [setParams]
  )

  const goTo = useCallback(
    (i) => {
      const y = MAP_YEARS[Math.max(0, Math.min(MAP_YEARS.length - 1, i))]
      save(YEAR_KEY, y)
      update({ annee: y })
    },
    [update]
  )

  // ── Données ─────────────────────────────────────────────────────────────
  const [land, setLand] = useState(null)
  const [features, setFeatures] = useState(null)
  const [shownYear, setShownYear] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadLand().then(setLand).catch(() => {})
  }, [])

  useEffect(() => {
    let alive = true
    setError(null)
    loadSnapshot(year)
      .then((fc) => {
        if (!alive) return
        setFeatures(fc)
        setShownYear(year)
        // précharge la carte suivante : la lecture automatique reste fluide
        const next = MAP_YEARS[MAP_YEARS.indexOf(year) + 1]
        if (next !== undefined) loadSnapshot(next).catch(() => {})
      })
      .catch((e) => alive && setError(e.message))
    return () => {
      alive = false
    }
  }, [year])

  const loading = shownYear !== year && !error

  // ── Lecture automatique ────────────────────────────────────────────────
  const [playing, setPlaying] = useState(false)
  useEffect(() => {
    if (!playing || loading) return
    if (index >= MAP_YEARS.length - 1) {
      setPlaying(false)
      return
    }
    const t = setTimeout(() => goTo(index + 1), PLAY_DELAY)
    return () => clearTimeout(t)
  }, [playing, loading, index, goTo])

  const togglePlay = () => {
    haptic('tap')
    if (!playing && index >= MAP_YEARS.length - 1) goTo(0)
    setPlaying((p) => !p)
  }

  // ── Conflits ───────────────────────────────────────────────────────────
  const [showConflicts, setShowConflicts] = useState(true)
  const [conflict, setConflict] = useState(null)
  const conflicts = useMemo(() => (showConflicts ? conflictsAt(shownYear ?? year) : []), [showConflicts, shownYear, year])
  useEffect(() => setConflict(null), [year])

  // ── Civilisations visibles sur cette carte (pour la liste sous la carte) ─
  const visibleCivs = useMemo(() => {
    if (!features || shownYear == null) return []
    const seen = new Map()
    for (const f of features.features) {
      const link = linkTerritory(f.properties, shownYear)
      if (link && !link.colony && !seen.has(link.civ.id)) seen.set(link.civ.id, link)
    }
    return [...seen.values()].sort((a, b) => a.civ.label.localeCompare(b.civ.label, 'fr'))
  }, [features, shownYear])

  const [toast, setToast] = useState(null)
  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 2600)
    return () => clearTimeout(t)
  }, [toast])

  const onSelectTerritory = useCallback(
    (shape) => {
      if (shape.link) {
        haptic('select')
        setConflict(null)
        update({ civ: shape.link.civ.id })
      } else {
        setToast(`${shape.name} : pas encore de fiche HistoMap`)
      }
    },
    [update]
  )

  const selectFromList = (link) => {
    haptic('select')
    update({ civ: link.civ.id })
    mapRef.current?.focusCiv(link.civ.id)
  }

  return (
    <section>
      {/* En-tête compact */}
      <div className="flex flex-wrap items-end justify-between gap-3 mb-4">
        <div>
          <p className="eyebrow mb-1">Carte du monde</p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
            Le monde en <span className="tabular-nums">{formatYear(year)}</span>
          </h1>
        </div>
        <Link
          to={`/frise/${epoch.id}`}
          className="inline-flex items-center gap-2 h-10 pl-2 pr-3.5 rounded-xl bg-surface border border-line text-sm font-medium text-ink hover:border-muted/40 transition"
        >
          <span className="w-6 h-6 rounded-lg" style={{ background: epoch.color }} />
          {epoch.label} <span className="text-muted">· voir la frise</span>
          <Icon name="arrowRight" size={16} className="text-muted" />
        </Link>
      </div>

      <div className="card overflow-hidden">
        {/* Carte */}
        <div className="relative h-[58vh] sm:h-[62vh] min-h-[360px] max-h-[760px] overflow-hidden">
          <WorldMap
            ref={mapRef}
            year={shownYear ?? year}
            features={features}
            land={land}
            conflicts={conflicts}
            selectedCivId={selected?.civ.id}
            onSelectTerritory={onSelectTerritory}
            onSelectConflict={(c) => {
              haptic('select')
              setConflict(c)
            }}
            selectedConflictKey={conflict ? `${conflict.nom}|${conflict.annee}` : null}
          />

          {/* Grande année en surimpression */}
          <div className="pointer-events-none absolute left-3 top-3 sm:left-4 sm:top-4 px-3 py-1.5 rounded-2xl glass shadow-soft">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.p
                key={year}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="font-display text-2xl sm:text-4xl font-bold text-ink tabular-nums"
              >
                {formatYear(year)}
              </motion.p>
            </AnimatePresence>
            {loading && <p className="text-xs text-muted mt-1 animate-pulse">Chargement de la carte…</p>}
            {error && <p className="text-xs text-danger mt-1 pointer-events-auto">{error}</p>}
          </div>

          {/* Contrôles de zoom et calques */}
          <div className="absolute right-3 top-3 flex flex-col gap-1.5">
            <MapButton label="Zoomer" onClick={() => mapRef.current?.zoomBy(1.6)}><Icon name="plus" size={18} /></MapButton>
            <MapButton label="Dézoomer" onClick={() => mapRef.current?.zoomBy(1 / 1.6)}><Icon name="minus" size={18} /></MapButton>
            <MapButton label="Vue d'ensemble" onClick={() => mapRef.current?.reset()}><Icon name="globe" size={18} /></MapButton>
            <MapButton
              label={showConflicts ? 'Masquer les conflits' : 'Afficher les conflits'}
              active={showConflicts}
              onClick={() => setShowConflicts((v) => !v)}
            >
              <Icon name="swords" size={18} />
            </MapButton>
          </div>

          {/* Fiche d'un conflit */}
          <AnimatePresence>
            {conflict && <ConflictCard conflict={conflict} onClose={() => setConflict(null)} />}
          </AnimatePresence>

          {/* Message court (territoire sans fiche) */}
          <AnimatePresence>
            {toast && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute left-1/2 bottom-3 -translate-x-1/2 px-3.5 py-2 rounded-xl bg-ink text-bg text-sm shadow-lift whitespace-nowrap max-w-[90%] truncate"
                role="status"
              >
                {toast}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Curseur temporel */}
        <div className="px-3 sm:px-5 pt-4 border-t border-line">
          <TimeSlider index={index} onChange={goTo} playing={playing} onTogglePlay={togglePlay} />
        </div>

        {/* Légende */}
        <div className="px-4 sm:px-5 py-3 border-t border-line flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted">
          <Legend swatch={<span className="w-3.5 h-3.5 rounded bg-accent" />}>Civilisation avec fiche (cliquable)</Legend>
          <Legend swatch={<span className="w-3.5 h-3.5 rounded bg-accent/40" />}>Territoire sous sa domination</Legend>
          <Legend swatch={<span className="w-3.5 h-3.5 rounded border border-line" style={{ background: 'var(--map-other)' }} />}>Autres peuples et États</Legend>
          <Legend swatch={<span className="w-3 h-3 rounded-full bg-danger ring-2 ring-white" />}>Conflit de cette période</Legend>
        </div>
      </div>

      {/* Civilisations présentes sur cette carte */}
      <section className="mt-6" aria-labelledby="visible-civs">
        <h2 id="visible-civs" className="eyebrow mb-3">
          Sur cette carte · {visibleCivs.length} civilisation{visibleCivs.length > 1 ? 's' : ''} HistoMap
        </h2>
        {visibleCivs.length === 0 ? (
          <p className="text-sm text-muted">Aucune civilisation HistoMap sur cette carte : essayez une autre année.</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {visibleCivs.map((link) => (
              <button
                key={link.civ.id}
                type="button"
                onClick={() => selectFromList(link)}
                className={`inline-flex items-center gap-2 h-10 px-3.5 rounded-xl border text-sm transition ${
                  selected?.civ.id === link.civ.id ? 'border-ink bg-surface text-ink font-medium' : 'border-line bg-surface text-ink hover:border-muted/40'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: link.civ.color }} />
                {link.civ.label}
              </button>
            ))}
          </div>
        )}
        <p className="mt-6 text-[11px] text-muted">
          Frontières : projet <a className="underline hover:text-ink" href="https://github.com/aourednik/historical-basemaps" target="_blank" rel="noreferrer">historical-basemaps</a> (A. Ourednik, GPL-3.0), approximatives pour les périodes anciennes.
          Chaque cran du curseur est une carte : l'écart entre deux crans n'est pas constant.
        </p>
      </section>

      <AnimatePresence>
        {selected && (
          <CivPreview
            key="preview"
            civ={selected.civ}
            epoch={selected.epoch}
            continent={selected.continent}
            onClose={() => update({ civ: null })}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

function MapButton({ label, onClick, active, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      aria-pressed={active}
      className={`grid place-items-center w-10 h-10 rounded-xl shadow-soft border transition active:scale-95 ${
        active === false ? 'bg-surface/80 text-muted border-line' : active ? 'bg-ink text-bg border-ink' : 'bg-surface/90 text-ink border-line hover:bg-surface'
      }`}
    >
      {children}
    </button>
  )
}

function Legend({ swatch, children }) {
  return (
    <span className="inline-flex items-center gap-2">
      {swatch}
      {children}
    </span>
  )
}

function ConflictCard({ conflict, onClose }) {
  const { ref } = conflict
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      className="absolute left-3 right-3 bottom-3 sm:right-auto sm:w-[340px] bg-surface border border-line rounded-xl2 shadow-lift p-4 z-10"
      role="dialog"
      aria-label={conflict.nom}
    >
      <button onClick={onClose} className="btn-icon absolute top-1.5 right-1.5 w-9 h-9" aria-label="Fermer">
        <Icon name="close" size={18} />
      </button>
      <p className="eyebrow text-danger flex items-center gap-1.5">
        <Icon name="swords" size={14} /> Conflit · {formatYear(conflict.annee)}
      </p>
      <h3 className="font-display text-lg font-semibold text-ink leading-tight mt-1 pr-8">{conflict.nom}</h3>
      {conflict.adversaires?.length > 0 && (
        <p className="text-xs text-muted mt-2">
          <span className="font-semibold text-ink">Face à : </span>
          {conflict.adversaires.join(', ')}
        </p>
      )}
      {conflict.vainqueur && (
        <p className="text-xs text-muted mt-1">
          <span className="font-semibold text-ink">Vainqueur : </span>
          {conflict.vainqueur}
        </p>
      )}
      {conflict.consequences && <p className="text-sm text-muted mt-2 leading-relaxed line-clamp-3">{conflict.consequences}</p>}
      <Link
        to={`/frise/${ref.epoch.id}/${ref.civ.id}`}
        className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
      >
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: ref.civ.color }} />
        Fiche : {ref.civ.label} <Icon name="arrowRight" size={14} />
      </Link>
    </motion.div>
  )
}

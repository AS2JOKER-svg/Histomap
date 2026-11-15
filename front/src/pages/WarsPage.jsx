import { useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import WARS from '../data/wars.json'
import { findCivilization, getEpochs, nearestMapYear } from '../lib/data'
import { findDossier, getDossiers } from '../lib/dossiers'
import { solidBg } from '../lib/color'
import { formatYear } from '../lib/time'
import { useUI } from '../store/ui'
import useDocumentTitle from '../lib/useDocumentTitle'
import PageHeader from '../components/ui/PageHeader'
import Versus from '../components/fiche/Versus'
import Icon from '../components/ui/Icon'

/**
 * Onglet Guerres (maquette 09) : toutes les guerres des fiches, rangées par
 * époque, en « camp contre camp ». Toucher une guerre ouvre son aperçu.
 * En tête, les dossiers de guerre (phases, carte animée, batailles, quiz : /guerres/:id) ;
 * une guerre de fiche rattachée à un dossier y renvoie depuis son aperçu.
 * ?epoque=… filtre, ?guerre=<clé> ouvre l'aperçu (recherche).
 */
export default function WarsPage() {
  useDocumentTitle('Guerres')
  const [params, setParams] = useSearchParams()
  const openSheet = useUI((s) => s.openSheet)
  const epochs = getEpochs()
  const filter = epochs.some((e) => e.id === params.get('epoque')) ? params.get('epoque') : null

  const byEpoch = useMemo(
    () => epochs.map((e) => ({ epoch: e, wars: WARS.filter((w) => w.epoch === e.id) })).filter((g) => g.wars.length),
    [epochs]
  )

  const open = (w) => {
    const refs = w.civs.map(findCivilization).filter(Boolean)
    const rows = [
      w.vainqueur && { label: 'Vainqueur', value: w.vainqueur },
      w.morts && { label: 'Pertes', value: w.morts },
    ].filter(Boolean)
    openSheet({
      badge: 'guerre',
      title: w.nom,
      subtitle: [w.annee != null ? formatYear(w.annee) : null, [...w.camp, ...w.allies].join(', ') + ' contre ' + (w.adversaires.join(', ') || '—')].filter(Boolean).join(' · '),
      text: w.consequences,
      rows,
      actions: [
        ...(w.dossier ? [{ label: `Dossier : ${findDossier(w.dossier)?.nom ?? 'la guerre'}`, to: `/guerres/${w.dossier}` }] : []),
        ...refs.map((r) => ({ label: `Fiche : ${r.civ.label}`, to: `/frise/${r.epoch.id}/${r.civ.id}?onglet=guerres` })),
        ...(w.coords && w.annee != null ? [{ label: 'Voir sur la carte', to: `/carte?annee=${nearestMapYear(w.annee)}` }] : []),
        ...(w.wikiUrl ? [{ label: 'Wikipédia', href: w.wikiUrl }] : []),
      ],
    })
  }

  // Arrivée depuis la recherche : ?guerre=<clé> ouvre directement l'aperçu
  const warKey = params.get('guerre')
  useEffect(() => {
    const w = warKey && WARS.find((x) => x.key === warKey)
    if (w) open(w)
  }, [warKey]) // eslint-disable-line react-hooks/exhaustive-deps

  const groups = filter ? byEpoch.filter((g) => g.epoch.id === filter) : byEpoch

  return (
    <section className="max-w-3xl mx-auto">
      <PageHeader eyebrow={`${WARS.length} guerres et batailles`} title="Guerres" description="Les grands conflits de chaque époque, camp contre camp. Touchez une guerre pour son aperçu." />

      {!filter && <Dossiers />}

      <div className="flex gap-1.5 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 mb-6" role="group" aria-label="Filtrer par époque">
        <FilterChip on={!filter} onClick={() => setParams({}, { replace: true })}>Toutes</FilterChip>
        {byEpoch.map(({ epoch, wars }) => (
          <FilterChip key={epoch.id} on={filter === epoch.id} onClick={() => setParams({ epoque: epoch.id }, { replace: true })}>
            {epoch.label} · {wars.length}
          </FilterChip>
        ))}
      </div>

      <div className="space-y-8">
        {groups.map(({ epoch, wars }) => (
          <div key={epoch.id}>
            <h2 className="eyebrow mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: epoch.color }} />
              {epoch.label}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {wars.map((w, i) => (
                <motion.button
                  key={w.key}
                  type="button"
                  onClick={() => open(w)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(i * 0.02, 0.2) }}
                  className="card hoverable p-4 text-left"
                >
                  <span className="flex justify-between items-start gap-3">
                    <span className="font-semibold text-ink leading-snug">{w.nom}</span>
                    {w.annee != null && <span className="text-xs text-muted tabular-nums shrink-0 mt-0.5">{formatYear(w.annee)}</span>}
                  </span>
                  <Versus left={[...w.camp, ...w.allies]} right={w.adversaires} />
                  {w.dossier && <span className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-ink/70"><Icon name="layers" size={13} /> Dossier complet</span>}
                </motion.button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/** Dossiers de guerre : le plus récent à la une, les autres en liste (ordre chronologique). */
function Dossiers() {
  const all = getDossiers()
  if (!all.length) return null
  const others = all.slice(0, -1)
  return (
    <div className="mb-6">
      <Featured d={all.at(-1)} />
      {others.length > 0 && (
        <div className="grid gap-2.5 sm:grid-cols-2 -mt-2">
          {others.map((d) => (
            <Link key={d.id} to={`/guerres/${d.id}`} className="card hoverable p-3.5 flex items-center gap-3 min-h-[44px]">
              <span className="flex -space-x-1.5 shrink-0" aria-hidden="true">
                {d.camps.slice(0, 2).map((c) => (
                  <span key={c.id} className="w-5 h-5 rounded-full border-2 border-surface" style={{ background: c.couleur }} />
                ))}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-semibold text-ink leading-snug">{d.nom}</span>
                <span className="block text-[13px] text-muted">
                  {formatYear(d.debut)} → {formatYear(d.fin)} · {d.counts.phases} phases · {d.counts.batailles} batailles
                </span>
              </span>
              <Icon name="chevronRight" size={18} className="text-muted shrink-0" />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

/** Dossier « à la une » (maquette 09) : camp contre camp et chiffres clés. */
function Featured({ d }) {
  const [a, b] = d.camps
  return (
    <Link to={`/guerres/${d.id}`} className="block mb-4 rounded-[22px] overflow-hidden text-white hoverable" style={{ background: 'linear-gradient(150deg, #2c3e50, #1a1f2b)', boxShadow: 'var(--shadow-lift)' }}>
      <span className="block px-[18px] pt-[18px]">
        <span className="block text-[11px] font-semibold uppercase tracking-[.12em] opacity-75">À la une · {formatYear(d.debut)} → {formatYear(d.fin)}</span>
        <span className="block font-display text-2xl font-semibold leading-tight mt-1">{d.nom}</span>
      </span>
      <span className="grid grid-cols-[1fr_auto_1fr] gap-2.5 items-center px-[18px] py-3.5">
        <span className="rounded-[14px] px-3 py-2.5 font-bold text-center" style={{ background: solidBg(a.couleur) }}>{a.nom}</span>
        <span className="text-[11px] font-extrabold opacity-80">VS</span>
        <span className="rounded-[14px] px-3 py-2.5 font-bold text-center" style={{ background: solidBg(b.couleur) }}>{b.nom}</span>
      </span>
      <span className="flex flex-wrap gap-x-4 gap-y-1 px-[18px] pb-[18px] text-[12.5px] opacity-85">
        <span>{d.counts.phases} phases</span>
        <span>{d.counts.batailles} batailles</span>
        <span>{d.counts.personnages} personnages</span>
        <span className="ml-auto inline-flex items-center gap-1 font-semibold">Ouvrir le dossier <Icon name="arrowRight" size={14} /></span>
      </span>
    </Link>
  )
}

function FilterChip({ on, onClick, children }) {
  return (
    <button type="button" onClick={onClick} className={`chip shrink-0 h-9 transition ${on ? '!bg-ink !text-bg' : 'hover:bg-line/70'}`}>
      {children}
    </button>
  )
}

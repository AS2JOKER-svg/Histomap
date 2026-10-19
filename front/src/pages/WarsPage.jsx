import { useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import WARS from '../data/wars.json'
import { findCivilization, getEpochs, nearestMapYear } from '../lib/data'
import { formatYear } from '../lib/time'
import { useUI } from '../store/ui'
import useDocumentTitle from '../lib/useDocumentTitle'
import PageHeader from '../components/ui/PageHeader'
import Versus from '../components/fiche/Versus'

/**
 * Onglet Guerres (maquette 09) : toutes les guerres des fiches, rangées par
 * époque, en « camp contre camp ». Toucher une guerre ouvre son aperçu.
 * Les pages complètes des guerres (phases, carte animée, batailles) viendront
 * avec le sprint Guerres. ?epoque=… filtre, ?guerre=<clé> ouvre l'aperçu (recherche).
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
                </motion.button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function FilterChip({ on, onClick, children }) {
  return (
    <button type="button" onClick={onClick} className={`chip shrink-0 h-9 transition ${on ? '!bg-ink !text-bg' : 'hover:bg-line/70'}`}>
      {children}
    </button>
  )
}

import { useEffect, useRef } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { getCivilization, regionLabel, useCiv } from '../lib/data'
import { haptic } from '../lib/haptics'
import { useProgress } from '../store/progress'
import { useUI } from '../store/ui'
import { chapterSize, mapYears } from '../lib/revision'
import { formatYear, formatDuration } from '../lib/time'
import { civTextStyle, shade, solidBg } from '../lib/color'
import useDocumentTitle from '../lib/useDocumentTitle'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import Icon from '../components/ui/Icon'
import RichText from '../components/ui/RichText'
import LineageTrail from '../components/LineageTrail'
import MiniMap from '../components/revision/MiniMap'
import Versus from '../components/fiche/Versus'
import { AsKnow, Empty, Facts, Initials, KeyPoints, Prose, Section, Sources, Timeline, TitledList } from '../components/fiche/blocks'
import NotFoundPage from './NotFoundPage'

/** Les 6 onglets de la fiche (maquette 05, validée). L'onglet est dans l'URL : ?onglet=dirigeants */
const TABS = [
  { id: 'resume', label: 'Résumé' },
  { id: 'histoire', label: 'Histoire' },
  { id: 'dirigeants', label: 'Dirigeants' },
  { id: 'societe', label: 'Société' },
  { id: 'guerres', label: 'Guerres' },
  { id: 'carte', label: 'Carte' },
]

/** Les 9 repères, identiques pour toutes les fiches (content/civs/<id>.json → reperes). */
const REPERES = [
  ['capitale', 'Capitale'],
  ['regimes', 'Régimes'],
  ['langues', 'Langues'],
  ['religion', 'Religion'],
  ['apogee', 'Apogée'],
  ['population', 'Population'],
  ['monnaie', 'Monnaie'],
  ['duree', 'Durée'],
  ['aujourdhui', "Aujourd'hui"],
]

export default function CivilizationPage() {
  const { epochId, civId } = useParams()
  const [params, setParams] = useSearchParams()
  const found = getCivilization(epochId, civId)
  // En-tête : version légère (immédiate) ; onglets : détail chargé à la demande
  const detail = useCiv(civId)
  useDocumentTitle(found?.civ.label ?? 'Fiche introuvable')
  const readFiche = useProgress((s) => s.readFiche)
  const setLast = useProgress((s) => s.setLast)
  const views = useProgress((s) => s.fiches[civId]?.views ?? 0)
  const showToast = useUI((s) => s.showToast)
  const tabsRef = useRef(null)

  // Progression : fiche lue + « dernier endroit » pour reprendre plus tard
  useEffect(() => {
    if (!found) return
    const { epoch, civ } = found
    setLast({ path: `/frise/${epoch.id}/${civ.id}`, kind: 'fiche', title: civ.label, subtitle: `Fiche · ${epoch.label}`, color: civ.color })
    if (readFiche(civ.id)) {
      haptic('success')
      showToast({ text: 'Nouvelle fiche découverte : ajoutée à votre progression', tone: 'success' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [epochId, civId])

  if (!found) {
    return <NotFoundPage title="Fiche introuvable" text="Cette civilisation n'existe pas dans cette époque." />
  }

  const { epoch, continent } = found
  const civ = detail.civ ?? found.civ
  const tab = TABS.some((t) => t.id === params.get('onglet')) ? params.get('onglet') : 'resume'
  const showTab = (id) => {
    setParams(id === 'resume' ? {} : { onglet: id }, { replace: true, preventScrollReset: true })
    // on remonte au début de l'onglet si on l'avait dépassé
    const top = tabsRef.current?.getBoundingClientRect().top ?? 0
    if (top < 64) window.scrollBy({ top: top - 64 })
  }
  const region = regionLabel(civ.region)
  const size = chapterSize(found)

  return (
    <article
      className="max-w-3xl mx-auto"
      style={{ '--civ': civ.color, '--civ-solid': solidBg(civ.color), ...civTextStyle(civ.color) }}
    >
      <Breadcrumbs items={[{ label: 'Frise', to: '/frise' }, { label: epoch.label, to: `/frise/${epoch.id}` }, { label: civ.label }]} />

      {/* En-tête : répond à « c'est quoi ? » en 5 secondes */}
      <header className="pt-1 pb-5">
        <p className="eyebrow flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: civ.color }} />
          {[epoch.label, continent.label, region].filter(Boolean).join(' · ')}
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ink tracking-tight mt-2 text-balance">{civ.label}</h1>
        <p className="mt-2 font-semibold tabular-nums">
          <span className="civ-text">{civ.period}</span>
          <span className="text-muted font-normal"> · {formatDuration(civ.start, civ.end)}</span>
          {views > 1 && (
            <span className="ml-2 inline-flex items-center gap-1 align-middle text-[11px] font-semibold px-2 py-0.5 rounded-md text-success" style={{ background: 'rgb(var(--c-success) / .1)' }}>
              <Icon name="check" size={12} strokeWidth={2.6} /> Déjà lue
            </span>
          )}
        </p>
        <RichText as="p" className="mt-3 text-[16px] sm:text-[17px] text-ink/85 leading-relaxed" text={civ.description} />
      </header>

      {/* Onglets */}
      <div ref={tabsRef} className="sticky top-16 z-20 -mx-4 sm:mx-0 px-4 sm:px-0 py-2 bg-bg/90 backdrop-blur-md border-b border-line">
        <div role="tablist" aria-label="Sections de la fiche" className="flex gap-1 overflow-x-auto no-scrollbar">
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              id={`onglet-${t.id}`}
              aria-selected={tab === t.id}
              aria-controls="panneau-fiche"
              onClick={() => showTab(t.id)}
              className={`shrink-0 h-10 px-4 rounded-xl text-sm font-semibold transition ${
                tab === t.id ? 'bg-surface text-ink shadow-soft border border-line' : 'text-muted hover:text-ink'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div id="panneau-fiche" role="tabpanel" aria-labelledby={`onglet-${tab}`} className="pb-4">
        {detail.status !== 'ready' ? (
          <DetailFallback status={detail.status} retry={detail.retry} />
        ) : (
          <>
            {tab === 'resume' && <Resume civ={civ} epoch={epoch} continent={continent} onTab={showTab} />}
            {tab === 'histoire' && <Histoire civ={civ} />}
            {tab === 'dirigeants' && <Dirigeants civ={civ} />}
            {tab === 'societe' && <Societe civ={civ} />}
            {tab === 'guerres' && <Guerres civ={civ} />}
            {tab === 'carte' && <Carte civ={civ} />}
          </>
        )}
      </div>

      {/* Une seule action principale : réviser cette civilisation */}
      <div className="sticky z-10 bottom-[calc(theme(spacing.tabbar)+0.75rem)] md:bottom-6 mt-6">
        <Link to={`/reviser/${epoch.id}/${civ.id}`} className="btn-accent w-full h-12 text-[15px] shadow-lift">
          <Icon name="cards" size={18} /> Réviser {civ.label}
          {size && <span className="font-normal opacity-90 hidden sm:inline">· {size.tier1} cartes + quiz</span>}
        </Link>
      </div>
    </article>
  )
}

/* ═════════════════════════════ Onglets ═════════════════════════════════════ */

function Resume({ civ, epoch, continent, onTab }) {
  const openSheet = useUI((s) => s.openSheet)
  const reperes = civ.reperes ?? {}
  const value = (k) => (typeof reperes[k] === 'string' ? { valeur: reperes[k] } : reperes[k] ?? {})
  const facts = REPERES.map(([k, label]) => {
    const v = value(k)
    if (k === 'capitale') return { label, valeur: v.valeur ?? civ.capitale, precision: v.precision }
    if (k === 'duree') return { label, valeur: v.valeur ?? formatDuration(civ.start, civ.end), precision: v.precision ?? civ.period }
    return { label, ...v, wide: k === 'aujourdhui' }
  })
  const dates = [...(civ.datesCles ?? [])].sort((a, b) => a.annee - b.annee)
  const years = mapYears(civ)
  const siblings = continent.civilizations.filter((c) => c.id !== civ.id)
  // Les anciens « documentaires » pointent tous vers Wikipédia : on les affiche comme tels (titre tiré du lien), sans doublon
  const sources = [...(civ.sources ?? []), ...(civ.documentaires ?? []).map((d) => d.url)].filter(
    (src, i, all) => all.findIndex((x) => (x.url ?? x) === (src.url ?? src)) === i
  )

  return (
    <>
      {years.length > 0 && (
        <div className="mt-6">
          <MiniMap civ={civ} years={[years[Math.floor(years.length / 2)]]} />
          <button onClick={() => onTab('carte')} className="mt-2 text-sm ref-link">
            Voir le territoire dans le temps
          </button>
        </div>
      )}

      <Section icon="layers" title="Repères">
        <Facts items={facts} />
      </Section>

      {civ.essentiel?.length > 0 && (
        <Section icon="sparkles" title={`L'essentiel en ${civ.essentiel.length} points`}>
          <KeyPoints points={civ.essentiel} />
        </Section>
      )}

      {dates.length > 0 && (
        <Section icon="clock" title="Dates clés">
          <Timeline items={dates.map((d) => ({ annee: d.annee, label: d.evenement, ref: d.ref }))} compact />
          <button onClick={() => onTab('histoire')} className="btn-secondary w-full h-11 mt-5">
            {civ.periodes?.length ? "Toute l'histoire, période par période" : 'Les dates expliquées'} <Icon name="arrowRight" size={16} />
          </button>
        </Section>
      )}

      {civ.personnages?.length > 0 && (
        <Section icon="star" title="Personnages clés">
          <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 pb-1 snap-x">
            {civ.personnages.map((p) => (
              <button
                key={p.nom}
                type="button"
                onClick={() =>
                  openSheet(
                    p.ref
                      ? { id: p.ref, title: p.nom }
                      : {
                          badge: 'personne',
                          title: p.nom,
                          subtitle: [p.role, p.dates].filter(Boolean).join(' · '),
                          text: p.description,
                          actions: p.wikiUrl ? [{ label: 'Wikipédia', href: p.wikiUrl }] : [],
                        }
                  )
                }
                className="card hoverable snap-start shrink-0 w-[160px] p-3.5 text-left"
              >
                <Initials name={p.nom} />
                <span className="block mt-2.5 text-sm font-semibold text-ink leading-snug">{p.nom}</span>
                {p.role && <span className="block text-xs text-muted mt-0.5">{p.role}</span>}
              </button>
            ))}
          </div>
        </Section>
      )}

      {civ.heritage?.length > 0 && (
        <Section icon="temple" title="Ce qu'il en reste aujourd'hui">
          <TitledList items={civ.heritage} />
        </Section>
      )}

      {civ.aSavoir?.length > 0 && (
        <Section icon="alert" title="À savoir">
          <AsKnow items={civ.aSavoir} />
        </Section>
      )}

      {civ.lineage && (
        <Section icon="timeline" title="Fil de l'histoire">
          <LineageTrail civ={civ} linkTo={(m) => `/frise/${m.epochId}/${m.civId}`} />
        </Section>
      )}

      {sources.length > 0 && (
        <Section icon="book" title="Sources et pour aller plus loin">
          <Sources items={sources} />
        </Section>
      )}

      {siblings.length > 0 && (
        <nav aria-label="Autres civilisations" className="mt-10">
          <p className="eyebrow mb-3">Ailleurs en {continent.label} · {epoch.label}</p>
          <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap pb-1">
            {siblings.map((s) => (
              <Link
                key={s.id}
                to={`/frise/${epoch.id}/${s.id}`}
                className="shrink-0 inline-flex items-center gap-2 px-3.5 h-11 rounded-xl bg-surface border border-line text-sm text-ink hover:border-muted/40 transition"
              >
                <span className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                {s.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </>
  )
}

function Histoire({ civ }) {
  const periodes = civ.periodes ?? []
  const dates = [...(civ.datesCles ?? [])].sort((a, b) => a.annee - b.annee)
  if (!periodes.length) {
    return (
      <Section icon="clock" title="Chronologie">
        {dates.length ? (
          <Timeline items={dates.map((d) => ({ annee: d.annee, label: d.evenement, detail: d.info, ref: d.ref }))} />
        ) : (
          <Empty>Aucune date renseignée.</Empty>
        )}
      </Section>
    )
  }
  const total = periodes.reduce((n, p) => n + Math.max(p.fin - p.debut, 1), 0)
  return (
    <>
      <div className="mt-6">
        <p className="eyebrow mb-2">{periodes.length} grandes périodes</p>
        <div className="flex h-8 rounded-xl overflow-hidden gap-0.5" aria-hidden="true">
          {periodes.map((p, i) => (
            <div
              key={p.nom}
              className="grid place-items-center text-[10.5px] font-bold text-white overflow-hidden whitespace-nowrap px-1"
              style={{ flex: Math.max(p.fin - p.debut, 1) / total, background: shade(solidBg(civ.color), -i * 6), textShadow: '0 1px 2px rgba(0,0,0,.3)' }}
              title={p.nom}
            >
              {(p.fin - p.debut) / total > 0.14 ? p.nom : ''}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-[11px] text-muted tabular-nums mt-1.5">
          <span>{formatYear(periodes[0].debut)}</span>
          <span>{formatYear(periodes[periodes.length - 1].fin)}</span>
        </div>
      </div>
      <div className="mt-6 border-t border-line">
        {periodes.map((p, i) => (
          <details key={p.nom} className="group border-b border-line" open={i === 0}>
            <summary className="list-none flex items-center gap-3 min-h-[60px] py-3 cursor-pointer [&::-webkit-details-marker]:hidden">
              <span className="flex-1">
                <span className="block eyebrow tabular-nums">
                  {formatYear(p.debut)} → {formatYear(p.fin)} · {formatDuration(p.debut, p.fin)}
                </span>
                <span className="block text-base font-semibold text-ink mt-0.5">{p.nom}</span>
              </span>
              <Icon name="chevronRight" className="text-muted transition group-open:rotate-90" />
            </summary>
            <div className="pb-5">
              <Prose text={p.resume} />
              {p.evenements?.length > 0 && (
                <div className="mt-4">
                  <Timeline items={p.evenements.map((e) => ({ annee: e.annee, label: e.evenement, ref: e.ref }))} compact />
                </div>
              )}
            </div>
          </details>
        ))}
      </div>
    </>
  )
}

// Période d'un règne ; une seule date quand il tient dans l'année (ou n'est connu que par une date)
const reign = (l) => (l.debut === l.fin ? formatYear(l.debut) : `${formatYear(l.debut)} → ${formatYear(l.fin)}`)

/** Bande des régimes politiques, proportionnelle à leur durée, suivie de leurs notes. */
function Regimes({ civ, regimes }) {
  if (!regimes.length) return null
  const start = Math.min(...regimes.map((r) => r.debut))
  const end = Math.max(...regimes.map((r) => r.fin))
  return (
    <div className="mt-6">
      <div className="flex h-11 rounded-xl overflow-hidden gap-0.5" aria-hidden="true">
        {regimes.map((r, i) => (
          <div
            key={r.id}
            className="grid place-items-center min-w-0 text-[11px] font-bold text-white px-1"
            style={{ flex: Math.max(r.fin - r.debut, 1) / (end - start), background: shade(solidBg(civ.color), -i * 8), textShadow: '0 1px 2px rgba(0,0,0,.3)' }}
          >
            <span className="truncate max-w-full">{r.nom}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-[11px] text-muted tabular-nums mt-1.5">
        <span>{formatYear(start)}</span>
        <span>{formatYear(end)}</span>
      </div>
      {regimes.some((r) => r.note) && (
        <ul className="mt-4 space-y-1.5">
          {regimes
            .filter((r) => r.note)
            .map((r) => (
              <li key={r.id} className="text-sm text-muted leading-relaxed">
                <span className="font-semibold text-ink">{r.nom} : </span>
                <RichText text={r.note} />
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}

function Dirigeants({ civ }) {
  const openSheet = useUI((s) => s.openSheet)
  const leaders = civ.dirigeants ?? []
  const regimes = civ.regimes ?? []
  const dynasties = civ.dynasties ?? []
  if (!leaders.length) {
    // Les régimes restent affichés : leur note explique souvent pourquoi aucun nom n'est connu
    return (
      <>
        <Regimes civ={civ} regimes={regimes} />
        <Section icon="crown" title="Dirigeants">
          <Empty>Aucun dirigeant connu par son nom pour cette civilisation.</Empty>
        </Section>
      </>
    )
  }
  // Groupes : une dynastie par groupe, dans l'ordre des dynasties ; le reste à la fin
  const groups = dynasties.map((d) => ({ ...d, leaders: leaders.filter((l) => l.dynastie === d.id) })).filter((g) => g.leaders.length || g.note)
  const rest = leaders.filter((l) => !l.dynastie || !dynasties.some((d) => d.id === l.dynastie))
  if (rest.length) groups.push({ id: 'autres', nom: groups.length ? 'Autres dirigeants' : 'Dirigeants', leaders: rest })
  // Ouvert par défaut : le premier groupe qui contient un dirigeant clé (les autres affichent ces noms en résumé)
  const firstKey = groups.findIndex((g) => g.leaders.some((l) => l.cle))
  const opened = groups.length <= 2 ? -1 : firstKey >= 0 ? firstKey : 0

  const open = (l) =>
    openSheet(
      l.personne
        ? { id: l.personne, title: l.nom }
        : {
            badge: 'personne',
            title: l.nom,
            subtitle: `${l.titre} · ${reign(l)}`,
            text: l.surnom ? `Surnom : « ${l.surnom} »` : null,
            note: l.note,
          }
    )

  return (
    <>
      <Regimes civ={civ} regimes={regimes} />

      <p className="mt-6 text-sm text-muted">
        {leaders.length} dirigeant{leaders.length > 1 ? 's' : ''}. Touchez un nom pour son aperçu.
      </p>
      <div className="mt-3 border-t border-line">
        {groups.map((g, i) => {
          const from = g.debut ?? Math.min(...g.leaders.map((l) => l.debut))
          const to = g.fin ?? Math.max(...g.leaders.map((l) => l.fin))
          const span = Math.max(to - from, 1)
          const keyNames = g.leaders.filter((l) => l.cle).map((l) => l.nom)
          return (
            <details key={g.id} className="group border-b border-line" open={opened === -1 || i === opened}>
              <summary className="list-none flex items-center gap-3 min-h-[60px] py-3 cursor-pointer [&::-webkit-details-marker]:hidden">
                <span className="flex-1">
                  <span className="block eyebrow tabular-nums">
                    {formatYear(from)} → {formatYear(to)}
                  </span>
                  <span className="block text-base font-semibold text-ink mt-0.5">{g.nom}</span>
                  {keyNames.length > 0 && (
                    <span className="block text-[13px] text-muted mt-0.5 group-open:hidden">
                      dont {keyNames.slice(0, 3).join(', ')}
                      {keyNames.length > 3 ? '…' : ''}
                    </span>
                  )}
                </span>
                <span className="chip tabular-nums">{g.leaders.length}</span>
                <Icon name="chevronRight" className="text-muted transition group-open:rotate-90" />
              </summary>
              <div className="pb-4">
                {g.note && <RichText as="p" className="block text-sm text-muted leading-relaxed mb-2" text={g.note} />}
                {g.leaders.map((l) => (
                  <button
                    key={`${l.nom}-${l.debut}`}
                    type="button"
                    onClick={() => open(l)}
                    className="w-full text-left grid grid-cols-[1fr_auto] gap-x-3 gap-y-1.5 items-baseline py-2.5 px-1 border-t border-line first:border-t-0 hover:bg-surface2/50 rounded-lg transition"
                  >
                    <span className="text-[15px] font-semibold text-ink">
                      {l.nom}
                      {l.surnom && <span className="font-normal italic text-muted"> « {l.surnom} »</span>}
                      {l.personne && <span className="ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-accent align-middle" title="Fiche complète" />}
                    </span>
                    <span className="text-xs text-muted tabular-nums">
                      {reign(l)}
                    </span>
                    <span className="col-span-2 text-xs text-muted -mt-1">
                      {l.titre}
                      {l.note ? ` · ${l.note}` : ''}
                    </span>
                    <span className="col-span-2 relative h-1.5 rounded-full bg-surface2 overflow-hidden" aria-hidden="true">
                      <span
                        className="absolute inset-y-0 rounded-full"
                        style={{
                          left: `${((l.debut - from) / span) * 100}%`,
                          width: `${Math.max(1.5, ((l.fin - l.debut) / span) * 100)}%`,
                          background: 'var(--civ)',
                        }}
                      />
                    </span>
                  </button>
                ))}
              </div>
            </details>
          )
        })}
      </div>
    </>
  )
}

const RUBRIQUES = [
  ['societe', 'Société', 'users'],
  ['economie', 'Économie', 'coins'],
  ['croyancesText', 'Religions et croyances', 'temple'],
  ['sciences', 'Sciences et techniques', 'flask'],
  ['arts', 'Arts et monuments', 'palette'],
  ['quotidien', 'Vie quotidienne', 'home'],
  ['diplomatie', 'Diplomatie', 'handshake'],
]

function Societe({ civ }) {
  const openSheet = useUI((s) => s.openSheet)
  const shown = RUBRIQUES.filter(([k]) => civ[k] || (k === 'sciences' && civ.decouvertes?.length))
  if (!shown.length) {
    return (
      <Section icon="users" title="Société">
        <Empty>Non renseigné.</Empty>
      </Section>
    )
  }
  return shown.map(([k, title, icon]) => (
    <Section key={k} icon={icon} title={title}>
      <Prose text={civ[k]} />
      {k === 'sciences' && civ.decouvertes?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {civ.decouvertes.map((d) => (
            <button key={d.id} type="button" onClick={() => openSheet({ id: d.id, title: d.nom })} className="chip h-9 hover:bg-line/70 transition">
              <span className="w-2 h-2 rounded-full bg-success" /> {d.nom}
            </button>
          ))}
        </div>
      )}
    </Section>
  ))
}

function Guerres({ civ }) {
  const wars = civ.guerres ?? []
  if (!wars.length) {
    return (
      <Section icon="swords" title="Guerres">
        <Empty>Aucune guerre renseignée.</Empty>
      </Section>
    )
  }
  return (
    <Section icon="swords" title={`${wars.length} guerre${wars.length > 1 ? 's' : ''} majeure${wars.length > 1 ? 's' : ''}`}>
      <div className="grid gap-3">
        {wars.map((g) => (
          <div key={g.nom} className="card p-4">
            <div className="flex justify-between items-start gap-3">
              <h3 className="font-semibold text-ink leading-snug">{g.nom}</h3>
              {g.annee != null && <span className="text-xs text-muted tabular-nums shrink-0 mt-0.5">{formatYear(g.annee)}</span>}
            </div>
            <Versus left={[civ.label, ...(g.allies ?? [])]} right={g.adversaires ?? []} />
            <dl className="mt-3 space-y-1 text-sm">
              {g.vainqueur && (
                <div>
                  <dt className="inline font-semibold text-ink">Vainqueur : </dt>
                  <RichText as="dd" className="inline text-muted" text={g.vainqueur} />
                </div>
              )}
              {g.morts && (
                <div>
                  <dt className="inline font-semibold text-ink">Pertes : </dt>
                  <dd className="inline text-muted">{g.morts}</dd>
                </div>
              )}
            </dl>
            {g.consequences && <RichText as="p" className="block mt-2 text-sm text-muted leading-relaxed" text={g.consequences} />}
            {g.wikiUrl && (
              <a href={g.wikiUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
                Wikipédia <Icon name="external" size={14} />
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}

function Carte({ civ }) {
  const years = mapYears(civ, 4)
  if (!years.length) {
    return (
      <Section icon="globe" title="Sur la carte">
        <Empty>Cette civilisation n'apparaît pas sur les cartes historiques utilisées par HistoMap.</Empty>
      </Section>
    )
  }
  return (
    <Section icon="globe" title="Le territoire dans le temps">
      <MiniMap civ={civ} years={years} />
      <Link to={`/carte?annee=${years[Math.floor(years.length / 2)]}&civ=${civ.id}`} className="btn-secondary w-full h-11 mt-4">
        <Icon name="globe" size={18} /> Ouvrir la carte du monde
      </Link>
    </Section>
  )
}

/** Détail de la fiche en cours de chargement, ou indisponible (hors ligne, jamais ouverte). */
function DetailFallback({ status, retry }) {
  if (status === 'error') {
    return (
      <div className="card p-6 text-center mt-6">
        <span className="inline-grid place-items-center w-12 h-12 rounded-2xl bg-surface2 text-muted mb-3">
          <Icon name="wifiOff" size={22} />
        </span>
        <p className="font-semibold text-ink">Fiche indisponible</p>
        <p className="text-sm text-muted mt-1">Elle n'a pas pu être chargée. Vérifiez votre connexion, puis réessayez.</p>
        <button onClick={retry} className="btn-primary h-11 px-4 mt-4">
          <Icon name="refresh" size={18} /> Réessayer
        </button>
      </div>
    )
  }
  return (
    <div className="animate-pulse space-y-4 mt-6" aria-busy="true" aria-label="Chargement de la fiche">
      <div className="h-44 rounded-2xl bg-surface2" />
      <div className="h-5 w-32 rounded bg-surface2" />
      <div className="grid grid-cols-2 gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-16 rounded-xl bg-surface2" />
        ))}
      </div>
    </div>
  )
}

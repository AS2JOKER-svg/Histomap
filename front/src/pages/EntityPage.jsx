import { Link, useParams } from 'react-router-dom'
import { findCivilization, getCivilization } from '../lib/data'
import { ENTITY_TYPES, entityEpoch, useEntity } from '../lib/entities'
import { formatYear } from '../lib/time'
import { civTextStyle, solidBg } from '../lib/color'
import { useUI } from '../store/ui'
import useDocumentTitle from '../lib/useDocumentTitle'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import Icon from '../components/ui/Icon'
import RichText from '../components/ui/RichText'
import { AsKnow, Facts, Initials, KeyPoints, Prose, Section, Sources, Timeline, TitledList } from '../components/fiche/blocks'
import NotFoundPage from './NotFoundPage'

// Libellés qui changent selon le type de fiche
const LABELS = {
  personne: { essentiel: 'Pourquoi il ou elle compte', chronologie: 'Sa vie en dates', liens: 'Son entourage' },
  evenement: { essentiel: "L'essentiel", chronologie: 'Chronologie', liens: 'Acteurs' },
  decouverte: { essentiel: "L'essentiel", chronologie: 'Chronologie', liens: 'Personnes liées' },
}
// Icône d'une section selon son titre (contexte, déroulement…)
const SECTION_ICONS = [
  [/contexte|pourquoi|origine/i, 'history'],
  [/d[ée]roulement|comment/i, 'sparkles'],
  [/cons[ée]quence|bilan|suite/i, 'arrowRight'],
]

/** Fiche liée : une personne, un événement ou une découverte (maquettes 06, 07, 08). */
export default function EntityPage() {
  const { id } = useParams()
  const { status, entity, retry } = useEntity(id)
  useDocumentTitle(entity?.nom ?? (status === 'missing' ? 'Fiche introuvable' : 'Fiche'))

  if (status === 'missing') return <NotFoundPage title="Fiche introuvable" text="Cette fiche n'existe pas (encore) dans HistoMap." />
  if (status === 'error') {
    return (
      <div className="card p-6 text-center max-w-md mx-auto mt-10">
        <p className="font-semibold text-ink">Fiche indisponible</p>
        <p className="text-sm text-muted mt-1">Elle n'a pas pu être chargée. Vérifiez votre connexion, puis réessayez.</p>
        <button onClick={retry} className="btn-primary h-11 px-4 mt-4">
          <Icon name="refresh" size={18} /> Réessayer
        </button>
      </div>
    )
  }
  if (status !== 'ready') {
    return (
      <div className="max-w-3xl mx-auto animate-pulse space-y-4 mt-6" aria-busy="true" aria-label="Chargement de la fiche">
        <div className="h-20 w-20 rounded-3xl bg-surface2" />
        <div className="h-9 w-2/3 rounded-lg bg-surface2" />
        <div className="h-24 rounded-xl bg-surface2" />
      </div>
    )
  }
  return <Entity key={id} e={entity} />
}

function Entity({ e }) {
  const openSheet = useUI((s) => s.openSheet)
  const type = ENTITY_TYPES[e.type] ? e.type : 'personne'
  const labels = LABELS[type]
  // Couleur : celle de la première civilisation qui cite la fiche
  const home = e.apparaitDans?.civs?.map(findCivilization).find(Boolean) ?? null
  const color = home?.civ.color ?? '#345ce6'
  const epoch = entityEpoch(e)
  const focus = home && epoch && getCivilization(epoch.id, home.civ.id) ? `?focus=${home.civ.id}` : ''
  const dates = e.dates ?? (e.annee != null ? formatYear(e.annee) + (e.fin != null ? ` → ${formatYear(e.fin)}` : '') : null)
  const roles = e.roles ?? [e.role ?? e.domaine].filter(Boolean)
  const sources = [...(e.wikiUrl ? [e.wikiUrl] : []), ...(e.sources ?? [])]

  return (
    <article className="max-w-3xl mx-auto" style={{ '--civ': color, '--civ-solid': solidBg(color), ...civTextStyle(color) }}>
      <Breadcrumbs
        items={
          home
            ? [{ label: home.epoch.label, to: `/frise/${home.epoch.id}` }, { label: home.civ.label, to: `/frise/${home.epoch.id}/${home.civ.id}` }, { label: e.nom }]
            : [{ label: 'Accueil', to: '/' }, { label: e.nom }]
        }
      />

      <header className="pt-1 pb-2">
        <div className="flex items-center gap-4">
          {type === 'personne' && <Initials name={e.nom} size={76} className="!rounded-3xl shadow-soft" />}
          <div className="min-w-0">
            <span className={`badge badge-${type}`}>{ENTITY_TYPES[type].label}</span>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ink tracking-tight leading-[1.05] mt-1.5 text-balance">{e.nom}</h1>
            {e.nomComplet && <p className="text-sm italic text-muted mt-1">{e.nomComplet}</p>}
          </div>
        </div>
        {dates && <p className="mt-3 font-semibold tabular-nums civ-text">{dates}</p>}
        {e.lieu && (
          <p className="mt-1 text-sm text-muted flex items-center gap-1.5">
            <Icon name="pin" size={15} /> {e.lieu}
          </p>
        )}
        {roles.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {roles.map((r) => (
              <span key={r} className="chip">{r}</span>
            ))}
          </div>
        )}
        <RichText as="p" className="mt-3 text-[16px] sm:text-[17px] text-ink/85 leading-relaxed" text={e.description} />
      </header>

      {e.reperes?.length > 0 && (
        <Section icon="layers" title="Repères">
          <Facts items={e.reperes.map((r, i, all) => ({ ...r, wide: all.length % 2 === 1 && i === all.length - 1 }))} />
        </Section>
      )}

      {e.essentiel?.length > 0 && (
        <Section icon="sparkles" title={labels.essentiel}>
          <KeyPoints points={e.essentiel} />
        </Section>
      )}

      {e.sections?.map((s) => (
        <Section key={s.titre} icon={SECTION_ICONS.find(([re]) => re.test(s.titre))?.[1] ?? 'book'} title={s.titre}>
          <Prose text={s.texte} />
        </Section>
      ))}

      {e.chronologie?.length > 0 && (
        <Section icon="clock" title={labels.chronologie}>
          <Timeline items={e.chronologie.map((c) => ({ annee: c.annee, label: c.texte, detail: c.detail, ref: c.ref }))} />
        </Section>
      )}

      {(e.avant || e.apres) && (
        <Section icon="timeline" title="Avant, après">
          <div className="grid grid-cols-2 gap-3">
            {e.avant ? <Neighbour dir="avant" item={e.avant} onOpen={openSheet} /> : <span />}
            {e.apres ? <Neighbour dir="apres" item={e.apres} onOpen={openSheet} /> : <span />}
          </div>
        </Section>
      )}

      {e.liens?.length > 0 && (
        <Section icon="users" title={labels.liens}>
          <div className="card divide-y divide-line">
            {e.liens.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => openSheet({ id: l.id, title: l.nom })}
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-surface2/50 transition first:rounded-t-xl2 last:rounded-b-xl2"
              >
                <Initials name={l.nom} size={38} />
                <span className="flex-1 min-w-0">
                  <span className="block text-[15px] font-semibold text-ink">{l.nom}</span>
                  <span className="block text-[13px] text-muted">{l.relation}</span>
                </span>
                <Icon name="chevronRight" size={18} className="text-muted" />
              </button>
            ))}
          </div>
        </Section>
      )}

      {e.heritage?.length > 0 && (
        <Section icon="temple" title="Ce qu'il en reste aujourd'hui">
          <TitledList items={e.heritage} />
        </Section>
      )}

      {e.aSavoir?.length > 0 && (
        <Section icon="alert" title="À savoir">
          <AsKnow items={e.aSavoir} />
        </Section>
      )}

      {(e.apparaitDans?.civs?.length > 0 || e.apparaitDans?.fiches?.length > 0) && (
        <Section icon="link" title="Apparaît dans">
          <div className="flex flex-wrap gap-2">
            {e.apparaitDans.civs.map(findCivilization).filter(Boolean).map((r) => (
              <Link key={r.civ.id} to={`/frise/${r.epoch.id}/${r.civ.id}`} className="chip h-10 hover:bg-line/70 transition">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: r.civ.color }} /> {r.civ.label}
              </Link>
            ))}
            {e.apparaitDans.fiches.map((f) => (
              <button key={f.id} type="button" onClick={() => openSheet({ id: f.id, title: f.nom })} className="chip h-10 hover:bg-line/70 transition">
                {f.type && <span className={`badge badge-${f.type} !px-1.5 !py-0`}>{ENTITY_TYPES[f.type]?.label[0] ?? '·'}</span>} {f.nom}
              </button>
            ))}
          </div>
        </Section>
      )}

      {sources.length > 0 && (
        <Section icon="book" title="Sources">
          <Sources items={sources} />
        </Section>
      )}

      {/* Action principale : situer la fiche dans son époque */}
      {epoch && (
        <div className="sticky z-10 bottom-[calc(theme(spacing.tabbar)+0.75rem)] md:bottom-6 mt-8">
          <Link to={`/frise/${epoch.id}${focus}`} className="btn-accent w-full h-12 text-[15px] shadow-lift">
            <Icon name="timeline" size={18} /> Voir sur la frise · {epoch.label}
          </Link>
        </div>
      )}
    </article>
  )
}

function Neighbour({ dir, item, onOpen }) {
  const before = dir === 'avant'
  return (
    <button type="button" onClick={() => onOpen({ id: item.id, title: item.nom })} className={`card hoverable p-3.5 ${before ? 'text-left' : 'text-right'}`}>
      <span className="eyebrow block">{before ? '← Avant' : 'Après →'}</span>
      <span className="block mt-1 text-sm font-semibold text-ink leading-snug">{item.nom}</span>
    </button>
  )
}

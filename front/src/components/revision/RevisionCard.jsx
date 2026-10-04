import { formatYear } from '../../lib/time'
import { readableText, shade, civTextStyle, solidBg } from '../../lib/color'
import Icon from '../ui/Icon'
import MiniMap from './MiniMap'

/**
 * Contenu d'une carte de révision, selon son type.
 * Le cadre (taille, glisser, boutons) est géré par CardDeck.
 */
export default function RevisionCard({ card, civ, epoch, round, deck }) {
  const C = TYPES[card.type] ?? TextCard
  return <C card={card} civ={civ} epoch={epoch} round={round} deck={deck} />
}

const TYPES = {
  cover: CoverCard,
  text: TextCard,
  keyfigure: KeyFigureCard,
  dates: DatesCard,
  steps: StepsCard,
  map: MapCard,
  leaders: LeadersCard,
  person: PersonCard,
  war: WarCard,
  lineage: LineageCard,
  recap: RecapCard,
}

/* ── Cadre commun ─────────────────────────────────────────────────────────── */

function Frame({ civ, kicker, icon, children }) {
  return (
    <div className="h-full flex flex-col">
      <div className="h-1.5 shrink-0" style={{ background: civ.color }} />
      <div className="flex-1 overflow-y-auto overscroll-contain px-6 pt-5 pb-6 sm:px-7">
        {kicker && (
          <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[.14em] mb-3 civ-text" style={civTextStyle(civ.color)}>
            {icon && <Icon name={icon} size={14} />}
            {kicker}
          </p>
        )}
        {children}
      </div>
    </div>
  )
}

const Title = ({ children }) => <h2 className="font-display text-2xl sm:text-[1.7rem] leading-tight font-semibold text-ink text-balance">{children}</h2>

/* ── Types ────────────────────────────────────────────────────────────────── */

const TYPE_LABEL = { map: 'Carte', dates: 'Dates', leaders: 'Dirigeants', person: 'Personnage', war: 'Guerre', lineage: 'Avant · après', steps: 'Schéma' }

function CoverCard({ card, civ, epoch, round, deck }) {
  const fg = readableText(civ.color)
  const total = deck.length
  // « Au programme » : les thèmes des cartes de la séance, sans doublon
  const program = [...new Set(deck.filter((c) => c.type !== 'cover' && c.type !== 'recap').map((c) => c.kicker ?? TYPE_LABEL[c.type]).filter(Boolean))]
  return (
    <div
      className="h-full flex flex-col p-7 relative overflow-hidden"
      style={{ background: `linear-gradient(155deg, ${civ.color}, ${shade(civ.color, -22)})`, color: fg }}
    >
      <span aria-hidden="true" className="absolute -right-10 -bottom-16 font-display text-[12rem] leading-none font-bold opacity-10 select-none">
        {civ.label.charAt(0)}
      </span>
      <p className="text-[11px] font-semibold uppercase tracking-[.16em] opacity-80">{epoch.label} · Chapitre</p>
      <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.05] mt-3 text-balance">{civ.label}</h2>
      <p className="mt-3 text-base opacity-90">{civ.period}{civ.capitale ? ` · ${civ.capitale}` : ''}</p>

      {round > 0 && (
        <span className="mt-5 self-start inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-black/15">
          <Icon name="sparkles" size={14} /> {round === 1 ? 'Niveau 2 · nouvelles cartes' : 'Révision complète'}
        </span>
      )}

      {program.length > 0 && (
        <div className="mt-7">
          <p className="text-[11px] font-semibold uppercase tracking-[.16em] opacity-75 mb-2.5">Au programme</p>
          <ul className="flex flex-wrap gap-1.5">
            {program.map((p) => (
              <li key={p} className="text-[13px] font-medium px-2.5 py-1 rounded-lg bg-white/15 backdrop-blur-sm">{p}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-auto pt-6 space-y-3">
        <p className="flex items-center gap-4 text-sm opacity-90">
          <span className="inline-flex items-center gap-1.5"><Icon name="cards" size={16} /> {total} cartes</span>
          <span className="inline-flex items-center gap-1.5"><Icon name="clock" size={16} /> ~{card.readingTime} min</span>
        </p>
        <p className="text-xs opacity-75 leading-relaxed">
          Glissez à droite ce que vous avez compris, à gauche ce qu'il faut revoir : ces cartes reviendront à la fin.
        </p>
      </div>
    </div>
  )
}

function TextCard({ card, civ }) {
  return (
    <Frame civ={civ} kicker={card.kicker}>
      <Title>{card.title}</Title>
      <p className="mt-4 text-[16px] leading-relaxed text-ink/85">{card.body}</p>
      {card.highlight && (
        <div className="mt-6 p-4 rounded-2xl border border-line bg-surface2/60 flex items-baseline gap-3">
          <span className="font-display text-3xl font-semibold tabular-nums shrink-0 civ-text" style={civTextStyle(civ.color)}>
            {card.highlight.value}
          </span>
          <span className="text-sm text-muted">{card.highlight.label}</span>
        </div>
      )}
    </Frame>
  )
}

function KeyFigureCard({ card, civ }) {
  return (
    <Frame civ={civ} kicker={card.kicker}>
      <div className="min-h-[60%] flex flex-col justify-center py-4">
        <p className="font-display text-6xl sm:text-7xl font-bold leading-none tabular-nums civ-text" style={civTextStyle(civ.color)}>
          {card.value}
        </p>
        <p className="mt-3 text-lg font-medium text-ink">{card.label}</p>
      </div>
      {card.caption && <p className="text-[15px] leading-relaxed text-muted">{card.caption}</p>}
    </Frame>
  )
}

function DatesCard({ card, civ }) {
  return (
    <Frame civ={civ} kicker={card.kicker} icon="clock">
      <Title>{card.title}</Title>
      <ol className="mt-5 relative">
        <span className="absolute left-[5px] top-2 bottom-2 w-0.5 rounded-full" style={{ background: `${civ.color}40` }} />
        {card.items.map((it, i) => (
          <li key={i} className="relative pl-7 pb-4 last:pb-0">
            <span className="absolute left-0 top-1.5 w-3 h-3 rounded-full ring-4 ring-surface" style={{ background: civ.color }} />
            <span className="block text-sm font-bold tabular-nums civ-text" style={civTextStyle(civ.color)}>{formatYear(it.year)}</span>
            <span className="block text-[15px] text-ink leading-snug">{it.label}</span>
          </li>
        ))}
      </ol>
    </Frame>
  )
}

/** Schéma en étapes numérotées (ex. agrandissement du domaine royal). */
function StepsCard({ card, civ }) {
  return (
    <Frame civ={civ} kicker={card.kicker} icon="layers">
      <Title>{card.title}</Title>
      <ol className="mt-5 space-y-2">
        {card.items.map((it, i) => (
          <li key={i} className="flex items-stretch gap-3">
            <span className="flex flex-col items-center shrink-0">
              <span className="grid place-items-center w-7 h-7 rounded-full text-xs font-bold text-white" style={{ background: solidBg(civ.color), opacity: 0.8 + (0.2 * (i + 1)) / card.items.length }}>
                {i + 1}
              </span>
              {i < card.items.length - 1 && <span className="flex-1 w-0.5 my-1 rounded-full bg-line" />}
            </span>
            <span className="pb-2">
              <span className="block text-xs font-bold tabular-nums text-muted">{formatYear(it.year)}</span>
              <span className="block text-[15px] text-ink leading-snug">{it.label}</span>
            </span>
          </li>
        ))}
      </ol>
    </Frame>
  )
}

function MapCard({ card, civ }) {
  return (
    <Frame civ={civ} kicker={card.kicker} icon="globe">
      <Title>{card.title}</Title>
      <div className="mt-4">
        <MiniMap civ={civ} years={card.years} />
      </div>
      {card.caption && <p className="mt-3 text-sm leading-relaxed text-muted">{card.caption}</p>}
    </Frame>
  )
}

/** Schéma des règnes : barres proportionnelles à leur durée. */
function LeadersCard({ card, civ }) {
  const min = Math.min(...card.items.map((d) => d.debut))
  const max = Math.max(...card.items.map((d) => d.fin))
  const span = max - min || 1
  return (
    <Frame civ={civ} kicker={card.kicker} icon="crown">
      <Title>{card.title}</Title>
      <ul className="mt-5 space-y-4">
        {card.items.map((d, i) => (
          <li key={i}>
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-[15px] font-semibold text-ink">
                {d.nom}
                {d.surnom && <span className="font-normal italic text-muted"> « {d.surnom} »</span>}
              </span>
              <span className="text-xs text-muted tabular-nums shrink-0">{d.fin - d.debut} ans</span>
            </div>
            <div className="relative h-2.5 mt-1.5 rounded-full bg-surface2">
              <span
                className="absolute inset-y-0 rounded-full"
                style={{ left: `${((d.debut - min) / span) * 100}%`, width: `${Math.max(((d.fin - d.debut) / span) * 100, 2)}%`, background: civ.color }}
              />
            </div>
            <div className="flex justify-between text-[11px] text-muted mt-1 tabular-nums">
              <span>{d.titre}</span>
              <span>{formatYear(d.debut)} → {formatYear(d.fin)}</span>
            </div>
          </li>
        ))}
      </ul>
    </Frame>
  )
}

function PersonCard({ card, civ }) {
  const fg = readableText(civ.color)
  return (
    <Frame civ={civ} kicker="Personnage" icon="star">
      <div className="flex items-center gap-4">
        <span className="grid place-items-center w-16 h-16 rounded-2xl font-display text-3xl font-semibold shrink-0" style={{ background: civ.color, color: fg }}>
          {card.nom.charAt(0)}
        </span>
        <span>
          <Title>{card.nom}</Title>
          <span className="block text-sm text-muted mt-0.5">{[card.role, card.dates].filter(Boolean).join(' · ')}</span>
        </span>
      </div>
      {card.description && <p className="mt-5 text-[16px] leading-relaxed text-ink/85">{card.description}</p>}
    </Frame>
  )
}

function WarCard({ card, civ }) {
  return (
    <Frame civ={civ} kicker={card.kicker ?? 'Guerre'} icon="swords">
      <div className="flex items-start justify-between gap-3">
        <Title>{card.nom}</Title>
        {card.annee != null && (
          <span className="shrink-0 mt-1 px-2.5 py-1 rounded-lg bg-surface2 text-sm font-bold tabular-nums text-ink">{formatYear(card.annee)}</span>
        )}
      </div>
      {(card.adversaires?.length > 0 || card.allies?.length > 0) && (
        <div className="mt-5 grid grid-cols-2 gap-2.5 text-sm">
          <div className="p-3 rounded-xl" style={{ background: 'rgb(var(--c-danger) / .08)' }}>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-danger mb-1">Face à</span>
            <span className="text-ink/85 leading-snug">{card.adversaires?.join(', ') || '—'}</span>
          </div>
          <div className="p-3 rounded-xl" style={{ background: 'rgb(var(--c-success) / .08)' }}>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-success mb-1">Avec</span>
            <span className="text-ink/85 leading-snug">{card.allies?.join(', ') || 'Seul'}</span>
          </div>
        </div>
      )}
      {card.vainqueur && (
        <p className="mt-4 inline-flex items-center gap-2 text-sm">
          <span className="grid place-items-center w-7 h-7 rounded-full bg-warning/15 text-warning"><Icon name="crown" size={15} /></span>
          <span><span className="text-muted">Vainqueur : </span><span className="font-semibold text-ink">{card.vainqueur}</span></span>
        </p>
      )}
      {card.consequences && <p className="mt-4 text-[15px] leading-relaxed text-ink/85">{card.consequences}</p>}
    </Frame>
  )
}

function LineageCard({ civ }) {
  const l = civ.lineage
  return (
    <Frame civ={civ} kicker="Avant · après" icon="timeline">
      <Title>{l.label} à travers les époques</Title>
      <ol className="mt-5 space-y-2">
        {l.members.map((m) => {
          const current = m.civId === civ.id
          return (
            <li
              key={m.civId}
              className={`flex items-center gap-3 p-3 rounded-xl ${current ? 'text-white shadow-soft' : 'bg-surface2/70'}`}
              style={current ? { background: solidBg(civ.color) } : undefined}
            >
              <span className={`w-2 h-2 rounded-full shrink-0 ${current ? 'bg-white' : ''}`} style={current ? undefined : { background: civ.color }} />
              <span className="min-w-0">
                <span className={`block text-[11px] font-semibold uppercase tracking-wider ${current ? 'opacity-85' : 'text-muted'}`}>{m.epochLabel}</span>
                <span className={`block text-[15px] font-medium ${current ? '' : 'text-ink'}`}>{m.label}{current ? ' · vous êtes ici' : ''}</span>
              </span>
            </li>
          )
        })}
      </ol>
    </Frame>
  )
}

function RecapCard({ card, civ }) {
  return (
    <Frame civ={civ} kicker="Bilan" icon="check">
      <Title>À retenir</Title>
      <ul className="mt-5 space-y-3">
        {card.points.map((p, i) => (
          <li key={i} className="flex gap-3 text-[15px] text-ink leading-snug">
            <span className="grid place-items-center w-6 h-6 rounded-full shrink-0 text-white mt-px" style={{ background: solidBg(civ.color) }}>
              <Icon name="check" size={13} strokeWidth={2.6} />
            </span>
            {p}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-muted">Terminez le chapitre pour enregistrer votre progression.</p>
    </Frame>
  )
}

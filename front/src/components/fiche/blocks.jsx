/**
 * Briques communes aux fiches (civilisation, personne, événement, découverte) :
 * même mise en page partout, pour qu'on n'apprenne à lire une fiche qu'une fois.
 * La couleur d'accent vient de la variable CSS --civ posée sur la page.
 */
import { formatYear } from '../../lib/time'
import { initials } from '../../lib/entities'
import { solidBg } from '../../lib/color'
import { useUI } from '../../store/ui'
import Icon from '../ui/Icon'
import RichText from '../ui/RichText'

export function Section({ icon, title, children, className = '', id }) {
  return (
    <section className={`mt-8 ${className}`} id={id} aria-labelledby={id ? `${id}-titre` : undefined}>
      <h2 id={id ? `${id}-titre` : undefined} className="font-display text-xl font-semibold text-ink mb-3.5 flex items-center gap-2.5">
        <span className="grid place-items-center w-8 h-8 rounded-lg bg-surface2" style={{ color: 'var(--civ)' }}>
          <Icon name={icon} size={17} />
        </span>
        {title}
      </h2>
      {children}
    </section>
  )
}

/** Texte suivi, avec liens [[id]] cliquables. */
export function Prose({ text, className = '' }) {
  if (!text) return null
  return <RichText as="p" className={`text-[15px] text-ink/85 leading-relaxed whitespace-pre-line ${className}`} text={text} />
}

/**
 * Grille de repères (façon « infobox ») : [{ label, valeur, precision?, wide? }].
 * valeur / precision acceptent les liens [[id]].
 */
export function Facts({ items }) {
  const shown = items.filter((f) => f.valeur)
  if (!shown.length) return null
  return (
    <dl className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
      {shown.map((f, i) => (
        <div key={i} className={`bg-surface px-3.5 py-3 min-h-[68px] ${f.wide ? 'col-span-2 sm:col-span-3' : ''}`}>
          <dt className="text-[11px] font-semibold uppercase tracking-[.1em] text-muted">{f.label}</dt>
          <dd className="mt-1 text-sm font-medium text-ink leading-snug">
            <RichText text={f.valeur} />
            {f.precision && <RichText as="span" className="block mt-0.5 font-normal text-[13px] text-muted" text={f.precision} />}
          </dd>
        </div>
      ))}
    </dl>
  )
}

/** Points numérotés (« L'essentiel en 5 points », « Pourquoi il compte »). */
export function KeyPoints({ points }) {
  if (!points?.length) return null
  return (
    <ol className="grid gap-3">
      {points.map((p, i) => (
        <li key={i} className="grid grid-cols-[28px_1fr] gap-3">
          <span className="grid place-items-center w-7 h-7 rounded-lg text-white text-[13px] font-bold" style={{ background: 'var(--civ-solid, var(--civ))' }}>
            {i + 1}
          </span>
          <RichText className="text-[15px] text-ink/90 leading-relaxed" text={p} />
        </li>
      ))}
    </ol>
  )
}

/**
 * Chronologie verticale : [{ annee, label, detail?, ref? }].
 * Un élément avec `ref` ouvre l'aperçu de sa fiche liée.
 */
export function Timeline({ items, compact = false }) {
  const openSheet = useUI((s) => s.openSheet)
  if (!items?.length) return null
  return (
    <ol className="relative ml-1.5 border-l-2 border-line space-y-4">
      {items.map((it, i) => (
        <li key={i} className="pl-5 relative">
          <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full border-2 border-bg" style={{ background: 'var(--civ)' }} />
          <div className="text-xs font-semibold tabular-nums civ-text">{it.when ?? formatYear(it.annee)}</div>
          <div className="text-[15px] font-medium text-ink leading-snug">
            {it.ref ? (
              <button type="button" className="ref-link text-left" onClick={() => openSheet({ id: it.ref, title: it.label })}>
                {it.label}
              </button>
            ) : (
              <RichText text={it.label} />
            )}
          </div>
          {!compact && it.detail && <RichText as="p" className="text-sm text-muted mt-0.5 leading-relaxed" text={it.detail} />}
        </li>
      ))}
    </ol>
  )
}

/** Avatar à initiales (pas d'images : l'app reste légère). */
export function Initials({ name, color, size = 44, className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`grid place-items-center shrink-0 rounded-[14px] text-white font-display font-semibold ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.42, background: color ? solidBg(color) : 'var(--civ-solid, var(--civ))' }}
    >
      {initials(name)}
    </span>
  )
}

/** Liste « titre + texte » (héritage, sections d'une fiche liée…). */
export function TitledList({ items }) {
  if (!items?.length) return null
  return (
    <div className="card divide-y divide-line">
      {items.map((b, i) => (
        <div key={i} className="px-4 py-3">
          <div className="text-[15px] font-semibold text-ink">{b.titre}</div>
          <RichText as="p" className="text-sm text-muted mt-0.5 leading-relaxed" text={b.texte} />
        </div>
      ))}
    </div>
  )
}

/** Encadré « À savoir » : légendes, débats, idées reçues. */
export function AsKnow({ items }) {
  if (!items?.length) return null
  return (
    <div className="card p-4 space-y-3">
      {items.map((t, i) => (
        <RichText key={i} as="p" className="text-sm text-ink/85 leading-relaxed" text={t} />
      ))}
    </div>
  )
}

/** Titre lisible d'un lien source : « fr.wikipedia.org/wiki/Rome_antique » → « Wikipédia — Rome antique ». */
export function sourceTitle(url) {
  try {
    const u = new URL(url)
    if (/wikipedia\.org$/.test(u.hostname)) return `Wikipédia — ${decodeURIComponent(u.pathname.split('/').pop()).replace(/_/g, ' ')}`
    return u.hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

/** Sources : liens (url) ou { titre, url }. */
export function Sources({ items }) {
  const list = (items ?? []).map((s) => (typeof s === 'string' ? { url: s, titre: sourceTitle(s) } : s)).filter((s) => s?.url)
  if (!list.length) return null
  return (
    <div className="card divide-y divide-line">
      {list.map((s, i) => (
        <a key={i} href={s.url} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 min-h-[52px] text-sm font-medium text-ink hover:bg-surface2/60 transition first:rounded-t-xl2 last:rounded-b-xl2">
          <span className="flex-1">{s.titre}</span>
          <Icon name="external" size={16} className="text-muted shrink-0" />
        </a>
      ))}
    </div>
  )
}

export function Empty({ children }) {
  return <p className="text-sm text-muted">{children}</p>
}

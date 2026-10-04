import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getCivilization } from '../lib/data'
import { haptic } from '../lib/haptics'
import { useProgress } from '../store/progress'
import { useUI } from '../store/ui'
import LineageTrail from '../components/LineageTrail'
import { formatYear, formatDuration } from '../lib/time'
import useDocumentTitle from '../lib/useDocumentTitle'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import Icon from '../components/ui/Icon'
import NotFoundPage from './NotFoundPage'
import { civTextStyle } from '../lib/color'

export default function CivilizationPage() {
  const { epochId, civId } = useParams()
  const found = getCivilization(epochId, civId)
  useDocumentTitle(found?.civ.label ?? 'Fiche introuvable')
  const readFiche = useProgress((s) => s.readFiche)
  const setLast = useProgress((s) => s.setLast)
  const views = useProgress((s) => s.fiches[civId]?.views ?? 0)
  const showToast = useUI((s) => s.showToast)

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

  const { epoch, continent, civ } = found
  const events = [...(civ.datesCles ?? [])].sort((a, b) => a.annee - b.annee)
  const dirigeants = civ.dirigeants ?? []
  const personnages = civ.personnages ?? []
  const guerres = civ.guerres ?? []
  const documentaires = civ.documentaires ?? []
  const siblings = continent.civilizations.filter((c) => c.id !== civ.id)

  return (
    <article className="max-w-5xl mx-auto" style={{ '--civ': civ.color }}>
      <Breadcrumbs
        items={[
          { label: 'Frise', to: '/frise' },
          { label: epoch.label, to: `/frise/${epoch.id}` },
          { label: civ.label },
        ]}
      />

      {/* Bandeau titre */}
      <header className="card p-6 sm:p-8 mb-6 relative overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-1.5"
          style={{ background: `linear-gradient(90deg, ${civ.color}, ${civ.color}66)` }}
        />
        <div
          className="absolute -right-24 -top-24 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: civ.color }}
        />
        <div className="relative">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-3 h-3 rounded-full" style={{ background: civ.color }} />
            <span className="eyebrow">{epoch.label} · {continent.label}</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-ink tracking-tight">{civ.label}</h1>
          <p className="text-muted mt-3 max-w-3xl text-[15px] sm:text-base leading-relaxed">{civ.description}</p>

          <div className="flex flex-wrap gap-2 mt-5">
            <Chip label="Période" value={civ.period} />
            <Chip label="Durée" value={formatDuration(civ.start, civ.end)} />
            {civ.capitale && <Chip label="Capitale" value={civ.capitale} />}
            {civ.isRiver && <Chip label="Type" value="Civilisation fluviale" />}
            {views > 1 && (
              <span className="chip text-success" style={{ background: 'rgb(var(--c-success) / .1)' }}>
                <Icon name="check" size={14} strokeWidth={2.4} /> Déjà lue · {views}<sup className="-ml-1">e</sup> lecture
              </span>
            )}
          </div>
        </div>
      </header>

      <LineageTrail civ={civ} linkTo={(m) => `/frise/${m.epochId}/${m.civId}`} />

      <div className="grid gap-6 md:grid-cols-2">
        {/* Dates clés */}
        <Section icon="clock" title="Dates clés">
          {events.length === 0 ? (
            <Empty>Aucun événement renseigné.</Empty>
          ) : (
            <ol className="relative border-l-2 border-line ml-2 space-y-5">
              {events.map((ev, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: Math.min(i * 0.04, 0.3) }}
                  className="ml-4"
                >
                  <span
                    className="absolute -left-[7px] mt-1 w-3 h-3 rounded-full border-2 border-surface"
                    style={{ background: civ.color }}
                  />
                  <div className="text-xs font-semibold tabular-nums civ-text" style={civTextStyle(civ.color)}>
                    {formatYear(ev.annee)}
                  </div>
                  <div className="text-sm font-medium text-ink">{ev.evenement}</div>
                  {ev.info && <p className="text-sm text-muted mt-0.5 leading-relaxed">{ev.info}</p>}
                </motion.li>
              ))}
            </ol>
          )}
        </Section>

        <div className="space-y-6">
          {/* Régimes & dirigeants */}
          <Section icon="crown" title="Régimes & dirigeants">
            {dirigeants.length === 0 ? (
              <Empty>Aucun dirigeant renseigné.</Empty>
            ) : (
              <ul className="space-y-4">
                {dirigeants.map((dir, i) => (
                  <li key={i} className="flex items-stretch gap-3">
                    <span className="w-1 rounded-full shrink-0" style={{ background: civ.color }} />
                    <div className="w-full min-w-0">
                      <div className="flex flex-wrap justify-between items-start gap-2">
                        <span className="eyebrow">{dir.titre}</span>
                        <span className="text-[11px] text-muted bg-surface2 px-2 py-0.5 rounded tabular-nums">
                          {formatYear(dir.debut)} → {formatYear(dir.fin)}
                        </span>
                      </div>
                      <div className="text-sm font-medium text-ink mt-0.5">
                        {dir.nom}
                        {dir.surnom && <span className="italic text-muted ml-1">« {dir.surnom} »</span>}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </Section>

          {/* Personnages marquants */}
          <Section icon="star" title="Personnages marquants">
            {personnages.length === 0 ? (
              <Empty>Aucun personnage renseigné.</Empty>
            ) : (
              <ul className="space-y-3">
                {personnages.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 bg-surface2/60 p-3 rounded-xl">
                    <span
                      className="w-10 h-10 rounded-xl grid place-items-center text-white font-display font-semibold shrink-0"
                      style={{ background: civ.color }}
                      aria-hidden="true"
                    >
                      {p.nom.charAt(0)}
                    </span>
                    <div className="w-full min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <div className="text-sm font-semibold text-ink">{p.nom}</div>
                        {p.wikiUrl && <WikiLink href={p.wikiUrl} />}
                      </div>
                      {p.role && <div className="text-xs text-muted">{p.role}{p.dates ? ` · ${p.dates}` : ''}</div>}
                      {p.description && <p className="text-sm text-muted mt-1 leading-relaxed">{p.description}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </Section>
        </div>
      </div>

      {/* Sciences / Croyances */}
      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <Section icon="flask" title="Sciences & techniques">
          <Prose text={civ.sciences} />
        </Section>
        <Section icon="temple" title="Croyances & religions">
          <Prose text={civ.croyancesText} />
        </Section>
      </div>

      {/* Guerres / Diplomatie */}
      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <Section icon="swords" title="Guerres & batailles">
          {guerres.length === 0 ? (
            <Empty>Aucune guerre renseignée.</Empty>
          ) : (
            <ul className="space-y-4">
              {guerres.map((g, i) => (
                <li key={i} className="border border-line rounded-xl p-3.5">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <span className="font-semibold text-sm text-ink">{g.nom}</span>
                    <div className="flex items-center gap-2 shrink-0">
                      {g.annee != null && (
                        <span className="text-[11px] font-medium text-muted bg-surface2 px-2 py-0.5 rounded tabular-nums">
                          {formatYear(g.annee)}
                        </span>
                      )}
                      {g.wikiUrl && <WikiLink href={g.wikiUrl} />}
                    </div>
                  </div>

                  {(g.adversaires?.length > 0 || g.allies?.length > 0) && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="p-2 rounded-lg" style={{ background: 'rgb(var(--c-danger) / .08)' }}>
                        <span className="font-semibold block mb-0.5 text-danger">Adversaires</span>
                        <span className="text-ink/80">{g.adversaires?.join(', ') || '—'}</span>
                      </div>
                      <div className="p-2 rounded-lg" style={{ background: 'rgb(var(--c-success) / .08)' }}>
                        <span className="font-semibold block mb-0.5 text-success">Alliés</span>
                        <span className="text-ink/80">{g.allies?.join(', ') || 'Aucun'}</span>
                      </div>
                    </div>
                  )}

                  <dl className="text-xs text-muted space-y-1 mt-2 leading-relaxed">
                    {g.morts && <div><dt className="inline font-semibold text-ink">Pertes : </dt><dd className="inline">{g.morts}</dd></div>}
                    {g.vainqueur && <div><dt className="inline font-semibold text-ink">Vainqueur : </dt><dd className="inline">{g.vainqueur}</dd></div>}
                    {g.consequences && <div><dt className="inline font-semibold text-ink">Conséquences : </dt><dd className="inline">{g.consequences}</dd></div>}
                  </dl>
                </li>
              ))}
            </ul>
          )}
        </Section>

        <Section icon="handshake" title="Diplomatie & géopolitique">
          <Prose text={civ.diplomatie} />
        </Section>
      </div>

      {/* Pour aller plus loin */}
      {documentaires.length > 0 && (
        <Section icon="link" title="Pour aller plus loin" className="mt-6">
          <div className="flex flex-wrap gap-2">
            {documentaires.map((doc, i) => (
              <a
                key={i}
                href={doc.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-ink inline-flex items-center gap-2 px-3 py-2.5 rounded-xl bg-surface2 hover:bg-line/70 transition"
              >
                <Icon name="play" size={14} className="text-danger" /> {doc.titre}
                <Icon name="external" size={14} className="text-muted" />
              </a>
            ))}
          </div>
        </Section>
      )}

      {/* Autres civilisations du même continent */}
      {siblings.length > 0 && (
        <nav aria-label="Autres civilisations" className="mt-10">
          <p className="eyebrow mb-3">Ailleurs en {continent.label} · {epoch.label}</p>
          <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap pb-1">
            {siblings.map((s) => (
              <Link
                key={s.id}
                to={`/frise/${epoch.id}/${s.id}`}
                className="shrink-0 inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-surface border border-line text-sm text-ink hover:border-muted/40 transition"
              >
                <span className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                {s.label}
              </Link>
            ))}
          </div>
        </nav>
      )}

      <div className="mt-8">
        <Link to={`/frise/${epoch.id}`} className="btn-secondary">
          <Icon name="arrowLeft" size={18} /> Retour à la frise · {epoch.label}
        </Link>
      </div>
    </article>
  )
}

/* ── Briques de mise en page ─────────────────────────────────────────────── */

function Section({ icon, title, children, className = '' }) {
  return (
    <section className={`card p-5 sm:p-6 ${className}`}>
      <h2 className="font-display text-lg font-semibold text-ink mb-4 flex items-center gap-2.5">
        <span className="grid place-items-center w-8 h-8 rounded-lg bg-surface2" style={{ color: 'var(--civ)' }}>
          <Icon name={icon} size={17} />
        </span>
        {title}
      </h2>
      {children}
    </section>
  )
}

function Chip({ label, value }) {
  return (
    <span className="chip">
      <span className="text-muted">{label}</span>
      <span className="font-medium">{value}</span>
    </span>
  )
}

function Prose({ text }) {
  if (!text) return <Empty>Non renseigné.</Empty>
  return <p className="text-[15px] text-muted leading-relaxed whitespace-pre-line">{text}</p>
}

function WikiLink({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-0.5 text-[11px] uppercase font-semibold text-accent hover:underline shrink-0"
    >
      Wiki <Icon name="external" size={12} />
    </a>
  )
}

function Empty({ children }) {
  return <p className="text-sm text-muted">{children}</p>
}

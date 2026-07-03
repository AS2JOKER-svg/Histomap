import { motion } from 'framer-motion'
import { useNavigation } from '../store/navigation'
import { formatYear, formatDuration } from '../store/timeScale'

export default function CivilizationView({ civ, epoch }) {
  const goBack = useNavigation((s) => s.goBack)

  const events = [...(civ.events ?? [])].sort((a, b) => a.year - b.year)
  const personnages = civ.personnages ?? civ.leaders ?? []
  const relations = civ.relations ?? []
  const regimes = civ.regimes ?? []
  const technologies = civ.technologies ?? []
  const croyances = civ.croyances ?? []
  const guerres = civ.guerres ?? []
  const liens = civ.liens ?? []

  return (
    <section className="max-w-5xl mx-auto">
      {/* Bandeau titre */}
      <div
        className="card p-6 mb-6 relative overflow-hidden"
        style={{ borderTop: `4px solid ${civ.color}` }}
      >
        <button
          onClick={goBack}
          className="text-sm text-muted hover:text-ink transition mb-3 inline-flex items-center gap-1"
        >
          ← Retour à la frise
        </button>
        <div className="flex items-center gap-3 mb-1">
          <span
            className="w-3.5 h-3.5 rounded-full"
            style={{ background: civ.color }}
          />
          <span className="text-xs font-medium text-muted uppercase tracking-wide">
            {epoch?.label}
          </span>
        </div>
        <h2 className="font-display text-4xl font-semibold text-ink">
          {civ.label}
        </h2>
        <p className="text-muted mt-2 max-w-3xl">{civ.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          <Chip label="Période" value={civ.period} />
          {typeof civ.start === 'number' && typeof civ.end === 'number' && (
            <Chip label="Durée" value={formatDuration(civ.start, civ.end)} />
          )}
          {civ.capitale && <Chip label="Capitale" value={civ.capitale} />}
          {civ.isRiver && <Chip label="Type" value="Civilisation fluviale" />}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Chronologie */}
        <div className="card p-5">
          <SectionTitle icon="🕑">Dates clés</SectionTitle>
          {events.length === 0 ? (
            <Empty>Aucun événement renseigné.</Empty>
          ) : (
            <ol className="relative border-l-2 border-line ml-2 space-y-5">
              {events.map((ev, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="ml-4"
                >
                  <span
                    className="absolute -left-[7px] w-3 h-3 rounded-full border-2 border-surface"
                    style={{
                      background:
                        ev.importance === 'haute' ? civ.color : '#c7cede',
                    }}
                  />
                  <div className="text-xs font-semibold text-accent">
                    {formatYear(ev.year)}
                  </div>
                  <div className="text-sm font-medium text-ink">{ev.label}</div>
                  {ev.info && (
                    <p className="text-xs text-muted mt-0.5">{ev.info}</p>
                  )}
                </motion.li>
              ))}
            </ol>
          )}
        </div>

        <div className="space-y-6">
          {/* Régimes / dirigeants */}
          <div className="card p-5">
            <SectionTitle icon="👑">Régimes & dirigeants</SectionTitle>
            {regimes.length === 0 ? (
              <Empty>Aucun régime renseigné.</Empty>
            ) : (
              <ul className="space-y-3">
                {regimes.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-1.5 self-stretch rounded-full shrink-0"
                      style={{ background: civ.color }}
                    />
                    <div>
                      <div className="text-sm font-medium text-ink">{r.type}</div>
                      <div className="text-[11px] text-muted">
                        {formatYear(r.start)} → {formatYear(r.end)}
                      </div>
                      {r.chef && r.chef !== '—' && (
                        <div className="text-xs text-muted mt-0.5">
                          Dirigeant(s) : {r.chef}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Personnages marquants */}
          <div className="card p-5">
            <SectionTitle icon="⭐">Personnages marquants</SectionTitle>
            {personnages.length === 0 ? (
              <Empty>Aucun personnage renseigné.</Empty>
            ) : (
              <ul className="space-y-3">
                {personnages.map((l, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-xl2 grid place-items-center text-white font-display font-semibold shrink-0"
                      style={{ background: civ.color }}
                    >
                      {l.nom.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-ink">{l.nom}</div>
                      <div className="text-xs text-muted">{l.role}</div>
                      {l.dates && (
                        <div className="text-[11px] text-muted/80">{l.dates}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Rangée 2 : techno / croyances */}
      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <div className="card p-5">
          <SectionTitle icon="⚙️">Sciences & techniques</SectionTitle>
          {technologies.length === 0 ? (
            <Empty>Non renseigné.</Empty>
          ) : (
            <div className="flex flex-wrap gap-2">
              {technologies.map((t, i) => (
                <Tag key={i} color={civ.color}>{t}</Tag>
              ))}
            </div>
          )}
        </div>

        <div className="card p-5">
          <SectionTitle icon="🛐">Croyances & religions</SectionTitle>
          {croyances.length === 0 ? (
            <Empty>Non renseigné.</Empty>
          ) : (
            <div className="flex flex-wrap gap-2">
              {croyances.map((c, i) => (
                <Tag key={i} color={civ.color}>{c}</Tag>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Rangée 3 : guerres / relations */}
      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <div className="card p-5">
          <SectionTitle icon="⚔️">Guerres & batailles</SectionTitle>
          {guerres.length === 0 ? (
            <Empty>Aucune guerre renseignée.</Empty>
          ) : (
            <ul className="space-y-2.5">
              {guerres.map((g, i) => (
                <li key={i} className="text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-ink">{g.nom}</span>
                    {g.annee != null && (
                      <span className="text-muted text-xs ml-auto">
                        {formatYear(g.annee)}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-muted">
                    Contre <b className="text-ink/80">{g.contre}</b> · {g.issue}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="card p-5">
          <SectionTitle icon="🤝">Conflits & alliances</SectionTitle>
          {relations.length === 0 ? (
            <Empty>Aucune relation renseignée.</Empty>
          ) : (
            <ul className="space-y-2">
              {relations.map((r, i) => {
                const isConflit = r.type === 'conflit'
                return (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-md shrink-0"
                      style={{
                        color: isConflit ? '#c0392b' : '#1e824c',
                        background: isConflit ? '#fdecea' : '#e8f8ef',
                      }}
                    >
                      {isConflit ? 'Conflit' : 'Alliance'}
                    </span>
                    <span className="text-ink">{r.label}</span>
                    {(r.start != null || r.year != null) && (
                      <span className="text-muted text-xs ml-auto shrink-0">
                        {formatYear(r.start ?? r.year)}
                        {r.end != null && r.end !== r.start
                          ? ` → ${formatYear(r.end)}`
                          : ''}
                      </span>
                    )}
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>

      {/* Pour aller plus loin */}
      {liens.length > 0 && (
        <div className="card p-5 mt-6">
          <SectionTitle icon="🔗">Pour aller plus loin</SectionTitle>
          <div className="flex flex-wrap gap-2">
            {liens.map((l, i) => (
              <a
                key={i}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-accent hover:underline inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-line/40 hover:bg-line/70 transition"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

function SectionTitle({ icon, children }) {
  return (
    <h3 className="font-display text-lg font-semibold text-ink mb-4 flex items-center gap-2">
      <span aria-hidden>{icon}</span> {children}
    </h3>
  )
}

function Chip({ label, value }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-line/50">
      <span className="text-muted">{label}</span>
      <span className="font-medium text-ink">{value}</span>
    </span>
  )
}

function Tag({ children, color }) {
  return (
    <span
      className="text-xs px-2.5 py-1 rounded-lg font-medium"
      style={{ background: `${color}18`, color: '#3a4256' }}
    >
      {children}
    </span>
  )
}

function Empty({ children }) {
  return <p className="text-sm text-muted">{children}</p>
}

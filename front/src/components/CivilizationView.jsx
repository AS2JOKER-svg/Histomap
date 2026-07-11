import { motion } from 'framer-motion'
import { useNavigation } from '../store/navigation'
import { formatYear, formatDuration } from '../store/timeScale'

export default function CivilizationView({ civ, epoch }) {
  const goBack = useNavigation((s) => s.goBack)

  // 🔄 FUSION ET RÉTROCOMPATIBILITÉ (Anciennes vs Nouvelles données)
  const events = [...(civ.datesCles ?? civ.events ?? [])].sort((a, b) => (a.annee ?? a.year) - (b.annee ?? b.year))
  const dirigeants = civ.dirigeants ?? civ.regimes ?? []
  const personnages = civ.personnages ?? civ.leaders ?? []
  const guerres = civ.guerres ?? []
  const documentaires = civ.documentaires ?? civ.liens ?? []
  
  // Gestion de la transition Array -> String pour les textes narratifs
  const diplomatieText = civ.diplomatie ?? (typeof civ.relations === 'string' ? civ.relations : null)
  const legacyRelations = Array.isArray(civ.relations) ? civ.relations : []
  
  const sciencesText = civ.sciences ?? (typeof civ.technologies === 'string' ? civ.technologies : null)
  const legacyTechnologies = Array.isArray(civ.technologies) ? civ.technologies : []
  
  const croyancesText = civ.croyancesText ?? (typeof civ.croyances === 'string' ? civ.croyances : null)
  const legacyCroyances = Array.isArray(civ.croyances) ? civ.croyances : []

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
          {civ.label || civ.name}
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
        {/* Chronologie (Dates clés augmentées) */}
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
                    {formatYear(ev.annee ?? ev.year)}
                  </div>
                  <div className="text-sm font-medium text-ink">{ev.evenement ?? ev.label}</div>
                  {ev.info && (
                    <p className="text-xs text-muted mt-0.5">{ev.info}</p>
                  )}
                </motion.li>
              ))}
            </ol>
          )}
        </div>

        <div className="space-y-6">
          {/* Régimes & dirigeants (Nouveau format Table/Liste structurée) */}
          <div className="card p-5 overflow-x-auto">
            <SectionTitle icon="👑">Régimes & Dirigeants</SectionTitle>
            {dirigeants.length === 0 ? (
              <Empty>Aucun dirigeant renseigné.</Empty>
            ) : (
              <ul className="space-y-4">
                {dirigeants.map((dir, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-1.5 self-stretch rounded-full shrink-0"
                      style={{ background: civ.color }}
                    />
                    <div className="w-full">
                      <div className="flex justify-between items-start w-full">
                        <span className="text-xs font-semibold uppercase tracking-wide text-muted mb-1">
                          {dir.titre ?? dir.type}
                        </span>
                        <span className="text-[11px] text-muted/80 bg-line/30 px-2 py-0.5 rounded">
                          {formatYear(dir.debut ?? dir.start)} → {formatYear(dir.fin ?? dir.end)}
                        </span>
                      </div>
                      <div className="text-sm font-medium text-ink">
                        {dir.nom ?? dir.chef} 
                        {dir.surnom && <span className="italic text-muted/80 ml-1">"{dir.surnom}"</span>}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Personnages marquants (Avec lien Wiki et description) */}
          <div className="card p-5">
            <SectionTitle icon="⭐">Personnages marquants</SectionTitle>
            {personnages.length === 0 ? (
              <Empty>Aucun personnage renseigné.</Empty>
            ) : (
              <ul className="space-y-4">
                {personnages.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 bg-slate-50/50 p-3 rounded-xl border border-line/50">
                    <div
                      className="w-9 h-9 rounded-xl grid place-items-center text-white font-display font-semibold shrink-0"
                      style={{ background: civ.color }}
                    >
                      {p.nom.charAt(0)}
                    </div>
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <div className="text-sm font-medium text-ink">{p.nom}</div>
                        {p.wikiUrl && (
                          <a href={p.wikiUrl} target="_blank" rel="noreferrer" className="text-[10px] uppercase font-bold text-blue-500 hover:underline">
                            Wiki ↗
                          </a>
                        )}
                      </div>
                      <div className="text-xs text-muted mt-1 leading-relaxed">
                        {p.description ?? p.role}
                      </div>
                      {p.dates && (
                        <div className="text-[11px] font-medium text-muted/70 mt-1">{p.dates}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Rangée 2 : Sciences / Croyances (Passage au format texte narratif) */}
      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <div className="card p-5">
          <SectionTitle icon="⚙️">Sciences & techniques</SectionTitle>
          {sciencesText ? (
            <p className="text-sm text-muted leading-relaxed whitespace-pre-line">{sciencesText}</p>
          ) : legacyTechnologies.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {legacyTechnologies.map((t, i) => <Tag key={i} color={civ.color}>{t}</Tag>)}
            </div>
          ) : (
            <Empty>Non renseigné.</Empty>
          )}
        </div>

        <div className="card p-5">
          <SectionTitle icon="🛐">Croyances & religions</SectionTitle>
          {croyancesText ? (
            <p className="text-sm text-muted leading-relaxed whitespace-pre-line">{croyancesText}</p>
          ) : legacyCroyances.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {legacyCroyances.map((c, i) => <Tag key={i} color={civ.color}>{c}</Tag>)}
            </div>
          ) : (
            <Empty>Non renseigné.</Empty>
          )}
        </div>
      </div>

      {/* Rangée 3 : Guerres & Diplomatie */}
      <div className="grid gap-6 md:grid-cols-2 mt-6">
        {/* Guerres & Batailles (Format fiche détaillée) */}
        <div className="card p-5">
          <SectionTitle icon="⚔️">Guerres & batailles</SectionTitle>
          {guerres.length === 0 ? (
            <Empty>Aucune guerre renseignée.</Empty>
          ) : (
            <ul className="space-y-4">
              {guerres.map((g, i) => (
                <li key={i} className="border border-line/60 rounded-xl p-3 bg-white">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold text-sm text-ink">{g.nom}</span>
                    <div className="flex items-center gap-2">
                      {g.annee != null && (
                        <span className="text-[11px] font-medium text-muted bg-slate-100 px-2 py-0.5 rounded">
                          {formatYear(g.annee)}
                        </span>
                      )}
                      {g.wikiUrl && (
                        <a href={g.wikiUrl} target="_blank" rel="noreferrer" className="text-[10px] uppercase font-bold text-blue-500 hover:underline">
                          Wiki
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Nouvelles métadonnées de guerre */}
                  {(g.adversaires || g.allies) ? (
                    <div className="grid grid-cols-2 gap-2 text-[11px] mb-2">
                      <div className="bg-red-50/50 text-red-900/80 p-1.5 rounded border border-red-100">
                        <span className="font-bold block mb-0.5">Adversaires :</span>
                        {g.adversaires?.join(', ') || g.contre}
                      </div>
                      <div className="bg-green-50/50 text-green-900/80 p-1.5 rounded border border-green-100">
                        <span className="font-bold block mb-0.5">Alliés :</span>
                        {g.allies?.join(', ') || 'Aucun'}
                      </div>
                    </div>
                  ) : (
                    // Fallback ancienne version
                    <div className="text-xs text-muted mb-2">Contre <b className="text-ink/80">{g.contre}</b></div>
                  )}

                  <div className="text-[11px] text-muted space-y-1 mt-2">
                    {(g.morts) && <p><strong className="text-ink">Pertes :</strong> {g.morts}</p>}
                    <p><strong className="text-ink">Vainqueur :</strong> {g.vainqueur ?? g.issue}</p>
                    {(g.consequences) && <p><strong className="text-ink">Conséquences :</strong> {g.consequences}</p>}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Diplomatie & Géopolitique (Remplace Conflits & Alliances) */}
        <div className="card p-5">
          <SectionTitle icon="🤝">Diplomatie & Géopolitique</SectionTitle>
          {diplomatieText ? (
            <p className="text-sm text-muted leading-relaxed whitespace-pre-line">{diplomatieText}</p>
          ) : legacyRelations.length > 0 ? (
            <ul className="space-y-2">
              {legacyRelations.map((r, i) => {
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
                  </li>
                )
              })}
            </ul>
          ) : (
            <Empty>Non renseigné.</Empty>
          )}
        </div>
      </div>

      {/* Pour aller plus loin */}
      {documentaires.length > 0 && (
        <div className="card p-5 mt-6">
          <SectionTitle icon="🔗">Pour aller plus loin (Documentaires & Liens)</SectionTitle>
          <div className="flex flex-wrap gap-2">
            {documentaires.map((doc, i) => (
              <a
                key={i}
                href={doc.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-accent hover:underline inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-line/30 hover:bg-line/60 transition"
              >
                <span className="text-red-500 text-xs">▶</span> {doc.titre ?? doc.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

/* --- COMPOSANTS UI DE BASE PRÉSERVÉS --- */
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
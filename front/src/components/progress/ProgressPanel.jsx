import { Link } from 'react-router-dom'
import { getEpochs, countCivilizations, findCivilization } from '../../lib/data'
import { useProgress, readCount, streakOf } from '../../store/progress'
import Icon from '../ui/Icon'

/**
 * Tableau de bord de progression (accueil) :
 *   - fiches lues au total, série de jours, avancement par époque ;
 *   - suggestion de la prochaine fiche à lire ;
 *   - réinitialisation (avec confirmation).
 */
export default function ProgressPanel() {
  const fiches = useProgress((s) => s.fiches)
  const days = useProgress((s) => s.days)
  const last = useProgress((s) => s.last)
  const reset = useProgress((s) => s.reset)

  const epochs = getEpochs()
  const total = epochs.reduce((n, e) => n + countCivilizations(e), 0)
  const read = Object.keys(fiches).length
  const streak = streakOf(days)
  const suggestion = suggestNext(epochs, fiches, last)

  const onReset = () => {
    if (window.confirm('Effacer toute votre progression (fiches lues, dernier endroit, série) ? Cette action est définitive.')) reset()
  }

  return (
    <section aria-labelledby="progress-title" className="card p-5 sm:p-7">
      <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
        <div>
          <p className="eyebrow mb-1">Sauvegardée sur cet appareil</p>
          <h2 id="progress-title" className="font-display text-2xl sm:text-3xl font-semibold text-ink">Votre progression</h2>
        </div>
        {read > 0 && (
          <button onClick={onReset} className="text-xs text-muted hover:text-danger underline-offset-2 hover:underline">
            Réinitialiser
          </button>
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        {/* Chiffres clés */}
        <div className="grid grid-cols-2 gap-3 content-start">
          <Tile icon="cards" value={`${read}`} unit={`/ ${total}`} label="fiches lues">
            <Bar pct={read / total} />
          </Tile>
          <Tile icon="sparkles" value={streak} unit={streak > 1 ? 'jours' : 'jour'} label="série en cours" highlight={streak >= 2}>
            <p className="text-[11px] text-muted mt-2">{streak ? 'Revenez demain pour la prolonger' : 'Lisez une fiche pour la lancer'}</p>
          </Tile>
          {suggestion && (
            <Link
              to={`/frise/${suggestion.epoch.id}/${suggestion.civ.id}`}
              className="col-span-2 group flex items-center gap-3 p-4 rounded-xl border border-dashed border-line hover:border-muted/50 transition"
            >
              <span className="w-10 h-10 rounded-xl grid place-items-center text-white shrink-0" style={{ background: suggestion.civ.color }}>
                <Icon name="star" size={18} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[11px] text-muted">{read === 0 ? 'Pour commencer' : 'Prochaine fiche suggérée'} · {suggestion.epoch.label}</span>
                <span className="block text-sm font-semibold text-ink truncate">{suggestion.civ.label}</span>
              </span>
              <Icon name="arrowRight" size={18} className="text-muted group-hover:translate-x-0.5 transition shrink-0" />
            </Link>
          )}
        </div>

        {/* Avancement par époque */}
        <ul className="space-y-2.5">
          {epochs.map((epoch) => {
            const n = readCount(fiches, epoch)
            const t = countCivilizations(epoch)
            return (
              <li key={epoch.id}>
                <Link to={`/frise/${epoch.id}`} className="group flex items-center gap-3 p-2 -m-2 rounded-xl hover:bg-surface2/70 transition">
                  <span className="w-28 sm:w-40 text-sm font-medium text-ink truncate group-hover:text-accent transition">{epoch.label}</span>
                  <span className="flex-1"><Bar pct={n / t} color={epoch.color} /></span>
                  <span className="w-12 text-right text-xs text-muted tabular-nums">
                    {n === t ? <Icon name="check" size={16} strokeWidth={2.6} className="inline text-success" /> : `${n}/${t}`}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

function Tile({ icon, value, unit, label, children, highlight }) {
  return (
    <div className={`p-4 rounded-xl ${highlight ? 'bg-warning/10' : 'bg-surface2/70'}`}>
      <span className={`grid place-items-center w-8 h-8 rounded-lg mb-2 ${highlight ? 'text-warning' : 'text-muted'} bg-surface`}>
        <Icon name={icon} size={16} />
      </span>
      <p className="font-display text-3xl font-semibold text-ink tabular-nums leading-none">
        {value} <span className="text-base font-body font-normal text-muted">{unit}</span>
      </p>
      <p className="text-xs text-muted mt-1">{label}</p>
      {children}
    </div>
  )
}

function Bar({ pct, color }) {
  return (
    <span className="block h-2 rounded-full bg-line/80 overflow-hidden mt-2">
      <span
        className="block h-full rounded-full transition-[width] duration-700"
        style={{ width: `${Math.round(pct * 100)}%`, background: color ?? 'rgb(var(--c-accent))', minWidth: pct > 0 ? 6 : 0 }}
      />
    </span>
  )
}

/**
 * Prochaine fiche à lire : la suite de la dernière fiche (même lignée), sinon
 * une fiche non lue de la dernière époque visitée, sinon de la première époque.
 */
function suggestNext(epochs, fiches, last) {
  const lastCivId = last?.kind === 'fiche' ? last.path.split('/').pop() : null
  const lastCiv = lastCivId ? findCivilization(lastCivId) : null
  const next = lastCiv?.civ.lineage?.next
  if (next && !fiches[next.civId]) return findCivilization(next.civId)

  const lastEpochId = last?.path?.startsWith('/frise/') ? last.path.split('/')[2] : null
  const ordered = [...epochs].sort((a, b) => (b.id === lastEpochId) - (a.id === lastEpochId))
  for (const epoch of ordered)
    for (const continent of epoch.continents)
      for (const civ of continent.civilizations) if (!fiches[civ.id]) return { epoch, continent, civ }
  return null
}

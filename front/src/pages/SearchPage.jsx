import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { SEARCH_TYPES, loadSearchIndex, normalize, search } from '../lib/search'
import { formatYear } from '../lib/time'
import { load, save } from '../lib/storage'
import useDocumentTitle from '../lib/useDocumentTitle'
import Icon from '../components/ui/Icon'

const RECENT_KEY = 'histomap_recherches'
const SUGGESTIONS = ['Napoléon', 'Pyramides', 'Jeanne d’Arc', 'Guerre de Cent Ans', 'Aztèques', 'Gengis Khan']
const TYPE_LABEL = { civ: 'Civilisation', personne: 'Personne', evenement: 'Événement', guerre: 'Guerre', decouverte: 'Découverte' }

/** Recherche globale : civilisations, personnes, événements, guerres, découvertes (maquette 03). */
export default function SearchPage() {
  useDocumentTitle('Recherche')
  const [params, setParams] = useSearchParams()
  const query = params.get('q') ?? ''
  const [filter, setFilter] = useState('tout')
  const [items, setItems] = useState(null)
  const [failed, setFailed] = useState(false)
  const [recent, setRecent] = useState(() => load(RECENT_KEY, []))
  const inputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    loadSearchIndex().then(setItems, () => setFailed(true))
    inputRef.current?.focus()
  }, [])

  const results = useMemo(() => (items ? search(items, query) : []), [items, query])
  const counts = useMemo(() => Object.fromEntries(SEARCH_TYPES.map((t) => [t.id, results.filter((r) => r.t === t.id).length])), [results])
  const shown = filter === 'tout' ? results : results.filter((r) => r.t === filter)
  // Meilleur résultat : un nom qui commence par la recherche, ou dont un mot commence par elle (« cesar » → Jules César)
  const best = filter === 'tout' && results[0]?.score < 30 ? results[0] : null

  const setQuery = (q) => setParams(q ? { q } : {}, { replace: true })
  const remember = () => {
    const q = query.trim()
    if (q.length < 2) return
    const next = [q, ...recent.filter((r) => normalize(r) !== normalize(q))].slice(0, 6)
    setRecent(next)
    save(RECENT_KEY, next)
  }
  const open = (r) => {
    remember()
    navigate(r.to)
  }

  return (
    <section className="max-w-2xl mx-auto">
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault()
          if (results[0]) open(results[0])
        }}
        className="sticky top-16 z-20 -mx-4 px-4 py-3 bg-bg/90 backdrop-blur-md"
      >
        <label className="flex items-center gap-2.5 h-12 px-4 rounded-2xl bg-surface border-2 border-accent/70 focus-within:border-accent shadow-soft">
          <Icon name="search" size={20} className="text-muted shrink-0" />
          <input
            ref={inputRef}
            type="text"
            inputMode="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Une civilisation, un personnage, une guerre…"
            aria-label="Rechercher dans HistoMap"
            className="flex-1 min-w-0 bg-transparent outline-none text-[16px] text-ink placeholder:text-muted"
            enterKeyHint="search"
            autoComplete="off"
          />
          {query && (
            <button type="button" onClick={() => setQuery('')} className="btn-icon -mr-2 w-10 h-10" aria-label="Effacer">
              <Icon name="close" size={18} />
            </button>
          )}
        </label>
        {results.length > 0 && (
          <div className="flex gap-1.5 overflow-x-auto no-scrollbar mt-3" role="group" aria-label="Filtrer par type">
            <Chip on={filter === 'tout'} onClick={() => setFilter('tout')}>Tout · {results.length}</Chip>
            {SEARCH_TYPES.filter((t) => counts[t.id]).map((t) => (
              <Chip key={t.id} on={filter === t.id} onClick={() => setFilter(t.id)}>
                {t.label} · {counts[t.id]}
              </Chip>
            ))}
          </div>
        )}
      </form>

      {failed && <p className="mt-6 text-sm text-muted">La recherche n'a pas pu être chargée. Vérifiez votre connexion.</p>}

      {query.trim().length < 2 ? (
        <div className="mt-4 space-y-6">
          {recent.length > 0 && (
            <div>
              <p className="eyebrow mb-2">Recherches récentes</p>
              <div className="flex flex-wrap gap-2">
                {recent.map((r) => (
                  <Chip key={r} onClick={() => setQuery(r)}><Icon name="history" size={14} /> {r}</Chip>
                ))}
              </div>
            </div>
          )}
          <div>
            <p className="eyebrow mb-2">Suggestions</p>
            <div className="flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <Chip key={s} onClick={() => setQuery(s)}>{s}</Chip>
              ))}
            </div>
          </div>
        </div>
      ) : items && !results.length ? (
        <p className="mt-6 text-muted">
          Aucun résultat pour « {query} ». Essayez un autre mot, ou une orthographe plus simple.
        </p>
      ) : (
        <div className="mt-2 space-y-6" aria-live="polite">
          {best && (
            <div>
              <p className="eyebrow mb-2">Meilleur résultat</p>
              <ResultRow r={best} query={query} onOpen={open} big />
            </div>
          )}
          {(filter === 'tout' ? SEARCH_TYPES : SEARCH_TYPES.filter((t) => t.id === filter)).map((t) => {
            const list = shown.filter((r) => r.t === t.id && r !== best)
            if (!list.length) return null
            return (
              <div key={t.id}>
                <p className="eyebrow mb-2 flex justify-between">
                  {t.label} <span className="tabular-nums">{list.length}</span>
                </p>
                <ul className="card divide-y divide-line overflow-hidden">
                  {list.slice(0, filter === 'tout' ? 6 : 60).map((r, i) => (
                    <li key={`${r.to}-${r.n}-${i}`}>
                      <ResultRow r={r} query={query} onOpen={open} />
                    </li>
                  ))}
                </ul>
                {filter === 'tout' && list.length > 6 && (
                  <button onClick={() => setFilter(t.id)} className="mt-2 text-sm ref-link">
                    Voir les {list.length} résultats
                  </button>
                )}
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}

function Chip({ on, onClick, children }) {
  return (
    <button type="button" onClick={onClick} className={`chip shrink-0 h-9 transition ${on ? '!bg-ink !text-bg' : 'hover:bg-line/70'}`}>
      {children}
    </button>
  )
}

function ResultRow({ r, query, onOpen, big = false }) {
  return (
    <Link
      to={r.to}
      onClick={(e) => {
        e.preventDefault()
        onOpen(r)
      }}
      className={`flex items-center gap-3 px-4 ${big ? 'card py-4' : 'py-3'} hover:bg-surface2/60 transition`}
    >
      {r.t === 'civ' ? (
        <span className="w-3 h-3 rounded-full shrink-0 mx-1" style={{ background: r.c }} />
      ) : (
        <span className={`badge badge-${r.t} shrink-0 tabular-nums`}>{r.y != null && r.t !== 'personne' ? formatYear(r.y).replace(' av. J.-C.', ' av.') : TYPE_LABEL[r.t]}</span>
      )}
      <span className="flex-1 min-w-0">
        <span className={`block font-semibold text-ink truncate ${big ? 'font-display text-xl' : 'text-[15px]'}`}>
          <Highlight text={r.n} query={query} />
        </span>
        {r.s && <span className="block text-[13px] text-muted truncate">{r.s}</span>}
      </span>
      <Icon name="chevronRight" size={18} className="text-muted shrink-0" />
    </Link>
  )
}

/** Surligne la recherche dans un nom (en ignorant accents et majuscules). */
function Highlight({ text, query }) {
  const q = normalize(query)
  const i = normalize(text).indexOf(q)
  if (!q || i < 0) return text
  return (
    <>
      {text.slice(0, i)}
      <mark className="bg-warning/25 text-inherit rounded px-0.5">{text.slice(i, i + q.length)}</mark>
      {text.slice(i + q.length)}
    </>
  )
}

import { Link } from 'react-router-dom'
import Icon from './ui/Icon'

/**
 * Bloc « en construction » pour une section pas encore livrée :
 * explique ce qui arrive (features) et renvoie vers ce qui existe déjà.
 */
export default function ComingSoon({ sprint, features, children }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
      <div className="card p-6 sm:p-8">
        <span
          className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg text-warning mb-4"
          style={{ background: 'rgb(var(--c-warning) / .14)' }}
        >
          <Icon name="sparkles" size={14} /> En construction · {sprint}
        </span>
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">Ce qui arrive</h2>
        <ul className="space-y-3.5">
          {features.map((f) => (
            <li key={f.title} className="flex gap-3">
              <span className="shrink-0 mt-0.5 grid place-items-center w-8 h-8 rounded-lg bg-surface2 text-accent">
                <Icon name={f.icon} size={17} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink">{f.title}</span>
                <span className="block text-sm text-muted leading-relaxed">{f.text}</span>
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link to="/frise" className="btn-primary">
            En attendant, explorer la frise <Icon name="arrowRight" size={16} />
          </Link>
        </div>
      </div>
      <div>{children}</div>
    </div>
  )
}

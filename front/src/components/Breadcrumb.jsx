import { useNavigation } from '../store/navigation'

export default function Breadcrumb() {
  const breadcrumbs = useNavigation((s) => s.breadcrumbs)
  const reset = useNavigation((s) => s.reset)
  const goToLevel = useNavigation((s) => s.goToLevel)

  return (
    <nav className="flex items-center gap-1.5 text-sm">
      <button
        onClick={reset}
        className="px-2.5 py-1 rounded-lg text-muted hover:text-ink hover:bg-line/60 transition"
      >
        Époques
      </button>

      {breadcrumbs.map((crumb, i) => {
        const isLast = i === breadcrumbs.length - 1
        return (
          <span key={i} className="flex items-center gap-1.5">
            <span className="text-line">/</span>
            <button
              onClick={() => !isLast && goToLevel(crumb.level)}
              className={
                isLast
                  ? 'px-2.5 py-1 rounded-lg font-medium text-ink bg-line/60'
                  : 'px-2.5 py-1 rounded-lg text-muted hover:text-ink hover:bg-line/60 transition'
              }
            >
              {crumb.label}
            </button>
          </span>
        )
      })}
    </nav>
  )
}

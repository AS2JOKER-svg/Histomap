/**
 * En-tête de page standard : surtitre, titre, description, et actions à droite.
 */
export default function PageHeader({ eyebrow, title, description, color, actions }) {
  return (
    <header className="flex flex-wrap items-end justify-between gap-4 mb-6">
      <div className="min-w-0">
        {eyebrow && (
          <div className="flex items-center gap-2 mb-1.5">
            {color && <span className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />}
            <span className="eyebrow">{eyebrow}</span>
          </div>
        )}
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight text-balance">
          {title}
        </h1>
        {description && <p className="text-muted mt-2 max-w-2xl leading-relaxed">{description}</p>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </header>
  )
}

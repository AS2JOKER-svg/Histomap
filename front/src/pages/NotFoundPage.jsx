import { Link } from 'react-router-dom'
import useDocumentTitle from '../lib/useDocumentTitle'
import Icon from '../components/ui/Icon'

export default function NotFoundPage({ title = 'Page introuvable', text = "Cette page s'est perdue quelque part dans l'histoire." }) {
  useDocumentTitle(title)
  return (
    <div className="max-w-md mx-auto text-center py-16">
      <p className="font-display text-7xl font-bold text-line mb-4">404</p>
      <h1 className="font-display text-2xl font-semibold text-ink">{title}</h1>
      <p className="text-muted mt-2">{text}</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link to="/" className="btn-secondary"><Icon name="home" size={18} /> Accueil</Link>
        <Link to="/frise" className="btn-primary">Voir la frise</Link>
      </div>
    </div>
  )
}

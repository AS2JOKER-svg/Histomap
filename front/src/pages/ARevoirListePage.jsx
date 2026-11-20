import { Link } from 'react-router-dom'
import { findCivilization } from '../lib/data'
import { REVISION } from '../lib/aventure'
import { BAREME } from '../lib/xp'
import { aRevoirParSalle, pluriel } from '../lib/profil'
import { PARCOURS_AVENTURE as P, useProgress } from '../store/progress'
import Icon from '../components/ui/Icon'
import SousPage from '../components/profil/SousPage'

/**
 * À revoir (V3.1, sprint 32) : les salles qui ont des cartes marquées « à revoir » ou des questions ratées
 * à l'épreuve ; chacune ouvre sa séance (ARevoirPage). Une séance par jour rapporte +20 XP.
 */
const aujourdhui = () => {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export default function ARevoirListePage() {
  const chapters = useProgress((s) => s.chapters)
  const quizzes = useProgress((s) => s.quizzes)
  const faite = useProgress((s) => s.aventure.aRevoirJour === aujourdhui())
  const { salles } = aRevoirParSalle(P, chapters, quizzes)

  return (
    <SousPage titre="À revoir">
      <p className="text-sm text-muted mb-4 leading-relaxed">
        Les cartes que tu as marquées « à revoir » et les questions ratées à l’épreuve. Une séance reprend {REVISION.parSeance} cartes et {REVISION.parSeance} questions au plus ; ce que tu réussis sort de la liste.{' '}
        {faite ? `Séance du jour faite : +${BAREME.aRevoir} XP gagnés.` : `La première séance du jour rapporte +${BAREME.aRevoir} XP et compte pour ta série.`}
      </p>
      {salles.length ? (
        <ul className="grid gap-2">
          {salles.map((x) => (
            <li key={x.id}>
              <Link to={`/aventure/a-revoir/${x.id}`} state={{ depuis: 'profil' }} className="card rounded-none hoverable p-3 flex items-center gap-3 min-h-[60px]">
                <span aria-hidden="true" className="w-10 h-10 shrink-0 grid place-items-center bg-surface2 text-accent">
                  <Icon name="refresh" size={20} />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-semibold text-ink truncate">{findCivilization(x.id)?.civ.label ?? x.id}</span>
                  <span className="block text-xs text-muted">{[x.cartes && pluriel(x.cartes, 'carte'), x.questions && pluriel(x.questions, 'question')].filter(Boolean).join(' · ')}</span>
                </span>
                <Icon name="chevronRight" size={18} className="text-muted shrink-0" />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="card rounded-none p-4 text-center">
          <p className="font-semibold text-ink">Rien à revoir pour l’instant.</p>
          <p className="text-sm text-muted mt-1">Sur une carte, touche « À revoir » (ou glisse-la vers la gauche) pour la retrouver ici ; les questions ratées à l’épreuve s’y ajoutent aussi.</p>
          <Link to="/" className="btn-secondary h-11 mt-3">Aller au parcours</Link>
        </div>
      )}
    </SousPage>
  )
}

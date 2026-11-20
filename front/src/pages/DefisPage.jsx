import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useDocumentTitle from '../lib/useDocumentTitle'
import PageHeader from '../components/ui/PageHeader'
import Icon from '../components/ui/Icon'
import ChoixCivilisation from '../components/defi/ChoixCivilisation'

/**
 * Défis (V3, sprint 25) — trois façons de jouer sans enjeu, sans serveur :
 *   défier un ami par lien (#/defi/<civ>), à deux sur le même téléphone (#/defis/a-deux), quiz infini (#/entrainement).
 * Depuis le sprint 32, une sous-page du Profil (décision 22) : l'adresse /defis ne change pas (liens déjà partagés).
 */
export default function DefisPage() {
  useDocumentTitle('Défis')
  const navigate = useNavigate()
  const [choix, setChoix] = useState(false)

  return (
    <section className="max-w-xl mx-auto">
      <div className="flex items-center gap-2 -ml-2">
        <Link to="/profil" className="btn-icon" aria-label="Retour au profil"><Icon name="arrowLeft" /></Link>
        <span className="eyebrow">Profil</span>
      </div>
      <PageHeader title="Défis" description="Dix questions, un score, et quelqu’un à battre. Sans compte, sans inscription : tout se passe sur ton téléphone." />

      {choix ? (
        <div className="card p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display text-2xl font-bold text-ink">Défier un ami</h2>
            <button onClick={() => setChoix(false)} className="btn-ghost h-11 px-3 text-sm">Annuler</button>
          </div>
          <ChoixCivilisation onChoix={(id) => navigate(`/defi/${id}`)} />
        </div>
      ) : (
        <div className="grid gap-3">
          <Carte
            icone="share"
            titre="Défier un ami par lien"
            texte="Tu joues 10 questions, puis tu envoies le lien. Ton ami reçoit exactement les mêmes questions et essaie de faire mieux."
            onClick={() => setChoix(true)}
            mise
          />
          <Carte icone="users" titre="À deux sur ce téléphone" texte="Chacun son tour, les mêmes 10 questions. Le meilleur score gagne." to="/defis/a-deux" />
          <Carte icone="refresh" titre="Quiz infini" texte="Des questions sans fin sur les civilisations que tu as découvertes. Pour s’entraîner, sans enjeu." to="/entrainement" />
        </div>
      )}
    </section>
  )
}

function Carte({ icone, titre, texte, to, onClick, mise }) {
  const contenu = (
    <>
      <span className={`w-12 h-12 shrink-0 grid place-items-center ${mise ? 'bg-accentbtn text-white' : 'bg-surface2 text-ink'}`} aria-hidden="true">
        <Icon name={icone} size={22} />
      </span>
      <span className="flex-1 min-w-0 text-left">
        <span className="block font-display text-2xl font-bold text-ink leading-tight">{titre}</span>
        <span className="block text-sm text-muted mt-0.5">{texte}</span>
      </span>
      <Icon name="chevronRight" size={18} className="text-muted shrink-0" />
    </>
  )
  const cls = `card hoverable p-4 flex items-center gap-4 min-h-[88px] w-full ${mise ? 'ring-2 ring-accent' : ''}`
  return to ? <Link to={to} className={cls}>{contenu}</Link> : <button onClick={onClick} className={cls}>{contenu}</button>
}

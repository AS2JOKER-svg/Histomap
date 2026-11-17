import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { findCivilization } from '../lib/data'
import { aRattraper, nomCourt } from '../lib/aventure'
import { choixFils } from '../lib/ecransSalle'
import { haptic } from '../lib/haptics'
import useDocumentTitle from '../lib/useDocumentTitle'
import { PARCOURS_AVENTURE as P, useProgress } from '../store/progress'
import { useUI } from '../store/ui'
import Icon from '../components/ui/Icon'

const nomDe = (id) => findCivilization(id)?.civ.label ?? id
const court = (id) => nomCourt(P, id, nomDe(id))
const pluriel = (n, mot, motPluriel = `${mot}s`) => `${n} ${n > 1 ? motPluriel : mot}`
const VISIBLES = 5

/**
 * Choix d'un fil rouge (V3.1, sprint 31 ; maquette 13 du sprint 27) : après un fil terminé, ou pour en changer.
 * Ses annexes entrent dans le chemin, à leur place ; celles derrière le joueur sont « à rattraper » (rien ne bloque,
 * rien ne se referme). Un fil dont toutes les salles sont dans le tronc est « déjà sur ton chemin » : le choisir ne
 * change que l'objectif de titre.
 */
export default function FilRougePage() {
  useDocumentTitle('Fil rouge')
  const navigate = useNavigate()
  const av = useProgress((s) => s.aventure)
  const choisirFilRouge = useProgress((s) => s.choisirFilRouge)
  const showToast = useUI((s) => s.showToast)
  const fils = choixFils(P, av, { nom: court })
  const actuel = fils.find((f) => f.actuel)
  const nouveau = !actuel || actuel.termine
  const [choix, setChoix] = useState(() => (nouveau ? fils.find((f) => !f.termine)?.id ?? null : actuel.id))
  const [tous, setTous] = useState(false)
  // le fil choisi reste visible même replié
  const visibles = tous ? fils : fils.filter((f, i) => i < VISIBLES || f.id === choix || f.actuel)
  const choisi = fils.find((f) => f.id === choix)

  const valider = () => {
    if (!choisi || choisi.actuel) return navigate('/')
    choisirFilRouge(choisi.id)
    haptic('success')
    const rattraper = [...aRattraper(P, useProgress.getState().aventure)].filter((id) => choisi.membres.includes(id)).length
    const ajout = choisi.ajoutees.length - choisi.faites
    showToast({
      text: `Fil rouge : ${choisi.label}${ajout ? ` · ${pluriel(ajout, 'salle ajoutée', 'salles ajoutées')} à ton chemin` : ''}${rattraper ? ` (${rattraper} à rattraper)` : ''}`,
      tone: 'success',
    })
    navigate('/')
  }

  return (
    <section className="max-w-[560px] mx-auto">
      <button onClick={() => (window.history.state?.idx > 0 ? navigate(-1) : navigate('/'))} className="btn-icon -ml-2 mb-2" aria-label="Retour">
        <Icon name="arrowLeft" />
      </button>
      <h1 className="font-display text-[34px] font-bold text-ink leading-tight">{nouveau ? 'Ton prochain fil rouge' : 'Changer de fil rouge'}</h1>
      <p className="mt-2 text-[15px] text-ink/90">
        Ses salles entrent dans ton chemin, à leur place. Celles qui sont derrière toi sont « à rattraper » : elles ne bloquent rien.
      </p>

      <fieldset className="mt-5">
        <legend className="sr-only">Fils rouges</legend>
        <div className="flex flex-col border-t border-line">
          {visibles.map((f) => {
            const badge = f.actuel && !f.termine ? 'ton fil actuel' : f.termine ? 'terminé' : f.ajoutees.length ? `+${pluriel(f.ajoutees.length, 'salle')}` : 'déjà sur ton chemin'
            const detail = f.ajoutees.length
              ? `${f.apercu}${f.faites ? ` · ${pluriel(f.faites, 'déjà faite', 'déjà faites')}` : ''}`
              : `Titre dès ★ dans ses ${f.total} salles (${f.etoilees} / ${f.total})`
            return (
              <label key={f.id} className={`flex items-start gap-3 py-3.5 border-b border-line cursor-pointer ${f.id === choix ? 'bg-surface' : ''}`}>
                <input
                  type="radio"
                  name="fil"
                  value={f.id}
                  checked={f.id === choix}
                  onChange={() => (haptic('select'), setChoix(f.id))}
                  className="mt-1 ml-2 w-[22px] h-[22px] shrink-0 accent-accent"
                />
                <span className="flex-1 min-w-0 pr-2">
                  <span className="flex items-baseline justify-between gap-2">
                    <span className="font-bold text-ink text-[17px]">{f.label}</span>
                    <span className={`text-xs font-bold shrink-0 ${f.ajoutees.length && !f.termine ? 'text-accent' : 'text-muted'}`}>{badge}</span>
                  </span>
                  <span className="block text-[13px] text-muted mt-0.5">{detail}</span>
                  {f.id === choix && (
                    <span className="block text-[13px] text-ink mt-1 italic">
                      « {f.titre} »{f.titreObtenu ? ' · titre obtenu' : ''}
                    </span>
                  )}
                </span>
              </label>
            )
          })}
        </div>
      </fieldset>
      {fils.length > VISIBLES && (
        <button onClick={() => setTous(!tous)} aria-expanded={tous} className="min-h-[44px] mt-1 text-sm font-bold text-accent">
          {tous ? 'Replier la liste' : `Voir les ${fils.length} fils rouges`}
        </button>
      )}

      <div className="sticky bottom-[calc(theme(spacing.tabbar)+0.5rem)] md:bottom-4 mt-4 pt-2 grid gap-2 bg-bg">
        <button onClick={valider} disabled={!choisi} className="min-h-[54px] bg-accentbtn text-white text-[16px] font-bold hover:brightness-110 transition disabled:opacity-50">
          {!choisi ? 'Choisis un fil rouge' : choisi.actuel ? 'Garder ce fil rouge' : `Suivre : ${choisi.label}`}
        </button>
        <button onClick={() => navigate('/')} className="min-h-[44px] text-sm font-bold text-muted">Plus tard</button>
      </div>
    </section>
  )
}

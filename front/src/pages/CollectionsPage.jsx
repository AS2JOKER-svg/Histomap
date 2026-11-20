import { useState } from 'react'
import { Link } from 'react-router-dom'
import { findCivilization } from '../lib/data'
import { ouverture, titresObtenus } from '../lib/aventure'
import { filsCollection, mondesCollection, pluriel, titreUltime } from '../lib/profil'
import { solidBg } from '../lib/color'
import { PARCOURS_AVENTURE as P, useProgress } from '../store/progress'
import Icon from '../components/ui/Icon'
import SousPage, { TitreSection } from '../components/profil/SousPage'
import EtatSalle from '../components/aventure/EtatSalle'
import { PICTOS_MONDE, Picto } from '../components/aventure/Pictos'

/**
 * Collections (V3.1, sprint 32, maquette 15) : les cinq mondes (titre = au moins ★ sur tout le tronc),
 * les fils rouges (le sien, ceux dont le titre est obtenu, puis tous), les titres (celui qu'on affiche).
 */
const OR = '#e0c27a'

export default function CollectionsPage() {
  const av = useProgress((s) => s.aventure)
  const choisirTitre = useProgress((s) => s.choisirTitre)
  const [tous, setTous] = useState(false)
  const mondes = mondesCollection(P, av)
  const fils = filsCollection(P, av)
  const actuel = fils.find((f) => f.actuel)
  const obtenus = fils.filter((f) => !f.actuel && f.titreObtenu)
  const titres = titresObtenus(P, av)
  const ultime = titreUltime(P, av)

  return (
    <SousPage titre="Collections">
      <section aria-labelledby="col-mondes">
        <TitreSection id="col-mondes" className="mb-1.5">Les mondes · au moins ★ partout = titre</TitreSection>
        <ul className="border-t border-line">
          {mondes.map((m) => (
            <li key={m.epoque}>
              <Monde m={m} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="col-fils" className="mt-6">
        <TitreSection id="col-fils" className="mb-2">Fils rouges</TitreSection>
        {actuel ? (
          <div className="p-3 bg-surface border-2 border-accent flex items-center gap-3">
            <span aria-hidden="true" className="w-8 h-8 shrink-0 rounded-full grid place-items-center bg-accentbtn text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M2 14c3.3-7 6.7 7 10 0s6.7 7 10 0" /></svg>
            </span>
            <span className="flex-1 min-w-0">
              <span className="block font-bold text-ink">
                {actuel.label} <span className="text-xs font-semibold text-accent">· ton fil</span>
              </span>
              <span className="block text-xs text-muted">
                {actuel.etoilees} / {actuel.total} à ★{actuel.aRattraper ? ` · ${pluriel(actuel.aRattraper, 'salle')} à rattraper` : ''}
                {actuel.titreObtenu ? ' · titre obtenu' : ''}
              </span>
            </span>
            <Link to="/aventure/fil-rouge" className="min-h-[44px] px-1 flex items-center text-sm font-bold text-accent" aria-label={`Changer de fil rouge (actuel : ${actuel.label})`}>
              Changer
            </Link>
          </div>
        ) : (
          <Link to="/aventure/fil-rouge" className="p-3 min-h-[56px] bg-surface border-2 border-dashed border-line flex items-center gap-3 text-ink">
            <Icon name="link" size={20} className="text-accent shrink-0" />
            <span className="flex-1 font-semibold">Choisir un fil rouge</span>
            <Icon name="chevronRight" size={16} className="text-muted" />
          </Link>
        )}

        {obtenus.length > 0 && (
          <ul className="mt-2 grid gap-2">
            {obtenus.map((f) => (
              <li key={f.id} className="p-3 border border-line flex items-center gap-3">
                <span aria-hidden="true" className="w-8 h-8 shrink-0 rounded-full grid place-items-center" style={{ background: OR, color: '#2a2118' }}>
                  <Icon name="check" size={16} strokeWidth={3} />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-bold text-ink">{f.label}</span>
                  <span className="block text-xs text-muted">
                    {f.etoilees} / {f.total} à ★ · titre obtenu
                  </span>
                </span>
              </li>
            ))}
          </ul>
        )}

        <button onClick={() => setTous(!tous)} aria-expanded={tous} aria-controls="col-tous-fils" className="mt-1 min-h-[44px] text-sm font-bold text-accent">
          {tous ? 'Replier les fils rouges' : `Voir les ${fils.length} fils rouges`}
        </button>
        {tous && (
          <ul id="col-tous-fils" className="grid gap-2 mt-1">
            {fils.map((f) => (
              <li key={f.id}>
                <Fil f={f} av={av} />
              </li>
            ))}
          </ul>
        )}
      </section>

      <section aria-labelledby="col-titres" className="mt-6">
        <TitreSection id="col-titres" className="mb-2">
          Titres{titres.length ? ` · ${pluriel(titres.length, 'obtenu')}` : ''}
        </TitreSection>
        {titres.length ? (
          <>
            <p className="text-sm text-muted mb-2">Touche un titre pour l’afficher dans ton profil et sur tes résultats partagés.</p>
            <ul className="flex flex-wrap gap-1.5">
              {titres.map((t) => {
                const choisi = av.titreAffiche === t.id
                return (
                  <li key={t.id}>
                    <button
                      onClick={() => choisirTitre(choisi ? null : t.id)}
                      aria-pressed={choisi}
                      className={`min-h-[44px] px-2.5 py-1.5 font-display text-base font-bold leading-tight text-left ${choisi ? 'bg-ink text-bg' : 'border border-accent2 text-ink'}`}
                    >
                      {t.titre}
                    </button>
                  </li>
                )
              })}
            </ul>
          </>
        ) : (
          <p className="text-sm text-muted">Réussis l’épreuve (au moins ★) de toutes les salles du tronc d’un monde, ou de tout un fil rouge, pour gagner ton premier titre.</p>
        )}
        <p className="mt-2 text-xs text-muted">
          Titre ultime « {ultime.titre} » : {ultime.faites} / {ultime.total} salles à ★
        </p>
      </section>
    </SousPage>
  )
}

/** Un monde : pictogramme à sa couleur ; titre obtenu, avancement du tronc, ou pas encore ouvert. */
function Monde({ m }) {
  const ferme = m.statut === 'ferme'
  const couleur = `var(--m-${m.theme}-acc)`
  return (
    <Link to={`/?monde=${m.epoque}`} className="flex items-center gap-3 py-2 min-h-[56px] border-b border-line text-ink">
      <span
        aria-hidden="true"
        className={`w-[38px] h-[38px] shrink-0 grid place-items-center ${ferme ? 'border-[1.5px] border-dashed' : ''}`}
        style={ferme ? { borderColor: 'var(--carte-bulle-fermee-bord)', color: `var(--m-${m.theme}-trait)` } : { background: couleur, color: OR }}
      >
        <Picto nom={PICTOS_MONDE[m.theme][0]} taille={22} trait={1.6} />
      </span>
      <span className="flex-1 min-w-0">
        {m.statut === 'titre' && (
          <>
            <span className="block font-bold">{m.nom}</span>
            <span className="block text-xs text-muted">{m.titre}</span>
          </>
        )}
        {m.statut === 'ouvert' && (
          <>
            <span className="flex justify-between gap-2">
              <span className="font-bold">{m.nom}</span>
              <span className="text-xs font-bold text-muted tabular-nums">
                {m.troncEtoile} / {m.tronc} ★
              </span>
            </span>
            <span aria-hidden="true" className="block mt-1 h-[5px] bg-line">
              <span className="block h-full bg-accent2" style={{ width: `${(m.troncEtoile / m.tronc) * 100}%` }} />
            </span>
          </>
        )}
        {ferme && (
          <>
            <span className="block font-bold">{m.nom}</span>
            <span className="block text-xs text-muted">{pluriel(m.salles, 'salle')} · pas encore ouvert</span>
          </>
        )}
      </span>
      {m.statut === 'titre' && (
        <span className="shrink-0 px-2 py-[3px] text-xs font-bold bg-ink text-bg tabular-nums">
          {m.tronc} / {m.tronc} ★
        </span>
      )}
    </Link>
  )
}

/** Un fil rouge dépliable : ses salles, leur état, un lien vers chacune sur la carte. */
function Fil({ f, av }) {
  return (
    <details className={`card rounded-none group ${f.actuel ? 'ring-2 ring-accent' : ''}`}>
      <summary className="p-3 min-h-[56px] flex items-center gap-3 cursor-pointer list-none">
        <span aria-hidden="true" className="w-8 h-8 shrink-0 rounded-full grid place-items-center text-[11px] font-bold text-white" style={{ background: solidBg(f.couleur ?? '#6e5a3c') }}>
          {f.label.slice(0, 2)}
        </span>
        <span className="flex-1 min-w-0">
          <span className="block font-semibold text-ink">
            {f.label}
            {f.actuel && <span className="text-xs text-accent font-semibold"> · ton fil</span>}
          </span>
          <span className="block text-xs text-muted">
            {f.decouvertes} / {f.total} découvertes · {f.etoilees} à ★ → « {f.titre} »
          </span>
        </span>
        <Icon name="chevronRight" size={18} className="text-muted transition group-open:rotate-90" />
      </summary>
      <ol className="px-3 pb-3 space-y-1">
        {f.membres.map((id) => {
          const ref = findCivilization(id)
          const s = av.salles[id]
          return (
            <li key={id}>
              <Link to={`/?salle=${id}`} className="flex items-center gap-2.5 min-h-[44px] text-sm text-ink hover:underline">
                <EtatSalle decouverte={!!s?.decouverte} etoiles={s?.etoiles ?? 0} ouvert={ouverture(P, av, id).ouvert} taille={26} />
                <span className="flex-1">{ref?.civ.label}</span>
                <span className="text-xs text-muted">{ref?.epoch.label}</span>
              </Link>
            </li>
          )
        })}
      </ol>
    </details>
  )
}

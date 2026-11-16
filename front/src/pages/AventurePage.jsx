import { useCallback, useState } from 'react'
import { Link, Navigate, useSearchParams } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { findCivilization } from '../lib/data'
import { formatYear } from '../lib/time'
import { haptic } from '../lib/haptics'
import useDocumentTitle from '../lib/useDocumentTitle'
import { REVISION, aRattraper, avancementMonde, cheminMonde, estTronc, etapeDuJour, listeARevoir, ouverture, salleDe, salleEnCours } from '../lib/aventure'
import { niveau } from '../lib/xp'
import { PARCOURS_AVENTURE as P, useProgress } from '../store/progress'
import Icon from '../components/ui/Icon'
import EtatSalle, { ETAPE_LABEL, Etoiles } from '../components/aventure/EtatSalle'
import SalleSheet from '../components/aventure/SalleSheet'
import { lienEtape, raisonVerrou } from '../components/aventure/liens'
import { useAmbiance } from '../lib/musique'

/**
 * Aventure (onglet par défaut) — maquette 1 du sprint 16, adaptée aux règles V3.1 (sprint 29) en attendant
 * la carte du parcours (sprint 30) : le rail suit le chemin du joueur (tronc + salles de son fil rouge).
 *   ?monde=<époque>  affiche un autre monde (anciens liens #/reviser/<époque> compris)
 *   ?salle=<id>      ouvre le panneau d'une salle
 */
export const ROMAIN = ['I', 'II', 'III', 'IV', 'V']
const DETAIL_ETAPE = {
  decouvrir: { duree: '3 min', texte: 'Cartes essentielles + questions éclair' },
  approfondir: { duree: '3 min', texte: 'Bonus : cartes pour aller plus loin' },
  epreuve: { duree: '3 min', texte: 'Questions sur les cartes vues · étoiles à gagner' },
  'a-revoir': { duree: '2 min', texte: 'Tes erreurs, pour bien les retenir · +20 XP' },
}
const RAISON = { reprendre: 'À reprendre', 'a-revoir': '', chemin: 'Ta salle en cours', rattraper: 'À rattraper', epreuve: 'Épreuve à passer', annexe: 'Annexe à découvrir', etoiles: 'Étoiles à gagner' }
const aujourdhui = () => {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export default function AventurePage() {
  useDocumentTitle('Aventure')
  const av = useProgress((s) => s.aventure)
  const commencer = useProgress((s) => s.commencerEtape)
  const [params, setParams] = useSearchParams()
  const chapters = useProgress((s) => s.chapters)
  const quizzes = useProgress((s) => s.quizzes)

  // Étape du jour, erreurs à revoir comprises (une séance « À revoir » par jour au plus)
  const jour = etapeDuJour(P, av, { aRevoir: listeARevoir(chapters, quizzes), revisionFaite: av.aRevoirJour === aujourdhui() })
  const enCours = salleEnCours(P, av)
  const mondeCourant = Math.max(0, P.monde.get(enCours ?? jour?.civId) ?? 0)
  const demande = P.mondes.findIndex((m) => m.epoque === params.get('monde'))
  const w = demande >= 0 ? demande : mondeCourant
  const monde = P.mondes[w]
  // ambiance : celle de la salle en cours du monde affiché (ou de sa première salle)
  useAmbiance(enCours && P.monde.get(enCours) === w ? enCours : monde.tronc[0])
  const avancement = avancementMonde(P, av, w)
  const chemin = cheminMonde(P, av, w)
  const rattraper = aRattraper(P, av)
  const n = niveau(av.xp)

  const salleOuverte = params.get('salle')
  const ouvrir = (id) => {
    haptic('tap')
    setParams((p) => ({ ...Object.fromEntries(p), salle: id }))
  }
  const fermer = useCallback(() => setParams((p) => {
    const next = Object.fromEntries(p)
    delete next.salle
    return next
  }, { replace: true }), [setParams])
  // « À revoir » n'est pas une étape de salle : rien à noter comme commencé
  const jouer = (civId, etape) => etape !== 'a-revoir' && commencer(civId, etape)

  // Premier lancement : la bienvenue d'abord
  if (!av.onboarding) return <Navigate to="/bienvenue" replace />

  return (
    <section className="max-w-xl mx-auto">
      {/* Niveau, XP, série */}
      <div className="flex items-center gap-3 mb-4">
        <span className="w-11 h-11 shrink-0 rounded-full bg-ink text-bg grid place-items-center font-display text-xl font-bold" aria-hidden="true">{n.niveau}</span>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-muted">
            {n.rang} · {n.max ? `${av.xp.toLocaleString('fr-FR')} XP` : `${n.dansNiveau.toLocaleString('fr-FR')} / ${n.pourSuivant.toLocaleString('fr-FR')} XP`}
          </p>
          <div className="mt-1.5 h-[5px] bg-line" role="progressbar" aria-label={`Niveau ${n.niveau}`} aria-valuemin={0} aria-valuemax={n.pourSuivant ?? 1} aria-valuenow={n.dansNiveau}>
            <div className="h-full bg-accent2" style={{ width: n.max ? '100%' : `${(n.dansNiveau / n.pourSuivant) * 100}%` }} />
          </div>
        </div>
        <Link to="/profil" className="h-10 px-3 inline-flex items-center gap-1 border border-line text-accent font-bold text-sm" aria-label={`Série de ${av.serie.jours} jour(s), ${av.serie.jokers} joker(s) en réserve`}>
          <Icon name="flame" size={17} /> {av.serie.jours}
        </Link>
        <Link to="/defis" className="h-10 w-11 inline-flex items-center justify-center border border-line text-ink" aria-label="Défis entre amis" title="Défis entre amis">
          <Icon name="users" size={18} />
        </Link>
      </div>

      {/* Bandeau du monde → les cinq mondes */}
      <Link to="/aventure/mondes" className="block border-t-2 border-ink border-b border-line py-3 mb-4 group" aria-label={`Monde ${ROMAIN[w]}, ${monde.nom} : voir les cinq mondes`}>
        <span className="flex items-end justify-between gap-3">
          <span>
            <span className="eyebrow block">Monde {ROMAIN[w]}</span>
            <span className="block font-display text-4xl font-bold text-ink leading-none">{monde.nom}</span>
          </span>
          <span className="flex flex-col items-end gap-1.5">
            <span className="text-xs font-semibold text-muted tabular-nums inline-flex items-center gap-1">
              {avancement.decouvertes} / {avancement.salles} salles <Icon name="chevronRight" size={14} />
            </span>
            <span className="flex gap-[2px]" aria-hidden="true">
              {chemin.map((id) => {
                const s = salleDe(av, id)
                return <span key={id} className={`w-2.5 h-1.5 ${id === enCours ? 'bg-accent' : s.etoiles ? 'bg-accent2' : s.decouverte ? 'bg-accent2/50' : 'bg-line'}`} />
              })}
            </span>
          </span>
        </span>
      </Link>

      {!avancement.ouvert && (
        <p className="mb-4 p-3 bg-surface2 text-sm text-ink flex items-center gap-2">
          <Icon name="lock" size={16} /> {raisonVerrou(ouverture(P, av, chemin[0]).raison)}.
        </p>
      )}

      {/* Le parcours : ligne du temps des salles */}
      <ol className="relative">
        {chemin.map((id, i) => (
          <SalleLigne key={id} id={id} rang={i + 1} av={av} enCours={id === enCours} aRattraper={rattraper.has(id)} onOpen={ouvrir} annexes={annexes(id, w, chemin)} />
        ))}
      </ol>
      {orphelines(w, chemin).length > 0 && (
        <div className="mt-6">
          <p className="eyebrow mb-2">Autres annexes de ce monde</p>
          <ul className="space-y-2">
            {orphelines(w, chemin).map((b) => (
              <Annexe key={b} id={b} av={av} onOpen={ouvrir} />
            ))}
          </ul>
        </div>
      )}

      {/* Étape du jour : une seule action, toujours à portée de pouce */}
      {jour && (
        <div className="sticky bottom-[calc(theme(spacing.tabbar)+0.75rem)] md:bottom-6 mt-6 z-10">
          <div className="p-3.5 bg-surface border border-muted/40 shadow-lift flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-[.12em] text-accent">
                {jour.raison === 'a-revoir' ? `${Math.min(jour.nb, 2 * REVISION.parSeance)} erreurs à revoir` : RAISON[jour.raison]} · {DETAIL_ETAPE[jour.etape].duree}
              </p>
              <p className="font-display text-[21px] font-bold text-ink leading-[1.1] line-clamp-2">
                {findCivilization(jour.civId)?.civ.label} — {jour.etape === 'decouvrir' && !estTronc(P, jour.civId) ? 'Séance' : ETAPE_LABEL[jour.etape]}
              </p>
              <p className="text-xs text-muted">{DETAIL_ETAPE[jour.etape].texte}</p>
            </div>
            <Link to={lienEtape(jour.civId, jour.etape)} onClick={() => jouer(jour.civId, jour.etape)} className="btn-accent h-12 px-5 text-[15px] font-bold shrink-0 rounded-none">
              Jouer
            </Link>
          </div>
        </div>
      )}

      <AnimatePresence>
        {salleOuverte && P.monde.has(salleOuverte) && <SalleSheet key={salleOuverte} civId={salleOuverte} av={av} onClose={fermer} onPlay={jouer} />}
      </AnimatePresence>
    </section>
  )
}

/** Annexes de ce monde hors du chemin, rattachées (directement ou par une autre annexe) à une salle du chemin. */
function annexes(id, w, chemin) {
  const out = []
  const walk = (x) => {
    for (const b of P.enfants.get(x) ?? []) {
      if (P.monde.get(b) !== w || chemin.includes(b)) continue
      out.push(b)
      walk(b)
    }
  }
  walk(id)
  return out
}
/** Annexes de ce monde dont la chaîne remonte à un monde précédent. */
function orphelines(w, chemin) {
  const rattachees = new Set(chemin.flatMap((id) => annexes(id, w, chemin)))
  return P.ordre.filter((id) => !estTronc(P, id) && P.monde.get(id) === w && !chemin.includes(id) && !rattachees.has(id))
}

/** Une salle du chemin sur le rail, suivie de ses annexes. */
function SalleLigne({ id, rang, av, enCours, aRattraper, onOpen, annexes }) {
  const [toutes, setToutes] = useState(false)
  const ref = findCivilization(id)
  if (!ref) return null
  const s = salleDe(av, id)
  const { ouvert, raison } = ouverture(P, av, id)
  const tronc = estTronc(P, id)
  const genre = tronc ? `Salle ${rang}` : aRattraper ? `Salle ${rang} · fil rouge · à rattraper` : `Salle ${rang} · fil rouge`

  return (
    <li className="relative pl-14 pb-2.5">
      {/* rail : doré une fois la salle découverte */}
      <span className={`absolute left-[26px] top-0 bottom-0 w-0.5 ${s.decouverte ? 'bg-accent2' : 'bg-line'}`} aria-hidden="true" />
      {enCours ? (
        <>
          <span className="absolute left-[7px] top-4 w-10 h-10 rounded-full bg-accentbtn border-4 border-bg" aria-hidden="true" />
          <button onClick={() => onOpen(id)} className="w-full text-left p-3.5 flex flex-col gap-2.5 border border-gold/60" style={{ background: '#2a2118', color: '#f6efe2' }} aria-label={`${genre}, ${ref.civ.label}, en cours : ouvrir`}>
            <span className="flex justify-between items-baseline text-[11px] font-bold uppercase tracking-[.14em]">
              <span className="text-gold">{genre} · en cours</span>
              <span className="normal-case tracking-normal font-medium opacity-80">{ref.continent.label}</span>
            </span>
            <span className="font-display text-3xl font-bold leading-none">{ref.civ.label}</span>
            <span className="text-xs font-semibold opacity-90">
              {tronc ? (
                <>
                  Découvrir{s.decouverte ? ' ✓' : ''} · Épreuve <Etoiles n={s.etoiles} />
                </>
              ) : (
                'Séance : cartes essentielles puis mini-épreuve'
              )}
            </span>
          </button>
        </>
      ) : (
        <>
          <span className="absolute left-[11px] top-3">
            <EtatSalle decouverte={s.decouverte} etoiles={s.etoiles} ouvert={ouvert} taille={32} />
          </span>
          <button
            onClick={() => onOpen(id)}
            className={`w-full text-left px-3 py-2.5 border flex items-center gap-3 transition hover:border-muted ${aRattraper ? 'border-dashed border-accent/70 bg-surface' : ouvert ? 'bg-surface border-line' : 'border-line/70 text-muted'}`}
          >
            <span className="flex-1 min-w-0">
              <span className="block text-[11px] text-muted">
                {genre} · {ouvert ? ref.continent.label : raisonVerrou(raison)}
              </span>
              <span className={`block font-display text-xl font-bold leading-tight truncate ${ouvert ? 'text-ink' : ''}`}>{ref.civ.label}</span>
            </span>
            {s.decouverte ? (
              <Etoiles n={s.etoiles} className="text-sm text-ink" />
            ) : (
              <span className="text-[11px] text-muted tabular-nums">{formatYear(ref.civ.start)}</span>
            )}
          </button>
        </>
      )}
      {annexes.length > 0 && (
        <ul className="mt-2 ml-4 space-y-2">
          {/* au-delà de 2 annexes : les ouvertes d'abord, le reste replié (le parcours reste lisible) */}
          {(toutes ? annexes : [...annexes].sort((a, b) => ouverture(P, av, b).ouvert - ouverture(P, av, a).ouvert).slice(0, 2)).map((b) => (
            <Annexe key={b} id={b} av={av} onOpen={onOpen} />
          ))}
          {annexes.length > 2 && (
            <li>
              <button onClick={() => setToutes(!toutes)} aria-expanded={toutes} className="min-h-[44px] px-3 text-sm font-semibold text-accent">
                {toutes ? 'Replier les annexes' : `+ ${annexes.length - 2} autre${annexes.length - 2 > 1 ? 's' : ''} annexe${annexes.length - 2 > 1 ? 's' : ''}`}
              </button>
            </li>
          )}
        </ul>
      )}
    </li>
  )
}

function Annexe({ id, av, onOpen }) {
  const ref = findCivilization(id)
  if (!ref) return null
  const s = salleDe(av, id)
  const { ouvert } = ouverture(P, av, id)
  return (
    <li>
      <button onClick={() => onOpen(id)} className={`w-full min-h-[44px] text-left px-3 py-2 border border-dashed border-muted/50 flex items-center gap-2.5 text-sm ${ouvert ? 'text-ink' : 'text-muted'}`}>
        <Icon name="arrowRight" size={14} className="text-muted shrink-0" />
        <span className="flex-1 min-w-0 line-clamp-2 font-semibold">Annexe · {ref.civ.label}</span>
        <EtatSalle decouverte={s.decouverte} etoiles={s.etoiles} ouvert={ouvert} taille={24} />
      </button>
    </li>
  )
}

import { useCallback } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { findCivilization } from '../lib/data'
import { formatYear } from '../lib/time'
import { haptic } from '../lib/haptics'
import useDocumentTitle from '../lib/useDocumentTitle'
import { MEDAILLE, avancementMonde, estTronc, etapeDuJour, etoiles, ouverture, salleEnCours } from '../lib/aventure'
import { BAREME, niveau } from '../lib/xp'
import { PARCOURS_AVENTURE as P, useProgress } from '../store/progress'
import Icon from '../components/ui/Icon'
import Medaille, { ETAPE_LABEL } from '../components/aventure/Medaille'
import SalleSheet from '../components/aventure/SalleSheet'
import { lienEtape, raisonVerrou } from '../components/aventure/liens'

/**
 * Aventure (onglet par défaut, V3) — maquette 1 du sprint 16, direction « Musée vivant ».
 *   ?monde=<époque>  affiche un autre monde (anciens liens #/reviser/<époque> compris)
 *   ?salle=<id>      ouvre le panneau d'une salle
 * Les étapes se jouent encore dans les écrans de chapitre et de quiz (refonte au sprint 21).
 */
export const ROMAIN = ['I', 'II', 'III', 'IV', 'V']
const DETAIL_ETAPE = {
  decouvrir: { duree: '3 min', texte: `Cartes essentielles + 3 questions · +${BAREME.decouvrir} XP · bronze` },
  approfondir: { duree: '3 min', texte: `Cartes + 5 questions · +${BAREME.approfondir} XP · argent` },
  epreuve: { duree: '5 min', texte: '20 questions · jusqu’à 400 XP · or' },
}

export default function AventurePage() {
  useDocumentTitle('Aventure')
  const av = useProgress((s) => s.aventure)
  const commencer = useProgress((s) => s.commencerEtape)
  const [params, setParams] = useSearchParams()
  const salles = av.salles

  const jour = etapeDuJour(P, salles)
  const enCours = salleEnCours(P, salles)
  const mondeCourant = Math.max(0, P.monde.get(enCours ?? jour?.civId) ?? 0)
  const demande = P.mondes.findIndex((m) => m.epoque === params.get('monde'))
  const w = demande >= 0 ? demande : mondeCourant
  const monde = P.mondes[w]
  const avancement = avancementMonde(P, salles, w)
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
  const jouer = (civId, etape) => commencer(civId, etape)

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
              {avancement.argent} / {avancement.salles} salles <Icon name="chevronRight" size={14} />
            </span>
            <span className="flex gap-[2px]" aria-hidden="true">
              {monde.tronc.map((id) => {
                const m = salles[id]?.medaille ?? 0
                return <span key={id} className={`w-2.5 h-1.5 ${id === enCours ? 'bg-accent' : m >= MEDAILLE.ARGENT ? 'bg-accent2' : m >= MEDAILLE.BRONZE ? 'bg-accent2/50' : 'bg-line'}`} />
              })}
            </span>
          </span>
        </span>
      </Link>

      {!avancement.ouvert && (
        <p className="mb-4 p-3 bg-surface2 text-sm text-ink flex items-center gap-2">
          <Icon name="lock" size={16} /> {raisonVerrou({ type: 'monde', monde: w - 1 })}.
        </p>
      )}

      {/* Le parcours : ligne du temps des salles */}
      <ol className="relative">
        {monde.tronc.map((id, i) => (
          <SalleLigne key={id} id={id} rang={i + 1} salles={salles} enCours={id === enCours} onOpen={ouvrir} annexes={annexes(id, w)} />
        ))}
      </ol>
      {orphelines(w).length > 0 && (
        <div className="mt-6">
          <p className="eyebrow mb-2">Autres annexes de ce monde</p>
          <ul className="space-y-2">
            {orphelines(w).map((b) => (
              <Annexe key={b} id={b} salles={salles} onOpen={ouvrir} />
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
                {jour.raison === 'reprendre' ? 'À reprendre' : jour.raison === 'retenter' ? 'Retente l’épreuve' : 'Ton étape du jour'} · {DETAIL_ETAPE[jour.etape].duree}
              </p>
              <p className="font-display text-[22px] font-bold text-ink leading-tight truncate">
                {findCivilization(jour.civId)?.civ.label} — {ETAPE_LABEL[jour.etape]}
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
        {salleOuverte && P.monde.has(salleOuverte) && <SalleSheet key={salleOuverte} civId={salleOuverte} salles={salles} onClose={fermer} onPlay={jouer} />}
      </AnimatePresence>
    </section>
  )
}

/** Annexes de ce monde rattachées (directement ou par une autre annexe) à une salle. */
function annexes(id, w) {
  const out = []
  const walk = (x) => {
    for (const b of P.enfants.get(x) ?? []) {
      if (P.monde.get(b) !== w) continue
      out.push(b)
      walk(b)
    }
  }
  walk(id)
  return out
}
/** Annexes de ce monde dont la chaîne remonte à un monde précédent. */
function orphelines(w) {
  const rattachees = new Set(P.mondes[w].tronc.flatMap((id) => annexes(id, w)))
  return P.ordre.filter((id) => !estTronc(P, id) && P.monde.get(id) === w && !rattachees.has(id))
}

/** Une salle du tronc sur le rail, suivie de ses annexes. */
function SalleLigne({ id, rang, salles, enCours, onOpen, annexes }) {
  const ref = findCivilization(id)
  if (!ref) return null
  const s = salles[id]
  const medaille = s?.medaille ?? MEDAILLE.AUCUNE
  const { ouvert, raison } = ouverture(P, salles, id)
  const nb = etoiles(s?.meilleur ?? 0)

  return (
    <li className="relative pl-14 pb-2.5">
      {/* rail : doré une fois la salle commencée */}
      <span className={`absolute left-[26px] top-0 bottom-0 w-0.5 ${medaille >= MEDAILLE.BRONZE ? 'bg-accent2' : 'bg-line'}`} aria-hidden="true" />
      {enCours ? (
        <>
          <span className="absolute left-[7px] top-4 w-10 h-10 rounded-full bg-accentbtn border-4 border-bg" aria-hidden="true" />
          <button onClick={() => onOpen(id)} className="w-full text-left p-3.5 flex flex-col gap-2.5 border border-gold/60" style={{ background: '#2a2118', color: '#f6efe2' }} aria-label={`Salle ${rang}, ${ref.civ.label}, en cours : ouvrir`}>
            <span className="flex justify-between items-baseline text-[11px] font-bold uppercase tracking-[.14em]">
              <span className="text-gold">Salle {rang} · en cours</span>
              <span className="normal-case tracking-normal font-medium opacity-80">{ref.continent.label}</span>
            </span>
            <span className="font-display text-3xl font-bold leading-none">{ref.civ.label}</span>
            <span className="grid grid-cols-3 gap-1.5 text-xs text-center">
              {['decouvrir', 'approfondir', 'epreuve'].map((e, k) => {
                const fait = medaille > k
                const actuel = medaille === k
                return (
                  <span key={e} className={`py-1.5 font-semibold ${fait ? 'bg-gold text-[#2a2118]' : actuel ? 'border border-gold text-gold' : 'border border-[#f6efe2]/30 opacity-70'}`}>
                    {ETAPE_LABEL[e]}{fait ? ' ✓' : ''}
                  </span>
                )
              })}
            </span>
          </button>
        </>
      ) : (
        <>
          <span className="absolute left-[11px] top-3">
            <Medaille medaille={medaille} ouvert={ouvert} taille={32} />
          </span>
          <button
            onClick={() => onOpen(id)}
            className={`w-full text-left px-3 py-2.5 border flex items-center gap-3 transition hover:border-muted ${ouvert ? 'bg-surface border-line' : 'border-line/70 text-muted'}`}
          >
            <span className="flex-1 min-w-0">
              <span className="block text-[11px] text-muted">
                Salle {rang} · {ouvert ? ref.continent.label : raison?.type === 'monde' ? 'monde pas encore ouvert' : raisonVerrou(raison)}
              </span>
              <span className={`block font-display text-xl font-bold leading-tight truncate ${ouvert ? 'text-ink' : ''}`}>{ref.civ.label}</span>
            </span>
            {nb > 0 ? (
              <span className="text-sm tracking-[2px] text-ink" aria-label={`${nb} étoile(s) sur 3`}>{'★'.repeat(nb)}{'☆'.repeat(3 - nb)}</span>
            ) : medaille === MEDAILLE.ARGENT ? (
              <span className="text-xs font-bold text-accent">Viser l’or</span>
            ) : (
              <span className="text-[11px] text-muted tabular-nums">{formatYear(ref.civ.start)}</span>
            )}
          </button>
        </>
      )}
      {annexes.length > 0 && (
        <ul className="mt-2 ml-4 space-y-2">
          {annexes.map((b) => (
            <Annexe key={b} id={b} salles={salles} onOpen={onOpen} />
          ))}
        </ul>
      )}
    </li>
  )
}

function Annexe({ id, salles, onOpen }) {
  const ref = findCivilization(id)
  if (!ref) return null
  const medaille = salles[id]?.medaille ?? 0
  const { ouvert } = ouverture(P, salles, id)
  return (
    <li>
      <button onClick={() => onOpen(id)} className={`w-full min-h-[44px] text-left px-3 py-2 border border-dashed border-muted/50 flex items-center gap-2.5 text-sm ${ouvert ? 'text-ink' : 'text-muted'}`}>
        <Icon name="arrowRight" size={14} className="text-muted shrink-0" />
        <span className="flex-1 min-w-0 truncate font-semibold">Annexe · {ref.civ.label}</span>
        <Medaille medaille={medaille} ouvert={ouvert} taille={24} />
      </button>
    </li>
  )
}

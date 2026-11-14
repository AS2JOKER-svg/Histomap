import { Link, useSearchParams } from 'react-router-dom'
import { findCivilization } from '../lib/data'
import { formatYear } from '../lib/time'
import useDocumentTitle from '../lib/useDocumentTitle'
import { MEDAILLE, avancementMonde, estTronc, etapeDuJour, etapeSuivante, etoiles, ouverture, salleEnCours } from '../lib/aventure'
import { BAREME, niveau } from '../lib/xp'
import { PARCOURS_AVENTURE as P, useProgress } from '../store/progress'
import Icon from '../components/ui/Icon'

/**
 * Aventure (onglet par défaut, V3) — version fonctionnelle du sprint 19 :
 * niveau et série, étape du jour, les 5 mondes, les salles du tronc et leurs annexes.
 * Le design « Musée vivant » (maquettes du sprint 16) arrive au sprint 20 ;
 * les étapes se jouent pour l'instant dans les écrans de chapitre et de quiz existants.
 */
export const ETAPE_LABEL = { decouvrir: 'Découvrir', approfondir: 'Approfondir', epreuve: 'Épreuve' }
const ETAPE_DETAIL = {
  decouvrir: { duree: '3 min', xp: BAREME.decouvrir, medaille: 'bronze' },
  approfondir: { duree: '3 min', xp: BAREME.approfondir, medaille: 'argent' },
  epreuve: { duree: '5 min', xp: null, medaille: 'or' },
}
const MEDAILLES = [
  null,
  { court: 'Br', nom: 'Bronze', bg: '#c9966a' },
  { court: 'Ag', nom: 'Argent', bg: '#d3cfc6' },
  { court: 'Or', nom: 'Or', bg: '#e0c27a' },
]

/** Adresse où se joue une étape (écrans de chapitre et de quiz actuels). */
export function lienEtape(civId, etape) {
  const ref = findCivilization(civId)
  if (!ref) return '/'
  const base = `/reviser/${ref.epoch.id}/${civId}`
  return etape === 'epreuve' ? `${base}/quiz` : base
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
  // ?monde=<époque> (anciens liens #/reviser/<époque> compris)
  const demande = P.mondes.findIndex((m) => m.epoque === params.get('monde'))
  const w = demande >= 0 ? demande : mondeCourant
  const monde = P.mondes[w]
  const avancement = avancementMonde(P, salles, w)
  const n = niveau(av.xp)

  return (
    <section className="max-w-3xl mx-auto">
      {/* Niveau, rang, série */}
      <div className="flex items-center gap-3 mb-5">
        <span className="w-12 h-12 rounded-full bg-ink text-bg grid place-items-center font-display text-xl font-semibold" aria-hidden="true">
          {n.niveau}
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-ink">
            {n.rang} · niveau {n.niveau}
          </p>
          <div className="mt-1.5 h-2 rounded-full bg-surface2 overflow-hidden" role="progressbar" aria-label="XP du niveau" aria-valuemin={0} aria-valuemax={n.pourSuivant ?? 1} aria-valuenow={n.dansNiveau}>
            <div className="h-full rounded-full bg-accent" style={{ width: n.max ? '100%' : `${(n.dansNiveau / n.pourSuivant) * 100}%` }} />
          </div>
          <p className="text-xs text-muted mt-1 tabular-nums">{n.max ? `${av.xp} XP` : `${n.dansNiveau} / ${n.pourSuivant} XP`}</p>
        </div>
        <Link to="/profil" className="chip h-11 px-3 text-ink font-semibold" aria-label={`Série de ${av.serie.jours} jours, ${av.serie.jokers} joker(s)`}>
          <Icon name="flame" size={18} /> {av.serie.jours}
        </Link>
      </div>

      {/* Étape du jour */}
      {jour && (
        <div className="card p-4 mb-6 flex items-center gap-4">
          <div className="flex-1 min-w-0">
            <p className="eyebrow">Ton étape du jour · {ETAPE_DETAIL[jour.etape].duree}</p>
            <p className="font-display text-xl font-semibold text-ink leading-tight mt-1">
              {findCivilization(jour.civId)?.civ.label} — {ETAPE_LABEL[jour.etape]}
            </p>
            <p className="text-sm text-muted mt-0.5">
              {jour.raison === 'reprendre' ? 'À reprendre là où tu t’es arrêté' : jour.raison === 'retenter' ? 'Retente l’épreuve : 15/20 pour l’or' : ETAPE_DETAIL[jour.etape].xp ? `+${ETAPE_DETAIL[jour.etape].xp} XP · médaille ${ETAPE_DETAIL[jour.etape].medaille}` : 'Jusqu’à 400 XP · médaille d’or'}
            </p>
          </div>
          <Link to={lienEtape(jour.civId, jour.etape)} onClick={() => commencer(jour.civId, jour.etape)} className="btn-primary h-12 px-5 shrink-0">
            Jouer
          </Link>
        </div>
      )}

      {/* Les 5 mondes */}
      <div className="flex gap-1.5 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 mb-4" role="group" aria-label="Mondes">
        {P.mondes.map((m, i) => {
          const ouvert = avancementMonde(P, salles, i).ouvert
          return (
            <button
              key={m.epoque}
              onClick={() => setParams(i === mondeCourant ? {} : { monde: m.epoque }, { replace: true })}
              aria-pressed={i === w}
              className={`shrink-0 min-h-[44px] px-3.5 rounded-xl text-sm font-medium inline-flex items-center gap-1.5 border transition ${
                i === w ? 'bg-ink text-bg border-ink' : 'bg-surface text-ink border-line hover:bg-surface2'
              }`}
            >
              {!ouvert && <Icon name="lock" size={14} />} {['I', 'II', 'III', 'IV', 'V'][i]} · {m.nom}
            </button>
          )
        })}
      </div>

      <div className="flex items-end justify-between gap-3 mb-3">
        <div>
          <p className="eyebrow">Monde {['I', 'II', 'III', 'IV', 'V'][w]}</p>
          <h1 className="font-display text-3xl font-semibold text-ink">{monde.nom}</h1>
        </div>
        <p className="text-sm text-muted text-right tabular-nums">
          {avancement.argent} / {avancement.salles} salles en argent
          <br />
          {avancement.branchesCommencees} / {avancement.branches} annexes
        </p>
      </div>
      {!avancement.ouvert && (
        <p className="card p-3 mb-4 text-sm text-muted flex items-center gap-2">
          <Icon name="lock" size={16} /> Ce monde s’ouvre quand toutes les salles de « {P.mondes[w - 1].nom} » ont l’argent.
        </p>
      )}

      <ol className="space-y-2.5">
        {monde.tronc.map((id, i) => (
          <li key={id}>
            <Salle id={id} rang={i + 1} salles={salles} enCours={id === enCours} onPlay={commencer} />
            {annexes(id, w).length > 0 && (
              <ul className="ml-6 mt-1.5 space-y-1.5 border-l-2 border-dashed border-line pl-3">
                {annexes(id, w).map((b) => (
                  <li key={b}>
                    <Salle id={b} salles={salles} annexe onPlay={commencer} />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
      {/* Annexes rattachées à une civilisation d'un monde précédent */}
      {orphelines(w).length > 0 && (
        <>
          <h2 className="font-display text-xl font-semibold text-ink mt-8 mb-2">Autres annexes de ce monde</h2>
          <ul className="space-y-1.5">
            {orphelines(w).map((b) => (
              <li key={b}>
                <Salle id={b} salles={salles} annexe onPlay={commencer} />
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  )
}

/** Annexes de ce monde rattachées (directement ou par une autre annexe) à une salle du tronc. */
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

function Salle({ id, rang, salles, enCours, annexe, onPlay }) {
  const ref = findCivilization(id)
  if (!ref) return null
  const s = salles[id]
  const medaille = s?.medaille ?? MEDAILLE.AUCUNE
  const { ouvert, raison } = ouverture(P, salles, id)
  const etape = etapeSuivante(medaille)
  const m = MEDAILLES[medaille]
  const nbEtoiles = etoiles(s?.meilleur ?? 0)
  const pourquoi =
    raison?.type === 'salle' || raison?.type === 'parent'
      ? `S’ouvre après le bronze de ${findCivilization(raison.id)?.civ.label ?? '…'}`
      : raison?.type === 'monde'
        ? 'Monde pas encore ouvert'
        : null

  return (
    <div className={`card p-3 flex items-center gap-3 ${enCours ? 'ring-2 ring-accent' : ''} ${ouvert ? '' : 'opacity-70'}`}>
      <span
        className="w-10 h-10 shrink-0 rounded-full grid place-items-center text-xs font-bold"
        style={m ? { background: m.bg, color: '#2a2118' } : undefined}
        aria-label={m ? `Médaille ${m.nom}` : ouvert ? 'Pas encore de médaille' : 'Verrouillée'}
      >
        {m ? m.court : ouvert ? <span className="w-3 h-3 rounded-full border-2 border-muted" /> : <Icon name="lock" size={16} className="text-muted" />}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted">
          {annexe ? 'Annexe' : `Salle ${rang}`} · {formatYear(ref.civ.start)} → {formatYear(ref.civ.end)}
          {nbEtoiles > 0 && <span className="ml-1.5 text-ink" aria-label={`${nbEtoiles} étoile(s)`}>{'★'.repeat(nbEtoiles)}</span>}
        </p>
        <p className="font-semibold text-ink leading-snug truncate">{ref.civ.label}</p>
        {pourquoi && <p className="text-xs text-muted">{pourquoi}</p>}
      </div>
      {ouvert && etape ? (
        <Link to={lienEtape(id, etape)} onClick={() => onPlay(id, etape)} className={`${enCours ? 'btn-primary' : 'btn-secondary'} h-11 px-3.5 text-sm shrink-0`}>
          {ETAPE_LABEL[etape]}
        </Link>
      ) : (
        <Link to={`/frise/${ref.epoch.id}/${id}`} className="btn-ghost h-11 px-3 text-sm shrink-0" aria-label={`Lire la fiche : ${ref.civ.label}`}>
          Fiche
        </Link>
      )}
    </div>
  )
}

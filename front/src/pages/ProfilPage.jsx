import { useState } from 'react'
import { Link } from 'react-router-dom'
import useDocumentTitle from '../lib/useDocumentTitle'
import { findCivilization } from '../lib/data'
import { MEDAILLE, avancementFilRouge, avancementMonde, etoiles, ouverture, titresObtenus } from '../lib/aventure'
import { emplacementsJokers, niveau, prochaineRecompense } from '../lib/xp'
import { OBJECTIFS_SEMAINE, lundi } from '../lib/progression'
import { choisi } from '../lib/cosmetiques'
import { solidBg } from '../lib/color'
import { useAudio } from '../store/audio'
import { canVibrate, testerVibrations } from '../lib/haptics'
import { PARCOURS_AVENTURE as P, useProgress } from '../store/progress'
import PageHeader from '../components/ui/PageHeader'
import Icon from '../components/ui/Icon'
import AppCard from '../components/app/AppCard'
import Personnaliser from '../components/aventure/Personnaliser'
import Medaille from '../components/aventure/Medaille'
import { Sceau } from '../components/celebration/elements'

/** Profil (maquette 12, V3, sprint 23) : progression, « À revoir », collections, titres, personnalisation. */
const ROMAIN = ['I', 'II', 'III', 'IV', 'V']
const aujourdhui = () => {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export default function ProfilPage() {
  useDocumentTitle('Profil')
  const av = useProgress((s) => s.aventure)
  const fiches = useProgress((s) => s.fiches)
  const chapters = useProgress((s) => s.chapters)
  const quizzes = useProgress((s) => s.quizzes)
  const choisirObjectif = useProgress((s) => s.choisirObjectif)
  const choisirTitre = useProgress((s) => s.choisirTitre)
  const choisirFilRouge = useProgress((s) => s.choisirFilRouge)
  const [tousFils, setTousFils] = useState(false)
  const n = niveau(av.xp)
  const prochaine = prochaineRecompense(n.niveau)
  const titres = titresObtenus(P, av.salles)
  const jour = aujourdhui()
  const xpSemaine = av.semaine.debut === lundi(jour) ? av.semaine.xp : 0

  // Statistiques
  const salles = Object.values(av.salles)
  const nb = (m) => salles.filter((s) => s.medaille === m).length
  const totalEtoiles = salles.reduce((t, s) => t + etoiles(s.meilleur ?? 0), 0)

  // À revoir : cartes marquées « à revoir » et questions ratées, salle par salle
  const aRevoir = P.ordre
    .map((id) => ({ id, cartes: chapters[id]?.toReview?.length ?? 0, questions: quizzes[id]?.failed?.length ?? 0 }))
    .filter((x) => x.cartes + x.questions > 0)
    .sort((a, b) => b.cartes + b.questions - (a.cartes + a.questions))
  const seanceFaite = av.aRevoirJour === jour

  const filsRouges = [...P.filsRouges]
    .map((f) => ({ ...f, ...avancementFilRouge(P, av.salles, f) }))
    .sort((a, b) => (b.id === av.filRouge) - (a.id === av.filRouge) || b.or / b.total - a.or / a.total)

  return (
    <section className="max-w-3xl mx-auto">
      <PageHeader eyebrow={`${n.rang} · niveau ${n.niveau}`} title="Profil" description={`${av.xp.toLocaleString('fr-FR')} XP au total.`} />

      <CarteProfil av={av} n={n} titres={titres} />

      <div className="card p-4 mb-4">
        <div className="flex justify-between gap-3 text-sm text-muted tabular-nums">
          <span>{n.max ? 'Niveau maximum atteint' : `${n.dansNiveau.toLocaleString('fr-FR')} / ${n.pourSuivant.toLocaleString('fr-FR')} XP`}</span>
          {prochaine && <span className="text-right">Niveau {prochaine.niveau} : {prochaine.recompenses.map((r) => r.nom).join(', ')}</span>}
        </div>
        <div className="mt-2 h-2 bg-surface2 overflow-hidden">
          <div className="h-full bg-accent2" style={{ width: n.max ? '100%' : `${(n.dansNiveau / n.pourSuivant) * 100}%` }} />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2.5 mb-6">
        <Stat valeur={`${av.serie.jours} j`} label={`série · record ${av.serie.record}`} />
        <Stat valeur={`${av.serie.jokers} / ${emplacementsJokers(n.niveau)}`} label="jokers en réserve" />
        <Stat valeur={xpSemaine} label={`/ ${av.semaine.objectif} XP cette semaine`} />
        <Stat valeur={<span className="flex items-center gap-1.5 text-xl">{nb(MEDAILLE.OR)}<Medaille medaille={3} taille={18} /> {nb(MEDAILLE.ARGENT)}<Medaille medaille={2} taille={18} /> {nb(MEDAILLE.BRONZE)}<Medaille medaille={1} taille={18} /></span>} label="salles par médaille" />
        <Stat valeur={`${totalEtoiles} ★`} label="étoiles d’épreuve" />
        <Stat valeur={Object.keys(fiches).length} label="fiches lues dans l’Atlas" />
      </div>

      {/* À revoir */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-1">À revoir</h2>
      <p className="text-sm text-muted mb-3">
        Les cartes que tu as marquées « à revoir » et les questions ratées à l’épreuve.{' '}
        {seanceFaite ? 'Séance du jour faite (+20 XP gagnés).' : 'Une séance par jour rapporte +20 XP et compte pour la série.'}
      </p>
      {aRevoir.length ? (
        <ul className="grid gap-2 sm:grid-cols-2 mb-6">
          {aRevoir.slice(0, 6).map((x) => (
            <li key={x.id}>
              <Link to={`/aventure/a-revoir/${x.id}`} className="card hoverable p-3 flex items-center gap-3 min-h-[56px]">
                <Icon name="refresh" size={20} className="text-accent shrink-0" />
                <span className="flex-1 min-w-0">
                  <span className="block font-semibold text-ink truncate">{findCivilization(x.id)?.civ.label}</span>
                  <span className="block text-xs text-muted">
                    {[x.cartes && `${x.cartes} carte${x.cartes > 1 ? 's' : ''}`, x.questions && `${x.questions} question${x.questions > 1 ? 's' : ''}`].filter(Boolean).join(' · ')}
                  </span>
                </span>
                <Icon name="chevronRight" size={18} className="text-muted" />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="card p-3 text-sm text-muted mb-6">Rien à revoir pour l’instant : tout est compris.</p>
      )}

      <div className="card p-4 mb-8">
        <p className="text-sm font-semibold text-ink mb-2">Objectif de la semaine</p>
        <div className="flex gap-2" role="group" aria-label="Objectif d’XP de la semaine">
          {OBJECTIFS_SEMAINE.map((o) => (
            <button
              key={o}
              onClick={() => choisirObjectif(o)}
              aria-pressed={av.semaine.objectif === o}
              className={`flex-1 min-h-[44px] border text-sm font-medium ${av.semaine.objectif === o ? 'bg-ink text-bg border-ink' : 'bg-surface text-ink border-line'}`}
            >
              {o} XP
            </button>
          ))}
        </div>
        <p className="text-xs text-muted mt-2">Objectif atteint : un coffre (bonus d’XP et 1 joker).</p>
      </div>

      {/* Collections : mondes */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-3">Collections</h2>
      <Link to="/aventure/mondes" className="card hoverable block p-4 mb-3">
        <span className="flex justify-between items-baseline mb-2">
          <span className="font-semibold text-ink">Les cinq mondes</span>
          <span className="text-xs text-muted inline-flex items-center gap-1">Voir <Icon name="chevronRight" size={14} /></span>
        </span>
        <span className="grid grid-cols-5 gap-2">
          {P.mondes.map((m, w) => {
            const a = avancementMonde(P, av.salles, w)
            return (
              <span key={m.epoque} className="block">
                <span className="block text-[11px] text-muted">{ROMAIN[w]} · {a.or}/{a.salles}</span>
                <span className="block h-1.5 bg-line mt-1"><span className="block h-full bg-accent2" style={{ width: `${(a.or / a.salles) * 100}%` }} /></span>
              </span>
            )
          })}
        </span>
        <span className="block text-xs text-muted mt-2">Salles du tronc en or, monde par monde.</span>
      </Link>

      {/* Collections : fils rouges */}
      <ul className="grid gap-2 mb-3">
        {(tousFils ? filsRouges : filsRouges.slice(0, 5)).map((f) => (
          <li key={f.id}>
            <details className={`card group ${f.id === av.filRouge ? 'ring-2 ring-accent' : ''}`}>
              <summary className="p-3 min-h-[56px] flex items-center gap-3 cursor-pointer list-none">
                <span aria-hidden="true" className="w-8 h-8 shrink-0 rounded-full grid place-items-center text-[11px] font-bold text-white" style={{ background: solidBg(f.couleur ?? '#6e5a3c') }}>{f.label.slice(0, 2)}</span>
                <span className="flex-1 min-w-0">
                  <span className="block font-semibold text-ink">
                    {f.label}
                    {f.id === av.filRouge && <span className="text-xs text-accent font-semibold"> · ton objectif</span>}
                  </span>
                  <span className="block text-xs text-muted">{f.or} / {f.total} en or → « {f.titre} »</span>
                </span>
                <Icon name="chevronRight" size={18} className="text-muted transition group-open:rotate-90" />
              </summary>
              <div className="px-3 pb-3">
                <ol className="space-y-1.5">
                  {f.membres.map((id) => {
                    const ref = findCivilization(id)
                    const { ouvert } = ouverture(P, av.salles, id)
                    return (
                      <li key={id}>
                        <Link to={`/?salle=${id}`} className="flex items-center gap-2.5 min-h-[44px] text-sm text-ink hover:underline">
                          <Medaille medaille={av.salles[id]?.medaille ?? 0} ouvert={ouvert} taille={26} />
                          <span className="flex-1">{ref?.civ.label}</span>
                          <span className="text-xs text-muted">{ref?.epoch.label}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ol>
                {f.id !== av.filRouge && (
                  <button onClick={() => choisirFilRouge(f.id)} className="btn-secondary h-11 w-full mt-2 text-sm">En faire mon objectif</button>
                )}
              </div>
            </details>
          </li>
        ))}
      </ul>

      <button onClick={() => setTousFils(!tousFils)} aria-expanded={tousFils} className="btn-secondary h-11 w-full mb-8 text-sm">
        {tousFils ? 'Replier les fils rouges' : `Voir les ${filsRouges.length} fils rouges`}
      </button>

      <h2 className="font-display text-2xl font-semibold text-ink mb-3">Titres</h2>
      {titres.length ? (
        <>
          <p className="text-sm text-muted mb-2">Touche un titre pour l’afficher sur ta carte de profil et tes résultats partagés.</p>
          <ul className="flex flex-wrap gap-2 mb-8">
            {titres.map((t) => (
              <li key={t.id}>
                <button onClick={() => choisirTitre(av.titreAffiche === t.id ? null : t.id)} aria-pressed={av.titreAffiche === t.id} className={`chip min-h-[44px] font-medium text-ink ${av.titreAffiche === t.id ? 'ring-2 ring-accent' : ''}`}>
                  {t.titre}
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-sm text-muted mb-8">Termine tout le tronc d’un monde en or, ou tout un fil rouge, pour gagner ton premier titre.</p>
      )}

      <h2 className="font-display text-2xl font-semibold text-ink mb-3">Sons, musique et vibrations</h2>
      <ReglagesAudio />

      <h2 className="font-display text-2xl font-semibold text-ink mb-3">Personnaliser</h2>
      <div className="mb-8">
        <Personnaliser />
      </div>

      <AppCard />
      <Link to="/bienvenue" className="btn-ghost h-11 w-full mt-4">Revoir la présentation</Link>
    </section>
  )
}

function CarteProfil({ av, n, titres }) {
  const sceau = choisi('sceau', av.cosmetiques, av.recompenses)
  const cadre = choisi('cadre', av.cosmetiques, av.recompenses)
  const titre = titres.find((t) => t.id === av.titreAffiche)?.titre
  return (
    <div className={`mb-4 ${cadre.anime ? 'hm-cadre-anime p-[4px]' : ''}`} style={!cadre.anime && cadre.couleur ? { border: `4px solid ${cadre.couleur}` } : undefined}>
      <div className="p-4 flex items-center gap-4" style={{ background: '#2a2118', color: '#f6efe2' }}>
        <Sceau sceau={sceau} niveau={n.niveau} taille={68} />
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-[.14em] text-gold">{n.rang} · niveau {n.niveau}</p>
          <p className="font-display text-2xl font-bold leading-tight">{titre ?? 'Aucun titre affiché'}</p>
          {av.filRouge && <p className="text-xs mt-0.5" style={{ color: '#c9b48c' }}>Fil rouge : {P.filsRouges.find((f) => f.id === av.filRouge)?.label}</p>}
        </div>
      </div>
    </div>
  )
}

function ReglagesAudio() {
  const { sons, musique, vibrations, setSons, setMusique, setVibrations } = useAudio()
  const [essai, setEssai] = useState(null) // null | 'envoye' | 'impossible'
  const peutVibrer = canVibrate()
  const lignes = [
    ['Sons de l’interface', 'Cartes, bonnes réponses, médailles, coffres', sons, setSons],
    ['Musique d’ambiance', 'Une ambiance par région du monde, générée dans l’app', musique, setMusique],
    ['Vibrations', peutVibrer ? 'Bonnes réponses, erreurs, médailles, niveaux' : 'Cet appareil ou ce navigateur ne sait pas vibrer', vibrations, setVibrations],
  ]
  const tester = () => setEssai(testerVibrations() ? 'envoye' : 'impossible')
  return (
    <div className="card divide-y divide-line mb-8">
      {lignes.map(([titre, detail, on, set]) => (
        <button key={titre} role="switch" aria-checked={on} onClick={() => set(!on)} className="w-full min-h-[60px] px-4 py-3 flex items-center gap-3 text-left">
          <span className="flex-1">
            <span className="block font-semibold text-ink">{titre}</span>
            <span className="block text-xs text-muted">{detail}</span>
          </span>
          <span aria-hidden="true" className={`w-12 h-7 rounded-full p-1 transition ${on ? 'bg-accentbtn' : 'bg-line'}`}>
            <span className={`block w-5 h-5 rounded-full bg-surface shadow-soft transition ${on ? 'translate-x-5' : ''}`} />
          </span>
        </button>
      ))}
      <div className="px-4 py-3">
        <div className="flex items-start gap-3">
          <p className="flex-1 text-xs text-muted leading-relaxed">
            Sur Android, le navigateur ne fait pas vibrer le téléphone en mode silencieux : passe en mode sonnerie ou vibreur pour sentir les vibrations. Sur iPhone, les vibrations ne sont pas disponibles.
          </p>
          <button onClick={tester} disabled={!vibrations} className="btn-secondary h-11 px-4 shrink-0" aria-label="Tester les vibrations">
            Tester
          </button>
        </div>
        {essai && (
          <p role="status" className="text-sm text-ink mt-2">
            {essai === 'envoye' ? 'Vibration envoyée. Rien senti ? Vérifie que le téléphone n’est pas en mode silencieux.' : 'Cet appareil ou ce navigateur ne sait pas vibrer.'}
          </p>
        )}
      </div>
    </div>
  )
}

function Stat({ valeur, label }) {
  return (
    <div className="card p-3">
      <p className="font-display text-2xl font-semibold text-ink tabular-nums">{valeur}</p>
      <p className="text-xs text-muted">{label}</p>
    </div>
  )
}

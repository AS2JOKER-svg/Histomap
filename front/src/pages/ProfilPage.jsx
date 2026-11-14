import useDocumentTitle from '../lib/useDocumentTitle'
import { avancementFilRouge, titresObtenus } from '../lib/aventure'
import { emplacementsJokers, niveau, prochaineRecompense } from '../lib/xp'
import { OBJECTIFS_SEMAINE, lundi } from '../lib/progression'
import { PARCOURS_AVENTURE as P, useProgress } from '../store/progress'
import PageHeader from '../components/ui/PageHeader'
import AppCard from '../components/app/AppCard'

/**
 * Profil (V3) — version fonctionnelle du sprint 19 : niveau, rang, prochaine récompense,
 * série et jokers, objectif de la semaine, titres et fils rouges. La version complète
 * (choix du titre et des cosmétiques, « À revoir », collections) arrive au sprint 23.
 */
export default function ProfilPage() {
  useDocumentTitle('Profil')
  const av = useProgress((s) => s.aventure)
  const choisirObjectif = useProgress((s) => s.choisirObjectif)
  const n = niveau(av.xp)
  const prochaine = prochaineRecompense(n.niveau)
  const titres = titresObtenus(P, av.salles)
  const auj = new Date()
  const jour = `${auj.getFullYear()}-${String(auj.getMonth() + 1).padStart(2, '0')}-${String(auj.getDate()).padStart(2, '0')}`
  const xpSemaine = av.semaine.debut === lundi(jour) ? av.semaine.xp : 0
  const filsRouges = [...P.filsRouges]
    .map((f) => ({ ...f, ...avancementFilRouge(P, av.salles, f) }))
    .sort((a, b) => (b.id === av.filRouge) - (a.id === av.filRouge) || b.or / b.total - a.or / a.total)

  return (
    <section className="max-w-3xl mx-auto">
      <PageHeader eyebrow={`${n.rang} · niveau ${n.niveau}`} title="Profil" description={`${av.xp.toLocaleString('fr-FR')} XP au total.`} />

      <div className="card p-4 mb-4">
        <div className="flex justify-between text-sm text-muted tabular-nums">
          <span>{n.max ? 'Niveau maximum atteint' : `${n.dansNiveau} / ${n.pourSuivant} XP`}</span>
          {prochaine && (
            <span>
              Niveau {prochaine.niveau} : {prochaine.recompenses.map((r) => r.nom).join(', ')}
            </span>
          )}
        </div>
        <div className="mt-2 h-2 rounded-full bg-surface2 overflow-hidden">
          <div className="h-full rounded-full bg-accent" style={{ width: n.max ? '100%' : `${(n.dansNiveau / n.pourSuivant) * 100}%` }} />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2.5 mb-4">
        <Stat valeur={`${av.serie.jours} j`} label={`série · record ${av.serie.record}`} />
        <Stat valeur={`${av.serie.jokers} / ${emplacementsJokers(n.niveau)}`} label="jokers" />
        <Stat valeur={xpSemaine} label={`/ ${av.semaine.objectif} XP cette semaine`} />
      </div>

      <div className="card p-4 mb-6">
        <p className="text-sm font-semibold text-ink mb-2">Objectif de la semaine</p>
        <div className="flex gap-2" role="group" aria-label="Objectif d’XP de la semaine">
          {OBJECTIFS_SEMAINE.map((o) => (
            <button
              key={o}
              onClick={() => choisirObjectif(o)}
              aria-pressed={av.semaine.objectif === o}
              className={`flex-1 min-h-[44px] rounded-xl border text-sm font-medium ${av.semaine.objectif === o ? 'bg-ink text-bg border-ink' : 'bg-surface text-ink border-line'}`}
            >
              {o} XP
            </button>
          ))}
        </div>
      </div>

      <h2 className="font-display text-2xl font-semibold text-ink mb-3">Titres</h2>
      {titres.length ? (
        <ul className="flex flex-wrap gap-2 mb-6">
          {titres.map((t) => (
            <li key={t.id} className="chip text-ink font-medium">
              {t.titre}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-muted mb-6">Termine tout le tronc d’un monde en or, ou tout un fil rouge, pour gagner ton premier titre.</p>
      )}

      <h2 className="font-display text-2xl font-semibold text-ink mb-3">Fils rouges</h2>
      <ul className="grid gap-2 sm:grid-cols-2 mb-8">
        {filsRouges.map((f) => (
          <li key={f.id} className={`card p-3 ${f.id === av.filRouge ? 'ring-2 ring-accent' : ''}`}>
            <p className="font-semibold text-ink">
              {f.label}
              {f.id === av.filRouge && <span className="text-xs text-muted font-medium"> · ton objectif</span>}
            </p>
            <p className="text-xs text-muted">
              {f.or} / {f.total} en or → « {f.titre} »
            </p>
          </li>
        ))}
      </ul>

      <AppCard />
    </section>
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

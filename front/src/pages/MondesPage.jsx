import { Link } from 'react-router-dom'
import useDocumentTitle from '../lib/useDocumentTitle'
import { avancementMonde, salleEnCours, titresObtenus } from '../lib/aventure'
import { PARCOURS_AVENTURE as P, useProgress } from '../store/progress'
import Icon from '../components/ui/Icon'
import { ROMAIN } from './AventurePage'

/** Les cinq mondes (maquette 3) : avancement, titre d'époque, verrou. */
export default function MondesPage() {
  useDocumentTitle('Les cinq mondes')
  const salles = useProgress((s) => s.aventure.salles)
  const enCours = salleEnCours(P, salles)
  const courant = P.monde.get(enCours) ?? 0
  const titres = new Set(titresObtenus(P, salles).map((t) => t.id))

  return (
    <section className="max-w-xl mx-auto">
      <div className="flex items-center gap-2 -ml-2 mb-2">
        <Link to="/" className="btn-icon" aria-label="Retour au parcours"><Icon name="arrowLeft" /></Link>
        <h1 className="font-display text-4xl font-bold text-ink">Les cinq mondes</h1>
      </div>
      <p className="text-sm text-muted mb-5">Un monde s’ouvre quand toutes les salles du précédent ont au moins l’argent.</p>

      <ol className="space-y-2.5">
        {P.mondes.map((m, w) => {
          const a = avancementMonde(P, salles, w)
          const termine = titres.has(`monde:${m.epoque}`)
          const actuel = w === courant && !termine
          const manque = w > 0 && !a.ouvert ? P.mondes[w - 1].tronc.filter((id) => (salles[id]?.medaille ?? 0) < 2).length : 0
          const corps = (
            <>
              <span className="flex justify-between items-baseline gap-2">
                <span className={`text-[11px] font-bold uppercase tracking-[.14em] ${actuel ? 'text-gold' : 'text-muted'}`}>
                  Monde {ROMAIN[w]} · {a.salles} salles{actuel ? ' · en cours' : ''}
                </span>
                {termine && <span className="px-2 py-0.5 text-[11px] font-bold" style={{ background: '#e0c27a', color: '#2a2118' }}>Terminé</span>}
                {!a.ouvert && <Icon name="lock" size={18} className="text-muted" />}
              </span>
              <span className="block font-display text-3xl font-bold leading-none mt-1">{m.nom}</span>
              {a.ouvert ? (
                <span className="block mt-3 space-y-1.5 text-xs">
                  <Jauge label="Salles en argent" n={a.argent} total={a.salles} actuel={actuel} />
                  <Jauge label="Salles en or" n={a.or} total={a.salles} actuel={actuel} />
                  <Jauge label="Annexes commencées" n={a.branchesCommencees} total={a.branches} actuel={actuel} />
                </span>
              ) : (
                <span className="block text-xs mt-1 text-muted">Encore {manque} {manque > 1 ? 'salles' : 'salle'} du monde « {P.mondes[w - 1].nom} » à mener à l’argent</span>
              )}
              {termine && <span className="block mt-2 text-sm font-semibold">Titre : {m.titre}</span>}
            </>
          )
          return (
            <li key={m.epoque}>
              {a.ouvert ? (
                <Link
                  to={w === courant ? '/' : `/?monde=${m.epoque}`}
                  className={`block p-4 border ${actuel ? 'border-gold/60' : 'bg-surface border-line text-ink hover:border-muted'}`}
                  style={actuel ? { background: '#2a2118', color: '#f6efe2' } : undefined}
                >
                  {corps}
                </Link>
              ) : (
                <div className="p-4 border border-line text-muted">{corps}</div>
              )}
            </li>
          )
        })}
      </ol>
    </section>
  )
}

function Jauge({ label, n, total, actuel }) {
  return (
    <span className="block">
      <span className={`flex justify-between ${actuel ? 'opacity-80' : 'text-muted'}`}><span>{label}</span><span className="tabular-nums">{n} / {total}</span></span>
      <span className={`block h-[5px] mt-0.5 ${actuel ? 'bg-[#4a3d2c]' : 'bg-line'}`}>
        <span className="block h-full bg-accent2" style={{ width: `${total ? (n / total) * 100 : 0}%`, background: actuel ? '#e0c27a' : undefined }} />
      </span>
    </span>
  )
}

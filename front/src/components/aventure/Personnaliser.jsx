import { CADRES, EFFETS, SCEAUX, THEMES, choisi, possede } from '../../lib/cosmetiques'
import { niveau } from '../../lib/xp'
import { useProgress } from '../../store/progress'
import { haptic } from '../../lib/haptics'
import Icon from '../ui/Icon'
import { Sceau } from '../celebration/elements'

const GROUPES = [
  { genre: 'theme', titre: 'Thème de couleur', liste: THEMES },
  { genre: 'sceau', titre: 'Sceau', liste: SCEAUX },
  { genre: 'cadre', titre: 'Cadre', liste: CADRES },
  { genre: 'effet', titre: 'Effet de célébration', liste: EFFETS },
]

/** Profil → « Personnaliser » : les cosmétiques gagnés se choisissent ici ; les autres disent comment les obtenir. */
export default function Personnaliser() {
  const av = useProgress((s) => s.aventure)
  const choisir = useProgress((s) => s.choisirCosmetique)
  const n = niveau(av.xp).niveau
  return (
    <div className="space-y-5">
      {GROUPES.map(({ genre, titre, liste }) => {
        const actuel = choisi(genre, av.cosmetiques, av.recompenses)
        return (
          <fieldset key={genre}>
            <legend className="eyebrow mb-2">{titre}</legend>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {liste.map((x) => {
                const ok = possede(genre, x.id, av.recompenses)
                const on = actuel.id === x.id
                return (
                  <button
                    key={x.id}
                    disabled={!ok}
                    aria-pressed={on}
                    onClick={() => {
                      haptic('select')
                      choisir(genre, x.defaut ? null : x.id)
                    }}
                    className={`min-h-[56px] p-2.5 text-left border flex items-center gap-2.5 transition ${on ? 'border-ink bg-surface ring-2 ring-accent' : ok ? 'border-line bg-surface hover:border-muted' : 'border-dashed border-line text-muted'}`}
                  >
                    <Apercu genre={genre} x={x} niveau={n} />
                    <span className="min-w-0">
                      <span className={`block text-sm font-semibold leading-tight ${ok ? 'text-ink' : ''}`}>{x.nom}</span>
                      {!ok && (
                        <span className="text-[11px] inline-flex items-center gap-1">
                          <Icon name="lock" size={11} /> {x.origine}
                        </span>
                      )}
                    </span>
                  </button>
                )
              })}
            </div>
          </fieldset>
        )
      })}
    </div>
  )
}

function Apercu({ genre, x, niveau }) {
  if (genre === 'theme') return <span aria-hidden="true" className="w-7 h-7 shrink-0" style={{ background: x.apercu }} />
  if (genre === 'sceau') return <span aria-hidden="true" className="shrink-0"><Sceau sceau={x} niveau={niveau} taille={30} /></span>
  if (genre === 'cadre')
    return <span aria-hidden="true" className={`w-7 h-7 shrink-0 border-[3px] ${x.anime ? 'hm-cadre-anime' : ''}`} style={{ borderColor: x.couleur ?? 'rgb(var(--c-line))' }} />
  return (
    <span aria-hidden="true" className="flex gap-0.5 shrink-0">
      {x.couleurs.slice(0, 3).map((c) => <span key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />)}
    </span>
  )
}

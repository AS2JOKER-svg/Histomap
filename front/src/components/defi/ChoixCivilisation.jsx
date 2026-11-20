import { useMemo, useState } from 'react'
import { getEpochs } from '../../lib/data'
import { PARCOURS_AVENTURE as P, useProgress } from '../../store/progress'
import EtatSalle from '../aventure/EtatSalle'

const sansAccents = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

/** Choisir la civilisation d'un défi : tes salles découvertes d'abord, ou une recherche parmi toutes. */
export default function ChoixCivilisation({ onChoix }) {
  const salles = useProgress((s) => s.aventure.salles)
  const [texte, setTexte] = useState('')
  const toutes = useMemo(() => getEpochs().flatMap((e) => e.continents.flatMap((c) => c.civilizations.map((civ) => ({ id: civ.id, label: civ.label, epoque: e.label })))), [])
  const decouvertes = P.ordre.filter((id) => salles[id]?.decouverte).map((id) => toutes.find((c) => c.id === id)).filter(Boolean)
  const debut = decouvertes.length ? decouvertes : P.mondes[0].tronc.map((id) => toutes.find((c) => c.id === id)).filter(Boolean)
  const t = sansAccents(texte.trim())
  const liste = t ? toutes.filter((c) => sansAccents(c.label).includes(t)).slice(0, 30) : debut.slice(0, 30)
  return (
    <div>
      <label className="block">
        <span className="eyebrow">Sur quelle civilisation ?</span>
        <input
          type="search"
          value={texte}
          onChange={(e) => setTexte(e.target.value)}
          placeholder="Chercher parmi les 214 civilisations…"
          className="mt-2 w-full h-12 px-3 bg-surface border border-line text-ink placeholder:text-muted focus:border-ink outline-none"
        />
      </label>
      {!t && <p className="text-xs text-muted mt-2">{decouvertes.length ? 'Tes salles déjà découvertes' : 'Pour commencer, les salles de la Préhistoire'}</p>}
      <ul className="mt-2 grid gap-1.5">
        {liste.map((c) => (
          <li key={c.id}>
            <button onClick={() => onChoix(c.id)} className="w-full min-h-[48px] px-3 py-2 text-left bg-surface border border-line hover:border-muted flex items-center gap-3">
              <EtatSalle decouverte={!!salles[c.id]?.decouverte} etoiles={salles[c.id]?.etoiles ?? 0} taille={24} />
              <span className="flex-1 min-w-0">
                <span className="block font-semibold text-ink truncate">{c.label}</span>
                <span className="block text-xs text-muted">{c.epoque}</span>
              </span>
            </button>
          </li>
        ))}
        {!liste.length && <li className="text-sm text-muted p-3">Aucune civilisation ne correspond.</li>}
      </ul>
    </div>
  )
}

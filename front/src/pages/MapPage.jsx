import { useState } from 'react'
import { getEpochs } from '../lib/data'
import { formatYear } from '../lib/time'
import useDocumentTitle from '../lib/useDocumentTitle'
import PageHeader from '../components/ui/PageHeader'
import ComingSoon from '../components/ComingSoon'

const FEATURES = [
  { icon: 'globe', title: 'Les frontières à travers le temps', text: "Empires, royaumes et pays dessinés sur la carte, de l'Antiquité à nos jours." },
  { icon: 'play', title: 'Un curseur pour remonter le temps', text: "Faites glisser ou lancez l'animation pour voir les territoires évoluer." },
  { icon: 'swords', title: 'Les conflits sur la carte', text: 'Batailles et guerres situées et datées, avec leurs conséquences.' },
  { icon: 'cards', title: 'Un pays = une fiche', text: 'Touchez un territoire pour ouvrir sa fiche détaillée.' },
]

export default function MapPage() {
  useDocumentTitle('Carte du monde')
  const epochs = getEpochs()
  const [index, setIndex] = useState(1)
  const epoch = epochs[index]

  return (
    <>
      <PageHeader
        eyebrow="Carte du monde"
        title="Le monde, siècle après siècle"
        description="Voyagez dans le temps et regardez les civilisations naître, s'étendre et disparaître."
      />
      <ComingSoon sprint="sprint 3" features={FEATURES}>
        {/* Aperçu interactif du curseur temporel (non branché à une carte) */}
        <div className="card p-5 h-full flex flex-col">
          <p className="eyebrow mb-3">Aperçu du curseur temporel</p>
          <div
            className="relative flex-1 min-h-[200px] rounded-xl overflow-hidden grid place-items-center transition-colors duration-500"
            style={{ background: `linear-gradient(160deg, ${epoch.color}33, ${epoch.color}10)` }}
          >
            <svg viewBox="0 0 200 110" className="w-4/5 text-muted/40" aria-hidden="true">
              <g fill="none" stroke="currentColor" strokeWidth="0.7">
                <circle cx="100" cy="55" r="50" />
                <ellipse cx="100" cy="55" rx="24" ry="50" />
                <ellipse cx="100" cy="55" rx="42" ry="50" />
                <path d="M50 55h100M56 30h88M56 80h88" />
              </g>
            </svg>
            <div className="absolute bottom-3 left-3 right-3 text-center">
              <span className="inline-block px-3 py-1.5 rounded-lg bg-surface/90 text-sm font-medium text-ink shadow-soft">
                {epoch.label} · {formatYear(epoch.start)} → {formatYear(epoch.end)}
              </span>
            </div>
          </div>
          <label htmlFor="map-year" className="sr-only">Époque</label>
          <input
            id="map-year"
            type="range"
            min={0}
            max={epochs.length - 1}
            value={index}
            onChange={(e) => setIndex(Number(e.target.value))}
            className="mt-4 w-full accent-[rgb(var(--c-accent))] h-11"
          />
          <div className="flex justify-between text-[11px] text-muted -mt-1">
            {epochs.map((e) => <span key={e.id}>{shortLabel(e.label)}</span>)}
          </div>
        </div>
      </ComingSoon>
    </>
  )
}

/** « Époque moderne » → « Moderne » (place limitée sous le curseur). */
function shortLabel(label) {
  const s = label.replace(/^Époque\s+/, '')
  return s.charAt(0).toUpperCase() + s.slice(1)
}

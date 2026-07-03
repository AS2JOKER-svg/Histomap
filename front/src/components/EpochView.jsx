import { motion } from 'framer-motion'
import { useNavigation } from '../store/navigation'
import { createTimeScale, formatYear } from '../store/timeScale'

const TRACK_W = 1040
const TRACK_H = 112 // Augmenté pour accueillir la frise plus robuste

export default function EpochView({ epochs }) {
  const goToEpoch = useNavigation((s) => s.goToEpoch)

  const minYear = Math.min(...epochs.map((e) => e.start))
  const maxYear = Math.max(...epochs.map((e) => e.end))
  const scale = createTimeScale(minYear, maxYear, TRACK_W - 40) // Marge pour la pointe de la flèche

  return (
    <section>
      <div className="mb-6">
        <h2 className="font-display text-3xl font-semibold text-ink">
          Cinq époques, une seule frise
        </h2>
        <p className="text-muted mt-1">
          Choisissez une époque pour explorer ses continents et civilisations.
        </p>
      </div>

      {/* Frise horizontale macromoderne */}
      <div className="card p-6 mb-8 overflow-x-auto bg-white shadow-sm border border-line/40 rounded-2xl">
        <div className="relative mx-auto" style={{ width: TRACK_W, height: TRACK_H }}>
          
          {/* Rail directionnel en arrière-plan (Effet Flèche Globale) */}
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-slate-100 rounded-l-full flex items-center justify-end pr-1"
            style={{ width: TRACK_W - 20, height: 16 }}
          >
            {/* Pointe de la flèche tout au bout à droite */}
            <svg 
              className="absolute left-full top-1/2 -translate-y-1/2 text-slate-100 fill-current"
              width="24" 
              height="24" 
              viewBox="0 0 24 24"
            >
              <path d="M8 4l8 8-8 8V4z" />
            </svg>
          </div>
          

          {epochs.map((epoch, i) => {
            const x1 = scale(epoch.start)
            const x2 = scale(epoch.end)
            // Minimum 110px de large pour éliminer le bug du texte tronqué de la capture d'écran
            const w = Math.max(x2 - x1, 110) 
            
            return (
              <motion.button
                key={epoch.id}
                onClick={() => goToEpoch(epoch)}
                initial={{ opacity: 0, scale: 0.95, y: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="absolute rounded-xl text-white text-left px-4 py-3 shadow-md border border-white/10 hoverable flex flex-col justify-center"
                style={{
                  left: x1,
                  width: w,
                  top: TRACK_H / 2 - 32, // Parfaitement centré sur le nouveau bouton de 64px
                  height: 64,
                  background: `linear-gradient(135deg, ${epoch.color}, ${epoch.color}dd)`,
                  backdropFilter: 'blur(4px)'
                }}
                title={epoch.label}
              >
                <span className="block text-xs font-bold leading-tight tracking-wide uppercase truncate">
                  {epoch.label}
                </span>
                <span className="block text-[11px] opacity-85 mt-0.5 tracking-wider truncate font-medium">
                  {formatYear(epoch.start)}
                </span>
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Grille de cartes */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {epochs.map((epoch, i) => {
          const civCount = epoch.continents.reduce(
            (n, c) => n + c.civilizations.length,
            0
          )
          return (
            <motion.button
              key={epoch.id}
              onClick={() => goToEpoch(epoch)}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="card hoverable text-left p-5 relative overflow-hidden group"
            >
              <span
                className="absolute top-0 left-0 h-1 w-full"
                style={{ background: epoch.color }}
              />
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: epoch.color }}
                />
                <span className="text-xs font-medium text-muted">
                  {formatYear(epoch.start)} → {formatYear(epoch.end)}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-ink group-hover:text-accent transition">
                {epoch.label}
              </h3>
              <p className="text-sm text-muted mt-1.5 line-clamp-3">
                {epoch.description}
              </p>
              <div className="mt-4 flex items-center gap-3 text-xs text-muted">
                <span className="px-2 py-1 rounded-lg bg-line/50">
                  {epoch.continents.length} continents
                </span>
                <span className="px-2 py-1 rounded-lg bg-line/50">
                  {civCount} civilisations
                </span>
              </div>
            </motion.button>
          )
        })}
      </div>
    </section>
  )
}
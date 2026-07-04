import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigation } from '../store/navigation'
import { createTimeScale, formatYear } from '../store/timeScale'

const TRACK_W = 1040
const TRACK_H = 112

export default function EpochView({ epochs }) {
  const goToEpoch = useNavigation((s) => s.goToEpoch)
  const [showWelcome, setShowWelcome] = useState(false)

  // Vérification de la première visite au chargement
  useEffect(() => {
    const hasVisited = localStorage.getItem('histomap_welcome_seen')
    if (!hasVisited) {
      setShowWelcome(true)
      localStorage.setItem('histomap_welcome_seen', 'true')
    }
  }, [])

  const minYear = Math.min(...epochs.map((e) => e.start))
  const maxYear = Math.max(...epochs.map((e) => e.end))
  const scale = createTimeScale(minYear, maxYear, TRACK_W - 40)

  return (
    <section className="relative">
      
      {/* En-tête avec titre et bouton d'exclamation */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-semibold text-ink">
            Cinq époques, une seule frise
          </h2>
          <p className="text-muted mt-1">
            Choisissez une époque pour explorer ses continents et civilisations.
          </p>
        </div>
        
        {/* Petit point d'exclamation interactif */}
        <button
          onClick={() => setShowWelcome(true)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-ink hover:bg-slate-200 shadow-sm transition"
          title="Afficher les explications"
        >
          <span className="font-display text-lg font-bold">!</span>
        </button>
      </div>

      {/* Frise horizontale macromoderne */}
      <div className="card p-6 mb-8 overflow-x-auto bg-white shadow-sm border border-line/40 rounded-2xl">
        <div className="relative mx-auto" style={{ width: TRACK_W, height: TRACK_H }}>
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-slate-100 rounded-l-full flex items-center justify-end pr-1"
            style={{ width: TRACK_W - 20, height: 16 }}
          >
            <svg className="absolute left-full top-1/2 -translate-y-1/2 text-slate-100 fill-current" width="24" height="24" viewBox="0 0 24 24">
              <path d="M8 4l8 8-8 8V4z" />
            </svg>
          </div>

          {epochs.map((epoch, i) => {
            const x1 = scale(epoch.start)
            const x2 = scale(epoch.end)
            const w = Math.max(x2 - x1, 110) 
            
            return (
              <motion.button
                key={epoch.id}
                onClick={() => goToEpoch(epoch)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="absolute rounded-xl text-white text-left px-4 py-3 shadow-md border border-white/10 hoverable flex flex-col justify-center"
                style={{
                  left: x1,
                  width: w,
                  top: TRACK_H / 2 - 32,
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
          const civCount = epoch.continents.reduce((n, c) => n + c.civilizations.length, 0)
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
              <span className="absolute top-0 left-0 h-1 w-full" style={{ background: epoch.color }} />
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: epoch.color }} />
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
                <span className="px-2 py-1 rounded-lg bg-line/50">{epoch.continents.length} continents</span>
                <span className="px-2 py-1 rounded-lg bg-line/50">{civCount} civilisations</span>
              </div>
            </motion.button>
          )
        })}
      </div>

      {/* FENÊTRE DE BIENVENUE IMPOSANTE (MODAL OVERLAY) */}
      {showWelcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-md">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="w-full max-w-lg bg-white rounded-2xl p-6 shadow-xl border border-line/50"
          >
            <div className="text-center mb-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent text-2xl font-bold mb-2">
                👋
              </span>
              <h3 className="font-display text-2xl font-bold text-ink">
                Bienvenue sur HistoMap !
              </h3>
            </div>

            <div className="text-sm text-muted space-y-3 leading-relaxed">
              <p>
                Bonjour ma femme ! Je t'envoie ce site parce que tu me dis souvent que tu souhaiterais apprendre mais tu ne sais pas par où commencer. J'ai donc développé une <strong>frise chronologique interactive</strong> pour cartographier et comparer l'histoire des grandes civilisations mondiales à travers les âges.
              </p>
              <p>
                Tu peux cliquer sur les différentes <strong>Époques</strong> pour zoomer, explorer les continents en parallèle, et cliquer sur les blocs pour ouvrir les fiches détaillées (Régimes politiques, innovations technologiques, guerres mythiques et grands personnages).
              </p>
              <p className="text-xs bg-slate-50 p-2.5 rounded-xl border border-line/40 text-center">
                J'espere que ca va t'aider à te lancer dans l'apprentissage de l'histoire ! Hâte de pouvoir discuter de GenGiskane avec toi !
              </p>
            </div>

            <div className="mt-6">
              <button
                onClick={() => setShowWelcome(false)}
                className="w-full py-3 px-4 rounded-xl bg-ink text-white font-medium hover:bg-ink/90 shadow-soft transition"
              >
                Découvrir la frise
              </button>
            </div>
          </motion.div>
        </div>
      )}

    </section>
  )
}
import { AnimatePresence, motion } from 'framer-motion'
import epochsData from './data/epochs.json'
import { useNavigation } from './store/navigation'
import Breadcrumb from './components/Breadcrumb'
import EpochView from './components/EpochView'
import ContinentsView from './components/ContinentsView'
import CivilizationView from './components/CivilizationView'

export default function App() {
  const view = useNavigation((s) => s.view)
  const selectedEpoch = useNavigation((s) => s.selectedEpoch)
  const selectedCiv = useNavigation((s) => s.selectedCiv)

  return (
    <div className="min-h-screen flex flex-col">
      {/* En-tête */}
      <header className="sticky top-0 z-30 glass border-b border-line">
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl2 grid place-items-center text-white font-display font-bold text-lg"
               style={{ background: 'linear-gradient(135deg,#4f7cff,#7c5cff)' }}>
            H
          </div>
          <div className="leading-tight">
            <h1 className="font-display text-xl font-semibold text-ink">HistoMap</h1>
            <p className="text-xs text-muted -mt-0.5">Frise interactive des civilisations</p>
          </div>
          <div className="ml-auto">
            <Breadcrumb />
          </div>
        </div>
      </header>

      {/* Contenu */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-5 py-6">
        <AnimatePresence mode="wait">
          {view === 'epochs' && (
            <motion.div
              key="epochs"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <EpochView epochs={epochsData} />
            </motion.div>
          )}

          {view === 'continents' && selectedEpoch && (
            <motion.div
              key="continents"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <ContinentsView epoch={selectedEpoch} />
            </motion.div>
          )}

          {view === 'civilization' && selectedCiv && (
            <motion.div
              key="civilization"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <CivilizationView civ={selectedCiv} epoch={selectedEpoch} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="text-center text-xs text-muted py-5">
        HistoMap · données 100 % locales · {epochsData.length} époques
      </footer>
    </div>
  )
}

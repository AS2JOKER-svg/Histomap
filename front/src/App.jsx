import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import AppShell from './layouts/AppShell'
import HomePage from './pages/HomePage'

// Les sections sont chargées à la demande : l'accueil reste léger.
const TimelinePage = lazy(() => import('./pages/TimelinePage'))
const EpochPage = lazy(() => import('./pages/EpochPage'))
const CivilizationPage = lazy(() => import('./pages/CivilizationPage'))
const MapPage = lazy(() => import('./pages/MapPage'))
const RevisePage = lazy(() => import('./pages/RevisePage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

/**
 * Plan du site
 *   /                         Accueil (hub)
 *   /frise                    Frise des époques
 *   /frise/:epochId           Une époque : continents et civilisations
 *   /frise/:epochId/:civId    Fiche d'une civilisation
 *   /carte                    Carte du monde (sprint 3)
 *   /reviser                  « On avance » — révisions et quiz (sprints 5-6)
 */
export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="frise" element={<Lazy><TimelinePage /></Lazy>} />
        <Route path="frise/:epochId" element={<Lazy><EpochPage /></Lazy>} />
        <Route path="frise/:epochId/:civId" element={<Lazy><CivilizationPage /></Lazy>} />
        <Route path="carte" element={<Lazy><MapPage /></Lazy>} />
        <Route path="reviser" element={<Lazy><RevisePage /></Lazy>} />
        <Route path="*" element={<Lazy><NotFoundPage /></Lazy>} />
      </Route>
    </Routes>
  )
}

function Lazy({ children }) {
  return <Suspense fallback={<PageSkeleton />}>{children}</Suspense>
}

function PageSkeleton() {
  return (
    <div className="animate-pulse space-y-4" aria-busy="true" aria-label="Chargement">
      <div className="h-4 w-32 rounded bg-surface2" />
      <div className="h-9 w-2/3 rounded-lg bg-surface2" />
      <div className="h-40 rounded-xl2 bg-surface2" />
    </div>
  )
}

import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import AppShell from './layouts/AppShell'
import AventurePage from './pages/AventurePage'
import { AtlasRedirect } from './components/AtlasSwitch'

// Les sections sont chargées à la demande : l'accueil reste léger.
const TimelinePage = lazy(() => import('./pages/TimelinePage'))
const EpochPage = lazy(() => import('./pages/EpochPage'))
const CivilizationPage = lazy(() => import('./pages/CivilizationPage'))
const MapPage = lazy(() => import('./pages/MapPage'))
const ProfilPage = lazy(() => import('./pages/ProfilPage'))
const MondesPage = lazy(() => import('./pages/MondesPage'))
const ChapterPage = lazy(() => import('./pages/ChapterPage'))
const QuizPage = lazy(() => import('./pages/QuizPage'))
const WarsPage = lazy(() => import('./pages/WarsPage'))
const WarDossierPage = lazy(() => import('./pages/WarDossierPage'))
const SearchPage = lazy(() => import('./pages/SearchPage'))
const EntityPage = lazy(() => import('./pages/EntityPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

/**
 * Plan du site
 *   /                         Aventure : le parcours (?monde=<époque>) — onglet par défaut (V3)
 *   /aventure/mondes          Les cinq mondes (avancement, titres, verrous)
 *   /atlas                    Atlas : ouvre la dernière vue (Frise ou Carte)
 *   /profil                   Profil : niveau, série, titres, fils rouges
 *   /frise                    Frise des époques (Atlas)
 *   /frise/:epochId           Une époque : continents et civilisations
 *   /frise/:epochId/:civId    Fiche d'une civilisation (?onglet=histoire|dirigeants|societe|guerres|carte)
 *   /fiche/:id                Fiche liée : personne, événement, découverte
 *   /carte                    Carte du monde (?annee=…&civ=…)
 *   /guerres                  Guerres, par époque (?epoque=…, ?guerre=<clé> ouvre l'aperçu)
 *   /recherche                Recherche globale (?q=…)
 *   /reviser                  ancien hub « Réviser » → Aventure
 *   /reviser/:epochId         ancien choix de chapitre → Aventure, monde de cette époque
 *   /reviser/:epochId/:civId  Chapitre : cartes à faire glisser (plein écran)
 *   /reviser/:epochId/:civId/quiz  Quiz du chapitre : 20 questions, note sur 20
 */
export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<AventurePage />} />
        <Route path="aventure" element={<Navigate to="/" replace />} />
        <Route path="aventure/mondes" element={<Lazy><MondesPage /></Lazy>} />
        <Route path="atlas" element={<AtlasRedirect />} />
        <Route path="profil" element={<Lazy><ProfilPage /></Lazy>} />
        <Route path="frise" element={<Lazy><TimelinePage /></Lazy>} />
        <Route path="frise/:epochId" element={<Lazy><EpochPage /></Lazy>} />
        <Route path="frise/:epochId/:civId" element={<Lazy><CivilizationPage /></Lazy>} />
        <Route path="fiche/:id" element={<Lazy><EntityPage /></Lazy>} />
        <Route path="carte" element={<Lazy><MapPage /></Lazy>} />
        <Route path="guerres" element={<Lazy><WarsPage /></Lazy>} />
        <Route path="guerres/:id" element={<Lazy><WarDossierPage /></Lazy>} />
        <Route path="recherche" element={<Lazy><SearchPage /></Lazy>} />
        <Route path="reviser" element={<Navigate to="/" replace />} />
        <Route path="reviser/:epochId" element={<RedirectMonde />} />
        <Route path="reviser/:epochId/:civId" element={<Lazy><ChapterPage /></Lazy>} />
        <Route path="reviser/:epochId/:civId/quiz" element={<Lazy><QuizPage /></Lazy>} />
        <Route path="*" element={<Lazy><NotFoundPage /></Lazy>} />
      </Route>
    </Routes>
  )
}

/** Ancien lien #/reviser/<époque> → l'Aventure, sur le monde de cette époque. */
function RedirectMonde() {
  const { epochId } = useParams()
  return <Navigate to={`/?monde=${epochId}`} replace />
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

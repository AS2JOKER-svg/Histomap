import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import AppShell from './layouts/AppShell'
import AventurePage from './pages/AventurePage'
import { AtlasRedirect } from './components/AtlasSwitch'
import { PARCOURS_AVENTURE, useProgress } from './store/progress'
import { estTronc } from './lib/aventure'

// Les sections sont chargées à la demande : l'accueil reste léger.
const TimelinePage = lazy(() => import('./pages/TimelinePage'))
const EpochPage = lazy(() => import('./pages/EpochPage'))
const CivilizationPage = lazy(() => import('./pages/CivilizationPage'))
const MapPage = lazy(() => import('./pages/MapPage'))
const ProfilPage = lazy(() => import('./pages/ProfilPage'))
const FilRougePage = lazy(() => import('./pages/FilRougePage'))
const SallePage = lazy(() => import('./pages/SallePage'))
const BienvenuePage = lazy(() => import('./pages/BienvenuePage'))
const ARevoirPage = lazy(() => import('./pages/ARevoirPage'))
const DefisPage = lazy(() => import('./pages/DefisPage'))
const DefiPage = lazy(() => import('./pages/DefiPage'))
const DeuxJoueursPage = lazy(() => import('./pages/DeuxJoueursPage'))
const EntrainementPage = lazy(() => import('./pages/EntrainementPage'))
const WarsPage = lazy(() => import('./pages/WarsPage'))
const WarDossierPage = lazy(() => import('./pages/WarDossierPage'))
const SearchPage = lazy(() => import('./pages/SearchPage'))
const EntityPage = lazy(() => import('./pages/EntityPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

/**
 * Plan du site
 *   /                         Aventure : la carte du parcours (?salle=<id>, ?annexes=<id>, ?monde=<époque>) — onglet par défaut
 *   /aventure/mondes          ancienne page des cinq mondes (V3) → /
 *   /aventure/a-revoir/:civId Séance « À revoir » d'une salle (cartes à revoir + questions ratées)
 *   /bienvenue                Premier lancement : fil rouge, 3 questions, première récompense
 *   /defis                    Défis : par lien, à deux sur le même téléphone, quiz infini
 *   /defi/:civId              Défi par lien (?g=graine&s=score&n=prénom : défi reçu)
 *   /defis/a-deux             Défi à deux sur le même téléphone
 *   /entrainement             Quiz infini (sans enjeu)
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
 *   /aventure/salle/:civId/:etape  Une étape d'une salle : decouvrir | approfondir | epreuve (plein écran)
 *   /reviser/:epochId/:civId  ancien chapitre → étape Découvrir ou Approfondir de la salle
 *   /reviser/:epochId/:civId/quiz  ancien quiz → Épreuve de la salle
 */
export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<AventurePage />} />
        <Route path="aventure" element={<Navigate to="/" replace />} />
        <Route path="aventure/mondes" element={<Navigate to="/" replace />} />
        <Route path="aventure/salle/:civId/:etape" element={<Lazy><SallePage /></Lazy>} />
        <Route path="aventure/a-revoir/:civId" element={<Lazy><ARevoirPage /></Lazy>} />
        <Route path="aventure/fil-rouge" element={<Lazy><FilRougePage /></Lazy>} />
        <Route path="bienvenue" element={<Lazy><BienvenuePage /></Lazy>} />
        <Route path="defis" element={<Lazy><DefisPage /></Lazy>} />
        <Route path="defis/a-deux" element={<Lazy><DeuxJoueursPage /></Lazy>} />
        <Route path="defi/:civId" element={<Lazy><DefiPage /></Lazy>} />
        <Route path="entrainement" element={<Lazy><EntrainementPage /></Lazy>} />
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
        <Route path="reviser/:epochId/:civId" element={<RedirectEtape />} />
        <Route path="reviser/:epochId/:civId/quiz" element={<RedirectEtape quiz />} />
        <Route path="*" element={<Lazy><NotFoundPage /></Lazy>} />
      </Route>
    </Routes>
  )
}

/**
 * Ancien lien de chapitre (#/reviser/<époque>/<civ>) ou de quiz (…/quiz) → la bonne étape de la salle :
 * le quiz devient l'Épreuve, le chapitre Découvrir (ou Approfondir dans une salle du tronc déjà découverte).
 * Si l'étape n'est pas accessible, SallePage renvoie au panneau de la salle, qui explique le verrou.
 */
function RedirectEtape({ quiz }) {
  const { civId } = useParams()
  const decouverte = useProgress((s) => !!s.aventure.salles[civId]?.decouverte)
  const etape = quiz ? 'epreuve' : decouverte && estTronc(PARCOURS_AVENTURE, civId) ? 'approfondir' : 'decouvrir'
  return <Navigate to={`/aventure/salle/${civId}/${etape}`} replace />
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

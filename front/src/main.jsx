import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import App from './App'
import './store/preferences' // applique le thème au démarrage
import './index.css'

// HashRouter : les URLs (#/frise/antiquite/egypte) fonctionnent sur GitHub Pages
// sans configuration serveur, et le bouton « retour » du téléphone marche.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </HashRouter>
  </StrictMode>
)

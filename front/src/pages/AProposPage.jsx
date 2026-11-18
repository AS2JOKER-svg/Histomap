import { getStats } from '../lib/data'
import MAP_YEARS from '../data/map-years.json'
import SousPage, { LigneLien, TitreSection } from '../components/profil/SousPage'

/**
 * À propos et licences (V3.1, sprint 32, décision 21) : ce qu'est HistoMap, où va ta progression,
 * et les licences de ce qui n'a pas été écrit pour l'app (cartes, polices, bibliothèques).
 * dist/licences.txt est généré au build (vite.config.js → licences()) : il n'existe pas en développement.
 */
const BASE = import.meta.env.BASE_URL

export default function AProposPage() {
  const stats = getStats()
  return (
    <SousPage titre="À propos" retour="/profil/reglages" retourLabel="Retour aux réglages">
      <div className="space-y-3 text-[15px] leading-relaxed text-ink">
        <p>
          <strong>HistoMap</strong> raconte l’histoire du monde, de la Préhistoire à nos jours : {stats.civs} civilisations, une carte du monde à {MAP_YEARS.length} dates et des
          dossiers de guerre. Une application de KnightBorn Studio.
        </p>
        <p>Les textes sont écrits pour HistoMap. Les fiches renvoient à leurs sources, le plus souvent Wikipédia, pour aller plus loin.</p>
        <p>Pas de compte, pas de statistiques d’utilisation : ta progression reste sur cet appareil, dans ce navigateur. Effacer les données du site l’efface aussi.</p>
        <p>Les sons et la musique sont créés dans l’application, sans aucun fichier son.</p>
      </div>

      <section aria-labelledby="ap-licences" className="mt-6">
        <TitreSection id="ap-licences" className="mb-2">Licences</TitreSection>
        <dl className="space-y-3 text-sm leading-relaxed">
          <Entree titre="Frontières historiques">
            Projet <em>historical-basemaps</em> d’André Ourednik et ses contributeurs, sous licence GNU GPL 3.0. Fichiers simplifiés et convertis pour HistoMap. Les frontières
            anciennes sont approximatives.
          </Entree>
          <Entree titre="Terres émergées">Natural Earth (domaine public), au format TopoJSON du projet world-atlas (licence ISC).</Entree>
          <Entree titre="Polices">Cormorant Garamond et DM Sans, sous licence SIL Open Font License 1.1 (Google Fonts).</Entree>
          <Entree titre="Bibliothèques">
            React, React Router, Framer Motion et Zustand (licence MIT) ; D3 et TopoJSON (licences ISC et BSD), et leurs dépendances. La liste complète, avec le texte de chaque
            licence, est dans le fichier des licences.
          </Entree>
        </dl>
      </section>

      <nav aria-label="Textes des licences" className="mt-4 border-t border-line">
        <LigneLien href={`${BASE}licences.txt`} titre="Licences des bibliothèques" detail="Fichier texte, inclus dans l’application" />
        <LigneLien href="https://github.com/aourednik/historical-basemaps" titre="historical-basemaps" detail="Les données d’origine des frontières" />
        <LigneLien href="https://www.gnu.org/licenses/gpl-3.0.html" titre="Licence GNU GPL 3.0" detail="gnu.org" />
        <LigneLien href="https://openfontlicense.org" titre="SIL Open Font License 1.1" detail="openfontlicense.org" />
      </nav>
    </SousPage>
  )
}

function Entree({ titre, children }) {
  return (
    <div>
      <dt className="font-semibold text-ink">{titre}</dt>
      <dd className="text-muted">{children}</dd>
    </div>
  )
}

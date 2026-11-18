import { useId, useState } from 'react'
import { useAudio } from '../store/audio'
import { usePreferences } from '../store/preferences'
import { canVibrate, testerVibrations } from '../lib/haptics'
import Icon from '../components/ui/Icon'
import SousPage, { LigneLien, TitreSection } from '../components/profil/SousPage'
import AppCard from '../components/app/AppCard'

/**
 * Réglages (V3.1, sprint 32, maquette 16, décision 21) : sons, musique, vibrations (interrupteur, « Tester »,
 * mode silencieux d'Android), thème clair ou « Musée de nuit », application (installation, cartes hors ligne),
 * présentation, à propos et licences. Les notifications arrivent au sprint 33.
 * Musique, thème et présentation étaient dans l'en-tête jusqu'au sprint 31 (décision 18).
 */
export default function ReglagesPage() {
  const { sons, musique, vibrations, setSons, setMusique, setVibrations } = useAudio()
  const theme = usePreferences((s) => s.theme)
  const resolved = usePreferences((s) => s.resolved)
  const setTheme = usePreferences((s) => s.setTheme)
  const [essai, setEssai] = useState(null) // null | 'envoye' | 'impossible'
  const peutVibrer = canVibrate()

  return (
    <SousPage titre="Réglages">
      <section aria-labelledby="reg-sons">
        <TitreSection id="reg-sons" className="mb-0.5">Sons et vibrations</TitreSection>
        <div className="border-t border-line">
          <Interrupteur titre="Sons de l’interface" detail="Cartes, bonnes réponses, étoiles, rangs" actif={sons} onChange={setSons} />
          <Interrupteur titre="Musique d’ambiance" detail="Une ambiance par région du monde, créée dans l’app" actif={musique} onChange={setMusique} />
          <Interrupteur
            titre="Vibrations"
            detail={peutVibrer ? 'Bonnes réponses, erreurs, étoiles, rangs' : 'Cet appareil ou ce navigateur ne sait pas vibrer'}
            actif={vibrations}
            onChange={setVibrations}
            bordure={false}
            avant={
              <button onClick={() => setEssai(testerVibrations() ? 'envoye' : 'impossible')} disabled={!vibrations} className="btn-secondary h-11 px-3.5 shrink-0" aria-label="Tester les vibrations">
                Tester
              </button>
            }
          />
          <p className="pb-3 border-b border-line text-xs text-muted leading-relaxed">
            Sur Android, le navigateur ne fait pas vibrer le téléphone en mode silencieux : passe en mode sonnerie ou vibreur pour sentir les vibrations. Sur iPhone, les vibrations ne sont pas disponibles.
            {essai && (
              <span role="status" className="block mt-1.5 text-sm text-ink">
                {essai === 'envoye' ? 'Vibration envoyée. Rien senti ? Vérifie que le téléphone n’est pas en mode silencieux.' : 'Cet appareil ou ce navigateur ne sait pas vibrer.'}
              </span>
            )}
          </p>
        </div>
      </section>

      <section aria-labelledby="reg-theme" className="mt-6">
        <TitreSection id="reg-theme" className="mb-2">Thème</TitreSection>
        <fieldset className="grid grid-cols-2">
          <legend className="sr-only">Thème de l’application</legend>
          {[
            ['light', 'Clair', 'sun'],
            ['dark', 'Musée de nuit', 'moon'],
          ].map(([valeur, label, icone]) => {
            const choisi = resolved === valeur
            return (
              <label
                key={valeur}
                className={`min-h-[48px] flex items-center justify-center gap-2 text-sm cursor-pointer has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent has-[:focus-visible]:outline-offset-2 ${
                  choisi ? 'bg-ink text-bg font-bold' : 'border border-ink text-ink font-semibold'
                }`}
              >
                <input type="radio" name="theme" value={valeur} checked={choisi} onChange={() => setTheme(valeur)} className="sr-only" />
                <Icon name={icone} size={16} />
                {label}
              </label>
            )
          })}
        </fieldset>
        {theme === 'system' && <p className="mt-2 text-xs text-muted">Pour l’instant, HistoMap suit le thème du téléphone.</p>}
      </section>

      <AppCard />

      <section aria-label="Aide et informations" className="mt-4">
        <LigneLien to="/bienvenue" titre="Revoir la présentation" />
        <LigneLien to="/profil/a-propos" titre="À propos et licences" />
      </section>
    </SousPage>
  )
}

/** Ligne avec un interrupteur (role="switch", nommé par son titre, décrit par son détail) ; `avant` = bouton placé avant (« Tester »). */
function Interrupteur({ titre, detail, actif, onChange, avant, bordure = true }) {
  const id = useId()
  return (
    <div className={`min-h-[60px] py-2 flex items-center gap-3 ${bordure ? 'border-b border-line' : ''}`}>
      <span className="flex-1 min-w-0">
        <label id={`${id}-titre`} htmlFor={id} className="block font-semibold text-ink cursor-pointer">
          {titre}
        </label>
        {detail && (
          <span id={`${id}-detail`} className="block text-xs text-muted">
            {detail}
          </span>
        )}
      </span>
      {avant}
      <button id={id} type="button" role="switch" aria-checked={actif} aria-labelledby={`${id}-titre`} aria-describedby={detail ? `${id}-detail` : undefined} onClick={() => onChange(!actif)} className="shrink-0 w-[52px] h-11 grid place-items-center rounded-full">
        <span aria-hidden="true" className="w-[50px] h-[30px] rounded-full p-[3px] transition-colors" style={{ background: actif ? 'rgb(var(--c-accent-btn))' : 'rgb(var(--c-muted) / .75)' }}>
          <span className={`block w-6 h-6 rounded-full bg-surface shadow-soft transition-transform ${actif ? 'translate-x-5' : ''}`} />
        </span>
      </button>
    </div>
  )
}

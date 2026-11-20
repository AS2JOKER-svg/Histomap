import { useEffect, useId, useState } from 'react'
import { useAudio } from '../store/audio'
import { usePreferences } from '../store/preferences'
import { canVibrate, testerVibrations } from '../lib/haptics'
import { changerReglages, disponibilite, lireReglages } from '../lib/notifications'
import { HEURES } from '../lib/rappels'
import Icon from '../components/ui/Icon'
import SousPage, { LigneLien, TitreSection } from '../components/profil/SousPage'
import AppCard from '../components/app/AppCard'

/**
 * Réglages (V3.1, sprint 32, maquette 16, décision 21) : sons, musique, vibrations (interrupteur, « Tester »,
 * mode silencieux d'Android), thème clair ou « Musée de nuit », notifications (sprint 33 : rappel du jour, heure,
 * série en danger ; l'autorisation n'est demandée qu'ici), application (installation, cartes hors ligne),
 * présentation, à propos et licences.
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

      <Notifications />

      <AppCard />

      <section aria-label="Aide et informations" className="mt-4">
        <LigneLien to="/bienvenue" titre="Revoir la présentation" />
        <LigneLien to="/profil/a-propos" titre="À propos et licences" />
      </section>
    </SousPage>
  )
}

// Pourquoi les rappels ne sont pas possibles ici (lib/notifications.js, disponibilite)
const SANS_RAPPELS = {
  non: 'Pas de rappels sur cet appareil ou dans ce navigateur : ils marchent sur Android, dans l’application installée.',
  installer: 'Installe l’application pour recevoir les rappels.',
  bloquees: 'Les notifications de HistoMap sont bloquées : pour recevoir les rappels, autorise-les dans les réglages du téléphone.',
}

/**
 * Notifications (sprint 33, maquette 16, décision 25) : rappel du jour, heure, série en danger. Éteintes au départ ;
 * allumer un interrupteur demande l'autorisation du téléphone. Grisées quand les rappels sont impossibles.
 */
function Notifications() {
  const [reglages, setReglages] = useState(lireReglages)
  const [dispo, setDispo] = useState(null) // null tant qu'on vérifie, puis 'non' | 'installer' | 'bloquees' | 'ok'
  const [refus, setRefus] = useState(false)
  const [occupe, setOccupe] = useState(false)
  const idHeure = useId()

  useEffect(() => {
    let vivant = true
    const verifier = () => disponibilite().then((d) => vivant && setDispo(d))
    verifier()
    // retour depuis les réglages du téléphone (notifications autorisées ou bloquées entre-temps)
    document.addEventListener('visibilitychange', verifier)
    return () => {
      vivant = false
      document.removeEventListener('visibilitychange', verifier)
    }
  }, [])

  const possible = dispo === 'ok'
  const changer = async (changement) => {
    if (occupe) return
    setOccupe(true)
    setRefus(false)
    const r = await changerReglages(changement)
    setReglages(lireReglages())
    setOccupe(false)
    if (!r.ok) {
      setRefus(true)
      setDispo(await disponibilite())
    }
  }

  return (
    <section aria-labelledby="reg-notif" className="mt-6">
      <TitreSection id="reg-notif" className="mb-0.5">Notifications</TitreSection>
      <div className="border-t border-line">
        <Interrupteur titre="Rappel du jour" detail="Si tu n’as pas encore joué" actif={possible && reglages.rappel} onChange={(oui) => changer({ rappel: oui })} desactive={!possible} />
        <div className="min-h-[60px] py-2 flex items-center gap-3 border-b border-line">
          <label htmlFor={idHeure} className="flex-1 font-semibold text-ink">
            À partir de
          </label>
          <select
            id={idHeure}
            value={reglages.heure}
            onChange={(e) => changer({ heure: Number(e.target.value) })}
            disabled={!possible || !(reglages.rappel || reglages.serie)}
            className="h-11 pl-3 pr-2 border border-muted bg-surface text-ink font-bold disabled:opacity-50"
          >
            {HEURES.map((h) => (
              <option key={h} value={h}>
                {h} h
              </option>
            ))}
          </select>
        </div>
        <Interrupteur titre="Série en danger" detail="Le soir, si ta série va s’arrêter" actif={possible && reglages.serie} onChange={(oui) => changer({ serie: oui })} desactive={!possible} bordure={false} />
        <div className="pb-3 border-b border-line text-xs text-muted leading-relaxed">
          {dispo && !possible && <p className="mb-1.5 text-sm text-ink">{SANS_RAPPELS[dispo]}</p>}
          <p>Deux par jour au plus, jamais entre 21 h et 8 h. Sur Android, dans l’application installée ; l’heure exacte n’est pas garantie.</p>
          <p role="status" className="empty:hidden mt-1.5 text-sm text-ink">
            {refus && dispo !== 'bloquees' ? 'Sans ton autorisation, HistoMap ne peut pas t’envoyer de rappel.' : ''}
          </p>
        </div>
      </div>
    </section>
  )
}

/**
 * Ligne avec un interrupteur (role="switch", nommé par son titre, décrit par son détail) ; `avant` = bouton placé avant
 * (« Tester ») ; `desactive` = grisé (rappels impossibles sur cet appareil).
 */
function Interrupteur({ titre, detail, actif, onChange, avant, bordure = true, desactive = false }) {
  const id = useId()
  return (
    <div className={`min-h-[60px] py-2 flex items-center gap-3 ${bordure ? 'border-b border-line' : ''}`}>
      <span className="flex-1 min-w-0">
        <label id={`${id}-titre`} htmlFor={id} className={`block font-semibold text-ink ${desactive ? '' : 'cursor-pointer'}`}>
          {titre}
        </label>
        {detail && (
          <span id={`${id}-detail`} className="block text-xs text-muted">
            {detail}
          </span>
        )}
      </span>
      {avant}
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={actif}
        aria-labelledby={`${id}-titre`}
        aria-describedby={detail ? `${id}-detail` : undefined}
        disabled={desactive}
        onClick={() => onChange(!actif)}
        className="shrink-0 w-[52px] h-11 grid place-items-center rounded-full disabled:opacity-50"
      >
        <span aria-hidden="true" className="w-[50px] h-[30px] rounded-full p-[3px] transition-colors" style={{ background: actif ? 'rgb(var(--c-accent-btn))' : 'rgb(var(--c-muted) / .75)' }}>
          <span className={`block w-6 h-6 rounded-full bg-surface shadow-soft transition-transform ${actif ? 'translate-x-5' : ''}`} />
        </span>
      </button>
    </div>
  )
}

import { useEffect } from 'react'
import { Link, useLocation, useOutlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import { haptic } from '../lib/haptics'
import Icon from '../components/ui/Icon'
import ThemeToggle from '../components/ui/ThemeToggle'
import RefSheet from '../components/RefSheet'
import Toaster from '../components/Toaster'
import AppBanner from '../components/app/AppBanner'
import { useAudio } from '../store/audio'

// Barre à 4 onglets (V3, sprint 19). `match` : débuts d'adresse qui allument l'onglet.
export const NAV = [
  { to: '/',        label: 'Aventure', icon: 'compass', match: ['/aventure', '/reviser', '/defis', '/defi', '/entrainement', '/bienvenue'], exact: '/' },
  { to: '/atlas',   label: 'Atlas',    icon: 'atlas',   match: ['/atlas', '/frise', '/carte', '/fiche', '/recherche'] },
  { to: '/guerres', label: 'Guerres',  icon: 'swords',  match: ['/guerres'] },
  { to: '/profil',  label: 'Profil',   icon: 'user',    match: ['/profil'] },
]

/** L'onglet est-il actif pour cette adresse ? */
export const isNavActive = (item, pathname) =>
  pathname === item.exact || item.match.some((m) => pathname === m || pathname.startsWith(m + '/'))

/**
 * Coque de l'application :
 *   - en-tête collant (logo, navigation desktop, thème)
 *   - barre d'onglets en bas sur mobile
 *   - transition douce entre les pages + retour en haut de page
 */
export default function AppShell() {
  const { pathname } = useLocation()
  const outlet = useOutlet()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 btn-primary">
        Aller au contenu
      </a>

      <header className="sticky top-0 z-30 glass border-b border-line/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2.5 rounded-xl" aria-label="HistoMap — Aventure">
            <span
              className="w-9 h-9 rounded-xl grid place-items-center text-white font-display font-bold text-lg shadow-soft"
              style={{ backgroundImage: 'linear-gradient(135deg, rgb(var(--c-accent)), rgb(var(--c-accent-2)))' }}
            >
              H
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold text-ink">HistoMap</span>
              <span className="hidden sm:block text-[11px] text-muted -mt-0.5">L'histoire du monde, en un coup d'œil</span>
            </span>
          </Link>

          <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-1 mx-auto bg-surface2/70 p-1 rounded-2xl">
            {NAV.map((item) => {
              const isActive = isNavActive(item, pathname)
              return (
              <Link key={item.to} to={item.to} aria-current={isActive ? 'page' : undefined} className="relative">
                  <span
                    className={`relative z-10 flex items-center gap-2 px-4 h-9 rounded-xl text-sm font-medium transition-colors ${
                      isActive ? 'text-ink' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-desktop"
                        className="absolute inset-0 -z-10 rounded-xl bg-surface shadow-soft"
                        transition={{ type: 'spring', stiffness: 500, damping: 38 }}
                      />
                    )}
                    <Icon name={item.icon} size={18} />
                    {item.label}
                  </span>
              </Link>
              )
            })}
          </nav>

          <div className="ml-auto md:ml-0 flex items-center gap-1">
            <Link to="/recherche" className="btn-icon" aria-label="Rechercher" title="Rechercher">
              <Icon name="search" />
            </Link>
            <Link to="/bienvenue" className="btn-icon" aria-label="Présentation de HistoMap" title="Présentation">
              <Icon name="info" />
            </Link>
            <BoutonMusique />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <AppBanner />

      <main id="contenu" className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-[calc(theme(spacing.tabbar)+1.5rem)] md:pb-10">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {outlet}
        </motion.div>
      </main>

      <footer className="hidden md:block text-center text-xs text-muted py-6 border-t border-line/60">
        HistoMap · un projet pour apprendre l'histoire, une époque à la fois
      </footer>

      <MobileTabBar />
      <RefSheet />
      <Toaster />
    </div>
  )
}

/** Musique d'ambiance (coupée par défaut) : un geste pour l'activer ou la couper. */
function BoutonMusique() {
  const musique = useAudio((s) => s.musique)
  const setMusique = useAudio((s) => s.setMusique)
  return (
    <button
      onClick={() => setMusique(!musique)}
      aria-pressed={musique}
      className={`btn-icon relative ${musique ? 'text-accent' : ''}`}
      aria-label={musique ? 'Couper la musique d’ambiance' : 'Activer la musique d’ambiance'}
      title={musique ? 'Musique : activée' : 'Musique : coupée'}
    >
      <Icon name="music" />
      {!musique && <span aria-hidden="true" className="absolute w-6 h-[2px] bg-current rotate-45 rounded" />}
    </button>
  )
}

function MobileTabBar() {
  const { pathname } = useLocation()
  return (
    <nav
      aria-label="Navigation principale"
      className="md:hidden fixed bottom-0 inset-x-0 z-30 glass border-t border-line/70 pb-safe"
    >
      <ul className="grid grid-cols-4 h-[4.25rem] px-1">
        {NAV.map((item) => {
          const isActive = isNavActive(item, pathname)
          return (
          <li key={item.to}>
            <Link
              to={item.to}
              aria-current={isActive ? 'page' : undefined}
              onClick={() => haptic('tap')}
              className="h-full flex flex-col items-center justify-center gap-1 text-[11px] font-medium"
            >
                <>
                  <span className={`relative grid place-items-center w-12 h-8 rounded-full transition-colors ${isActive ? 'text-accent' : 'text-muted'}`}>
                    {isActive && (
                      <motion.span
                        layoutId="nav-mobile"
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: 'rgb(var(--c-accent) / .12)' }}
                        transition={{ type: 'spring', stiffness: 500, damping: 38 }}
                      />
                    )}
                    <Icon name={item.icon} size={22} className="relative" />
                  </span>
                  <span className={isActive ? 'text-ink' : 'text-muted'}>{item.label}</span>
                </>
            </Link>
          </li>
          )
        })}
      </ul>
    </nav>
  )
}

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useSearchParams } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { findCivilization } from '../lib/data'
import { haptic } from '../lib/haptics'
import useDocumentTitle from '../lib/useDocumentTitle'
import { REVISION, avancementMonde, cheminDe, etapeSuivante, listeARevoir, nomCourt, porteMonde, revisionDue, salleDe, salleEnCours, titresObtenus } from '../lib/aventure'
import { GEO, disposerCarte, modeleCarte } from '../lib/carteParcours'
import { niveau } from '../lib/xp'
import { PARCOURS_AVENTURE as P, useProgress } from '../store/progress'
import { useAmbiance } from '../lib/musique'
import Icon from '../components/ui/Icon'
import CarteParcours from '../components/aventure/CarteParcours'
import SalleSheet from '../components/aventure/SalleSheet'
import AnnexesSheet from '../components/aventure/AnnexesSheet'
import { lienEtape } from '../components/aventure/liens'

/**
 * Aventure (onglet par défaut) — V3.1, sprint 30 : la carte du parcours, de bas (Préhistoire) en haut (arrivée).
 * En haut : niveau et XP seulement. La carte s'ouvre sur la salle en cours (« Jouer » sous son nom) ; « Ma salle »
 * y ramène quand on s'en éloigne. Quand une salle vient de s'ouvrir, la carte part de la précédente et le tracé
 * doré avance jusqu'à la nouvelle.
 *   ?salle=<id>      ouvre le panneau d'une salle (et centre la carte dessus)
 *   ?annexes=<id>    liste des annexes d'un îlot replié (« +N »)
 *   ?monde=<époque>  centre la carte sur la porte d'un monde (anciens liens #/reviser/<époque> compris)
 */
const ROMAIN = ['I', 'II', 'III', 'IV', 'V']
const LARGEUR_MAX = 480
const nomDe = (id) => findCivilization(id)?.civ.label ?? id
const aujourdhui = () => {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}
const mouvementReduit = () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

// Salle en cours lors de la dernière visite de la carte (dans cette session) : sert à animer la progression.
let derniereSalleVue = null

export default function AventurePage() {
  useDocumentTitle('Aventure')
  const av = useProgress((s) => s.aventure)
  const commencer = useProgress((s) => s.commencerEtape)
  const chapters = useProgress((s) => s.chapters)
  const quizzes = useProgress((s) => s.quizzes)
  const [params, setParams] = useSearchParams()

  const enCours = salleEnCours(P, av)
  const ch = cheminDe(P, av)
  useAmbiance(enCours ?? ch.at(-1))
  const n = niveau(av.xp)

  // Séance « À revoir » due : une bulle à côté de la salle en cours (une par jour)
  const due = revisionDue(listeARevoir(chapters, quizzes), av.aRevoirJour === aujourdhui())

  // Largeur de la carte (pleine largeur sur téléphone, 480 px au plus)
  const refBoite = useRef(null)
  const [largeur, setLargeur] = useState(null)
  useLayoutEffect(() => {
    const el = refBoite.current
    if (!el) return
    const mesurer = () => setLargeur(Math.min(LARGEUR_MAX, Math.round(el.clientWidth)))
    mesurer()
    const ro = new ResizeObserver(mesurer)
    ro.observe(el)
    return () => ro.disconnect()
  }, [av.onboarding])

  const salles = useMemo(() => modeleCarte(P, av, { nom: nomDe, revoir: !!due }), [av, due])
  const carte = useMemo(() => (largeur ? disposerCarte(salles, { largeur, mondes: P.mondes.length }) : null), [salles, largeur])

  const titres = useMemo(() => new Set(titresObtenus(P, av).map((t) => t.id)), [av])
  const mondes = P.mondes.map((m, w) => {
    const a = avancementMonde(P, av, w)
    const porte = a.ouvert ? null : porteMonde(P, av, w)
    const info = porte
      ? `S’ouvre après ${nomCourt(P, porte, nomDe(porte))}`
      : `${w === 0 ? 'Départ · ' : ''}${a.decouvertes} / ${a.salles} salles découvertes${titres.has(`monde:${m.epoque}`) ? ' · titre obtenu' : ''}`
    return { theme: m.theme, nom: m.nom, num: ROMAIN[w], info, verrou: !!porte }
  })
  const arrivee = {
    titre: P.data.titreUltime,
    texte: `Titre ultime : au moins ★ dans les ${P.ordre.length} salles`,
    faites: P.ordre.filter((id) => salleDe(av, id).etoiles >= 1).length,
    total: P.ordre.length,
  }

  // Progression depuis la dernière visite : le tracé doré part de l'ancienne salle en cours
  const [depart] = useState(() => derniereSalleVue)
  useEffect(() => {
    derniereSalleVue = enCours
  }, [enCours])
  const iDepart = depart && depart !== enCours ? ch.indexOf(depart) : -1
  const iCours = enCours ? ch.indexOf(enCours) : ch.length
  const traceDe = carte && iDepart >= 0 && iDepart < iCours && !params.get('salle') ? carte.rangRoute[iDepart] : null

  // Centrage : sur la salle demandée, la porte d'un monde, sinon la salle en cours (en partant de l'ancienne)
  const refCours = useRef(null)
  const refCarte = useRef(null)
  const centrer = useCallback((y, behavior = 'auto') => {
    const el = refCarte.current
    if (!el || y == null) return
    const top = el.getBoundingClientRect().top + window.scrollY + y - window.innerHeight * 0.55
    window.scrollTo({ top: Math.max(0, top), behavior })
  }, [])
  const yDe = useCallback(
    (id) => {
      if (!carte || !id) return null
      const parent = salles.find((s) => s.id === id || s.annexes.some((b) => b.id === id))
      return parent ? carte.salles.find((s) => s.id === parent.id)?.y ?? null : null
    },
    [carte, salles],
  )
  const centre = useRef(false)
  useEffect(() => {
    if (!carte || centre.current) return
    let attente
    // après le retour en haut de page de la coque (AppShell) : une image plus tard
    const raf = requestAnimationFrame(() => {
      centre.current = true
      const w = P.mondes.findIndex((m) => m.epoque === params.get('monde'))
      const cible = params.get('salle') ? yDe(params.get('salle')) : w >= 0 ? carte.portes[w].y : enCours ? yDe(enCours) : GEO.arriveeCentre
      if (traceDe !== null && !mouvementReduit()) {
        centrer(yDe(depart))
        attente = setTimeout(() => centrer(cible, 'smooth'), 450)
      } else centrer(cible)
    })
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(attente)
    }
  }, [carte]) // eslint-disable-line react-hooks/exhaustive-deps

  // « Ma salle » : visible quand la salle en cours est hors de l'écran
  const [horsEcran, setHorsEcran] = useState(null) // null | 'haut' | 'bas'
  useEffect(() => {
    const el = refCours.current
    if (!el) return setHorsEcran(null)
    const io = new IntersectionObserver(([e]) => setHorsEcran(e.isIntersecting ? null : e.boundingClientRect.top < 0 ? 'haut' : 'bas'), { rootMargin: '-120px 0px -90px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [carte, enCours])

  // Panneaux
  const ouvrir = useCallback(
    (id) => {
      haptic('tap')
      setParams((p) => {
        const next = Object.fromEntries(p)
        delete next.annexes
        return { ...next, salle: id }
      })
    },
    [setParams],
  )
  const ouvrirAnnexes = useCallback((id) => (haptic('tap'), setParams((p) => ({ ...Object.fromEntries(p), annexes: id }))), [setParams])
  const fermer = useCallback(
    () =>
      setParams(
        (p) => {
          const next = Object.fromEntries(p)
          delete next.salle
          delete next.annexes
          return next
        },
        { replace: true },
      ),
    [setParams],
  )
  // « À revoir » n'est pas une étape de salle : rien à noter comme commencé
  const jouerEtape = (civId, etape) => etape !== 'a-revoir' && commencer(civId, etape)
  const etape = enCours ? etapeSuivante(P, av, enCours) ?? 'decouvrir' : null
  const jouer = enCours ? { to: lienEtape(enCours, etape), onClick: () => (haptic('tap'), jouerEtape(enCours, etape)) } : null
  const revoir = due ? { to: lienEtape(due.civId, 'a-revoir'), nb: Math.min(due.nb, 2 * REVISION.parSeance), label: nomDe(due.civId) } : null

  // Premier lancement : la bienvenue d'abord
  if (!av.onboarding) return <Navigate to="/bienvenue" replace />

  const salleOuverte = params.get('salle')
  const ilotOuvert = salles.find((s) => s.id === params.get('annexes') && s.annexes.length)

  return (
    <section>
      <h1 className="sr-only">Aventure : la carte du parcours</h1>

      {/* Niveau et XP, toujours visibles */}
      <Link
        to="/profil"
        className="sticky top-16 z-20 -mt-6 -mx-4 sm:-mx-6 md:mx-auto md:max-w-[480px] glass border-b border-line/70 px-4 h-14 flex items-center gap-3"
        aria-label={`Niveau ${n.niveau}, ${n.rang}, ${av.xp.toLocaleString('fr-FR')} XP : voir le profil`}
      >
        <span aria-hidden="true" className="w-10 h-10 shrink-0 rounded-full grid place-items-center font-display text-xl font-bold border-2" style={{ background: '#2a2118', color: '#e0c27a', borderColor: '#a8791c' }}>
          {n.niveau}
        </span>
        <span aria-hidden="true" className="flex-1 min-w-0">
          <span className="flex justify-between gap-2 text-[11px] font-bold text-muted">
            <span className="truncate">{n.rang}</span>
            <span className="tabular-nums shrink-0">{n.max ? `${av.xp.toLocaleString('fr-FR')} XP` : `${n.dansNiveau.toLocaleString('fr-FR')} / ${n.pourSuivant.toLocaleString('fr-FR')}`}</span>
          </span>
          <span className="block mt-1.5 h-1.5 rounded-full bg-line overflow-hidden">
            <span className="block h-full bg-accent2" style={{ width: n.max ? '100%' : `${(n.dansNiveau / n.pourSuivant) * 100}%` }} />
          </span>
        </span>
      </Link>

      {/* La carte, pleine largeur sur téléphone ; elle finit juste au-dessus de la barre d'onglets */}
      <div ref={refBoite} className="-mx-4 sm:-mx-6 md:mx-auto md:max-w-[480px] -mb-6 md:mb-0">
        <div ref={refCarte} style={{ minHeight: carte ? undefined : '100vh' }}>
          {carte && (
            <CarteParcours
              ref={refCours}
              carte={carte}
              salles={salles}
              mondes={mondes}
              arrivee={arrivee}
              traceDe={traceDe}
              jouer={jouer}
              revoir={revoir}
              onOuvrir={ouvrir}
              onAnnexes={ouvrirAnnexes}
              labels={nomDe}
            />
          )}
        </div>
      </div>

      {/* Retour à la salle en cours */}
      {horsEcran && enCours && (
        <button
          type="button"
          onClick={() => (haptic('tap'), centrer(yDe(enCours), mouvementReduit() ? 'auto' : 'smooth'))}
          className="fixed right-4 bottom-[calc(theme(spacing.tabbar)+0.75rem)] md:bottom-6 z-20 min-h-[48px] pl-2.5 pr-[18px] rounded-full flex items-center gap-2.5 font-bold text-[15px] shadow-lift"
          style={{ background: '#2a2118', color: '#f6efe2' }}
          aria-label={`Revenir à ma salle : ${nomDe(enCours)}`}
        >
          <span aria-hidden="true" className="w-7 h-7 rounded-full grid place-items-center bg-accentbtn text-white">
            <Icon name="arrowRight" size={16} strokeWidth={2.6} className={horsEcran === 'haut' ? '-rotate-90' : 'rotate-90'} />
          </span>
          <span aria-hidden="true" className="flex flex-col items-start leading-tight">
            <span>Ma salle</span>
            <span className="text-xs font-medium" style={{ color: '#d8c7a6' }}>
              {nomCourt(P, enCours, nomDe(enCours))}
            </span>
          </span>
        </button>
      )}

      <AnimatePresence>
        {salleOuverte && P.monde.has(salleOuverte) && <SalleSheet key={salleOuverte} civId={salleOuverte} av={av} onClose={fermer} onPlay={jouerEtape} />}
        {!salleOuverte && ilotOuvert && <AnnexesSheet key={`ilot-${ilotOuvert.id}`} salle={ilotOuvert} onClose={fermer} onOuvrir={ouvrir} />}
      </AnimatePresence>
    </section>
  )
}

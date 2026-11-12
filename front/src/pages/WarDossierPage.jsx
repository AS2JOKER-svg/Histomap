import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import WARS from '../data/wars.json'
import { findCivilization } from '../lib/data'
import { formatDate, formatSpan, useDossier } from '../lib/dossiers'
import { civTextStyle, solidBg } from '../lib/color'
import { haptic } from '../lib/haptics'
import { useUI } from '../store/ui'
import useDocumentTitle from '../lib/useDocumentTitle'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import Icon from '../components/ui/Icon'
import RichText from '../components/ui/RichText'
import ExpressQuiz from '../components/quiz/ExpressQuiz'
import WarMap from '../components/war/WarMap'
import { Initials, KeyPoints, Prose, Section, Sources } from '../components/fiche/blocks'
import NotFoundPage from './NotFoundPage'

const ACCENT = '#34495e'
const PLAY_DELAY = 6000 // ms par phase en lecture automatique

/** Page d'un dossier de guerre (sprint Guerres A) : /guerres/:id */
export default function WarDossierPage() {
  const { id } = useParams()
  const { status, dossier, retry } = useDossier(id)
  useDocumentTitle(dossier?.nom ?? 'Guerre')

  if (status === 'missing') return <NotFoundPage title="Guerre introuvable" text="Ce dossier n'existe pas (encore) dans HistoMap." />
  if (status === 'error') {
    return (
      <div className="card p-6 text-center max-w-md mx-auto mt-10">
        <p className="font-semibold text-ink">Dossier indisponible</p>
        <p className="text-sm text-muted mt-1">Il n'a pas pu être chargé. Vérifiez votre connexion, puis réessayez.</p>
        <button onClick={retry} className="btn-primary h-11 px-4 mt-4">
          <Icon name="refresh" size={18} /> Réessayer
        </button>
      </div>
    )
  }
  if (status !== 'ready') {
    return (
      <div className="max-w-3xl mx-auto animate-pulse space-y-4 mt-6" aria-busy="true" aria-label="Chargement du dossier">
        <div className="h-9 w-2/3 rounded-lg bg-surface2" />
        <div className="h-24 rounded-xl bg-surface2" />
        <div className="h-64 rounded-2xl bg-surface2" />
      </div>
    )
  }
  return <Dossier key={id} d={dossier} />
}

function Dossier({ d }) {
  const openSheet = useUI((s) => s.openSheet)
  const camp = useMemo(() => Object.fromEntries(d.camps.map((c) => [c.id, c])), [d.camps])
  const battles = useMemo(() => new Map(d.batailles.map((b) => [b.id, b])), [d.batailles])
  const linkedWars = useMemo(() => WARS.filter((w) => w.dossier === d.id), [d.id])
  const sources = d.sources ?? []

  const openBattle = (b) =>
    openSheet({
      badge: 'guerre',
      title: b.nom,
      subtitle: `${formatSpan(b.debut, b.fin)} · ${b.lieu}`,
      text: b.resume,
      rows: [{ label: 'Vainqueur', value: b.vainqueur ? camp[b.vainqueur].nom : 'Aucun camp ne l’emporte nettement' }],
      actions: [...(b.ref ? [{ label: 'Ouvrir la fiche', to: `/fiche/${b.ref}` }] : []), ...(b.wikiUrl ? [{ label: 'Wikipédia', href: b.wikiUrl }] : [])],
    })

  return (
    <article className="max-w-3xl mx-auto" style={{ '--civ': ACCENT, '--civ-solid': solidBg(ACCENT), ...civTextStyle(ACCENT) }}>
      <Breadcrumbs items={[{ label: 'Guerres', to: '/guerres' }, { label: d.nom }]} />

      <header className="pt-1 pb-2">
        <span className="badge badge-guerre">Dossier de guerre</span>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ink tracking-tight leading-[1.05] mt-1.5 text-balance">{d.nom}</h1>
        <p className="mt-3 font-semibold tabular-nums civ-text">{d.dates}</p>
        <RichText as="p" className="mt-3 text-[16px] sm:text-[17px] text-ink/85 leading-relaxed" text={d.description} />
      </header>

      <Camps camps={d.camps} />

      <dl className="mt-5 grid grid-cols-2 gap-px bg-line border border-line rounded-2xl overflow-hidden">
        {d.chiffres.map((c) => (
          <div key={c.label} className="bg-surface px-3.5 py-3">
            <dt className="sr-only">{c.label}</dt>
            <dd>
              <span className="block font-display text-xl font-semibold text-ink leading-tight">{c.valeur}</span>
              <span className="block text-[13px] text-muted mt-0.5 leading-snug">{c.label}</span>
            </dd>
          </div>
        ))}
      </dl>

      <nav aria-label="Sommaire du dossier" className="mt-6 -mx-4 px-4 flex gap-1.5 overflow-x-auto no-scrollbar">
        {[
          ['essentiel', "L'essentiel"],
          ['phases', 'Carte et phases'],
          ['batailles', 'Batailles'],
          ['personnages', 'Personnages'],
          ['comprendre', 'Comprendre'],
          ['quiz', 'Quiz'],
        ].map(([anchor, label]) => (
          <a key={anchor} href={`#${anchor}`} onClick={(e) => { e.preventDefault(); document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }} className="chip shrink-0 h-9 hover:bg-line/70">
            {label}
          </a>
        ))}
      </nav>

      <Section id="essentiel" icon="star" title="L'essentiel" className="scroll-mt-20">
        <KeyPoints points={d.essentiel} />
      </Section>

      <Phases d={d} battles={battles} camp={camp} onBattle={openBattle} />

      <Section id="batailles" icon="swords" title={`${d.batailles.length} batailles`} className="scroll-mt-20">
        <ol className="grid gap-2.5 sm:grid-cols-2">
          {[...d.batailles].sort((a, b) => a.debut.localeCompare(b.debut)).map((b) => (
            <li key={b.id}>
              <button type="button" onClick={() => openBattle(b)} className="card hoverable w-full p-3.5 text-left flex gap-3 items-start min-h-[44px]">
                <span className="mt-1 w-3 h-3 rounded-full shrink-0" style={{ background: camp[b.vainqueur]?.couleur ?? 'rgb(var(--c-muted))' }} aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block font-semibold text-ink leading-snug">{b.nom}</span>
                  <span className="block text-[13px] text-muted mt-0.5">
                    {formatSpan(b.debut, b.fin)} · {b.vainqueur ? `victoire : ${camp[b.vainqueur].nom}` : 'sans vainqueur net'}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ol>
      </Section>

      <People d={d} camp={camp} />

      <Section id="comprendre" icon="book" title="Comprendre" className="scroll-mt-20">
        <div className="grid gap-3">
          {d.sections.map((s) => (
            <div key={s.titre} className="card p-4">
              <h3 className="font-semibold text-ink mb-1.5">{s.titre}</h3>
              <Prose text={s.texte} />
            </div>
          ))}
        </div>
      </Section>

      <Section id="quiz" icon="sparkles" title="Quiz" className="scroll-mt-20">
        <ExpressQuiz fiche={{ id: d.id, express: d.quiz }} color={ACCENT} />
      </Section>

      {linkedWars.length > 0 && (
        <Section icon="layers" title="Dans les fiches">
          <p className="text-sm text-muted mb-3">Cette guerre est aussi racontée du point de vue de ces civilisations.</p>
          <div className="flex flex-wrap gap-2">
            {[...new Set(linkedWars.flatMap((w) => w.civs))]
              .map(findCivilization)
              .filter(Boolean)
              .map(({ epoch, civ }) => (
                <Link key={civ.id} to={`/frise/${epoch.id}/${civ.id}?onglet=guerres`} className="chip h-10 hover:bg-line/70">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: civ.color }} aria-hidden="true" />
                  {civ.label}
                </Link>
              ))}
          </div>
        </Section>
      )}

      {sources.length > 0 && (
        <Section icon="link" title="Sources">
          <Sources items={sources} />
        </Section>
      )}
    </article>
  )
}

/** « Alliés contre Axe » : les deux camps, avec leurs membres principaux. */
function Camps({ camps }) {
  const [a, b] = camps
  return (
    <div className="mt-5 grid grid-cols-[1fr_auto_1fr] gap-2 items-stretch">
      <CampCard c={a} />
      <span className="self-center text-[11px] font-extrabold text-danger">VS</span>
      <CampCard c={b} />
    </div>
  )
}

function CampCard({ c }) {
  return (
    <div className="rounded-2xl p-3.5 text-white" style={{ background: solidBg(c.couleur) }}>
      <p className="font-display text-lg font-semibold leading-tight">{c.nom}</p>
      <ul className="mt-2 space-y-1 text-[13px] leading-snug opacity-95">
        {c.membres.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
    </div>
  )
}

/** Carte animée + récit phase par phase, avec lecture automatique. */
function Phases({ d, battles, camp, onBattle }) {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const timer = useRef(null)
  const phase = d.phases[index]
  const last = d.phases.length - 1

  useEffect(() => {
    if (!playing) return
    if (index >= last) {
      setPlaying(false)
      return
    }
    timer.current = setTimeout(() => setIndex((i) => Math.min(i + 1, last)), PLAY_DELAY)
    return () => clearTimeout(timer.current)
  }, [playing, index, last])

  const go = (i) => {
    setIndex(Math.max(0, Math.min(last, i)))
    haptic('tap')
  }
  const toggle = () => {
    if (!playing && index >= last) setIndex(0)
    setPlaying((p) => !p)
    haptic('tap')
  }

  return (
    <Section id="phases" icon="globe" title={`${d.phases.length} phases`} className="scroll-mt-20">
      <WarMap dossier={d} phaseIndex={index} onBattle={onBattle} />

      {/* frise des phases */}
      <div className="mt-4 flex gap-1" role="tablist" aria-label="Phases de la guerre">
        {d.phases.map((p, i) => (
          <button
            key={p.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Phase ${i + 1} : ${p.nom}`}
            onClick={() => {
              setPlaying(false)
              go(i)
            }}
            className="flex-1 h-11 grid place-items-center"
          >
            <span className={`block w-full rounded-full transition-all ${i === index ? 'h-2.5' : 'h-1.5'}`} style={{ background: i <= index ? ACCENT : 'rgb(var(--c-line))' }} />
          </button>
        ))}
      </div>

      <div className="mt-2 flex items-center gap-2">
        <button type="button" onClick={() => { setPlaying(false); go(index - 1) }} disabled={index === 0} className="btn-ghost h-11 w-11 grid place-items-center disabled:opacity-40" aria-label="Phase précédente">
          <Icon name="arrowLeft" size={18} />
        </button>
        <button type="button" onClick={toggle} className="btn-primary h-11 px-4 flex-1 sm:flex-none" aria-label={playing ? 'Mettre en pause' : 'Lancer la lecture des phases'}>
          <Icon name={playing ? 'pause' : 'play'} size={18} /> {playing ? 'Pause' : index >= last ? 'Revoir depuis le début' : 'Lecture'}
        </button>
        <button type="button" onClick={() => { setPlaying(false); go(index + 1) }} disabled={index === last} className="btn-ghost h-11 w-11 grid place-items-center disabled:opacity-40" aria-label="Phase suivante">
          <Icon name="arrowRight" size={18} />
        </button>
        <span className="ml-auto text-sm text-muted tabular-nums">
          {index + 1} / {d.phases.length}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={phase.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25 }} className="card p-4 mt-3">
          <p className="text-xs font-semibold uppercase tracking-[.1em] civ-text">{formatSpan(phase.debut, phase.fin)}</p>
          <h3 className="font-display text-2xl font-semibold text-ink leading-tight mt-1">{phase.nom}</h3>
          <RichText as="p" className="mt-2 text-[15px] font-medium text-ink leading-relaxed" text={phase.resume} />
          <Prose text={phase.texte} className="mt-2" />

          {phase.batailles.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {phase.batailles.map((id) => {
                const b = battles.get(id)
                return (
                  <button key={id} type="button" onClick={() => onBattle(b)} className="chip h-10 hover:bg-line/70">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: camp[b.vainqueur]?.couleur ?? 'rgb(var(--c-muted))' }} aria-hidden="true" />
                    {b.nom}
                  </button>
                )
              })}
            </div>
          )}

          {phase.evenements?.length > 0 && (
            <ul className="mt-4 space-y-2 border-t border-line pt-3">
              {phase.evenements.map((e) => (
                <li key={e.date + e.texte} className="grid grid-cols-[7.5rem_1fr] gap-2 text-sm">
                  <span className="tabular-nums text-muted">{formatDate(e.date)}</span>
                  {e.ref ? (
                    <EventRef id={e.ref} label={e.texte} />
                  ) : (
                    <span className="text-ink/90">{e.texte}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </AnimatePresence>
    </Section>
  )
}

function EventRef({ id, label }) {
  const openSheet = useUI((s) => s.openSheet)
  return (
    <button type="button" className="ref-link text-left" onClick={() => openSheet({ id, title: label })}>
      {label}
    </button>
  )
}

const PEOPLE_GROUPS = [
  ['allies', null],
  ['axe', null],
  ['autres', 'Autres figures'],
]

function People({ d, camp }) {
  const openSheet = useUI((s) => s.openSheet)
  const open = (p) =>
    p.ref
      ? openSheet({ id: p.ref, title: p.nom })
      : openSheet({ badge: 'personne', title: p.nom, subtitle: `${p.role} · ${p.dates}`, text: p.description, actions: p.wikiUrl ? [{ label: 'Wikipédia', href: p.wikiUrl }] : [] })
  return (
    <Section id="personnages" icon="users" title={`${d.personnages.length} personnages`} className="scroll-mt-20">
      <div className="space-y-5">
        {PEOPLE_GROUPS.map(([id, label]) => {
          const list = d.personnages.filter((p) => p.camp === id)
          if (!list.length) return null
          const color = camp[id]?.couleur ?? '#6b7280'
          return (
            <div key={id}>
              <h3 className="eyebrow mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: color }} aria-hidden="true" />
                {label ?? camp[id].nom}
              </h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {list.map((p) => (
                  <li key={p.nom}>
                    <button type="button" onClick={() => open(p)} className="card hoverable w-full p-3 text-left flex gap-3 items-center min-h-[44px]">
                      <Initials name={p.nom} color={color} size={40} />
                      <span className="min-w-0">
                        <span className="block font-semibold text-ink leading-snug">{p.nom}</span>
                        <span className="block text-[13px] text-muted leading-snug">{p.role} · {p.dates}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

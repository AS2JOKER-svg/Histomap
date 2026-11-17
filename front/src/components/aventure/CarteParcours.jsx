import { forwardRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { initiales } from '../../lib/aventure'
import { GEO, traceRoute } from '../../lib/carteParcours'
import Icon from '../ui/Icon'
import { PICTOS_MONDE, Picto } from './Pictos'

/**
 * Carte du parcours (V3.1, sprint 30, maquettes 0 à 3 du sprint 27) : dessin seul, sans état.
 * La mise en page vient de lib/carteParcours.js (disposerCarte), les salles de modeleCarte.
 *
 * Ordre du DOM = ordre du parcours (de la Préhistoire à l'arrivée) : c'est aussi l'ordre de lecture
 * des lecteurs d'écran et de la touche Tab, même si la carte se lit de bas en haut.
 */
const OR = '#e0c27a'
const ENCRE = '#2a2118'
const CREME = '#f6efe2'
const fond = (theme, a = 1) => `rgb(var(--m-${theme}-fond) / ${a})`
const pluriel = (n, mot) => `${n} ${mot}${n > 1 ? 's' : ''}`

function etatSalle(s) {
  const reprendre = s.reprendre ? ', étape commencée' : ''
  if (s.etat === 'cours') return `ta salle en cours, ${s.reprendre ? 'à reprendre' : 'à découvrir'}`
  if (s.etat === 'faite') return (s.nbEtoiles ? `découverte, ${pluriel(s.nbEtoiles, 'étoile')} sur 3` : 'découverte, épreuve à passer') + reprendre
  if (s.etat === 'rattraper') return `à rattraper${s.ouvert ? '' : ', fermée'}${reprendre}`
  return (s.etat === 'ouverte' ? 'ouverte' : 'fermée') + reprendre
}
const etatBulle = (b) => (b.etat === 'faite' ? `faite${b.nbEtoiles ? `, ${pluriel(b.nbEtoiles, 'étoile')}` : ''}` : b.etat === 'ouverte' ? 'ouverte' : 'fermée') + (b.reprendre ? ', séance commencée' : '')

/**
 * @param carte    disposerCarte(…)
 * @param salles   modeleCarte(…) (même ordre que carte.salles)
 * @param mondes   [{ theme, nom, num, info, verrou }] (portes)
 * @param arrivee  { titre, texte, faites, total }
 * @param traceDe  index de route d'où animer le tracé doré (nouvelle salle ouverte), sinon null
 * @param jouer    { to, onClick } : bouton « Jouer » de la salle en cours
 * @param revoir   { to, nb, label } : bulle « À revoir »
 */
const CarteParcours = forwardRef(function CarteParcours({ carte, salles, mondes, arrivee, traceDe = null, jouer, revoir, onOuvrir, onAnnexes, labels }, refCours) {
  const W = carte.largeur
  const H = carte.hauteur
  const iCours = salles.findIndex((s) => s.cours)
  const finTrace = iCours >= 0 ? carte.rangRoute[iCours] : carte.route.length - 1
  const longueur = carte.longueurs[finTrace]
  const [anime, setAnime] = useState(traceDe !== null && traceDe < finTrace)
  useEffect(() => {
    if (!anime) return
    let id = requestAnimationFrame(() => (id = requestAnimationFrame(() => setAnime(false))))
    return () => cancelAnimationFrame(id)
  }, [anime])

  const tiges = carte.salles.filter((s) => s.ilot).map((s) => `M${s.ilot.tige.x1} ${s.ilot.tige.y}H${s.ilot.tige.x2}`).join('')
  const chevrons = carte.salles
    .flatMap((s) => (s.ilot?.cellules ?? []).map((c, k, cs) => (c.lien ? chevron(cs[k - 1], c) : '')))
    .join('')

  return (
    <div className="relative mx-auto overflow-hidden select-none" style={{ width: W, height: H }}>
      {/* Décor : bandes des mondes et pictogrammes */}
      {carte.bandes.map((b) => (
        <div key={b.w} aria-hidden="true" className="absolute left-0" style={{ top: b.y, height: b.h, width: W, background: fond(mondes[b.w].theme) }} />
      ))}
      {carte.filigranes.map((f) => {
        const pictos = PICTOS_MONDE[mondes[f.w].theme]
        return <Picto key={`${f.w}-${f.k}`} nom={pictos[(f.k + 2) % pictos.length]} taille={GEO.filigrane} trait={1} className="absolute pointer-events-none" style={{ left: f.x, top: f.y, color: `var(--m-${mondes[f.w].theme}-acc)`, opacity: 0.13 }} />
      })}

      {/* Route : chaussée, tracé doré jusqu'à la salle en cours, pointillés ensuite ; tiges et chevrons des îlots */}
      <svg aria-hidden="true" className="absolute left-0 top-0 pointer-events-none" width={W} height={H} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d={traceRoute(carte.route)} style={{ stroke: 'var(--carte-route)' }} strokeWidth="22" />
        <path d={traceRoute(carte.route, finTrace)} style={{ stroke: 'var(--carte-futur)' }} strokeWidth="4" strokeDasharray="1 11" />
        <path
          d={traceRoute(carte.route, 0, finTrace)}
          className="carte-trace"
          style={{ stroke: 'var(--carte-fait)', strokeDasharray: `${longueur} ${longueur + 40}`, strokeDashoffset: anime ? longueur - carte.longueurs[traceDe] : 0 }}
          strokeWidth="5"
        />
        <path d={tiges} style={{ stroke: 'var(--carte-tige)' }} strokeWidth="2" strokeDasharray="3 3" strokeLinecap="butt" />
        <path d={chevrons} style={{ stroke: 'var(--carte-ferme-texte)' }} strokeWidth="1.8" />
      </svg>

      {/* Les mondes : porte (en bas), puis les salles du chemin */}
      {mondes.map((m, w) => (
        <section key={m.theme} aria-labelledby={`monde-${w}`}>
          <Porte monde={m} w={w} y={carte.portes[w].y} W={W} />
          <ol aria-label={`Salles du monde ${m.nom}`}>
            {carte.salles.map((p, i) =>
              p.w === w ? (
                <Salle
                  key={p.id}
                  p={p}
                  s={salles[i]}
                  theme={m.theme}
                  ref={salles[i].cours ? refCours : undefined}
                  anime={salles[i].cours && traceDe !== null && traceDe < finTrace}
                  jouer={salles[i].cours ? jouer : null}
                  revoir={salles[i].revoir ? revoir : null}
                  onOuvrir={onOuvrir}
                  onAnnexes={onAnnexes}
                  labels={labels}
                />
              ) : null,
            )}
          </ol>
        </section>
      ))}

      <Arrivee {...arrivee} W={W} />
    </div>
  )
})
export default CarteParcours

/** Chevron entre deux bulles d'une chaîne (de l'annexe vers sa suite). */
function chevron(a, b) {
  const h = GEO.bulle / 2
  const [ax, ay, bx, by] = [a.x + h, a.y + h, b.x + h, b.y + h]
  const l = Math.hypot(bx - ax, by - ay) || 1
  const [ux, uy] = [(bx - ax) / l, (by - ay) / l]
  const [mx, my] = [(ax + bx) / 2, (ay + by) / 2]
  const p = (k, n) => `${Math.round((mx + ux * k - uy * n) * 10) / 10} ${Math.round((my + uy * k + ux * n) * 10) / 10}`
  return `M${p(-2, 4)}L${p(2, 0)}L${p(-2, -4)}`
}

function Porte({ monde: m, w, y, W }) {
  const [p1, p2] = PICTOS_MONDE[m.theme]
  return (
    <div className="absolute left-0 flex items-center justify-between px-4" style={{ top: y, width: W, height: GEO.porte, background: `var(--m-${m.theme}-acc)`, color: CREME, boxShadow: '0 -6px 0 rgba(42,33,24,.08), 0 6px 0 rgba(42,33,24,.08)' }}>
      <Picto nom={p1} taille={40} style={{ color: OR }} />
      <div className="flex flex-col items-center gap-0.5 text-center min-w-0">
        <span className="text-[11px] font-bold uppercase tracking-[.2em]">Monde {m.num}</span>
        <h2 id={`monde-${w}`} className="font-display text-[30px] font-bold leading-none">
          <span className="sr-only">Monde {m.num} : </span>
          {m.nom}
        </h2>
        <span className="flex items-center gap-1.5 text-xs" style={{ color: '#efe5d2' }}>
          {m.verrou && <Icon name="lock" size={13} />}
          {m.info}
        </span>
      </div>
      <Picto nom={p2} taille={40} style={{ color: OR }} />
    </div>
  )
}

const Salle = forwardRef(function Salle({ p, s, theme, anime, jouer, revoir, onOuvrir, onAnnexes, labels }, ref) {
  const d = 2 * p.r
  const style = {
    faite: { background: `var(--m-${theme}-acc)`, border: `3px solid ${OR}`, color: '#fff', boxShadow: '0 3px 8px rgba(42,33,24,.18)' },
    cours: { background: 'rgb(var(--c-surface))', border: '5px solid rgb(var(--c-accent))', color: 'rgb(var(--c-accent))', boxShadow: '0 10px 26px rgba(42,33,24,.28)' },
    rattraper: { background: 'rgb(var(--c-surface))', border: '3px dashed rgb(var(--c-accent))', color: 'rgb(var(--c-accent))' },
    ouverte: { background: 'rgb(var(--c-surface))', border: '2px solid var(--carte-bord)', color: 'rgb(var(--c-accent))' },
    fermee: { background: 'var(--carte-ferme)', border: '2px solid var(--carte-bord)', color: 'var(--carte-ferme-texte)' },
  }[s.etat]
  const voile = fond(theme, 0.92)
  return (
    <li>
      {/* Étiquette : nom court, étoiles, « À rattraper » (le bouton porte déjà le nom pour les lecteurs d'écran) */}
      <div aria-hidden="true" className="absolute flex flex-col items-center gap-0.5 pointer-events-none" style={{ left: p.etiquette.x, top: p.etiquette.y, width: p.etiquette.l }}>
        <span
          className="px-[7px] pb-0.5 rounded-lg font-display font-bold text-center leading-[1.05] line-clamp-2"
          style={{ background: voile, fontSize: s.cours ? 19 : 16, color: s.etat === 'fermee' ? 'var(--carte-etiquette-fermee)' : 'rgb(var(--c-ink))' }}
        >
          {s.nom}
        </span>
        {s.etoiles && (
          <span className="px-[5px] rounded-md text-[13px] tracking-[2px]" style={{ background: voile, color: 'var(--carte-etoiles)' }}>
            {'★'.repeat(s.nbEtoiles)}
            {'☆'.repeat(3 - s.nbEtoiles)}
          </span>
        )}
        {s.rattraper && <span className="mt-0.5 px-2 py-0.5 rounded-[10px] text-[11px] font-bold bg-accentbtn text-white">À rattraper</span>}
      </div>

      <button
        ref={ref}
        type="button"
        data-salle={s.id}
        onClick={() => onOuvrir(s.id)}
        aria-label={`${s.label}, ${etatSalle(s)}${s.fil ? ', salle de ton fil rouge' : ''}`}
        className={`absolute rounded-full grid place-items-center font-display font-bold transition-transform active:scale-95 ${anime ? 'carte-arrivee' : ''}`}
        style={{ left: p.x - p.r, top: p.y - p.r, width: d, height: d, fontSize: s.cours ? 32 : 22, ...style }}
      >
        {s.cours && <span aria-hidden="true" className="carte-pulse absolute -inset-[11px] rounded-full border-[3px] pointer-events-none" style={{ borderColor: 'rgb(var(--c-accent))' }} />}
        <span aria-hidden="true">{initiales(s.nom)}</span>
        {s.fil && (
          <span aria-hidden="true" className="absolute -right-[7px] -top-[7px] w-[22px] h-[22px] rounded-full grid place-items-center bg-accentbtn border-2" style={{ borderColor: 'rgb(var(--c-surface))' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.8" strokeLinecap="round"><path d="M2 14c3.3-7 6.7 7 10 0s6.7 7 10 0" /></svg>
          </span>
        )}
        {s.etat === 'fermee' && (
          <span aria-hidden="true" className="absolute -right-[5px] -bottom-[5px] w-5 h-5 rounded-full grid place-items-center text-white" style={{ background: '#6e5a3c' }}>
            <Icon name="lock" size={11} strokeWidth={2.6} />
          </span>
        )}
        {s.reprendre && (
          <span aria-hidden="true" className="absolute -left-[6px] -top-[6px] w-[22px] h-[22px] rounded-full grid place-items-center bg-accentbtn text-white border-2" style={{ borderColor: 'rgb(var(--c-surface))' }}>
            <Icon name="play" size={10} strokeWidth={3} />
          </span>
        )}
      </button>

      {jouer && p.jouer && (
        <Link
          to={jouer.to}
          onClick={jouer.onClick}
          aria-label={`Jouer : ${s.label}`}
          className="btn-accent absolute rounded-md text-base font-bold px-0 shadow-lift"
          style={{ left: p.jouer.x, top: p.jouer.y, width: p.jouer.l, height: p.jouer.h }}
        >
          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4l13 8-13 8z" /></svg>
          Jouer
        </Link>
      )}

      {revoir && p.revoir && (
        <>
          <Link
            to={revoir.to}
            aria-label={`À revoir : ${pluriel(revoir.nb, 'erreur')} (${revoir.label}), +20 XP`}
            className="absolute rounded-full grid place-items-center border-2 shadow-soft"
            style={{ left: p.revoir.x, top: p.revoir.y, width: p.revoir.l, height: p.revoir.h, background: 'rgb(var(--c-surface))', borderColor: 'rgb(var(--c-accent))', color: 'rgb(var(--c-accent))' }}
          >
            <Icon name="refresh" size={24} strokeWidth={2.2} />
            <span aria-hidden="true" className="absolute -right-[7px] -top-[7px] min-w-[22px] h-[22px] px-[5px] rounded-full grid place-items-center bg-accentbtn text-white text-xs font-bold">
              {revoir.nb}
            </span>
          </Link>
          <span aria-hidden="true" className="absolute text-center text-xs font-bold rounded-md pointer-events-none" style={{ left: p.revoir.etiquette.x, top: p.revoir.etiquette.y, width: p.revoir.etiquette.l, color: 'rgb(var(--c-accent))' }}>
            <span className="px-1 rounded" style={{ background: voile }}>À revoir</span>
          </span>
        </>
      )}

      {/* Annexes en dernier : ordre de lecture = la salle, son « Jouer », puis ses annexes */}
      {p.ilot && <Ilot p={p} s={s} theme={theme} onOuvrir={onOuvrir} onAnnexes={onAnnexes} labels={labels} />}
    </li>
  )
})

/** Îlot d'annexes d'une salle : fond, bulles (initiales), « +N » quand il est replié. */
function Ilot({ p, s, theme, onOuvrir, onAnnexes, labels }) {
  const toutFerme = s.annexes.every((b) => b.etat === 'fermee')
  const parId = new Map(s.annexes.map((b) => [b.id, b]))
  return (
    <>
      <div aria-hidden="true" className="absolute rounded-[24px] pointer-events-none" style={{ left: p.ilot.x, top: p.ilot.y, width: p.ilot.l, height: p.ilot.h, background: 'var(--carte-ilot)', border: `1px ${toutFerme ? 'dashed' : 'solid'} var(--carte-ilot-bord)` }} />
      <ul aria-label={`Annexes de ${s.label}`}>
        {p.ilot.cellules.map((c) => {
          const b = parId.get(c.id)
          const plus = c.plus !== undefined
          const label = plus ? '' : labels(c.id)
          const style = plus
            ? { background: 'rgb(var(--c-ink))', color: 'rgb(var(--c-bg))' }
            : {
                faite: { background: OR, color: ENCRE },
                ouverte: { background: 'rgb(var(--c-surface))', border: `2px solid var(--m-${theme}-trait)`, color: 'rgb(var(--c-ink))' },
                fermee: { background: 'var(--carte-bulle-fermee)', border: '1.5px dashed var(--carte-bulle-fermee-bord)', color: 'var(--carte-ferme-texte)' },
              }[b.etat]
          return (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => (plus ? onAnnexes(s.id) : onOuvrir(c.id))}
                aria-label={plus ? `${c.plus} autres annexes de ${s.label} : voir la liste` : `${label}, annexe de ${s.label}, ${etatBulle(b)}`}
                className="absolute grid place-items-center rounded-full active:scale-95 transition-transform"
                style={{ left: c.x - 3, top: c.y - 3, width: GEO.bulle + 6, height: GEO.bulle + 6 }}
              >
                <span aria-hidden="true" className="relative grid place-items-center rounded-full text-[13px] font-bold" style={{ width: GEO.bulle, height: GEO.bulle, ...style }}>
                  {plus ? `+${c.plus}` : initiales(label)}
                  {!plus && b.etat === 'faite' && b.nbEtoiles > 0 && (
                    <span className="absolute -right-[5px] -top-[8px] px-1 rounded-lg text-[10px] font-bold leading-[15px]" style={{ background: ENCRE, color: OR }}>
                      ★{b.nbEtoiles}
                    </span>
                  )}
                  {!plus && b.reprendre && <span className="absolute -left-[3px] -top-[3px] w-3 h-3 rounded-full bg-accentbtn border-2" style={{ borderColor: 'rgb(var(--c-surface))' }} />}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

/** Haut de la carte : l'arrivée et le titre ultime (au moins ★ dans toutes les salles). */
function Arrivee({ titre, texte, faites, total, W }) {
  const C = GEO.arriveeCentre
  return (
    <div className="absolute left-0 top-0 text-center" style={{ width: W, height: GEO.arrivee, background: ENCRE, color: CREME }}>
      <div aria-hidden="true">
        {[[24, 28, 3, OR], [70, 128, 2, CREME], [W - 56, 40, 3, OR], [W - 34, 168, 2, CREME], [30, 214, 2, OR], [W - 24, 224, 3, CREME]].map(([x, y, t, c], k) => (
          <span key={k} className="absolute rounded-full" style={{ left: x, top: y, width: t, height: t, background: c }} />
        ))}
      </div>
      <p className="absolute inset-x-0 text-xs font-bold uppercase tracking-[.22em]" style={{ top: 22, color: OR }}>
        Arrivée
      </p>
      <span aria-hidden="true" className="carte-halo absolute rounded-full grid place-items-center" style={{ left: W / 2 - 42, top: C - 42, width: 84, height: 84, background: OR, color: ENCRE }}>
        <Picto nom="livre" taille={40} trait={1.8} />
      </span>
      <h2 className="absolute inset-x-4 font-display font-bold leading-none" style={{ top: C + 52, fontSize: Math.min(28, Math.floor(W / 14)) }}>
        {titre}
      </h2>
      <p className="absolute inset-x-4 text-[13px]" style={{ top: C + 88, color: '#d8c7a6' }}>
        {texte}
      </p>
      <p className="absolute inset-x-0 flex items-center justify-center gap-2.5 text-[13px] font-bold" style={{ top: C + 112, color: OR }}>
        <span aria-hidden="true" className="w-[150px] h-1.5 rounded-full overflow-hidden" style={{ background: '#4a3d2c' }}>
          <span className="block h-full" style={{ width: `${(faites / total) * 100}%`, background: OR }} />
        </span>
        <span>
          {faites} / {total}
          <span className="sr-only"> salles avec au moins une étoile</span>
        </span>
      </p>
    </div>
  )
}

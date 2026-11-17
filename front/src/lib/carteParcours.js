/**
 * carteParcours.js — Mise en page de la carte du parcours (V3.1, sprint 30)
 * ===========================================================================
 * Fonctions pures, sans React : elles reçoivent la liste des salles du chemin déjà décrites (nom affiché,
 * salle en cours, îlot d'annexes…) et rendent la géométrie de la carte. Testées par scripts/test-aventure.mjs :
 * aucun chevauchement, rien hors de l'écran, la route ne traverse aucun îlot, à toutes les largeurs et pour tous
 * les fils rouges.
 *
 * Décisions (CLAUDE.md § V3.1, maquettes du sprint 27, points tranchés le 17/11/2026) :
 *   - une carte verticale, de bas (Préhistoire) en haut (arrivée), chemin en serpentin ;
 *   - une porte par monde, en bas de son monde ; l'arrivée tout en haut ;
 *   - pastilles rondes (salle en cours plus grosse, avec « Jouer » sous son nom), nom court et étoiles dessous ;
 *   - annexes en bulles, en îlot de 2 colonnes à côté de leur salle, du côté opposé à la route ; au-delà de 6,
 *     2 bulles et « +N » (îlot replié) ; une annexe qui dépend de la précédente est collée à elle (chevron) ;
 *   - bulle « À revoir » de l'autre côté de la salle en cours.
 *
 * Repère : x de gauche à droite ; on empile de bas en haut en « hauteur depuis le bas » (h), puis tout est
 * converti en y de haut en bas (repère du DOM) : y = hauteur totale − h.
 */

import { aRattraper, cheminDe, estOuvert, estTronc, ilots, nomCourt, salleDe, salleEnCours } from './aventure.js'

export const GEO = {
  marge: 8, // bord de l'écran
  amplitude: 46, // écart du serpentin de part et d'autre du centre
  r: 30, // rayon d'une pastille
  rCours: 42, // rayon de la salle en cours
  bulle: 38, // bulle d'annexe
  pas: 46, // pas des bulles (zone de toucher ≥ 44 px)
  pad: 5, // marge intérieure d'un îlot
  ecart: 18, // espace vertical minimal entre deux éléments
  porte: 104, // hauteur d'une porte de monde
  arrivee: 236, // hauteur du bloc d'arrivée
  arriveeCentre: 94, // centre de son médaillon (fin de la route), depuis le haut
  bas: 16, // marge sous la première porte
  etiquette: { l: 132, ligne: 18, ligneCours: 22, etoiles: 17, rattraper: 24, haut: 5 },
  jouer: { l: 112, h: 44, ecart: 8 },
  revoir: { d: 56, etiquette: 18 },
  repli: 6, // au-delà de 6 annexes : îlot replié
  filigrane: 120, // pictogrammes du décor
}

/** Nombre de lignes d'un nom sur une étiquette (≈ 7,4 px par caractère en 16 px, 8,8 px en 19 px). */
export const lignesNom = (nom, cours = false) => (String(nom).length * (cours ? 8.8 : 7.4) > GEO.etiquette.l - 14 ? 2 : 1)

/** Hauteur de l'étiquette d'une salle (nom, étoiles, « À rattraper »). */
function hauteurEtiquette(s) {
  const E = GEO.etiquette
  return lignesNom(s.nom, s.cours) * (s.cours ? E.ligneCours : E.ligne) + (s.etoiles ? E.etoiles : 0) + (s.rattraper ? E.rattraper : 0) + 4
}

/**
 * Cellules d'un îlot dans une grille de `cols` colonnes, rangées de bas en haut (rangée 0 = au niveau de la salle),
 * colonne 0 = la plus proche de la salle. Une annexe seule prend la première case libre ; un groupe (annexe et
 * ses suites) commence sur une rangée vide et serpente (→ puis ↑ puis ←…), pour que chaque suite touche la précédente.
 * → { cellules: [{ ...item, rang, col, lien: null | 'h' | 'v' }], rangs, colonnes (colonnes occupées) }
 */
export function grilleIlot(groupes, cols) {
  const occ = new Set()
  const libre = (r, c) => !occ.has(`${r},${c}`)
  const cellules = []
  let rangs = 0
  const poser = (item, r, c, lien) => {
    occ.add(`${r},${c}`)
    cellules.push({ ...item, rang: r, col: c, lien })
    rangs = Math.max(rangs, r + 1)
  }
  for (const g of groupes) {
    if (g.length === 1) {
      let r = 0
      let c = 0
      while (!libre(r, c)) if (++c >= cols) (c = 0), r++
      poser(g[0], r, c, null)
      continue
    }
    let r = 0
    while ([...Array(cols).keys()].some((c) => !libre(r, c))) r++
    let c = 0
    let sens = 1
    g.forEach((item, k) => {
      const lien = k > 0 && item.suite ? (cellules.at(-1).rang === r ? 'h' : 'v') : null
      poser(item, r, c, lien)
      if (c + sens >= 0 && c + sens < cols) c += sens
      else (r += 1), (sens = -sens)
    })
  }
  return { cellules, rangs, colonnes: Math.max(1, ...cellules.map((c) => c.col + 1)) }
}

/** Largeur et hauteur d'un îlot. */
const tailleIlot = (cols, rangs) => [cols * GEO.pas - (GEO.pas - GEO.bulle) + 2 * GEO.pad, rangs * GEO.pas - (GEO.pas - GEO.bulle) + 2 * GEO.pad]

/**
 * Mise en page de la carte.
 * @param {object[]} salles  salles du chemin, dans l'ordre : { id, w (monde), nom (nom affiché), cours, etoiles
 *                           (ligne d'étoiles), rattraper, revoir (bulle « À revoir » à côté), ilot: groupes [[{ id, suite }]]
 *                           déjà repliés au besoin (une cellule { plus: N } pour « +N ») }
 * @param {object} options   { largeur, mondes (nombre de mondes) }
 * @returns {{ largeur, hauteur, salles, portes, arrivee, bandes, route, rangRoute, longueurs, filigranes }}
 */
export function disposerCarte(salles, { largeur, mondes = 5 }) {
  const G = GEO
  const W = Math.max(300, Math.round(largeur))
  const cx = W / 2
  const A = Math.min(G.amplitude, Math.round(W * 0.12))
  const xSalle = (i) => Math.round(cx + A * Math.sin(i * 0.95 + 0.4))

  // Points de passage de la route (hors étages) : porte 0, salles, portes suivantes, arrivée ; leur x d'abord.
  const xs = salles.map((_, i) => xSalle(i))
  const xSuivant = (i) => (i + 1 < salles.length && salles[i + 1].w === salles[i].w ? xs[i + 1] : cx)

  const out = [] // salles placées (h depuis le bas)
  const portes = []
  const route = [] // [x, h]
  const rangRoute = [] // index de chaque salle dans `route`
  let plafond = G.bas // plus haut point occupé
  let monde = -1

  const porte = (w) => {
    const bas = plafond + (w > 0 ? G.ecart : 0)
    portes.push({ w, bas, haut: bas + G.porte })
    route.push([cx, bas + G.porte / 2])
    plafond = bas + G.porte
  }

  salles.forEach((s, i) => {
    while (monde < s.w) porte(++monde)
    const r = s.cours ? G.rCours : G.r
    const hEt = hauteurEtiquette(s)
    const dessous = r + G.etiquette.haut + hEt + (s.cours ? G.jouer.ecart + G.jouer.h : 0)
    const h = plafond + G.ecart + dessous
    const x = xs[i]
    const p = { id: s.id, w: s.w, x, h, r, cours: !!s.cours }
    p.etiquette = { x: x - G.etiquette.l / 2, l: G.etiquette.l, haut: h - r - G.etiquette.haut, bas: h - r - G.etiquette.haut - hEt }
    if (s.cours) p.jouer = { x: x - G.jouer.l / 2, l: G.jouer.l, haut: p.etiquette.bas - G.jouer.ecart, bas: p.etiquette.bas - G.jouer.ecart - G.jouer.h }
    let haut = h + r

    // Îlot d'annexes : du côté opposé à la route qui monte, collé à la salle, sinon repoussé au-delà de la route
    const groupes = s.ilot ?? []
    if (groupes.length) {
      const xN = xSuivant(i)
      const dx = xN - x
      const pref = Math.abs(dx) > 12 ? -Math.sign(dx) : x > cx ? -1 : 1
      const route0 = Math.min(x, xN) - 30 // la route (et son dépassement de courbe) reste entre route0 et route1
      const route1 = Math.max(x, xN) + 30
      let choix = null
      for (const [cote, cols] of [[pref, 2], [-pref, 2], [pref, 1], [-pref, 1]]) {
        const g = grilleIlot(groupes, cols)
        const [l, hI] = tailleIlot(g.colonnes, g.rangs)
        const xIn = cote > 0 ? Math.max(x + r + 8, route1) : Math.min(x - r - 8, route0)
        const x0 = cote > 0 ? xIn : xIn - l
        if (x0 >= G.marge && x0 + l <= W - G.marge) {
          choix = { cote, cols, l, hI, x0, ...g }
          break
        }
      }
      if (!choix) {
        // écran trop étroit : une colonne au bord, du côté préféré
        const g = grilleIlot(groupes, 1)
        const [l, hI] = tailleIlot(1, g.rangs)
        choix = { cote: pref, cols: 1, l, hI, x0: pref > 0 ? W - G.marge - l : G.marge, ...g }
      }
      const { cote, l, hI, x0, cellules } = choix
      const bas = h - r
      p.ilot = {
        x: x0,
        l,
        bas,
        haut: bas + hI,
        cote,
        tige: cote > 0 ? [x + r, x0] : [x0 + l, x - r],
        cellules: cellules.map((c) => ({
          ...c,
          x: cote > 0 ? x0 + G.pad + c.col * G.pas : x0 + l - G.pad - G.bulle - c.col * G.pas,
          haut: bas + G.pad + G.bulle + c.rang * G.pas,
        })),
      }
      haut = Math.max(haut, bas + hI)
    }

    // Bulle « À revoir » : de l'autre côté de la salle (côté de la route), à hauteur de la pastille
    if (s.revoir) {
      const cote = p.ilot ? -p.ilot.cote : x > cx ? -1 : 1
      const d = G.revoir.d
      let bx = x + cote * (r + G.pas) - d / 2
      bx = Math.min(W - G.marge - d, Math.max(G.marge, bx))
      // son étiquette (dessous) reste au-dessus de celle de la salle
      const bas = h - r - G.etiquette.haut + G.revoir.etiquette + 3
      p.revoir = { x: bx, l: d, haut: bas + d, bas, etiquette: { x: Math.min(W - 80, Math.max(0, bx + d / 2 - 40)), l: 80, haut: bas, bas: bas - G.revoir.etiquette } }
      haut = Math.max(haut, p.revoir.haut)
    }

    rangRoute.push(route.length)
    route.push([x, h])
    out.push(p)
    plafond = haut
  })
  while (monde < mondes - 1) porte(++monde)

  // Arrivée
  const arriveeBas = plafond + G.ecart + 24
  const H = arriveeBas + G.arrivee
  route.push([cx, H - GEO.arriveeCentre]) // centre du médaillon de l'arrivée

  // Conversion en y (haut → bas)
  const Y = (h) => H - h
  const rect = (o) => ({ x: o.x, y: Y(o.haut), l: o.l, h: o.haut - o.bas })
  const sallesY = out.map((p) => ({
    id: p.id,
    w: p.w,
    x: p.x,
    y: Y(p.h),
    r: p.r,
    cours: p.cours,
    etiquette: rect(p.etiquette),
    jouer: p.jouer && rect(p.jouer),
    revoir: p.revoir && { ...rect(p.revoir), etiquette: rect(p.revoir.etiquette) },
    ilot: p.ilot && {
      ...rect(p.ilot),
      cote: p.ilot.cote,
      tige: { x1: p.ilot.tige[0], x2: p.ilot.tige[1], y: Y(p.h) },
      cellules: p.ilot.cellules.map((c) => ({ ...c, y: Y(c.haut), haut: undefined })),
    },
  }))
  const portesY = portes.map((g) => ({ w: g.w, y: Y(g.haut), h: G.porte }))
  const routeY = route.map(([x, h]) => [x, Y(h)])

  // Bandes de couleur des mondes : de la porte du monde jusqu'à la porte suivante (le dernier jusqu'en haut)
  const bandes = portesY.map((g, k) => {
    const haut = k + 1 < portesY.length ? portesY[k + 1].y + G.porte / 2 : 0
    const bas = k === 0 ? H : g.y + G.porte / 2
    return { w: g.w, y: haut, h: bas - haut }
  })

  // Pictogrammes du décor : un tous les ≈ 420 px dans chaque bande, en alternant les bords (à moitié hors de l'écran)
  const filigranes = []
  bandes.forEach((b) => {
    const n = Math.max(1, Math.floor(b.h / 420))
    for (let k = 0; k < n; k++) {
      const y = b.y + b.h - G.porte - (k + 0.6) * (b.h - G.porte) / n
      filigranes.push({ w: b.w, k, x: (k + b.w) % 2 ? W - G.filigrane + 18 : -18, y: Math.round(y - G.filigrane / 2) })
    }
  })

  return {
    largeur: W,
    hauteur: H,
    salles: sallesY,
    portes: portesY,
    arrivee: { y: 0, h: G.arrivee },
    bandes,
    route: routeY,
    rangRoute,
    longueurs: longueursRoute(routeY),
    filigranes,
  }
}

// ── Modèle : ce que montre la carte pour un joueur ───────────────────────────

/**
 * Salles du chemin d'un joueur, prêtes pour disposerCarte et pour l'affichage.
 * @param {(id: string) => string} nom  nom complet d'une salle (fiche) ; le nom affiché est son nom court
 * @param {string|null} revoir          salle en cours à côté de laquelle mettre la bulle « À revoir » (ou null)
 * → [{ id, w, nom, label, etat: 'faite' | 'cours' | 'rattraper' | 'ouverte' | 'fermee', ouvert, decouverte, nbEtoiles,
 *      etoiles (ligne d'étoiles), cours, rattraper, fil, reprendre, revoir,
 *      annexes: [{ id, suite, etat, nbEtoiles, reprendre }] (tout l'îlot), ilot: groupes affichés (repliés au besoin) }]
 */
export function modeleCarte(P, av, { nom = (id) => id, revoir = false } = {}) {
  const enCours = salleEnCours(P, av)
  const rattraper = aRattraper(P, av)
  const tousIlots = ilots(P, av)
  const etatBulle = (id) => {
    const s = salleDe(av, id)
    return { etat: s.decouverte ? 'faite' : estOuvert(P, av, id) ? 'ouverte' : 'fermee', nbEtoiles: s.etoiles, reprendre: !!s.enCours }
  }
  const PRIORITE = { ouverte: 0, faite: 1, fermee: 2 }
  const ch = cheminDe(P, av)
  const revoirSur = revoir ? enCours ?? ch.at(-1) : null // chemin fini : à côté de la dernière salle
  return ch.map((id) => {
    const s = salleDe(av, id)
    const ouvert = estOuvert(P, av, id)
    const cours = id === enCours
    const etat = s.decouverte ? 'faite' : cours ? 'cours' : rattraper.has(id) ? 'rattraper' : ouvert ? 'ouverte' : 'fermee'
    const groupes = (tousIlots.get(id) ?? []).map((g) => g.map((b) => ({ ...b, ...etatBulle(b.id) })))
    const annexes = groupes.flat()
    // Îlot replié au-delà de 6 annexes : les 2 plus utiles (ouvertes à faire, puis faites, puis fermées) et « +N »
    const ilot =
      annexes.length > GEO.repli
        ? [
            ...[...annexes]
              .sort((a, b) => PRIORITE[a.etat] - PRIORITE[b.etat])
              .slice(0, 2)
              .map((b) => [{ ...b, suite: false }]),
            [{ id: `plus:${id}`, plus: annexes.length - 2, suite: false }],
          ]
        : groupes
    return {
      id,
      w: P.monde.get(id),
      label: nom(id),
      nom: nomCourt(P, id, nom(id)),
      etat,
      ouvert,
      decouverte: s.decouverte,
      nbEtoiles: s.etoiles,
      etoiles: s.decouverte,
      cours,
      rattraper: etat === 'rattraper',
      fil: !estTronc(P, id),
      reprendre: !!s.enCours && !cours,
      revoir: id === revoirSur,
      annexes,
      ilot,
    }
  })
}

// ── Route : courbe de Catmull-Rom (serpentin), en courbes de Bézier ─────────

const arrondi = (v) => Math.round(v * 10) / 10

/** Points de contrôle du segment k → k+1 (mêmes points pour la route entière et ses morceaux). */
function segment(pts, k) {
  const p0 = pts[k - 1] ?? pts[k]
  const p1 = pts[k]
  const p2 = pts[k + 1]
  const p3 = pts[k + 2] ?? p2
  return [p1, [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6], p2]
}

/** Chemin SVG de la route, du point `de` au point `a` (indices de `route`). */
export function traceRoute(pts, de = 0, a = pts.length - 1) {
  if (a <= de) return ''
  let d = `M${arrondi(pts[de][0])} ${arrondi(pts[de][1])}`
  for (let k = de; k < a; k++) {
    const [, c1, c2, p2] = segment(pts, k)
    d += `C${arrondi(c1[0])} ${arrondi(c1[1])} ${arrondi(c2[0])} ${arrondi(c2[1])} ${arrondi(p2[0])} ${arrondi(p2[1])}`
  }
  return d
}

/** Point de la courbe du segment k à t ∈ [0, 1]. */
export function pointRoute(pts, k, t) {
  const [p1, c1, c2, p2] = segment(pts, k)
  const u = 1 - t
  const f = (i) => u * u * u * p1[i] + 3 * u * u * t * c1[i] + 3 * u * t * t * c2[i] + t * t * t * p2[i]
  return [f(0), f(1)]
}

/** Longueur cumulée de la route à chaque point de passage (pour animer le tracé doré). */
function longueursRoute(pts) {
  const L = [0]
  for (let k = 0; k < pts.length - 1; k++) {
    let l = 0
    let prec = pts[k]
    for (let j = 1; j <= 16; j++) {
      const p = pointRoute(pts, k, j / 16)
      l += Math.hypot(p[0] - prec[0], p[1] - prec[1])
      prec = p
    }
    L.push(L[k] + l)
  }
  return L
}

/**
 * Rectangles occupés (pour les tests et le défilement) : pastilles, étiquettes, « Jouer », îlots, « À revoir », portes,
 * arrivée. → [{ type, id, x, y, l, h }]
 */
export function rectangles(carte) {
  const out = []
  for (const s of carte.salles) {
    out.push({ type: 'salle', id: s.id, x: s.x - s.r, y: s.y - s.r, l: 2 * s.r, h: 2 * s.r })
    out.push({ type: 'etiquette', id: s.id, ...s.etiquette })
    if (s.jouer) out.push({ type: 'jouer', id: s.id, ...s.jouer })
    if (s.ilot) out.push({ type: 'ilot', id: s.id, x: s.ilot.x, y: s.ilot.y, l: s.ilot.l, h: s.ilot.h })
    if (s.revoir) {
      out.push({ type: 'revoir', id: s.id, x: s.revoir.x, y: s.revoir.y, l: s.revoir.l, h: s.revoir.h })
      out.push({ type: 'revoir-etiquette', id: s.id, ...s.revoir.etiquette })
    }
  }
  for (const g of carte.portes) out.push({ type: 'porte', id: `monde-${g.w}`, x: 0, y: g.y, l: carte.largeur, h: g.h })
  out.push({ type: 'arrivee', id: 'arrivee', x: 0, y: 0, l: carte.largeur, h: carte.arrivee.h })
  return out
}

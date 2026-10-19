/* Maquettes HistoMap — comportements communs (sans dépendance) :
   icônes, aperçu des fiches liées (feuille du bas), onglets, bascule Frise | Carte,
   curseur d'année, accueil en 3 écrans, thème clair / sombre. */

// ── Icônes (mêmes tracés que src/components/ui/Icon.jsx, + quelques nouvelles) ──
const ICONS = {
  home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5"/>',
  timeline: '<path d="M3 12h15"/><path d="m15 8 4 4-4 4"/><circle cx="6" cy="12" r="1.6"/><circle cx="11" cy="12" r="1.6"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/>',
  cards: '<rect x="3" y="6" width="13" height="15" rx="2.5"/><path d="M8 3h10.5A2.5 2.5 0 0 1 21 5.5V17"/>',
  swords: '<path d="M14.5 17.5 3 6V3h3l11.5 11.5"/><path d="m13 19 6-6M16 16l4 4M19 21l2-2"/><path d="M9.5 6.5 12 4h3v3l-2.5 2.5"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
  arrowLeft: '<path d="M19 12H5"/><path d="m11 18-6-6 6-6"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  chevronRight: '<path d="m9 6 6 6-6 6"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  crown: '<path d="m3 8 4.5 4L12 5l4.5 7L21 8l-2 11H5L3 8Z"/>',
  star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z"/>',
  flask: '<path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3"/><path d="M7 15h10"/>',
  temple: '<path d="M3 9 12 4l9 5"/><path d="M4 9h16M5 9v9M9.5 9v9M14.5 9v9M19 9v9M3 20h18"/>',
  handshake: '<path d="m11 17 2 2a1.4 1.4 0 0 0 2-2"/><path d="m14 14 2.5 2.5a1.4 1.4 0 0 0 2-2L15 11l-2 1.5a2 2 0 0 1-2.5-3L13 7.5 15 7l6 5"/><path d="m3 12 6-5 2 .5"/><path d="m3 12 5.5 5.5a1.4 1.4 0 0 0 2-2"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  external: '<path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  sparkles: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><path d="m6.3 6.3 2.1 2.1M15.6 15.6l2.1 2.1M6.3 17.7l2.1-2.1M15.6 8.4l2.1-2.1"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  share: '<path d="M12 3v12"/><path d="m8 7 4-4 4 4"/><path d="M6 11H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7"/><path d="M18 14.5a6.5 6.5 0 0 1 3.5 5.5"/>',
  coins: '<ellipse cx="9" cy="7" rx="6" ry="3"/><path d="M3 7v5c0 1.7 2.7 3 6 3s6-1.3 6-3V7"/><path d="M9 15v2c0 1.7 2.7 3 6 3s6-1.3 6-3v-5c0-1.7-2.7-3-6-3"/>',
  palette: '<path d="M12 3a9 9 0 0 0 0 18c1.4 0 2-1 2-2 0-1.4-1-1.6-1-3 0-1 .8-1.8 1.8-1.8H17a4 4 0 0 0 4-4C21 6.3 17 3 12 3Z"/><circle cx="7.5" cy="11" r="1.2"/><circle cx="10" cy="7" r="1.2"/><circle cx="15" cy="7.2" r="1.2"/>',
  book: '<path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H20v15H5.5A1.5 1.5 0 0 0 4 19.5v-15Z"/><path d="M4 19.5A1.5 1.5 0 0 0 5.5 21H20"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>',
  flame: '<path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2.2 1-3.6 2-4.5.3 1.6 1.2 2.5 2 2.5-.5-3 .5-5.8 1-8Z"/>',
  trophy: '<path d="M8 4h8v4a4 4 0 0 1-8 0V4Z"/><path d="M8 6H4.5a3 3 0 0 0 3.5 4M16 6h3.5a3 3 0 0 1-3.5 4"/><path d="M12 12v3M9 20h6M10 15h4v5h-4z"/>',
  alert: '<path d="M12 3 2.5 20h19L12 3Z"/><path d="M12 10v4M12 17h.01"/>',
  hourglass: '<path d="M6 3h12M6 21h12M7 3c0 5 10 5 10 9s-10 4-10 9M17 3c0 5-10 5-10 9"/>',
  play: '<path d="M7 4.5v15l12-7.5-12-7.5Z"/>',
  moon: '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"/>',
  filter: '<path d="M3 5h18l-7 8v6l-4 2v-8L3 5Z"/>',
  history: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l3 2"/>',
}
function drawIcons(root = document) {
  root.querySelectorAll('svg[data-i]').forEach((svg) => {
    svg.setAttribute('viewBox', '0 0 24 24')
    svg.setAttribute('aria-hidden', 'true')
    svg.classList.add('i')
    svg.innerHTML = ICONS[svg.dataset.i] ?? ''
  })
}

// ── Mini-répertoire des fiches liées (données d'exemple, à vérifier au sprint 11) ──
const E = {
  // Personnes
  'jules-cesar': { type: 'personne', nom: 'Jules César', dates: '−100 → −44', resume: 'Général et homme d’État romain. Il conquiert la Gaule, déclenche la guerre civile en franchissant le Rubicon, puis devient dictateur. Assassiné aux ides de mars −44.', href: '06-fiche-personne.html' },
  auguste: { type: 'personne', nom: 'Auguste (Octave)', dates: '−63 → 14', resume: 'Petit-neveu et fils adoptif de César. Vainqueur des guerres civiles, il devient en −27 le premier empereur romain et règne jusqu’à sa mort en 14.' },
  ciceron: { type: 'personne', nom: 'Cicéron', dates: '−106 → −43', resume: 'Avocat, consul en −63 et plus grand orateur de Rome. Défenseur de la République, il est assassiné sur ordre de Marc Antoine.' },
  trajan: { type: 'personne', nom: 'Trajan', dates: '53 → 117', resume: 'Empereur de 98 à 117. Sous son règne, l’Empire atteint sa plus grande étendue (Dacie, Mésopotamie).' },
  constantin: { type: 'personne', nom: 'Constantin Ier', dates: 'vers 272 → 337', resume: 'Empereur de 306 à 337. Il accorde la liberté de culte aux chrétiens (313) et fonde Constantinople (330).' },
  hadrien: { type: 'personne', nom: 'Hadrien', dates: '76 → 138', resume: 'Empereur de 117 à 138. Il renonce aux conquêtes et fortifie les frontières, comme le mur d’Hadrien en Bretagne.' },
  'marc-aurele': { type: 'personne', nom: 'Marc Aurèle', dates: '121 → 180', resume: 'Empereur de 161 à 180, philosophe stoïcien, auteur des Pensées pour moi-même. Son règne est marqué par les guerres sur le Danube.' },
  neron: { type: 'personne', nom: 'Néron', dates: '37 → 68', resume: 'Empereur de 54 à 68, dernier des Julio-Claudiens. Son règne est marqué par le grand incendie de Rome (64) et une première persécution des chrétiens.' },
  tibere: { type: 'personne', nom: 'Tibère', dates: '−42 → 37', resume: 'Fils adoptif d’Auguste, deuxième empereur (14 → 37).' },
  caligula: { type: 'personne', nom: 'Caligula', dates: '12 → 41', resume: 'Empereur de 37 à 41, assassiné par des officiers de la garde prétorienne.' },
  claude: { type: 'personne', nom: 'Claude', dates: '−10 → 54', resume: 'Empereur de 41 à 54. Il lance la conquête de la Bretagne (actuelle Grande-Bretagne) en 43.' },
  pompee: { type: 'personne', nom: 'Pompée', dates: '−106 → −48', resume: 'Grand général, allié puis rival de César. Vaincu à Pharsale (−48), il est assassiné en Égypte.' },
  crassus: { type: 'personne', nom: 'Crassus', dates: 'vers −115 → −53', resume: 'Homme le plus riche de Rome, allié de César et de Pompée. Tué à Carrhes face aux Parthes.' },
  cleopatre: { type: 'personne', nom: 'Cléopâtre VII', dates: '−69 → −30', resume: 'Dernière reine de l’Égypte ptolémaïque, alliée de César puis de Marc Antoine.' },
  brutus: { type: 'personne', nom: 'Brutus', dates: 'vers −85 → −42', resume: 'Sénateur, l’un des chefs de la conjuration contre César. Il se suicide après la défaite de Philippes.' },
  cassius: { type: 'personne', nom: 'Cassius', dates: 'vers −85 → −42', resume: 'Co-organisateur de la conjuration contre César, vaincu à Philippes.' },
  'marc-antoine': { type: 'personne', nom: 'Marc Antoine', dates: '−83 → −30', resume: 'Lieutenant de César, puis rival d’Octave. Vaincu à Actium (−31) avec Cléopâtre.' },
  vercingetorix: { type: 'personne', nom: 'Vercingétorix', dates: 'vers −80 → −46', resume: 'Chef arverne à la tête de la révolte gauloise. Il se rend à César à Alésia (−52).' },
  sosigene: { type: 'personne', nom: 'Sosigène d’Alexandrie', dates: 'Ier s. av. J.-C.', resume: 'Astronome grec qui, selon Pline l’Ancien, conseille César pour la réforme du calendrier.' },
  'gregoire-xiii': { type: 'personne', nom: 'Grégoire XIII', dates: '1502 → 1585', resume: 'Pape de 1572 à 1585. Il promulgue en 1582 le calendrier qui porte son nom.' },
  // Événements
  'fondation-rome': { type: 'evenement', nom: 'Fondation de Rome', dates: '−753 (selon la tradition)', resume: 'Selon la légende, Romulus fonde la ville sur le Palatin. L’archéologie montre des villages plus anciens sur les collines.' },
  republique: { type: 'evenement', nom: 'Naissance de la République', dates: '−509 (selon la tradition)', resume: 'Le dernier roi, Tarquin le Superbe, est chassé. Deux consuls élus pour un an le remplacent.' },
  'ides-de-mars': { type: 'evenement', nom: 'Assassinat de César', dates: '15 mars −44', resume: 'Jules César est poignardé en pleine séance du Sénat par des sénateurs conjurés.', href: '07-fiche-evenement.html' },
  'auguste-empereur': { type: 'evenement', nom: 'Octave devient Auguste', dates: '−27', resume: 'Le Sénat donne à Octave le titre d’Auguste : c’est le début de l’Empire.' },
  'chute-occident': { type: 'evenement', nom: 'Fin de l’Empire d’Occident', dates: '476', resume: 'Le chef germanique Odoacre dépose Romulus Augustule, dernier empereur d’Occident. L’Empire d’Orient continue.' },
  rubicon: { type: 'evenement', nom: 'Passage du Rubicon', dates: 'janvier −49', resume: 'César franchit avec son armée la rivière qui marque la limite de l’Italie : c’est le début de la guerre civile.' },
  alesia: { type: 'evenement', nom: 'Siège d’Alésia', dates: '−52', resume: 'Victoire de César sur la coalition gauloise ; Vercingétorix se rend.' },
  pharsale: { type: 'evenement', nom: 'Bataille de Pharsale', dates: '−48', resume: 'En Grèce, César bat Pompée.' },
  philippes: { type: 'evenement', nom: 'Bataille de Philippes', dates: '−42', resume: 'Octave et Marc Antoine battent Brutus et Cassius, les chefs des conjurés.' },
  actium: { type: 'evenement', nom: 'Bataille d’Actium', dates: '−31', resume: 'Octave bat Marc Antoine et Cléopâtre. L’Égypte devient romaine l’année suivante.' },
  'partage-395': { type: 'evenement', nom: 'Partage de l’Empire', dates: '395', resume: 'À la mort de Théodose Ier, l’Empire est partagé entre ses deux fils : Occident et Orient.' },
  // Découvertes
  'calendrier-julien': { type: 'decouverte', nom: 'Calendrier julien', dates: '−46 (en vigueur en −45)', resume: 'Année de 365 jours et un jour de plus tous les quatre ans : la réforme de César, base de notre calendrier.', href: '08-fiche-decouverte.html' },
  'beton-romain': { type: 'decouverte', nom: 'Béton romain', dates: 'dès le IIe s. av. J.-C.', resume: 'Mortier de chaux et de cendre volcanique (pouzzolane) qui durcit même sous l’eau : ports, voûtes, coupole du Panthéon.' },
  aqueducs: { type: 'decouverte', nom: 'Aqueducs', dates: 'dès −312', resume: 'Canaux en pente douce qui amènent l’eau aux villes. Le premier de Rome, l’Aqua Appia, date de −312.' },
  'droit-romain': { type: 'decouverte', nom: 'Droit romain', dates: 'vers −450 → 534', resume: 'De la loi des Douze Tables au Code de Justinien : la base de nombreux droits européens.' },
  'calendrier-gregorien': { type: 'decouverte', nom: 'Calendrier grégorien', dates: '1582', resume: 'Réforme du pape Grégoire XIII qui corrige la dérive du calendrier julien : dix jours sont supprimés.' },
  // Guerres
  'guerres-puniques': { type: 'guerre', nom: 'Guerres puniques', dates: '−264 → −146', resume: 'Trois guerres entre Rome et Carthage pour la Méditerranée occidentale. Carthage est détruite en −146.' },
  'guerre-des-gaules': { type: 'guerre', nom: 'Guerre des Gaules', dates: '−58 → −50', resume: 'Conquête de la Gaule par César, racontée par lui-même dans ses Commentaires.' },
  'guerre-civile-cesar': { type: 'guerre', nom: 'Guerre civile de César', dates: '−49 → −45', resume: 'César contre Pompée et les partisans du Sénat, de l’Italie à l’Espagne en passant par la Grèce et l’Afrique.' },
  'guerres-daciques': { type: 'guerre', nom: 'Guerres daciques', dates: '101 → 106', resume: 'Conquête de la Dacie (actuelle Roumanie) par Trajan, célébrée par la colonne Trajane.' },
  andrinople: { type: 'guerre', nom: 'Bataille d’Andrinople', dates: '378', resume: 'Lourde défaite romaine face aux Goths ; l’empereur Valens est tué.' },
  // Civilisations
  rome: { type: 'civ', nom: 'Rome antique', dates: '−753 → 476', resume: 'D’une cité du Latium à un empire méditerranéen.', href: '05-fiche-civilisation.html' },
  carthage: { type: 'civ', nom: 'Carthage', dates: '−814 → −146', resume: 'Puissance marchande d’Afrique du Nord, grande rivale de Rome.' },
  celtes: { type: 'civ', nom: 'Celtes / Gaulois', dates: '−800 → −50', resume: 'Peuples d’Europe occidentale et centrale, conquis en Gaule par César.' },
  egypte: { type: 'civ', nom: 'Égypte antique', dates: '−3150 → −30', resume: 'Trois millénaires de civilisation sur les bords du Nil, jusqu’à la conquête romaine.' },
  byzance: { type: 'civ', nom: 'Empire byzantin', dates: '395 → 1453', resume: 'L’Empire romain d’Orient, qui survit mille ans à l’Occident.' },
}
const TYPE = {
  personne: ['person', 'Personne'],
  evenement: ['event', 'Événement'],
  decouverte: ['discovery', 'Découverte'],
  guerre: ['war', 'Guerre'],
  civ: ['civ', 'Civilisation'],
}

// ── Feuille du bas : aperçu d'une fiche liée ─────────────────────────────────
function setupSheet() {
  const phone = document.querySelector('.phone')
  if (!phone) return
  const backdrop = Object.assign(document.createElement('div'), { className: 'sheet-backdrop' })
  const sheet = Object.assign(document.createElement('section'), { className: 'sheet' })
  sheet.setAttribute('role', 'dialog')
  sheet.setAttribute('aria-modal', 'true')
  phone.append(backdrop, sheet)
  let opener = null
  const close = () => {
    phone.classList.remove('sheet-open')
    opener?.focus()
  }
  backdrop.addEventListener('click', close)
  document.addEventListener('keydown', (e) => e.key === 'Escape' && close())

  phone.addEventListener('click', (ev) => {
    const el = ev.target.closest('[data-ref]')
    if (!el) return
    ev.preventDefault()
    opener = el
    const id = el.dataset.ref
    const e = E[id] ?? {
      type: el.dataset.type ?? 'personne',
      nom: el.dataset.nom ?? el.textContent.trim(),
      dates: el.dataset.dates ?? '',
      resume: el.dataset.resume ?? '',
    }
    const [cls, label] = TYPE[e.type] ?? TYPE.personne
    sheet.setAttribute('aria-label', `Aperçu : ${e.nom}`)
    sheet.innerHTML = `
      <div class="grabber"></div>
      <div style="display:flex;justify-content:space-between;align-items:start;gap:8px">
        <span class="badge ${cls}">${label}</span>
        <button class="icon-btn" data-close aria-label="Fermer l'aperçu" style="margin:-8px -8px 0 0"><svg data-i="close"></svg></button>
      </div>
      <h3 class="display" style="font-size:26px;font-weight:600;margin-top:6px">${e.nom}</h3>
      <p class="muted tabular" style="margin-top:2px">${e.dates}</p>
      <p class="prose" style="margin-top:12px">${e.resume}</p>
      ${
        e.href
          ? `<a class="btn btn-primary btn-block" style="margin-top:18px" href="${e.href}">Ouvrir la fiche <svg data-i="arrowRight"></svg></a>`
          : `<p class="sample" style="margin:16px 0 0">Maquette : la fiche complète de « ${e.nom} » sera rédigée au sprint 11. L’aperçu répond déjà à « qui / quoi / quand ? » sans quitter la page.</p>`
      }`
    drawIcons(sheet)
    sheet.querySelector('[data-close]').addEventListener('click', close)
    phone.classList.add('sheet-open')
    sheet.querySelector('[data-close]').focus({ preventScroll: true })
  })
}

// ── Onglets de contenu ───────────────────────────────────────────────────────
function setupTabs() {
  document.querySelectorAll('[data-tabs]').forEach((bar) => {
    const buttons = [...bar.querySelectorAll('[data-tab]')]
    const show = (name, scroll) => {
      buttons.forEach((b) => b.setAttribute('aria-selected', String(b.dataset.tab === name)))
      document.querySelectorAll('[data-panel]').forEach((p) => (p.hidden = p.dataset.panel !== name))
      if (scroll) {
        const screen = bar.closest('.screen')
        const top = bar.offsetTop - 56
        if (screen.scrollTop > top) screen.scrollTo({ top })
      }
      history.replaceState(null, '', `#${name}`)
    }
    buttons.forEach((b) => b.addEventListener('click', () => show(b.dataset.tab, true)))
    document.querySelectorAll('[data-goto-tab]').forEach((a) =>
      a.addEventListener('click', (e) => {
        e.preventDefault()
        show(a.dataset.gotoTab, true)
      })
    )
    const initial = location.hash.slice(1)
    show(buttons.some((b) => b.dataset.tab === initial) ? initial : buttons[0].dataset.tab, false)
  })
}

// ── Bascule Frise | Carte ────────────────────────────────────────────────────
function setupSegments() {
  document.querySelectorAll('[data-seg]').forEach((seg) => {
    const buttons = [...seg.querySelectorAll('[data-view]')]
    const show = (name) => {
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.view === name)))
      document.querySelectorAll('[data-view-panel]').forEach((p) => (p.hidden = p.dataset.viewPanel !== name))
    }
    buttons.forEach((b) => b.addEventListener('click', () => show(b.dataset.view)))
    show(buttons[0].dataset.view)
  })
}

// ── Curseur d'année partagé (Explorer) ───────────────────────────────────────
const formatYear = (y) => (y < 0 ? `${Math.abs(y).toLocaleString('fr-FR')} av. J.-C.` : `${y}`)
function setupYear() {
  const range = document.querySelector('[data-year-range]')
  if (!range) return
  const update = () => {
    const y = Number(range.value)
    document.querySelectorAll('[data-year-label]').forEach((el) => (el.textContent = formatYear(y)))
    const min = Number(range.min)
    const max = Number(range.max)
    document.querySelectorAll('[data-year-line]').forEach((el) => (el.style.left = `${((y - min) / (max - min)) * 100}%`))
  }
  range.addEventListener('input', update)
  update()
}

// ── Accueil en 3 écrans ──────────────────────────────────────────────────────
function setupOnboarding() {
  const root = document.querySelector('[data-onboarding]')
  if (!root) return
  const steps = [...root.querySelectorAll('[data-step]')]
  const dots = [...root.querySelectorAll('[data-dot]')]
  const next = root.querySelector('[data-next]')
  let i = 0
  const show = () => {
    steps.forEach((s, k) => (s.hidden = k !== i))
    dots.forEach((d, k) => d.setAttribute('aria-current', String(k === i)))
    next.innerHTML = i < steps.length - 1 ? 'Suivant <svg data-i="arrowRight"></svg>' : 'Commencer'
    drawIcons(next)
  }
  next.addEventListener('click', () => {
    if (i < steps.length - 1) {
      i++
      show()
    } else location.href = '02-accueil.html'
  })
  dots.forEach((d, k) => d.addEventListener('click', () => ((i = k), show())))
  show()
}

// ── Thème ────────────────────────────────────────────────────────────────────
function setupTheme() {
  const btn = document.querySelector('[data-theme-toggle]')
  if (!btn) return
  const modes = ['system', 'dark', 'light']
  const label = { system: 'Thème : système', dark: 'Thème : sombre', light: 'Thème : clair' }
  let mode = 'system'
  try {
    mode = localStorage.getItem('maquette-theme') ?? 'system'
  } catch {}
  const apply = () => {
    if (mode === 'system') delete document.documentElement.dataset.theme
    else document.documentElement.dataset.theme = mode
    btn.lastChild.textContent = ` ${label[mode]}`
  }
  btn.addEventListener('click', () => {
    mode = modes[(modes.indexOf(mode) + 1) % modes.length]
    try {
      localStorage.setItem('maquette-theme', mode)
    } catch {}
    apply()
  })
  apply()
}

// ── Barres de règne : position et longueur calculées depuis les dates ───────
function setupReigns() {
  document.querySelectorAll('[data-span]').forEach((group) => {
    const [a, b] = group.dataset.span.split(',').map(Number)
    group.querySelectorAll('.reign[data-from]').forEach((r) => {
      const from = Number(r.dataset.from)
      const to = Number(r.dataset.to)
      const bar = r.querySelector('.bar span')
      if (!bar) return
      bar.style.left = `${((from - a) / (b - a)) * 100}%`
      bar.style.width = `${Math.max(1.5, ((to - from) / (b - a)) * 100)}%`
    })
  })
}

// ── Barres de la frise (Explorer) ────────────────────────────────────────────
function setupFrise() {
  document.querySelectorAll('[data-frise-span]').forEach((box) => {
    const [a, b] = box.dataset.friseSpan.split(',').map(Number)
    box.querySelectorAll('[data-from]').forEach((el) => {
      const from = Math.max(a, Number(el.dataset.from))
      const to = Math.min(b, Number(el.dataset.to))
      el.style.left = `${((from - a) / (b - a)) * 100}%`
      el.style.width = `${((to - from) / (b - a)) * 100}%`
    })
  })
}

// ── Quiz express (une question, correction immédiate) ───────────────────────
function setupMiniQuiz() {
  document.querySelectorAll('[data-mini-quiz]').forEach((q) => {
    const options = [...q.querySelectorAll('[data-option]')]
    const result = q.querySelector('[data-result]')
    options.forEach((o) =>
      o.addEventListener('click', () => {
        options.forEach((x) => {
          x.disabled = true
          if (x.dataset.option === 'ok') x.classList.add('good')
        })
        if (o.dataset.option !== 'ok') o.classList.add('bad')
        result.hidden = false
        result.textContent = (o.dataset.option === 'ok' ? 'Bonne réponse ! ' : 'Pas tout à fait. ') + result.dataset.explain
      })
    )
  })
}

drawIcons()
setupFrise()
setupMiniQuiz()
setupReigns()
setupSheet()
setupTabs()
setupSegments()
setupYear()
setupOnboarding()
setupTheme()

/** Chapitre rédigé : Chavín (≈ 900 – 200 av. J.-C.). */
export default {
  readingTime: 3,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'temple',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Un temple au cœur des Andes',
      body:
        "Vers 900 av. J.-C. (peut-être plus tôt selon les fouilles récentes), un grand temple de pierre est bâti à Chavín de Huántar, dans une vallée des Andes du Pérou, à environ 3 150 m d'altitude. Il est agrandi pendant des siècles.",
      highlight: { value: '≈ 900 av. J.-C.', label: 'construction du Vieux Temple' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: "L'influence de Chavín",
      years: [-400, -200],
      caption: "Chavín n'est pas un empire conquérant : la carte montre surtout la zone où son style et son culte se diffusent.",
    },
    {
      id: 'pelerinage',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Un grand centre de pèlerinage',
      body:
        "Chavín est avant tout un lieu sacré. Des pèlerins viennent de loin, de la côte comme de la forêt amazonienne, apporter des offrandes : coquillages marins, céramiques, objets précieux. On n'y a pas trouvé de traces d'une armée conquérante.",
    },
    {
      id: 'lanzon',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Croyances',
      value: '4,5 m',
      label: 'la hauteur du Lanzón, idole de granit',
      caption: "Cachée au croisement de galeries sombres du Vieux Temple, cette pierre sculptée en forme de lance représente une divinité aux crocs de félin et aux cheveux de serpents. Elle est toujours en place.",
    },
    {
      id: 'galeries',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Un labyrinthe dans le noir',
      body:
        "Le temple est percé de galeries souterraines étroites, sans lumière, et de canaux où l'eau circule. Selon les archéologues, ces lieux servaient à impressionner les fidèles : obscurité, bruit de l'eau, son des trompes en coquillage…",
    },
    {
      id: 'felin',
      tier: 1,
      type: 'text',
      kicker: 'Culture',
      title: "Jaguars, serpents et aigles",
      body:
        "L'art de Chavín mêle l'humain et l'animal : crocs de jaguar, serpents, aigles harpies, caïmans. On retrouve ce style sur des pierres, des tissus, des poteries et des objets en or, très loin du temple : c'est le premier grand style partagé dans les Andes.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Durée',
      title: 'Les grandes étapes',
      items: [
        { year: -900, label: 'Construction du Vieux Temple (date approximative)' },
        { year: -500, label: 'Agrandissement : le Nouveau Temple et son portail' },
        { year: -400, label: "Apogée de l'influence de Chavín" },
        { year: -200, label: 'Déclin du centre religieux' },
      ],
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Un déclin progressif',
      body:
        "Entre 500 et 200 av. J.-C. selon les estimations, le temple perd son prestige et des villageois s'installent dans ses places. On ne sait pas exactement pourquoi : crise religieuse, rivalités entre régions… Ensuite, des cultures régionales prennent le relais, comme Paracas puis Nazca.",
    },

    // ── Niveau 2 ──
    {
      id: 'tello',
      tier: 2,
      type: 'person',
      nom: 'Julio C. Tello',
      role: 'Archéologue péruvien',
      dates: '1880 – 1947',
      description: "Il étudie Chavín à partir de 1919. Il y voit la « culture mère » des civilisations andines, comme on a dit des Olmèques pour le Mexique. Aujourd'hui, on sait que des civilisations plus anciennes, comme Caral, existaient déjà.",
    },
    {
      id: 'pututus',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Les trompes en coquillage',
      body:
        "En 2001, une vingtaine de pututus, des trompes taillées dans de gros coquillages venus des mers chaudes de l'Équateur, sont découvertes dans une galerie. Décorées, elles produisaient un son puissant pendant les cérémonies.",
    },
    {
      id: 'tetes-clous',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Les têtes-clous',
      body:
        "Sur les murs extérieurs étaient fixées des têtes de pierre, les « têtes-clous ». Certaines passent d'un visage humain à celui d'un félin. Les chercheurs y voient la transformation d'un prêtre, peut-être sous l'effet du cactus San Pedro, une plante qui provoque des visions.",
    },
    {
      id: 'unesco',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Un site fragile',
      body:
        "Le site est inscrit au patrimoine mondial de l'UNESCO en 1985. En 1945, une coulée de boue l'avait en partie enseveli. Des stèles sculptées, comme la stèle Raimondi et l'obélisque Tello, sont aujourd'hui conservées dans des musées du Pérou.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve Chavín de Huántar ?', options: ['Le Pérou', 'Le Mexique', 'La Bolivie', "L'Équateur"], answer: 0 },
    { id: 'relief', type: 'mcq', prompt: 'Où le temple de Chavín est-il construit ?', options: ['Dans une vallée des Andes', 'Sur une île du lac Titicaca', 'Dans le désert côtier', 'Dans la forêt amazonienne'], answer: 0 },
    { id: 'date', type: 'mcq', prompt: 'Vers quelle date le Vieux Temple est-il construit ?', options: ['Vers 900 av. J.-C.', 'Vers 2600 av. J.-C.', 'Vers 600 apr. J.-C.', 'Vers 1450'], answer: 0 },
    { id: 'role', type: 'mcq', prompt: 'Quel est le rôle principal de Chavín de Huántar ?', options: ['Un centre de pèlerinage', 'Une forteresse militaire', 'Un port de commerce', "La capitale d'un empire conquérant"], answer: 0 },
    { id: 'armee', type: 'tf', prompt: 'Chavín impose son influence grâce à une grande armée conquérante.', answer: false, explanation: 'Aucune trace d’armée conquérante : son influence est surtout religieuse et artistique.' },
    { id: 'lanzon', type: 'mcq', prompt: 'Comment s’appelle l’idole de granit cachée au cœur du Vieux Temple ?', options: ['Le Lanzón', 'La Porte du Soleil', 'Le Colibri', 'La Pirámide Mayor'], answer: 0 },
    { id: 'lanzon-place', type: 'tf', prompt: 'Le Lanzón se trouve toujours à son emplacement d’origine.', answer: true },
    { id: 'galeries', type: 'mcq', prompt: 'Que trouve-t-on à l’intérieur du temple ?', options: ['Des galeries souterraines obscures', 'Des fresques de batailles', 'Une bibliothèque', 'Des tombeaux royaux en or'], answer: 0 },
    { id: 'animal', type: 'mcq', prompt: "Quel animal revient souvent dans l'art de Chavín ?", options: ['Le jaguar', 'Le cheval', 'Le lion', "L'éléphant"], answer: 0 },
    { id: 'pututus', type: 'mcq', prompt: 'Que sont les pututus découverts en 2001 ?', options: ['Des trompes en coquillage', 'Des statues de pierre', 'Des momies', 'Des quipus'], answer: 0 },
    { id: 'tetes', type: 'mcq', prompt: 'Que montrent certaines « têtes-clous » ?', options: ['Un visage humain qui se change en félin', 'Des rois couronnés', 'Des guerriers à cheval', 'Des dieux grecs'], answer: 0 },
    { id: 'san-pedro', type: 'mcq', prompt: 'Quelle plante provoquant des visions est associée aux rites de Chavín ?', options: ['Le cactus San Pedro', 'Le cacao', 'Le maïs', 'Le coton'], answer: 0 },
    { id: 'tello', type: 'mcq', prompt: 'Quel archéologue voyait en Chavín la « culture mère » des Andes ?', options: ['Julio C. Tello', 'Ruth Shady', 'Hiram Bingham', 'Matthew Stirling'], answer: 0 },
    { id: 'mere', type: 'tf', prompt: 'Chavín est la plus ancienne civilisation des Andes.', answer: false, explanation: 'Caral, au Pérou, est bien plus ancienne (vers 2600 av. J.-C.).' },
    { id: 'unesco', type: 'mcq', prompt: "En quelle année Chavín est-il inscrit au patrimoine mondial de l'UNESCO ?", options: ['1985', '1911', '1945', '2009'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Essor de Caral', 'Construction du Vieux Temple de Chavín', 'Études de Julio C. Tello à Chavín', 'Coulée de boue sur le site'] },
  ],

  recap: [
    'Vers 900 av. J.-C. : grand temple de Chavín de Huántar, dans les Andes du Pérou',
    'Un centre de pèlerinage, pas un empire conquérant',
    'Galeries obscures, Lanzón, art du jaguar : le premier grand style partagé des Andes',
    'Déclin entre 500 et 200 av. J.-C. ; relais pris par Paracas puis Nazca',
  ],
}

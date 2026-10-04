/** Chapitre rédigé : Culture Nazca (≈ 100 av. J.-C. – 650 apr. J.-C.). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'desert',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Une culture du désert',
      body:
        "Vers 100 av. J.-C., dans les vallées du sud du Pérou, entre l'océan Pacifique et les Andes, se développe la culture Nazca. Elle succède à la culture Paracas, célèbre pour ses tissus. La région est l'une des plus sèches du monde : il n'y pleut presque jamais.",
      highlight: { value: '≈ 100 av. J.-C.', label: 'débuts de la culture Nazca' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Les vallées de Nazca',
      years: [-100, 300],
      caption: "Des oasis le long de petites rivières qui descendent des Andes, au milieu du désert côtier.",
    },
    {
      id: 'lignes',
      tier: 1,
      type: 'text',
      kicker: 'Culture',
      title: 'Les lignes de Nazca',
      body:
        "Sur un plateau désertique, les Nazcas tracent des lignes droites de plusieurs kilomètres, des formes géométriques et des figures géantes : colibri, singe, araignée, condor… Ces géoglyphes sont si grands qu'on les voit le mieux depuis les collines ou le ciel.",
    },
    {
      id: 'colibri',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Culture',
      value: '≈ 95 m',
      label: 'la longueur du célèbre colibri',
      caption: "Le singe mesure à peu près la même taille, l'araignée environ 45 m. Beaucoup de figures sont dessinées d'un seul trait continu.",
    },
    {
      id: 'technique',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Comment les tracer ?',
      body:
        "Le sol du désert est couvert de cailloux sombres. En les retirant, on découvre une terre plus claire : le dessin apparaît. Avec des piquets et des cordes, les Nazcas pouvaient agrandir un petit modèle. Comme il ne pleut presque pas, les traits se sont conservés pendant près de 2 000 ans.",
    },
    {
      id: 'pourquoi',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'À quoi servaient les lignes ?',
      body:
        "Les chercheurs pensent qu'elles avaient un rôle religieux : on marchait peut-être le long des tracés en procession, pour demander l'eau aux dieux. Il n'existe aucune preuve des théories farfelues sur des « pistes pour extraterrestres ».",
    },
    {
      id: 'cahuachi',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Cahuachi, centre sacré',
      body:
        "Les Nazcas ne forment pas un empire mais un ensemble de communautés de vallées, unies par une même religion. Leur grand centre, Cahuachi, compte des dizaines de pyramides en briques de terre crue (adobe). C'était un lieu de cérémonies et de pèlerinage plus qu'une vraie ville.",
    },
    {
      id: 'ceramique',
      tier: 1,
      type: 'text',
      kicker: 'Culture',
      title: 'Une céramique aux mille couleurs',
      body:
        "Les potiers nazcas peignent leurs vases avec une dizaine de couleurs ou plus, tirées de minéraux : rouge, orange, blanc, noir, gris… Ils y représentent des animaux, des plantes, des êtres mythiques et des guerriers.",
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'La fin de la culture Nazca',
      body:
        "Vers 400-500, Cahuachi perd son importance. La culture Nazca décline ensuite, puis la région passe vers 650 sous l'influence de l'Empire huari. Les causes proposées : sécheresses, inondations liées à El Niño, et peut-être la déforestation des arbres huarangos.",
    },

    // ── Niveau 2 ──
    {
      id: 'reiche',
      tier: 2,
      type: 'person',
      nom: 'Maria Reiche',
      role: 'Mathématicienne et archéologue allemande',
      dates: '1903 – 1998',
      description: "Installée au Pérou, elle consacre plus de cinquante ans à mesurer, dessiner et protéger les lignes de Nazca. Grâce à son combat, le site est inscrit au patrimoine mondial de l'UNESCO en 1994.",
    },
    {
      id: 'puquios',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: "Les puquios, galeries d'eau",
      body:
        "Pour cultiver le désert, on creuse des puquios : des galeries souterraines qui captent l'eau des nappes. Des puits en spirale permettent d'y descendre pour les nettoyer. Leur date fait débat, mais beaucoup les attribuent aux Nazcas. Certains servent encore aujourd'hui !",
    },
    {
      id: 'tetes',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Les têtes-trophées',
      body:
        "Les archéologues ont retrouvé de nombreuses têtes humaines préparées, percées pour y passer une corde. On les appelle « têtes-trophées ». Prises sur des ennemis ou sur des ancêtres, elles servaient sans doute dans des rites liés à la fertilité.",
    },
    {
      id: 'decouvertes',
      tier: 2,
      type: 'dates',
      kicker: 'Connaissance',
      title: 'Des lignes redécouvertes',
      items: [
        { year: 1927, label: 'Premiers relevés des lignes par des archéologues péruviens' },
        { year: 1946, label: 'Maria Reiche commence ses mesures' },
        { year: 1994, label: "Inscription au patrimoine mondial de l'UNESCO" },
        { year: 2024, label: "Des centaines de nouveaux géoglyphes repérés grâce à l'intelligence artificielle" },
      ],
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel vivaient les Nazcas ?', options: ['Le Pérou', 'Le Mexique', 'Le Chili', "L'Argentine"], answer: 0 },
    { id: 'milieu', type: 'mcq', prompt: 'Dans quel milieu vivent les Nazcas ?', options: ['Un désert côtier très sec', 'Une forêt tropicale', 'Les hauts plateaux enneigés', 'Une île'], answer: 0 },
    { id: 'paracas', type: 'mcq', prompt: 'Quelle culture précède celle de Nazca dans la région ?', options: ['Paracas', 'Inca', 'Huari', 'Aztèque'], answer: 0 },
    { id: 'lignes', type: 'mcq', prompt: 'Comment appelle-t-on les grands dessins tracés dans le désert ?', options: ['Des géoglyphes', 'Des hiéroglyphes', 'Des quipus', 'Des mosaïques'], answer: 0 },
    { id: 'figures', type: 'mcq', prompt: 'Laquelle de ces figures fait partie des lignes de Nazca ?', options: ['Le colibri', 'Le cheval', "L'éléphant", 'Le lion'], answer: 0 },
    { id: 'technique', type: 'mcq', prompt: 'Comment les lignes sont-elles tracées ?', options: ['En retirant les cailloux sombres du sol', 'En peignant le sol', 'En creusant des tranchées profondes', 'En plantant des arbres'], answer: 0 },
    { id: 'conservation', type: 'mcq', prompt: 'Pourquoi les lignes se sont-elles conservées si longtemps ?', options: ['Il ne pleut presque jamais', 'Elles sont recouvertes de pierres', 'Elles sont gravées dans le métal', 'Elles sont protégées par la glace'], answer: 0 },
    { id: 'extraterrestres', type: 'tf', prompt: 'Les lignes de Nazca sont des pistes d’atterrissage pour extraterrestres.', answer: false, explanation: 'Aucune preuve : les chercheurs leur donnent surtout un rôle religieux.' },
    { id: 'empire', type: 'tf', prompt: 'Les Nazcas forment un grand empire unifié dirigé par un empereur.', answer: false, explanation: 'Ce sont des communautés de vallées unies par une même religion.' },
    { id: 'cahuachi', type: 'mcq', prompt: 'Quel est le grand centre religieux des Nazcas ?', options: ['Cahuachi', 'Cuzco', 'Chavín de Huántar', 'Tiwanaku'], answer: 0 },
    { id: 'adobe', type: 'mcq', prompt: 'En quel matériau sont bâties les pyramides de Cahuachi ?', options: ['En adobe (terre crue)', 'En marbre', 'En granit', 'En bois'], answer: 0 },
    { id: 'ceramique', type: 'tf', prompt: 'La céramique nazca est peinte de nombreuses couleurs.', answer: true },
    { id: 'puquios', type: 'mcq', prompt: 'Que sont les puquios ?', options: ['Des galeries souterraines pour l’eau', 'Des temples', 'Des vases peints', 'Des chefs de vallée'], answer: 0 },
    { id: 'reiche', type: 'mcq', prompt: 'Qui a consacré sa vie à étudier et protéger les lignes ?', options: ['Maria Reiche', 'Ruth Shady', 'Julio C. Tello', 'Hiram Bingham'], answer: 0 },
    { id: 'unesco', type: 'mcq', prompt: "En quelle année les lignes sont-elles inscrites à l'UNESCO ?", options: ['1994', '1946', '1911', '2024'], answer: 0 },
    { id: 'huari', type: 'mcq', prompt: 'Sous l’influence de quel empire la région de Nazca passe-t-elle vers 650 ?', options: ['Huari', 'Inca', 'Aztèque', 'Chavín'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Débuts de la culture Nazca', 'Déclin de Cahuachi', 'Maria Reiche commence ses mesures', "Inscription à l'UNESCO"] },
  ],

  recap: [
    'Vers 100 av. J.-C. – 650 : la culture Nazca, dans le désert du sud du Pérou',
    'Lignes et figures géantes (colibri, singe…) tracées en retirant les cailloux',
    'Cahuachi, centre sacré en adobe ; puquios pour capter l’eau',
    'Déclin lié au climat ; Maria Reiche protège les lignes (UNESCO 1994)',
  ],
}

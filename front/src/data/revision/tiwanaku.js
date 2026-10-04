/** Chapitre rédigé : Tiwanaku (≈ 500 – 1000 apr. J.-C.). */
export default {
  readingTime: 3,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'titicaca',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Une cité près du lac Titicaca',
      body:
        "Au sud du lac Titicaca, dans l'actuelle Bolivie, un village devient au fil des siècles une grande cité de pierre. Entre 500 et 1000 environ, Tiwanaku domine les hauts plateaux des Andes du Sud, l'Altiplano.",
      highlight: { value: '≈ 500 – 1000', label: "apogée de Tiwanaku" },
    },
    {
      id: 'altitude',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Territoire',
      value: '≈ 3 850 m',
      label: "d'altitude : l'une des plus hautes villes de l'Antiquité",
      caption: "Il y gèle presque toutes les nuits une grande partie de l'année. Les chercheurs estiment que la ville a compté entre 10 000 et 40 000 habitants selon les époques.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Tiwanaku et ses colonies',
      years: [700, 900],
      caption: "Autour du lac Titicaca, avec des colonies et des routes de caravanes vers la côte du Pacifique et les vallées plus chaudes.",
    },
    {
      id: 'porte',
      tier: 1,
      type: 'text',
      kicker: "Âge d'or",
      title: 'La Porte du Soleil',
      body:
        "Taillée dans un seul bloc de pierre (andésite), la Porte du Soleil mesure environ 3 m de haut. Au centre, une divinité tient un bâton dans chaque main : c'est le « dieu aux bâtons », déjà connu à Chavín sous d'autres formes.",
    },
    {
      id: 'monuments',
      tier: 1,
      type: 'text',
      kicker: "Âge d'or",
      title: 'Une ville de temples',
      body:
        "Au centre se dressent l'Akapana, une pyramide à terrasses, le Kalasasaya, une grande plateforme bordée de piliers, et un temple semi-souterrain dont les murs sont ornés de têtes de pierre. De grandes statues monolithes représentent des personnages qui tiennent des objets rituels.",
    },
    {
      id: 'champs',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Les champs surélevés',
      body:
        "Pour cultiver malgré le froid, on aménage des champs surélevés entourés de canaux. L'eau chauffée par le soleil dans la journée relâche sa chaleur la nuit et protège les pommes de terre et le quinoa du gel. Des archéologues ont refait l'expérience dans les années 1980 avec succès.",
    },
    {
      id: 'caravanes',
      tier: 1,
      type: 'text',
      kicker: 'Expansion',
      title: 'Des caravanes de lamas',
      body:
        "Tiwanaku étend son influence par le commerce et la religion plus que par la guerre, même si le débat reste ouvert. Des caravanes de lamas échangent la laine, le poisson séché et la pomme de terre de l'Altiplano contre le maïs, la coca et le piment des vallées.",
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Un lent effondrement',
      body:
        "Entre 1000 et 1150 environ, Tiwanaku perd son pouvoir et la ville est abandonnée. Une longue sécheresse, qui aurait rendu les champs surélevés inutilisables, est l'explication la plus souvent proposée, mais des conflits internes ont pu jouer.",
    },

    // ── Niveau 2 ──
    {
      id: 'puma-punku',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Les pierres de Puma Punku',
      body:
        "À Puma Punku, les blocs sont taillés avec une grande précision et reliés par des agrafes de métal en forme de « I ». Des analyses suggèrent que le métal a parfois été coulé directement dans les encoches. Aucun mystère : c'est le savoir-faire de tailleurs de pierre très habiles.",
    },
    {
      id: 'viracocha',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Le berceau du monde pour les Incas',
      body:
        "Quand les Incas arrivent, la ville est en ruines depuis des siècles. Selon leurs récits, le dieu créateur Viracocha est sorti du lac Titicaca et a créé le Soleil, la Lune et les premiers humains à Tiwanaku. Les Incas en font un lieu sacré.",
    },
    {
      id: 'huari',
      tier: 2,
      type: 'text',
      kicker: 'Monde',
      title: 'Un voisin : Huari',
      body:
        "Au même moment, l'Empire huari domine le centre du Pérou. Les deux puissances partagent des images religieuses, comme le dieu aux bâtons. À Moquegua, au sud du Pérou, leurs colonies se côtoient dans la même vallée, apparemment sans guerre ouverte.",
    },
    {
      id: 'chronologie',
      tier: 2,
      type: 'dates',
      kicker: 'Durée',
      title: 'Les grandes étapes',
      items: [
        { year: 500, label: 'Tiwanaku devient une grande cité' },
        { year: 800, label: 'Apogée de son influence (date approximative)' },
        { year: 1100, label: 'Abandon de la ville, vers 1000-1150' },
        { year: 2000, label: "Inscription au patrimoine mondial de l'UNESCO" },
      ],
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve Tiwanaku ?', options: ['La Bolivie', 'Le Mexique', 'Le Chili', 'La Colombie'], answer: 0 },
    { id: 'lac', type: 'mcq', prompt: 'Près de quel lac se trouve Tiwanaku ?', options: ['Le lac Titicaca', 'Le lac Texcoco', 'Le lac Victoria', 'Le lac Baïkal'], answer: 0 },
    { id: 'altitude', type: 'mcq', prompt: 'À quelle altitude environ se trouve Tiwanaku ?', options: ['Environ 3 850 m', 'Environ 500 m', 'Au niveau de la mer', 'Environ 6 500 m'], answer: 0 },
    { id: 'periode', type: 'mcq', prompt: 'À quelle période Tiwanaku est-elle à son apogée ?', options: ['Vers 500 – 1000', 'Vers 2600 – 1800 av. J.-C.', 'Vers 1438 – 1533', 'Vers 900 – 200 av. J.-C.'], answer: 0 },
    { id: 'porte', type: 'mcq', prompt: 'Quel monument taillé dans un seul bloc est le plus célèbre de Tiwanaku ?', options: ['La Porte du Soleil', 'La pyramide du Soleil', 'Le Lanzón', 'Machu Picchu'], answer: 0 },
    { id: 'dieu', type: 'mcq', prompt: 'Que tient la divinité de la Porte du Soleil ?', options: ['Un bâton dans chaque main', 'Une épée', 'Un épi de maïs', 'Un enfant'], answer: 0 },
    { id: 'akapana', type: 'mcq', prompt: 'Comment s’appelle la pyramide à terrasses de Tiwanaku ?', options: ["L'Akapana", 'La Pirámide Mayor', 'Le Coricancha', 'Cahuachi'], answer: 0 },
    { id: 'champs', type: 'mcq', prompt: 'À quoi servent les champs surélevés entourés de canaux ?', options: ['À protéger les cultures du gel', 'À élever des poissons rares', 'À défendre la ville', 'À faire des courses de lamas'], answer: 0 },
    { id: 'cultures', type: 'mcq', prompt: 'Quelles plantes cultive-t-on sur l’Altiplano ?', options: ['La pomme de terre et le quinoa', 'Le riz et le thé', 'Le blé et la vigne', 'La canne à sucre et le café'], answer: 0 },
    { id: 'lamas', type: 'mcq', prompt: 'Quels animaux forment les caravanes de Tiwanaku ?', options: ['Les lamas', 'Les chevaux', 'Les chameaux', 'Les bœufs'], answer: 0 },
    { id: 'agrafes', type: 'tf', prompt: 'À Puma Punku, des agrafes de métal relient certains blocs de pierre.', answer: true },
    { id: 'mystere', type: 'tf', prompt: 'Les pierres de Puma Punku n’ont pas pu être taillées par des humains.', answer: false, explanation: 'Elles sont l’œuvre de tailleurs de pierre très habiles de Tiwanaku.' },
    { id: 'viracocha', type: 'mcq', prompt: 'Selon les Incas, quel dieu créateur est sorti du lac Titicaca ?', options: ['Viracocha', 'Quetzalcoatl', 'Tlaloc', 'Huitzilopochtli'], answer: 0 },
    { id: 'incas', type: 'tf', prompt: 'Les Incas ont construit Tiwanaku.', answer: false, explanation: 'La ville était en ruines depuis des siècles quand les Incas sont arrivés.' },
    { id: 'voisin', type: 'mcq', prompt: 'Quel empire voisin domine le centre du Pérou à la même époque ?', options: ['Huari', 'Inca', 'Aztèque', 'Chavín'], answer: 0 },
    { id: 'fin', type: 'mcq', prompt: "Quelle explication est la plus souvent proposée pour la fin de Tiwanaku ?", options: ['Une longue sécheresse', 'La conquête espagnole', 'Une éruption volcanique', 'Une invasion aztèque'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Construction du temple de Chavín', 'Apogée de Tiwanaku', 'Abandon de Tiwanaku', 'Les Incas font de Tiwanaku un lieu sacré'] },
  ],

  recap: [
    'Vers 500 – 1000 : Tiwanaku, grande cité de pierre près du lac Titicaca (Bolivie)',
    'Porte du Soleil, Akapana, Puma Punku : des tailleurs de pierre très habiles',
    'Champs surélevés contre le gel ; caravanes de lamas pour échanger',
    'Abandon vers 1000-1150, peut-être à cause de la sécheresse ; lieu sacré des Incas',
  ],
}

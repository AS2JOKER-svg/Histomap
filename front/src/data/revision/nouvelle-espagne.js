/** Chapitre rédigé : Nouvelle-Espagne (1521 – 1821). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'conquete',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Sur les ruines de Tenochtitlan',
      body:
        "En 1521, Hernán Cortés et ses nombreux alliés autochtones prennent Tenochtitlan, la capitale aztèque. Sur ses ruines, les Espagnols bâtissent Mexico, capitale de la Nouvelle-Espagne.",
      highlight: { value: '1521', label: 'chute de Tenochtitlan' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'La Nouvelle-Espagne',
      years: [1530, 1700, 1815],
      caption: 'Comparez : la vice-royauté s’étend du centre du Mexique jusqu’à une grande partie de l’ouest des États-Unis actuels.',
    },
    {
      id: 'viceroi',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Une vice-royauté',
      body:
        "À partir de 1535, un vice-roi gouverne au nom du roi d'Espagne. Sa vice-royauté comprend le Mexique, l'Amérique centrale, les Caraïbes et même les Philippines.",
    },
    {
      id: 'effondrement',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'L’effondrement de la population',
      body:
        "Au XVIe siècle, les épidémies venues d'Europe, comme la variole, les guerres et le travail forcé font s'effondrer la population autochtone : selon les estimations, elle diminue de plus des trois quarts en un siècle, peut-être bien davantage.",
    },
    {
      id: 'argent',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Le royaume de l’argent',
      body:
        "Les mines d'argent de Zacatecas et de Guanajuato font la richesse de l'Espagne. La pièce d'argent mexicaine, le peso, devient une monnaie utilisée dans le monde entier.",
    },
    {
      id: 'galion',
      tier: 1,
      type: 'text',
      kicker: 'Commerce',
      title: 'Le galion de Manille',
      body:
        "De 1565 à 1815, des galions relient chaque année Acapulco aux Philippines. Ils emportent l'argent mexicain et rapportent la soie et la porcelaine de Chine : l'une des premières routes commerciales mondiales.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'La Nouvelle-Espagne en dates',
      items: [
        { year: 1521, label: 'Chute de Tenochtitlan' },
        { year: 1535, label: 'Premier vice-roi' },
        { year: 1565, label: 'Premier galion de Manille' },
        { year: 1810, label: 'Cri de Dolores' },
        { year: 1821, label: 'Indépendance du Mexique' },
      ],
    },
    {
      id: 'societe',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Une société de castes',
      body:
        "Les Espagnols nés en Europe occupent les plus hautes charges. Les Créoles, nés en Amérique, sont riches mais exclus du pouvoir. Autochtones, Africains réduits en esclavage et métis forment la majorité de la population.",
    },
    {
      id: 'independance',
      tier: 1,
      type: 'war',
      nom: 'Guerre d’indépendance du Mexique',
      annee: 1810,
      adversaires: ['Insurgés mexicains (Hidalgo, Morelos, puis Iturbide)'],
      allies: ['Pouvoir espagnol'],
      vainqueur: 'Indépendantistes',
      consequences:
        "Le 16 septembre 1810, le prêtre Miguel Hidalgo appelle au soulèvement. Après onze ans de guerre, l'Espagne reconnaît en 1821 l'indépendance du Mexique.",
    },

    // ── Niveau 2 ──
    {
      id: 'guadalupe',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'La Vierge de Guadalupe',
      body:
        "Selon la tradition, la Vierge apparaît en 1531 à un Autochtone, Juan Diego. La Vierge de Guadalupe devient le grand symbole religieux du Mexique.",
    },
    {
      id: 'sorjuana',
      tier: 2,
      type: 'person',
      nom: 'Sor Juana Inés de la Cruz',
      role: 'Poétesse et religieuse',
      dates: '1648 – 1695',
      description: "Entrée au couvent pour pouvoir étudier, elle écrit des poèmes et des pièces de théâtre en espagnol, en latin et en nahuatl. Elle défend le droit des femmes au savoir.",
    },
    {
      id: 'pueblos',
      tier: 2,
      type: 'war',
      nom: 'Révolte des Pueblos',
      annee: 1680,
      adversaires: ['Peuples pueblos du Nouveau-Mexique (Popé)'],
      allies: ['Colons espagnols'],
      vainqueur: 'Pueblos (jusqu’en 1692)',
      consequences: "Unis sous la direction de Popé, les Pueblos chassent les Espagnols du Nouveau-Mexique pendant douze ans.",
    },
    {
      id: 'imprimerie',
      tier: 2,
      type: 'text',
      kicker: 'Savoirs',
      title: 'Imprimerie et université',
      body:
        "La première imprimerie des Amériques s'installe à Mexico en 1539, et l'université y ouvre ses portes en 1551.",
    },
    {
      id: 'cuisine',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Une cuisine métissée',
      body:
        "La cuisine mexicaine naît du mélange du maïs, du haricot et du piment avec le porc, le bœuf et le blé venus d'Europe. La tomate, le cacao et le piment partent à leur tour conquérir le monde.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Quel pays actuel correspond surtout à la Nouvelle-Espagne ?', options: ['Le Mexique', 'Le Brésil', 'Le Canada', 'L’Argentine'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale de la Nouvelle-Espagne ?', options: ['Mexico', 'Madrid', 'Lima', 'La Havane'], answer: 0 },
    { id: 'ruines', type: 'mcq', prompt: 'Sur les ruines de quelle ville Mexico est-elle bâtie ?', options: ['Tenochtitlan', 'Cuzco', 'Teotihuacan', 'Tula'], answer: 0 },
    { id: 'cortes', type: 'mcq', prompt: 'Quel conquistador prend Tenochtitlan en 1521 ?', options: ['Hernán Cortés', 'Francisco Pizarro', 'Christophe Colomb', 'Hernando de Soto'], answer: 0 },
    { id: 'viceroi', type: 'mcq', prompt: 'Qui gouverne la Nouvelle-Espagne au nom du roi ?', options: ['Un vice-roi', 'Un pharaon', 'Un empereur aztèque', 'Un parlement'], answer: 0 },
    { id: 'philippines', type: 'tf', prompt: 'Les Philippines sont gouvernées depuis Mexico.', answer: true },
    { id: 'epidemies', type: 'mcq', prompt: 'Qu’est-ce qui fait surtout s’effondrer la population autochtone au XVIe siècle ?', options: ['Les épidémies', 'Les tremblements de terre', 'Les famines dues au froid', 'Les éruptions volcaniques'], answer: 0 },
    { id: 'argent', type: 'mcq', prompt: 'Quel métal fait la richesse de la Nouvelle-Espagne ?', options: ['L’argent', 'Le fer', 'Le cuivre', 'L’étain'], answer: 0 },
    { id: 'peso', type: 'mcq', prompt: 'Comment s’appelle la pièce d’argent mexicaine utilisée dans le monde entier ?', options: ['Le peso', 'L’euro', 'La livre', 'Le florin'], answer: 0 },
    { id: 'galion', type: 'mcq', prompt: 'Quelles villes relie le galion de Manille ?', options: ['Acapulco et Manille', 'Séville et Mexico', 'Lisbonne et Rio', 'Londres et New York'], answer: 0 },
    { id: 'creoles', type: 'mcq', prompt: 'Comment appelle-t-on les Espagnols nés en Amérique ?', options: ['Les Créoles', 'Les métis', 'Les conquistadors', 'Les péninsulaires'], answer: 0 },
    { id: 'guadalupe', type: 'mcq', prompt: 'Quel est le grand symbole religieux du Mexique ?', options: ['La Vierge de Guadalupe', 'Le Serpent à plumes', 'Saint Jacques', 'Le Sacré-Cœur'], answer: 0 },
    { id: 'sorjuana', type: 'mcq', prompt: 'Quelle religieuse est la grande poétesse de la Nouvelle-Espagne ?', options: ['Sor Juana Inés de la Cruz', 'Thérèse d’Avila', 'Malinche', 'Frida Kahlo'], answer: 0 },
    { id: 'hidalgo', type: 'mcq', prompt: 'Quel prêtre lance la guerre d’indépendance en 1810 ?', options: ['Miguel Hidalgo', 'Bartolomé de las Casas', 'Benito Juárez', 'Simón Bolívar'], answer: 0 },
    { id: 'independance', type: 'mcq', prompt: 'En quelle année le Mexique devient-il indépendant ?', options: ['1821', '1521', '1910', '1776'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Chute de Tenochtitlan', 'Premier vice-roi', 'Premier galion de Manille', 'Indépendance du Mexique'] },
  ],

  recap: [
    '1521 : sur les ruines de Tenochtitlan, les Espagnols fondent la Nouvelle-Espagne',
    'Une vice-royauté immense, du Mexique aux Philippines ; effondrement de la population autochtone',
    'L’argent des mines, le peso et le galion de Manille ; une société de castes',
    '1810 : cri de Dolores ; 1821 : indépendance du Mexique',
  ],
}

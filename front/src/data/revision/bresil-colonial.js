/** Chapitre rédigé : Brésil colonial (1500 – 1822). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'cabral',
      tier: 1,
      type: 'person',
      nom: 'Pedro Álvares Cabral',
      role: 'Navigateur portugais',
      dates: 'vers 1467 – vers 1520',
      description:
        "Parti pour l'Inde avec treize navires, il s'écarte vers l'ouest dans l'Atlantique et aborde la côte du Brésil le 22 avril 1500. Il en prend possession au nom du roi du Portugal.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le Brésil portugais',
      years: [1650, 1815],
      caption: 'Comparez : la colonie, d’abord limitée à la côte, s’étend vers l’intérieur grâce aux explorateurs et aux chercheurs d’or.',
    },
    {
      id: 'nom',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Le bois de braise',
      body:
        "Les Portugais exploitent d'abord le pau-brasil, un arbre au bois rouge comme la braise qui sert à teindre les tissus. C'est lui qui donne son nom au pays.",
    },
    {
      id: 'sucre',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Le temps du sucre',
      body:
        "Au XVIe et au XVIIe siècle, le Nord-Est se couvre de plantations de canne à sucre. Le Brésil devient le premier producteur de sucre du monde, grâce au travail forcé des esclaves.",
    },
    {
      id: 'traite',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'La première destination de la traite',
      body:
        "Près de 5 millions d'Africains sont amenés de force au Brésil, plus que dans tout autre pays. Les peuples autochtones sont chassés de leurs terres, réduits en esclavage ou décimés par les épidémies.",
      highlight: { value: 'près de 5 millions', label: 'd’Africains réduits en esclavage amenés au Brésil' },
    },
    {
      id: 'or',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'La ruée vers l’or',
      body:
        "À la fin du XVIIe siècle, on découvre de l'or dans le Minas Gerais. Des centaines de milliers de colons et d'esclaves y affluent, et Rio de Janeiro devient la capitale en 1763.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Le Brésil colonial en dates',
      items: [
        { year: 1500, label: 'Arrivée de Cabral' },
        { year: 1549, label: 'Fondation de Salvador' },
        { year: 1695, label: 'Mort de Zumbi' },
        { year: 1763, label: 'Rio de Janeiro capitale' },
        { year: 1808, label: 'La cour portugaise à Rio' },
        { year: 1822, label: 'Indépendance' },
      ],
    },
    {
      id: 'cour',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'La cour du Portugal à Rio',
      body:
        "En 1808, fuyant l'invasion de Napoléon, la famille royale portugaise s'installe à Rio de Janeiro. Pendant treize ans, Rio est la capitale de tout l'empire portugais.",
    },
    {
      id: 'independance',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'L’indépendance',
      body:
        "Le 7 septembre 1822, le prince Pierre, fils du roi du Portugal, proclame l'indépendance du Brésil. Il devient l'empereur Pierre Ier : le Brésil sera un empire jusqu'en 1889.",
    },

    // ── Niveau 2 ──
    {
      id: 'palmares',
      tier: 2,
      type: 'person',
      nom: 'Zumbi dos Palmares',
      role: 'Chef du quilombo de Palmares',
      dates: '1655 – 1695',
      description: "Dernier chef de Palmares, le plus grand refuge d'esclaves en fuite, il refuse toute soumission. Tué le 20 novembre 1695, il est un symbole de la lutte contre l'esclavage.",
    },
    {
      id: 'hollandais',
      tier: 2,
      type: 'war',
      nom: 'Batailles des Guararapes',
      annee: 1648,
      adversaires: ['Compagnie néerlandaise des Indes occidentales'],
      allies: ['Luso-Brésiliens'],
      vainqueur: 'Luso-Brésiliens',
      consequences: "Des troupes de colons, d'Africains et d'Autochtones battent les Hollandais, maîtres du Nord-Est depuis 1630, qui quittent le Brésil en 1654.",
    },
    {
      id: 'aleijadinho',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'Aleijadinho',
      body:
        "Fils d'une esclave et d'un architecte portugais, Aleijadinho est le grand sculpteur du baroque brésilien. Ses œuvres ornent les églises couvertes d'or du Minas Gerais.",
    },
    {
      id: 'capoeira',
      tier: 2,
      type: 'text',
      kicker: 'Quotidien',
      title: 'La capoeira',
      body:
        "Mélange de lutte, de danse et de musique, la capoeira se développe parmi les Africains réduits en esclavage et leurs descendants.",
    },
    {
      id: 'tiradentes',
      tier: 2,
      type: 'text',
      kicker: 'Personnages',
      title: 'Tiradentes',
      body:
        "Membre d'un complot pour l'indépendance du Minas Gerais, il est exécuté en 1792. Il est aujourd'hui un héros national au Brésil.",
    },
  ],

  quiz: [
    { id: 'colonisateur', type: 'mcq', prompt: 'Quel pays colonise le Brésil ?', options: ['Le Portugal', 'L’Espagne', 'La France', 'Les Pays-Bas'], answer: 0 },
    { id: 'cabral', type: 'mcq', prompt: 'Quel navigateur aborde le Brésil en 1500 ?', options: ['Pedro Álvares Cabral', 'Vasco de Gama', 'Christophe Colomb', 'Magellan'], answer: 0 },
    { id: 'nom', type: 'mcq', prompt: 'D’où vient le nom « Brésil » ?', options: ['D’un arbre au bois rouge', 'D’un roi portugais', 'D’un fleuve', 'D’un peuple autochtone'], answer: 0 },
    { id: 'sucre', type: 'mcq', prompt: 'Quelle culture fait la richesse du Nord-Est au XVIIe siècle ?', options: ['La canne à sucre', 'Le café', 'Le coton', 'Le blé'], answer: 0 },
    { id: 'traite', type: 'tf', prompt: 'Le Brésil est le pays qui a reçu le plus d’Africains réduits en esclavage.', answer: true },
    { id: 'quilombo', type: 'mcq', prompt: 'Qu’est-ce qu’un quilombo ?', options: ['Une communauté d’esclaves en fuite', 'Une plantation', 'Un fort portugais', 'Une mine d’or'], answer: 0 },
    { id: 'zumbi', type: 'mcq', prompt: 'Qui est le dernier chef de Palmares ?', options: ['Zumbi', 'Tiradentes', 'Pierre Ier', 'Aleijadinho'], answer: 0 },
    { id: 'or', type: 'mcq', prompt: 'Dans quelle région découvre-t-on de l’or à la fin du XVIIe siècle ?', options: ['Le Minas Gerais', 'L’Amazonie', 'Le Pernambouc', 'Le Rio Grande do Sul'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle ville devient capitale en 1763 ?', options: ['Rio de Janeiro', 'Salvador', 'Brasilia', 'São Paulo'], answer: 0 },
    { id: 'hollandais', type: 'mcq', prompt: 'Quels Européens occupent le Nord-Est de 1630 à 1654 ?', options: ['Les Hollandais', 'Les Anglais', 'Les Espagnols', 'Les Suédois'], answer: 0 },
    { id: 'cour', type: 'mcq', prompt: 'Pourquoi la cour du Portugal s’installe-t-elle à Rio en 1808 ?', options: ['Pour fuir l’invasion de Napoléon', 'Pour chercher de l’or', 'À cause d’un tremblement de terre', 'Pour combattre les Hollandais'], answer: 0 },
    { id: 'independance', type: 'mcq', prompt: 'Qui proclame l’indépendance du Brésil en 1822 ?', options: ['Le prince Pierre', 'Tiradentes', 'Simón Bolívar', 'Jean VI'], answer: 0 },
    { id: 'empire', type: 'tf', prompt: 'Après son indépendance, le Brésil devient une république.', answer: false, explanation: 'Il devient un empire, jusqu’en 1889.' },
    { id: 'capoeira', type: 'mcq', prompt: 'Qu’est-ce que la capoeira ?', options: ['Un mélange de lutte, de danse et de musique', 'Un plat de manioc', 'Une église baroque', 'Un bateau'], answer: 0 },
    { id: 'aleijadinho', type: 'mcq', prompt: 'Qui est le grand sculpteur du baroque brésilien ?', options: ['Aleijadinho', 'Michel-Ange', 'Cabral', 'Zumbi'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Arrivée de Cabral', 'Fondation de Salvador', 'Rio de Janeiro capitale', 'Indépendance'] },
  ],

  recap: [
    '1500 : Cabral aborde le Brésil, colonie portugaise',
    'Bois de braise, sucre, puis or, grâce au travail de près de 5 millions d’esclaves africains',
    'Résistances : le quilombo de Palmares et Zumbi',
    '1808 : la cour portugaise à Rio ; 1822 : indépendance du Brésil',
  ],
}

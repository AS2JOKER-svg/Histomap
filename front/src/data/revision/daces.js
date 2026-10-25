/** Chapitre rédigé : Royaume dace (−82 – 106). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'peuple',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Les Daces',
      body:
        "Les Daces, un peuple apparenté aux Thraces, vivent au nord du Danube, dans l'actuelle Roumanie. Leurs montagnes, les Carpates, sont riches en or et en sel.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'La Dacie',
      years: [-1, 100],
      caption: 'La Dacie, au nord du Danube, juste avant la conquête romaine.',
    },
    {
      id: 'burebista',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Burebista unifie les Daces',
      body:
        "Vers −82, le roi Burebista unifie les Daces et crée un vaste royaume, des Carpates à la mer Noire. Il est assassiné en −44, la même année que Jules César, et son royaume se divise.",
      highlight: { value: '−82', label: 'Burebista devient roi' },
    },
    {
      id: 'decebale',
      tier: 1,
      type: 'person',
      nom: 'Décébale',
      role: 'Roi des Daces',
      dates: 'règne 87 – 106',
      description:
        "Il bat une armée romaine, puis obtient de l'empereur Domitien de l'argent et des ingénieurs en échange de la paix. Vaincu par Trajan, il se donne la mort plutôt que d'être capturé.",
    },
    {
      id: 'trajan',
      tier: 1,
      type: 'war',
      nom: 'Guerres daciques de Trajan',
      annee: 101,
      adversaires: ['Empire romain (Trajan)'],
      allies: ['Daces (Décébale)'],
      vainqueur: 'Empire romain',
      consequences:
        "Après deux guerres (101-102 et 105-106), les Romains prennent la capitale, Sarmizegetusa. La Dacie devient une province romaine, et son or enrichit l'Empire.",
    },
    {
      id: 'sarmizegetusa',
      tier: 1,
      type: 'text',
      kicker: 'Architecture',
      title: 'Sarmizegetusa Regia',
      body:
        "La capitale des Daces, dans les montagnes, est protégée par des murs de pierre taillée. Ses sanctuaires circulaires de piliers de pierre ont peut-être servi de calendrier.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les Daces en dates',
      items: [
        { year: -82, label: 'Burebista roi' },
        { year: -44, label: 'Assassinat de Burebista' },
        { year: 87, label: 'Décébale roi' },
        { year: 101, label: 'Trajan envahit la Dacie' },
        { year: 106, label: 'Chute de Sarmizegetusa' },
      ],
    },
    {
      id: 'colonne',
      tier: 1,
      type: 'text',
      kicker: 'Sources',
      title: 'La colonne Trajane',
      body:
        "À Rome, la colonne Trajane, haute d'environ 30 mètres, est entourée d'une frise sculptée de près de 200 mètres qui raconte en images les guerres contre les Daces.",
    },
    {
      id: 'roumanie',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'La Roumanie',
      body:
        "Après la conquête, le latin s'impose dans la région : le roumain est une langue latine. Le rôle exact des Daces dans les origines des Roumains est encore discuté par les historiens.",
    },

    // ── Niveau 2 ──
    {
      id: 'falx',
      tier: 2,
      type: 'text',
      kicker: 'Armée',
      title: 'La falx',
      body:
        "Les guerriers daces combattent avec la falx, une faux à deux mains capable de fendre les casques. Les Romains renforcent leurs armures pour s'en protéger.",
    },
    {
      id: 'dragon',
      tier: 2,
      type: 'text',
      kicker: 'Armée',
      title: 'Le dragon dace',
      body:
        "L'étendard des Daces a une tête de loup et un long corps de serpent en tissu, qui siffle quand le vent s'y engouffre.",
    },
    {
      id: 'zalmoxis',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Zalmoxis',
      body:
        "Selon l'historien grec Hérodote, les Gètes, voisins des Daces, honorent Zalmoxis, qui leur promettait une vie après la mort.",
    },
    {
      id: 'bonnets',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Bonnets et chevelus',
      body:
        "Les nobles daces, qui portent un bonnet, sont appelés « porteurs de bonnet » ; les gens du peuple, tête nue, sont les « chevelus ».",
    },
    {
      id: 'unesco',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Les forteresses daces',
      body:
        "Les forteresses des monts d'Orăștie, dont Sarmizegetusa Regia, sont inscrites au patrimoine mondial de l'UNESCO depuis 1999.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel vivaient les Daces ?', options: ['La Roumanie', 'L’Espagne', 'La Suède', 'L’Égypte'], answer: 0 },
    { id: 'fleuve', type: 'mcq', prompt: 'Au nord de quel fleuve vivent les Daces ?', options: ['Le Danube', 'Le Rhin', 'Le Nil', 'La Volga'], answer: 0 },
    { id: 'parents', type: 'mcq', prompt: 'À quel peuple les Daces sont-ils apparentés ?', options: ['Les Thraces', 'Les Celtes', 'Les Vikings', 'Les Perses'], answer: 0 },
    { id: 'burebista', type: 'mcq', prompt: 'Quel roi unifie les Daces vers −82 ?', options: ['Burebista', 'Décébale', 'Trajan', 'Arminius'], answer: 0 },
    { id: 'cesar', type: 'tf', prompt: 'Burebista meurt la même année que Jules César.', answer: true },
    { id: 'decebale', type: 'mcq', prompt: 'Quel roi dace affronte l’empereur Trajan ?', options: ['Décébale', 'Burebista', 'Alaric', 'Attila'], answer: 0 },
    { id: 'domitien', type: 'mcq', prompt: 'Que donne Domitien à Décébale en échange de la paix ?', options: ['De l’argent et des ingénieurs', 'Une province', 'Sa fille', 'Une flotte'], answer: 0 },
    { id: 'trajan', type: 'mcq', prompt: 'Quel empereur romain conquiert la Dacie ?', options: ['Trajan', 'Auguste', 'Néron', 'Hadrien'], answer: 0 },
    { id: 'annee', type: 'mcq', prompt: 'En quelle année la capitale dace est-elle prise ?', options: ['106', '−44', '476', '9'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Comment s’appelle la capitale des Daces ?', options: ['Sarmizegetusa Regia', 'Carthage', 'Alésia', 'Byzance'], answer: 0 },
    { id: 'colonne', type: 'mcq', prompt: 'Quel monument de Rome raconte les guerres contre les Daces ?', options: ['La colonne Trajane', 'Le Colisée', 'Le Panthéon', 'L’arc de Titus'], answer: 0 },
    { id: 'falx', type: 'mcq', prompt: 'Comment s’appelle la terrible arme des guerriers daces ?', options: ['La falx', 'Le glaive', 'La hallebarde', 'Le pilum'], answer: 0 },
    { id: 'dragon', type: 'mcq', prompt: 'À quoi ressemble l’étendard dace ?', options: ['Une tête de loup et un corps de serpent', 'Un aigle d’or', 'Un lion rouge', 'Une croix'], answer: 0 },
    { id: 'or', type: 'tf', prompt: 'Les montagnes de Dacie sont riches en or.', answer: true },
    { id: 'roumain', type: 'mcq', prompt: 'Quelle langue s’impose en Dacie après la conquête romaine ?', options: ['Le latin', 'Le grec', 'Le gotique', 'L’arabe'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Burebista roi', 'Assassinat de Burebista', 'Décébale roi', 'Chute de Sarmizegetusa'] },
  ],

  recap: [
    'Les Daces, peuple apparenté aux Thraces, au nord du Danube',
    'Burebista unifie le royaume (−82) ; Décébale résiste à Rome',
    'Trajan conquiert la Dacie (101-106) ; la colonne Trajane raconte ces guerres',
    'La Dacie devient romaine ; le roumain est une langue latine',
  ],
}

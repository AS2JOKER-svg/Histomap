/** Chapitre rédigé : Rome antique (753 av. J.-C. – 476). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'fondation',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Romulus, Rémus et la louve',
      body:
        "Selon la légende, Romulus fonde Rome en 753 av. J.-C. après avoir tué son frère Rémus ; tous deux auraient été allaités par une louve. Rome est d'abord gouvernée par des rois, dont les derniers sont étrusques.",
      highlight: { value: '753 av. J.-C.', label: 'fondation légendaire' },
    },
    {
      id: 'republique',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'La République romaine',
      body:
        "En 509 av. J.-C., les Romains chassent leur dernier roi. Le pouvoir est confié à deux consuls élus pour un an et conseillés par le Sénat. Leur devise : SPQR, « le Sénat et le peuple romain ».",
      highlight: { value: '2 consuls', label: 'élus chaque année' },
    },
    {
      id: 'etapes',
      tier: 1,
      type: 'steps',
      kicker: 'Durée',
      title: 'Douze siècles en six dates',
      items: [
        { year: -753, label: 'Fondation légendaire de Rome' },
        { year: -509, label: 'Naissance de la République' },
        { year: -146, label: 'Carthage est détruite : Rome domine la Méditerranée' },
        { year: -27, label: 'Auguste devient le premier empereur' },
        { year: 117, label: 'Apogée territoriale sous Trajan' },
        { year: 476, label: "Chute de l'Empire romain d'Occident" },
      ],
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Fluctuations',
      title: 'D’une cité à un empire',
      years: [-500, -100, 100],
      caption: 'Une petite cité du Latium, puis la Méditerranée entière, que les Romains appellent « notre mer » (mare nostrum).',
    },
    {
      id: 'puniques',
      tier: 1,
      type: 'war',
      nom: 'Guerres puniques',
      annee: -264,
      adversaires: ['Carthage (Hannibal)'],
      allies: ['Rome et ses alliés italiens'],
      vainqueur: 'Rome',
      consequences:
        "Hannibal traverse les Alpes avec ses éléphants et écrase les Romains à Cannes (216 av. J.-C.), mais Scipion le bat à Zama (202). En 146 av. J.-C., Carthage est rasée.",
    },
    {
      id: 'cesar',
      tier: 1,
      type: 'person',
      nom: 'Jules César',
      role: 'Général et dictateur',
      dates: '100 – 44 av. J.-C.',
      description:
        "Il conquiert la Gaule (victoire d'Alésia sur Vercingétorix, 52 av. J.-C.), franchit le Rubicon avec son armée en 49 et devient dictateur. Il est assassiné par des sénateurs aux ides de mars 44 av. J.-C.",
    },
    {
      id: 'auguste',
      tier: 1,
      type: 'text',
      kicker: "Âge d'or",
      title: 'Auguste et la paix romaine',
      body:
        "Octave, fils adoptif de César, bat Antoine et Cléopâtre à Actium (31 av. J.-C.). En 27 av. J.-C., il reçoit le titre d'Auguste : c'est le premier empereur. S'ouvrent deux siècles de paix relative, la Pax Romana.",
    },
    {
      id: 'empire-taille',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Apogée',
      value: '≈ 5 M km²',
      label: "superficie de l'Empire sous Trajan (117)",
      caption: "Du mur d'Hadrien en Bretagne (l'actuelle Grande-Bretagne) jusqu'à l'Égypte et à la Mésopotamie, avec plusieurs dizaines de millions d'habitants.",
    },
    {
      id: 'ingenieurs',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Routes, aqueducs et droit',
      body:
        "Les Romains couvrent l'Empire de routes pavées, d'aqueducs et de thermes, utilisent un béton très solide et bâtissent le Colisée (inauguré en 80). Leur droit inspire encore nos lois, et le latin a donné naissance au français.",
    },

    // ── Niveau 2 ──
    {
      id: 'spartacus',
      tier: 2,
      type: 'war',
      kicker: 'Révolte',
      nom: 'Révolte de Spartacus',
      annee: -73,
      adversaires: ['Armées romaines (Crassus)'],
      allies: ['Esclaves et gladiateurs révoltés'],
      vainqueur: 'Rome (71 av. J.-C.)',
      consequences: "Le gladiateur Spartacus entraîne des dizaines de milliers d'esclaves. Vaincus, 6 000 d'entre eux sont crucifiés le long de la voie Appienne.",
    },
    {
      id: 'ciceron',
      tier: 2,
      type: 'person',
      nom: 'Cicéron',
      role: 'Avocat, orateur, homme politique',
      dates: '106 – 43 av. J.-C.',
      description: "Le plus grand orateur romain. Consul en 63 av. J.-C., il déjoue la conjuration de Catilina. Défenseur de la République, il est assassiné sur ordre de Marc Antoine.",
    },
    {
      id: 'vie',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: '« Du pain et des jeux »',
      body:
        "À Rome, l'État distribue du blé aux citoyens pauvres et offre des spectacles : courses de chars au Circus Maximus, combats de gladiateurs au Colisée. Les thermes sont des lieux de rencontre autant que de bain.",
    },
    {
      id: 'christianisme',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Des persécutions à la religion officielle',
      body:
        "Longtemps persécutés, les chrétiens obtiennent la liberté de culte avec l'empereur Constantin (édit de Milan, 313). En 380, l'empereur Théodose fait du christianisme la religion officielle de l'Empire.",
      highlight: { value: '313', label: 'édit de Milan' },
    },
    {
      id: 'chute',
      tier: 2,
      type: 'text',
      kicker: 'Fin',
      title: "Deux empires, une seule chute",
      body:
        "En 395, l'Empire est partagé entre Orient et Occident. Affaibli par les crises et les invasions, l'Occident disparaît en 476 quand le chef germanique Odoacre dépose le jeune empereur Romulus Augustule. L'Orient, lui, survit près de mille ans : c'est Byzance.",
    },
  ],

  quiz: [
    { id: 'romulus', type: 'mcq', prompt: 'Selon la légende, qui fonde Rome ?', options: ['Romulus', 'Énée', 'Jules César', 'Tarquin'], answer: 0 },
    { id: 'fondation-date', type: 'mcq', prompt: 'Date légendaire de la fondation de Rome ?', options: ['753 av. J.-C.', '509 av. J.-C.', '27 av. J.-C.', '476'], answer: 0 },
    { id: 'consuls', type: 'mcq', prompt: 'Sous la République, combien de consuls sont élus chaque année ?', options: ['Deux', 'Un', 'Trois', 'Dix'], answer: 0 },
    { id: 'spqr', type: 'mcq', prompt: 'Que signifie SPQR ?', options: ['Le Sénat et le peuple romain', 'Sa Puissance Quirinale Romaine', 'Saint Pierre, Quatrième Roi', 'Soldats pour la Querelle Romaine'], answer: 0 },
    { id: 'hannibal', type: 'mcq', prompt: 'Quel général carthaginois traverse les Alpes avec des éléphants ?', options: ['Hannibal', 'Scipion', 'Vercingétorix', 'Spartacus'], answer: 0 },
    { id: 'zama', type: 'tf', prompt: 'Hannibal est vaincu par Scipion à Zama en 202 av. J.-C.', answer: true },
    { id: 'alesia', type: 'mcq', prompt: 'Qui César bat-il à Alésia en 52 av. J.-C. ?', options: ['Vercingétorix', 'Hannibal', 'Spartacus', 'Marc Antoine'], answer: 0 },
    { id: 'rubicon', type: 'mcq', prompt: 'Quel fleuve César franchit-il avec son armée en 49 av. J.-C. ?', options: ['Le Rubicon', 'Le Tibre', 'Le Rhin', 'Le Pô'], answer: 0 },
    { id: 'ides', type: 'tf', prompt: 'Jules César est le premier empereur romain.', answer: false, explanation: 'Il est dictateur ; le premier empereur est Auguste (27 av. J.-C.).' },
    { id: 'auguste', type: 'mcq', prompt: 'Qui devient le premier empereur en 27 av. J.-C. ?', options: ['Auguste', 'Trajan', 'Néron', 'Constantin'], answer: 0 },
    { id: 'actium', type: 'mcq', prompt: 'Qui Octave bat-il à Actium en 31 av. J.-C. ?', options: ['Antoine et Cléopâtre', 'Hannibal', 'Les Gaulois', 'Les Parthes'], answer: 0 },
    { id: 'trajan', type: 'mcq', prompt: "Sous quel empereur l'Empire atteint-il sa plus grande étendue (117) ?", options: ['Trajan', 'Auguste', 'Constantin', 'Néron'], answer: 0 },
    { id: 'etapes-ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Fondation de Rome', 'Naissance de la République', 'Destruction de Carthage', 'Premier empereur'] },
    { id: 'colisee', type: 'tf', prompt: 'Le Colisée est inauguré en 80 apr. J.-C.', answer: true },
    { id: 'spartacus', type: 'mcq', prompt: 'Qui mène la grande révolte d’esclaves de 73 av. J.-C. ?', options: ['Spartacus', 'Catilina', 'Crassus', 'Brutus'], answer: 0 },
    { id: 'milan', type: 'mcq', prompt: 'Quel empereur accorde la liberté de culte aux chrétiens en 313 ?', options: ['Constantin', 'Théodose', 'Néron', 'Dioclétien'], answer: 0 },
    { id: 'chute', type: 'mcq', prompt: "Qui dépose le dernier empereur d'Occident en 476 ?", options: ['Odoacre', 'Attila', 'Clovis', 'Alaric'], answer: 0 },
    { id: 'orient', type: 'tf', prompt: "En 476, l'Empire romain d'Orient disparaît aussi.", answer: false, explanation: "L'Orient (Byzance) survit jusqu'en 1453." },
  ],

  recap: [
    '753 av. J.-C. : fondation légendaire ; 509 : la République',
    'Guerres puniques : Rome bat Carthage et domine la Méditerranée',
    'César conquiert la Gaule ; Auguste devient le premier empereur (27 av. J.-C.)',
    "476 : chute de l'Empire d'Occident ; l'Orient continue (Byzance)",
  ],
}

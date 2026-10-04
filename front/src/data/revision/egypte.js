/** Chapitre rédigé : Égypte antique (≈ 3150 – 30 av. J.-C.). Voir france-capet.js pour le format. */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'unification',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Deux royaumes, une seule couronne',
      body:
        "Vers 3150 av. J.-C., le roi Narmer unifie la Haute-Égypte (la vallée, au sud) et la Basse-Égypte (le delta, au nord). Le pharaon portera désormais la double couronne : c'est le début de trois millénaires d'histoire.",
      highlight: { value: '≈ 3150 av. J.-C.', label: "unification sous Narmer" },
    },
    {
      id: 'nil',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Géographie',
      value: '6 650 km',
      label: 'le Nil, colonne vertébrale du pays',
      caption:
        "Chaque été, la crue dépose sur les rives un limon noir et fertile. Les Égyptiens appellent leur pays Kemet, « la terre noire ». Pour l'historien grec Hérodote, l'Égypte est « un don du Nil ».",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: "L'Égypte au fil des siècles",
      years: [-3000, -1500, -700],
      caption: "Changez d'année : le royaume reste accroché au Nil, mais son influence varie selon les époques.",
    },
    {
      id: 'empires',
      tier: 1,
      type: 'steps',
      kicker: 'Durée',
      title: 'Les grandes périodes',
      items: [
        { year: -2700, label: 'Ancien Empire : le temps des pyramides' },
        { year: -2050, label: 'Moyen Empire : le pays est réunifié' },
        { year: -1550, label: 'Nouvel Empire : apogée militaire, Vallée des Rois' },
        { year: -332, label: "Alexandre le Grand conquiert l'Égypte" },
        { year: -30, label: "L'Égypte devient une province romaine" },
      ],
    },
    {
      id: 'pyramide',
      tier: 1,
      type: 'text',
      kicker: 'Âge d’or',
      title: 'La Grande Pyramide de Khéops',
      body:
        "Achevée vers 2560 av. J.-C., elle mesurait 146 mètres : l'édifice le plus haut du monde pendant près de 4 000 ans. C'est la seule des Sept Merveilles du monde antique encore debout.",
      highlight: { value: '146 m', label: 'hauteur d’origine' },
    },
    {
      id: 'ecriture',
      tier: 1,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Les hiéroglyphes',
      body:
        "Vers 3200 av. J.-C. apparaît l'une des plus anciennes écritures du monde. Les scribes écrivent sur du papyrus. Oublié pendant des siècles, ce système est déchiffré en 1822 par Champollion grâce à la pierre de Rosette.",
      highlight: { value: '1822', label: 'Champollion déchiffre les hiéroglyphes' },
    },
    {
      id: 'croyances',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: "Préparer la vie éternelle",
      body:
        "Le pharaon est un dieu vivant, garant de la Maât, l'ordre du monde. Pour survivre dans l'au-delà, le corps est momifié. Devant Osiris, le cœur du défunt est pesé contre la plume de Maât : trop lourd, il est dévoré.",
    },
    {
      id: 'ramses',
      tier: 1,
      type: 'person',
      nom: 'Ramsès II',
      role: 'Pharaon du Nouvel Empire',
      dates: 'règne 1279 – 1213 av. J.-C.',
      description:
        "Il règne 66 ans. Après la bataille de Qadesh contre les Hittites, il signe avec eux l'un des plus anciens traités de paix connus. Il fait creuser les temples géants d'Abou Simbel.",
    },
    {
      id: 'cleopatre',
      tier: 1,
      type: 'person',
      nom: 'Cléopâtre VII',
      role: 'Dernière reine d’Égypte',
      dates: '69 – 30 av. J.-C.',
      description:
        "Reine de la dynastie grecque des Ptolémées, alliée de Jules César puis de Marc Antoine. Vaincue par Octave à la bataille navale d'Actium (31 av. J.-C.), elle se donne la mort : l'Égypte passe sous domination romaine.",
    },

    // ── Niveau 2 ──
    {
      id: 'hatchepsout',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Hatchepsout, la femme pharaon',
      body:
        "Vers 1478 av. J.-C., Hatchepsout prend le titre de pharaon et se fait représenter avec la barbe postiche royale. Elle envoie une grande expédition commerciale au pays de Pount et fait bâtir son temple à Deir el-Bahari.",
    },
    {
      id: 'amarna',
      tier: 2,
      type: 'text',
      kicker: 'Crise',
      title: 'La révolution d’Akhenaton',
      body:
        "Vers 1353 av. J.-C., Aménophis IV impose le culte d'un dieu unique, le disque solaire Aton, prend le nom d'Akhenaton et fonde une nouvelle capitale, Amarna. Son successeur Toutânkhamon rétablit les anciens dieux ; sa tombe, intacte, est découverte en 1922.",
    },
    {
      id: 'qadesh',
      tier: 2,
      type: 'war',
      nom: 'Bataille de Qadesh',
      annee: -1274,
      adversaires: ['Empire hittite (Muwatalli II)'],
      allies: ["Armée de Ramsès II", 'Mercenaires shardanes'],
      vainqueur: 'Aucun vainqueur net',
      consequences:
        "L'une des plus grandes batailles de chars de l'Antiquité, en Syrie. Les deux camps revendiquent la victoire ; une quinzaine d'années plus tard, ils signent la paix.",
    },
    {
      id: 'sciences',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Calendrier, géométrie, médecine',
      body:
        "Les Égyptiens adoptent un calendrier de 365 jours, pratiquent une géométrie précise pour redessiner les champs après la crue et une médecine réputée. Vers 2650 av. J.-C., l'architecte Imhotep construit la pyramide à degrés de Djoser, la première pyramide.",
    },
    {
      id: 'alexandrie',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Alexandrie, capitale du savoir',
      body:
        "Fondée par Alexandre le Grand en 331 av. J.-C., Alexandrie devient la capitale des Ptolémées. Son phare est l'une des Sept Merveilles, et sa Bibliothèque veut rassembler tous les livres du monde.",
    },
  ],

  quiz: [
    { id: 'narmer', type: 'mcq', prompt: "Quel roi unifie la Haute et la Basse-Égypte vers 3150 av. J.-C. ?", options: ['Narmer', 'Khéops', 'Ramsès II', 'Akhenaton'], answer: 0 },
    { id: 'kemet', type: 'mcq', prompt: 'Que signifie « Kemet », le nom que les Égyptiens donnent à leur pays ?', options: ['La terre noire', 'Le pays du soleil', 'La vallée des rois', 'Le désert rouge'], answer: 0, explanation: 'La terre noire, fertilisée par le limon de la crue.' },
    { id: 'don-nil', type: 'tf', prompt: "C'est l'historien grec Hérodote qui écrit que l'Égypte est « un don du Nil ».", answer: true },
    { id: 'pyramide-hauteur', type: 'mcq', prompt: 'Quelle était la hauteur d’origine de la Grande Pyramide ?', options: ['146 m', '46 m', '300 m', '96 m'], answer: 0 },
    { id: 'merveille', type: 'tf', prompt: 'La Grande Pyramide est la seule des Sept Merveilles du monde antique encore debout.', answer: true },
    { id: 'champollion', type: 'mcq', prompt: 'Qui déchiffre les hiéroglyphes en 1822 ?', options: ['Champollion', 'Howard Carter', 'Napoléon', 'Hérodote'], answer: 0, explanation: 'Grâce à la pierre de Rosette, qui porte le même texte en grec et en égyptien.' },
    { id: 'rosette', type: 'mcq', prompt: "Quel objet permet de déchiffrer les hiéroglyphes ?", options: ['La pierre de Rosette', 'Le papyrus de Turin', 'Le masque de Toutânkhamon', 'Le Livre des morts'], answer: 0 },
    { id: 'pesee', type: 'mcq', prompt: "Dans l'au-delà, contre quoi le cœur du défunt est-il pesé ?", options: ['La plume de Maât', 'Un lingot d’or', 'Le sceptre du pharaon', 'Une pierre du Nil'], answer: 0 },
    { id: 'periodes', type: 'order', prompt: "Remettez ces périodes dans l'ordre.", items: ['Ancien Empire', 'Moyen Empire', 'Nouvel Empire', 'Conquête d’Alexandre'] },
    { id: 'ramses-regne', type: 'tf', prompt: 'Ramsès II a régné moins de 10 ans.', answer: false, explanation: 'Il a régné 66 ans (1279 – 1213 av. J.-C.).' },
    { id: 'abou-simbel', type: 'mcq', prompt: 'Quels temples géants Ramsès II fait-il creuser dans la falaise ?', options: ['Abou Simbel', 'Karnak', 'Philae', 'Gizeh'], answer: 0 },
    { id: 'qadesh-ennemi', type: 'mcq', prompt: 'Contre quel peuple Ramsès II combat-il à Qadesh ?', options: ['Les Hittites', 'Les Perses', 'Les Romains', 'Les Nubiens'], answer: 0 },
    { id: 'actium', type: 'mcq', prompt: 'Quelle bataille scelle la fin de l’Égypte indépendante en 31 av. J.-C. ?', options: ['Actium', 'Qadesh', 'Marathon', 'Alésia'], answer: 0 },
    { id: 'cleopatre-dynastie', type: 'mcq', prompt: 'À quelle dynastie appartient Cléopâtre VII ?', options: ['Les Ptolémées', 'Les Ramessides', 'Les Achéménides', 'Les Julio-Claudiens'], answer: 0, explanation: 'Une dynastie grecque issue d’un général d’Alexandre.' },
    { id: 'akhenaton', type: 'mcq', prompt: 'Quel dieu unique Akhenaton veut-il imposer ?', options: ['Aton', 'Amon', 'Osiris', 'Seth'], answer: 0 },
    { id: 'toutankhamon', type: 'tf', prompt: 'La tombe de Toutânkhamon est découverte intacte en 1922.', answer: true },
    { id: 'imhotep', type: 'mcq', prompt: 'Quel architecte construit la première pyramide, à degrés, pour le roi Djoser ?', options: ['Imhotep', 'Khéops', 'Narmer', 'Hatchepsout'], answer: 0 },
    { id: 'alexandrie-fondateur', type: 'mcq', prompt: 'Qui fonde Alexandrie en 331 av. J.-C. ?', options: ['Alexandre le Grand', 'Jules César', 'Ramsès II', 'Cléopâtre'], answer: 0 },
  ],

  recap: [
    '≈ 3150 av. J.-C. : Narmer unifie les deux Égyptes',
    "Le Nil et sa crue font vivre le pays (« un don du Nil »)",
    "Pyramides de l'Ancien Empire, apogée du Nouvel Empire (Ramsès II)",
    '30 av. J.-C. : mort de Cléopâtre, l’Égypte devient romaine',
  ],
}

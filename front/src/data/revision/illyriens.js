/** Chapitre rédigé : Illyriens (≈ 700 – 168 av. J.-C.). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'peuples',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Les peuples de l’Adriatique',
      body:
        "Les Grecs appellent « Illyriens » les peuples qui vivent sur la rive est de la mer Adriatique : l'actuelle Albanie, le Monténégro, la Croatie et la Bosnie. Ils sont divisés en tribus (Taulantiens, Ardiéens, Dardaniens…) et n'ont pas laissé de textes : on les connaît par les auteurs grecs et romains et par l'archéologie.",
      highlight: { value: 'Adriatique', label: 'le domaine des Illyriens' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Entre mer et montagnes',
      years: [-700, -500],
      caption: "Un pays de côtes découpées, d'îles et de montagnes, voisin de la Grèce et de la Macédoine.",
    },
    {
      id: 'tumulus',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Des chefs sous des tumulus',
      body:
        "Les Illyriens vivent d'élevage, d'agriculture et du travail des métaux, dans des villages fortifiés perchés sur les hauteurs. Leurs chefs sont enterrés sous des tumulus avec armes et bijoux, comme sur le plateau de Glasinac, en Bosnie, où des centaines de tertres ont été fouillés.",
    },
    {
      id: 'grecs',
      tier: 1,
      type: 'text',
      kicker: 'Monde',
      title: 'Voisins des Grecs',
      body:
        "Au VIIe siècle av. J.-C., des Grecs de Corinthe et de Corcyre fondent sur la côte Épidamne (Durrës, en Albanie), puis Apollonia. Les Illyriens y échangent métaux et produits de l'élevage contre du vin, de l'huile et des céramiques.",
    },
    {
      id: 'macedoine',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Des rois face à la Macédoine',
      body:
        "Au IVe siècle av. J.-C., des rois illyriens apparaissent. Bardylis menace la Macédoine, mais il est battu en 358 av. J.-C. par le jeune Philippe II. Plus tard, le roi Glaukias accueille et protège Pyrrhus, futur roi d'Épire, encore enfant.",
    },
    {
      id: 'lembos',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Le lembos, navire des pirates',
      body:
        "Les Illyriens naviguent sur des lemboi, des navires légers, rapides et maniables, parfaits pour surprendre les bateaux de commerce. Les Macédoniens les adoptent ; les Romains, eux, copient la liburne, un navire léger nommé d'après les Liburnes, un peuple voisin.",
    },
    {
      id: 'teuta',
      tier: 1,
      type: 'person',
      nom: 'Teuta',
      role: 'Reine des Ardiéens (régente)',
      dates: 'régente vers 231 – 228 av. J.-C.',
      description: "Veuve du roi Agron, elle gouverne pour son fils. Ses navires pillent les côtes grecques et les marchands italiens. Selon l'historien Polybe, elle fait tuer un ambassadeur romain, ce qui provoque l'intervention de Rome.",
    },
    {
      id: 'guerre',
      tier: 1,
      type: 'war',
      nom: "Première guerre d'Illyrie",
      annee: -229,
      adversaires: ['République romaine'],
      allies: ['Royaume illyrien de Teuta'],
      vainqueur: 'Rome',
      consequences: "Pour la première fois, l'armée romaine traverse l'Adriatique. Teuta doit céder des territoires et promettre de ne plus naviguer au-delà de Lissos avec plus de deux navires, sans armes (228 av. J.-C.).",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Fin',
      title: "De l'indépendance à la province romaine",
      items: [
        { year: -358, label: 'Bardylis vaincu par Philippe II' },
        { year: -229, label: "Première guerre d'Illyrie contre Teuta" },
        { year: -219, label: "Deuxième guerre d'Illyrie" },
        { year: -168, label: 'Le roi Genthios capitule à Scodra' },
        { year: 9, label: 'Rome écrase la grande révolte illyrienne' },
      ],
    },

    // ── Niveau 2 ──
    {
      id: 'genthios',
      tier: 2,
      type: 'person',
      nom: 'Genthios',
      role: 'Dernier roi illyrien',
      dates: 'règne vers 181 – 168 av. J.-C.',
      description: "Allié de Persée de Macédoine contre Rome, il est vaincu en une trentaine de jours par le préteur Anicius. Il se rend dans sa capitale, Scodra (Shkodër, en Albanie), et finit captif en Italie.",
    },
    {
      id: 'croyances',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Serpents et dieux cavaliers',
      body:
        "La religion illyrienne est mal connue. Le serpent, symbole protecteur, apparaît souvent sur les bijoux. Selon un mythe grec, Cadmos et Harmonie finissent leur vie chez les Illyriens, changés en serpents. Une inscription romaine évoque Médaurus, dieu cavalier protecteur d'une ville de la côte.",
    },
    {
      id: 'revolte',
      tier: 2,
      type: 'war',
      nom: 'Grande révolte illyrienne',
      annee: 6,
      adversaires: ['Empire romain (Tibère)'],
      allies: ['Peuples de Dalmatie et de Pannonie (les deux Baton)'],
      vainqueur: 'Rome',
      consequences: "Pendant trois ans (6-9 apr. J.-C.), Rome affronte l'une des plus dures révoltes de son histoire. La victoire de Tibère fait de toute la région une partie solide de l'Empire.",
    },
    {
      id: 'heritage',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Des empereurs illyriens',
      body:
        "Romanisée, l'Illyrie fournit à Rome d'excellents soldats et plusieurs empereurs, comme Aurélien ou Dioclétien. Les liens entre la langue illyrienne et l'albanais actuel sont encore débattus par les linguistes.",
    },
  ],

  quiz: [
    { id: 'mer', type: 'mcq', prompt: 'Au bord de quelle mer vivent les Illyriens ?', options: ['La mer Adriatique', 'La mer Baltique', 'La mer Noire', 'La mer Rouge'], answer: 0 },
    { id: 'pays', type: 'mcq', prompt: 'Quel pays actuel faisait partie de l’Illyrie ?', options: ['L’Albanie', 'L’Espagne', 'La Turquie', 'La Hongrie'], answer: 0 },
    { id: 'ecrits', type: 'tf', prompt: 'Les Illyriens ont laissé de nombreux textes dans leur langue.', answer: false, explanation: 'On les connaît par les auteurs grecs et romains et par l’archéologie.' },
    { id: 'glasinac', type: 'mcq', prompt: 'Que trouve-t-on sur le plateau de Glasinac, en Bosnie ?', options: ['Des centaines de tumulus', 'Une pyramide', 'Un grand port antique', 'Un temple romain géant'], answer: 0 },
    { id: 'epidamne', type: 'mcq', prompt: 'Quelle colonie grecque devenue Durrës est fondée sur la côte illyrienne ?', options: ['Épidamne', 'Marseille', 'Byzance', 'Cyrène'], answer: 0 },
    { id: 'bardylis', type: 'mcq', prompt: 'Qui bat le roi illyrien Bardylis en 358 av. J.-C. ?', options: ['Philippe II de Macédoine', 'Alexandre le Grand', 'Jules César', 'Pyrrhus'], answer: 0 },
    { id: 'pyrrhus', type: 'mcq', prompt: 'Quel futur roi d’Épire est protégé enfant par le roi illyrien Glaukias ?', options: ['Pyrrhus', 'Persée', 'Philippe V', 'Hannibal'], answer: 0 },
    { id: 'lembos', type: 'mcq', prompt: 'Comment s’appelle le navire léger des Illyriens ?', options: ['Le lembos', 'La trirème', 'Le drakkar', 'La caravelle'], answer: 0 },
    { id: 'piraterie', type: 'tf', prompt: 'La piraterie illyrienne contre les marchands italiens pousse Rome à intervenir.', answer: true },
    { id: 'teuta', type: 'mcq', prompt: 'Quelle reine illyrienne affronte Rome en 229 av. J.-C. ?', options: ['Teuta', 'Cléopâtre', 'Boudicca', 'Didon'], answer: 0 },
    { id: 'polybe', type: 'mcq', prompt: 'Quel historien grec raconte la guerre de Rome contre Teuta ?', options: ['Polybe', 'Hérodote', 'Thucydide', 'Homère'], answer: 0 },
    { id: 'premiere', type: 'tf', prompt: "La première guerre d'Illyrie est la première fois que l'armée romaine traverse l'Adriatique.", answer: true },
    { id: 'genthios', type: 'mcq', prompt: 'Quel dernier roi illyrien capitule à Scodra en 168 av. J.-C. ?', options: ['Genthios', 'Agron', 'Bardylis', 'Glaukias'], answer: 0 },
    { id: 'persee', type: 'mcq', prompt: 'De quel roi Genthios est-il l’allié contre Rome ?', options: ['Persée de Macédoine', 'Hannibal', 'Mithridate', 'Antiochos III'], answer: 0 },
    { id: 'revolte', type: 'mcq', prompt: 'Quel futur empereur écrase la grande révolte illyrienne (6-9 apr. J.-C.) ?', options: ['Tibère', 'Néron', 'Hadrien', 'Constantin'], answer: 0 },
    { id: 'empereurs', type: 'mcq', prompt: 'Quel empereur romain est d’origine illyrienne ?', options: ['Dioclétien', 'Auguste', 'Néron', 'Hadrien'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Défaite de Bardylis face à Philippe II', 'Guerre de Rome contre Teuta', 'Capitulation de Genthios', 'Grande révolte illyrienne'] },
  ],

  recap: [
    'Des tribus de la côte est de l’Adriatique, sans écriture',
    'Des rois face à la Macédoine puis à Rome',
    'Piraterie, lemboi et la reine Teuta (229 av. J.-C.)',
    '168 av. J.-C. : chute de Genthios, l’Illyrie passe sous Rome',
  ],
}

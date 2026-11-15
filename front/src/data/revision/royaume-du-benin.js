/** Chapitre rédigé : Royaume du Bénin (vers 1180 – 1897). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'oba',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Le royaume de l’oba',
      body:
        "Dans le sud de l'actuel Nigeria, le peuple edo forme un royaume dirigé par un roi sacré, l'oba. Selon la tradition, la dynastie est fondée vers la fin du XIIe siècle. Attention : ce royaume n'a rien à voir avec l'actuel pays du Bénin, situé plus à l'ouest.",
      highlight: { value: '≈ 1180', label: 'fondation de la dynastie selon la tradition' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le royaume du Bénin dans le temps',
      years: [1300, 1500, 1880],
      caption: 'Comparez : le royaume s’agrandit au XVe siècle, puis recule face à ses voisins et aux Européens.',
    },
    {
      id: 'ewuare',
      tier: 1,
      type: 'person',
      nom: 'Ewuare le Grand',
      role: 'Oba du Bénin',
      dates: 'règne vers 1440 – 1473',
      description:
        "Il agrandit le royaume par la guerre et reconstruit la capitale, Benin City, entourée de fossés et de remparts de terre. Il organise les corporations d'artisans au service de la cour.",
    },
    {
      id: 'portugais',
      tier: 1,
      type: 'text',
      kicker: 'Commerce',
      title: 'L’arrivée des Portugais',
      body:
        "En 1486, des navigateurs portugais arrivent à Benin City. Le royaume leur vend du poivre, de l'ivoire et des tissus, et achète des bracelets de cuivre et de laiton, les manilles, que les artistes fondent pour créer leurs œuvres. L'oba contrôle strictement ce commerce.",
    },
    {
      id: 'bronzes',
      tier: 1,
      type: 'text',
      kicker: 'Arts',
      title: 'Les bronzes du Bénin',
      body:
        "Les fondeurs de la cour coulent en laiton et en bronze des têtes, des statues et des centaines de plaques qui décoraient le palais. Elles représentent l'oba, ses guerriers, ses chefs et même des marchands portugais. Ce sont des chefs-d'œuvre de l'art africain.",
    },
    {
      id: 'idia',
      tier: 1,
      type: 'person',
      nom: 'Idia',
      role: 'Reine mère',
      dates: 'XVe – XVIe siècles',
      description:
        "Mère de l'oba Esigie, elle l'aide à prendre le pouvoir et combat à ses côtés contre le royaume igala. Elle devient la première reine mère, avec son propre palais. Son visage figure sur un célèbre masque en ivoire.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Le royaume du Bénin en dates',
      items: [
        { year: 1180, label: 'Eweka Ier, premier oba (tradition)' },
        { year: 1440, label: 'Règne d’Ewuare le Grand' },
        { year: 1486, label: 'Arrivée des Portugais' },
        { year: 1515, label: 'Guerre d’Idah' },
        { year: 1897, label: 'Expédition punitive britannique' },
      ],
    },
    {
      id: 'expedition',
      tier: 1,
      type: 'war',
      nom: 'Expédition punitive de 1897',
      annee: 1897,
      adversaires: ['Royaume-Uni'],
      allies: ['Royaume du Bénin (Ovonramwen)'],
      vainqueur: 'Royaume-Uni',
      consequences:
        "Après la mort de membres d'une délégation britannique, une armée prend et incendie Benin City. L'oba Ovonramwen est exilé ; des milliers d'œuvres d'art sont emportées en Europe.",
    },
    {
      id: 'restitutions',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Le retour des bronzes',
      body:
        "Dispersés dans les musées du monde, les bronzes du Bénin sont réclamés par le Nigeria. Au début des années 2020, l'Allemagne et plusieurs musées britanniques et américains ont commencé à en restituer. Un oba porte toujours le titre royal, comme autorité traditionnelle.",
    },

    // ── Niveau 2 ──
    {
      id: 'cire',
      tier: 2,
      type: 'text',
      kicker: 'Techniques',
      title: 'La cire perdue',
      body:
        "Le fondeur sculpte un modèle en cire sur un noyau d'argile, le recouvre d'argile, puis chauffe : la cire fond et s'écoule. On verse alors le métal liquide à sa place. Une fois refroidi, on brise le moule : chaque œuvre est unique.",
    },
    {
      id: 'murs',
      tier: 2,
      type: 'text',
      kicker: 'Techniques',
      title: 'Des remparts de terre',
      body:
        "Autour de Benin City et des villages du royaume, les Edo ont creusé des fossés et élevé des remparts de terre qui, mis bout à bout, mesureraient des milliers de kilomètres.",
    },
    {
      id: 'captifs',
      tier: 2,
      type: 'text',
      kicker: 'Commerce',
      title: 'Un oba qui contrôle la traite',
      body:
        "À la différence d'autres royaumes de la côte, l'oba du Bénin interdit pendant longtemps la vente d'hommes captifs aux Européens. Le royaume participe toutefois à la traite, surtout à partir du XVIIIe siècle.",
    },
    {
      id: 'festac',
      tier: 2,
      type: 'keyfigure',
      kicker: 'Héritage',
      value: '1977',
      label: 'le masque d’Idia devient l’emblème du FESTAC',
      caption: "Le masque en ivoire de la reine Idia a servi d'emblème au grand festival panafricain des arts et de la culture organisé à Lagos.",
    },
    {
      id: 'ovonramwen',
      tier: 2,
      type: 'person',
      nom: 'Ovonramwen',
      role: 'Dernier oba indépendant',
      dates: 'vers 1857 – 1914',
      description: "Oba de 1888 à 1897, il tente de limiter l'influence britannique sur le commerce. Après l'expédition punitive, il est exilé à Calabar, où il meurt en 1914.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve l’ancien royaume du Bénin ?', options: ['Le Nigeria', 'Le Bénin', 'Le Ghana', 'Le Mali'], answer: 0 },
    { id: 'piege', type: 'tf', prompt: 'L’ancien royaume du Bénin se trouvait dans l’actuel pays du Bénin.', answer: false, explanation: 'Il se trouvait dans le sud de l’actuel Nigeria.' },
    { id: 'roi', type: 'mcq', prompt: 'Quel titre porte le roi du Bénin ?', options: ['Oba', 'Mansa', 'Négus', 'Kabaka'], answer: 0 },
    { id: 'peuple', type: 'mcq', prompt: 'Quel peuple forme le royaume du Bénin ?', options: ['Les Edo', 'Les Zoulous', 'Les Berbères', 'Les Shonas'], answer: 0 },
    { id: 'ewuare', type: 'mcq', prompt: 'Quel oba reconstruit Benin City au XVe siècle ?', options: ['Ewuare', 'Eweka', 'Ovonramwen', 'Esigie'], answer: 0 },
    { id: 'portugais', type: 'mcq', prompt: 'Quels Européens arrivent à Benin City en 1486 ?', options: ['Les Portugais', 'Les Anglais', 'Les Français', 'Les Hollandais'], answer: 0 },
    { id: 'manilles', type: 'mcq', prompt: 'Que sont les manilles ?', options: ['Des bracelets de cuivre et de laiton', 'Des épées', 'Des masques', 'Des pirogues'], answer: 0 },
    { id: 'bronzes', type: 'mcq', prompt: 'Pour quelles œuvres le royaume du Bénin est-il célèbre ?', options: ['Ses bronzes', 'Ses pyramides', 'Ses mosaïques', 'Ses vitraux'], answer: 0 },
    { id: 'technique', type: 'mcq', prompt: 'Quelle technique utilisent les fondeurs du Bénin ?', options: ['La cire perdue', 'La peinture à l’huile', 'La gravure sur bois', 'Le vitrail'], answer: 0 },
    { id: 'idia', type: 'mcq', prompt: 'Qui est représentée sur un célèbre masque en ivoire ?', options: ['La reine mère Idia', 'Cléopâtre', 'Nzinga', 'La reine de Saba'], answer: 0 },
    { id: 'expedition', type: 'mcq', prompt: 'Quel pays incendie Benin City en 1897 ?', options: ['Le Royaume-Uni', 'La France', 'Le Portugal', 'L’Allemagne'], answer: 0 },
    { id: 'pillage', type: 'tf', prompt: 'En 1897, des milliers d’œuvres d’art sont emportées en Europe.', answer: true },
    { id: 'restitution', type: 'tf', prompt: 'Depuis les années 2020, des bronzes du Bénin sont rendus au Nigeria.', answer: true },
    { id: 'ovonramwen', type: 'mcq', prompt: 'Quel oba est exilé après 1897 ?', options: ['Ovonramwen', 'Ewuare', 'Esigie', 'Eweka'], answer: 0 },
    { id: 'murs', type: 'mcq', prompt: 'Qu’ont construit les Edo autour de leurs villes ?', options: ['Des fossés et des remparts de terre', 'Des murailles de marbre', 'Des pyramides', 'Des canaux de navigation'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Eweka Ier, premier oba', 'Règne d’Ewuare le Grand', 'Arrivée des Portugais', 'Expédition punitive britannique'] },
  ],

  recap: [
    'Le royaume des Edo, dans le sud du Nigeria, dirigé par un roi sacré, l’oba',
    'Ewuare le Grand reconstruit Benin City au XVe siècle',
    'Les bronzes de la cour, chefs-d’œuvre de l’art africain',
    '1897 : expédition britannique, pillage ; restitutions depuis les années 2020',
  ],
}

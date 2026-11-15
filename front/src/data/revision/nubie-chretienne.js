/** Chapitre rédigé : Nubie chrétienne (vers 500 – 1504). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'royaumes',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Trois royaumes sur le Nil',
      body:
        "Après la fin du royaume de Méroé, au IVe siècle, trois royaumes se partagent la Nubie, le long du Nil, dans l'actuel Soudan : la Nobadie au nord, la Makurie au centre, avec Dongola pour capitale, et l'Alodie au sud.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'La Nubie chrétienne',
      years: [600, 700],
      caption: 'Les royaumes nubiens s’étirent le long du Nil, au sud de l’Égypte.',
    },
    {
      id: 'conversion',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Des royaumes chrétiens',
      body:
        "Au VIe siècle, des missionnaires envoyés de Constantinople convertissent les rois nubiens au christianisme. En 543, le prêtre Julien, envoyé par l'impératrice Théodora, baptise le roi de Nobadie. L'Église nubienne dépend du patriarche copte d'Alexandrie.",
      highlight: { value: '543', label: 'conversion de la Nobadie' },
    },
    {
      id: 'dongola',
      tier: 1,
      type: 'war',
      nom: 'Siège de Dongola (652)',
      annee: 652,
      adversaires: ['Califat (Abdallah ibn Saad)'],
      allies: ['Makurie'],
      vainqueur: 'Compromis : traité du baqt',
      consequences:
        "Les archers nubiens, surnommés par les Arabes « les archers qui visent les yeux », repoussent l'armée venue d'Égypte. Les deux camps signent un traité : la Nubie reste chrétienne et indépendante.",
    },
    {
      id: 'baqt',
      tier: 1,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Le baqt, six siècles de paix',
      body:
        "Le traité du baqt organise les échanges : chaque année, la Nubie livre des esclaves à l'Égypte, qui lui fournit des céréales, du vin et des tissus. Renégocié plusieurs fois, il dure environ six siècles : c'est l'un des plus longs traités de paix de l'histoire.",
    },
    {
      id: 'faras',
      tier: 1,
      type: 'text',
      kicker: 'Arts',
      title: 'Les fresques de Faras',
      body:
        "Les églises nubiennes se couvrent de peintures aux couleurs vives : saints, évêques, rois. Dans les années 1960, une équipe polonaise sauve les fresques de la cathédrale de Faras, juste avant que le barrage d'Assouan ne noie le site sous le lac Nasser.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'La Nubie chrétienne en dates',
      items: [
        { year: 543, label: 'Conversion de la Nobadie' },
        { year: 652, label: 'Siège de Dongola et baqt' },
        { year: 707, label: 'Cathédrale de Faras' },
        { year: 1276, label: 'Intervention des Mamelouks' },
        { year: 1317, label: 'La salle du trône devient mosquée' },
        { year: 1504, label: 'Chute de l’Alodie' },
      ],
    },
    {
      id: 'ecriture',
      tier: 1,
      type: 'text',
      kicker: 'Langue',
      title: 'Le vieux-nubien',
      body:
        "Les Nubiens écrivent leur langue avec l'alphabet copte, complété de quelques lettres. Le vieux-nubien est l'une des plus anciennes langues écrites d'Afrique subsaharienne. Des langues nubiennes sont encore parlées aujourd'hui.",
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Le déclin',
      body:
        "À partir du XIIIe siècle, les Mamelouks d'Égypte interviennent en Makurie et placent des rois à leur service. Des tribus arabes s'installent ; en 1317, la salle du trône de Dongola devient une mosquée. Vers 1504, l'Alodie tombe à son tour.",
    },

    // ── Niveau 2 ──
    {
      id: 'merkurios',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Le « nouveau Constantin »',
      body:
        "Le roi Merkurios, vers 700, règne sur la Nobadie et la Makurie, désormais unies. Les chroniques chrétiennes le comparent à Constantin, le premier empereur romain chrétien.",
    },
    {
      id: 'bagdad',
      tier: 2,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Un prince nubien à Bagdad',
      body:
        "En 836, le jeune prince Georgios voyage jusqu'à Bagdad pour rencontrer le calife et renégocier le baqt. Il obtient un allègement du tribut et devient plus tard un roi puissant.",
    },
    {
      id: 'saqiya',
      tier: 2,
      type: 'text',
      kicker: 'Techniques',
      title: 'Les roues à eau',
      body:
        "Le long du Nil, des roues à godets, les saqiyas, tournées par des bœufs, montent l'eau du fleuve vers les champs. Elles permettent de cultiver les rives toute l'année.",
    },
    {
      id: 'coptes',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Protecteurs des chrétiens d’Égypte',
      body:
        "Vers 747, selon les chroniques coptes, le roi Kyriakos marche vers l'Égypte pour obtenir la libération du patriarche d'Alexandrie, emprisonné par le gouverneur.",
    },
    {
      id: 'mamelouks',
      tier: 2,
      type: 'war',
      nom: 'Interventions mameloukes en Makurie',
      annee: 1276,
      adversaires: ['Sultanat mamelouk (Baybars)'],
      allies: ['Makurie (roi David)'],
      vainqueur: 'Sultanat mamelouk',
      consequences: "Après une attaque du roi David contre un port égyptien, les Mamelouks prennent Dongola et installent un roi à leur service.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve surtout la Nubie ?', options: ['Le Soudan', 'Le Maroc', 'La Turquie', 'L’Inde'], answer: 0 },
    { id: 'fleuve', type: 'mcq', prompt: 'Le long de quel fleuve vivent les Nubiens ?', options: ['Le Nil', 'Le Niger', 'Le Congo', 'Le Tigre'], answer: 0 },
    { id: 'trois', type: 'mcq', prompt: 'Combien de royaumes chrétiens se partagent d’abord la Nubie ?', options: ['Trois', 'Un', 'Sept', 'Douze'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale de la Makurie ?', options: ['Dongola', 'Le Caire', 'Méroé', 'Khartoum'], answer: 0 },
    { id: 'religion', type: 'mcq', prompt: 'Quelle religion adoptent les rois nubiens au VIe siècle ?', options: ['Le christianisme', 'L’islam', 'Le bouddhisme', 'Le judaïsme'], answer: 0 },
    { id: 'theodora', type: 'mcq', prompt: 'Quelle impératrice envoie un missionnaire en Nobadie ?', options: ['Théodora', 'Cléopâtre', 'Catherine II', 'Zénobie'], answer: 0 },
    { id: 'dongola', type: 'tf', prompt: 'En 652, les Nubiens repoussent une armée arabe devant Dongola.', answer: true },
    { id: 'archers', type: 'mcq', prompt: 'Comment les Arabes surnomment-ils les archers nubiens ?', options: ['Les archers qui visent les yeux', 'Les archers du désert', 'Les archers noirs', 'Les archers volants'], answer: 0 },
    { id: 'baqt', type: 'mcq', prompt: 'Comment s’appelle le traité entre la Nubie et l’Égypte ?', options: ['Le baqt', 'Le jihad', 'Le traité de Versailles', 'La Magna Carta'], answer: 0 },
    { id: 'duree', type: 'mcq', prompt: 'Combien de temps environ dure le baqt ?', options: ['Six siècles', 'Six ans', 'Six mois', 'Soixante ans'], answer: 0 },
    { id: 'faras', type: 'mcq', prompt: 'Qu’a-t-on sauvé à Faras dans les années 1960 ?', options: ['Des fresques', 'Des pyramides', 'Des momies', 'Un trésor d’or'], answer: 0 },
    { id: 'lac', type: 'mcq', prompt: 'Quel lac de barrage a noyé le site de Faras ?', options: ['Le lac Nasser', 'Le lac Tchad', 'Le lac Victoria', 'Le lac Léman'], answer: 0 },
    { id: 'ecriture', type: 'mcq', prompt: 'Avec quel alphabet les Nubiens écrivent-ils leur langue ?', options: ['L’alphabet copte', 'Les hiéroglyphes', 'L’alphabet latin', 'Le cunéiforme'], answer: 0 },
    { id: 'mamelouks', type: 'mcq', prompt: 'Qui intervient en Makurie à partir du XIIIe siècle ?', options: ['Les Mamelouks d’Égypte', 'Les Romains', 'Les Portugais', 'Les Mongols'], answer: 0 },
    { id: 'mosquee', type: 'tf', prompt: 'En 1317, la salle du trône de Dongola est transformée en mosquée.', answer: true },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Conversion de la Nobadie', 'Siège de Dongola et baqt', 'Intervention des Mamelouks', 'Chute de l’Alodie'] },
  ],

  recap: [
    'Trois royaumes nubiens le long du Nil, chrétiens depuis le VIe siècle',
    '652 : la Makurie repousse les Arabes ; le baqt dure six siècles',
    'Fresques de Faras et vieux-nubien, langue écrite',
    'Interventions mameloukes, islamisation, chute de l’Alodie vers 1504',
  ],
}

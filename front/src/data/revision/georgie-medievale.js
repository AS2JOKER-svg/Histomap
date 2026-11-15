/** Chapitre rédigé : Royaume de Géorgie (1008 – 1490). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'unification',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Un royaume chrétien du Caucase',
      body:
        "La Géorgie, entre la mer Noire et la mer Caspienne, est chrétienne depuis le IVe siècle. Ses principautés sont unies en 1008 par le roi Bagrat III, de la dynastie des Bagrationi. Le royaume doit sans cesse se défendre contre de puissants voisins.",
      highlight: { value: '1008', label: 'unification du royaume' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'La Géorgie dans le temps',
      years: [1100, 1200, 1400],
      caption: 'Comparez : la Géorgie s’agrandit jusqu’à l’âge d’or vers 1200, puis recule après les Mongols et Tamerlan.',
    },
    {
      id: 'david',
      tier: 1,
      type: 'person',
      nom: 'David IV le Bâtisseur',
      role: 'Roi de Géorgie',
      dates: 'règne 1089 – 1125',
      description:
        "Roi à 16 ans, il réforme l'armée et libère le pays de la domination seldjoukide. Il fonde le monastère de Gelati, où une académie enseigne la philosophie et l'astronomie.",
    },
    {
      id: 'didgori',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Didgori',
      annee: 1121,
      adversaires: ['Coalition seldjoukide'],
      allies: ['Royaume de Géorgie (David IV)', 'Cavaliers kiptchaks', 'Croisés francs'],
      vainqueur: 'Royaume de Géorgie',
      consequences:
        "David IV écrase une grande armée seldjoukide. L'année suivante, il reprend Tbilissi, ville musulmane depuis quatre siècles, et en fait sa capitale.",
    },
    {
      id: 'tamar',
      tier: 1,
      type: 'person',
      nom: 'Tamar',
      role: 'Souveraine de Géorgie',
      dates: 'règne 1184 – 1213',
      description:
        "Arrière-petite-fille de David IV, elle porte le titre de « roi » (mepe). Sous son règne, la Géorgie est à son apogée et aide à fonder l'empire de Trébizonde, sur la mer Noire. L'Église géorgienne la vénère comme sainte.",
    },
    {
      id: 'roustaveli',
      tier: 1,
      type: 'text',
      kicker: 'Arts',
      title: 'Le Chevalier à la peau de tigre',
      body:
        "Vers 1200, le poète Chota Roustaveli écrit, en l'honneur de Tamar, un long poème qui célèbre l'amitié, la loyauté et le courage. On y lit : « Les petits du lion sont égaux, qu'ils soient mâles ou femelles. » C'est le grand poème national géorgien.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'La Géorgie médiévale en dates',
      items: [
        { year: 1008, label: 'Bagrat III unifie la Géorgie' },
        { year: 1121, label: 'Victoire de Didgori' },
        { year: 1184, label: 'Règne de Tamar' },
        { year: 1236, label: 'Invasion mongole' },
        { year: 1386, label: 'Tamerlan prend Tbilissi' },
        { year: 1490, label: 'Partage du royaume' },
      ],
    },
    {
      id: 'mongols',
      tier: 1,
      type: 'text',
      kicker: 'Déclin',
      title: 'Mongols et Tamerlan',
      body:
        "Au XIIIe siècle, les Mongols soumettent la Géorgie. Le roi Georges V le Brillant la libère et la réunifie au XIVe siècle. Mais de 1386 à 1403, Tamerlan ravage le pays à plusieurs reprises : villes et monastères sont détruits.",
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Trois royaumes',
      body:
        "Affaibli, le royaume se divise en 1490 en trois royaumes rivaux : Kartli, Kakhétie et Iméréthie. Ils seront disputés pendant des siècles entre l'Empire ottoman et la Perse.",
    },

    // ── Niveau 2 ──
    {
      id: 'alphabet',
      tier: 2,
      type: 'text',
      kicker: 'Langue',
      title: 'Un alphabet unique',
      body:
        "Le géorgien s'écrit avec un alphabet qui lui est propre, aux lettres arrondies. Les trois écritures successives de la langue géorgienne sont inscrites au patrimoine culturel immatériel de l'humanité.",
    },
    {
      id: 'kiptchaks',
      tier: 2,
      type: 'text',
      kicker: 'Armée',
      title: 'Les cavaliers kiptchaks',
      body:
        "Pour disposer d'une armée permanente, David IV installe en Géorgie environ 40 000 cavaliers kiptchaks, des nomades turcs du nord du Caucase, avec leurs familles.",
    },
    {
      id: 'tolerance',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Un roi tolérant',
      body:
        "Après la reprise de Tbilissi, David IV protège les habitants musulmans de la ville. Les communautés arméniennes et juives vivent aussi dans le royaume.",
    },
    {
      id: 'vin',
      tier: 2,
      type: 'keyfigure',
      kicker: 'Quotidien',
      value: 'Kvevri',
      label: 'les grandes jarres enterrées où l’on fait le vin',
      caption: "La Géorgie est l'un des plus anciens pays du vin. La vinification en kvevri est inscrite au patrimoine culturel immatériel de l'humanité.",
    },
    {
      id: 'tamerlan',
      tier: 2,
      type: 'war',
      nom: 'Invasions de Tamerlan en Géorgie',
      annee: 1386,
      adversaires: ['Tamerlan'],
      allies: ['Royaume de Géorgie (Bagrat V)'],
      vainqueur: 'Tamerlan',
      consequences: "Le roi Bagrat V est capturé. Huit campagnes jusqu'en 1403 ruinent le pays, qui ne retrouvera pas sa puissance.",
    },
  ],

  quiz: [
    { id: 'region', type: 'mcq', prompt: 'Dans quelle région se trouve la Géorgie ?', options: ['Le Caucase', 'Les Balkans', 'Les Alpes', 'L’Himalaya'], answer: 0 },
    { id: 'religion', type: 'mcq', prompt: 'Quelle est la religion du royaume de Géorgie ?', options: ['Le christianisme orthodoxe', 'L’islam', 'Le bouddhisme', 'Le judaïsme'], answer: 0 },
    { id: 'unification', type: 'mcq', prompt: 'Quel roi unifie la Géorgie en 1008 ?', options: ['Bagrat III', 'David IV', 'Georges V', 'Tamerlan'], answer: 0 },
    { id: 'dynastie', type: 'mcq', prompt: 'Comment s’appelle la dynastie royale géorgienne ?', options: ['Les Bagrationi', 'Les Romanov', 'Les Capétiens', 'Les Ming'], answer: 0 },
    { id: 'david', type: 'mcq', prompt: 'Quel surnom porte le roi David IV ?', options: ['le Bâtisseur', 'le Terrible', 'le Sage', 'le Boiteux'], answer: 0 },
    { id: 'didgori', type: 'mcq', prompt: 'Contre qui David IV remporte-t-il la bataille de Didgori ?', options: ['Les Seldjoukides', 'Les Mongols', 'Les Byzantins', 'Les Romains'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle ville devient capitale en 1122 ?', options: ['Tbilissi', 'Erevan', 'Bakou', 'Istanbul'], answer: 0 },
    { id: 'tamar', type: 'mcq', prompt: 'Quel titre porte Tamar ?', options: ['Roi (mepe)', 'Impératrice', 'Sultane', 'Pharaonne'], answer: 0 },
    { id: 'trebizonde', type: 'tf', prompt: 'Tamar aide à fonder l’empire de Trébizonde en 1204.', answer: true },
    { id: 'poeme', type: 'mcq', prompt: 'Qui écrit « Le Chevalier à la peau de tigre » ?', options: ['Chota Roustaveli', 'Homère', 'Ferdowsi', 'Dante'], answer: 0 },
    { id: 'gelati', type: 'mcq', prompt: 'Quel monastère David IV fonde-t-il en 1106 ?', options: ['Gelati', 'Le Mont-Saint-Michel', 'Le mont Athos', 'Cluny'], answer: 0 },
    { id: 'tamerlan', type: 'mcq', prompt: 'Quel conquérant ravage la Géorgie de 1386 à 1403 ?', options: ['Tamerlan', 'Gengis Khan', 'Attila', 'Napoléon'], answer: 0 },
    { id: 'partage', type: 'mcq', prompt: 'En combien de royaumes la Géorgie se divise-t-elle en 1490 ?', options: ['Trois', 'Deux', 'Dix', 'Cinq'], answer: 0 },
    { id: 'kvevri', type: 'mcq', prompt: 'Que sont les kvevri ?', options: ['Des jarres enterrées pour le vin', 'Des épées', 'Des églises', 'Des chevaux'], answer: 0 },
    { id: 'alphabet', type: 'tf', prompt: 'Le géorgien s’écrit avec l’alphabet latin.', answer: false, explanation: 'Il a son propre alphabet.' },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Unification par Bagrat III', 'Victoire de Didgori', 'Règne de Tamar', 'Invasions de Tamerlan'] },
  ],

  recap: [
    '1008 : Bagrat III unit le royaume chrétien de Géorgie',
    'David IV le Bâtisseur bat les Seldjoukides (Didgori, 1121)',
    'L’âge d’or de Tamar et le poème de Roustaveli',
    'Mongols puis Tamerlan affaiblissent le royaume, divisé en 1490',
  ],
}

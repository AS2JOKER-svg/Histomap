/** Chapitre rédigé : Nabatéens (vers 312 av. J.-C. – 106). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'caravaniers',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Les maîtres du désert',
      body:
        "Les Nabatéens sont des Arabes nomades qui contrôlent les pistes du désert entre l'Arabie du Sud et la Méditerranée. Ils guident et protègent les caravanes d'encens et d'épices, et prélèvent des taxes sur leur passage.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le royaume nabatéen',
      years: [-200, -1, 100],
      caption: 'Du sud de la Syrie au nord-ouest de l’Arabie, le royaume contrôle les routes caravanières.',
    },
    {
      id: 'eau',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Les maîtres de l’eau',
      body:
        "Dans le désert, les Nabatéens creusent des citernes secrètes qu'ils sont seuls à connaître. À Pétra, des barrages et des canalisations en terre cuite amènent l'eau des sources jusqu'au cœur de la ville. Leurs ennemis, eux, meurent de soif.",
    },
    {
      id: 'antigone',
      tier: 1,
      type: 'war',
      nom: 'Expéditions d’Antigone contre les Nabatéens',
      annee: -312,
      adversaires: ['Royaume d’Antigone le Borgne'],
      allies: ['Nabatéens'],
      vainqueur: 'Nabatéens',
      consequences:
        "Un successeur d'Alexandre le Grand envoie deux armées contre les Nabatéens. Ils écrasent la première et négocient avec la seconde : c'est leur première apparition dans l'histoire.",
    },
    {
      id: 'petra',
      tier: 1,
      type: 'text',
      kicker: 'Merveille',
      title: 'Pétra, la cité rose',
      body:
        "La capitale des Nabatéens est taillée dans les falaises de grès rose du sud de la Jordanie. On y entre par le Siq, un étroit défilé de plus d'un kilomètre, qui débouche sur le Khazneh, une façade de près de 40 mètres de haut.",
      highlight: { value: '≈ 40 m', label: 'de haut pour la façade du Khazneh' },
    },
    {
      id: 'aretas',
      tier: 1,
      type: 'person',
      nom: 'Arétas IV',
      role: 'Roi des Nabatéens',
      dates: 'règne 9 av. J.-C. – 40 apr. J.-C.',
      description:
        "Son titre officiel est « celui qui aime son peuple ». Sous son long règne, Pétra se couvre de monuments et le royaume s'étend jusqu'à Hégra, dans l'actuelle Arabie saoudite.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Quatre siècles de Nabatéens',
      items: [
        { year: -312, label: 'Victoire sur Antigone le Borgne' },
        { year: -168, label: 'Premier roi connu' },
        { year: -85, label: 'Prise de Damas' },
        { year: -9, label: 'Avènement d’Arétas IV' },
        { year: 106, label: 'Annexion par Rome' },
      ],
    },
    {
      id: 'annexion',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'La province d’Arabie',
      body:
        "En 106, à la mort du dernier roi, l'empereur Trajan annexe le royaume, sans grand combat semble-t-il. Il devient la province romaine d'Arabie. Pétra reste prospère pendant encore plusieurs siècles.",
    },
    {
      id: 'alphabet',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Les ancêtres de l’écriture arabe',
      body:
        "Les Nabatéens écrivent en araméen avec un alphabet aux lettres de plus en plus arrondies et liées. C'est de cette écriture que descend directement l'alphabet arabe.",
    },

    // ── Niveau 2 ──
    {
      id: 'dieux',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Des dieux en pierre',
      body:
        "Le dieu principal des Nabatéens est Dusharê, « celui de la montagne », et la déesse al-Uzza est très vénérée. Ils représentent souvent leurs dieux par de simples pierres dressées, les bétyles.",
    },
    {
      id: 'roi',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Un roi proche de son peuple',
      body:
        "Selon le géographe grec Strabon, le roi de Pétra vit simplement, partage les banquets de ses sujets et doit parfois rendre des comptes devant une assemblée. Les reines figurent sur les monnaies à côté des rois.",
    },
    {
      id: 'hegra',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Hégra, l’autre cité',
      body:
        "Dans le nord-ouest de l'Arabie saoudite, Hégra compte plus d'une centaine de tombeaux nabatéens taillés dans la roche. C'est le premier site saoudien inscrit au patrimoine mondial, en 2008.",
    },
    {
      id: 'burckhardt',
      tier: 2,
      type: 'person',
      nom: 'Jean Louis Burckhardt',
      role: 'Explorateur suisse',
      dates: '1784 – 1817',
      description:
        "Déguisé en voyageur musulman, il convainc un guide de le mener à Pétra en 1812. Il est le premier Européen des Temps modernes à décrire la cité, oubliée en Europe depuis le Moyen Âge.",
    },
    {
      id: 'herode',
      tier: 2,
      type: 'war',
      nom: 'Guerre d’Arétas IV contre Hérode Antipas',
      annee: 36,
      adversaires: ['Hérode Antipas (Galilée)'],
      allies: ['Nabatéens'],
      vainqueur: 'Nabatéens',
      consequences: "Arétas venge sa fille, répudiée par Hérode Antipas, et bat son armée. Une intervention romaine contre lui est annulée à la mort de l'empereur Tibère.",
    },
  ],

  quiz: [
    { id: 'peuple', type: 'mcq', prompt: 'Qui sont les Nabatéens ?', options: ['Des Arabes caravaniers', 'Des marins grecs', 'Des soldats romains', 'Des paysans égyptiens'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale des Nabatéens ?', options: ['Pétra', 'Jérusalem', 'Damas', 'Marib'], answer: 0 },
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve Pétra ?', options: ['La Jordanie', 'L’Égypte', 'Le Liban', 'L’Iran'], answer: 0 },
    { id: 'roche', type: 'mcq', prompt: 'Dans quelle roche Pétra est-elle taillée ?', options: ['Le grès rose', 'Le marbre blanc', 'Le granit noir', 'La craie'], answer: 0 },
    { id: 'siq', type: 'mcq', prompt: 'Comment s’appelle l’étroit défilé qui mène à Pétra ?', options: ['Le Siq', 'Le Khazneh', 'Le Nil', 'Le Bosphore'], answer: 0 },
    { id: 'richesse', type: 'mcq', prompt: 'D’où vient la richesse des Nabatéens ?', options: ['Des taxes sur les caravanes', 'Des mines d’or', 'De la pêche', 'Du pétrole'], answer: 0 },
    { id: 'eau', type: 'tf', prompt: 'Les Nabatéens savent stocker l’eau dans le désert grâce à des citernes.', answer: true },
    { id: 'antigone', type: 'mcq', prompt: 'Quel successeur d’Alexandre échoue contre les Nabatéens en 312 av. J.-C. ?', options: ['Antigone le Borgne', 'Ptolémée', 'Séleucos', 'Hannibal'], answer: 0 },
    { id: 'aretas', type: 'mcq', prompt: 'Sous quel roi Pétra atteint-elle son apogée ?', options: ['Arétas IV', 'Hérode', 'Trajan', 'Cyrus'], answer: 0 },
    { id: 'titre', type: 'mcq', prompt: 'Quel est le titre officiel d’Arétas IV ?', options: ['Celui qui aime son peuple', 'Le roi des rois', 'Le fils du Ciel', 'Le fléau de Dieu'], answer: 0 },
    { id: 'annexion', type: 'mcq', prompt: 'Quel empereur annexe le royaume nabatéen en 106 ?', options: ['Trajan', 'Auguste', 'Néron', 'Hadrien'], answer: 0 },
    { id: 'province', type: 'mcq', prompt: 'Quelle province romaine remplace le royaume nabatéen ?', options: ['L’Arabie', 'La Judée', 'L’Égypte', 'La Syrie'], answer: 0 },
    { id: 'alphabet', type: 'mcq', prompt: 'Quel alphabet descend de l’écriture des Nabatéens ?', options: ['L’alphabet arabe', 'L’alphabet grec', 'L’alphabet latin', 'Le cyrillique'], answer: 0 },
    { id: 'hegra', type: 'mcq', prompt: 'Dans quel pays se trouve la cité nabatéenne de Hégra ?', options: ['L’Arabie saoudite', 'La Turquie', 'Le Maroc', 'L’Inde'], answer: 0 },
    { id: 'burckhardt', type: 'mcq', prompt: 'En quelle année Jean Louis Burckhardt révèle-t-il Pétra aux Européens ?', options: ['1812', '1492', '1066', '1969'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Victoire sur Antigone le Borgne', 'Premier roi connu', 'Avènement d’Arétas IV', 'Annexion par Rome'] },
  ],

  recap: [
    'Arabes caravaniers, maîtres des pistes de la route de l’encens',
    'Experts de l’eau : citernes, barrages et canalisations',
    'Pétra, taillée dans le grès rose ; apogée sous Arétas IV',
    '106 : annexion par Trajan ; leur écriture donne l’alphabet arabe',
  ],
}

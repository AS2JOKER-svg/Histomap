/** Chapitre rédigé : Algérie (1830 – 2020). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'prise',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'La prise d’Alger',
      body:
        "En 1830, l'armée française débarque et prend Alger, alors sous la souveraineté de l'Empire ottoman. C'est le début d'une conquête longue et violente.",
      highlight: { value: '1830', label: 'prise d’Alger' },
    },
    {
      id: 'abd-el-kader',
      tier: 1,
      type: 'person',
      nom: 'Abd el-Kader',
      role: 'Émir',
      dates: '1808 – 1883',
      description:
        "Proclamé émir en 1832, il organise un État et mène pendant quinze ans la résistance à la conquête française. Il se rend en 1847.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'L’Algérie',
      years: [1880, 1960],
      caption: 'Comparez : la colonisation s’étend vers le sud ; l’Algérie indépendante inclut une immense partie du Sahara.',
    },
    {
      id: 'colonie',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Une colonie de peuplement',
      body:
        "Des colons européens s'installent sur une grande partie des meilleures terres. Vers 1954, environ un million d'Européens vivent en Algérie, aux côtés d'environ 8,5 millions d'Algériens musulmans, qui n'ont pas les mêmes droits.",
    },
    {
      id: 'setif',
      tier: 1,
      type: 'text',
      kicker: 'Histoire',
      title: 'Sétif et Guelma',
      body:
        "Le 8 mai 1945, des manifestations nationalistes tournent à l'émeute et une centaine d'Européens sont tués. La répression fait plusieurs milliers de morts algériens, un nombre toujours débattu.",
    },
    {
      id: 'guerre',
      tier: 1,
      type: 'war',
      nom: 'Guerre d’Algérie',
      annee: 1954,
      adversaires: ['France'],
      allies: ['Front de libération nationale (FLN) et son armée, l’ALN'],
      vainqueur: 'Indépendance de l’Algérie',
      consequences:
        "Attentats, combats, torture pratiquée par l'armée française : la guerre est très violente. Après les accords d'Évian (mars 1962), l'Algérie devient indépendante le 5 juillet 1962.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'L’Algérie en dates',
      items: [
        { year: 1830, label: 'Prise d’Alger' },
        { year: 1847, label: 'Reddition d’Abd el-Kader' },
        { year: 1945, label: 'Sétif et Guelma' },
        { year: 1954, label: 'Début de la guerre d’Algérie' },
        { year: 1962, label: 'Indépendance' },
        { year: 2019, label: 'Hirak' },
      ],
    },
    {
      id: 'depart',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Pieds-noirs et harkis',
      body:
        "En 1962, près d'un million de pieds-noirs, les Européens d'Algérie, partent pour la France. Des milliers, voire des dizaines de milliers selon les estimations, de harkis, Algériens ayant servi dans l'armée française, sont tués ; d'autres se réfugient en France.",
    },
    {
      id: 'independante',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'L’Algérie indépendante',
      body:
        "Le FLN gouverne en parti unique jusqu'en 1989. Dans les années 1990, une guerre civile entre l'armée et des groupes islamistes armés fait entre 100 000 et 200 000 morts selon les estimations.",
    },

    // ── Niveau 2 ──
    {
      id: 'morts',
      tier: 2,
      type: 'text',
      kicker: 'Mémoire',
      title: 'Combien de morts ?',
      body:
        "Les historiens estiment que la guerre a tué entre 250 000 et 400 000 Algériens ; l'Algérie retient officiellement le chiffre de 1,5 million. Environ 25 000 soldats français sont morts.",
    },
    {
      id: 'cremieux',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Citoyens et sujets',
      body:
        "En 1870, le décret Crémieux fait des Juifs d'Algérie des citoyens français. Les Algériens musulmans, eux, restent des « sujets » soumis au code de l'indigénat jusqu'aux années 1940.",
    },
    {
      id: 'nucleaire',
      tier: 2,
      type: 'text',
      kicker: 'Sciences',
      title: 'Pétrole et essais nucléaires',
      body:
        "En 1956, d'importants gisements de pétrole et de gaz sont découverts dans le Sahara. De 1960 à 1966, la France y réalise 17 essais nucléaires.",
    },
    {
      id: 'hirak',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Le Hirak',
      body:
        "En 2019, chaque vendredi, des manifestations pacifiques rassemblent des foules immenses. Elles poussent le président Bouteflika, au pouvoir depuis 1999, à démissionner.",
    },
    {
      id: 'damas',
      tier: 2,
      type: 'text',
      kicker: 'Récit',
      title: 'Abd el-Kader à Damas',
      body:
        "Libéré en 1852, Abd el-Kader s'installe à Damas. En 1860, il y protège des milliers de chrétiens menacés par des massacres.",
    },
  ],

  quiz: [
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale de l’Algérie ?', options: ['Alger', 'Oran', 'Constantine', 'Tunis'], answer: 0 },
    { id: 'conquete', type: 'mcq', prompt: 'Quel pays prend Alger en 1830 ?', options: ['La France', 'L’Espagne', 'Le Royaume-Uni', 'L’Italie'], answer: 0 },
    { id: 'ottoman', type: 'tf', prompt: 'En 1830, Alger est sous la souveraineté de l’Empire ottoman.', answer: true },
    { id: 'emir', type: 'mcq', prompt: 'Quel émir mène la résistance à la conquête française ?', options: ['Abd el-Kader', 'Messali Hadj', 'Ben Bella', 'Saladin'], answer: 0 },
    { id: 'reddition', type: 'mcq', prompt: 'En quelle année Abd el-Kader se rend-il ?', options: ['1847', '1830', '1871', '1954'], answer: 0 },
    { id: 'peuplement', type: 'mcq', prompt: 'Combien d’Européens vivent environ en Algérie vers 1954 ?', options: ['Environ un million', 'Environ 10 000', 'Environ 10 millions', 'Environ 100 000'], answer: 0 },
    { id: 'setif', type: 'mcq', prompt: 'Dans quelles villes des émeutes et une répression sanglante ont-elles lieu en mai 1945 ?', options: ['Sétif et Guelma', 'Alger et Oran', 'Tlemcen et Annaba', 'Biskra et Tamanrasset'], answer: 0 },
    { id: 'fln', type: 'mcq', prompt: 'Quel mouvement déclenche la guerre d’indépendance en 1954 ?', options: ['Le FLN', 'Le FIS', 'L’OAS', 'Le Hirak'], answer: 0 },
    { id: 'evian', type: 'mcq', prompt: 'Quels accords mettent fin à la guerre d’Algérie en 1962 ?', options: ['Les accords d’Évian', 'Les accords de Camp David', 'Le traité de Versailles', 'Les accords d’Oslo'], answer: 0 },
    { id: 'independance', type: 'mcq', prompt: 'Quel jour l’Algérie devient-elle indépendante ?', options: ['Le 5 juillet 1962', 'Le 1er novembre 1954', 'Le 14 juillet 1830', 'Le 8 mai 1945'], answer: 0 },
    { id: 'pieds-noirs', type: 'mcq', prompt: 'Comment appelle-t-on les Européens d’Algérie ?', options: ['Les pieds-noirs', 'Les harkis', 'Les colons du Nord', 'Les Kabyles'], answer: 0 },
    { id: 'harkis', type: 'mcq', prompt: 'Qui sont les harkis ?', options: ['Des Algériens ayant servi dans l’armée française', 'Des soldats du FLN', 'Des colons espagnols', 'Des soldats ottomans'], answer: 0 },
    { id: 'parti', type: 'tf', prompt: 'Après l’indépendance, le FLN gouverne en parti unique jusqu’en 1989.', answer: true },
    { id: 'annees90', type: 'mcq', prompt: 'Qui s’affrontent dans la guerre civile des années 1990 ?', options: ['L’armée et des groupes islamistes armés', 'L’Algérie et le Maroc', 'La France et le FLN', 'Les Kabyles et les Touaregs'], answer: 0 },
    { id: 'superficie', type: 'mcq', prompt: 'Quelle particularité a l’Algérie en Afrique ?', options: ['C’est le plus grand pays par sa superficie', 'C’est le pays le plus peuplé', 'C’est le plus petit pays', 'C’est le seul pays sans désert'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Prise d’Alger', 'Reddition d’Abd el-Kader', 'Début de la guerre d’Algérie', 'Indépendance'] },
  ],

  recap: [
    '1830 : prise d’Alger ; Abd el-Kader résiste jusqu’en 1847',
    'Une colonie de peuplement où Européens et Algériens musulmans n’ont pas les mêmes droits',
    'Guerre d’Algérie (1954-1962) ; indépendance le 5 juillet 1962',
    'Parti unique, guerre civile des années 1990, Hirak de 2019',
  ],
}

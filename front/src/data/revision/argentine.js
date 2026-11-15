/** Chapitre rédigé : Argentine (1816 – 2020). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'independance',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'L’indépendance',
      body:
        "En mai 1810, Buenos Aires renvoie le vice-roi espagnol. Le 9 juillet 1816, à Tucumán, les Provinces-Unies du Río de la Plata proclament leur indépendance.",
      highlight: { value: '1816', label: 'indépendance' },
    },
    {
      id: 'san-martin',
      tier: 1,
      type: 'person',
      nom: 'José de San Martín',
      role: 'Libérateur',
      dates: '1778 – 1850',
      description:
        "En 1817, il franchit les Andes avec son armée et libère le Chili, puis le Pérou. Il est le héros national de l'Argentine.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'L’Argentine',
      years: [1878, 1960],
      caption: 'Comparez : par la « conquête du désert », l’Argentine prend le contrôle de la Pampa et de la Patagonie.',
    },
    {
      id: 'desert',
      tier: 1,
      type: 'war',
      nom: 'Conquête du désert',
      annee: 1878,
      adversaires: ['Peuples autochtones de la Pampa et de la Patagonie'],
      allies: ['Argentine'],
      vainqueur: 'Argentine',
      consequences:
        "L'armée du général Roca soumet le Sud. Des milliers d'autochtones sont tués ou capturés, et leurs terres sont distribuées à de grands propriétaires.",
    },
    {
      id: 'age-or',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'L’âge d’or',
      body:
        "De 1880 à 1930, la viande et les céréales de la Pampa, exportées vers l'Europe, font de l'Argentine l'un des pays les plus riches du monde. Des millions d'Italiens et d'Espagnols viennent s'y installer.",
    },
    {
      id: 'peron',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Perón et Evita',
      body:
        "Élu en 1946, Juan Perón mène avec sa femme Eva, « Evita », une politique sociale très populaire, mais autoritaire. Il est renversé par l'armée en 1955.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'L’Argentine en dates',
      items: [
        { year: 1816, label: 'Indépendance' },
        { year: 1853, label: 'Constitution' },
        { year: 1946, label: 'Perón président' },
        { year: 1976, label: 'Dictature militaire' },
        { year: 1982, label: 'Guerre des Malouines' },
        { year: 1983, label: 'Retour de la démocratie' },
      ],
    },
    {
      id: 'dictature',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'La dictature et les disparus',
      body:
        "De 1976 à 1983, une junte militaire fait disparaître des milliers d'opposants : près de 9 000 cas recensés par une commission officielle, environ 30 000 selon les associations de défense des droits humains.",
    },
    {
      id: 'malouines',
      tier: 1,
      type: 'war',
      nom: 'Guerre des Malouines',
      annee: 1982,
      adversaires: ['Royaume-Uni'],
      allies: ['Argentine'],
      vainqueur: 'Royaume-Uni',
      consequences:
        "La junte envahit les îles Malouines, britanniques depuis 1833. Les Britanniques les reprennent ; la défaite entraîne la chute de la dictature et le retour de la démocratie en 1983.",
    },

    // ── Niveau 2 ──
    {
      id: 'meres',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Les Mères de la place de Mai',
      body:
        "Pendant la dictature, des mères de disparus manifestent chaque jeudi devant le palais présidentiel, à Buenos Aires, pour réclamer des nouvelles de leurs enfants.",
    },
    {
      id: 'tango',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'Le tango',
      body:
        "Né à la fin du XIXe siècle dans les quartiers populaires de Buenos Aires et de Montevideo, le tango est dansé dans le monde entier.",
    },
    {
      id: 'empreintes',
      tier: 2,
      type: 'text',
      kicker: 'Sciences',
      title: 'Les empreintes digitales',
      body:
        "En 1891, le policier argentin Juan Vucetich met au point une méthode de classement des empreintes digitales, ensuite utilisée dans de nombreux pays.",
    },
    {
      id: 'pape',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Un pape argentin',
      body:
        "En 2013, l'archevêque de Buenos Aires, Jorge Mario Bergoglio, est élu pape sous le nom de François : c'est le premier pape venu d'Amérique.",
    },
    {
      id: 'borges',
      tier: 2,
      type: 'person',
      nom: 'Jorge Luis Borges',
      role: 'Écrivain',
      dates: '1899 – 1986',
      description: "Auteur de nouvelles fantastiques pleines de labyrinthes et de bibliothèques infinies, il est l'un des grands écrivains du XXe siècle.",
    },
  ],

  quiz: [
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale de l’Argentine ?', options: ['Buenos Aires', 'Montevideo', 'Santiago', 'Córdoba'], answer: 0 },
    { id: 'independance', type: 'mcq', prompt: 'En quelle année l’Argentine proclame-t-elle son indépendance ?', options: ['1816', '1810', '1853', '1946'], answer: 0 },
    { id: 'espagne', type: 'mcq', prompt: 'De quel pays l’Argentine devient-elle indépendante ?', options: ['L’Espagne', 'Le Portugal', 'La France', 'Le Royaume-Uni'], answer: 0 },
    { id: 'san-martin', type: 'mcq', prompt: 'Quel général franchit les Andes en 1817 ?', options: ['José de San Martín', 'Simón Bolívar', 'Juan Perón', 'Julio Roca'], answer: 0 },
    { id: 'desert', type: 'mcq', prompt: 'Qui la « conquête du désert » vise-t-elle ?', options: ['Les peuples autochtones de la Pampa et de la Patagonie', 'Les Espagnols', 'Les Brésiliens', 'Les Britanniques'], answer: 0 },
    { id: 'immigrants', type: 'mcq', prompt: 'D’où viennent surtout les immigrants arrivés entre 1880 et 1930 ?', options: ['D’Italie et d’Espagne', 'De Chine et du Japon', 'D’Afrique', 'Des États-Unis'], answer: 0 },
    { id: 'pampa', type: 'mcq', prompt: 'Qu’exporte la Pampa vers l’Europe ?', options: ['De la viande et des céréales', 'Du pétrole', 'Du café', 'De l’or'], answer: 0 },
    { id: 'evita', type: 'mcq', prompt: 'Quel est le surnom d’Eva Perón ?', options: ['Evita', 'La Pasionaria', 'La Madre', 'Mafalda'], answer: 0 },
    { id: 'coups', type: 'tf', prompt: 'De 1930 à 1976, l’Argentine connaît de nombreux coups d’État militaires.', answer: true },
    { id: 'disparus', type: 'mcq', prompt: 'Comment appelle-t-on les opposants enlevés et tués par la dictature de 1976-1983 ?', options: ['Les disparus', 'Les exilés', 'Les réfugiés', 'Les rebelles'], answer: 0 },
    { id: 'meres', type: 'mcq', prompt: 'Qui manifeste chaque jeudi pour retrouver les disparus ?', options: ['Les Mères de la place de Mai', 'Les étudiants de Buenos Aires', 'Les soldats', 'Les évêques'], answer: 0 },
    { id: 'malouines', type: 'mcq', prompt: 'Contre quel pays l’Argentine perd-elle la guerre des Malouines en 1982 ?', options: ['Le Royaume-Uni', 'Le Chili', 'Le Brésil', 'Les États-Unis'], answer: 0 },
    { id: 'democratie', type: 'mcq', prompt: 'En quelle année la démocratie revient-elle en Argentine ?', options: ['1983', '1955', '1976', '2001'], answer: 0 },
    { id: 'tango', type: 'mcq', prompt: 'Quelle danse est née à Buenos Aires et à Montevideo ?', options: ['Le tango', 'La salsa', 'La samba', 'Le flamenco'], answer: 0 },
    { id: 'pape', type: 'mcq', prompt: 'Quel pape est argentin ?', options: ['François', 'Jean-Paul II', 'Benoît XVI', 'Jean XXIII'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Indépendance', 'Constitution', 'Dictature militaire', 'Guerre des Malouines'] },
  ],

  recap: [
    '1816 : indépendance ; San Martín libère le Chili et le Pérou',
    'Conquête du désert contre les autochtones ; âge d’or agricole et immigration (1880-1930)',
    'Perón et Evita (1946-1955) ; coups d’État militaires',
    'Dictature de 1976-1983 et ses disparus ; Malouines (1982) ; démocratie en 1983',
  ],
}

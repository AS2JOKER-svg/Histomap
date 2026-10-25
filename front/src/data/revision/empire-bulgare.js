/** Chapitre rédigé : Empire bulgare (681 – 1396). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'fondation',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Les Bulgares au sud du Danube',
      body:
        "En 681, les Bulgares, un peuple venu des steppes, s'installent au sud du Danube après avoir battu les Byzantins. Ils s'unissent aux Slaves de la région et adoptent peu à peu leur langue.",
      highlight: { value: '681', label: 'fondation de l’État bulgare' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'L’Empire bulgare',
      years: [900, 1200],
      caption: 'Comparez : la Bulgarie domine une grande partie des Balkans, entre le Danube et l’Empire byzantin.',
    },
    {
      id: 'kroum',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Pliska',
      annee: 811,
      adversaires: ['Empire byzantin (Nicéphore Ier)'],
      allies: ['Bulgares (khan Kroum)'],
      vainqueur: 'Bulgares (Kroum)',
      consequences:
        "L'empereur byzantin Nicéphore Ier est tué ; selon les chroniques, le khan Kroum fait de son crâne une coupe. La Bulgarie devient une grande puissance.",
    },
    {
      id: 'boris',
      tier: 1,
      type: 'person',
      nom: 'Boris Ier',
      role: 'Prince des Bulgares',
      dates: 'règne 852 – 889',
      description:
        "En 864 ou 865, il se fait baptiser et impose le christianisme orthodoxe, malgré la révolte d'une partie des nobles. Il accueille les disciples de Cyrille et Méthode.",
    },
    {
      id: 'cyrillique',
      tier: 1,
      type: 'text',
      kicker: 'Écriture',
      title: 'La naissance du cyrillique',
      body:
        "Dans les écoles de Preslav et d'Ohrid, des lettrés traduisent les livres religieux en slave. L'alphabet cyrillique y est mis au point ; il sert aujourd'hui à écrire le bulgare, le russe ou le serbe.",
    },
    {
      id: 'simeon',
      tier: 1,
      type: 'text',
      kicker: 'Apogée',
      title: 'Siméon le Grand',
      body:
        "Sous Siméon Ier (893-927), qui prend le titre de tsar, la Bulgarie domine les Balkans et menace Constantinople. C'est l'âge d'or de la culture bulgare.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'L’Empire bulgare en dates',
      items: [
        { year: 681, label: 'Fondation' },
        { year: 864, label: 'Baptême de Boris Ier' },
        { year: 1018, label: 'Conquête byzantine' },
        { year: 1185, label: 'Second Empire bulgare' },
        { year: 1393, label: 'Chute de Tarnovo' },
      ],
    },
    {
      id: 'basile',
      tier: 1,
      type: 'text',
      kicker: 'Guerres',
      title: 'Le « Tueur de Bulgares »',
      body:
        "L'empereur byzantin Basile II écrase l'armée bulgare en 1014 et, selon les chroniques, fait aveugler des milliers de prisonniers. En 1018, la Bulgarie devient une province byzantine.",
    },
    {
      id: 'second',
      tier: 1,
      type: 'text',
      kicker: 'Renaissance',
      title: 'Le second Empire bulgare',
      body:
        "En 1185, une révolte fonde un second Empire autour de Tarnovo. Il est conquis par les Ottomans entre 1393 et 1396 ; la Bulgarie reste ottomane pendant près de cinq siècles.",
    },

    // ── Niveau 2 ──
    {
      id: 'kaloyan',
      tier: 2,
      type: 'war',
      nom: 'Bataille d’Andrinople (1205)',
      annee: 1205,
      adversaires: ['Empire latin de Constantinople (Baudouin Ier)'],
      allies: ['Bulgares (tsar Kaloyan)', 'Coumans'],
      vainqueur: 'Bulgares (Kaloyan)',
      consequences: "L'empereur latin Baudouin, installé à Constantinople par la quatrième croisade, est capturé et meurt en captivité.",
    },
    {
      id: 'madara',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'Le cavalier de Madara',
      body:
        "Vers le VIIIe siècle, un grand relief est taillé dans une falaise : il montre un cavalier, un chien et un lion. Il est inscrit au patrimoine mondial de l'UNESCO.",
    },
    {
      id: 'rila',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Le monastère de Rila',
      body:
        "Fondé au Xe siècle dans les montagnes, le monastère de Rila devient un grand centre religieux et culturel. Il est lui aussi inscrit au patrimoine mondial.",
    },
    {
      id: 'tangra',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Avant le christianisme',
      body:
        "Les premiers Bulgares honorent Tangra, dieu du ciel des peuples des steppes. Le baptême de Boris Ier met fin à ce culte officiel.",
    },
    {
      id: 'fete',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'La fête de l’alphabet',
      body:
        "Chaque 24 mai, la Bulgarie fête l'alphabet slave, la culture et les saints Cyrille et Méthode.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Quel pays actuel correspond au cœur de l’Empire bulgare ?', options: ['La Bulgarie', 'La Pologne', 'L’Italie', 'L’Espagne'], answer: 0 },
    { id: 'origine', type: 'mcq', prompt: 'D’où viennent les premiers Bulgares ?', options: ['Des steppes', 'De Scandinavie', 'D’Égypte', 'D’Espagne'], answer: 0 },
    { id: 'fleuve', type: 'mcq', prompt: 'Au sud de quel fleuve les Bulgares s’installent-ils en 681 ?', options: ['Le Danube', 'Le Rhin', 'La Seine', 'Le Nil'], answer: 0 },
    { id: 'slaves', type: 'tf', prompt: 'Les Bulgares adoptent peu à peu la langue des Slaves.', answer: true },
    { id: 'kroum', type: 'mcq', prompt: 'Quel khan bat et tue l’empereur byzantin Nicéphore Ier en 811 ?', options: ['Kroum', 'Attila', 'Bayan', 'Gengis Khan'], answer: 0 },
    { id: 'boris', type: 'mcq', prompt: 'Quel souverain convertit la Bulgarie au christianisme ?', options: ['Boris Ier', 'Siméon Ier', 'Kaloyan', 'Asparoukh'], answer: 0 },
    { id: 'religion', type: 'mcq', prompt: 'Quelle forme de christianisme adopte la Bulgarie ?', options: ['Orthodoxe', 'Catholique', 'Protestante', 'Arienne'], answer: 0 },
    { id: 'alphabet', type: 'mcq', prompt: 'Quel alphabet est mis au point dans la Bulgarie médiévale ?', options: ['Le cyrillique', 'Le latin', 'Le grec', 'L’arabe'], answer: 0 },
    { id: 'tsar', type: 'mcq', prompt: 'Quel souverain bulgare prend le titre de tsar ?', options: ['Siméon Ier', 'Boris Ier', 'Kroum', 'Asparoukh'], answer: 0 },
    { id: 'basile', type: 'mcq', prompt: 'Quel empereur byzantin est surnommé « le Tueur de Bulgares » ?', options: ['Basile II', 'Justinien', 'Constantin', 'Héraclius'], answer: 0 },
    { id: 'tarnovo', type: 'mcq', prompt: 'Quelle est la capitale du second Empire bulgare ?', options: ['Tarnovo', 'Sofia', 'Pliska', 'Constantinople'], answer: 0 },
    { id: 'kaloyan', type: 'mcq', prompt: 'Quel tsar capture l’empereur latin Baudouin en 1205 ?', options: ['Kaloyan', 'Siméon Ier', 'Ivan Asen II', 'Boris Ier'], answer: 0 },
    { id: 'ottomans', type: 'mcq', prompt: 'Qui conquiert la Bulgarie à la fin du XIVe siècle ?', options: ['Les Ottomans', 'Les Mongols', 'Les Hongrois', 'Les Vénitiens'], answer: 0 },
    { id: 'madara', type: 'tf', prompt: 'Le cavalier de Madara est un relief taillé dans une falaise.', answer: true },
    { id: 'fete', type: 'mcq', prompt: 'Que fête la Bulgarie le 24 mai ?', options: ['L’alphabet et la culture slaves', 'Son indépendance', 'La fin de la guerre', 'Le Nouvel An'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Fondation', 'Baptême de Boris Ier', 'Conquête byzantine', 'Chute de Tarnovo'] },
  ],

  recap: [
    '681 : les Bulgares, venus des steppes, fondent un État au sud du Danube',
    'Boris Ier adopte le christianisme orthodoxe ; naissance de l’alphabet cyrillique',
    'Âge d’or sous Siméon Ier ; conquête byzantine (1018), puis second Empire (1185)',
    'Conquête ottomane (1393-1396)',
  ],
}

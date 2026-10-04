/** Chapitre rédigé : Allemagne (1871 – aujourd'hui). */
export default {
  readingTime: 6,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'unification',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: "L'unité par le « fer et le sang »",
      body:
        "Avant 1871, l'Allemagne est divisée en dizaines d'États. La Prusse les rassemble après trois guerres victorieuses : contre le Danemark (1864), l'Autriche (1866) et la France (1870-1871). Le 18 janvier 1871, le roi de Prusse Guillaume Ier est proclamé empereur allemand dans la galerie des Glaces du château de Versailles.",
      highlight: { value: '1871', label: "naissance de l'Empire allemand" },
    },
    {
      id: 'bismarck',
      tier: 1,
      type: 'person',
      nom: 'Otto von Bismarck',
      role: 'Chancelier, le « Chancelier de fer »',
      dates: '1815 – 1898 (chancelier 1871 – 1890)',
      description:
        "Ministre-président de Prusse, il réalise l'unité allemande par la guerre et la diplomatie. Chancelier de l'Empire, il crée dans les années 1880 les premières assurances sociales pour les ouvriers : maladie, accidents du travail, vieillesse.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Des frontières qui bougent',
      years: [1914, 1920, 2000],
      caption:
        "Comparez : en 1920, l'Allemagne vaincue a perdu l'Alsace-Moselle, une partie de l'Est et toutes ses colonies ; l'Allemagne réunifiée d'aujourd'hui est plus petite encore.",
    },
    {
      id: 'weimar',
      tier: 1,
      type: 'text',
      kicker: 'Crise',
      title: 'Défaite et république fragile',
      body:
        "Vaincue en 1918, l'Allemagne devient une république, dite « de Weimar ». Le traité de Versailles (1919) lui impose de lourdes réparations et limite son armée à 100 000 hommes. Beaucoup d'Allemands le vivent comme une humiliation. L'inflation de 1923, puis la crise de 1929 et ses millions de chômeurs affaiblissent le régime.",
      highlight: { value: '1919', label: 'traité de Versailles' },
    },
    {
      id: 'nazisme',
      tier: 1,
      type: 'dates',
      kicker: 'Pouvoir',
      title: 'Le IIIe Reich, une dictature',
      items: [
        { year: 1933, label: 'Hitler est nommé chancelier par le président Hindenburg' },
        { year: 1933, label: 'Fin des libertés, parti unique, premiers camps de concentration' },
        { year: 1935, label: 'Lois de Nuremberg : les Juifs perdent leurs droits de citoyens' },
        { year: 1938, label: "Annexion de l'Autriche ; pogrom de la « Nuit de cristal »" },
      ],
    },
    {
      id: 'guerre',
      tier: 1,
      type: 'war',
      nom: 'Seconde Guerre mondiale',
      annee: 1939,
      adversaires: ['Royaume-Uni', 'France', 'URSS (à partir de 1941)', 'États-Unis (à partir de 1941)'],
      allies: ['Italie', 'Japon'],
      vainqueur: 'Les Alliés',
      consequences:
        "L'invasion de la Pologne, le 1er septembre 1939, déclenche la guerre. Après de grandes victoires, l'Allemagne recule à partir de 1943. Elle capitule sans condition le 8 mai 1945 ; le pays est en ruines et occupé.",
    },
    {
      id: 'shoah',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Crise',
      value: '≈ 6 millions',
      label: "de Juifs d'Europe assassinés par les nazis : la Shoah",
      caption:
        "Ghettos, fusillades de masse, puis centres de mise à mort comme Auschwitz-Birkenau : c'est un génocide, l'extermination planifiée d'un peuple. Les Roms et les personnes handicapées sont aussi victimes de massacres.",
    },
    {
      id: 'division',
      tier: 1,
      type: 'dates',
      kicker: 'Fluctuations',
      title: 'Divisée puis réunifiée',
      items: [
        { year: 1949, label: "Naissance de la RFA (à l'Ouest) et de la RDA communiste (à l'Est)" },
        { year: 1961, label: 'Construction du mur de Berlin' },
        { year: 1989, label: 'Chute du mur, le 9 novembre' },
        { year: 1990, label: 'Réunification, le 3 octobre' },
      ],
    },
    {
      id: 'europe',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: "Une puissance pacifique au cœur de l'Europe",
      body:
        "Grâce au « miracle économique » des années 1950, la RFA se relève très vite. Elle participe à la fondation de la Communauté européenne en 1957. Aujourd'hui, l'Allemagne est la première économie d'Europe. Angela Merkel, première femme chancelière, la dirige de 2005 à 2021.",
      highlight: { value: '2005 – 2021', label: "Angela Merkel chancelière" },
    },

    // ── Niveau 2 ──
    {
      id: 'marx',
      tier: 2,
      type: 'person',
      nom: 'Karl Marx',
      role: 'Philosophe et économiste',
      dates: '1818 – 1883',
      description:
        "Né en Rhénanie, il écrit avec Friedrich Engels le « Manifeste du parti communiste » (1848), puis « Le Capital » (1867). Ses idées inspireront les révolutions communistes du XXe siècle.",
    },
    {
      id: 'sciences',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Un pays de savants et d’ingénieurs',
      body:
        "Carl Benz fait breveter l'une des premières automobiles en 1886. Wilhelm Röntgen découvre les rayons X en 1895 et reçoit le premier prix Nobel de physique (1901). L'industrie chimique allemande (Bayer, BASF) devient la première du monde.",
    },
    {
      id: 'einstein',
      tier: 2,
      type: 'person',
      nom: 'Albert Einstein',
      role: 'Physicien',
      dates: '1879 – 1955',
      description:
        "Ses théories de la relativité (1905 et 1915) changent notre vision de l'espace et du temps. Prix Nobel de physique en 1921, il est juif et quitte l'Allemagne nazie en 1933 pour les États-Unis.",
    },
    {
      id: 'scholl',
      tier: 2,
      type: 'person',
      nom: 'Sophie Scholl',
      role: 'Étudiante, résistante au nazisme',
      dates: '1921 – 1943',
      description:
        "Membre du groupe de la « Rose blanche », elle distribue des tracts contre Hitler à l'université de Munich. Arrêtée en février 1943, elle est condamnée à mort et exécutée à 21 ans.",
    },
    {
      id: 'memoire',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Le devoir de mémoire',
      body:
        "Après 1945, l'Allemagne reconnaît les crimes du nazisme. En 1970, le chancelier Willy Brandt s'agenouille devant le monument aux héros du ghetto de Varsovie. Au centre de Berlin, un grand mémorial aux Juifs assassinés d'Europe est inauguré en 2005.",
    },
  ],

  quiz: [
    { id: 'unification', type: 'mcq', prompt: "En quelle année naît l'Empire allemand ?", options: ['1871', '1848', '1815', '1918'], answer: 0 },
    { id: 'versailles-1871', type: 'mcq', prompt: "Où l'Empire allemand est-il proclamé ?", options: ['Dans la galerie des Glaces de Versailles', 'Au Reichstag de Berlin', 'À la cathédrale de Cologne', 'Au palais de la Hofburg à Vienne'], answer: 0 },
    { id: 'bismarck', type: 'mcq', prompt: 'Quel homme politique surnomme-t-on le « Chancelier de fer » ?', options: ['Otto von Bismarck', 'Guillaume II', 'Konrad Adenauer', 'Willy Brandt'], answer: 0 },
    { id: 'assurances', type: 'tf', prompt: 'Bismarck crée les premières assurances sociales pour les ouvriers.', answer: true },
    { id: 'weimar', type: 'mcq', prompt: 'Comment appelle-t-on la république allemande de 1919 à 1933 ?', options: ['La république de Weimar', 'La république de Bonn', 'La Confédération du Rhin', 'Le IIe Reich'], answer: 0 },
    { id: 'traite', type: 'mcq', prompt: "Quel traité de 1919 impose de lourdes conditions à l'Allemagne vaincue ?", options: ['Le traité de Versailles', 'Le traité de Rome', 'Le traité de Francfort', 'Le traité de Westphalie'], answer: 0 },
    { id: 'hitler', type: 'mcq', prompt: 'En quelle année Hitler devient-il chancelier ?', options: ['1933', '1929', '1939', '1923'], answer: 0 },
    { id: 'coup', type: 'tf', prompt: "Hitler arrive au pouvoir grâce à un coup d'État réussi.", answer: false, explanation: "Il est nommé chancelier légalement par le président Hindenburg en 1933, puis il détruit la démocratie et installe une dictature." },
    { id: 'cristal', type: 'mcq', prompt: 'Comment appelle-t-on le pogrom antisémite de novembre 1938 ?', options: ['La Nuit de cristal', 'La Nuit des longs couteaux', 'La Saint-Barthélemy', 'La Nuit du 4 août'], answer: 0 },
    { id: 'pologne', type: 'mcq', prompt: "L'invasion de quel pays déclenche la Seconde Guerre mondiale en 1939 ?", options: ['La Pologne', 'La France', "L'URSS", 'La Belgique'], answer: 0 },
    { id: 'shoah', type: 'mcq', prompt: "Combien de Juifs d'Europe sont assassinés pendant la Shoah ?", options: ['Environ 6 millions', 'Environ 600 000', 'Environ 1 million', 'Environ 60 millions'], answer: 0 },
    { id: 'auschwitz', type: 'mcq', prompt: 'Quel est le plus grand centre de mise à mort nazi ?', options: ['Auschwitz-Birkenau', 'Nuremberg', 'Weimar', 'Potsdam'], answer: 0 },
    { id: 'rda', type: 'mcq', prompt: 'Entre 1949 et 1990, quelle Allemagne est communiste ?', options: ['La RDA', 'La RFA', 'La république de Weimar', "L'Empire allemand"], answer: 0 },
    { id: 'mur', type: 'mcq', prompt: 'En quelle année le mur de Berlin tombe-t-il ?', options: ['1989', '1961', '1990', '1945'], answer: 0 },
    { id: 'einstein', type: 'mcq', prompt: 'Quelle théorie Albert Einstein a-t-il formulée ?', options: ['La relativité', "L'évolution des espèces", 'La gravitation universelle', 'La radioactivité'], answer: 0 },
    { id: 'marx', type: 'mcq', prompt: 'Quel texte Karl Marx écrit-il avec Engels en 1848 ?', options: ['Le Manifeste du parti communiste', 'Mein Kampf', "L'Origine des espèces", 'Le Contrat social'], answer: 0 },
    { id: 'scholl', type: 'tf', prompt: 'Sophie Scholl est une résistante allemande au nazisme.', answer: true },
    { id: 'merkel', type: 'mcq', prompt: 'Qui est la première femme chancelière d’Allemagne ?', options: ['Angela Merkel', 'Rosa Luxemburg', 'Sophie Scholl', 'Marlene Dietrich'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ["Proclamation de l'Empire allemand", 'Hitler devient chancelier', 'Construction du mur de Berlin', 'Chute du mur de Berlin'] },
  ],

  recap: [
    '1871 : Bismarck unifie l’Allemagne autour de la Prusse',
    'Défaite de 1918, république de Weimar fragile, puis dictature de Hitler (1933)',
    'Seconde Guerre mondiale et Shoah : environ 6 millions de Juifs assassinés',
    'Divisée en RFA et RDA (1949), réunifiée en 1990, moteur de l’Europe',
  ],
}

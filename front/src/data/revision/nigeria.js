/** Chapitre rédigé : Nigeria (1914 – 2020). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'unification',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Une colonie créée en 1914',
      body:
        "Les Britanniques prennent le contrôle de la région à la fin du XIXe siècle. En 1914, le gouverneur Frederick Lugard réunit le nord et le sud en une seule colonie : le Nigeria.",
      highlight: { value: '1914', label: 'naissance du Nigeria' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le Nigeria',
      years: [1960],
      caption: 'Le Nigeria à son indépendance, en 1960 : un immense pays qui va du golfe de Guinée au Sahel.',
    },
    {
      id: 'peuples',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Un pays aux nombreux peuples',
      body:
        "Le Nigeria compte plus de 250 groupes ethniques et plus de 500 langues. Les plus nombreux sont les Haoussas et les Peuls au nord, les Yorubas au sud-ouest et les Igbos au sud-est.",
    },
    {
      id: 'religions',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Un nord musulman, un sud chrétien',
      body:
        "Le nord, héritier du califat de Sokoto, est surtout musulman ; le sud est surtout chrétien. Les religions traditionnelles restent vivantes.",
    },
    {
      id: 'independance',
      tier: 1,
      type: 'text',
      kicker: 'Indépendance',
      title: 'L’indépendance',
      body:
        "Le Nigeria devient indépendant le 1er octobre 1960. Mais dès 1966, deux coups d'État militaires renversent les gouvernements successifs.",
    },
    {
      id: 'biafra',
      tier: 1,
      type: 'war',
      nom: 'Guerre du Biafra',
      annee: 1967,
      adversaires: ['République du Biafra (Odumegwu Ojukwu)'],
      allies: ['Gouvernement fédéral du Nigeria'],
      vainqueur: 'Gouvernement fédéral',
      consequences:
        "Après des massacres d'Igbos dans le nord, le sud-est fait sécession. Le blocus du Biafra provoque une terrible famine ; la guerre fait entre 500 000 et 2 millions de morts selon les estimations.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Le Nigeria en dates',
      items: [
        { year: 1914, label: 'Création de la colonie' },
        { year: 1960, label: 'Indépendance' },
        { year: 1967, label: 'Guerre du Biafra' },
        { year: 1991, label: 'Abuja devient la capitale' },
        { year: 1999, label: 'Retour des civils au pouvoir' },
      ],
    },
    {
      id: 'militaires',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Les militaires au pouvoir',
      body:
        "Les militaires gouvernent la plus grande partie du temps jusqu'en 1999. Depuis, les présidents sont des civils élus ; en 2015, pour la première fois, un président sortant est battu dans les urnes.",
    },
    {
      id: 'petrole',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Le pétrole',
      body:
        "Depuis les années 1970, le pétrole du delta du Niger fournit l'essentiel des exportations. Mais sa production pollue la région et provoque des conflits locaux.",
    },

    // ── Niveau 2 ──
    {
      id: 'achebe',
      tier: 2,
      type: 'person',
      nom: 'Chinua Achebe',
      role: 'Écrivain',
      dates: '1930 – 2013',
      description: "Son roman Le monde s'effondre (1958), qui raconte l'arrivée des colonisateurs dans un village igbo, est l'un des livres africains les plus lus au monde.",
    },
    {
      id: 'fela',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'Fela Kuti et l’afrobeat',
      body:
        "Le musicien Fela Kuti crée l'afrobeat, un mélange de musiques yorubas, de jazz et de funk. Ses chansons critiquent les régimes militaires.",
    },
    {
      id: 'boko-haram',
      tier: 2,
      type: 'text',
      kicker: 'Guerre',
      title: 'Boko Haram',
      body:
        "Depuis 2009, le groupe djihadiste Boko Haram multiplie attentats, massacres et enlèvements dans le nord-est, comme celui de 276 lycéennes à Chibok en 2014.",
    },
    {
      id: 'nollywood',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'Nollywood',
      body:
        "L'industrie du cinéma nigérian, surnommée Nollywood, produit chaque année des centaines de films regardés dans toute l'Afrique.",
    },
    {
      id: 'nom',
      tier: 2,
      type: 'text',
      kicker: 'Mots',
      title: 'D’où vient le nom ?',
      body:
        "Le nom « Nigeria », tiré du fleuve Niger, a été proposé en 1897 par la journaliste britannique Flora Shaw.",
    },
  ],

  quiz: [
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale du Nigeria depuis 1991 ?', options: ['Abuja', 'Lagos', 'Kano', 'Accra'], answer: 0 },
    { id: 'lagos', type: 'mcq', prompt: 'Quelle était la capitale du Nigeria avant 1991 ?', options: ['Lagos', 'Ibadan', 'Kano', 'Enugu'], answer: 0 },
    { id: 'colonisateur', type: 'mcq', prompt: 'Quel pays colonise le Nigeria ?', options: ['Le Royaume-Uni', 'La France', 'Le Portugal', 'L’Allemagne'], answer: 0 },
    { id: 'creation', type: 'mcq', prompt: 'En quelle année le nord et le sud sont-ils réunis en une seule colonie ?', options: ['1914', '1884', '1960', '1945'], answer: 0 },
    { id: 'fleuve', type: 'mcq', prompt: 'De quel fleuve le Nigeria tire-t-il son nom ?', options: ['Le Niger', 'Le Nil', 'Le Congo', 'Le Sénégal'], answer: 0 },
    { id: 'peuple', type: 'tf', prompt: 'Le Nigeria est le pays le plus peuplé d’Afrique.', answer: true },
    { id: 'nord', type: 'mcq', prompt: 'Quelle est la religion majoritaire dans le nord du Nigeria ?', options: ['L’islam', 'Le christianisme', 'Le bouddhisme', 'L’hindouisme'], answer: 0 },
    { id: 'yorubas', type: 'mcq', prompt: 'Quel peuple vit surtout dans le sud-ouest du Nigeria ?', options: ['Les Yorubas', 'Les Zoulous', 'Les Maasaï', 'Les Berbères'], answer: 0 },
    { id: 'independance', type: 'mcq', prompt: 'En quelle année le Nigeria devient-il indépendant ?', options: ['1960', '1914', '1967', '1999'], answer: 0 },
    { id: 'biafra', type: 'mcq', prompt: 'Comment s’appelle la région qui fait sécession en 1967 ?', options: ['Le Biafra', 'Le Katanga', 'Le Darfour', 'Le Sahel'], answer: 0 },
    { id: 'famine', type: 'tf', prompt: 'Pendant la guerre du Biafra, la plupart des victimes meurent de faim.', answer: true },
    { id: 'civils', type: 'mcq', prompt: 'Depuis quelle année des présidents civils gouvernent-ils sans interruption le Nigeria ?', options: ['1999', '1960', '1970', '2015'], answer: 0 },
    { id: 'petrole', type: 'mcq', prompt: 'Quelle ressource fournit l’essentiel des exportations du Nigeria ?', options: ['Le pétrole', 'Le café', 'Le cuivre', 'Le thé'], answer: 0 },
    { id: 'achebe', type: 'mcq', prompt: 'Qui a écrit Le monde s’effondre ?', options: ['Chinua Achebe', 'Wole Soyinka', 'Léopold Sédar Senghor', 'Fela Kuti'], answer: 0 },
    { id: 'boko', type: 'mcq', prompt: 'Quel groupe djihadiste enlève 276 lycéennes à Chibok en 2014 ?', options: ['Boko Haram', 'Al-Shabaab', 'Le GIA', 'Les Talibans'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Création de la colonie', 'Indépendance', 'Guerre du Biafra', 'Retour des civils au pouvoir'] },
  ],

  recap: [
    '1914 : les Britanniques réunissent le nord et le sud en une colonie, le Nigeria',
    'Un pays aux centaines de peuples, musulman au nord et chrétien au sud',
    'Indépendance (1960), coups d’État et guerre du Biafra (1967-1970)',
    'Pétrole, retour des civils (1999), Boko Haram dans le nord-est',
  ],
}

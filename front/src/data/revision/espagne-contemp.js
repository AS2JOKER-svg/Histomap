/** Chapitre rédigé : Espagne contemporaine (1808 – 2020). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'mayo',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Le 2 mai 1808',
      body:
        "Napoléon impose son frère Joseph comme roi d'Espagne. Le 2 mai 1808, Madrid se soulève contre les troupes françaises : c'est le début d'une longue guerre d'indépendance.",
      highlight: { value: '1808', label: 'soulèvement contre Napoléon' },
    },
    {
      id: 'independance',
      tier: 1,
      type: 'war',
      nom: 'Guerre d’indépendance espagnole',
      annee: 1808,
      adversaires: ['Empire français (Napoléon)'],
      allies: ['Espagne', 'Royaume-Uni (Wellington)', 'Portugal'],
      vainqueur: 'Espagne et ses alliés',
      consequences:
        "Des guérillas harcèlent l'armée française ; avec l'aide britannique, les Espagnols chassent les Français en 1813-1814.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'L’Espagne en Europe',
      years: [1815, 2010],
      caption: 'Comparez : en Europe, le territoire de l’Espagne change peu. Ce sont ses colonies qu’elle perd au XIXe siècle.',
    },
    {
      id: 'empire',
      tier: 1,
      type: 'text',
      kicker: 'Empire',
      title: 'La fin de l’empire',
      body:
        "De 1810 à 1825 environ, l'Amérique espagnole devient indépendante. En 1898, la guerre contre les États-Unis fait perdre à l'Espagne Cuba, Porto Rico et les Philippines : c'est le « désastre de 98 ».",
    },
    {
      id: 'republique',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'La Seconde République',
      body:
        "En 1931, le roi Alphonse XIII quitte l'Espagne et la République est proclamée. Elle sépare l'Église et l'État et lance des réformes, mais le pays est très divisé.",
    },
    {
      id: 'guerre-civile',
      tier: 1,
      type: 'war',
      nom: 'Guerre civile espagnole',
      annee: 1936,
      adversaires: ['Camp nationaliste (général Franco), aidé par l’Allemagne et l’Italie'],
      allies: ['Camp républicain, aidé par l’URSS et les Brigades internationales'],
      vainqueur: 'Camp nationaliste (Franco)',
      consequences:
        "Les deux camps commettent des massacres. Le bombardement de Guernica (1937) par l'aviation allemande inspire le tableau de Picasso. En 1939, près d'un demi-million de républicains fuient vers la France.",
    },
    {
      id: 'franco',
      tier: 1,
      type: 'person',
      nom: 'Francisco Franco',
      role: 'Dictateur',
      dates: 'au pouvoir 1939 – 1975',
      description:
        "Vainqueur de la guerre civile, il interdit les partis politiques et réprime durement ses opposants. Il gouverne l'Espagne jusqu'à sa mort, en 1975.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'L’Espagne contemporaine en dates',
      items: [
        { year: 1808, label: 'Soulèvement de Madrid' },
        { year: 1898, label: 'Perte de Cuba et des Philippines' },
        { year: 1931, label: 'Seconde République' },
        { year: 1936, label: 'Début de la guerre civile' },
        { year: 1975, label: 'Mort de Franco' },
        { year: 1986, label: 'Entrée dans la Communauté européenne' },
      ],
    },
    {
      id: 'transition',
      tier: 1,
      type: 'text',
      kicker: 'Démocratie',
      title: 'La transition',
      body:
        "Après la mort de Franco, le roi Juan Carlos Ier accompagne le retour à la démocratie. La Constitution de 1978 fait de l'Espagne une monarchie parlementaire ; elle entre dans la Communauté européenne en 1986.",
    },

    // ── Niveau 2 ──
    {
      id: 'cadix',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'La Constitution de Cadix',
      body:
        "En pleine guerre contre Napoléon, en 1812, des députés réunis à Cadix votent la première constitution espagnole, libérale.",
    },
    {
      id: 'goya',
      tier: 2,
      type: 'person',
      nom: 'Francisco de Goya',
      role: 'Peintre',
      dates: '1746 – 1828',
      description: "Il peint les violences de la guerre contre Napoléon, comme dans Tres de mayo (1814), qui montre l'exécution d'habitants de Madrid.",
    },
    {
      id: 'coup',
      tier: 2,
      type: 'text',
      kicker: 'Démocratie',
      title: 'Le 23 février 1981',
      body:
        "Des gardes civils armés prennent en otage les députés. Le roi Juan Carlos Ier s'oppose à la tentative de coup d'État, qui échoue.",
    },
    {
      id: 'cajal',
      tier: 2,
      type: 'text',
      kicker: 'Sciences',
      title: 'Ramón y Cajal',
      body:
        "Le médecin Santiago Ramón y Cajal montre que le système nerveux est formé de cellules distinctes, les neurones. Il reçoit le prix Nobel en 1906.",
    },
    {
      id: 'guernica',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'Le retour de Guernica',
      body:
        "Picasso ne voulait pas que son tableau Guernica entre en Espagne avant le retour de la démocratie. Il n'y est arrivé qu'en 1981.",
    },
  ],

  quiz: [
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale de l’Espagne ?', options: ['Madrid', 'Barcelone', 'Séville', 'Lisbonne'], answer: 0 },
    { id: 'joseph', type: 'mcq', prompt: 'Qui Napoléon impose-t-il comme roi d’Espagne en 1808 ?', options: ['Son frère Joseph', 'Son fils', 'Le général Murat', 'Ferdinand VII'], answer: 0 },
    { id: 'mayo', type: 'mcq', prompt: 'Quelle ville se soulève contre les Français le 2 mai 1808 ?', options: ['Madrid', 'Barcelone', 'Cadix', 'Bilbao'], answer: 0 },
    { id: 'guerilla', type: 'mcq', prompt: 'Quel mot né pendant la guerre contre Napoléon signifie « petite guerre » ?', options: ['Guérilla', 'Fiesta', 'Junte', 'Corrida'], answer: 0 },
    { id: 'wellington', type: 'mcq', prompt: 'Quel pays aide l’Espagne à chasser les Français ?', options: ['Le Royaume-Uni', 'La Russie', 'L’Italie', 'Les États-Unis'], answer: 0 },
    { id: 'desastre', type: 'mcq', prompt: 'Contre quel pays l’Espagne perd-elle Cuba en 1898 ?', options: ['Les États-Unis', 'La France', 'Le Royaume-Uni', 'Le Mexique'], answer: 0 },
    { id: 'philippines', type: 'tf', prompt: 'En 1898, l’Espagne perd aussi les Philippines.', answer: true },
    { id: 'republique', type: 'mcq', prompt: 'Quel régime est proclamé en 1931 ?', options: ['La Seconde République', 'Une dictature militaire', 'Un empire', 'Une monarchie absolue'], answer: 0 },
    { id: 'franco', type: 'mcq', prompt: 'Quel général remporte la guerre civile ?', options: ['Francisco Franco', 'Primo de Rivera', 'Manuel Azaña', 'Wellington'], answer: 0 },
    { id: 'aide', type: 'mcq', prompt: 'Quels pays aident le camp de Franco pendant la guerre civile ?', options: ['L’Allemagne et l’Italie', 'La France et le Royaume-Uni', 'L’URSS et le Mexique', 'Les États-Unis et le Portugal'], answer: 0 },
    { id: 'guernica', type: 'mcq', prompt: 'Quel peintre réalise Guernica après le bombardement de la ville ?', options: ['Pablo Picasso', 'Salvador Dalí', 'Francisco de Goya', 'Joan Miró'], answer: 0 },
    { id: 'mort', type: 'mcq', prompt: 'En quelle année meurt Franco ?', options: ['1975', '1939', '1953', '1992'], answer: 0 },
    { id: 'roi', type: 'mcq', prompt: 'Quel roi accompagne le retour de la démocratie ?', options: ['Juan Carlos Ier', 'Alphonse XIII', 'Philippe II', 'Ferdinand VII'], answer: 0 },
    { id: 'constitution', type: 'tf', prompt: 'Depuis la Constitution de 1978, l’Espagne est une monarchie parlementaire.', answer: true },
    { id: 'europe', type: 'mcq', prompt: 'En quelle année l’Espagne entre-t-elle dans la Communauté européenne ?', options: ['1986', '1957', '1975', '2002'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Soulèvement de Madrid', 'Perte de Cuba et des Philippines', 'Début de la guerre civile', 'Mort de Franco'] },
  ],

  recap: [
    '1808-1814 : guerre d’indépendance contre Napoléon',
    'Perte de l’Amérique (vers 1825), puis de Cuba et des Philippines (1898)',
    'Seconde République (1931), guerre civile (1936-1939), dictature de Franco (1939-1975)',
    'Transition démocratique : Constitution de 1978, Europe en 1986',
  ],
}

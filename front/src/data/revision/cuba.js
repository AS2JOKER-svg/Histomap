/** Chapitre rédigé : Cuba (1902 – 2020). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'independance',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Une indépendance surveillée',
      body:
        "Après deux guerres contre l'Espagne et l'intervention des États-Unis en 1898, Cuba devient indépendante en 1902. Mais les États-Unis gardent un droit d'intervention et la base de Guantánamo.",
      highlight: { value: '1902', label: 'indépendance' },
    },
    {
      id: 'marti',
      tier: 1,
      type: 'person',
      nom: 'José Martí',
      role: 'Poète et héros national',
      dates: '1853 – 1895',
      description:
        "Écrivain et organisateur de la lutte pour l'indépendance contre l'Espagne, il est tué au combat en 1895. Il est le grand héros national de Cuba.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'L’île de Cuba',
      years: [1914],
      caption: 'La plus grande île des Caraïbes, à moins de 200 km de la Floride.',
    },
    {
      id: 'batista',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Le sucre et Batista',
      body:
        "L'économie dépend du sucre et des capitaux américains. Fulgencio Batista domine la vie politique et, à partir de 1952, gouverne en dictateur.",
    },
    {
      id: 'revolution',
      tier: 1,
      type: 'war',
      nom: 'Révolution cubaine',
      annee: 1953,
      adversaires: ['Régime de Fulgencio Batista'],
      allies: ['Révolutionnaires de Fidel Castro'],
      vainqueur: 'Révolutionnaires',
      consequences:
        "Après des années de guérilla dans la Sierra Maestra, les révolutionnaires l'emportent : Batista s'enfuit le 1er janvier 1959.",
    },
    {
      id: 'castro',
      tier: 1,
      type: 'person',
      nom: 'Fidel Castro',
      role: 'Chef de la révolution',
      dates: 'au pouvoir 1959 – 2008',
      description:
        "Il nationalise les entreprises, rend l'école et la santé gratuites, mais supprime les libertés politiques et s'allie à l'URSS.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Cuba en dates',
      items: [
        { year: 1902, label: 'Indépendance' },
        { year: 1952, label: 'Dictature de Batista' },
        { year: 1959, label: 'Révolution' },
        { year: 1961, label: 'Baie des Cochons' },
        { year: 1962, label: 'Crise des missiles' },
        { year: 1991, label: 'Période spéciale' },
      ],
    },
    {
      id: 'missiles',
      tier: 1,
      type: 'war',
      nom: 'Crise des missiles de Cuba',
      annee: 1962,
      adversaires: ['États-Unis'],
      allies: ['Cuba', 'URSS'],
      vainqueur: 'Compromis',
      consequences:
        "En octobre 1962, l'URSS installe des missiles nucléaires à Cuba. Pendant treize jours, le monde craint une guerre nucléaire ; l'URSS finit par retirer ses missiles.",
    },
    {
      id: 'embargo',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'L’embargo et la crise',
      body:
        "Les États-Unis imposent un embargo à Cuba depuis 1962. Après la disparition de l'URSS, en 1991, l'île traverse une grave crise. Plus d'un million de Cubains ont émigré depuis 1959.",
    },

    // ── Niveau 2 ──
    {
      id: 'cochons',
      tier: 2,
      type: 'text',
      kicker: 'Guerre',
      title: 'La baie des Cochons',
      body:
        "En avril 1961, des exilés cubains entraînés par la CIA débarquent dans la baie des Cochons pour renverser Castro. Ils sont battus en trois jours.",
    },
    {
      id: 'che',
      tier: 2,
      type: 'person',
      nom: 'Ernesto « Che » Guevara',
      role: 'Révolutionnaire',
      dates: '1928 – 1967',
      description: "Médecin argentin, compagnon de Fidel Castro, il part ensuite porter la révolution en Afrique et en Bolivie, où il est tué en 1967.",
    },
    {
      id: 'alphabetisation',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'L’alphabétisation',
      body:
        "En 1961, des milliers de jeunes partent dans les campagnes apprendre à lire aux habitants : en un an, l'analphabétisme recule fortement.",
    },
    {
      id: 'finlay',
      tier: 2,
      type: 'text',
      kicker: 'Sciences',
      title: 'Le moustique de la fièvre jaune',
      body:
        "Dès 1881, le médecin cubain Carlos Finlay propose que la fièvre jaune est transmise par un moustique. Son hypothèse est confirmée en 1900.",
    },
    {
      id: 'musique',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'La musique cubaine',
      body:
        "Son, mambo, cha-cha-cha, salsa : la musique cubaine, née de rythmes africains et espagnols, a fait danser le monde entier.",
    },
  ],

  quiz: [
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale de Cuba ?', options: ['La Havane', 'Santiago de Cuba', 'Port-au-Prince', 'Miami'], answer: 0 },
    { id: 'colonie', type: 'mcq', prompt: 'De quel pays Cuba était-elle une colonie jusqu’en 1898 ?', options: ['L’Espagne', 'La France', 'Le Royaume-Uni', 'Les États-Unis'], answer: 0 },
    { id: 'independance', type: 'mcq', prompt: 'En quelle année Cuba devient-elle indépendante ?', options: ['1902', '1898', '1959', '1868'], answer: 0 },
    { id: 'guantanamo', type: 'mcq', prompt: 'Quelle base les États-Unis gardent-ils à Cuba ?', options: ['Guantánamo', 'Pearl Harbor', 'Diego Garcia', 'Okinawa'], answer: 0 },
    { id: 'marti', type: 'mcq', prompt: 'Quel poète est le héros de l’indépendance cubaine ?', options: ['José Martí', 'Pablo Neruda', 'Simón Bolívar', 'Che Guevara'], answer: 0 },
    { id: 'sucre', type: 'mcq', prompt: 'Quelle est la grande production de Cuba avant la révolution ?', options: ['Le sucre', 'Le café', 'Le pétrole', 'Le cuivre'], answer: 0 },
    { id: 'batista', type: 'mcq', prompt: 'Quel dictateur est renversé le 1er janvier 1959 ?', options: ['Fulgencio Batista', 'Gerardo Machado', 'François Duvalier', 'Augusto Pinochet'], answer: 0 },
    { id: 'castro', type: 'mcq', prompt: 'Qui dirige la révolution cubaine ?', options: ['Fidel Castro', 'Juan Perón', 'Hô Chi Minh', 'Lénine'], answer: 0 },
    { id: 'che', type: 'mcq', prompt: 'De quel pays vient Ernesto « Che » Guevara ?', options: ['L’Argentine', 'Cuba', 'Le Mexique', 'La Bolivie'], answer: 0 },
    { id: 'allie', type: 'mcq', prompt: 'De quel pays Cuba devient-elle l’alliée après la révolution ?', options: ['L’URSS', 'Les États-Unis', 'Le Royaume-Uni', 'Le Japon'], answer: 0 },
    { id: 'cochons', type: 'mcq', prompt: 'Comment s’appelle le débarquement manqué d’exilés cubains en 1961 ?', options: ['La baie des Cochons', 'Le débarquement de Normandie', 'Pearl Harbor', 'La baie des Anges'], answer: 0 },
    { id: 'missiles', type: 'mcq', prompt: 'Quelles armes provoquent la crise de 1962 ?', options: ['Des missiles nucléaires soviétiques', 'Des sous-marins américains', 'Des avions chinois', 'Des chars allemands'], answer: 0 },
    { id: 'embargo', type: 'tf', prompt: 'Les États-Unis imposent un embargo à Cuba depuis 1962.', answer: true },
    { id: 'libertes', type: 'tf', prompt: 'Après la révolution, Cuba devient une démocratie avec plusieurs partis.', answer: false, explanation: 'Le Parti communiste est le seul parti autorisé, et les opposants sont emprisonnés.' },
    { id: 'periode', type: 'mcq', prompt: 'Quel événement plonge Cuba dans une grave crise en 1991 ?', options: ['La disparition de l’URSS', 'Un ouragan', 'La mort de Fidel Castro', 'Une invasion américaine'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Indépendance', 'Révolution', 'Baie des Cochons', 'Crise des missiles'] },
  ],

  recap: [
    '1902 : indépendance sous la surveillance des États-Unis (Guantánamo)',
    'Sucre, capitaux américains et dictature de Batista',
    '1959 : révolution de Fidel Castro et du Che ; alliance avec l’URSS',
    'Baie des Cochons (1961), crise des missiles (1962), embargo, crise après 1991',
  ],
}

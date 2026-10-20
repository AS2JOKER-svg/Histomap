/** Chapitre rédigé : Califat de Sokoto (1804 – 1903). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'usman',
      tier: 1,
      type: 'person',
      nom: 'Usman dan Fodio',
      role: 'Prédicateur et fondateur',
      dates: '1754 – 1817',
      description:
        "Lettré peul, il prêche pendant trente ans en pays haoussa. Il critique les rois, qu'il accuse d'injustice, d'impôts trop lourds et de mal pratiquer l'islam. En 1804, il lance une guerre sainte et prend le titre de « commandeur des croyants ».",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le califat de Sokoto',
      years: [1815, 1900],
      caption: 'Dans le nord du Nigeria actuel, le califat est l’un des plus grands États d’Afrique au XIXe siècle.',
    },
    {
      id: 'djihad',
      tier: 1,
      type: 'war',
      nom: 'Djihad d’Usman dan Fodio',
      annee: 1804,
      adversaires: ['Royaumes haoussa (Gobir, Kano, Zaria…)'],
      allies: ['Partisans d’Usman dan Fodio'],
      vainqueur: 'Partisans d’Usman dan Fodio',
      consequences:
        "Les rois des cités haoussa sont renversés et remplacés par des émirs, souvent peuls, qui reconnaissent l'autorité de Sokoto. Le mouvement inspire d'autres guerres saintes en Afrique de l'Ouest.",
    },
    {
      id: 'emirats',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Un califat d’émirats',
      body:
        "Le calife de Sokoto est le chef religieux et politique de plusieurs dizaines d'émirats, comme Kano, Zaria ou Adamawa. Les émirs gouvernent leur territoire et lui envoient un tribut.",
      highlight: { value: '1809', label: 'fondation de Sokoto' },
    },
    {
      id: 'savoir',
      tier: 1,
      type: 'text',
      kicker: 'Savoirs',
      title: 'Un foyer d’écriture',
      body:
        "La famille d'Usman dan Fodio écrit des centaines d'ouvrages en arabe, en peul et en haoussa, sur la religion, le droit, la médecine et l'histoire. Usman lui-même en écrit plus d'une centaine.",
    },
    {
      id: 'asmau',
      tier: 1,
      type: 'person',
      nom: 'Nana Asma’u',
      role: 'Poétesse et enseignante',
      dates: '1793 – 1864',
      description:
        "Fille d'Usman dan Fodio, elle parle quatre langues et écrit de nombreux poèmes. Elle forme des enseignantes, les « jaji », qui vont instruire les femmes dans les villages.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Le califat de Sokoto en dates',
      items: [
        { year: 1804, label: 'Début du djihad' },
        { year: 1808, label: 'Chute du royaume de Gobir' },
        { year: 1809, label: 'Fondation de Sokoto' },
        { year: 1817, label: 'Muhammad Bello calife' },
        { year: 1903, label: 'Conquête britannique' },
      ],
    },
    {
      id: 'esclavage',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Une société esclavagiste',
      body:
        "Les esclaves, capturés lors de guerres et de razzias, travaillent en grand nombre dans les plantations. Le califat compte au XIXe siècle l'une des plus importantes populations d'esclaves d'Afrique.",
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'La conquête britannique',
      body:
        "En 1903, les troupes britanniques de Frederick Lugard prennent Kano et Sokoto ; le calife Attahiru Ier est tué au combat. Les Britanniques gouvernent ensuite par l'intermédiaire des émirs. Le sultan de Sokoto reste aujourd'hui un guide spirituel des musulmans du Nigeria.",
    },

    // ── Niveau 2 ──
    {
      id: 'bello',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Muhammad Bello',
      body:
        "Fils d'Usman dan Fodio, il fonde la ville de Sokoto en 1809 et devient calife en 1817. Il organise l'administration, encourage l'agriculture et écrit lui-même de nombreux livres d'histoire et de médecine.",
    },
    {
      id: 'bornou',
      tier: 2,
      type: 'war',
      nom: 'Djihad peul contre le Bornou',
      annee: 1808,
      adversaires: ['Royaume du Bornou'],
      allies: ['Combattants peuls de Sokoto'],
      vainqueur: 'Bornou (grâce à al-Kanemi)',
      consequences: "Les combattants peuls incendient la capitale du Bornou, mais le lettré al-Kanemi les repousse. Il échange ensuite des lettres célèbres avec Muhammad Bello sur la légitimité de cette guerre entre musulmans.",
    },
    {
      id: 'indigo',
      tier: 2,
      type: 'text',
      kicker: 'Économie',
      title: 'Les teinturiers de Kano',
      body:
        "À Kano, les teinturiers plongent les tissus dans de grandes fosses d'indigo. Cette activité, très ancienne, existe toujours. Kano est aussi réputée pour son artisanat du cuir.",
    },
    {
      id: 'barth',
      tier: 2,
      type: 'text',
      kicker: 'Sources',
      title: 'Un explorateur à Sokoto',
      body:
        "En 1853, l'explorateur allemand Heinrich Barth visite Sokoto. Il décrit l'organisation du califat, ses marchés et ses villes, dans un récit de voyage qui reste une source précieuse.",
    },
    {
      id: 'heritage',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'L’héritage de Nana Asma’u',
      body:
        "Le réseau d'enseignantes créé par Nana Asma'u inspire encore aujourd'hui des programmes d'éducation des femmes dans le nord du Nigeria.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve surtout le califat de Sokoto ?', options: ['Le Nigeria', 'Le Maroc', 'Le Kenya', 'L’Égypte'], answer: 0 },
    { id: 'fondateur', type: 'mcq', prompt: 'Qui fonde le califat de Sokoto ?', options: ['Usman dan Fodio', 'Samory Touré', 'Mansa Moussa', 'Saladin'], answer: 0 },
    { id: 'peuple', type: 'mcq', prompt: 'À quel peuple appartient Usman dan Fodio ?', options: ['Les Peuls', 'Les Zoulous', 'Les Berbères', 'Les Edo'], answer: 0 },
    { id: 'annee', type: 'mcq', prompt: 'En quelle année commence le djihad d’Usman dan Fodio ?', options: ['1804', '1504', '1904', '1704'], answer: 0 },
    { id: 'haoussa', type: 'mcq', prompt: 'Quels royaumes Usman dan Fodio renverse-t-il ?', options: ['Les cités haoussa', 'Les royaumes zoulous', 'Les cités swahilies', 'Les royaumes berbères'], answer: 0 },
    { id: 'titre', type: 'mcq', prompt: 'Quel titre prend Usman dan Fodio ?', options: ['Commandeur des croyants', 'Empereur', 'Pharaon', 'Roi des rois'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Qui fonde la ville de Sokoto en 1809 ?', options: ['Muhammad Bello', 'Usman dan Fodio', 'Frederick Lugard', 'Al-Kanemi'], answer: 0 },
    { id: 'emirats', type: 'tf', prompt: 'Le califat est formé de plusieurs dizaines d’émirats.', answer: true },
    { id: 'asmau', type: 'mcq', prompt: 'Qui organise l’éducation des femmes dans le califat ?', options: ['Nana Asma’u', 'Idia', 'Cléopâtre', 'Ranavalona'], answer: 0 },
    { id: 'livres', type: 'mcq', prompt: 'Combien d’ouvrages environ Usman dan Fodio a-t-il écrits ?', options: ['Plus d’une centaine', 'Un seul', 'Aucun', 'Dix mille'], answer: 0 },
    { id: 'esclaves', type: 'tf', prompt: 'L’économie du califat repose en grande partie sur le travail d’esclaves.', answer: true },
    { id: 'bornou', type: 'mcq', prompt: 'Quel royaume voisin résiste au djihad en 1808 ?', options: ['Le Bornou', 'Le Mali', 'Le Kongo', 'L’Éthiopie'], answer: 0 },
    { id: 'conquete', type: 'mcq', prompt: 'Quel pays conquiert le califat en 1903 ?', options: ['Le Royaume-Uni', 'La France', 'L’Allemagne', 'Le Portugal'], answer: 0 },
    { id: 'kano', type: 'mcq', prompt: 'Pour quelle teinture Kano est-elle réputée ?', options: ['L’indigo', 'La pourpre', 'Le safran', 'La cochenille'], answer: 0 },
    { id: 'sultan', type: 'tf', prompt: 'Le sultan de Sokoto est encore aujourd’hui un guide religieux au Nigeria.', answer: true },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Début du djihad', 'Fondation de Sokoto', 'Muhammad Bello calife', 'Conquête britannique'] },
  ],

  recap: [
    '1804 : le prédicateur peul Usman dan Fodio lance une guerre sainte',
    'Le califat de Sokoto réunit des dizaines d’émirats, dont Kano',
    'Un foyer de savoir : écrits de la famille d’Usman, éducation des femmes (Nana Asma’u)',
    'Une société esclavagiste ; conquête britannique en 1903',
  ],
}

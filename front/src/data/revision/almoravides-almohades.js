/** Chapitre rédigé : Almoravides et Almohades (1040 – 1269). */
export default {
  readingTime: 5,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'almoravides',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Des moines-guerriers du Sahara',
      body:
        "Vers 1040, un prédicateur, Abdallah ibn Yasin, fonde chez des Berbères du Sahara un mouvement religieux rigoureux. Ses partisans, les Almoravides, partent à la conquête du Maghreb. Leurs guerriers portent un voile sur le visage, comme les Touaregs aujourd'hui.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Deux empires successifs',
      years: [1100, 1200],
      caption: 'Comparez : l’empire almoravide vers 1100, puis l’empire almohade, du Portugal à la Libye, vers 1200.',
    },
    {
      id: 'youssef',
      tier: 1,
      type: 'person',
      nom: 'Youssef ibn Tachfine',
      role: 'Émir almoravide',
      dates: 'vers 1009 – 1106',
      description:
        "Il fonde Marrakech vers 1070 et unifie le Maghreb occidental. Appelé à l'aide par les rois musulmans d'Espagne, il bat le roi de Castille à Zallaqa (1086), puis annexe al-Andalus.",
    },
    {
      id: 'marrakech',
      tier: 1,
      type: 'text',
      kicker: 'Villes',
      title: 'Marrakech, la ville rouge',
      body:
        "Fondée par les Almoravides au pied de l'Atlas, Marrakech devient la capitale des deux empires. Ses remparts de terre rouge lui donnent son surnom de « ville rouge ». Des galeries souterraines, les khettaras, irriguent ses jardins.",
      highlight: { value: '≈ 1070', label: 'fondation de Marrakech' },
    },
    {
      id: 'almohades',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'La révolution almohade',
      body:
        "Au XIIe siècle, un prédicateur berbère de l'Atlas, Ibn Tumart, se proclame Mahdi et appelle à la révolte contre les Almoravides. Son disciple Abd al-Mumin prend Marrakech en 1147 et unifie tout le Maghreb : c'est l'empire almohade.",
    },
    {
      id: 'arts',
      tier: 1,
      type: 'text',
      kicker: 'Arts',
      title: 'La Koutoubia et la Giralda',
      body:
        "Les Almohades bâtissent de grandes mosquées aux minarets majestueux : la Koutoubia à Marrakech et la Giralda à Séville, devenue le clocher de la cathédrale. Ils protègent des savants comme le philosophe Averroès.",
    },
    {
      id: 'navas',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Las Navas de Tolosa',
      annee: 1212,
      adversaires: ['Coalition chrétienne (Castille, Aragon, Navarre)'],
      allies: ['Califat almohade'],
      vainqueur: 'Coalition chrétienne',
      consequences:
        "Les royaumes chrétiens d'Espagne écrasent l'armée almohade. Cordoue (1236) et Séville (1248) tombent aux mains des chrétiens ; la puissance almohade s'effondre.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Deux empires berbères',
      items: [
        { year: 1040, label: 'Débuts du mouvement almoravide' },
        { year: 1070, label: 'Fondation de Marrakech' },
        { year: 1086, label: 'Victoire de Zallaqa' },
        { year: 1147, label: 'Les Almohades prennent Marrakech' },
        { year: 1212, label: 'Défaite de Las Navas de Tolosa' },
        { year: 1269, label: 'Fin des Almohades' },
      ],
    },
    {
      id: 'intolerance',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Un islam imposé',
      body:
        "Les Almohades imposent leur doctrine religieuse. Ils forcent juifs et chrétiens à se convertir ou à partir : beaucoup s'exilent, comme la famille du philosophe juif Maïmonide, qui quitte Cordoue et s'installe finalement en Égypte.",
    },

    // ── Niveau 2 ──
    {
      id: 'averroes',
      tier: 2,
      type: 'person',
      nom: 'Averroès',
      role: 'Philosophe et médecin',
      dates: '1126 – 1198',
      description: "Juge à Séville et à Cordoue, médecin des califes almohades, il commente les œuvres d'Aristote. Ses écrits influencent profondément les penseurs chrétiens d'Europe.",
    },
    {
      id: 'zallaqa',
      tier: 2,
      type: 'war',
      nom: 'Bataille de Zallaqa',
      annee: 1086,
      adversaires: ['Royaume de Castille (Alphonse VI)'],
      allies: ['Almoravides', 'Royaumes de taïfas'],
      vainqueur: 'Almoravides',
      consequences: "Un an après la prise de Tolède par la Castille, l'avancée chrétienne est stoppée ; les Almoravides annexent ensuite les royaumes musulmans d'Espagne.",
    },
    {
      id: 'ghana',
      tier: 2,
      type: 'text',
      kicker: 'Débats',
      title: 'La conquête du Ghana ?',
      body:
        "Des sources arabes plus tardives racontent que les Almoravides ont pris en 1076 la capitale de l'empire du Ghana, en Afrique de l'Ouest. Beaucoup d'historiens pensent aujourd'hui qu'il ne s'agissait pas d'une véritable conquête.",
    },
    {
      id: 'marabotin',
      tier: 2,
      type: 'text',
      kicker: 'Économie',
      title: 'Une monnaie d’or célèbre',
      body:
        "Grâce à l'or du Sahara, les Almoravides frappent un dinar d'or très réputé. Les chrétiens l'appellent « marabotin » et les rois de Castille l'imitent pour leurs propres pièces.",
    },
    {
      id: 'mots',
      tier: 2,
      type: 'text',
      kicker: 'Mots',
      title: 'Marabout et almohade',
      body:
        "« Almoravide » vient de l'arabe « al-murabitun », qui a aussi donné le mot « marabout ». « Almohade » vient de « al-muwahhidun », « ceux qui proclament l'unicité de Dieu ».",
    },
  ],

  quiz: [
    { id: 'peuple', type: 'mcq', prompt: 'De quel peuple sont issus les Almoravides et les Almohades ?', options: ['Les Berbères', 'Les Turcs', 'Les Perses', 'Les Grecs'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle ville est la capitale des deux empires ?', options: ['Marrakech', 'Cordoue', 'Tunis', 'Le Caire'], answer: 0 },
    { id: 'surnom', type: 'mcq', prompt: 'Quel est le surnom de Marrakech ?', options: ['La ville rouge', 'La ville blanche', 'La ville bleue', 'La ville d’or'], answer: 0 },
    { id: 'youssef', type: 'mcq', prompt: 'Qui fonde Marrakech ?', options: ['Youssef ibn Tachfine', 'Averroès', 'Saladin', 'Ibn Battuta'], answer: 0 },
    { id: 'zallaqa', type: 'mcq', prompt: 'Quel roi les Almoravides battent-ils à Zallaqa en 1086 ?', options: ['Le roi de Castille', 'Le roi de France', 'L’empereur byzantin', 'Le roi du Ghana'], answer: 0 },
    { id: 'voile', type: 'tf', prompt: 'Les guerriers almoravides portent un voile sur le visage.', answer: true },
    { id: 'ibn-tumart', type: 'mcq', prompt: 'Quel prédicateur fonde le mouvement almohade ?', options: ['Ibn Tumart', 'Ibn Khaldoun', 'Ibn Sina', 'Ibn Yasin'], answer: 0 },
    { id: 'koutoubia', type: 'mcq', prompt: 'Quelle grande mosquée les Almohades bâtissent-ils à Marrakech ?', options: ['La Koutoubia', 'La mosquée bleue', 'Al-Azhar', 'La Kaaba'], answer: 0 },
    { id: 'giralda', type: 'mcq', prompt: 'Dans quelle ville se trouve la Giralda ?', options: ['Séville', 'Madrid', 'Barcelone', 'Lisbonne'], answer: 0 },
    { id: 'averroes', type: 'mcq', prompt: 'Quel philosophe est le médecin des califes almohades ?', options: ['Averroès', 'Aristote', 'Descartes', 'Confucius'], answer: 0 },
    { id: 'maimonide', type: 'tf', prompt: 'La famille de Maïmonide fuit les persécutions almohades.', answer: true },
    { id: 'navas', type: 'mcq', prompt: 'Quelle bataille marque la défaite des Almohades en Espagne en 1212 ?', options: ['Las Navas de Tolosa', 'Poitiers', 'Hastings', 'Lépante'], answer: 0 },
    { id: 'fin', type: 'mcq', prompt: 'Qui prend Marrakech aux Almohades en 1269 ?', options: ['Les Mérinides', 'Les Mongols', 'Les Ottomans', 'Les Portugais'], answer: 0 },
    { id: 'marabout', type: 'mcq', prompt: 'Quel mot français vient du même mot arabe qu’« almoravide » ?', options: ['Marabout', 'Mosquée', 'Sultan', 'Calife'], answer: 0 },
    { id: 'or', type: 'mcq', prompt: 'Quelle monnaie almoravide est célèbre jusqu’en Espagne chrétienne ?', options: ['Le dinar d’or', 'Le franc', 'L’écu', 'Le sesterce'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Fondation de Marrakech', 'Bataille de Zallaqa', 'Les Almohades prennent Marrakech', 'Bataille de Las Navas de Tolosa'] },
  ],

  recap: [
    'Almoravides : mouvement religieux berbère du Sahara ; Marrakech vers 1070',
    'Youssef ibn Tachfine bat la Castille (1086) et annexe al-Andalus',
    'Almohades : du Portugal à la Libye ; Koutoubia, Giralda, Averroès',
    'Doctrine imposée aux juifs et chrétiens ; défaite de Las Navas de Tolosa (1212)',
  ],
}

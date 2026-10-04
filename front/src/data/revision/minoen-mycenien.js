/** Chapitre rédigé : Minoens et Mycéniens (≈ 3000 – 1100 av. J.-C.). */
export default {
  readingTime: 5,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'crete',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Les Minoens, en Crète',
      body:
        "Sur l'île de Crète naît, à l'âge du bronze, la première grande civilisation d'Europe. On l'appelle « minoenne », du nom de Minos, roi légendaire de l'île. Vers 1900 av. J.-C., les Crétois bâtissent de grands palais : Knossos, Phaistos, Malia.",
      highlight: { value: '≈ 1900 av. J.-C.', label: 'construction des premiers palais crétois' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'La Crète au cœur de la mer Égée',
      years: [-2000],
      caption: "Placée entre la Grèce, l'Anatolie et l'Égypte, la Crète est un carrefour du commerce en Méditerranée orientale.",
    },
    {
      id: 'knossos',
      tier: 1,
      type: 'text',
      kicker: "Âge d'or",
      title: 'Le palais de Knossos',
      body:
        "Knossos compte des centaines de pièces sur plusieurs étages, des réserves pleines de grandes jarres, des fresques colorées et des canalisations pour l'eau. Ce plan compliqué a peut-être inspiré le mythe du Labyrinthe et du Minotaure.",
    },
    {
      id: 'taureau',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Le taureau et la déesse',
      body:
        "Les fresques montrent de jeunes acrobates qui sautent par-dessus un taureau. Les statuettes de « déesses aux serpents » laissent penser que des divinités féminines tenaient une grande place dans la religion minoenne.",
    },
    {
      id: 'mycenes',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Les Mycéniens, des rois guerriers',
      body:
        "Vers 1600 av. J.-C., sur le continent grec, s'affirment des royaumes guerriers : Mycènes, Pylos, Tirynthe… Chacun est dirigé par un roi, le wanax, depuis un palais protégé par d'énormes murailles. Les Mycéniens parlent déjà une forme de grec.",
    },
    {
      id: 'cyclopeens',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Culture',
      value: 'Plusieurs tonnes',
      label: 'pour certains blocs des murailles de Mycènes',
      caption: "Les Grecs plus tardifs pensaient que seuls des géants, les Cyclopes, avaient pu soulever de telles pierres : on parle encore de murs « cyclopéens ». On entre à Mycènes par la célèbre porte des Lionnes.",
    },
    {
      id: 'conquete',
      tier: 1,
      type: 'dates',
      kicker: 'Fluctuations',
      title: 'Des Minoens aux Mycéniens',
      items: [
        { year: -1900, label: 'Premiers palais crétois (Knossos, Phaistos)' },
        { year: -1600, label: 'Essor de Mycènes sur le continent' },
        { year: -1450, label: 'Les Mycéniens prennent le contrôle de Knossos' },
        { year: -1200, label: 'Destruction de nombreux palais mycéniens' },
      ],
    },
    {
      id: 'troie',
      tier: 1,
      type: 'war',
      nom: 'Guerre de Troie (légende)',
      annee: -1200,
      adversaires: ['Troie (en Anatolie)'],
      allies: ['Coalition des Achéens (Grecs mycéniens)'],
      vainqueur: 'Les Achéens, selon la légende',
      consequences: "Racontée par Homère dans l'Iliade, plusieurs siècles plus tard, cette guerre mêle légende et souvenirs réels. La ville de Troie a bien existé et a été détruite vers 1180 av. J.-C., mais on ignore si une expédition grecque en est responsable.",
    },
    {
      id: 'effondrement',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: "L'effondrement",
      body:
        "Entre 1200 et 1100 av. J.-C., les palais mycéniens sont détruits ou abandonnés. Les causes restent débattues : guerres, révoltes, séismes, famines, invasions. L'écriture disparaît de Grèce pendant plusieurs siècles.",
      highlight: { value: '≈ 1200 – 1100 av. J.-C.', label: 'fin des palais mycéniens' },
    },

    // ── Niveau 2 ──
    {
      id: 'ecritures',
      tier: 2,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Linéaire A et linéaire B',
      body:
        "Les Minoens écrivent en linéaire A, que personne n'a encore réussi à déchiffrer. Les Mycéniens utilisent le linéaire B, déchiffré en 1952 par Michael Ventris : c'est du grec ! Les tablettes d'argile citent déjà Zeus, Héra et Poséidon.",
    },
    {
      id: 'thera',
      tier: 2,
      type: 'text',
      kicker: 'Crise',
      title: "L'éruption de Théra",
      body:
        "Au XVIIe ou au XVIe siècle av. J.-C. (la date exacte est discutée), le volcan de l'île de Théra (Santorin) explose. La ville d'Akrotiri est ensevelie sous les cendres, ce qui a conservé ses maisons et ses fresques. Le rôle de cette catastrophe dans le déclin minoen reste discuté.",
    },
    {
      id: 'schliemann',
      tier: 2,
      type: 'person',
      nom: 'Heinrich Schliemann',
      role: 'Archéologue allemand',
      dates: '1822 – 1890',
      description: "Passionné par Homère, il fouille la colline d'Hisarlik, en Turquie, où il identifie Troie, puis Mycènes en 1876. Il y découvre un masque en or qu'il appelle « masque d'Agamemnon », bien qu'il soit en réalité plus ancien que l'époque supposée de la guerre de Troie.",
    },
    {
      id: 'evans',
      tier: 2,
      type: 'person',
      nom: 'Arthur Evans',
      role: 'Archéologue britannique',
      dates: '1851 – 1941',
      description: "À partir de 1900, il fouille le palais de Knossos et donne le nom de « minoenne » à la civilisation crétoise. Il fait reconstruire certaines parties du palais, ce que les archéologues critiquent aujourd'hui.",
    },
    {
      id: 'heritage',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Aux sources des mythes grecs',
      body:
        "Les Grecs de l'époque classique gardent le souvenir de ce monde disparu à travers leurs mythes : Minos et le Minotaure, Agamemnon roi de Mycènes, Achille et la guerre de Troie. L'Iliade et l'Odyssée, attribuées à Homère, sont mises par écrit vers le VIIIe siècle av. J.-C.",
    },
  ],

  quiz: [
    { id: 'ile', type: 'mcq', prompt: 'Sur quelle île vivent les Minoens ?', options: ['La Crète', 'La Sicile', 'Chypre', 'La Sardaigne'], answer: 0 },
    { id: 'nom', type: 'mcq', prompt: 'D’où vient le nom de « civilisation minoenne » ?', options: ['De Minos, roi légendaire de Crète', 'Du Minotaure, dieu principal des Crétois', 'D’une ville appelée Minoa', 'Du mot grec signifiant « mer »'], answer: 0 },
    { id: 'palais', type: 'mcq', prompt: 'Quel est le plus célèbre palais minoen ?', options: ['Knossos', 'Versailles', 'Persépolis', 'Le Parthénon'], answer: 0 },
    { id: 'labyrinthe', type: 'mcq', prompt: 'Quel mythe le plan compliqué de Knossos a-t-il peut-être inspiré ?', options: ['Le Labyrinthe du Minotaure', 'Les travaux d’Hercule', 'La boîte de Pandore', 'Le cheval de Troie'], answer: 0 },
    { id: 'taureau', type: 'mcq', prompt: 'Au-dessus de quel animal sautent les acrobates des fresques minoennes ?', options: ['Un taureau', 'Un lion', 'Un cheval', 'Un éléphant'], answer: 0 },
    { id: 'lineaire-a', type: 'tf', prompt: 'Le linéaire A, l’écriture des Minoens, a été déchiffré.', answer: false, explanation: "Le linéaire A n'est toujours pas déchiffré. C'est le linéaire B, l'écriture mycénienne, qui l'a été en 1952." },
    { id: 'lineaire-b', type: 'mcq', prompt: 'Quelle langue note le linéaire B, déchiffré en 1952 ?', options: ['Une forme ancienne du grec', 'L’égyptien', 'Le latin', 'Le phénicien'], answer: 0 },
    { id: 'ventris', type: 'mcq', prompt: 'Qui a déchiffré le linéaire B ?', options: ['Michael Ventris', 'Champollion', 'Arthur Evans', 'Heinrich Schliemann'], answer: 0 },
    { id: 'wanax', type: 'mcq', prompt: 'Comment s’appelle le roi d’un royaume mycénien ?', options: ['Le wanax', 'Le pharaon', 'Le consul', 'Le calife'], answer: 0 },
    { id: 'cyclopeens', type: 'mcq', prompt: 'Comment appelle-t-on les murailles de Mycènes faites d’énormes blocs ?', options: ['Des murs cyclopéens', 'Des murs titanesques', 'Des murs pharaoniques', 'Des murs romains'], answer: 0 },
    { id: 'porte', type: 'mcq', prompt: 'Par quelle porte célèbre entre-t-on dans la citadelle de Mycènes ?', options: ['La porte des Lionnes', 'La porte d’Ishtar', 'La porte de Brandebourg', 'La porte du Soleil'], answer: 0 },
    { id: 'thera', type: 'mcq', prompt: 'Quelle île volcanique entre en éruption à l’âge du bronze et ensevelit la ville d’Akrotiri ?', options: ['Théra (Santorin)', 'La Sicile (Etna)', 'Rhodes', 'Ithaque'], answer: 0 },
    { id: 'knossos-myc', type: 'tf', prompt: 'Vers 1450 av. J.-C., les Mycéniens prennent le contrôle de Knossos.', answer: true },
    { id: 'homere', type: 'mcq', prompt: 'Quel poème d’Homère raconte un épisode de la guerre de Troie ?', options: ["L'Iliade", "L'Énéide", 'Les Métamorphoses', 'La Théogonie'], answer: 0 },
    { id: 'schliemann', type: 'mcq', prompt: 'Quel archéologue a fouillé Troie et Mycènes au XIXe siècle ?', options: ['Heinrich Schliemann', 'Howard Carter', 'Arthur Evans', 'Jean-François Champollion'], answer: 0 },
    { id: 'masque', type: 'tf', prompt: 'Le « masque d’Agamemnon » appartient de façon certaine au roi de la guerre de Troie.', answer: false, explanation: "Ce nom vient de Schliemann ; le masque est en réalité plus ancien que l'époque supposée de la guerre de Troie." },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre chronologique.", items: ['Premiers palais crétois', 'Prise de Knossos par les Mycéniens', 'Destruction des palais mycéniens', 'Mise par écrit de l’Iliade'] },
    { id: 'dieux', type: 'tf', prompt: 'Les tablettes mycéniennes en linéaire B citent déjà des dieux grecs comme Zeus et Poséidon.', answer: true },
  ],

  recap: [
    '≈ 1900 av. J.-C. : palais minoens de Crète (Knossos)',
    '≈ 1600 av. J.-C. : royaumes guerriers mycéniens en Grèce',
    'Linéaire A non déchiffré, linéaire B = grec ancien',
    '≈ 1200 – 1100 av. J.-C. : effondrement des palais',
  ],
}

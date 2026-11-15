/** Chapitre rédigé : Royaume wisigoth (418 – 711). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'origines',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Les Goths de l’Ouest',
      body:
        "Les Wisigoths sont un peuple germanique. En 376, fuyant les Huns, ils entrent dans l'Empire romain ; en 410, leur roi Alaric pille Rome. En 418, Rome les installe en Aquitaine comme alliés.",
      highlight: { value: '418', label: 'fondation du royaume de Toulouse' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'De Toulouse à Tolède',
      years: [500, 600],
      caption: 'Comparez : vers 500, le royaume s’étend de part et d’autre des Pyrénées ; vers 600, il couvre presque toute la péninsule Ibérique.',
    },
    {
      id: 'toulouse',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Le royaume de Toulouse',
      body:
        "Autour de Toulouse, les Wisigoths gouvernent le sud-ouest de la Gaule. En 451, leur roi Théodoric Ier meurt en combattant Attila aux côtés des Romains, aux champs Catalauniques.",
    },
    {
      id: 'vouille',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Vouillé',
      annee: 507,
      adversaires: ['Francs (Clovis)'],
      allies: ['Wisigoths (Alaric II)'],
      vainqueur: 'Francs (Clovis)',
      consequences:
        "Le roi Alaric II est tué. Les Wisigoths perdent presque toute la Gaule et se replient en Espagne.",
    },
    {
      id: 'tolede',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Tolède, capitale',
      body:
        "Au VIe siècle, le roi Léovigild fait de Tolède sa capitale. Il conquiert le royaume des Suèves et unifie presque toute la péninsule Ibérique.",
    },
    {
      id: 'conversion',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'De l’arianisme au catholicisme',
      body:
        "Les Wisigoths sont d'abord chrétiens ariens, ce qui les sépare de la population catholique. En 587, le roi Reccared se convertit au catholicisme, adopté par le royaume en 589.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les Wisigoths en dates',
      items: [
        { year: 418, label: 'Royaume de Toulouse' },
        { year: 451, label: 'Champs Catalauniques' },
        { year: 507, label: 'Bataille de Vouillé' },
        { year: 589, label: 'Le royaume devient catholique' },
        { year: 711, label: 'Bataille du Guadalete' },
      ],
    },
    {
      id: 'chute',
      tier: 1,
      type: 'war',
      nom: 'Conquête omeyyade de l’Hispanie',
      annee: 711,
      adversaires: ['Califat omeyyade (Tariq ibn Ziyad)'],
      allies: ['Royaume wisigoth (Rodéric)'],
      vainqueur: 'Omeyyades (Tariq ibn Ziyad)',
      consequences:
        "Affaibli par les luttes pour le trône, le royaume s'effondre. Le roi Rodéric est tué au Guadalete ; en quelques années, presque toute la péninsule passe sous domination musulmane.",
    },
    {
      id: 'asturies',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Les héritiers des Goths',
      body:
        "Seul un petit royaume chrétien survit au nord, dans les Asturies. Ses rois, puis ceux de Castille, se présenteront comme les héritiers des rois wisigoths.",
    },

    // ── Niveau 2 ──
    {
      id: 'isidore',
      tier: 2,
      type: 'person',
      nom: 'Isidore de Séville',
      role: 'Évêque et savant',
      dates: 'vers 560 – 636',
      description: "Il rassemble le savoir de l'Antiquité dans une grande encyclopédie, les Étymologies, l'un des livres les plus lus du Moyen Âge.",
    },
    {
      id: 'election',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Des rois élus',
      body:
        "Le roi wisigoth est élu par les nobles et les évêques. Cela provoque de nombreux complots : beaucoup de rois sont assassinés ou renversés.",
    },
    {
      id: 'lois',
      tier: 2,
      type: 'text',
      kicker: 'Droit',
      title: 'Une loi pour tous',
      body:
        "En 654, le Liber Iudiciorum s'applique désormais à la fois aux Goths et aux Romains. Traduit en castillan au XIIIe siècle, il restera longtemps une base du droit espagnol.",
    },
    {
      id: 'guarrazar',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'Les couronnes de Guarrazar',
      body:
        "Près de Tolède, on a retrouvé en 1858 des couronnes d'or et de pierres précieuses offertes aux églises par les rois wisigoths, dont l'une porte le nom du roi Receswinthe.",
    },
    {
      id: 'juifs',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Les lois contre les Juifs',
      body:
        "Au VIIe siècle, les rois et les conciles de Tolède adoptent des lois de plus en plus dures contre les Juifs, contraints à la conversion ou persécutés.",
    },
  ],

  quiz: [
    { id: 'peuple', type: 'mcq', prompt: 'Les Wisigoths sont un peuple…', options: ['Germanique', 'Arabe', 'Grec', 'Celte'], answer: 0 },
    { id: 'alaric', type: 'mcq', prompt: 'Quel roi wisigoth pille Rome en 410 ?', options: ['Alaric', 'Clovis', 'Attila', 'Odoacre'], answer: 0 },
    { id: 'toulouse', type: 'mcq', prompt: 'Autour de quelle ville les Wisigoths fondent-ils leur premier royaume ?', options: ['Toulouse', 'Paris', 'Lyon', 'Marseille'], answer: 0 },
    { id: 'attila', type: 'mcq', prompt: 'Contre qui le roi Théodoric Ier combat-il en 451 ?', options: ['Attila', 'Clovis', 'Charlemagne', 'Jules César'], answer: 0 },
    { id: 'vouille', type: 'mcq', prompt: 'Qui bat les Wisigoths à Vouillé en 507 ?', options: ['Clovis et les Francs', 'Les Huns', 'Les Romains', 'Les Arabes'], answer: 0 },
    { id: 'tolede', type: 'mcq', prompt: 'Quelle ville devient la capitale des Wisigoths en Espagne ?', options: ['Tolède', 'Madrid', 'Barcelone', 'Lisbonne'], answer: 0 },
    { id: 'leovigild', type: 'mcq', prompt: 'Quel roi unifie presque toute la péninsule Ibérique ?', options: ['Léovigild', 'Rodéric', 'Alaric II', 'Pélage'], answer: 0 },
    { id: 'arien', type: 'tf', prompt: 'Les Wisigoths sont d’abord chrétiens ariens.', answer: true },
    { id: 'reccared', type: 'mcq', prompt: 'Quel roi se convertit au catholicisme en 587 ?', options: ['Reccared', 'Léovigild', 'Euric', 'Rodéric'], answer: 0 },
    { id: 'isidore', type: 'mcq', prompt: 'Quel savant écrit les Étymologies ?', options: ['Isidore de Séville', 'Paul Diacre', 'Grégoire de Tours', 'Bède le Vénérable'], answer: 0 },
    { id: 'election', type: 'mcq', prompt: 'Comment le roi wisigoth est-il désigné ?', options: ['Il est élu par les nobles et les évêques', 'Il est tiré au sort', 'Il est nommé par le pape', 'Il est nommé par l’empereur de Chine'], answer: 0 },
    { id: '711', type: 'mcq', prompt: 'Que se passe-t-il en 711 ?', options: ['Les armées musulmanes conquièrent le royaume', 'Les Francs prennent Tolède', 'Le royaume se convertit', 'Rome est pillée'], answer: 0 },
    { id: 'roderic', type: 'mcq', prompt: 'Qui est le dernier roi wisigoth ?', options: ['Rodéric', 'Reccared', 'Alaric Ier', 'Théodoric Ier'], answer: 0 },
    { id: 'asturies', type: 'mcq', prompt: 'Quel petit royaume chrétien survit au nord après 711 ?', options: ['Les Asturies', 'La Bretagne', 'L’Aquitaine', 'La Sicile'], answer: 0 },
    { id: 'guarrazar', type: 'tf', prompt: 'Les couronnes du trésor de Guarrazar étaient offertes aux églises par les rois.', answer: true },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Royaume de Toulouse', 'Bataille de Vouillé', 'Le royaume devient catholique', 'Bataille du Guadalete'] },
  ],

  recap: [
    '418 : les Wisigoths fondent un royaume autour de Toulouse',
    '507 : battus par Clovis à Vouillé, ils se replient en Espagne, autour de Tolède',
    'Conversion au catholicisme (587-589) ; Isidore de Séville',
    '711 : le royaume s’effondre face aux armées musulmanes ; les Asturies résistent',
  ],
}

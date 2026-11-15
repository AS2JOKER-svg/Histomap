/** Chapitre rédigé : Royaume d'Arménie (331 av. J.-C. – 428). */
export default {
  readingTime: 5,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'origines',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Un royaume des hauts plateaux',
      body:
        "Après la chute de l'Empire perse face à Alexandre le Grand, des gouverneurs de la famille des Orontides règnent sur l'Arménie, un pays de hauts plateaux entre la mer Noire et la Caspienne. En 189 av. J.-C., Artaxias Ier fonde un royaume indépendant.",
      highlight: { value: '189 av. J.-C.', label: 'royaume indépendant' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'L’Arménie dans le temps',
      years: [-300, -1, 300],
      caption: 'Comparez : coincée entre de grands empires, l’Arménie garde son cœur autour du mont Ararat.',
    },
    {
      id: 'tigrane',
      tier: 1,
      type: 'person',
      nom: 'Tigrane le Grand',
      role: 'Roi d’Arménie, « roi des rois »',
      dates: 'règne 95 – 55 av. J.-C.',
      description:
        "Il conquiert la Syrie, la Phénicie et une partie de la Mésopotamie et fonde une nouvelle capitale, Tigranocerte. Pendant quelques années, l'Arménie est la première puissance d'Orient.",
    },
    {
      id: 'lucullus',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Tigranocerte',
      annee: -69,
      adversaires: ['République romaine (Lucullus)'],
      allies: ['Arménie (Tigrane)'],
      vainqueur: 'République romaine',
      consequences:
        "Avec une armée bien plus petite, le général romain Lucullus bat Tigrane et prend sa capitale. En 66 av. J.-C., Tigrane se soumet à Pompée et devient l'allié de Rome.",
    },
    {
      id: 'entre-deux',
      tier: 1,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Entre Rome et la Perse',
      body:
        "Pendant des siècles, Rome et les Parthes, puis les Perses sassanides, se disputent l'Arménie. En 66, un compromis est trouvé : un prince parthe, Tiridate Ier, règne sur l'Arménie, mais reçoit sa couronne des mains de l'empereur Néron, à Rome.",
    },
    {
      id: 'conversion',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Le premier État chrétien',
      body:
        "Selon la tradition, vers 301, le roi Tiridate III est converti par Grégoire l'Illuminateur et fait du christianisme la religion officielle de son royaume. L'Arménie devient ainsi le premier État chrétien, avant même l'Empire romain.",
      highlight: { value: '≈ 301', label: 'date traditionnelle de la conversion' },
    },
    {
      id: 'alphabet',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Un alphabet pour une langue',
      body:
        "En 405, le moine Mesrop Machtots crée un alphabet de 36 lettres qui note précisément les sons de l'arménien. On traduit aussitôt la Bible. Cet alphabet est toujours celui de l'Arménie aujourd'hui.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Sept siècles de royaume',
      items: [
        { year: -189, label: 'Artaxias Ier fonde le royaume' },
        { year: -95, label: 'Avènement de Tigrane le Grand' },
        { year: -66, label: 'Soumission à Pompée' },
        { year: 66, label: 'Tiridate Ier couronné à Rome' },
        { year: 301, label: 'Conversion au christianisme' },
        { year: 405, label: 'Création de l’alphabet' },
      ],
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Partage et fin de la royauté',
      body:
        "En 387, Rome et la Perse se partagent l'Arménie. En 428, les Perses sassanides déposent le dernier roi et nomment un gouverneur. Mais la langue, l'alphabet et l'Église arménienne permettent au peuple de garder son identité.",
    },

    // ── Niveau 2 ──
    {
      id: 'gregoire',
      tier: 2,
      type: 'person',
      nom: 'Grégoire l’Illuminateur',
      role: 'Évangélisateur de l’Arménie',
      dates: 'vers 257 – vers 331',
      description:
        "Selon la tradition, il est jeté dans une fosse pendant treize ans pour sa foi, puis guérit le roi Tiridate, qui se convertit. Le monastère de Khor Virap, au pied du mont Ararat, s'élève sur le lieu de sa prison.",
    },
    {
      id: 'artavazde',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'Un roi qui écrit des tragédies',
      body:
        "Fils de Tigrane, le roi Artavazde II écrit des tragédies en grec, selon l'historien Plutarque. Capturé par le Romain Marc Antoine, il est exécuté en Égypte en 31 av. J.-C.",
    },
    {
      id: 'garni',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'Le temple de Garni',
      body:
        "Au Ier siècle, un temple de style gréco-romain est construit à Garni, près d'Erevan. C'est l'un des rares temples païens conservés en Arménie : il a été restauré au XXe siècle.",
    },
    {
      id: 'nakharars',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Les grandes familles nobles',
      body:
        "La société arménienne est dominée par de grandes familles, les nakharars, qui possèdent les terres et commandent leurs propres troupes. Le roi doit compter avec elles.",
    },
    {
      id: 'rhandeia',
      tier: 2,
      type: 'war',
      nom: 'Guerre romano-parthe pour l’Arménie',
      annee: 58,
      adversaires: ['Empire romain (Corbulon)'],
      allies: ['Arménie', 'Empire parthe'],
      vainqueur: 'Compromis',
      consequences: "Après la reddition d'une armée romaine à Rhandeia (62), Rome accepte que le prince parthe Tiridate règne sur l'Arménie, à condition d'être couronné par Néron.",
    },
  ],

  quiz: [
    { id: 'region', type: 'mcq', prompt: 'Entre quelles mers se trouve l’Arménie ?', options: ['La mer Noire et la Caspienne', 'La Baltique et la mer du Nord', 'La mer Rouge et le golfe Persique', 'La Manche et l’Atlantique'], answer: 0 },
    { id: 'independance', type: 'mcq', prompt: 'Qui fonde le royaume indépendant d’Arménie en 189 av. J.-C. ?', options: ['Artaxias Ier', 'Tigrane le Grand', 'Tiridate III', 'Alexandre le Grand'], answer: 0 },
    { id: 'tigrane', type: 'mcq', prompt: 'Quel roi fait de l’Arménie la première puissance d’Orient ?', options: ['Tigrane le Grand', 'Artavazde II', 'Pap', 'Cyrus'], answer: 0 },
    { id: 'titre', type: 'mcq', prompt: 'Quel titre prend Tigrane ?', options: ['Roi des rois', 'Pharaon', 'Calife', 'Empereur des Romains'], answer: 0 },
    { id: 'lucullus', type: 'mcq', prompt: 'Quel général romain bat Tigrane à Tigranocerte ?', options: ['Lucullus', 'Jules César', 'Scipion', 'Trajan'], answer: 0 },
    { id: 'pompee', type: 'tf', prompt: 'En 66 av. J.-C., Tigrane se soumet à Pompée et devient l’allié de Rome.', answer: true },
    { id: 'neron', type: 'mcq', prompt: 'Quel empereur romain couronne Tiridate Ier en 66 ?', options: ['Néron', 'Auguste', 'Constantin', 'Hadrien'], answer: 0 },
    { id: 'rivaux', type: 'mcq', prompt: 'Quels empires se disputent l’Arménie ?', options: ['Rome et la Perse', 'La Chine et l’Inde', 'L’Égypte et Carthage', 'Les Mongols et les Huns'], answer: 0 },
    { id: 'chretien', type: 'mcq', prompt: 'Selon la tradition, quel est le premier État officiellement chrétien ?', options: ['L’Arménie', 'L’Empire romain', 'L’Éthiopie', 'La France'], answer: 0 },
    { id: 'gregoire', type: 'mcq', prompt: 'Qui convertit le roi Tiridate III, selon la tradition ?', options: ['Grégoire l’Illuminateur', 'Saint Paul', 'Mesrop Machtots', 'Constantin'], answer: 0 },
    { id: 'alphabet', type: 'mcq', prompt: 'Qui crée l’alphabet arménien en 405 ?', options: ['Mesrop Machtots', 'Cyrille', 'Tigrane', 'Homère'], answer: 0 },
    { id: 'lettres', type: 'mcq', prompt: 'Combien de lettres compte l’alphabet arménien à l’origine ?', options: ['36', '26', '12', '100'], answer: 0 },
    { id: 'toujours', type: 'tf', prompt: 'L’alphabet de Mesrop Machtots est toujours utilisé en Arménie.', answer: true },
    { id: 'partage', type: 'mcq', prompt: 'Qui se partage l’Arménie en 387 ?', options: ['Rome et la Perse', 'Les Grecs et les Égyptiens', 'Les Arabes et les Turcs', 'Les Huns et les Goths'], answer: 0 },
    { id: 'fin', type: 'mcq', prompt: 'Qui supprime la royauté arménienne en 428 ?', options: ['Les Perses sassanides', 'Les Romains', 'Les Mongols', 'Les Arabes'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Royaume d’Artaxias Ier', 'Règne de Tigrane le Grand', 'Conversion au christianisme', 'Création de l’alphabet arménien'] },
  ],

  recap: [
    '189 av. J.-C. : royaume indépendant ; Tigrane le Grand, « roi des rois »',
    'Disputée entre Rome et la Perse pendant des siècles',
    'Vers 301 : premier État chrétien selon la tradition',
    '405 : l’alphabet de Mesrop Machtots ; 428 : fin de la royauté',
  ],
}

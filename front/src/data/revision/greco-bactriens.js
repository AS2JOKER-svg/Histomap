/** Chapitre rédigé : Royaume gréco-bactrien (vers 256 – 125 av. J.-C.). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'origines',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Des Grecs en Asie centrale',
      body:
        "Après les conquêtes d'Alexandre le Grand, des soldats et des colons grecs s'installent en Bactriane, une riche région d'Asie centrale, dans l'actuel Afghanistan. Vers 250 av. J.-C., leur gouverneur Diodote se rend indépendant des Séleucides et devient roi.",
      highlight: { value: '≈ 250 av. J.-C.', label: 'indépendance de la Bactriane' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'La Bactriane vers 200 av. J.-C.',
      years: [-200],
      caption: 'Le royaume s’étend entre l’Hindou Kouch et l’Oxus (Amou-Daria).',
    },
    {
      id: 'siege',
      tier: 1,
      type: 'war',
      nom: 'Siège de Bactres',
      annee: -208,
      adversaires: ['Royaume séleucide (Antiochos III)'],
      allies: ['Bactriane (Euthydème Ier)'],
      vainqueur: 'Compromis',
      consequences:
        "Le roi séleucide Antiochos III veut reprendre la Bactriane. Après deux ans de siège, il reconnaît Euthydème comme roi : la Bactriane reste indépendante.",
    },
    {
      id: 'inde',
      tier: 1,
      type: 'text',
      kicker: 'Conquêtes',
      title: 'Des rois grecs en Inde',
      body:
        "Vers 180 av. J.-C., le roi Démétrios Ier franchit les montagnes de l'Hindou Kouch et conquiert le nord-ouest de l'Inde. Des rois grecs, appelés indo-grecs, y régneront jusqu'au début de notre ère.",
    },
    {
      id: 'ai-khanoum',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Aï Khanoum, une ville grecque',
      body:
        "Au bord de l'Oxus, dans le nord de l'Afghanistan, les archéologues français ont fouillé une véritable ville grecque, avec un gymnase, un théâtre et des temples. On y a trouvé, gravées en grec, des maximes venues du sanctuaire de Delphes, en Grèce.",
    },
    {
      id: 'monnaies',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Arts',
      value: '20 statères',
      label: 'la plus grosse pièce d’or de l’Antiquité',
      caption: "Le roi Eucratide fait frapper cette pièce géante. Les monnaies gréco-bactriennes montrent des portraits très réalistes des rois, avec leurs rides et leurs coiffures.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Un royaume grec en Asie',
      items: [
        { year: -250, label: 'Indépendance de Diodote' },
        { year: -208, label: 'Siège de Bactres' },
        { year: -180, label: 'Conquête du nord-ouest de l’Inde' },
        { year: -145, label: 'Chute d’Aï Khanoum' },
        { year: -125, label: 'Fin du royaume' },
      ],
    },
    {
      id: 'melange',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Grecs, Iraniens et Indiens',
      body:
        "Une élite grecque gouverne une population iranienne ; en Inde, elle rencontre la culture indienne et le bouddhisme. De ces échanges naîtra plus tard l'art du Gandhara, qui donnera au Bouddha un visage inspiré des statues grecques.",
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Balayés par les nomades',
      body:
        "Vers 145 av. J.-C., Aï Khanoum est pillée et abandonnée. Des nomades venus du nord, les Saces et les Yuezhi, envahissent la Bactriane vers 130 av. J.-C. Les Yuezhi fonderont ensuite l'Empire kouchan.",
    },

    // ── Niveau 2 ──
    {
      id: 'menandre',
      tier: 2,
      type: 'person',
      nom: 'Ménandre Ier',
      role: 'Roi indo-grec',
      dates: 'IIe siècle av. J.-C.',
      description:
        "Le plus célèbre des rois grecs de l'Inde. Un texte bouddhiste, les « Questions de Milinda », le montre dialoguant avec le moine Nagasena sur la nature de l'âme.",
    },
    {
      id: 'delphes',
      tier: 2,
      type: 'text',
      kicker: 'Savoirs',
      title: '« Enfant, sois sage »',
      body:
        "À Aï Khanoum, une inscription reproduit des conseils du sanctuaire de Delphes : « Enfant, sois sage ; jeune homme, maîtrise-toi ; adulte, sois juste ; vieillard, sois de bon conseil ; mourant, sois sans regret. »",
    },
    {
      id: 'zhang-qian',
      tier: 2,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Un voyageur chinois',
      body:
        "Vers 128 av. J.-C., l'envoyé chinois Zhang Qian visite la Bactriane, déjà dominée par les Yuezhi. Son rapport fait découvrir à l'empereur de Chine les royaumes de l'Ouest et ouvre la voie aux routes de la soie.",
    },
    {
      id: 'monnaies-sources',
      tier: 2,
      type: 'text',
      kicker: 'Sources',
      title: 'Une histoire écrite par les monnaies',
      body:
        "Les textes anciens parlent très peu de ce royaume. Les historiens ont reconstitué la liste des rois et leurs règnes grâce aux milliers de monnaies retrouvées, qui portent leurs noms et leurs portraits.",
    },
    {
      id: 'pillage',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Un site menacé',
      body:
        "Fouillée de 1964 à 1978, Aï Khanoum a ensuite été ravagée par des fouilles clandestines pendant les guerres d'Afghanistan. Une partie des objets trouvés est conservée au musée de Kaboul.",
    },
  ],

  quiz: [
    { id: 'region', type: 'mcq', prompt: 'Dans quel pays actuel se trouve surtout la Bactriane ?', options: ['L’Afghanistan', 'La Grèce', 'L’Égypte', 'Le Japon'], answer: 0 },
    { id: 'origine', type: 'mcq', prompt: 'D’où viennent les rois gréco-bactriens ?', options: ['Des colons et soldats d’Alexandre', 'Des marchands vikings', 'Des moines chinois', 'Des pharaons'], answer: 0 },
    { id: 'fondateur', type: 'mcq', prompt: 'Quel gouverneur se rend indépendant vers 250 av. J.-C. ?', options: ['Diodote', 'Séleucos', 'Alexandre', 'Darius'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale du royaume ?', options: ['Bactres', 'Athènes', 'Babylone', 'Pékin'], answer: 0 },
    { id: 'siege', type: 'mcq', prompt: 'Quel roi séleucide assiège Bactres en 208 av. J.-C. ?', options: ['Antiochos III', 'Séleucos Ier', 'Ptolémée', 'Mithridate'], answer: 0 },
    { id: 'issue', type: 'tf', prompt: 'Après le siège de Bactres, la Bactriane reste indépendante.', answer: true },
    { id: 'inde', type: 'mcq', prompt: 'Quelle région Démétrios Ier conquiert-il ?', options: ['Le nord-ouest de l’Inde', 'L’Égypte', 'La Chine', 'L’Arabie'], answer: 0 },
    { id: 'ville', type: 'mcq', prompt: 'Quelle ville grecque a été fouillée au bord de l’Oxus ?', options: ['Aï Khanoum', 'Pétra', 'Carthage', 'Pompéi'], answer: 0 },
    { id: 'delphes', type: 'mcq', prompt: 'De quel sanctuaire grec viennent les maximes gravées à Aï Khanoum ?', options: ['Delphes', 'Olympie', 'Éphèse', 'Délos'], answer: 0 },
    { id: 'piece', type: 'mcq', prompt: 'Quel roi fait frapper la plus grosse pièce d’or de l’Antiquité ?', options: ['Eucratide', 'Diodote', 'Ménandre', 'Crésus'], answer: 0 },
    { id: 'menandre', type: 'mcq', prompt: 'Avec qui le roi Ménandre dialogue-t-il dans un texte bouddhiste ?', options: ['Un moine bouddhiste', 'Socrate', 'Confucius', 'Le pape'], answer: 0 },
    { id: 'sources', type: 'tf', prompt: 'L’histoire de ce royaume est surtout connue grâce aux monnaies.', answer: true },
    { id: 'nomades', type: 'mcq', prompt: 'Quels nomades envahissent la Bactriane vers 130 av. J.-C. ?', options: ['Les Saces et les Yuezhi', 'Les Huns et les Goths', 'Les Mongols', 'Les Vikings'], answer: 0 },
    { id: 'kouchans', type: 'mcq', prompt: 'Quel empire les Yuezhi fondent-ils ensuite ?', options: ['L’Empire kouchan', 'L’Empire mongol', 'L’Empire perse', 'L’Empire maurya'], answer: 0 },
    { id: 'gandhara', type: 'mcq', prompt: 'Quel art naîtra de la rencontre entre Grecs et Indiens ?', options: ['L’art du Gandhara', 'L’art gothique', 'L’art maya', 'L’impressionnisme'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Indépendance de Diodote', 'Siège de Bactres', 'Conquête du nord-ouest de l’Inde', 'Chute d’Aï Khanoum'] },
  ],

  recap: [
    'Vers 250 av. J.-C. : les Grecs de Bactriane se rendent indépendants',
    'Euthydème résiste à Antiochos III ; Démétrios conquiert le nord-ouest de l’Inde',
    'Aï Khanoum : une ville grecque au cœur de l’Asie centrale',
    'Vers 130 av. J.-C. : invasion des nomades saces et yuezhi',
  ],
}

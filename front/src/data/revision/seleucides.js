/** Chapitre rédigé : Empire séleucide (312 – 63 av. J.-C.). */
export default {
  readingTime: 5,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'heritiers',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Les héritiers d’Alexandre',
      body:
        "À la mort d'Alexandre le Grand en 323 av. J.-C., ses généraux se disputent son immense empire. L'un d'eux, Séleucos, s'empare de Babylone en 312 av. J.-C. et fonde le plus vaste des royaumes nés de cet empire, de la Méditerranée à l'Inde.",
      highlight: { value: '312 av. J.-C.', label: 'Séleucos à Babylone' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Un royaume qui rétrécit',
      years: [-300, -200, -100],
      caption: 'Comparez : immense en 300 av. J.-C., le royaume séleucide n’est plus qu’un petit État autour d’Antioche vers 100 av. J.-C.',
    },
    {
      id: 'seleucos',
      tier: 1,
      type: 'person',
      nom: 'Séleucos Ier Nicator',
      role: 'Fondateur du royaume',
      dates: 'vers 358 – 281 av. J.-C.',
      description:
        "Officier d'Alexandre, il conquiert l'Iran et l'Asie centrale jusqu'à l'Indus. Il cède des territoires au roi indien Chandragupta Maurya en échange de 500 éléphants de guerre, qui l'aident à vaincre ses rivaux à Ipsos (301 av. J.-C.).",
    },
    {
      id: 'villes',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Des villes grecques en Asie',
      body:
        "Les Séleucides fondent des dizaines de villes grecques, au plan régulier en damier, comme Antioche en Syrie ou Séleucie sur le Tigre. Gymnases et théâtres y attirent les élites locales, qui adoptent souvent la langue et la culture grecques.",
    },
    {
      id: 'syrie',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Raphia',
      annee: -217,
      adversaires: ['Égypte ptolémaïque (Ptolémée IV)'],
      allies: ['Royaume séleucide (Antiochos III)'],
      vainqueur: 'Égypte ptolémaïque',
      consequences:
        "Les Séleucides et les Ptolémées d'Égypte se disputent sans cesse la Syrie. À Raphia, l'une des plus grandes batailles de l'Antiquité, les deux camps alignent des éléphants de guerre.",
    },
    {
      id: 'magnesie',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Magnésie',
      annee: -190,
      adversaires: ['République romaine', 'Royaume de Pergame'],
      allies: ['Royaume séleucide (Antiochos III)'],
      vainqueur: 'République romaine',
      consequences:
        "Antiochos III le Grand, qui a reconquis l'Orient, est écrasé par Rome. Il doit abandonner l'Asie Mineure et payer une énorme indemnité : Rome devient l'arbitre de l'Orient.",
    },
    {
      id: 'maccabees',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'La révolte des Maccabées',
      body:
        "En 167 av. J.-C., le roi Antiochos IV interdit le culte juif et installe un autel païen dans le Temple de Jérusalem. Menés par Judas Maccabée, les Juifs se révoltent et reprennent le Temple : la fête de Hanoucca commémore sa purification.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Deux siècles et demi de Séleucides',
      items: [
        { year: -312, label: 'Séleucos prend Babylone' },
        { year: -301, label: 'Victoire d’Ipsos' },
        { year: -300, label: 'Fondation d’Antioche' },
        { year: -190, label: 'Défaite de Magnésie' },
        { year: -167, label: 'Révolte des Maccabées' },
        { year: -63, label: 'Annexion par Rome' },
      ],
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Pris entre les Parthes et Rome',
      body:
        "Les Parthes conquièrent l'Iran puis la Mésopotamie : en 141 av. J.-C., ils prennent Séleucie. Déchirés par les guerres de succession, les derniers Séleucides ne règnent plus qu'autour d'Antioche. En 63 av. J.-C., le Romain Pompée fait de la Syrie une province romaine.",
    },

    // ── Niveau 2 ──
    {
      id: 'antiochos-iii',
      tier: 2,
      type: 'person',
      nom: 'Antiochos III le Grand',
      role: 'Roi séleucide',
      dates: 'règne 222 – 187 av. J.-C.',
      description:
        "Il mène une grande expédition jusqu'en Inde, qui lui vaut son surnom, puis prend la Syrie du Sud aux Égyptiens. Il accueille le Carthaginois Hannibal, ennemi de Rome, avant d'être vaincu par les Romains.",
    },
    {
      id: 'ere',
      tier: 2,
      type: 'text',
      kicker: 'Quotidien',
      title: 'Compter les années',
      body:
        "Pendant des siècles, au Proche-Orient, on compte les années à partir de l'arrivée de Séleucos à Babylone, en 312 av. J.-C. : c'est l'« ère séleucide », encore utilisée par certaines communautés au Moyen Âge.",
    },
    {
      id: 'babylone',
      tier: 2,
      type: 'text',
      kicker: 'Savoirs',
      title: 'Les astronomes de Babylone',
      body:
        "Sous les Séleucides, les savants de Babylone continuent d'observer le ciel et de noter leurs calculs sur des tablettes d'argile. Le prêtre Bérose écrit en grec une histoire de Babylone pour le roi Antiochos Ier.",
    },
    {
      id: 'culte',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Des rois honorés comme des dieux',
      body:
        "Les rois séleucides prennent des surnoms comme « le Sauveur », « le Dieu » ou « le dieu manifesté ». Ils se font rendre un culte et se disent descendants du dieu Apollon.",
    },
    {
      id: 'parthes',
      tier: 2,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Un empire qui se défait',
      body:
        "Dès le milieu du IIIe siècle av. J.-C., la Bactriane, en Asie centrale, et le pays des Parthes, en Iran, se rendent indépendants. En 129 av. J.-C., le roi Antiochos VII est tué en tentant de reconquérir l'Iran.",
    },
  ],

  quiz: [
    { id: 'fondateur', type: 'mcq', prompt: 'Qui fonde l’Empire séleucide ?', options: ['Séleucos', 'Alexandre le Grand', 'Ptolémée', 'Darius'], answer: 0 },
    { id: 'alexandre', type: 'mcq', prompt: 'De quel empire le royaume séleucide est-il issu ?', options: ['L’empire d’Alexandre le Grand', 'L’Empire romain', 'L’empire de Carthage', 'L’empire mongol'], answer: 0 },
    { id: 'babylone', type: 'mcq', prompt: 'Quelle ville Séleucos prend-il en 312 av. J.-C. ?', options: ['Babylone', 'Athènes', 'Rome', 'Memphis'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle ville de Syrie devient la grande capitale séleucide ?', options: ['Antioche', 'Damas', 'Alep', 'Palmyre'], answer: 0 },
    { id: 'elephants', type: 'mcq', prompt: 'Que reçoit Séleucos du roi indien Chandragupta ?', options: ['500 éléphants de guerre', 'Une flotte', 'De la soie', 'Des canons'], answer: 0 },
    { id: 'langue', type: 'mcq', prompt: 'Quelle est la langue du pouvoir séleucide ?', options: ['Le grec', 'Le latin', 'L’arabe', 'Le chinois'], answer: 0 },
    { id: 'rivaux', type: 'mcq', prompt: 'Avec quel royaume les Séleucides se disputent-ils la Syrie ?', options: ['L’Égypte des Ptolémées', 'Carthage', 'Les Celtes', 'L’Inde des Maurya'], answer: 0 },
    { id: 'magnesie', type: 'mcq', prompt: 'Qui bat Antiochos III à Magnésie en 190 av. J.-C. ?', options: ['Rome', 'Carthage', 'Les Parthes', 'L’Égypte'], answer: 0 },
    { id: 'hannibal', type: 'tf', prompt: 'Le Carthaginois Hannibal se réfugie à la cour d’Antiochos III.', answer: true },
    { id: 'maccabees', type: 'mcq', prompt: 'Quelle révolte éclate en Judée en 167 av. J.-C. ?', options: ['La révolte des Maccabées', 'La révolte de Spartacus', 'La révolte des Gaulois', 'La révolte des cipayes'], answer: 0 },
    { id: 'hanoucca', type: 'mcq', prompt: 'Quelle fête juive commémore la purification du Temple par les Maccabées ?', options: ['Hanoucca', 'Pâque', 'Pourim', 'Kippour'], answer: 0 },
    { id: 'parthes', type: 'mcq', prompt: 'Quel peuple prend l’Iran et la Mésopotamie aux Séleucides ?', options: ['Les Parthes', 'Les Huns', 'Les Arabes', 'Les Mongols'], answer: 0 },
    { id: 'pompee', type: 'mcq', prompt: 'Quel général romain annexe la Syrie séleucide en 63 av. J.-C. ?', options: ['Pompée', 'Jules César', 'Scipion', 'Crassus'], answer: 0 },
    { id: 'villes', type: 'tf', prompt: 'Les Séleucides fondent de nombreuses villes grecques en Asie.', answer: true },
    { id: 'ere', type: 'mcq', prompt: 'À partir de quelle année compte-t-on l’« ère séleucide » ?', options: ['312 av. J.-C.', '753 av. J.-C.', '1 apr. J.-C.', '622'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Séleucos prend Babylone', 'Bataille d’Ipsos', 'Bataille de Magnésie', 'Annexion par Rome'] },
  ],

  recap: [
    '312 av. J.-C. : Séleucos, général d’Alexandre, fonde le royaume',
    'Des villes grecques comme Antioche, du Proche-Orient à l’Asie centrale',
    'Guerres contre l’Égypte ; défaite face à Rome à Magnésie (190)',
    'Maccabées, Parthes, puis annexion par Pompée en 63 av. J.-C.',
  ],
}

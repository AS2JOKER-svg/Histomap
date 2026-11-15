/** Chapitre rédigé : Empire parthe (247 av. J.-C. – 224). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'origines',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Des cavaliers des steppes',
      body:
        "Vers 247 av. J.-C., des cavaliers nomades, les Parnes, conduits par Arsace, s'emparent de la Parthie, une province séleucide au nord-est de l'Iran. Leurs descendants, les Arsacides, vont bâtir un immense empire iranien.",
      highlight: { value: '≈ 470 ans', label: 'de dynastie arsacide' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'L’Empire parthe',
      years: [-200, -1, 200],
      caption: 'Comparez : petit royaume du nord-est de l’Iran vers 200 av. J.-C., l’empire va ensuite de l’Euphrate à l’Inde.',
    },
    {
      id: 'mithridate',
      tier: 1,
      type: 'text',
      kicker: 'Conquêtes',
      title: 'Mithridate Ier, le conquérant',
      body:
        "Mithridate Ier conquiert l'Iran, puis la Mésopotamie : en 141 av. J.-C., il prend Séleucie du Tigre aux Séleucides. Ses successeurs installent leur capitale à Ctésiphon, sur le Tigre.",
    },
    {
      id: 'soie',
      tier: 1,
      type: 'text',
      kicker: 'Commerce',
      title: 'Entre Rome et la Chine',
      body:
        "Les Parthes contrôlent un tronçon essentiel de la route de la soie. Les marchandises de Chine passent par leurs mains avant d'arriver à Rome. Vers 115 av. J.-C., ils reçoivent une ambassade de la Chine des Han.",
    },
    {
      id: 'carrhes',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Carrhes',
      annee: -53,
      adversaires: ['République romaine (Crassus)'],
      allies: ['Empire parthe (Suréna)'],
      vainqueur: 'Empire parthe',
      consequences:
        "Le Romain Crassus part conquérir l'empire parthe. Encerclées par les archers à cheval et les cavaliers cuirassés du général Suréna, ses légions sont anéanties : environ 20 000 Romains sont tués, selon Plutarque.",
    },
    {
      id: 'tir',
      tier: 1,
      type: 'text',
      kicker: 'Armée',
      title: 'Le tir parthe',
      body:
        "Les archers à cheval parthes font semblant de fuir, puis se retournent sur leur selle pour tirer sur leurs poursuivants. En français, une « flèche du Parthe » désigne encore une remarque blessante lancée au moment de partir.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les Parthes en dates',
      items: [
        { year: -247, label: 'Arsace s’empare de la Parthie' },
        { year: -141, label: 'Prise de Séleucie' },
        { year: -53, label: 'Victoire de Carrhes' },
        { year: 116, label: 'Trajan prend Ctésiphon' },
        { year: 224, label: 'Chute des Arsacides' },
      ],
    },
    {
      id: 'rome',
      tier: 1,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Face à Rome',
      body:
        "Pendant près de trois siècles, Parthes et Romains se disputent la Mésopotamie et l'Arménie, entre guerres et traités. En 20 av. J.-C., par un accord, les Parthes rendent à Auguste les enseignes prises à Carrhes. En 116, l'empereur Trajan prend Ctésiphon, mais son successeur rend les conquêtes.",
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'La révolte d’Ardachir',
      body:
        "Affaiblis par les guerres contre Rome et les querelles de succession, les Arsacides sont renversés en 224 par Ardachir, roi de la Perside, qui fonde la dynastie sassanide.",
    },

    // ── Niveau 2 ──
    {
      id: 'surena',
      tier: 2,
      type: 'person',
      nom: 'Suréna',
      role: 'Général parthe',
      dates: 'vers 84 – 53 av. J.-C.',
      description:
        "Chef de l'une des plus grandes familles nobles, il organise un ravitaillement en flèches à dos de chameau pour ses archers à Carrhes. Jaloux de sa gloire, le roi Orodès II le fait exécuter peu après sa victoire.",
    },
    {
      id: 'noblesse',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Les grandes familles',
      body:
        "Le roi des rois s'appuie sur de grandes familles nobles, comme les Suren et les Karen, qui possèdent d'immenses domaines et lèvent leurs propres armées. Elles font la puissance de l'empire, mais aussi son instabilité.",
    },
    {
      id: 'musa',
      tier: 2,
      type: 'person',
      nom: 'Musa',
      role: 'Reine des Parthes',
      dates: 'Ier siècle av. J.-C.',
      description:
        "Ancienne esclave italienne offerte par l'empereur Auguste au roi Phraatès IV, elle devient reine et règne avec son fils. Son portrait figure sur les monnaies.",
    },
    {
      id: 'tolerance',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Des rois tolérants',
      body:
        "Les Parthes pratiquent une forme de zoroastrisme, mais laissent leurs sujets grecs, babyloniens, juifs ou chrétiens pratiquer leur religion. La Mésopotamie abrite ainsi de grandes communautés juives.",
    },
    {
      id: 'tenue',
      tier: 2,
      type: 'text',
      kicker: 'Quotidien',
      title: 'Des pantalons de cavalier',
      body:
        "Les nobles parthes portent des pantalons, une tunique et des bottes, une tenue de cavalier qui étonne les Romains, habitués à la toge.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve le cœur de l’Empire parthe ?', options: ['L’Iran', 'L’Égypte', 'La Grèce', 'L’Espagne'], answer: 0 },
    { id: 'fondateur', type: 'mcq', prompt: 'Qui conduit les Parnes en Parthie vers 247 av. J.-C. ?', options: ['Arsace', 'Cyrus', 'Darius', 'Ardachir'], answer: 0 },
    { id: 'dynastie', type: 'mcq', prompt: 'Comment s’appelle la dynastie parthe ?', options: ['Les Arsacides', 'Les Achéménides', 'Les Sassanides', 'Les Séleucides'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale des Parthes, sur le Tigre ?', options: ['Ctésiphon', 'Persépolis', 'Babylone', 'Athènes'], answer: 0 },
    { id: 'seleucides', type: 'mcq', prompt: 'À quel royaume les Parthes prennent-ils la Mésopotamie ?', options: ['Les Séleucides', 'L’Égypte', 'Rome', 'Carthage'], answer: 0 },
    { id: 'soie', type: 'tf', prompt: 'Les Parthes sont des intermédiaires du commerce entre la Chine et Rome.', answer: true },
    { id: 'carrhes', type: 'mcq', prompt: 'Quel Romain est vaincu et tué à Carrhes en 53 av. J.-C. ?', options: ['Crassus', 'Jules César', 'Pompée', 'Marc Antoine'], answer: 0 },
    { id: 'surena', type: 'mcq', prompt: 'Quel général parthe remporte la bataille de Carrhes ?', options: ['Suréna', 'Arsace', 'Hannibal', 'Mithridate'], answer: 0 },
    { id: 'tir', type: 'mcq', prompt: 'En quoi consiste le « tir parthe » ?', options: ['Tirer en se retournant en fuyant', 'Tirer avec une catapulte', 'Tirer depuis un navire', 'Tirer avec des flèches enflammées'], answer: 0 },
    { id: 'expression', type: 'mcq', prompt: 'Que désigne l’expression « flèche du Parthe » ?', options: ['Une remarque blessante en partant', 'Un compliment', 'Une arme secrète', 'Un tir raté'], answer: 0 },
    { id: 'auguste', type: 'tf', prompt: 'Les Parthes rendent à Auguste les enseignes prises à Carrhes.', answer: true },
    { id: 'trajan', type: 'mcq', prompt: 'Quel empereur romain prend Ctésiphon en 116 ?', options: ['Trajan', 'Auguste', 'Néron', 'Constantin'], answer: 0 },
    { id: 'noblesse', type: 'mcq', prompt: 'Sur qui s’appuie le roi des rois parthe ?', options: ['De grandes familles nobles', 'Le pape', 'Un sénat élu', 'Des marchands vénitiens'], answer: 0 },
    { id: 'fin', type: 'mcq', prompt: 'Qui renverse le dernier roi parthe en 224 ?', options: ['Ardachir', 'Alexandre le Grand', 'Trajan', 'Gengis Khan'], answer: 0 },
    { id: 'apres', type: 'mcq', prompt: 'Quelle dynastie succède aux Parthes ?', options: ['Les Sassanides', 'Les Abbassides', 'Les Séleucides', 'Les Ottomans'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Arsace s’empare de la Parthie', 'Prise de Séleucie', 'Bataille de Carrhes', 'Chute des Arsacides'] },
  ],

  recap: [
    'Vers 247 av. J.-C. : Arsace fonde la dynastie parthe',
    'Mithridate Ier conquiert l’Iran et la Mésopotamie ; capitale Ctésiphon',
    'Carrhes (53 av. J.-C.) : Suréna anéantit l’armée de Crassus',
    '224 : Ardachir renverse les Arsacides et fonde les Sassanides',
  ],
}

/** Chapitre rédigé : Étrusques (≈ 900 – 264 av. J.-C.). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'origines',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: "Un peuple d'Italie centrale",
      body:
        "Les Étrusques vivent en Étrurie, entre l'Arno et le Tibre (l'actuelle Toscane). L'historien grec Hérodote les faisait venir de Lydie, en Asie Mineure ; les historiens pensent aujourd'hui qu'ils sont issus des populations locales de la culture dite villanovienne, vers 900 av. J.-C.",
      highlight: { value: '≈ 900 av. J.-C.', label: 'débuts de la civilisation étrusque' },
    },
    {
      id: 'dodecapole',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Pouvoir',
      value: '12',
      label: 'cités unies dans une ligue religieuse : la Dodécapole',
      caption: "Tarquinia, Cerveteri, Véies, Vulci, Chiusi, Volterra… Chaque cité est indépendante, mais leurs chefs se réunissent chaque année au sanctuaire de Voltumna.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: "L'Étrurie et ses voisins",
      years: [-500, -400],
      caption: "Au VIe siècle av. J.-C., les Étrusques s'étendent jusqu'à la plaine du Pô au nord et à la Campanie au sud.",
    },
    {
      id: 'commerce',
      tier: 1,
      type: 'text',
      kicker: "Âge d'or",
      title: 'Des marins riches en métaux',
      body:
        "L'Étrurie possède des mines de cuivre et de fer, notamment sur l'île d'Elbe. Les Étrusques échangent ces métaux avec les Grecs et les Phéniciens contre des vases, des parfums et des bijoux. Leurs navires dominent la mer Tyrrhénienne, qui porte leur nom (Tyrrhéniens est le nom grec des Étrusques).",
    },
    {
      id: 'rome',
      tier: 1,
      type: 'dates',
      kicker: 'Pouvoir',
      title: 'Des rois étrusques à Rome',
      items: [
        { year: -616, label: 'Selon la tradition, Tarquin l’Ancien devient roi de Rome' },
        { year: -534, label: 'Début du règne de Tarquin le Superbe' },
        { year: -509, label: 'Tarquin le Superbe est chassé : naissance de la République romaine' },
      ],
    },
    {
      id: 'haruspices',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Lire l’avenir dans un foie',
      body:
        "Les Étrusques cherchent à connaître la volonté des dieux. Les haruspices examinent le foie des animaux sacrifiés ; d'autres prêtres interprètent la foudre et le vol des oiseaux. Leurs dieux Tinia, Uni et Menrva ressemblent beaucoup aux dieux romains Jupiter, Junon et Minerve.",
    },
    {
      id: 'tombes',
      tier: 1,
      type: 'text',
      kicker: 'Culture',
      title: 'Des tombes comme des maisons',
      body:
        "À Cerveteri et Tarquinia, de vastes nécropoles abritent des tombes creusées comme des maisons. Leurs murs sont couverts de fresques colorées : banquets, danses, musiciens. Les femmes y participent aux banquets aux côtés de leurs maris, ce qui choquait les Grecs.",
    },
    {
      id: 'veies',
      tier: 1,
      type: 'war',
      nom: 'Prise de Véies',
      annee: -396,
      adversaires: ['République romaine (Camille)'],
      allies: ['Cité de Véies'],
      vainqueur: 'Rome',
      consequences: "Selon la tradition, après un siège de dix ans, Rome s'empare de Véies, grande cité étrusque toute proche. C'est le début de la conquête de l'Étrurie par Rome.",
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Absorbés par Rome',
      body:
        "Divisées, les cités étrusques tombent une à une. En 264 av. J.-C., Rome prend et détruit Volsinies, l'une des dernières cités indépendantes. Au Ier siècle av. J.-C., les Étrusques deviennent citoyens romains et leur langue disparaît peu à peu.",
      highlight: { value: '264 av. J.-C.', label: 'chute de Volsinies' },
    },

    // ── Niveau 2 ──
    {
      id: 'porsenna',
      tier: 2,
      type: 'person',
      nom: 'Lars Porsenna',
      role: 'Roi de Clusium (Chiusi)',
      dates: 'vers 508 av. J.-C.',
      description: "Selon la tradition romaine, il assiège Rome peu après l'expulsion des Tarquins. Les Romains racontent les exploits d'Horatius Coclès, qui défend seul un pont sur le Tibre. Ces récits mêlent histoire et légende.",
    },
    {
      id: 'alalia',
      tier: 2,
      type: 'war',
      nom: "Bataille navale d'Alalia",
      annee: -540,
      adversaires: ['Grecs de Phocée installés en Corse'],
      allies: ['Étrusques (Cerveteri)', 'Carthaginois'],
      vainqueur: 'Incertain (victoire coûteuse des Grecs)',
      consequences: "Vers 540 av. J.-C., les Grecs perdent tant de navires qu'ils abandonnent Alalia, en Corse. Étrusques et Carthaginois limitent ainsi l'expansion grecque en Méditerranée occidentale.",
    },
    {
      id: 'cumes',
      tier: 2,
      type: 'text',
      kicker: 'Crise',
      title: 'La défaite de Cumes',
      body:
        "En 474 av. J.-C., près de Cumes, au sud de l'Italie, la flotte de Hiéron, tyran grec de Syracuse, écrase la flotte étrusque. Les Étrusques perdent alors la maîtrise de la mer et leur influence en Campanie recule.",
    },
    {
      id: 'langue',
      tier: 2,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Une langue mystérieuse',
      body:
        "Les Étrusques écrivent avec un alphabet emprunté aux Grecs : on sait donc lire leurs textes. Mais leur langue n'est pas indo-européenne et on n'en comprend qu'une partie. Les lamelles d'or de Pyrgi, écrites en étrusque et en phénicien, ont aidé les chercheurs.",
    },
    {
      id: 'heritage',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: "Ce que Rome leur doit",
      body:
        "Selon les Romains, les Tarquins font construire le grand égout de Rome, la Cloaca Maxima. Rome reprend aussi aux Étrusques les faisceaux, symbole du pouvoir des magistrats, et l'art des haruspices. Le nom de la Toscane vient des Tusci, nom latin des Étrusques.",
    },
  ],

  quiz: [
    { id: 'region', type: 'mcq', prompt: 'Dans quelle région actuelle vivaient principalement les Étrusques ?', options: ['La Toscane', 'La Sicile', 'La Provence', 'La Sardaigne'], answer: 0 },
    { id: 'dodecapole', type: 'mcq', prompt: 'Combien de cités compte la Dodécapole étrusque ?', options: ['12', '7', '20', '3'], answer: 0 },
    { id: 'empire', type: 'tf', prompt: 'Les Étrusques forment un empire centralisé dirigé par un seul roi.', answer: false, explanation: 'Ce sont des cités indépendantes, unies seulement par une ligue religieuse.' },
    { id: 'elbe', type: 'mcq', prompt: 'Sur quelle île les Étrusques exploitent-ils du fer ?', options: ["L'île d'Elbe", 'La Crète', 'Chypre', 'Malte'], answer: 0 },
    { id: 'mer', type: 'mcq', prompt: 'Quelle mer porte le nom grec des Étrusques ?', options: ['La mer Tyrrhénienne', 'La mer Égée', 'La mer Adriatique', 'La mer Ionienne'], answer: 0 },
    { id: 'tarquin', type: 'mcq', prompt: 'Quel est le dernier roi de Rome, chassé en 509 av. J.-C. selon la tradition ?', options: ['Tarquin le Superbe', 'Romulus', 'Lars Porsenna', 'Servius Tullius'], answer: 0 },
    { id: 'republique', type: 'mcq', prompt: "Que naît-il à Rome après l'expulsion des rois étrusques ?", options: ['La République', "L'Empire", 'La monarchie absolue', 'La démocratie athénienne'], answer: 0 },
    { id: 'haruspice', type: 'mcq', prompt: "Qu'examine un haruspice pour connaître la volonté des dieux ?", options: ['Le foie des animaux sacrifiés', 'Les étoiles', 'Les rêves du roi', 'Les feuilles de thé'], answer: 0 },
    { id: 'menrva', type: 'mcq', prompt: 'À quelle déesse romaine correspond l’étrusque Menrva ?', options: ['Minerve', 'Junon', 'Vénus', 'Diane'], answer: 0 },
    { id: 'femmes', type: 'tf', prompt: 'Les femmes étrusques participent aux banquets aux côtés de leurs maris.', answer: true },
    { id: 'necropole', type: 'mcq', prompt: 'Dans quelle ville trouve-t-on de célèbres tombes étrusques peintes ?', options: ['Tarquinia', 'Pompéi', 'Athènes', 'Carthage'], answer: 0 },
    { id: 'veies', type: 'mcq', prompt: 'Quelle grande cité étrusque Rome prend-elle en 396 av. J.-C. ?', options: ['Véies', 'Volterra', 'Florence', 'Ostie'], answer: 0 },
    { id: 'alalia', type: 'mcq', prompt: "Avec qui les Étrusques s'allient-ils à la bataille d'Alalia ?", options: ['Les Carthaginois', 'Les Romains', 'Les Gaulois', 'Les Perses'], answer: 0 },
    { id: 'cumes', type: 'mcq', prompt: 'Qui écrase la flotte étrusque à Cumes en 474 av. J.-C. ?', options: ['Hiéron de Syracuse', 'Jules César', 'Hannibal', 'Alexandre le Grand'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Bataille navale d’Alalia', 'Expulsion de Tarquin le Superbe', 'Défaite navale de Cumes', 'Prise de Véies par Rome'] },
    { id: 'langue', type: 'tf', prompt: "La langue étrusque est aujourd'hui parfaitement comprise.", answer: false, explanation: "On sait lire son alphabet, mais on ne comprend qu'une partie du vocabulaire." },
    { id: 'cloaca', type: 'mcq', prompt: "Quel ouvrage de Rome la tradition attribue-t-elle aux rois étrusques ?", options: ['La Cloaca Maxima', 'Le Colisée', 'Le Panthéon', 'Le mur d’Hadrien'], answer: 0 },
    { id: 'fin', type: 'mcq', prompt: 'Quelle puissance absorbe finalement les cités étrusques ?', options: ['Rome', 'Carthage', 'La Grèce', 'Les Gaulois'], answer: 0 },
  ],

  recap: [
    "Vers 900 av. J.-C. : naissance de la civilisation étrusque en Toscane",
    'Douze cités indépendantes, riches en métaux et maîtresses de la mer',
    'Des rois étrusques règnent sur Rome jusqu’en 509 av. J.-C.',
    "De Véies (396) à Volsinies (264), Rome absorbe l'Étrurie",
  ],
}

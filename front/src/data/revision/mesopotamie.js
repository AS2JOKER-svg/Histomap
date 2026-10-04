/** Chapitre rédigé : Mésopotamie (≈ 3500 – 539 av. J.-C.). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'fleuves',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Le pays entre les fleuves',
      body:
        "« Mésopotamie » signifie en grec « entre les fleuves » : le Tigre et l'Euphrate, dans l'actuel Irak. Grâce à des canaux d'irrigation, les Sumériens y font pousser l'orge en abondance et bâtissent, vers 3500 av. J.-C., les premières villes de l'histoire, comme Uruk et Ur.",
      highlight: { value: 'Tigre & Euphrate', label: 'les deux fleuves nourriciers' },
    },
    {
      id: 'ecriture',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Découverte',
      value: '≈ 3300 av. J.-C.',
      label: "naissance de l'écriture à Uruk",
      caption: "D'abord des dessins pour compter les sacs de grain et les têtes de bétail, puis des signes en forme de clous (l'écriture cunéiforme) tracés avec un roseau sur des tablettes d'argile.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Cités, royaumes et empires',
      years: [-3000, -1500, -700],
      caption: "Changez d'année : des cités-États sumériennes aux grands royaumes de Babylone et d'Assyrie.",
    },
    {
      id: 'etapes',
      tier: 1,
      type: 'steps',
      kicker: 'Durée',
      title: 'Trois millénaires de Mésopotamie',
      items: [
        { year: -3300, label: "L'écriture apparaît à Uruk (Sumer)" },
        { year: -2334, label: "Sargon fonde l'empire d'Akkad, premier empire de l'histoire" },
        { year: -1792, label: 'Hammurabi devient roi de Babylone' },
        { year: -900, label: "L'Assyrie domine tout le Proche-Orient" },
        { year: -605, label: 'Nabuchodonosor II, roi de Babylone' },
        { year: -539, label: 'Le Perse Cyrus prend Babylone' },
      ],
    },
    {
      id: 'sargon',
      tier: 1,
      type: 'person',
      nom: "Sargon d'Akkad",
      role: 'Fondateur du premier empire',
      dates: 'règne ≈ 2334 – 2279 av. J.-C.',
      description: "Selon la légende, il fut abandonné bébé dans un panier sur l'Euphrate. Il soumet les cités sumériennes et fonde un empire qui s'étend du golfe Persique à la Méditerranée.",
    },
    {
      id: 'hammurabi',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Le Code de Hammurabi',
      body:
        "Vers 1750 av. J.-C., le roi de Babylone fait graver 282 lois sur une stèle de basalte, aujourd'hui au Louvre. Les peines dépendent du rang social et suivent souvent la loi du talion : « œil pour œil, dent pour dent ».",
      highlight: { value: '282', label: 'lois gravées sur la stèle' },
    },
    {
      id: 'gilgamesh',
      tier: 1,
      type: 'person',
      nom: 'Gilgamesh',
      role: "Roi légendaire d'Uruk",
      dates: 'récit noté vers 2000 av. J.-C.',
      description: "Héros de l'Épopée de Gilgamesh, l'un des plus anciens récits du monde. Le roi y cherche l'immortalité ; le texte raconte aussi un déluge qui rappelle celui de la Bible.",
    },
    {
      id: 'ziggourat',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Les ziggourats',
      body:
        "Chaque cité honore son dieu protecteur dans un temple géant à étages, la ziggourat, construite en briques. Celle de Babylone a sans doute inspiré le récit biblique de la tour de Babel.",
    },
    {
      id: 'base-60',
      tier: 1,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Compter par 60',
      body:
        "Les Mésopotamiens comptent en base 60 : c'est pour cela que nos heures ont 60 minutes et le cercle 360 degrés. Ils observent aussi le ciel avec précision et utilisent très tôt la roue.",
    },

    // ── Niveau 2 ──
    {
      id: 'assyrie',
      tier: 2,
      type: 'text',
      kicker: 'Guerre',
      title: "L'Assyrie, puissance militaire",
      body:
        "Avec une armée de chars, de cavaliers et de machines de siège, les rois assyriens dominent le Proche-Orient au VIIIe et au VIIe siècle av. J.-C. À Ninive, le roi Assurbanipal rassemble une immense bibliothèque de tablettes d'argile.",
    },
    {
      id: 'babylone',
      tier: 2,
      type: 'text',
      kicker: "Âge d'or",
      title: 'La Babylone de Nabuchodonosor',
      body:
        "Nabuchodonosor II (605 – 562 av. J.-C.) embellit Babylone : porte d'Ishtar couverte de briques bleues, jardins suspendus comptés parmi les Sept Merveilles (leur existence est discutée). Il prend Jérusalem en 587 av. J.-C. et déporte une partie des Juifs à Babylone.",
    },
    {
      id: 'chute',
      tier: 2,
      type: 'war',
      nom: 'Prise de Babylone',
      annee: -539,
      adversaires: ['Empire perse (Cyrus II)'],
      allies: ['Royaume néo-babylonien'],
      vainqueur: 'Les Perses',
      consequences: "Babylone tombe presque sans combat. La Mésopotamie devient une province de l'Empire perse ; Cyrus autorise les Juifs exilés à rentrer à Jérusalem.",
    },
    {
      id: 'agriculture',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Canaux, orge et bière',
      body:
        "Il pleut peu : sans irrigation, rien ne pousse. Les cités creusent et entretiennent des canaux, labourent avec l'araire et récoltent l'orge, base du pain… et de la bière, boisson quotidienne.",
    },
  ],

  quiz: [
    { id: 'sens', type: 'mcq', prompt: 'Que signifie « Mésopotamie » ?', options: ['Entre les fleuves', 'Terre noire', 'Pays du soleil levant', 'Jardin des dieux'], answer: 0 },
    { id: 'fleuves', type: 'mcq', prompt: 'Quels fleuves arrosent la Mésopotamie ?', options: ['Le Tigre et l’Euphrate', 'Le Nil et le Jourdain', "L'Indus et le Gange", 'Le Danube et le Rhin'], answer: 0 },
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve surtout la Mésopotamie ?', options: ['Irak', 'Égypte', 'Turquie', 'Iran'], answer: 0 },
    { id: 'ecriture-ville', type: 'mcq', prompt: "Dans quelle cité l'écriture apparaît-elle vers 3300 av. J.-C. ?", options: ['Uruk', 'Babylone', 'Ninive', 'Memphis'], answer: 0 },
    { id: 'cuneiforme', type: 'mcq', prompt: "Comment s'appelle l'écriture mésopotamienne ?", options: ['Le cunéiforme', 'Les hiéroglyphes', "L'alphabet phénicien", 'Le linéaire B'], answer: 0 },
    { id: 'support', type: 'tf', prompt: 'Les Mésopotamiens écrivent sur des tablettes d’argile.', answer: true },
    { id: 'compter', type: 'tf', prompt: "L'écriture est d'abord inventée pour écrire des poèmes.", answer: false, explanation: 'Elle sert d’abord à compter : grain, bétail, échanges.' },
    { id: 'sargon', type: 'mcq', prompt: 'Qui fonde le premier empire de l’histoire, vers 2334 av. J.-C. ?', options: ["Sargon d'Akkad", 'Hammurabi', 'Gilgamesh', 'Cyrus'], answer: 0 },
    { id: 'code', type: 'mcq', prompt: 'Quel roi de Babylone fait graver 282 lois sur une stèle ?', options: ['Hammurabi', 'Nabuchodonosor II', 'Sargon', 'Assurbanipal'], answer: 0 },
    { id: 'louvre', type: 'mcq', prompt: 'Où peut-on voir aujourd’hui la stèle du Code de Hammurabi ?', options: ['Au Louvre', 'Au British Museum', 'À Bagdad', 'Au Caire'], answer: 0 },
    { id: 'talion', type: 'mcq', prompt: 'Quelle formule résume la loi du talion ?', options: ['Œil pour œil, dent pour dent', 'Nul n’est censé ignorer la loi', 'Diviser pour régner', 'Du pain et des jeux'], answer: 0 },
    { id: 'gilgamesh', type: 'mcq', prompt: 'Que cherche Gilgamesh dans son épopée ?', options: ["L'immortalité", 'Un trésor', 'Une nouvelle terre', 'Sa mère disparue'], answer: 0 },
    { id: 'base', type: 'mcq', prompt: 'En quelle base comptent les Mésopotamiens ?', options: ['60', '10', '2', '20'], answer: 0, explanation: 'D’où nos 60 minutes et nos 360 degrés.' },
    { id: 'ziggourat', type: 'mcq', prompt: 'Comment appelle-t-on le temple à étages mésopotamien ?', options: ['Une ziggourat', 'Une pyramide', 'Un mastaba', 'Un stupa'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Écriture à Uruk', "Empire d'Akkad", 'Code de Hammurabi', 'Prise de Babylone par Cyrus'] },
    { id: 'ishtar', type: 'mcq', prompt: 'Quelle porte de Babylone est couverte de briques bleues ?', options: ["La porte d'Ishtar", 'La porte des Lions', 'La porte de Damas', 'La porte de Brandebourg'], answer: 0 },
    { id: 'assurbanipal', type: 'mcq', prompt: 'Quel roi assyrien rassemble une immense bibliothèque à Ninive ?', options: ['Assurbanipal', 'Hammurabi', 'Sargon', 'Darius'], answer: 0 },
    { id: 'chute', type: 'mcq', prompt: 'Qui prend Babylone en 539 av. J.-C. ?', options: ['Cyrus II de Perse', 'Alexandre le Grand', 'Ramsès II', 'Jules César'], answer: 0 },
  ],

  recap: [
    'Entre le Tigre et l’Euphrate naissent les premières villes et l’écriture (≈ 3300 av. J.-C.)',
    "Sargon fonde l'empire d'Akkad, premier empire de l'histoire",
    'Hammurabi grave son Code (≈ 1750 av. J.-C.)',
    '539 av. J.-C. : Babylone tombe aux mains des Perses',
  ],
}

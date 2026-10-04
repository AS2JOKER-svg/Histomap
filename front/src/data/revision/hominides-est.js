/** Chapitre rédigé : Hominines d'Afrique de l'Est (≈ 7 millions – 200 000 ans avant notre ère). */
export default {
  readingTime: 5,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'berceau',
      tier: 1,
      type: 'text',
      kicker: 'Territoire',
      title: "Le berceau de l'humanité",
      body:
        "La vallée du Grand Rift traverse l'Afrique de l'Est, de l'Éthiopie à la Tanzanie. Volcans, lacs et rivières y ont enfoui et protégé des fossiles pendant des millions d'années. C'est là qu'on a trouvé une grande partie des ancêtres de l'humanité.",
      highlight: { value: 'Grand Rift', label: "Éthiopie, Kenya, Tanzanie : la région la plus riche en fossiles d'hominines" },
    },
    {
      id: 'toumai',
      tier: 1,
      type: 'person',
      nom: 'Toumaï',
      role: 'Sahelanthropus tchadensis, un des plus anciens membres possibles de la lignée humaine',
      dates: 'vers 7 millions d’années',
      description:
        "Ce crâne a été découvert en 2001 au Tchad par l'équipe du paléontologue français Michel Brunet. Son nom signifie « espoir de vie » en langue goran. Il montre que nos plus lointains ancêtres ne vivaient pas seulement à l'est de l'Afrique. Les chercheurs débattent encore pour savoir s'il marchait déjà debout.",
    },
    {
      id: 'lucy',
      tier: 1,
      type: 'person',
      nom: 'Lucy',
      role: 'Australopithèque (Australopithecus afarensis)',
      dates: 'vers 3,2 millions d’années',
      description:
        "Découverte en 1974 à Hadar, en Éthiopie, par une équipe internationale dirigée notamment par Donald Johanson, Yves Coppens et Maurice Taieb. Environ 40 % de son squelette a été retrouvé. Petite (environ 1,10 m), elle marchait debout mais savait encore grimper aux arbres. Son nom vient d'une chanson des Beatles.",
    },
    {
      id: 'bipedie',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Marcher sur deux jambes',
      body:
        "Avant même d'avoir un gros cerveau, nos ancêtres se sont redressés : c'est la bipédie. À Laetoli, en Tanzanie, des empreintes de pas laissées dans une cendre volcanique il y a environ 3,6 millions d'années le prouvent. Les mains libérées pourront ensuite porter et fabriquer des objets.",
      highlight: { value: '≈ 3,6 millions d’années', label: 'empreintes de pas de Laetoli' },
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Durée',
      title: 'Des millions d’années d’évolution',
      items: [
        { year: -7000000, label: 'Toumaï (Tchad), un des plus anciens hominines connus' },
        { year: -3200000, label: 'Lucy, australopithèque d’Éthiopie' },
        { year: -2400000, label: 'Homo habilis (selon les estimations)' },
        { year: -1900000, label: 'Homo erectus apparaît en Afrique' },
        { year: -300000, label: 'Premiers Homo sapiens connus' },
      ],
    },
    {
      id: 'outils',
      tier: 1,
      type: 'steps',
      kicker: 'Découvertes',
      title: 'Les premiers outils de pierre',
      items: [
        { year: -3300000, label: 'Lomekwi (Kenya) : les plus anciennes pierres taillées connues' },
        { year: -2600000, label: 'Oldowayen : galets taillés pour couper la viande' },
        { year: -1750000, label: 'Acheuléen : le biface, symétrique et taillé sur deux faces' },
      ],
    },
    {
      id: 'habilis',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: "Homo habilis, l'« homme habile »",
      body:
        "Décrit en 1964 à partir de fossiles des gorges d'Olduvai, en Tanzanie, Homo habilis est l'un des premiers représentants du genre Homo. Son cerveau est plus gros que celui des australopithèques. On l'a longtemps présenté comme le premier fabricant d'outils, mais des découvertes plus récentes montrent que la taille de la pierre est plus ancienne.",
    },
    {
      id: 'erectus',
      tier: 1,
      type: 'text',
      kicker: 'Expansion',
      title: "Homo erectus quitte l'Afrique",
      body:
        "Apparu il y a environ 1,9 million d'années, Homo erectus est grand, endurant et a des proportions proches des nôtres. Il est le premier à sortir d'Afrique : on le retrouve en Géorgie vers 1,8 million d'années, puis jusqu'en Chine et à Java.",
      highlight: { value: '≈ 1,8 million d’années', label: "premiers humains hors d'Afrique (Dmanissi, Géorgie)" },
    },
    {
      id: 'sapiens',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Homo sapiens, une espèce africaine',
      body:
        "Notre espèce apparaît en Afrique. Les plus anciens fossiles connus viennent du Djebel Irhoud, au Maroc (environ 300 000 ans), et d'Omo Kibish, en Éthiopie (plus de 200 000 ans). Bien plus tard, il y a environ 60 000 à 50 000 ans, des groupes de Sapiens sortent d'Afrique et peuplent le reste du monde.",
      highlight: { value: '≈ 300 000 ans', label: 'les plus anciens Homo sapiens connus' },
    },

    // ── Niveau 2 ──
    {
      id: 'carte',
      tier: 2,
      type: 'map',
      kicker: 'Territoire',
      title: "L'Afrique, foyer de Sapiens",
      years: [-123000],
      caption: "Il y a environ 125 000 ans, Homo sapiens vit encore presque uniquement en Afrique, tandis que d'autres humains, comme Néandertal, peuplent l'Europe et l'Asie.",
    },
    {
      id: 'cerveau',
      tier: 2,
      type: 'keyfigure',
      kicker: 'Connaissance',
      value: '× 3',
      label: 'le volume du cerveau entre Lucy et nous',
      caption: "Environ 400 cm³ pour un australopithèque, 600 cm³ pour Homo habilis, autour de 900 cm³ pour Homo erectus et près de 1 350 cm³ pour l'Homme moderne (valeurs moyennes approximatives).",
    },
    {
      id: 'buisson',
      tier: 2,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Un buisson, pas une échelle',
      body:
        "L'évolution humaine n'est pas une file d'espèces qui se remplacent l'une après l'autre. Plusieurs espèces d'hominines ont vécu en même temps : vers 1,8 million d'années, Homo erectus côtoie en Afrique de l'Est les paranthropes, aux mâchoires puissantes, qui ont fini par s'éteindre.",
    },
    {
      id: 'leakey',
      tier: 2,
      type: 'person',
      nom: 'Louis et Mary Leakey',
      role: 'Préhistoriens',
      dates: 'XXe siècle',
      description:
        "Ce couple a fouillé pendant des décennies les gorges d'Olduvai, en Tanzanie. Mary Leakey y découvre en 1959 un crâne de paranthrope, puis dirige à la fin des années 1970 la fouille des empreintes de Laetoli. Leur fils Richard poursuivra leurs recherches au Kenya.",
    },
    {
      id: 'turkana',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Le garçon du Turkana',
      body:
        "En 1984, près du lac Turkana, au Kenya, on découvre le squelette presque complet d'un jeune Homo erectus mort il y a environ 1,5 million d'années. C'est l'un des fossiles les plus complets de cette époque : il montre un corps déjà élancé, adapté à la marche et à la course.",
    },
    {
      id: 'datation',
      tier: 2,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Comment date-t-on les fossiles ?',
      body:
        "Le carbone 14 ne fonctionne que jusqu'à environ 50 000 ans. Pour les fossiles plus anciens, on date les couches de cendres volcaniques qui les entourent, grâce à des éléments radioactifs comme le potassium et l'argon. Le Grand Rift, très volcanique, s'y prête particulièrement bien.",
    },
  ],

  quiz: [
    { id: 'rift', type: 'mcq', prompt: "Quelle grande région d'Afrique de l'Est est surnommée « berceau de l'humanité » ?", options: ['La vallée du Grand Rift', 'Le delta du Nil', 'Le désert du Kalahari', 'Le bassin du Congo'], answer: 0 },
    { id: 'lucy-pays', type: 'mcq', prompt: 'Dans quel pays Lucy a-t-elle été découverte ?', options: ['En Éthiopie', 'Au Tchad', 'Au Maroc', 'En Afrique du Sud'], answer: 0 },
    { id: 'lucy-annee', type: 'mcq', prompt: 'En quelle année Lucy a-t-elle été découverte ?', options: ['1974', '1924', '2001', '1859'], answer: 0 },
    { id: 'lucy-age', type: 'mcq', prompt: 'Quel âge a environ Lucy ?', options: ['3,2 millions d’années', '320 000 ans', '32 millions d’années', '32 000 ans'], answer: 0 },
    { id: 'lucy-espece', type: 'mcq', prompt: 'À quel groupe appartient Lucy ?', options: ['Les australopithèques', 'Les Néandertaliens', 'Les Homo sapiens', 'Les Homo erectus'], answer: 0 },
    { id: 'toumai-pays', type: 'mcq', prompt: 'Dans quel pays a été découvert Toumaï ?', options: ['Au Tchad', 'Au Kenya', 'En Éthiopie', 'En Tanzanie'], answer: 0 },
    { id: 'bipedie', type: 'tf', prompt: 'Nos ancêtres ont marché debout avant d’avoir un gros cerveau.', answer: true },
    { id: 'laetoli', type: 'mcq', prompt: 'Que trouve-t-on à Laetoli, en Tanzanie ?', options: ['Des empreintes de pas fossilisées', 'Des peintures rupestres', 'Le squelette de Lucy', 'Les plus anciens bifaces'], answer: 0 },
    { id: 'habilis-nom', type: 'mcq', prompt: 'Que signifie « Homo habilis » ?', options: ['Homme habile', 'Homme debout', 'Homme sage', 'Homme du feu'], answer: 0 },
    { id: 'outils-avant', type: 'tf', prompt: 'Les plus anciens outils de pierre connus sont plus récents qu’Homo habilis.', answer: false, explanation: "Les outils de Lomekwi (Kenya), vers 3,3 millions d'années, sont plus anciens que les premiers fossiles du genre Homo." },
    { id: 'biface', type: 'mcq', prompt: 'Quel outil caractérise l’Acheuléen ?', options: ['Le biface', 'La hache en cuivre', 'L’aiguille à chas', 'L’arc'], answer: 0 },
    { id: 'olduvai', type: 'mcq', prompt: 'Dans quel pays se trouvent les gorges d’Olduvai ?', options: ['En Tanzanie', 'Au Soudan', 'En Égypte', 'Au Nigeria'], answer: 0 },
    { id: 'erectus-sortie', type: 'mcq', prompt: "Quelle espèce est la première à sortir d'Afrique ?", options: ['Homo erectus', 'Homo sapiens', 'Lucy (australopithèque)', 'Toumaï'], answer: 0 },
    { id: 'sapiens-origine', type: 'mcq', prompt: 'Sur quel continent apparaît Homo sapiens ?', options: ['En Afrique', 'En Europe', 'En Asie', 'En Amérique'], answer: 0 },
    { id: 'irhoud', type: 'mcq', prompt: 'Où ont été trouvés les plus anciens fossiles d’Homo sapiens connus (environ 300 000 ans) ?', options: ['Au Djebel Irhoud (Maroc)', 'À Lascaux (France)', 'À Zhoukoudian (Chine)', 'À Hadar (Éthiopie)'], answer: 0 },
    { id: 'buisson', type: 'tf', prompt: "Plusieurs espèces d'hominines ont vécu à la même époque en Afrique de l'Est.", answer: true },
    { id: 'datation', type: 'mcq', prompt: 'Comment date-t-on un fossile vieux de plusieurs millions d’années ?', options: ['En datant les cendres volcaniques qui l’entourent', 'Au carbone 14', 'En comptant les cernes des arbres', 'Grâce à des textes anciens'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre chronologique.", items: ['Toumaï', 'Lucy', 'Homo erectus', 'Premiers Homo sapiens'] },
  ],

  recap: [
    'Vers 7 millions d’années : Toumaï ; vers 3,2 millions : Lucy marche debout',
    'Dès 3,3 millions d’années : premiers outils de pierre taillée',
    'Homo erectus, apparu vers 1,9 million d’années, sort le premier d’Afrique',
    'Homo sapiens apparaît en Afrique il y a environ 300 000 ans',
  ],
}

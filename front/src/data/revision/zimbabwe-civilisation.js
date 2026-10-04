/** Chapitre rédigé : Grand Zimbabwe (≈ 1100 – 1450). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'maisons-pierre',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Les « maisons de pierre »',
      body:
        "Sur un plateau du sud-est de l'actuel Zimbabwe, des ancêtres des Shona s'installent vers le XIe siècle. À partir du XIIIe siècle, ils bâtissent en pierre une véritable capitale. En langue shona, « zimbabwe » signifierait « maisons de pierre ».",
      highlight: { value: 'XIIIe – XVe s.', label: 'grande époque des constructions en pierre' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: "Un royaume entre deux fleuves",
      years: [1300, 1400],
      caption: "Le royaume contrôle le plateau situé entre le Zambèze au nord et le Limpopo au sud, une région riche en or et en pâturages.",
    },
    {
      id: 'enceinte',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Culture',
      value: '≈ 11 m',
      label: 'de haut pour le mur de la Grande Enceinte',
      caption: "Ce mur de granit d'environ 250 m de long est monté à sec : les blocs taillés tiennent ensemble sans aucun mortier. À l'intérieur se dresse une tour conique pleine d'environ 10 m.",
    },
    {
      id: 'trois-ensembles',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Une colline, une enceinte, une vallée',
      body:
        "Le site comprend trois ensembles : le complexe de la Colline, sans doute la résidence du roi et un lieu religieux ; la Grande Enceinte, peut-être réservée à l'élite ; et les ruines de la Vallée, où vivait une partie de la population, dans des maisons de terre.",
    },
    {
      id: 'population',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Apogée',
      value: '10 000 à 18 000',
      label: "habitants au XIVe siècle, selon les estimations",
      caption: "C'est la plus grande ville d'Afrique australe avant la colonisation. Les chiffres restent incertains : ils sont déduits de la taille du site et des fouilles.",
    },
    {
      id: 'commerce',
      tier: 1,
      type: 'text',
      kicker: 'Monde',
      title: "De l'or contre des porcelaines",
      body:
        "Les élites contrôlent le commerce de l'or et de l'ivoire, envoyés vers les ports swahilis de l'océan Indien, comme Sofala et Kilwa. Les fouilles ont livré en échange des perles de verre venues d'Inde, des céramiques de Perse et des céladons de Chine.",
    },
    {
      id: 'oiseaux',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Les oiseaux de stéatite',
      body:
        "Huit oiseaux sculptés dans de la stéatite (une pierre tendre) ont été retrouvés, surtout sur la Colline. Ils sont peut-être liés au culte des ancêtres royaux. L'un d'eux figure aujourd'hui sur le drapeau du Zimbabwe.",
    },
    {
      id: 'abandon',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Un abandon progressif',
      body:
        "Vers le milieu du XVe siècle, la ville se vide. Les historiens avancent plusieurs explications : sols, bois et pâturages épuisés, et déplacement des routes de l'or vers le nord. Le pouvoir passe au royaume du Mutapa, au nord, et à celui de Khami (Torwa), au sud-ouest.",
      highlight: { value: '≈ 1450', label: 'abandon de la capitale' },
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Durée',
      title: "Quatre siècles d'histoire",
      items: [
        { year: 1100, label: 'Vers 1100 : premiers villages shona sur le site' },
        { year: 1290, label: 'Vers 1290 : déclin de Mapungubwe, le royaume voisin au sud' },
        { year: 1350, label: 'XIVe siècle : apogée de la ville' },
        { year: 1450, label: "Vers 1450 : abandon progressif de la capitale" },
      ],
    },

    // ── Niveau 2 ──
    {
      id: 'mythe',
      tier: 2,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Un mythe colonial démonté',
      body:
        "Au XIXe siècle, des Européens refusent de croire que des Africains ont bâti ces murs : ils les attribuent à la reine de Saba ou aux Phéniciens. Les fouilles de David Randall-MacIver (1905) puis de Gertrude Caton-Thompson (1929) prouvent l'origine africaine du site.",
    },
    {
      id: 'datation',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Comment date-t-on le site ?',
      body:
        "Faute d'écrits locaux, les archéologues utilisent le carbone 14 sur des restes de bois ou de charbon, et datent les objets importés (céramiques chinoises ou persanes) dont on connaît l'époque de fabrication. Beaucoup de questions restent ouvertes, comme le nom des rois.",
    },
    {
      id: 'betail',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'La richesse du bétail',
      body:
        "La puissance des chefs ne repose pas seulement sur l'or : les grands troupeaux de bovins sont une richesse essentielle. Les ossements retrouvés montrent que l'élite consommait beaucoup de viande de bœuf.",
    },
    {
      id: 'heritage',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Un nom pour un pays',
      body:
        "En 1980, à son indépendance, l'ancienne Rhodésie prend le nom de Zimbabwe en hommage au site. Les ruines sont inscrites au patrimoine mondial de l'UNESCO depuis 1986.",
      highlight: { value: '1980', label: 'la Rhodésie devient le Zimbabwe' },
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouvent les ruines du Grand Zimbabwe ?', options: ['Le Zimbabwe', 'Le Mozambique', 'Le Kenya', "L'Afrique du Sud"], answer: 0 },
    { id: 'peuple', type: 'mcq', prompt: 'Quel peuple est considéré comme le bâtisseur du site ?', options: ['Les ancêtres des Shona', 'Les Phéniciens', 'Les Zoulous', 'Les Portugais'], answer: 0 },
    { id: 'sens', type: 'mcq', prompt: 'Que signifierait le mot « zimbabwe » en shona ?', options: ['Maisons de pierre', "Ville de l'or", 'Terre des ancêtres', 'Grand fleuve'], answer: 0 },
    { id: 'mortier', type: 'tf', prompt: 'Les murs de la Grande Enceinte sont construits sans mortier.', answer: true },
    { id: 'tour', type: 'mcq', prompt: "Quel monument se dresse à l'intérieur de la Grande Enceinte ?", options: ['Une tour conique', 'Une pyramide', 'Une mosquée', 'Un obélisque'], answer: 0 },
    { id: 'hauteur', type: 'mcq', prompt: 'Quelle hauteur atteint le mur de la Grande Enceinte ?', options: ['Environ 11 m', 'Environ 2 m', 'Environ 50 m', 'Environ 100 m'], answer: 0 },
    { id: 'ensembles', type: 'mcq', prompt: 'Lequel de ces ensembles ne fait PAS partie du site ?', options: ['Le Port', 'La Colline', 'La Grande Enceinte', 'La Vallée'], answer: 0 },
    { id: 'apogee', type: 'mcq', prompt: 'À quel siècle la ville connaît-elle son apogée ?', options: ['Au XIVe siècle', 'Au IXe siècle', 'Au XVIIe siècle', 'Au XIXe siècle'], answer: 0 },
    { id: 'ocean', type: 'mcq', prompt: "Vers quel océan l'or du Grand Zimbabwe est-il exporté ?", options: ["L'océan Indien", "L'océan Atlantique", "L'océan Pacifique", "L'océan Arctique"], answer: 0 },
    { id: 'objets', type: 'tf', prompt: 'On a retrouvé au Grand Zimbabwe des céramiques venues de Chine.', answer: true },
    { id: 'oiseaux', type: 'mcq', prompt: 'Quel objet du site figure sur le drapeau du Zimbabwe ?', options: ['Un oiseau de stéatite', 'Une lance', 'Un masque', 'Un lion de bronze'], answer: 0 },
    { id: 'successeur', type: 'mcq', prompt: 'Quel royaume du nord prend le relais après l’abandon de la ville ?', options: ['Le Mutapa', 'Le Mali', 'Le Kongo', "L'Éthiopie"], answer: 0 },
    { id: 'abandon', type: 'tf', prompt: 'On sait avec certitude pourquoi la ville a été abandonnée.', answer: false, explanation: "Plusieurs hypothèses existent (épuisement des ressources, déplacement des routes de l'or), mais aucune n'est certaine." },
    { id: 'mythe', type: 'mcq', prompt: 'À qui des Européens du XIXe siècle attribuaient-ils à tort la construction du site ?', options: ['À la reine de Saba', 'Aux Shona', 'Aux Bantous', 'Aux Swahilis'], answer: 0 },
    { id: 'caton', type: 'mcq', prompt: "Quelle archéologue prouve en 1929 l'origine africaine du site ?", options: ['Gertrude Caton-Thompson', 'Marie Curie', 'Mary Leakey', 'Jane Goodall'], answer: 0 },
    { id: 'datation', type: 'mcq', prompt: "Quelle méthode permet de dater des restes de bois ou de charbon ?", options: ['Le carbone 14', 'La boussole', "L'imprimerie", 'Le télescope'], answer: 0 },
    { id: 'rhodesie', type: 'mcq', prompt: 'Quel pays prend le nom de Zimbabwe en 1980 ?', options: ['La Rhodésie', 'Le Bechuanaland', 'Le Nyassaland', 'Le Tanganyika'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Premiers villages shona sur le site', 'Apogée de la ville', 'Abandon de la capitale', 'Fouilles de Gertrude Caton-Thompson'] },
  ],

  recap: [
    'Une capitale shona en pierre sèche, bâtie surtout du XIIIe au XVe siècle',
    "La Grande Enceinte : un mur de granit d'environ 11 m sans mortier",
    "Or et ivoire échangés avec l'océan Indien contre perles et porcelaines",
    'Vers 1450 : abandon, le pouvoir passe au Mutapa',
  ],
}

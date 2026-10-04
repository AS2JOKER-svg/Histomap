/** Chapitre rédigé : Culture mégalithique d'Europe occidentale (≈ 4500 – 3000 av. J.-C.). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'vocabulaire',
      tier: 1,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Menhir, dolmen, cairn : les mots des grandes pierres',
      body:
        "« Mégalithe » vient du grec et signifie « grande pierre ». Le menhir (« pierre longue » en breton) est une pierre dressée seule. Le dolmen (« table de pierre ») est une chambre faite de dalles, souvent couverte d'un tertre de terre (tumulus) ou de pierres (cairn).",
    },
    {
      id: 'origine',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Tout commence sur la façade atlantique',
      body:
        "Les plus anciens mégalithes d'Europe sont élevés vers 4500 av. J.-C., notamment en Bretagne. Le cairn de Barnenez, dans le Finistère, long d'environ 75 m, abrite onze chambres funéraires : c'est l'un des plus anciens monuments d'Europe.",
      highlight: { value: '≈ 4500 av. J.-C.', label: 'premiers grands monuments mégalithiques en Bretagne' },
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Durée',
      title: 'Des Bretons aux Maltais',
      items: [
        { year: -4500, label: 'Cairn de Barnenez et Grand Menhir de Locmariaquer (Bretagne)' },
        { year: -4200, label: 'Cairn de Gavrinis, couvert de gravures (Morbihan)' },
        { year: -3600, label: 'Temples de Ġgantija sur l’île de Gozo (Malte)' },
        { year: -3200, label: 'Tombe de Newgrange (Irlande)' },
        { year: -3000, label: 'Premier aménagement de Stonehenge (Angleterre)' },
      ],
    },
    {
      id: 'er-grah',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Apogée',
      value: '≈ 280 tonnes',
      label: 'le poids du Grand Menhir brisé de Locmariaquer',
      caption: "Haut d'environ 20 m, le plus grand menhir connu (appelé Er Grah) a été dressé vers 4500 av. J.-C. Il gît aujourd'hui au sol, brisé en quatre morceaux : on ne sait pas s'il est tombé ou s'il a été abattu.",
    },
    {
      id: 'transport',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Comment déplacer des géants ?',
      body:
        "Sans métal, sans roue ni animal de trait, les bâtisseurs utilisaient sans doute des traîneaux de bois, des rondins, des cordes, des leviers et des rampes de terre. Des expériences modernes montrent qu'il faut des dizaines, voire des centaines de personnes : il fallait donc une société capable de nourrir et d'organiser ces équipes.",
    },
    {
      id: 'tombes',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Des maisons pour les ancêtres',
      body:
        "Beaucoup de mégalithes sont des tombes collectives, utilisées et rouvertes pendant des siècles. On y déposait des haches polies, des poteries, des perles. Élever un tel monument, c'était aussi montrer que le territoire appartenait à la communauté et à ses ancêtres.",
    },
    {
      id: 'newgrange',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Newgrange et le soleil d’hiver',
      body:
        "En Irlande, la tombe de Newgrange est construite vers 3200 av. J.-C., avant les pyramides d'Égypte. Chaque année, au solstice d'hiver, le soleil levant entre par une ouverture au-dessus de la porte et illumine le couloir et la chambre pendant environ un quart d'heure.",
    },
    {
      id: 'ggantija',
      tier: 1,
      type: 'text',
      kicker: 'Culture',
      title: 'Les temples de Malte',
      body:
        "Sur l'île de Gozo, les temples de Ġgantija sont bâtis vers 3600 av. J.-C. avec des blocs de plusieurs tonnes. Leur nom vient d'une légende maltaise qui attribuait leur construction à des géants. Avec les autres temples de Malte, ils sont inscrits au patrimoine mondial de l'UNESCO.",
    },
    {
      id: 'gaulois',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Non, ce ne sont pas les Gaulois !',
      body:
        "Au XVIIIe et au XIXe siècle, on a cru que menhirs et dolmens étaient l'œuvre des druides gaulois ; la bande dessinée Astérix a prolongé cette image. En réalité, ils ont été dressés par des paysans du Néolithique, des millénaires avant les Gaulois. C'est la datation au carbone 14 qui l'a prouvé.",
    },

    // ── Niveau 2 ──
    {
      id: 'nombre',
      tier: 2,
      type: 'keyfigure',
      kicker: 'Territoire',
      value: '≈ 35 000',
      label: 'mégalithes recensés en Europe',
      caption: "Selon une estimation récente, ils s'étendent de la Scandinavie au Portugal et à la Méditerranée. Une étude de 2019 suggère que l'idée est née dans le nord-ouest de la France et s'est diffusée par la mer, le long des côtes.",
    },
    {
      id: 'jade',
      tier: 2,
      type: 'text',
      kicker: 'Monde',
      title: 'Les haches de jade des Alpes',
      body:
        "Des haches polies en jade, extrait dans les Alpes italiennes, ont circulé sur des centaines de kilomètres, jusqu'en Bretagne, en Irlande et en Écosse. Trop précieuses pour couper du bois, elles servaient d'objets de prestige. Le tumulus Saint-Michel, à Carnac, en a livré plusieurs.",
    },
    {
      id: 'gavrinis',
      tier: 2,
      type: 'text',
      kicker: 'Culture',
      title: 'Gavrinis, un puzzle de pierres',
      body:
        "Sur une île du golfe du Morbihan, le couloir de Gavrinis est couvert de gravures de spirales et de lignes. Une de ses dalles est un fragment d'une ancienne stèle gravée : un autre morceau de la même pierre se trouve à 4 km, dans le dolmen de la Table des Marchand. Les bâtisseurs réutilisaient donc des monuments plus anciens.",
    },
    {
      id: 'stonehenge-pierres',
      tier: 2,
      type: 'text',
      kicker: 'Connaissance',
      title: "D'où viennent les pierres de Stonehenge ?",
      body:
        "Les plus petites pierres de Stonehenge, les « pierres bleues », ont été apportées des collines de Preseli, au pays de Galles, à plus de 200 km. En 2024, des géologues ont montré que la « pierre de l'Autel » venait du nord de l'Écosse, à environ 700 km !",
    },
    {
      id: 'questions',
      tier: 2,
      type: 'text',
      kicker: 'Fin',
      title: 'Des questions encore ouvertes',
      body:
        "Vers 3000 av. J.-C., la grande époque des tombes mégalithiques s'achève sur la côte atlantique, même si l'on dresse encore des pierres en Grande-Bretagne pendant des siècles. Sans écriture, ces sociétés gardent leurs mystères : qui commandait les chantiers ? Que signifiaient les gravures ?",
    },
  ],

  quiz: [
    { id: 'sens', type: 'mcq', prompt: 'Que signifie le mot « mégalithe » ?', options: ['Grande pierre', 'Pierre sacrée', 'Tombe royale', 'Pierre taillée'], answer: 0 },
    { id: 'menhir', type: 'mcq', prompt: 'Comment appelle-t-on une grande pierre dressée seule ?', options: ['Un menhir', 'Un dolmen', 'Un cairn', 'Une ziggourat'], answer: 0 },
    { id: 'dolmen', type: 'mcq', prompt: 'Que signifie « dolmen » en breton ?', options: ['Table de pierre', 'Pierre longue', 'Maison des morts', 'Cercle sacré'], answer: 0 },
    { id: 'debut', type: 'mcq', prompt: 'Vers quand apparaissent les premiers grands mégalithes en Bretagne ?', options: ['Vers 4500 av. J.-C.', 'Vers 500 av. J.-C.', 'Vers 40 000 av. J.-C.', 'Vers l’an 1000'], answer: 0 },
    { id: 'barnenez', type: 'mcq', prompt: 'Dans quel département se trouve le cairn de Barnenez ?', options: ['Le Finistère', 'La Dordogne', 'Les Pyrénées-Orientales', 'Le Nord'], answer: 0 },
    { id: 'er-grah', type: 'mcq', prompt: 'Combien pèse environ le Grand Menhir brisé de Locmariaquer ?', options: ['280 tonnes', '2 tonnes', '28 kilos', '2 800 tonnes'], answer: 0 },
    { id: 'roue', type: 'tf', prompt: 'Les bâtisseurs de mégalithes déplaçaient les pierres sur des chariots à roues tirés par des chevaux.', answer: false, explanation: 'Ils utilisaient sans doute des traîneaux, des rondins, des cordes et des leviers, et beaucoup de bras.' },
    { id: 'tombes', type: 'tf', prompt: 'Beaucoup de dolmens étaient des tombes collectives.', answer: true },
    { id: 'newgrange-pays', type: 'mcq', prompt: 'Dans quel pays se trouve Newgrange ?', options: ['En Irlande', 'En Espagne', 'Au Danemark', 'En Italie'], answer: 0 },
    { id: 'newgrange-soleil', type: 'mcq', prompt: 'À quel moment le soleil illumine-t-il la chambre de Newgrange ?', options: ['Au solstice d’hiver', 'Au solstice d’été', 'À chaque pleine lune', 'À midi tous les jours'], answer: 0 },
    { id: 'malte', type: 'mcq', prompt: 'Sur quelle île se trouvent les temples de Ġgantija ?', options: ['Gozo (Malte)', 'La Corse', 'La Crète', 'La Sicile'], answer: 0 },
    { id: 'pyramides', type: 'tf', prompt: 'Newgrange et les temples de Malte sont plus anciens que les pyramides de Gizeh.', answer: true },
    { id: 'gaulois', type: 'mcq', prompt: 'Qui a dressé les menhirs et les dolmens ?', options: ['Des paysans du Néolithique', 'Les druides gaulois', 'Les Romains', 'Les Vikings'], answer: 0 },
    { id: 'carbone', type: 'mcq', prompt: 'Quelle méthode a permis de dater les mégalithes ?', options: ['Le carbone 14', 'La lecture d’inscriptions', 'Le comptage des pierres', 'Les récits des Gaulois'], answer: 0 },
    { id: 'jade', type: 'mcq', prompt: 'D’où vient le jade des haches de prestige retrouvées en Bretagne ?', options: ['Des Alpes', 'De Chine', 'D’Égypte', 'D’Islande'], answer: 0 },
    { id: 'stonehenge', type: 'mcq', prompt: 'D’où viennent les « pierres bleues » de Stonehenge ?', options: ['Du pays de Galles', 'De Bretagne', 'De Norvège', 'Des Alpes'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre chronologique.", items: ['Cairn de Barnenez', 'Temples de Ġgantija', 'Tombe de Newgrange', 'Conquête de la Gaule par César'] },
  ],

  recap: [
    'Vers 4500 av. J.-C. : premiers mégalithes sur la façade atlantique (Barnenez)',
    'Menhirs, dolmens et cairns : surtout des tombes collectives pour les ancêtres',
    'Newgrange (Irlande) et Ġgantija (Malte), plus anciens que les pyramides',
    'Œuvre des paysans du Néolithique, pas des Gaulois',
  ],
}

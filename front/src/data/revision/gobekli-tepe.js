/** Chapitre rédigé : Göbekli Tepe et les sanctuaires du Proche-Orient (≈ 9600 – 8000 av. J.-C.). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'decouverte',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'La « colline au nombril »',
      body:
        "Göbekli Tepe (« la colline au nombril » en turc) se trouve dans le sud-est de la Turquie, près de la ville de Şanlıurfa. Repéré dès les années 1960, le site a d'abord été pris pour un simple cimetière médiéval. Les fouilles commencées en 1995 ont révélé des enceintes de piliers géants vieilles de plus de 11 000 ans.",
      highlight: { value: '≈ 9600 av. J.-C.', label: 'début des constructions, selon le carbone 14' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Au nord du Croissant fertile',
      years: [-10000, -8000],
      caption: "Le site domine une plaine du haut bassin de l'Euphrate et du Tigre, une région où poussaient à l'état sauvage les céréales qui seront bientôt domestiquées.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Durée',
      title: 'Quinze siècles d’histoire',
      items: [
        { year: -9600, label: 'Premières grandes enceintes circulaires de piliers en T' },
        { year: -8800, label: 'Constructions plus petites, aux plans rectangulaires' },
        { year: -8000, label: 'Le site est abandonné et peu à peu recouvert' },
        { year: 1995, label: 'Début des fouilles de Klaus Schmidt' },
        { year: 2018, label: "Inscription au patrimoine mondial de l'UNESCO" },
      ],
    },
    {
      id: 'piliers',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Apogée',
      value: '≈ 5,5 m',
      label: 'la hauteur des plus grands piliers',
      caption: "Les piliers centraux des enceintes pèsent environ 10 tonnes. Ils ont été taillés dans le calcaire du plateau voisin, avec des outils en silex : aucun métal n'existait encore.",
    },
    {
      id: 'chasseurs',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Bâti par des chasseurs-cueilleurs',
      body:
        "On n'y a trouvé ni plantes cultivées ni animaux domestiques. Les bâtisseurs chassaient la gazelle, l'aurochs et le sanglier, et récoltaient des céréales sauvages. Ils ont pourtant su organiser d'énormes chantiers : on pensait jusque-là que seules des sociétés d'agriculteurs en étaient capables.",
    },
    {
      id: 'animaux',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Un bestiaire sculpté',
      body:
        "Les piliers sont couverts de bas-reliefs : renards, sangliers, serpents, vautours, scorpions, grues, aurochs. Les animaux dangereux y sont très nombreux. Ces images ne forment pas une écriture, mais elles avaient sûrement un sens précis pour ceux qui les ont sculptées.",
    },
    {
      id: 'hommes',
      tier: 1,
      type: 'text',
      kicker: 'Culture',
      title: 'Des piliers à forme humaine',
      body:
        "Les grands piliers en T ne sont pas de simples supports. Certains portent des bras sculptés sur les côtés, des mains jointes sur le ventre, une ceinture et un pagne en peau de renard. Ils représentent sans doute des êtres humains stylisés : ancêtres, esprits ou divinités ? On ne le sait pas.",
    },
    {
      id: 'temple-ville',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'D’abord le temple, puis la ville ?',
      body:
        "Pour son fouilleur, Klaus Schmidt, Göbekli Tepe était un sanctuaire où des groupes dispersés se réunissaient pour des fêtes et des rituels. Le besoin de nourrir ces foules aurait pu encourager la culture des céréales. Cette idée, résumée par la formule « d'abord le temple, puis la ville », a bouleversé notre vision du Néolithique.",
    },
    {
      id: 'debat',
      tier: 1,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Un site qui fait encore débat',
      body:
        "Depuis 2015 environ, les nouvelles fouilles ont mis au jour des citernes pour l'eau de pluie, de nombreuses meules et des bâtiments qui ressemblent à des maisons. Beaucoup d'archéologues pensent donc que des gens vivaient aussi sur place : Göbekli Tepe ne serait pas seulement un lieu de culte.",
    },

    // ── Niveau 2 ──
    {
      id: 'schmidt',
      tier: 2,
      type: 'person',
      nom: 'Klaus Schmidt',
      role: 'Archéologue allemand',
      dates: '1953 – 2014',
      description:
        "Il dirige les fouilles de Göbekli Tepe pour l'Institut archéologique allemand de 1995 jusqu'à sa mort. Il est le premier à comprendre l'importance du site, qu'il présente comme « le premier temple de l'humanité ».",
    },
    {
      id: 'karahan',
      tier: 2,
      type: 'text',
      kicker: 'Territoire',
      title: 'Karahan Tepe et les « collines de pierre »',
      body:
        "Göbekli Tepe n'est pas unique. À une quarantaine de kilomètres, Karahan Tepe possède une salle taillée dans la roche, où une tête humaine sculptée sort de la paroi. Une dizaine d'autres sites de la même époque sont fouillés dans la région, que les archéologues appellent les « Taş Tepeler » (« collines de pierre »).",
    },
    {
      id: 'engrain',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Le berceau du blé ?',
      body:
        "Des études génétiques suggèrent que l'engrain, l'une des premières espèces de blé cultivées, a été domestiqué dans les monts Karaca Dağ, à environ 60 km du site. Quelques siècles après les premières enceintes, les habitants de la région deviennent agriculteurs.",
    },
    {
      id: 'enfouissement',
      tier: 2,
      type: 'text',
      kicker: 'Fin',
      title: 'Pourquoi le site a-t-il été enterré ?',
      body:
        "Vers 8000 av. J.-C., le site est abandonné. Les enceintes sont remplies de gravats, d'os d'animaux et d'éclats de silex, ce qui les a très bien conservées. On a longtemps cru à un enfouissement volontaire ; aujourd'hui, certains chercheurs pensent plutôt à des glissements de terrain et à un remplissage progressif.",
    },
    {
      id: 'comparaison',
      tier: 2,
      type: 'keyfigure',
      kicker: 'Monde',
      value: '+ de 6 000 ans',
      label: 'avant Stonehenge',
      caption: "Les premières enceintes de Göbekli Tepe sont plus anciennes que l'écriture, la roue, la poterie du Proche-Orient et les premières villes de Mésopotamie.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve Göbekli Tepe ?', options: ['En Turquie', 'En Irak', 'En Égypte', 'En Grèce'], answer: 0 },
    { id: 'age', type: 'mcq', prompt: 'Vers quand commencent les constructions de Göbekli Tepe ?', options: ['Vers 9600 av. J.-C.', 'Vers 3000 av. J.-C.', 'Vers 1200 av. J.-C.', 'Vers 30 000 av. J.-C.'], answer: 0 },
    { id: 'batisseurs', type: 'mcq', prompt: 'Qui a construit Göbekli Tepe ?', options: ['Des chasseurs-cueilleurs', 'Des Sumériens', 'Des Romains', 'Des Hittites'], answer: 0 },
    { id: 'metal', type: 'tf', prompt: 'Les piliers de Göbekli Tepe ont été taillés avec des outils en bronze.', answer: false, explanation: "Le métal n'est pas encore connu : les bâtisseurs utilisaient des outils en silex." },
    { id: 'forme', type: 'mcq', prompt: 'Quelle forme ont les grands piliers de Göbekli Tepe ?', options: ['Une forme de T', 'Une forme de pyramide', 'Une forme de colonne grecque', 'Une forme de croix'], answer: 0 },
    { id: 'hauteur', type: 'mcq', prompt: 'Quelle est la hauteur des plus grands piliers ?', options: ['Environ 5,5 m', 'Environ 50 cm', 'Environ 55 m', 'Environ 150 m'], answer: 0 },
    { id: 'humains', type: 'tf', prompt: 'Certains piliers portent des bras et des mains sculptés : ils représentent sans doute des êtres humains stylisés.', answer: true },
    { id: 'animaux', type: 'mcq', prompt: 'Quel animal ne fait PAS partie des sculptures de Göbekli Tepe ?', options: ['Le cheval domestique', 'Le renard', 'Le vautour', 'Le scorpion'], answer: 0 },
    { id: 'agriculture', type: 'tf', prompt: 'Les bâtisseurs de Göbekli Tepe cultivaient déjà des champs de blé domestiqué.', answer: false, explanation: "On n'y a trouvé que des céréales sauvages : l'agriculture apparaît un peu plus tard dans la région." },
    { id: 'schmidt', type: 'mcq', prompt: 'Quel archéologue a dirigé les fouilles à partir de 1995 ?', options: ['Klaus Schmidt', 'Howard Carter', 'Yves Coppens', 'Heinrich Schliemann'], answer: 0 },
    { id: 'formule', type: 'mcq', prompt: 'Quelle formule résume l’idée de Klaus Schmidt ?', options: ['D’abord le temple, puis la ville', 'Diviser pour régner', 'Œil pour œil, dent pour dent', 'Tous les chemins mènent à Rome'], answer: 0 },
    { id: 'debat', type: 'mcq', prompt: 'Qu’ont révélé les fouilles récentes ?', options: ['Des citernes, des meules et des bâtiments ressemblant à des maisons', 'Des tablettes écrites en cunéiforme', 'Des tombes de pharaons', 'Des armes en fer'], answer: 0 },
    { id: 'karahan', type: 'mcq', prompt: 'Comment s’appelle un autre site voisin de la même époque ?', options: ['Karahan Tepe', 'Uruk', 'Çatal Höyük', 'Troie'], answer: 0 },
    { id: 'engrain', type: 'mcq', prompt: 'Quelle céréale aurait été domestiquée près de Göbekli Tepe ?', options: ["L'engrain (un blé)", 'Le maïs', 'Le riz', 'Le millet'], answer: 0 },
    { id: 'fin', type: 'mcq', prompt: 'Vers quand le site est-il abandonné ?', options: ['Vers 8000 av. J.-C.', 'Vers 500 av. J.-C.', 'Vers 15 000 av. J.-C.', 'Au Moyen Âge'], answer: 0 },
    { id: 'unesco', type: 'tf', prompt: "Göbekli Tepe est inscrit au patrimoine mondial de l'UNESCO.", answer: true },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre chronologique.", items: ['Premières enceintes de Göbekli Tepe', 'Abandon du site', 'Construction de Stonehenge', 'Début des fouilles de Klaus Schmidt'] },
  ],

  recap: [
    'Sud-est de la Turquie, vers 9600 av. J.-C. : des enceintes de piliers en T',
    'Bâties par des chasseurs-cueilleurs, sans métal ni agriculture',
    'Piliers à forme humaine et bestiaire sculpté : un sens qui reste mystérieux',
    'Sanctuaire ou village ? Un site qui renouvelle notre vision du Néolithique',
  ],
}

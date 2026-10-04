/** Chapitre rédigé : Mésopotamie pré-urbaine (≈ 10 000 – 3500 av. J.-C.). */
export default {
  readingTime: 5,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'croissant',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Le Croissant fertile',
      body:
        "Un arc de terres arrosées par les pluies s'étend de la vallée du Jourdain aux montagnes du Zagros, en passant par le sud de la Turquie. Le blé, l'orge, les lentilles, les moutons et les chèvres y poussent ou y vivent à l'état sauvage. C'est là que les hommes les domestiquent, entre 9000 et 8000 av. J.-C. environ.",
      highlight: { value: '≈ 9000 av. J.-C.', label: 'premières plantes et premiers animaux domestiqués' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Des collines aux plaines',
      years: [-8000, -5000],
      caption: "Comparez : les premiers paysans vivent d'abord sur les collines du nord, où il pleut assez. Vers 5000 av. J.-C., ils occupent aussi les plaines du sud, entre le Tigre et l'Euphrate.",
    },
    {
      id: 'jarmo',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Jarmo, un village de paysans',
      body:
        "Dans les collines du Kurdistan irakien, le village de Jarmo, vers 7000 av. J.-C., compte quelques dizaines de maisons en terre. Ses habitants cultivent le blé et l'orge, élèvent des chèvres et des moutons, et chassent encore. L'archéologue américain Robert Braidwood l'a fouillé dans les années 1950 pour comprendre les débuts de l'agriculture.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Durée',
      title: 'Du village à la ville',
      items: [
        { year: -9000, label: 'Débuts de l’agriculture et de l’élevage' },
        { year: -7000, label: 'Villages de paysans dans le nord (Jarmo)' },
        { year: -6000, label: 'Culture de Halaf : céramique peinte ; premiers canaux (Choga Mami)' },
        { year: -5500, label: "Période d'Obeïd : des paysans s'installent dans le Sud" },
        { year: -4000, label: "Période d'Uruk : les premières villes" },
      ],
    },
    {
      id: 'irrigation',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: "Apprivoiser l'eau",
      body:
        "Dans le sud de la Mésopotamie, il ne pleut presque pas, mais la terre est fertile. Dès 6000 av. J.-C. environ, des paysans creusent des canaux pour amener l'eau des fleuves dans leurs champs. Pendant la période d'Obeïd, les villages se multiplient dans les plaines du Sud et au bord des marais.",
    },
    {
      id: 'tell',
      tier: 1,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Des collines faites de villages',
      body:
        "On construisait les maisons en briques de terre crue. Quand elles s'effondraient, on rebâtissait par-dessus. Au fil des siècles, ces couches successives forment une colline artificielle, le « tell ». En le fouillant couche par couche, les archéologues remontent le temps.",
    },
    {
      id: 'eridu',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: "Eridu et son temple",
      body:
        "Pour les Sumériens, Eridu était la plus ancienne ville du monde, celle où « la royauté descendit du ciel ». Les archéologues y ont trouvé une suite de temples reconstruits les uns sur les autres, depuis un petit sanctuaire de la période d'Obeïd. Le temple, dédié au dieu Enki, devient de plus en plus grand.",
    },
    {
      id: 'jetons',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Connaissance',
      value: '≈ 8000 av. J.-C.',
      label: "premiers jetons d'argile pour compter",
      caption: "Petits cônes, billes ou disques d'argile, ils représentent des quantités de grain, d'huile ou de bêtes. Selon une hypothèse largement admise, ils sont les lointains ancêtres des signes de l'écriture.",
    },
    {
      id: 'uruk',
      tier: 1,
      type: 'text',
      kicker: 'Apogée',
      title: 'Uruk, la première grande ville',
      body:
        "Habitée depuis la période d'Obeïd, Uruk grandit fortement après 4000 av. J.-C. Vers 3200 av. J.-C., elle couvre environ 250 hectares, avec de grands temples, des ateliers et des entrepôts. Elle aurait compté plusieurs dizaines de milliers d'habitants : c'est la plus grande ville du monde à cette époque.",
      highlight: { value: '≈ 250 ha', label: "la surface d'Uruk vers 3200 av. J.-C." },
    },

    // ── Niveau 2 ──
    {
      id: 'halaf',
      tier: 2,
      type: 'text',
      kicker: 'Culture',
      title: 'Les potiers de Halaf',
      body:
        "Dans le nord de la Mésopotamie et de la Syrie, la culture de Halaf (vers 6000 – 5200 av. J.-C.) produit des poteries très fines, peintes de motifs géométriques et de têtes de taureau. Ses villageois vivent dans des maisons rondes et marquent leurs biens avec des cachets de pierre.",
    },
    {
      id: 'bols',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Des bols fabriqués en série',
      body:
        "Sur les sites de la période d'Uruk, on retrouve des milliers de bols grossiers, tous de la même taille, moulés à la chaîne. Beaucoup d'archéologues pensent qu'ils servaient à distribuer des rations de grain aux travailleurs : signe d'une société déjà très organisée.",
    },
    {
      id: 'sceau',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Le sceau-cylindre',
      body:
        "Vers 3500 av. J.-C. apparaît le sceau-cylindre : un petit cylindre de pierre gravé qu'on roule sur l'argile fraîche. Il laisse une image qui sert de signature pour fermer un vase ou un sac. Ces sceaux seront utilisés pendant plus de 3 000 ans au Proche-Orient.",
    },
    {
      id: 'expansion',
      tier: 2,
      type: 'text',
      kicker: 'Expansion',
      title: "Les comptoirs d'Uruk",
      body:
        "Le Sud n'a ni bois, ni pierre, ni métal. Vers 3500 – 3200 av. J.-C., des colonies et comptoirs de type urukéen apparaissent loin au nord, comme Habuba Kabira, sur l'Euphrate en Syrie. Les archéologues débattent encore de leur rôle exact : commerce, colonisation ou domination.",
    },
    {
      id: 'vers-ecriture',
      tier: 2,
      type: 'steps',
      kicker: 'Fin',
      title: "Des jetons à l'écriture",
      items: [
        { year: -8000, label: 'Des jetons d’argile représentent les biens' },
        { year: -3500, label: 'Les jetons sont enfermés dans des boules d’argile scellées' },
        { year: -3300, label: 'Des signes tracés sur des tablettes : naissance de l’écriture à Uruk' },
      ],
    },
  ],

  quiz: [
    { id: 'croissant', type: 'mcq', prompt: "Comment appelle-t-on la région du Proche-Orient où naissent l'agriculture et l'élevage ?", options: ['Le Croissant fertile', 'Le Grand Rift', 'La Route de la soie', 'Le Sahel'], answer: 0 },
    { id: 'domestication', type: 'mcq', prompt: 'Vers quand commence la domestication des plantes et des animaux au Proche-Orient ?', options: ['Vers 9000 av. J.-C.', 'Vers 3000 av. J.-C.', 'Vers 30 000 av. J.-C.', 'Vers 500 av. J.-C.'], answer: 0 },
    { id: 'animaux', type: 'mcq', prompt: 'Quels animaux sont domestiqués dans le Croissant fertile ?', options: ['Les moutons et les chèvres', 'Les lamas et les alpagas', 'Les dromadaires et les éléphants', 'Les poules et les dindes'], answer: 0 },
    { id: 'jarmo', type: 'mcq', prompt: "Qu'est-ce que Jarmo ?", options: ['Un village de paysans vers 7000 av. J.-C.', 'Une cité-État sumérienne', 'Un roi de Babylone', 'Un temple de Göbekli Tepe'], answer: 0 },
    { id: 'pluie', type: 'tf', prompt: 'Dans le sud de la Mésopotamie, les pluies suffisent pour cultiver sans irrigation.', answer: false, explanation: "Il ne pleut presque pas : il faut creuser des canaux pour amener l'eau des fleuves." },
    { id: 'tell', type: 'mcq', prompt: 'Comment appelle-t-on une colline formée par des villages reconstruits les uns sur les autres ?', options: ['Un tell', 'Un tumulus', 'Une ziggourat', 'Un menhir'], answer: 0 },
    { id: 'brique', type: 'mcq', prompt: 'Avec quel matériau construit-on surtout les maisons en Mésopotamie ?', options: ['La brique de terre crue', 'La pierre de taille', 'Le bois de cèdre', 'Le marbre'], answer: 0 },
    { id: 'halaf', type: 'mcq', prompt: 'Par quoi la culture de Halaf est-elle célèbre ?', options: ['Ses poteries finement peintes', 'Ses pyramides', 'Ses tablettes écrites', 'Ses armes en fer'], answer: 0 },
    { id: 'obeid', type: 'tf', prompt: "Pendant la période d'Obeïd, des villages s'installent dans les plaines du sud de la Mésopotamie.", answer: true },
    { id: 'eridu', type: 'mcq', prompt: 'Quelle ville les Sumériens considéraient-ils comme la plus ancienne du monde ?', options: ['Eridu', 'Babylone', 'Ninive', 'Jéricho'], answer: 0 },
    { id: 'enki', type: 'mcq', prompt: "À quel dieu le temple d'Eridu est-il dédié ?", options: ['Enki', 'Zeus', 'Osiris', 'Baal'], answer: 0 },
    { id: 'jetons', type: 'mcq', prompt: "À quoi servaient les petits jetons d'argile ?", options: ['À compter des biens', 'À jouer aux dés', 'À décorer les murs', 'À payer avec des pièces de monnaie'], answer: 0 },
    { id: 'uruk', type: 'mcq', prompt: 'Quelle est la plus grande ville du monde vers 3200 av. J.-C. ?', options: ['Uruk', 'Rome', 'Athènes', 'Babylone'], answer: 0 },
    { id: 'sceau', type: 'mcq', prompt: 'Comment utilise-t-on un sceau-cylindre ?', options: ['On le roule sur l’argile fraîche', 'On le porte comme une couronne', 'On le lance comme une arme', 'On le brûle en offrande'], answer: 0 },
    { id: 'bols', type: 'tf', prompt: "Les bols fabriqués en série de la période d'Uruk servaient peut-être à distribuer des rations aux travailleurs.", answer: true },
    { id: 'manque', type: 'mcq', prompt: 'Quelle ressource manque dans le sud de la Mésopotamie ?', options: ['La pierre et le bois', "L'argile", "L'eau des fleuves", 'Les roseaux'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre chronologique.", items: ['Débuts de l’agriculture', 'Village de Jarmo', 'Uruk, plus grande ville du monde', 'Code de Hammurabi'] },
  ],

  recap: [
    "Vers 9000 av. J.-C. : agriculture et élevage naissent dans le Croissant fertile",
    'Villages du Nord (Jarmo, Halaf), puis canaux et colonisation du Sud (Obeïd)',
    "Temples d'Eridu, jetons pour compter, sceaux-cylindres",
    "Vers 3200 av. J.-C. : Uruk, première grande ville, à la veille de l'écriture",
  ],
}

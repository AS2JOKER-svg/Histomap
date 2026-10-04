/** Chapitre rédigé : Civilisation de Caral-Supe (≈ 3000 – 1800 av. J.-C.). */
export default {
  readingTime: 3,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'origines',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'La plus ancienne civilisation des Amériques',
      body:
        "Sur la côte du Pérou, dans la vallée du fleuve Supe et les vallées voisines (la région du « Norte Chico »), des villages se transforment en villes dès le IVe millénaire av. J.-C. C'est la plus ancienne civilisation connue du continent américain, contemporaine des pyramides d'Égypte.",
      highlight: { value: '≈ 2600 av. J.-C.', label: 'essor de la ville de Caral' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Des vallées entre désert et Andes',
      years: [-3000, -2000],
      caption: "Une étroite bande de vallées fertiles, coincée entre le désert côtier, l'océan Pacifique et les premiers contreforts des Andes.",
    },
    {
      id: 'pyramides',
      tier: 1,
      type: 'keyfigure',
      kicker: "Âge d'or",
      value: '66 ha',
      label: 'la superficie de la ville sacrée de Caral',
      caption: "La ville compte six grandes pyramides à degrés, des places, des quartiers d'habitation et deux places circulaires enterrées. La Grande Pyramide mesure environ 150 m de côté.",
    },
    {
      id: 'sans-poterie',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Une civilisation sans poterie',
      body:
        "Les habitants de Caral ne fabriquent pas encore de poterie : les archéologues parlent de période « précéramique ». Ils n'ont pas d'écriture non plus. Ils utilisent des calebasses (des courges séchées) comme récipients.",
    },
    {
      id: 'echanges',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Des pêcheurs et des paysans',
      body:
        "Sur la côte, au site d'Áspero, des pêcheurs prennent des anchois et des sardines. Dans l'intérieur, des paysans irriguent des champs de coton, de courges et de haricots. Le coton sert à fabriquer les filets de pêche : les deux groupes échangent leurs produits.",
    },
    {
      id: 'shicras',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Les shicras, des sacs de pierres',
      body:
        "Pour bâtir leurs pyramides, les constructeurs remplissent de pierres des sacs en fibres végétales tressées, les shicras. Selon les chercheurs, ces sacs rendaient les remblais plus stables et aidaient peut-être les édifices à mieux résister aux séismes, fréquents au Pérou.",
    },
    {
      id: 'flutes',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Le feu et la musique',
      body:
        "Au cœur des monuments, des foyers servaient à brûler des offrandes. En 2001, les archéologues découvrent dans une place circulaire 32 flûtes taillées dans des os de pélicans et de condors : la musique jouait sans doute un grand rôle dans les cérémonies.",
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Un abandon vers 1800 av. J.-C.',
      body:
        "Vers 1800 av. J.-C., Caral est peu à peu abandonnée. Les chercheurs proposent plusieurs causes possibles : séismes, sécheresses, sable qui envahit les champs, épisodes violents d'El Niño. D'autres centres prennent alors le relais ailleurs au Pérou.",
      highlight: { value: '≈ 1800 av. J.-C.', label: 'abandon de Caral' },
    },

    // ── Niveau 2 ──
    {
      id: 'shady',
      tier: 2,
      type: 'person',
      nom: 'Ruth Shady',
      role: 'Archéologue péruvienne',
      dates: 'née en 1946',
      description: "À partir de 1994, elle dirige les fouilles de Caral. En 2001, des datations au carbone 14 publiées avec d'autres chercheurs montrent que la ville est vieille de plus de 4 500 ans. Le site est inscrit au patrimoine mondial de l'UNESCO en 2009.",
    },
    {
      id: 'datation',
      tier: 2,
      type: 'dates',
      kicker: 'Connaissance',
      title: 'Ce que nous apprennent les fouilles',
      items: [
        { year: -3000, label: 'Premiers centres monumentaux dans les vallées du Norte Chico' },
        { year: -2600, label: 'Essor de Caral et de ses pyramides' },
        { year: -1800, label: 'Abandon progressif de Caral' },
        { year: 2009, label: "Caral inscrite au patrimoine mondial de l'UNESCO" },
      ],
    },
    {
      id: 'paix',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Une société pacifique ?',
      body:
        "On n'a retrouvé à Caral ni remparts, ni véritables armes, ni traces de grandes batailles. Beaucoup de chercheurs pensent que le pouvoir des dirigeants reposait surtout sur la religion et le contrôle des échanges. Mais l'archéologie ne peut pas tout prouver : la question reste discutée.",
    },
    {
      id: 'quipu',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Un lointain ancêtre des Andes',
      body:
        "Des cordelettes à nœuds retrouvées à Caral pourraient être un ancêtre du quipu, l'outil de comptage des Incas, mais cette interprétation est débattue. Plus sûrement, Caral montre que les Andes sont l'un des rares foyers du monde où la civilisation est née de façon indépendante.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve Caral ?', options: ['Le Pérou', 'Le Mexique', 'La Bolivie', 'Le Brésil'], answer: 0 },
    { id: 'anciennete', type: 'tf', prompt: 'Caral est la plus ancienne civilisation connue des Amériques.', answer: true },
    { id: 'epoque', type: 'mcq', prompt: 'Vers quelle date la ville de Caral connaît-elle son essor ?', options: ['Vers 2600 av. J.-C.', 'Vers 500 apr. J.-C.', 'Vers 1438', 'Vers 10 000 av. J.-C.'], answer: 0 },
    { id: 'egypte', type: 'mcq', prompt: 'De quels monuments célèbres Caral est-elle contemporaine ?', options: ["Des pyramides d'Égypte", 'Du Colisée de Rome', 'De Machu Picchu', 'Des cathédrales gothiques'], answer: 0 },
    { id: 'fleuve', type: 'mcq', prompt: 'Dans quelle vallée se trouve Caral ?', options: ['La vallée du Supe', "La vallée de l'Amazone", 'La vallée de Mexico', 'La vallée du Nil'], answer: 0 },
    { id: 'poterie', type: 'tf', prompt: 'Les habitants de Caral fabriquent de nombreuses poteries.', answer: false, explanation: 'Caral appartient à la période « précéramique » : on n’y fabrique pas encore de poterie.' },
    { id: 'ecriture', type: 'tf', prompt: 'La civilisation de Caral possède une écriture.', answer: false, explanation: 'Aucune écriture n’a été retrouvée à Caral.' },
    { id: 'monuments', type: 'mcq', prompt: 'Quels grands monuments trouve-t-on à Caral ?', options: ['Des pyramides à degrés', 'Des têtes colossales', 'Des amphithéâtres romains', 'Des châteaux forts'], answer: 0 },
    { id: 'shicras', type: 'mcq', prompt: 'Que sont les shicras ?', options: ['Des sacs de fibres remplis de pierres', 'Des prêtres', 'Des flûtes en os', 'Des bateaux de pêche'], answer: 0 },
    { id: 'peche', type: 'mcq', prompt: 'Quels poissons pêchent les habitants de la côte ?', options: ['Des anchois et des sardines', 'Des saumons', 'Des thons géants', 'Des requins'], answer: 0 },
    { id: 'coton', type: 'mcq', prompt: 'À quoi sert notamment le coton cultivé par les paysans ?', options: ['À fabriquer des filets de pêche', 'À payer des impôts en monnaie', 'À construire des toits', 'À nourrir les lamas'], answer: 0 },
    { id: 'flutes', type: 'mcq', prompt: 'Que découvre-t-on à Caral en 2001 ?', options: ['32 flûtes en os', 'Un trésor en or', 'Une épée de bronze', 'Une tablette écrite'], answer: 0 },
    { id: 'shady', type: 'mcq', prompt: 'Quelle archéologue dirige les fouilles de Caral depuis 1994 ?', options: ['Ruth Shady', 'Maria Reiche', 'Hiram Bingham', 'Julio C. Tello'], answer: 0 },
    { id: 'datation', type: 'mcq', prompt: 'Quelle méthode a permis de dater Caral ?', options: ['Le carbone 14', "La lecture d'inscriptions", 'Des chroniques espagnoles', 'Le comptage des pyramides'], answer: 0 },
    { id: 'guerre', type: 'tf', prompt: "On a retrouvé à Caral de puissants remparts et de nombreuses armes.", answer: false, explanation: 'On n’y a trouvé ni remparts ni véritables armes, ce qui fait penser à une société plutôt pacifique.' },
    { id: 'fin', type: 'mcq', prompt: 'Vers quelle date Caral est-elle abandonnée ?', options: ['Vers 1800 av. J.-C.', 'Vers 3500 av. J.-C.', 'Vers 500 av. J.-C.', 'En 1532'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Essor de Caral', 'Abandon de Caral', 'Début des fouilles de Ruth Shady', "Inscription à l'UNESCO"] },
  ],

  recap: [
    'Vers 2600 av. J.-C. : Caral, plus ancienne ville des Amériques, au Pérou',
    'Pyramides, places circulaires, shicras : de grands bâtisseurs sans poterie ni écriture',
    'Pêcheurs de la côte et paysans du coton échangent leurs produits',
    'Abandon vers 1800 av. J.-C. ; site fouillé par Ruth Shady depuis 1994',
  ],
}

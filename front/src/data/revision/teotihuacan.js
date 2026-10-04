/** Chapitre rédigé : Teotihuacán (≈ 100 av. J.-C. – 550 apr. J.-C.). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'naissance',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Une métropole sur le plateau mexicain',
      body:
        "Vers 100 av. J.-C., une ville commence à grandir au nord-est de l'actuelle Mexico. En quelques siècles, elle devient la plus grande cité des Amériques. On ignore le nom que lui donnaient ses habitants et quelle langue ils parlaient.",
      highlight: { value: '≈ 100 av. J.-C.', label: 'essor de la ville' },
    },
    {
      id: 'nom',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: '« Le lieu où naissent les dieux »',
      body:
        "Le nom Teotihuacán vient des Aztèques, en langue nahuatl. Quand ils découvrent ses ruines, des siècles plus tard, ils pensent que les dieux y ont créé le Soleil et la Lune. Ce sont aussi eux qui baptisent l'« Allée des Morts » et les pyramides du Soleil et de la Lune.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'La grande cité du Mexique central',
      years: [100, 400],
      caption: "Son influence (commerce, style, parfois armes) s'étend bien au-delà de la vallée de Mexico, jusqu'au monde maya.",
    },
    {
      id: 'population',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Apogée',
      value: '≈ 100 000',
      label: "habitants vers l'an 400-500, selon les estimations",
      caption: "Peut-être davantage : c'est alors l'une des plus grandes villes du monde, à l'époque où l'Empire romain d'Occident s'effondre.",
    },
    {
      id: 'urbanisme',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Une ville planifiée',
      body:
        "La ville est construite selon un plan quadrillé, organisé autour de l'Allée des Morts, une grande avenue de plus de 2 km. Les habitants vivent dans plus de 2 000 « ensembles d'appartements » en pierre, où logent plusieurs familles.",
    },
    {
      id: 'soleil',
      tier: 1,
      type: 'text',
      kicker: "Âge d'or",
      title: 'La pyramide du Soleil',
      body:
        "Achevée vers l'an 200, la pyramide du Soleil mesure environ 65 m de haut pour 225 m de côté : c'est l'une des plus grandes pyramides du monde. À l'autre bout de l'Allée des Morts se dresse la pyramide de la Lune.",
    },
    {
      id: 'obsidienne',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: "L'or noir : l'obsidienne",
      body:
        "La richesse de la ville repose en partie sur l'obsidienne, une roche volcanique qui ressemble à du verre. Taillée, elle donne des lames très tranchantes. Les ateliers de Teotihuacán produisent des outils et des armes échangés dans toute la Mésoamérique.",
    },
    {
      id: 'tikal',
      tier: 1,
      type: 'war',
      nom: "L'« arrivée » à Tikal",
      annee: 378,
      adversaires: ['Cité maya de Tikal (roi Chak Tok Ich’aak)'],
      allies: ['Teotihuacán (Siyaj K’ak’)'],
      vainqueur: 'Teotihuacán',
      consequences: "Selon les inscriptions mayas, Siyaj K'ak' arrive à Tikal le jour même où le roi local meurt. Un nouveau roi, fils d'un puissant seigneur lié à Teotihuacán, est installé. Le style de Teotihuacán se répand chez les Mayas.",
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Le grand incendie',
      body:
        "Vers 550 (les dates varient selon les chercheurs), les temples et les palais du centre sont incendiés et des statues brisées. Révolte contre les élites ou attaque extérieure ? On ne sait pas. La ville se vide peu à peu, mais ses ruines restent un lieu sacré.",
      highlight: { value: '≈ 550', label: 'incendie du centre de la ville' },
    },

    // ── Niveau 2 ──
    {
      id: 'serpent',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Le temple du Serpent à plumes',
      body:
        "Ce temple est orné de têtes de serpents à plumes et d'autres têtes, souvent rapprochées d'un dieu de l'orage. Sous ses fondations, les archéologues ont retrouvé plus d'une centaine de personnes sacrifiées, dont beaucoup de guerriers aux mains liées. Des siècles plus tard, les Aztèques vénèrent des dieux proches : Quetzalcoatl et Tlaloc.",
    },
    {
      id: 'sans-roi',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Une ville sans rois connus ?',
      body:
        "Contrairement aux cités mayas, Teotihuacán n'a laissé ni portraits de rois ni écriture longue : seulement des signes isolés. On ne connaît le nom d'aucun souverain. Certains chercheurs pensent que la ville était gouvernée par un conseil plutôt que par un seul roi.",
    },
    {
      id: 'quartiers',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Une ville cosmopolite',
      body:
        "Des étrangers vivent à Teotihuacán dans leurs propres quartiers : des Zapotèques venus d'Oaxaca, et des marchands liés à la côte du golfe du Mexique et au monde maya. Ils gardent leurs coutumes, leurs poteries et leurs tombes.",
    },
    {
      id: 'siyaj',
      tier: 2,
      type: 'person',
      nom: "Siyaj K'ak'",
      role: 'Chef de guerre lié à Teotihuacán',
      dates: 'actif vers 378',
      description: "Son nom maya signifie « le feu est né ». En 378, il arrive à Tikal, au Guatemala actuel ; en 379, Yax Nuun Ayiin y devient roi : c'est le fils d'un seigneur que les spécialistes appellent « Hibou lanceur de javelots ».",
    },
    {
      id: 'tunnel',
      tier: 2,
      type: 'dates',
      kicker: 'Connaissance',
      title: 'Teotihuacán redécouverte',
      items: [
        { year: 1905, label: 'Restauration de la pyramide du Soleil par Leopoldo Batres' },
        { year: 1987, label: "Inscription au patrimoine mondial de l'UNESCO" },
        { year: 2003, label: 'Découverte d’un tunnel sous le temple du Serpent à plumes' },
      ],
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve Teotihuacán ?', options: ['Le Mexique', 'Le Pérou', 'Le Guatemala', 'La Bolivie'], answer: 0 },
    { id: 'essor', type: 'mcq', prompt: 'Vers quelle date la ville commence-t-elle à grandir ?', options: ['Vers 100 av. J.-C.', 'Vers 1325', 'Vers 2600 av. J.-C.', 'Vers 900'], answer: 0 },
    { id: 'nom', type: 'mcq', prompt: 'Quel peuple a donné son nom à Teotihuacán ?', options: ['Les Aztèques', 'Les Olmèques', 'Les Espagnols', 'Les Incas'], answer: 0 },
    { id: 'sens', type: 'mcq', prompt: 'Que signifie à peu près « Teotihuacán » ?', options: ['Le lieu où naissent les dieux', 'La ville du lac', 'La montagne de jade', 'Le pays du maïs'], answer: 0 },
    { id: 'taille', type: 'tf', prompt: 'Vers 400-500, Teotihuacán est la plus grande ville des Amériques.', answer: true },
    { id: 'habitants', type: 'mcq', prompt: 'Combien d’habitants compte la ville à son apogée, selon les estimations ?', options: ['Environ 100 000', 'Environ 1 000', 'Environ 10 millions', 'Environ 5 000'], answer: 0 },
    { id: 'allee', type: 'mcq', prompt: 'Comment s’appelle la grande avenue de la ville ?', options: ["L'Allée des Morts", 'La Voie sacrée', 'Le Qhapaq Ñan', 'La Grande Muraille'], answer: 0 },
    { id: 'pyramide', type: 'mcq', prompt: 'Quelle est la plus grande pyramide de Teotihuacán ?', options: ['La pyramide du Soleil', 'La pyramide de la Lune', 'La Pirámide Mayor', "L'Akapana"], answer: 0 },
    { id: 'obsidienne', type: 'mcq', prompt: 'Quelle roche volcanique fait la richesse de la ville ?', options: ["L'obsidienne", 'Le marbre', 'Le jade', "L'ardoise"], answer: 0 },
    { id: 'plan', type: 'tf', prompt: 'Teotihuacán est construite selon un plan quadrillé.', answer: true },
    { id: 'rois', type: 'tf', prompt: 'On connaît les noms et les portraits de nombreux rois de Teotihuacán.', answer: false, explanation: 'Aucun nom de souverain n’est connu : la ville n’a pas laissé de portraits de rois.' },
    { id: 'tikal', type: 'mcq', prompt: 'Quelle cité maya voit arriver Siyaj K’ak’ en 378 ?', options: ['Tikal', 'Palenque', 'Chichén Itzá', 'Copán'], answer: 0 },
    { id: 'serpent', type: 'mcq', prompt: 'Quel dieu, vénéré plus tard par les Aztèques, orne un grand temple de la ville ?', options: ['Le Serpent à plumes', 'Inti, le Soleil', 'Viracocha', 'Le Lanzón'], answer: 0 },
    { id: 'quartiers', type: 'mcq', prompt: 'Quels étrangers vivent dans un quartier de Teotihuacán ?', options: ["Des Zapotèques d'Oaxaca", 'Des Incas', 'Des Vikings', 'Des Espagnols'], answer: 0 },
    { id: 'fin', type: 'mcq', prompt: 'Que se passe-t-il vers 550 au centre de la ville ?', options: ['Les temples et palais sont incendiés', 'Les Espagnols arrivent', 'Un volcan engloutit la ville', 'Les Aztèques la fondent'], answer: 0 },
    { id: 'azteques', type: 'tf', prompt: 'Les Aztèques ont construit Teotihuacán.', answer: false, explanation: 'La ville était déjà en ruines depuis des siècles quand les Aztèques la découvrent.' },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Abandon de La Venta par les Olmèques', 'Achèvement de la pyramide du Soleil', 'Siyaj K’ak’ arrive à Tikal', 'Incendie du centre de Teotihuacán', 'Fondation de Tenochtitlan'] },
  ],

  recap: [
    'Vers 100 av. J.-C. – 550 : Teotihuacán, plus grande ville des Amériques',
    'Ville planifiée : Allée des Morts, pyramides du Soleil et de la Lune',
    "Richesse de l'obsidienne ; influence jusqu'à Tikal, chez les Mayas, en 378",
    'Centre incendié vers 550 ; les Aztèques en font « le lieu où naissent les dieux »',
  ],
}

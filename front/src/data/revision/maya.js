/** Chapitre rédigé : Civilisation maya (époque classique, vers 250 – 900, et suites). */
export default {
  readingTime: 5,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'cites',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Des cités-États, pas un empire',
      body:
        "Les Mayas n'ont jamais formé un empire unique. À l'époque classique (vers 250 – 900), des dizaines de cités-États, comme Tikal, Calakmul, Copán ou Palenque, se partagent les forêts du sud du Mexique, du Guatemala, du Belize et du Honduras. Chacune a son roi, le « seigneur divin ».",
      highlight: { value: '≈ 250 – 900', label: 'époque classique maya' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le monde maya',
      years: [600, 800, 1100],
      caption: "Comparez : les cités des basses terres du sud dominent à l'époque classique ; après 900, le cœur du monde maya se déplace vers le nord du Yucatán.",
    },
    {
      id: 'ecriture',
      tier: 1,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Une véritable écriture',
      body:
        "Les Mayas écrivent avec des glyphes : certains signes représentent des mots, d'autres des syllabes. C'est le système d'écriture le plus complet de l'Amérique précolombienne. Il est en grande partie déchiffré depuis la seconde moitié du XXe siècle.",
    },
    {
      id: 'zero',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Découvertes',
      value: '0',
      label: 'les Mayas utilisent le zéro dans leurs calculs',
      caption: "Ils comptent en base 20, avec un point pour 1, une barre pour 5 et un coquillage pour zéro. Ce zéro est l'un des plus anciens connus au monde.",
    },
    {
      id: 'calendrier',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Des calendriers et des astres',
      body:
        "Les prêtres combinent un calendrier rituel de 260 jours et une année solaire de 365 jours. Ils observent le Soleil, la Lune et Vénus, et savent prévoir les éclipses. Leur « compte long » s'achevait un cycle le 21 décembre 2012 : ce n'était pas une annonce de fin du monde !",
    },
    {
      id: 'pakal',
      tier: 1,
      type: 'person',
      nom: 'Pakal le Grand',
      role: 'Roi de Palenque',
      dates: '603 – 683 (règne 615 – 683)',
      description: "Monté sur le trône à 12 ans, il règne près de 70 ans et embellit Palenque. Son tombeau, caché sous le temple des Inscriptions, est découvert en 1952 : son visage était couvert d'un masque de jade.",
    },
    {
      id: 'tikal-calakmul',
      tier: 1,
      type: 'war',
      nom: 'Guerres entre Tikal et Calakmul',
      annee: 562,
      adversaires: ['Calakmul et ses alliés, dont Caracol'],
      allies: ['Tikal'],
      vainqueur: 'Calakmul, puis Tikal en 695',
      consequences: "En 562, Tikal est vaincue par Caracol, alliée de Calakmul, et décline pendant plus d'un siècle. En 695, le roi Jasaw Chan K'awiil Ier de Tikal bat Calakmul, qui ne retrouve plus sa puissance.",
    },
    {
      id: 'effondrement',
      tier: 1,
      type: 'text',
      kicker: 'Crise',
      title: "L'effondrement des cités classiques",
      body:
        "Au IXe siècle, les grandes cités du sud sont abandonnées les unes après les autres. Les chercheurs pensent que plusieurs causes se sont ajoutées : longues sécheresses, guerres incessantes, forêts surexploitées et population trop nombreuse.",
      highlight: { value: '≈ 800 – 900', label: 'abandon des grandes cités du sud' },
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Durée',
      title: 'Des cités classiques à la conquête espagnole',
      items: [
        { year: 562, label: 'Tikal vaincue par Caracol, alliée de Calakmul' },
        { year: 695, label: 'Tikal bat Calakmul' },
        { year: 900, label: "Fin de l'époque classique (date approximative)" },
        { year: 1542, label: 'Les Espagnols fondent Mérida, au Yucatán' },
        { year: 1697, label: 'Chute de Nojpetén, dernière cité maya indépendante' },
      ],
    },

    // ── Niveau 2 ──
    {
      id: 'sang',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Le sang offert aux dieux',
      body:
        "Pour nourrir les dieux et entrer en contact avec les ancêtres, rois et reines pratiquent l'autosacrifice : ils se percent la langue ou d'autres parties du corps pour offrir leur sang. Des prisonniers de guerre sont aussi sacrifiés.",
    },
    {
      id: 'jeu-de-balle',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Maïs, cacao et jeu de balle',
      body:
        "Le maïs est la base de l'alimentation : selon un mythe maya, les humains ont été façonnés avec de la pâte de maïs. Les élites boivent du cacao. Dans les cités, on joue au jeu de balle, à la fois sport et rituel, où la balle de caoutchouc se frappe avec les hanches.",
    },
    {
      id: 'chichen',
      tier: 2,
      type: 'text',
      kicker: 'Fluctuations',
      title: 'Chichén Itzá et le Yucatán',
      body:
        "Après l'effondrement du sud, de nouvelles cités prospèrent dans le nord du Yucatán. Chichén Itzá domine la région vers 900 – 1100 environ, avec sa grande pyramide, El Castillo. Mayapán prend ensuite le relais jusqu'au milieu du XVe siècle.",
    },
    {
      id: 'landa',
      tier: 2,
      type: 'person',
      nom: 'Diego de Landa',
      role: 'Moine franciscain espagnol',
      dates: '1524 – 1579',
      description: "En 1562, à Maní, il fait brûler des livres mayas qu'il juge diaboliques. Paradoxalement, ses notes sur l'écriture maya aideront plus tard à la déchiffrer. Seuls quatre livres mayas anciens, les codex, nous sont parvenus.",
    },
    {
      id: 'aujourdhui',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Les Mayas aujourd’hui',
      body:
        "Les Mayas n'ont pas disparu : plusieurs millions de personnes parlent encore des langues mayas au Mexique, au Guatemala et au Belize. Depuis 2018, des relevés au laser (lidar) révèlent dans la forêt des milliers de bâtiments et de routes encore inconnus.",
    },
  ],

  quiz: [
    { id: 'empire', type: 'tf', prompt: 'Les Mayas forment un grand empire unifié dirigé par un seul empereur.', answer: false, explanation: "Les Mayas sont organisés en dizaines de cités-États rivales, chacune avec son roi." },
    { id: 'periode', type: 'mcq', prompt: "Quelle période correspond à l'époque classique maya ?", options: ['Vers 250 – 900', 'Vers 1200 – 1521', 'Vers 3000 – 1000 av. J.-C.', 'Vers 1500 – 1800'], answer: 0 },
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve Tikal ?', options: ['Le Guatemala', 'Le Pérou', 'La Colombie', 'Cuba'], answer: 0 },
    { id: 'rivale', type: 'mcq', prompt: 'Quelle cité est la grande rivale de Tikal ?', options: ['Calakmul', 'Tenochtitlan', 'Cuzco', 'Teotihuacán'], answer: 0 },
    { id: 'caracol', type: 'mcq', prompt: 'Quelle cité, alliée de Calakmul, bat Tikal en 562 ?', options: ['Caracol', 'Palenque', 'Copán', 'Chichén Itzá'], answer: 0 },
    { id: 'pakal', type: 'mcq', prompt: 'De quelle cité Pakal le Grand est-il roi ?', options: ['Palenque', 'Tikal', 'Calakmul', 'Mayapán'], answer: 0 },
    { id: 'masque', type: 'mcq', prompt: 'En quelle matière est le masque funéraire de Pakal ?', options: ['En jade', 'En or', 'En argent', 'En bois'], answer: 0 },
    { id: 'ecriture', type: 'tf', prompt: "Les Mayas possèdent un véritable système d'écriture.", answer: true },
    { id: 'glyphes', type: 'mcq', prompt: 'Comment appelle-t-on les signes de l’écriture maya ?', options: ['Des glyphes', 'Des quipus', 'Des runes', 'Des cunéiformes'], answer: 0 },
    { id: 'base', type: 'mcq', prompt: 'Dans quelle base les Mayas comptent-ils ?', options: ['Base 20', 'Base 10', 'Base 60', 'Base 2'], answer: 0 },
    { id: 'zero', type: 'tf', prompt: 'Les Mayas utilisent le zéro.', answer: true },
    { id: 'calendrier', type: 'mcq', prompt: 'Combien de jours compte le calendrier rituel maya ?', options: ['260', '365', '100', '360'], answer: 0 },
    { id: '2012', type: 'mcq', prompt: 'Que représente le 21 décembre 2012 dans le calendrier maya ?', options: ['La fin d’un cycle du compte long', 'La fin du monde annoncée', 'La naissance de Pakal', 'La chute de Tikal'], answer: 0 },
    { id: 'effondrement', type: 'mcq', prompt: 'Quelle cause a contribué à l’abandon des cités classiques au IXe siècle ?', options: ['De longues sécheresses', 'La conquête espagnole', 'Une invasion mongole', 'Une épidémie de peste venue d’Europe'], answer: 0 },
    { id: 'chichen', type: 'mcq', prompt: 'Quelle cité du Yucatán prospère après l’effondrement du sud ?', options: ['Chichén Itzá', 'Tikal', 'Calakmul', 'Machu Picchu'], answer: 0 },
    { id: 'jeu', type: 'mcq', prompt: 'Avec quoi frappe-t-on la balle au jeu de balle maya ?', options: ['Les hanches', 'Une raquette', 'Une batte en bois', 'Les mains uniquement'], answer: 0 },
    { id: 'landa', type: 'mcq', prompt: 'Que fait Diego de Landa à Maní en 1562 ?', options: ['Il fait brûler des livres mayas', 'Il fonde Mérida', 'Il découvre le tombeau de Pakal', 'Il conquiert Tikal'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Défaite de Tikal face à Caracol', 'Tikal bat Calakmul', 'Fondation de Mérida par les Espagnols', 'Chute de Nojpetén'] },
  ],

  recap: [
    'Vers 250 – 900 : des cités-États rivales, comme Tikal et Calakmul',
    'Écriture en glyphes, zéro, base 20 et calendriers précis',
    'IXe siècle : effondrement des cités du sud, essor du Yucatán',
    'Les Mayas existent toujours : des millions parlent une langue maya',
  ],
}

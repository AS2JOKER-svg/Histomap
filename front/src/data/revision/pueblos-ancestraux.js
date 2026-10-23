/** Chapitre rédigé : Pueblos ancestraux (vers 750 – 1300). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'desert',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Des paysans du désert',
      body:
        "Dans les déserts du sud-ouest des États-Unis, là où se rejoignent l'Arizona, le Nouveau-Mexique, le Colorado et l'Utah, des paysans cultivent le maïs, les haricots et les courges en recueillant chaque goutte de pluie.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le pays des Pueblos ancestraux',
      years: [900],
      caption: 'Vers 900, les Pueblos ancestraux occupent la région des « Four Corners ».',
    },
    {
      id: 'pueblos',
      tier: 1,
      type: 'text',
      kicker: 'Architecture',
      title: 'Des villages de pierre',
      body:
        "À partir de 750 environ, ils construisent des villages de maisons accolées, en pierre et en adobe, sur plusieurs étages. Les Espagnols appelleront plus tard ces villages des « pueblos ».",
      highlight: { value: 'vers 750', label: 'premiers villages pueblos' },
    },
    {
      id: 'kivas',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Les kivas',
      body:
        "Les cérémonies ont lieu dans les kivas, des salles rondes souvent enterrées, où l'on entre par une échelle à travers le toit. Elles sont toujours utilisées par les peuples pueblos d'aujourd'hui.",
    },
    {
      id: 'chaco',
      tier: 1,
      type: 'text',
      kicker: 'Ville',
      title: 'Chaco Canyon',
      body:
        "De 850 à 1150 environ, Chaco Canyon devient le grand centre de la région. Pueblo Bonito compte des centaines de pièces sur quatre ou cinq étages, et des routes rectilignes relient Chaco à des dizaines de villages.",
    },
    {
      id: 'echanges',
      tier: 1,
      type: 'text',
      kicker: 'Échanges',
      title: 'Turquoise, aras et cacao',
      body:
        "À Chaco, on a retrouvé des milliers d'objets de turquoise, des squelettes d'aras rouges venus du Mexique et des traces de cacao dans des vases : la preuve d'échanges à très longue distance.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les Pueblos ancestraux en dates',
      items: [
        { year: 750, label: 'Premiers villages pueblos' },
        { year: 850, label: 'Grandes maisons de Chaco' },
        { year: 1130, label: 'Début d’une longue sécheresse' },
        { year: 1190, label: 'Villages des falaises de Mesa Verde' },
        { year: 1300, label: 'Grandes migrations' },
      ],
    },
    {
      id: 'mesaverde',
      tier: 1,
      type: 'text',
      kicker: 'Architecture',
      title: 'Les villages des falaises',
      body:
        "Au XIIIe siècle, beaucoup d'habitants s'installent à l'abri de grandes falaises, comme à Mesa Verde, dans le Colorado. Le plus grand village, le Cliff Palace, compte environ 150 pièces.",
    },
    {
      id: 'migrations',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Le grand départ',
      body:
        "Vers 1300, une grande sécheresse et des conflits poussent les habitants à quitter la région. Ils rejoignent le sud et l'est : leurs descendants sont les Hopi, les Zuni et les autres peuples pueblos d'aujourd'hui.",
    },

    // ── Niveau 2 ──
    {
      id: 'eau',
      tier: 2,
      type: 'text',
      kicker: 'Techniques',
      title: 'Recueillir la pluie',
      body:
        "Pour cultiver dans le désert, ils construisent de petits barrages, des canaux et des réservoirs qui recueillent l'eau des orages.",
    },
    {
      id: 'soleil',
      tier: 2,
      type: 'text',
      kicker: 'Sciences',
      title: 'Le Soleil et la Lune',
      body:
        "Certains bâtiments de Chaco sont alignés sur les levers du Soleil et de la Lune. Une gravure sur une butte semble marquer les solstices grâce à un rayon de lumière.",
    },
    {
      id: 'poterie',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'Les poteries noir et blanc',
      body:
        "Les potières décorent leurs vases de motifs géométriques noirs sur fond blanc, que l'on retrouve dans toute la région.",
    },
    {
      id: 'nom',
      tier: 2,
      type: 'text',
      kicker: 'Mots',
      title: 'Anasazi ou Pueblos ancestraux ?',
      body:
        "On les a longtemps appelés « Anasazi », un mot venu de la langue navajo. Les peuples pueblos préfèrent aujourd'hui parler de « Pueblos ancestraux ».",
    },
    {
      id: 'unesco',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Au patrimoine mondial',
      body:
        "Mesa Verde, inscrite en 1978, est l'un des tout premiers sites du patrimoine mondial de l'UNESCO ; la culture chaco l'est depuis 1987.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel vivaient les Pueblos ancestraux ?', options: ['Les États-Unis', 'Le Mexique', 'Le Canada', 'Le Pérou'], answer: 0 },
    { id: 'milieu', type: 'mcq', prompt: 'Dans quel milieu vivent-ils ?', options: ['Un désert', 'Une forêt tropicale', 'Une côte glacée', 'Une île'], answer: 0 },
    { id: 'cultures', type: 'mcq', prompt: 'Quelles plantes cultivent-ils ?', options: ['Maïs, haricots et courges', 'Blé, orge et vigne', 'Riz et thé', 'Manioc et cacao'], answer: 0 },
    { id: 'kiva', type: 'mcq', prompt: 'Qu’est-ce qu’une kiva ?', options: ['Une salle de cérémonie ronde', 'Une poterie', 'Une route', 'Un barrage'], answer: 0 },
    { id: 'chaco', type: 'mcq', prompt: 'Quel est le grand centre des Pueblos ancestraux vers 1050 ?', options: ['Chaco Canyon', 'Cahokia', 'Tula', 'Chan Chan'], answer: 0 },
    { id: 'bonito', type: 'mcq', prompt: 'Combien de pièces compte Pueblo Bonito ?', options: ['Plusieurs centaines', 'Une dizaine', 'Une seule', 'Plusieurs millions'], answer: 0 },
    { id: 'routes', type: 'tf', prompt: 'Des routes rectilignes relient Chaco Canyon à d’autres villages.', answer: true },
    { id: 'aras', type: 'mcq', prompt: 'D’où viennent les aras rouges retrouvés à Chaco ?', options: ['Du Mexique', 'D’Europe', 'D’Afrique', 'D’Australie'], answer: 0 },
    { id: 'mesaverde', type: 'mcq', prompt: 'Où se trouvent les célèbres villages des falaises ?', options: ['À Mesa Verde', 'À Chaco Canyon', 'À Cahokia', 'À Monte Albán'], answer: 0 },
    { id: 'cliff', type: 'mcq', prompt: 'Comment s’appelle le plus grand village des falaises de Mesa Verde ?', options: ['Le Cliff Palace', 'Le Monks Mound', 'Pueblo Bonito', 'Chan Chan'], answer: 0 },
    { id: 'secheresse', type: 'mcq', prompt: 'Qu’est-ce qui pousse les habitants à partir vers 1300 ?', options: ['Une grande sécheresse et des conflits', 'Une invasion espagnole', 'Une éruption volcanique', 'Un tsunami'], answer: 0 },
    { id: 'descendants', type: 'mcq', prompt: 'Quels peuples actuels descendent des Pueblos ancestraux ?', options: ['Les Hopi et les Zuni', 'Les Aztèques', 'Les Inuits', 'Les Mapuches'], answer: 0 },
    { id: 'anasazi', type: 'mcq', prompt: 'De quelle langue vient le mot « Anasazi » ?', options: ['Du navajo', 'De l’espagnol', 'Du latin', 'Du nahuatl'], answer: 0 },
    { id: 'eau', type: 'tf', prompt: 'Les Pueblos ancestraux construisent des barrages et des réservoirs pour recueillir la pluie.', answer: true },
    { id: 'poterie', type: 'mcq', prompt: 'De quelles couleurs sont leurs poteries typiques ?', options: ['Noir et blanc', 'Rouge et or', 'Bleu et vert', 'Violet et jaune'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Premiers villages pueblos', 'Grandes maisons de Chaco', 'Villages des falaises de Mesa Verde', 'Grandes migrations'] },
  ],

  recap: [
    'Des paysans du désert du sud-ouest des États-Unis, à partir de 750 environ',
    'Villages de pierre, kivas, et le grand centre de Chaco Canyon',
    'Au XIIIe siècle, les villages des falaises de Mesa Verde',
    'Vers 1300, sécheresse et migrations : leurs descendants sont les peuples pueblos actuels',
  ],
}

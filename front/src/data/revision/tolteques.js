/** Chapitre rédigé : Toltèques (vers 900 – 1168). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'tula',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Tula, la cité des Toltèques',
      body:
        "Après la chute de Teotihuacan, des groupes venus du nord s'installent à Tula, au nord de l'actuelle Mexico. Vers 900, la ville devient la capitale d'un puissant État guerrier.",
      highlight: { value: 'vers 900', label: 'essor de Tula' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Les Toltèques',
      years: [1000],
      caption: 'Les Toltèques dominent une partie du centre du Mexique depuis Tula.',
    },
    {
      id: 'atlantes',
      tier: 1,
      type: 'text',
      kicker: 'Art',
      title: 'Les Atlantes',
      body:
        "Au sommet d'une pyramide de Tula se dressent quatre colonnes de basalte d'environ 4,6 mètres, en forme de guerriers armés : les Atlantes. Elles soutenaient autrefois le toit d'un temple.",
      highlight: { value: '4,6 m', label: 'hauteur des Atlantes' },
    },
    {
      id: 'guerriers',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Un peuple de guerriers',
      body:
        "Une élite de rois, de prêtres et de guerriers gouverne. Les guerriers sont organisés en ordres, représentés sur les frises de Tula par des jaguars, des coyotes et des aigles.",
    },
    {
      id: 'obsidienne',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Le commerce de l’obsidienne',
      body:
        "Les Toltèques contrôlent l'obsidienne verte, une pierre volcanique tranchante, et commercent très loin : la turquoise de Tula vient du sud-ouest des États-Unis actuels.",
    },
    {
      id: 'quetzalcoatl',
      tier: 1,
      type: 'person',
      nom: 'Topiltzin Quetzalcoatl',
      role: 'Roi-prêtre légendaire',
      dates: 'Xe siècle (tradition)',
      description:
        "Selon la tradition aztèque, ce roi-prêtre de Tula aurait été chassé par les partisans du dieu Tezcatlipoca et serait parti vers l'est en promettant de revenir. Histoire et légende s'y mêlent.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les Toltèques en dates',
      items: [
        { year: 900, label: 'Essor de Tula' },
        { year: 950, label: 'Apogée de Tula' },
        { year: 1000, label: 'Les Atlantes' },
        { year: 1168, label: 'Chute de Tula (tradition)' },
      ],
    },
    {
      id: 'chute',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'La chute de Tula',
      body:
        "Au XIIe siècle, Tula est incendiée et abandonnée ; selon la tradition, vers 1168. Des peuples venus du nord, dont les ancêtres des Aztèques, arrivent dans la vallée de Mexico.",
    },
    {
      id: 'modele',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Un modèle pour les Aztèques',
      body:
        "Pour les Aztèques, les Toltèques étaient les « maîtres de tous les arts » : être toltèque voulait dire être un grand artiste. Les rois aztèques se disaient descendants des rois de Tula.",
    },

    // ── Niveau 2 ──
    {
      id: 'chacmool',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Les chac-mools',
      body:
        "Les Toltèques sculptent des chac-mools, des personnages couchés qui tiennent un récipient sur le ventre, sans doute pour recevoir des offrandes.",
    },
    {
      id: 'tzompantli',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Le mur de crânes',
      body:
        "À Tula, un mur décoré de crânes sculptés, le tzompantli, évoque les sacrifices humains pratiqués, comme ailleurs en Mésoamérique.",
    },
    {
      id: 'chichen',
      tier: 2,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Le mystère de Chichén Itzá',
      body:
        "Certains monuments de la cité maya de Chichén Itzá, au Yucatán, ressemblent beaucoup à ceux de Tula. Les historiens débattent encore de la nature des liens entre les deux cités.",
    },
    {
      id: 'dieux',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Deux dieux rivaux',
      body:
        "Les Toltèques honorent Quetzalcoatl, le Serpent à plumes, et Tezcatlipoca, le « miroir fumant », dieu de la nuit et de la guerre. La légende raconte leur rivalité.",
    },
    {
      id: 'cortes',
      tier: 2,
      type: 'text',
      kicker: 'Légende',
      title: 'Le retour attendu ?',
      body:
        "Des chroniques espagnoles affirment que Moctezuma II aurait pris Cortés pour Quetzalcoatl revenu de l'est. Beaucoup d'historiens pensent aujourd'hui que ce récit a été inventé après la conquête.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve Tula ?', options: ['Le Mexique', 'Le Pérou', 'Le Guatemala', 'Les États-Unis'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale des Toltèques ?', options: ['Tula', 'Tenochtitlan', 'Teotihuacan', 'Monte Albán'], answer: 0 },
    { id: 'avant', type: 'mcq', prompt: 'Après la chute de quelle grande cité Tula se développe-t-elle ?', options: ['Teotihuacan', 'Rome', 'Cuzco', 'Babylone'], answer: 0 },
    { id: 'atlantes', type: 'mcq', prompt: 'Que représentent les Atlantes de Tula ?', options: ['Des guerriers', 'Des dieux de la mer', 'Des rois espagnols', 'Des animaux'], answer: 0 },
    { id: 'matiere', type: 'mcq', prompt: 'En quelle pierre les Atlantes sont-ils sculptés ?', options: ['Le basalte', 'Le marbre', 'Le jade', 'L’or'], answer: 0 },
    { id: 'ordres', type: 'mcq', prompt: 'Quels animaux représentent les ordres de guerriers ?', options: ['Jaguars, coyotes et aigles', 'Lions, ours et loups', 'Dragons et serpents', 'Chevaux et taureaux'], answer: 0 },
    { id: 'obsidienne', type: 'mcq', prompt: 'Quelle pierre les Toltèques contrôlent-ils ?', options: ['L’obsidienne', 'Le diamant', 'Le charbon', 'Le sel'], answer: 0 },
    { id: 'turquoise', type: 'tf', prompt: 'La turquoise trouvée à Tula venait du sud-ouest des États-Unis actuels.', answer: true },
    { id: 'quetzalcoatl', type: 'mcq', prompt: 'Que signifie le nom du dieu Quetzalcoatl ?', options: ['Le Serpent à plumes', 'Le Miroir fumant', 'Le Soleil levant', 'Le Jaguar noir'], answer: 0 },
    { id: 'topiltzin', type: 'mcq', prompt: 'Selon la tradition, que fait Topiltzin Quetzalcoatl chassé de Tula ?', options: ['Il part vers l’est en promettant de revenir', 'Il devient roi des Incas', 'Il fonde Rome', 'Il se retire dans un monastère'], answer: 0 },
    { id: 'chacmool', type: 'mcq', prompt: 'Qu’est-ce qu’un chac-mool ?', options: ['Une statue couchée tenant un récipient', 'Une pyramide', 'Une arme', 'Un calendrier'], answer: 0 },
    { id: 'chute', type: 'mcq', prompt: 'Au cours de quel siècle Tula est-elle abandonnée ?', options: ['Le XIIe siècle', 'Le Ve siècle', 'Le XVIe siècle', 'Le Ier siècle'], answer: 0 },
    { id: 'azteques', type: 'mcq', prompt: 'Quel peuple voit plus tard dans les Toltèques des ancêtres prestigieux ?', options: ['Les Aztèques', 'Les Incas', 'Les Espagnols', 'Les Mochicas'], answer: 0 },
    { id: 'chichen', type: 'mcq', prompt: 'Quelle cité maya ressemble beaucoup à Tula ?', options: ['Chichén Itzá', 'Tikal', 'Palenque', 'Copán'], answer: 0 },
    { id: 'cortes', type: 'tf', prompt: 'Tous les historiens sont certains que Moctezuma a pris Cortés pour Quetzalcoatl.', answer: false, explanation: 'Beaucoup pensent que ce récit a été inventé après la conquête.' },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Essor de Tula', 'Apogée de Tula', 'Les Atlantes', 'Chute de Tula (tradition)'] },
  ],

  recap: [
    'Vers 900, Tula devient la capitale d’un État guerrier du centre du Mexique',
    'Atlantes, ordres de guerriers, commerce de l’obsidienne',
    'La légende du roi-prêtre Topiltzin Quetzalcoatl',
    'Tula est incendiée au XIIe siècle ; les Aztèques en font leurs ancêtres prestigieux',
  ],
}

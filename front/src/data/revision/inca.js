/** Chapitre rédigé : Empire inca (1438 – 1533). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'pachacutec',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Pachacútec transforme Cuzco',
      body:
        "Vers 1438, l'Inca Pachacútec repousse les Chancas qui menacent Cuzco, petit royaume des Andes, puis se lance dans de grandes conquêtes. Son nom signifie « celui qui transforme le monde ».",
      highlight: { value: '1438', label: 'début du règne de Pachacútec' },
    },
    {
      id: 'tawantinsuyu',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Apogée',
      value: '≈ 4 000 km',
      label: "du nord au sud : le plus grand empire d'Amérique",
      caption: "Le Tawantinsuyu, « les quatre parties réunies », s'étend de l'Équateur au Chili, le long de la cordillère des Andes, et compte environ 10 millions d'habitants.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Un empire étiré le long des Andes',
      years: [1500, 1530],
      caption: "Des montagnes à plus de 4 000 m, des déserts côtiers et la forêt amazonienne à l'est.",
    },
    {
      id: 'routes',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Les routes et les chasquis',
      body:
        "Un réseau de près de 40 000 km de routes, avec ponts suspendus en fibres végétales, relie l'empire. Des coureurs, les chasquis, se relaient pour porter les messages : environ 240 km par jour !",
    },
    {
      id: 'quipu',
      tier: 1,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Le quipu, des nœuds pour compter',
      body:
        "Les Incas n'ont pas d'écriture. Pour tenir les comptes (habitants, récoltes, tributs), ils utilisent des quipus : des cordelettes de couleurs avec des nœuds qui représentent des nombres.",
    },
    {
      id: 'machu-picchu',
      tier: 1,
      type: 'text',
      kicker: "Âge d'or",
      title: 'Machu Picchu',
      body:
        "Vers 1450, Pachacútec fait bâtir sur une crête à 2 400 m d'altitude un domaine royal : Machu Picchu. Les blocs de pierre sont taillés si précisément qu'ils s'emboîtent sans mortier. Oubliée des Espagnols, la cité est révélée au monde en 1911.",
    },
    {
      id: 'soleil',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Les fils du Soleil',
      body:
        "L'empereur, appelé le Sapa Inca, est considéré comme le fils d'Inti, le dieu Soleil. Le Coricancha, temple de Cuzco, était couvert de plaques d'or. Les Incas honorent aussi la Pachamama, la Terre-Mère.",
    },
    {
      id: 'conquete',
      tier: 1,
      type: 'dates',
      kicker: 'Fin',
      title: 'La fin de l’empire',
      items: [
        { year: 1529, label: 'Guerre civile entre Huáscar et Atahualpa' },
        { year: 1532, label: 'Pizarro capture Atahualpa à Cajamarca' },
        { year: 1533, label: 'Exécution d’Atahualpa ; les Espagnols entrent dans Cuzco' },
      ],
    },
    {
      id: 'pizarro',
      tier: 1,
      type: 'person',
      nom: 'Francisco Pizarro',
      role: 'Conquistador espagnol',
      dates: 'vers 1478 – 1541',
      description: "Avec moins de 200 hommes, il profite de la guerre civile et des épidémies pour capturer l'empereur. Il fonde Lima en 1535 et meurt assassiné par des Espagnols rivaux.",
    },

    // ── Niveau 2 ──
    {
      id: 'atahualpa',
      tier: 2,
      type: 'person',
      nom: 'Atahualpa',
      role: 'Dernier Sapa Inca indépendant',
      dates: 'vers 1502 – 1533',
      description: "Vainqueur de son demi-frère Huáscar, il est capturé par Pizarro. Pour être libéré, il promet de remplir une salle d'or et deux d'argent ; la rançon est payée, mais il est exécuté.",
    },
    {
      id: 'cajamarca',
      tier: 2,
      type: 'war',
      nom: 'Embuscade de Cajamarca',
      annee: 1532,
      adversaires: ['Conquistadors de Pizarro'],
      allies: ["Escorte d'Atahualpa"],
      vainqueur: 'Les Espagnols',
      consequences: "Surpris par les canons, les chevaux et les armes d'acier, les Incas, venus presque sans armes, sont massacrés. Privé de son empereur, l'empire est paralysé.",
    },
    {
      id: 'mita',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Le travail pour l’État',
      body:
        "Il n'y a pas de monnaie. Chaque communauté paysanne (ayllu) doit à l'État un temps de travail, la mita : routes, terrasses, armée. En échange, l'État stocke de la nourriture dans des greniers pour les années de disette.",
    },
    {
      id: 'terrasses',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Cultiver la montagne',
      body:
        "Sur les pentes, les Incas aménagent des terrasses irriguées. Ils cultivent des centaines de variétés de pommes de terre, qu'ils savent lyophiliser (le chuño), ainsi que le maïs et le quinoa. Les lamas servent au transport et donnent leur laine.",
    },
    {
      id: 'resistance',
      tier: 2,
      type: 'text',
      kicker: 'Fin',
      title: 'La résistance de Vilcabamba',
      body:
        "Des Incas continuent la lutte dans la forêt de Vilcabamba pendant près de quarante ans. Le dernier, Túpac Amaru, est capturé et exécuté par les Espagnols en 1572.",
    },
  ],

  quiz: [
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale des Incas ?', options: ['Cuzco', 'Lima', 'Tenochtitlan', 'Quito'], answer: 0 },
    { id: 'montagnes', type: 'mcq', prompt: 'Dans quelle chaîne de montagnes se trouve l’Empire inca ?', options: ['Les Andes', 'Les Rocheuses', "L'Himalaya", 'Les Alpes'], answer: 0 },
    { id: 'pachacutec', type: 'mcq', prompt: "Quel empereur lance l'expansion inca vers 1438 ?", options: ['Pachacútec', 'Atahualpa', 'Huáscar', 'Túpac Amaru'], answer: 0 },
    { id: 'nom', type: 'mcq', prompt: 'Comment les Incas appellent-ils leur empire ?', options: ['Tawantinsuyu', 'Tenochtitlan', 'Pachamama', 'Coricancha'], answer: 0 },
    { id: 'taille', type: 'tf', prompt: "L'Empire inca est le plus grand empire de l'Amérique précolombienne.", answer: true },
    { id: 'chasquis', type: 'mcq', prompt: 'Qui sont les chasquis ?', options: ['Des coureurs messagers', 'Des prêtres', 'Des soldats d’élite', 'Des architectes'], answer: 0 },
    { id: 'quipu', type: 'mcq', prompt: 'Que sont les quipus ?', options: ['Des cordelettes à nœuds pour compter', 'Des tablettes d’argile', 'Des temples', 'Des pièces de monnaie'], answer: 0 },
    { id: 'ecriture', type: 'tf', prompt: 'Les Incas utilisent une écriture alphabétique.', answer: false, explanation: 'Ils n’ont pas d’écriture ; ils comptent avec les quipus.' },
    { id: 'machu', type: 'mcq', prompt: 'Quand Machu Picchu est-il révélé au monde ?', options: ['1911', '1532', '1789', '1969'], answer: 0 },
    { id: 'mortier', type: 'tf', prompt: "À Machu Picchu, les pierres s'emboîtent sans mortier.", answer: true },
    { id: 'inti', type: 'mcq', prompt: 'De quel dieu le Sapa Inca est-il le fils ?', options: ['Inti, le Soleil', 'Tlaloc, la pluie', 'Quetzalcoatl', 'Viracocha, la Lune'], answer: 0 },
    { id: 'pachamama', type: 'mcq', prompt: 'Que représente la Pachamama ?', options: ['La Terre-Mère', 'Le Soleil', 'La guerre', 'La mer'], answer: 0 },
    { id: 'pizarro', type: 'mcq', prompt: 'Quel conquistador abat l’Empire inca ?', options: ['Francisco Pizarro', 'Hernán Cortés', 'Magellan', 'Diego de Almagro'], answer: 0 },
    { id: 'cajamarca', type: 'mcq', prompt: 'Où Atahualpa est-il capturé en 1532 ?', options: ['Cajamarca', 'Cuzco', 'Lima', 'Machu Picchu'], answer: 0 },
    { id: 'guerre-civile', type: 'mcq', prompt: "Contre qui Atahualpa mène-t-il une guerre civile ?", options: ['Son demi-frère Huáscar', 'Pachacútec', 'Les Aztèques', 'Túpac Amaru'], answer: 0 },
    { id: 'rancon', type: 'mcq', prompt: 'Que promet Atahualpa pour être libéré ?', options: ["Une salle remplie d'or", 'La moitié de son empire', 'Mille lamas', 'Sa conversion'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Pachacútec repousse les Chancas', 'Construction de Machu Picchu', 'Capture d’Atahualpa', 'Exécution de Túpac Amaru'] },
    { id: 'lima', type: 'mcq', prompt: 'Quelle ville Pizarro fonde-t-il en 1535 ?', options: ['Lima', 'Cuzco', 'Quito', 'Santiago'], answer: 0 },
  ],

  recap: [
    '1438 : Pachacútec fait de Cuzco la capitale d’un immense empire andin',
    'Routes, chasquis, quipus et terrasses : un État très organisé, sans écriture',
    'Machu Picchu (vers 1450), domaine royal révélé en 1911',
    '1532-1533 : Pizarro capture et exécute Atahualpa',
  ],
}

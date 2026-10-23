/** Chapitre rédigé : Royaume chimú (vers 900 – 1470). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'chimor',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Le royaume de Chimor',
      body:
        "Vers 900, sur la côte désertique du nord du Pérou, là où vivaient les Mochicas, naît le royaume de Chimor. Selon la tradition, son fondateur, Tacaynamo, serait arrivé par la mer sur un radeau.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le royaume chimú',
      years: [1100, 1400],
      caption: 'Comparez : le royaume s’étend le long de la côte, jusqu’à contrôler plus de 1 000 km de littoral.',
    },
    {
      id: 'chanchan',
      tier: 1,
      type: 'text',
      kicker: 'Ville',
      title: 'Chan Chan, la ville de terre',
      body:
        "La capitale, Chan Chan, couvre une vingtaine de kilomètres carrés : c'est la plus grande ville en terre crue des Amériques. Ses murs sont décorés de reliefs de poissons, d'oiseaux et de vagues.",
      highlight: { value: '20 km²', label: 'superficie de Chan Chan' },
    },
    {
      id: 'palais',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Un palais par roi',
      body:
        "Chan Chan compte une dizaine de grands enclos aux murs très hauts. Chaque nouveau roi aurait fait construire le sien, qui servait de palais, d'entrepôt, puis de tombeau.",
    },
    {
      id: 'canaux',
      tier: 1,
      type: 'text',
      kicker: 'Techniques',
      title: 'Des canaux entre les vallées',
      body:
        "Les Chimús creusent des canaux de plusieurs dizaines de kilomètres qui relient plusieurs vallées et irriguent le désert.",
    },
    {
      id: 'lune',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'La Lune plus forte que le Soleil',
      body:
        "Pour les Chimús, la divinité principale est la Lune, Si, plus puissante que le Soleil qui brûle le désert. Elle commande les marées, les orages et la croissance des plantes.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les Chimús en dates',
      items: [
        { year: 900, label: 'Débuts de Chan Chan' },
        { year: 1375, label: 'Conquête de Lambayeque' },
        { year: 1450, label: 'Sacrifices de Huanchaquito' },
        { year: 1470, label: 'Conquête inca' },
      ],
    },
    {
      id: 'incas',
      tier: 1,
      type: 'war',
      nom: 'Conquête inca du Chimor',
      annee: 1470,
      adversaires: ['Empire inca (Túpac Inca Yupanqui)'],
      allies: ['Royaume chimú (Minchançaman)'],
      vainqueur: 'Empire inca',
      consequences:
        "Selon les chroniques, les Incas coupent les canaux qui alimentent Chan Chan pour forcer sa reddition. Le roi Minchançaman et les meilleurs artisans sont emmenés à Cuzco.",
    },
    {
      id: 'unesco',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Une ville en péril',
      body:
        "Chan Chan est inscrite au patrimoine mondial de l'UNESCO depuis 1986, et sur la liste du patrimoine en péril : la pluie et le vent menacent ses murs de terre.",
    },

    // ── Niveau 2 ──
    {
      id: 'or',
      tier: 2,
      type: 'text',
      kicker: 'Art',
      title: 'Les orfèvres',
      body:
        "Les orfèvres chimús martèlent et soudent l'or et l'argent pour fabriquer des parures, des masques et des vases. Une partie de l'orfèvrerie inca a ensuite été réalisée par des artisans chimús emmenés à Cuzco.",
    },
    {
      id: 'huanchaquito',
      tier: 2,
      type: 'text',
      kicker: 'Archéologie',
      title: 'Les sacrifices de Huanchaquito',
      body:
        "Vers 1450, plus de 130 enfants et 200 jeunes lamas sont sacrifiés près de Chan Chan, sans doute pour arrêter des pluies catastrophiques. C'est le plus grand sacrifice d'enfants connu dans les Amériques.",
    },
    {
      id: 'lambayeque',
      tier: 2,
      type: 'text',
      kicker: 'Expansion',
      title: 'La conquête de Lambayeque',
      body:
        "Vers 1375, les Chimús conquièrent la vallée de Lambayeque, dont les orfèvres sont célèbres pour leurs couteaux de cérémonie en or, les tumis.",
    },
    {
      id: 'spondyle',
      tier: 2,
      type: 'text',
      kicker: 'Économie',
      title: 'Le coquillage précieux',
      body:
        "Les Chimús font venir d'Équateur le spondyle, un coquillage rouge très précieux, utilisé dans les rituels et pour fabriquer des bijoux.",
    },
    {
      id: 'ceramique',
      tier: 2,
      type: 'text',
      kicker: 'Art',
      title: 'La céramique noire',
      body:
        "Les potiers chimús fabriquent une céramique noire et brillante, obtenue en cuisant les vases dans un four privé d'air.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouvait le royaume chimú ?', options: ['Le Pérou', 'Le Mexique', 'L’Argentine', 'Le Brésil'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale des Chimús ?', options: ['Chan Chan', 'Cuzco', 'Tula', 'Lima'], answer: 0 },
    { id: 'terre', type: 'mcq', prompt: 'En quoi est construite Chan Chan ?', options: ['En terre crue', 'En pierre taillée', 'En bois', 'En marbre'], answer: 0 },
    { id: 'record', type: 'tf', prompt: 'Chan Chan est la plus grande ville en terre crue des Amériques.', answer: true },
    { id: 'avant', type: 'mcq', prompt: 'Quel peuple vivait avant les Chimús sur la même côte ?', options: ['Les Mochicas', 'Les Aztèques', 'Les Toltèques', 'Les Mayas'], answer: 0 },
    { id: 'fondateur', type: 'mcq', prompt: 'Selon la tradition, comment le fondateur Tacaynamo arrive-t-il ?', options: ['Par la mer, sur un radeau', 'Du ciel', 'Des montagnes, à cheval', 'D’Espagne'], answer: 0 },
    { id: 'palais', type: 'mcq', prompt: 'Que fait construire chaque nouveau roi à Chan Chan ?', options: ['Son propre palais-tombeau', 'Une pyramide de pierre', 'Un port', 'Un temple au Soleil'], answer: 0 },
    { id: 'lune', type: 'mcq', prompt: 'Quelle est la divinité principale des Chimús ?', options: ['La Lune', 'Le Soleil', 'La Terre', 'Le Tonnerre'], answer: 0 },
    { id: 'canaux', type: 'mcq', prompt: 'Que relient les grands canaux chimús ?', options: ['Plusieurs vallées', 'Deux océans', 'Deux lacs de montagne', 'Des mines d’or'], answer: 0 },
    { id: 'cote', type: 'mcq', prompt: 'Quelle longueur de côte le royaume contrôle-t-il à son apogée ?', options: ['Plus de 1 000 km', '10 km', '100 km', '10 000 km'], answer: 0 },
    { id: 'incas', type: 'mcq', prompt: 'Quel empire conquiert les Chimús vers 1470 ?', options: ['L’Empire inca', 'L’Empire aztèque', 'L’Empire espagnol', 'L’Empire portugais'], answer: 0 },
    { id: 'ruse', type: 'mcq', prompt: 'Selon les chroniques, comment les Incas forcent-ils Chan Chan à se rendre ?', options: ['En coupant ses canaux', 'En l’incendiant', 'Par une ruse de cheval de bois', 'Avec des canons'], answer: 0 },
    { id: 'artisans', type: 'tf', prompt: 'Après la conquête, des artisans chimús sont emmenés à Cuzco.', answer: true },
    { id: 'spondyle', type: 'mcq', prompt: 'Qu’est-ce que le spondyle ?', options: ['Un coquillage rouge précieux', 'Un dieu', 'Un poisson', 'Une arme'], answer: 0 },
    { id: 'ceramique', type: 'mcq', prompt: 'De quelle couleur est la céramique typique des Chimús ?', options: ['Noire', 'Bleue', 'Blanche', 'Verte'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Débuts de Chan Chan', 'Conquête de Lambayeque', 'Sacrifices de Huanchaquito', 'Conquête inca'] },
  ],

  recap: [
    'Vers 900, le royaume de Chimor naît sur la côte nord du Pérou',
    'Chan Chan, la plus grande ville en terre crue des Amériques',
    'Canaux entre les vallées, orfèvrerie, culte de la Lune',
    'Vers 1470, conquête par les Incas ; ses artisans partent à Cuzco',
  ],
}

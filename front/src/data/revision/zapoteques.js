/** Chapitre rédigé : Zapotèques (vers −500 – 1521). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'montealban',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Une ville sur une montagne',
      body:
        "Vers −500, les Zapotèques aplanissent le sommet d'une montagne qui domine de 400 mètres la vallée de Oaxaca, au sud du Mexique. Ils y fondent Monte Albán, l'une des premières villes de Mésoamérique.",
      highlight: { value: 'vers −500', label: 'fondation de Monte Albán' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le pays zapotèque',
      years: [-300, 500, 1400],
      caption: 'Comparez : autour de la vallée de Oaxaca, du temps de Monte Albán à celui des royaumes zapotèques.',
    },
    {
      id: 'ecriture',
      tier: 1,
      type: 'text',
      kicker: 'Sciences',
      title: 'Une des premières écritures',
      body:
        "Les Zapotèques utilisent l'une des plus anciennes écritures du continent américain, faite de glyphes, ainsi qu'un calendrier rituel de 260 jours et un calendrier solaire de 365 jours.",
    },
    {
      id: 'danseurs',
      tier: 1,
      type: 'text',
      kicker: 'Art',
      title: 'Les « danseurs »',
      body:
        "Des centaines de dalles sculptées de Monte Albán montrent des hommes nus aux poses étranges. On les a appelés les « danseurs », mais ce sont sans doute des captifs ou des sacrifiés.",
    },
    {
      id: 'teotihuacan',
      tier: 1,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Des Zapotèques à Teotihuacan',
      body:
        "Monte Albán entretient des liens étroits avec la grande cité de Teotihuacan, près de l'actuelle Mexico : un quartier de Teotihuacan est habité par des Zapotèques.",
    },
    {
      id: 'mitla',
      tier: 1,
      type: 'text',
      kicker: 'Architecture',
      title: 'Mitla',
      body:
        "Après le déclin de Monte Albán, vers 800, les Zapotèques forment des royaumes plus petits. Mitla devient leur grand centre religieux : ses palais sont couverts de mosaïques de pierre géométriques.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les Zapotèques en dates',
      items: [
        { year: -500, label: 'Fondation de Monte Albán' },
        { year: 200, label: 'Apogée de Monte Albán' },
        { year: 800, label: 'Déclin de Monte Albán' },
        { year: 1497, label: 'Siège de Guiengola' },
        { year: 1521, label: 'Arrivée des Espagnols' },
      ],
    },
    {
      id: 'guiengola',
      tier: 1,
      type: 'war',
      nom: 'Siège de Guiengola',
      annee: 1497,
      adversaires: ['Empire aztèque (Ahuitzotl)'],
      allies: ['Zapotèques (roi Cocijoeza)'],
      vainqueur: 'Indécis',
      consequences:
        "Retranchés dans une forteresse de montagne, les Zapotèques résistent à un long siège aztèque. Selon la tradition, la paix est scellée par un mariage entre le roi zapotèque et une princesse aztèque.",
    },
    {
      id: 'aujourdhui',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Un peuple vivant',
      body:
        "Près d'un demi-million de personnes parlent aujourd'hui une langue zapotèque. Le président mexicain Benito Juárez, au XIXe siècle, était zapotèque.",
    },

    // ── Niveau 2 ──
    {
      id: 'cocijo',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Cocijo',
      body:
        "Le dieu le plus honoré est Cocijo, dieu de la pluie et de l'éclair. De nombreuses urnes funéraires en céramique le représentent.",
    },
    {
      id: 'tombe7',
      tier: 2,
      type: 'text',
      kicker: 'Archéologie',
      title: 'Le trésor de la tombe 7',
      body:
        "En 1932, l'archéologue Alfonso Caso découvre à Monte Albán un trésor d'or, de jade et de turquoise. Il a été déposé par les Mixtèques, qui ont réutilisé une tombe zapotèque.",
    },
    {
      id: 'balle',
      tier: 2,
      type: 'text',
      kicker: 'Quotidien',
      title: 'Le jeu de balle',
      body:
        "Comme dans toute la Mésoamérique, on joue au jeu de balle sur un terrain en forme de I, avec une lourde balle de caoutchouc qu'il faut frapper avec les hanches.",
    },
    {
      id: 'mixteques',
      tier: 2,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Les voisins mixtèques',
      body:
        "Après 800, les Zapotèques partagent la région de Oaxaca avec un autre peuple, les Mixtèques, avec qui ils commercent, s'allient par mariage ou se font la guerre.",
    },
    {
      id: 'unesco',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Au patrimoine mondial',
      body:
        "Monte Albán et le centre historique de la ville de Oaxaca sont inscrits au patrimoine mondial de l'UNESCO depuis 1987.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel vivent les Zapotèques ?', options: ['Le Mexique', 'Le Pérou', 'La Colombie', 'Le Brésil'], answer: 0 },
    { id: 'vallee', type: 'mcq', prompt: 'Dans quelle vallée se trouve Monte Albán ?', options: ['La vallée de Oaxaca', 'La vallée de Mexico', 'La vallée de l’Indus', 'La vallée du Nil'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la grande ville des Zapotèques ?', options: ['Monte Albán', 'Tula', 'Chan Chan', 'Tenochtitlan'], answer: 0 },
    { id: 'montagne', type: 'tf', prompt: 'Monte Albán a été construite au sommet d’une montagne aplanie.', answer: true },
    { id: 'ecriture', type: 'mcq', prompt: 'Qu’utilisent les Zapotèques, parmi les premiers en Amérique ?', options: ['Une écriture de glyphes', 'L’alphabet latin', 'La roue pour les chariots', 'Le fer'], answer: 0 },
    { id: 'calendrier', type: 'mcq', prompt: 'Combien de jours compte le calendrier rituel zapotèque ?', options: ['260', '365', '100', '30'], answer: 0 },
    { id: 'danseurs', type: 'mcq', prompt: 'Que représentent sans doute les dalles des « danseurs » ?', options: ['Des captifs ou des sacrifiés', 'Des danseurs de fête', 'Des dieux', 'Des rois'], answer: 0 },
    { id: 'teotihuacan', type: 'mcq', prompt: 'Avec quelle grande cité Monte Albán a-t-elle des liens étroits ?', options: ['Teotihuacan', 'Cuzco', 'Rome', 'Chichén Itzá'], answer: 0 },
    { id: 'mitla', type: 'mcq', prompt: 'Pour quoi Mitla est-elle célèbre ?', options: ['Ses mosaïques de pierre géométriques', 'Ses pyramides de briques crues', 'Ses statues géantes', 'Son port'], answer: 0 },
    { id: 'cocijo', type: 'mcq', prompt: 'De quoi Cocijo est-il le dieu ?', options: ['De la pluie et de l’éclair', 'De la mer', 'De la guerre', 'Du soleil'], answer: 0 },
    { id: 'azteques', type: 'mcq', prompt: 'Contre quel empire les Zapotèques résistent-ils à Guiengola ?', options: ['L’Empire aztèque', 'L’Empire inca', 'L’Empire espagnol', 'Les Mayas'], answer: 0 },
    { id: 'tombe7', type: 'mcq', prompt: 'Qui a déposé le trésor de la tombe 7 de Monte Albán ?', options: ['Les Mixtèques', 'Les Aztèques', 'Les Espagnols', 'Les Mayas'], answer: 0 },
    { id: 'juarez', type: 'mcq', prompt: 'Quel président mexicain était zapotèque ?', options: ['Benito Juárez', 'Pancho Villa', 'Porfirio Díaz', 'Miguel Hidalgo'], answer: 0 },
    { id: 'langue', type: 'tf', prompt: 'Des langues zapotèques sont encore parlées aujourd’hui.', answer: true },
    { id: 'espagnols', type: 'mcq', prompt: 'Qui arrive dans la vallée de Oaxaca dans les années 1520 ?', options: ['Les Espagnols', 'Les Portugais', 'Les Français', 'Les Anglais'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Fondation de Monte Albán', 'Apogée de Monte Albán', 'Déclin de Monte Albán', 'Arrivée des Espagnols'] },
  ],

  recap: [
    'Vers −500, les Zapotèques fondent Monte Albán au-dessus de la vallée de Oaxaca',
    'Une des premières écritures d’Amérique et deux calendriers',
    'Après 800, des royaumes plus petits et le centre religieux de Mitla',
    'Résistance aux Aztèques, puis arrivée des Espagnols ; un peuple toujours vivant',
  ],
}

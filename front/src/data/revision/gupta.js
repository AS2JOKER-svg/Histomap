/** Chapitre rédigé : Empire gupta (vers 320 – vers 550). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'fondation',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Un nouvel empire dans la vallée du Gange',
      body:
        "Vers 320, Chandragupta Ier fonde une dynastie autour de Pataliputra, l'ancienne capitale des Maurya, et prend le titre de « grand roi des rois ». Ses successeurs bâtissent l'un des plus grands empires de l'histoire de l'Inde.",
      highlight: { value: 'vers 320', label: 'début de l’ère gupta' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'L’Empire gupta',
      years: [400, 500],
      caption: 'Comparez : vers 400, l’empire s’étend d’une mer à l’autre ; un siècle plus tard, les Huns menacent le nord-ouest.',
    },
    {
      id: 'samudragupta',
      tier: 1,
      type: 'person',
      nom: 'Samudragupta',
      role: 'Empereur conquérant',
      dates: 'règne vers 335 – vers 375',
      description:
        "Il annexe les royaumes de la vallée du Gange et oblige les rois du Sud à lui payer tribut. Ses victoires sont gravées sur un pilier d'Allahabad. Ses pièces d'or le montrent aussi jouant d'un instrument à cordes.",
    },
    {
      id: 'chandragupta',
      tier: 1,
      type: 'text',
      kicker: 'Apogée',
      title: 'Chandragupta II',
      body:
        "Vers 400, Chandragupta II, surnommé Vikramaditya, « soleil de la vaillance », conquiert l'ouest de l'Inde. L'empire va alors de la mer d'Arabie au golfe du Bengale, et ses ports commercent avec le monde entier.",
    },
    {
      id: 'aryabhata',
      tier: 1,
      type: 'person',
      nom: 'Aryabhata',
      role: 'Astronome et mathématicien',
      dates: '476 – vers 550',
      description:
        "En 499, à 23 ans, il écrit un traité où il explique les éclipses par l'ombre de la Terre et de la Lune, affirme que la Terre tourne sur elle-même et calcule π avec précision (3,1416).",
    },
    {
      id: 'chiffres',
      tier: 1,
      type: 'text',
      kicker: 'Sciences',
      title: 'L’ancêtre de nos chiffres',
      body:
        "Au Ve siècle, des savants indiens écrivent les nombres avec dix signes dont la valeur dépend de leur place. Complété plus tard par le zéro, ce système passera aux Arabes puis à l'Europe : ce sont nos chiffres.",
    },
    {
      id: 'religion',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'L’hindouisme classique',
      body:
        "Les rois honorent surtout Vishnou. L'hindouisme prend alors une grande partie de sa forme classique, avec ses premiers temples de pierre. Les Gupta protègent aussi les monastères bouddhistes, comme Nalanda, un grand centre d'enseignement.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'L’Empire gupta en dates',
      items: [
        { year: 320, label: 'Chandragupta Ier, grand roi des rois' },
        { year: 350, label: 'Conquêtes de Samudragupta' },
        { year: 400, label: 'Conquête de l’ouest de l’Inde' },
        { year: 455, label: 'Les Huns repoussés' },
        { year: 499, label: 'Traité d’Aryabhata' },
        { year: 550, label: 'Fin de l’empire' },
      ],
    },
    {
      id: 'huns',
      tier: 1,
      type: 'war',
      nom: 'Invasions des Huns en Inde',
      annee: 455,
      adversaires: ['Huns venus d’Asie centrale'],
      allies: ['Empire gupta'],
      vainqueur: 'Gupta d’abord, puis les Huns',
      consequences:
        "Skandagupta repousse une première invasion vers 455-460. Mais au début du VIe siècle, les chefs huns Toramana et Mihirakula conquièrent le nord-ouest : l'empire s'effondre vers 550.",
    },

    // ── Niveau 2 ──
    {
      id: 'kalidasa',
      tier: 2,
      type: 'text',
      kicker: 'Littérature',
      title: 'Kalidasa',
      body:
        "Le plus célèbre poète de langue sanskrite a probablement vécu à la cour des Gupta. Sa pièce « Shakuntala », l'histoire d'un roi et d'une jeune femme de la forêt, a été traduite et admirée en Europe à partir du XVIIIe siècle.",
    },
    {
      id: 'faxian',
      tier: 2,
      type: 'text',
      kicker: 'Sources',
      title: 'Le récit de Faxian',
      body:
        "Au début du Ve siècle, le moine chinois Faxian traverse l'Asie centrale pour rapporter des textes bouddhistes. Il décrit un pays prospère, où les peines sont surtout des amendes.",
    },
    {
      id: 'pilier',
      tier: 2,
      type: 'text',
      kicker: 'Techniques',
      title: 'Le pilier qui ne rouille pas',
      body:
        "À Delhi se dresse un pilier de fer d'environ 7 mètres, probablement fait pour Chandragupta II. Riche en phosphore, il a très peu rouillé en plus de 1 500 ans.",
    },
    {
      id: 'ajanta',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'Les peintures d’Ajanta',
      body:
        "Dans des grottes creusées dans une falaise, des moines bouddhistes font peindre au Ve siècle des scènes de la vie du Bouddha. Elles datent du règne des Vakataka, une dynastie alliée aux Gupta par mariage.",
    },
    {
      id: 'satellite',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Un nom dans l’espace',
      body:
        "En 1975, l'Inde lance son premier satellite. Elle lui donne le nom de l'astronome Aryabhata.",
    },
  ],

  quiz: [
    { id: 'region', type: 'mcq', prompt: 'Où se trouve l’Empire gupta ?', options: ['Dans le nord de l’Inde', 'En Chine', 'En Perse', 'En Égypte'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale des Gupta ?', options: ['Pataliputra', 'Delhi', 'Bombay', 'Calcutta'], answer: 0 },
    { id: 'titre', type: 'mcq', prompt: 'Quel titre prend Chandragupta Ier ?', options: ['Grand roi des rois', 'Pharaon', 'Calife', 'Khagan'], answer: 0 },
    { id: 'conquerant', type: 'mcq', prompt: 'Quel empereur gupta fait graver ses victoires sur un pilier ?', options: ['Samudragupta', 'Ashoka', 'Akbar', 'Babur'], answer: 0 },
    { id: 'vikramaditya', type: 'mcq', prompt: 'Quel empereur gupta est surnommé Vikramaditya ?', options: ['Chandragupta II', 'Chandragupta Ier', 'Skandagupta', 'Samudragupta'], answer: 0 },
    { id: 'aryabhata', type: 'mcq', prompt: 'Qui explique les éclipses par l’ombre de la Terre et de la Lune ?', options: ['Aryabhata', 'Kalidasa', 'Faxian', 'Ptolémée'], answer: 0 },
    { id: 'terre', type: 'tf', prompt: 'Aryabhata affirme que la Terre tourne sur elle-même.', answer: true },
    { id: 'pi', type: 'mcq', prompt: 'Quelle valeur Aryabhata donne-t-il au nombre π ?', options: ['3,1416', '3', '4', '2,5'], answer: 0 },
    { id: 'chiffres', type: 'mcq', prompt: 'Quel héritage de l’Inde utilisons-nous encore tous les jours ?', options: ['Nos chiffres', 'Notre alphabet', 'Le calendrier romain', 'La boussole'], answer: 0 },
    { id: 'religion', type: 'mcq', prompt: 'Quel dieu les rois gupta honorent-ils surtout ?', options: ['Vishnou', 'Zeus', 'Ahura Mazda', 'Odin'], answer: 0 },
    { id: 'nalanda', type: 'mcq', prompt: 'Qu’est-ce que Nalanda ?', options: ['Un grand monastère et centre d’enseignement', 'Un port', 'Une forteresse', 'Un palais royal'], answer: 0 },
    { id: 'kalidasa', type: 'mcq', prompt: 'Quel grand poète a probablement vécu à la cour des Gupta ?', options: ['Kalidasa', 'Homère', 'Ferdowsi', 'Li Bai'], answer: 0 },
    { id: 'faxian', type: 'mcq', prompt: 'D’où vient le moine Faxian, qui visite l’Inde vers 400 ?', options: ['De Chine', 'Du Japon', 'De Perse', 'De Rome'], answer: 0 },
    { id: 'huns', type: 'mcq', prompt: 'Quels envahisseurs contribuent à la chute de l’empire ?', options: ['Les Huns', 'Les Mongols', 'Les Britanniques', 'Les Vikings'], answer: 0 },
    { id: 'pilier', type: 'tf', prompt: 'Le pilier de fer de Delhi a presque entièrement rouillé.', answer: false, explanation: 'Riche en phosphore, il a très peu rouillé en plus de 1 500 ans.' },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Chandragupta Ier, grand roi des rois', 'Conquêtes de Samudragupta', 'Traité d’Aryabhata', 'Fin de l’empire'] },
  ],

  recap: [
    'Vers 320, les Gupta fondent un empire dans le nord de l’Inde',
    'Samudragupta et Chandragupta II l’étendent d’une mer à l’autre',
    'L’âge classique : Aryabhata, Kalidasa, les ancêtres de nos chiffres',
    'Les invasions des Huns précipitent sa fin vers 550',
  ],
}

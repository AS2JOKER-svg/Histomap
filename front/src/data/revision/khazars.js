/** Chapitre rédigé : Khazars (vers 650 – 969). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'qui',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Un empire entre deux mers',
      body:
        "Les Khazars sont un peuple turc issu de l'empire des Göktürks. Vers 650, ils fondent un khaganat indépendant entre la mer Noire, la mer Caspienne et la Volga. Leur capitale, Itil, se trouve dans le delta de la Volga.",
      highlight: { value: '≈ 300 ans', label: 'de puissance khazare' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'La Khazarie',
      years: [700, 800, 900],
      caption: 'Comparez : au IXe siècle, les Khazars dominent les steppes, entre le Caucase, la Volga et le Dniepr.',
    },
    {
      id: 'arabes',
      tier: 1,
      type: 'war',
      nom: 'Guerres arabo-khazares',
      annee: 652,
      adversaires: ['Califat'],
      allies: ['Khazars'],
      vainqueur: 'Aucun vainqueur décisif',
      consequences:
        "Pendant plus d'un siècle, les Khazars et les armées du califat se battent pour le Caucase. Ces montagnes deviennent finalement une frontière durable : l'expansion arabe s'arrête là.",
    },
    {
      id: 'byzance',
      tier: 1,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Les alliés de Byzance',
      body:
        "Les Khazars sont les principaux alliés de l'Empire byzantin contre les Arabes. Deux empereurs épousent des princesses khazares ; le fils de l'une d'elles, l'empereur Léon IV, est surnommé « le Khazar ».",
    },
    {
      id: 'judaisme',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Un roi juif dans les steppes',
      body:
        "Entre le VIIIe et le IXe siècle, le roi et la noblesse khazars adoptent le judaïsme, alors que leurs voisins sont chrétiens ou musulmans. C'est un cas rare pour un grand État. Le reste de la population garde sa religion.",
    },
    {
      id: 'tolerance',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Société',
      value: '7',
      label: 'juges à Itil, pour les différentes religions',
      caption: "Selon l'auteur arabe al-Masudi, la capitale a deux juges pour les juifs, deux pour les musulmans, deux pour les chrétiens et un pour les païens.",
    },
    {
      id: 'commerce',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Les douaniers de la Volga',
      body:
        "Les Khazars contrôlent les routes entre la Baltique, Byzance et le monde musulman. Ils prélèvent une taxe d'un dixième sur les fourrures, la cire, le miel et les esclaves qui passent sur la Volga et le Don.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Trois siècles de Khazars',
      items: [
        { year: 652, label: 'Victoire sur les Arabes à Balanjar' },
        { year: 737, label: 'Invasion du général arabe Marwan' },
        { year: 800, label: 'Conversion de l’élite au judaïsme (date discutée)' },
        { year: 840, label: 'Construction de Sarkel' },
        { year: 965, label: 'Sviatoslav prend Sarkel' },
      ],
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Abattus par Kiev',
      body:
        "Au Xe siècle, les Khazars sont menacés par les Petchénègues et par les Rus'. Vers 965, Sviatoslav, prince de Kiev, prend leur forteresse de Sarkel, puis détruit Itil vers 968-969. Le khaganat disparaît.",
    },

    // ── Niveau 2 ──
    {
      id: 'bek',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Deux rois pour un empire',
      body:
        "Les Khazars ont deux souverains : un khagan sacré, qui vit retiré et se montre rarement, et un « bek » qui gouverne et commande l'armée.",
    },
    {
      id: 'sarkel',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Une forteresse byzantine sur le Don',
      body:
        "Vers 840, l'empereur byzantin Théophile envoie des ingénieurs pour aider les Khazars à bâtir Sarkel, une forteresse de brique sur le Don. Ses ruines ont été noyées en 1952 sous un lac de barrage.",
    },
    {
      id: 'joseph',
      tier: 2,
      type: 'person',
      nom: 'Joseph',
      role: 'Roi des Khazars',
      dates: 'Xe siècle',
      description:
        "Vers 960, il répond à une lettre de Hasdaï ibn Shaprut, ministre juif du calife de Cordoue, qui avait entendu parler d'un royaume juif lointain. Sa lettre décrit son pays et l'histoire de la conversion.",
    },
    {
      id: 'cyrille',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Un débat de religions',
      body:
        "En 861, le moine byzantin Constantin, futur saint Cyrille, se rend chez les Khazars et débat de religion à la cour. Avec son frère Méthode, il créera plus tard le premier alphabet slave, le glagolitique.",
    },
    {
      id: 'mythe',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Un mythe à écarter',
      body:
        "On a parfois affirmé que la plupart des juifs d'Europe de l'Est descendraient des Khazars. Les études historiques et génétiques ne confirment pas cette idée.",
    },
  ],

  quiz: [
    { id: 'famille', type: 'mcq', prompt: 'De quel empire les Khazars sont-ils issus ?', options: ['L’empire des Göktürks', 'L’Empire romain', 'L’empire mongol', 'L’Empire perse'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Où se trouve Itil, la capitale khazare ?', options: ['Dans le delta de la Volga', 'Sur le Nil', 'Sur le Danube', 'Au bord du Gange'], answer: 0 },
    { id: 'arabes', type: 'mcq', prompt: 'Quelle expansion les Khazars arrêtent-ils au nord du Caucase ?', options: ['L’expansion arabe', 'L’expansion romaine', 'L’expansion chinoise', 'L’expansion viking'], answer: 0 },
    { id: 'allies', type: 'mcq', prompt: 'Quel empire est le principal allié des Khazars ?', options: ['L’Empire byzantin', 'Le califat', 'L’empire de Charlemagne', 'La Chine des Tang'], answer: 0 },
    { id: 'leon', type: 'mcq', prompt: 'Quel empereur byzantin est surnommé « le Khazar » ?', options: ['Léon IV', 'Justinien Ier', 'Constantin Ier', 'Basile II'], answer: 0 },
    { id: 'religion', type: 'mcq', prompt: 'Quelle religion adoptent le roi et la noblesse khazars ?', options: ['Le judaïsme', 'L’islam', 'Le bouddhisme', 'Le christianisme'], answer: 0 },
    { id: 'tous', type: 'tf', prompt: 'Tous les habitants du khaganat se convertissent au judaïsme.', answer: false, explanation: 'Musulmans, chrétiens et païens y vivent aussi.' },
    { id: 'juges', type: 'mcq', prompt: 'Combien de juges compte Itil selon al-Masudi ?', options: ['7', '2', '12', '40'], answer: 0 },
    { id: 'taxe', type: 'mcq', prompt: 'Quelle taxe les Khazars prélèvent-ils sur les marchandises ?', options: ['Un dixième', 'La moitié', 'Un centième', 'Rien du tout'], answer: 0 },
    { id: 'double', type: 'mcq', prompt: 'Comment s’appelle le souverain qui gouverne et commande l’armée khazare ?', options: ['Le bek', 'Le pharaon', 'Le doge', 'Le shogun'], answer: 0 },
    { id: 'sarkel', type: 'mcq', prompt: 'Qui aide les Khazars à bâtir la forteresse de Sarkel ?', options: ['Des ingénieurs byzantins', 'Des architectes chinois', 'Des bâtisseurs égyptiens', 'Des maçons vikings'], answer: 0 },
    { id: 'sviatoslav', type: 'mcq', prompt: 'Quel prince de Kiev abat la puissance khazare ?', options: ['Sviatoslav', 'Vladimir', 'Iaroslav', 'Ivan le Terrible'], answer: 0 },
    { id: 'fin', type: 'mcq', prompt: 'Vers quand le khaganat khazar disparaît-il ?', options: ['Vers 969', 'Vers 500', 'Vers 1240', 'Vers 1453'], answer: 0 },
    { id: 'cyrille', type: 'mcq', prompt: 'Quel futur saint vient débattre de religion chez les Khazars en 861 ?', options: ['Cyrille', 'Augustin', 'Patrick', 'François d’Assise'], answer: 0 },
    { id: 'mythe', type: 'tf', prompt: 'Les études confirment que la plupart des juifs d’Europe de l’Est descendent des Khazars.', answer: false, explanation: 'Cette idée n’est pas confirmée par les études historiques et génétiques.' },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Victoire de Balanjar', 'Invasion de Marwan', 'Construction de Sarkel', 'Prise de Sarkel par Sviatoslav'] },
  ],

  recap: [
    'Vers 650 : un khaganat turc entre mer Noire, Caspienne et Volga',
    'Ils arrêtent l’expansion arabe au Caucase, alliés de Byzance',
    'L’élite adopte le judaïsme ; les religions coexistent',
    'Vers 965-969 : Sviatoslav de Kiev abat le khaganat',
  ],
}

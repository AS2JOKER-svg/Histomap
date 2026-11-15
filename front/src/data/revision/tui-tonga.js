/** Chapitre rédigé : Empire Tuʻi Tonga (vers 950 – 1865). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'origine',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Un roi descendant des dieux',
      body:
        "Selon la tradition, vers 950, Ahoʻeitu, fils d'un dieu et d'une femme de Tonga, devient le premier Tuʻi Tonga, « roi de Tonga ». Ses descendants règnent pendant plus de neuf siècles.",
      highlight: { value: 'vers 950', label: 'premier Tuʻi Tonga, selon la tradition' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'L’empire Tuʻi Tonga',
      years: [1000, 1500, 1815],
      caption: 'Le cœur du pouvoir est l’île de Tongatapu ; l’influence des Tuʻi Tonga s’étend sur une partie de la Polynésie occidentale.',
    },
    {
      id: 'empire',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Un empire maritime',
      body:
        "Du XIIe au XVe siècle, grâce à leurs grandes pirogues doubles, les Tuʻi Tonga étendent leur influence vers Samoa, Wallis, Futuna, Niue et une partie de Fidji. Les historiens discutent de l'étendue réelle de cet « empire ».",
    },
    {
      id: 'lapaha',
      tier: 1,
      type: 'text',
      kicker: 'Architecture',
      title: 'Les tombeaux de Lapaha',
      body:
        "À Lapaha, la capitale, les Tuʻi Tonga sont enterrés dans d'imposants tombeaux à gradins, les langi, faits d'énormes blocs de corail taillés et ajustés.",
    },
    {
      id: 'haamonga',
      tier: 1,
      type: 'text',
      kicker: 'Architecture',
      title: 'Le portique de pierre',
      body:
        "Vers 1200, selon la tradition, le Tuʻi Tonga Tuʻitātui fait dresser le Haʻamonga ʻa Maui : trois blocs de corail formant un portique d'environ 5 mètres de haut.",
    },
    {
      id: 'partage',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Un pouvoir partagé',
      body:
        "Au XVe siècle, après l'assassinat de plusieurs Tuʻi Tonga, le pouvoir politique passe à d'autres lignées. Le Tuʻi Tonga garde un rôle sacré : sa personne reste intouchable.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Tonga en dates',
      items: [
        { year: 950, label: 'Premier Tuʻi Tonga (tradition)' },
        { year: 1200, label: 'Haʻamonga ʻa Maui' },
        { year: 1643, label: 'Arrivée d’Abel Tasman' },
        { year: 1845, label: 'George Tupou Ier roi' },
        { year: 1865, label: 'Mort du dernier Tuʻi Tonga' },
      ],
    },
    {
      id: 'guerres',
      tier: 1,
      type: 'war',
      nom: 'Guerres civiles tonganes',
      annee: 1799,
      adversaires: ['Chefs rivaux de l’archipel'],
      allies: ['Tāufaʻāhau'],
      vainqueur: 'Tāufaʻāhau (George Tupou Ier)',
      consequences:
        "Après l'assassinat d'un souverain en 1799, les chefs se disputent le pouvoir pendant un demi-siècle. Tāufaʻāhau unifie l'archipel en 1845 et devient le roi George Tupou Ier.",
    },
    {
      id: 'royaume',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Le seul royaume du Pacifique',
      body:
        "Tonga n'a jamais été colonisé. Protectorat britannique de 1900 à 1970, il est aujourd'hui le seul royaume du Pacifique, et ses rois descendent des anciennes lignées royales.",
    },

    // ── Niveau 2 ──
    {
      id: 'fefine',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'La sœur du roi',
      body:
        "À Tonga, le rang se transmet aussi par les femmes. La sœur du Tuʻi Tonga, la Tuʻi Tonga Fefine, a un rang encore plus élevé que celui de son frère.",
    },
    {
      id: 'kava',
      tier: 2,
      type: 'text',
      kicker: 'Quotidien',
      title: 'La cérémonie du kava',
      body:
        "Lors des grandes cérémonies, on boit le kava, une boisson tirée d'une racine. Les participants sont servis dans un ordre qui respecte strictement le rang de chacun.",
    },
    {
      id: 'amis',
      tier: 2,
      type: 'text',
      kicker: 'Contacts',
      title: 'Les « îles des Amis »',
      body:
        "James Cook visite Tonga à partir de 1773 et l'appelle les « îles des Amis » pour l'accueil reçu. On raconta plus tard que des chefs avaient en fait projeté de l'attaquer.",
    },
    {
      id: 'tupou',
      tier: 2,
      type: 'person',
      nom: 'George Tupou Ier',
      role: 'Roi de Tonga',
      dates: 'vers 1797 – 1893',
      description: "Converti au christianisme, il unifie l'archipel, donne au pays sa constitution en 1875 et défend son indépendance face aux Européens.",
    },
    {
      id: 'tapa',
      tier: 2,
      type: 'text',
      kicker: 'Économie',
      title: 'Nattes et tapa',
      body:
        "Les nattes fines et les étoffes d'écorce décorées, les tapa, sont des richesses : on les échange et on les offre lors des mariages, des funérailles et des cérémonies.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Quel pays actuel correspond à l’empire Tuʻi Tonga ?', options: ['Tonga', 'Le Japon', 'Madagascar', 'Cuba'], answer: 0 },
    { id: 'titre', type: 'mcq', prompt: 'Que signifie « Tuʻi Tonga » ?', options: ['Roi de Tonga', 'Fils du soleil', 'Grand navigateur', 'Maître de la mer'], answer: 0 },
    { id: 'origine', type: 'mcq', prompt: 'Selon la tradition, de qui descend le premier Tuʻi Tonga ?', options: ['D’un dieu et d’une femme de Tonga', 'D’un roi chinois', 'D’un navigateur espagnol', 'D’un roi inca'], answer: 0 },
    { id: 'pirogues', type: 'mcq', prompt: 'Grâce à quoi les Tuʻi Tonga étendent-ils leur influence ?', options: ['De grandes pirogues doubles', 'Des chevaux', 'Des chars', 'Des chameaux'], answer: 0 },
    { id: 'iles', type: 'mcq', prompt: 'Vers quelles îles s’étend leur influence ?', options: ['Samoa, Wallis, Futuna et une partie de Fidji', 'Hawaï et l’île de Pâques', 'Le Japon et Taïwan', 'Madagascar et Maurice'], answer: 0 },
    { id: 'langi', type: 'mcq', prompt: 'Que sont les langi de Lapaha ?', options: ['Des tombeaux royaux à gradins', 'Des pirogues', 'Des danses', 'Des nattes'], answer: 0 },
    { id: 'haamonga', type: 'mcq', prompt: 'Qu’est-ce que le Haʻamonga ʻa Maui ?', options: ['Un portique de trois blocs de pierre', 'Une montagne', 'Un volcan', 'Une pirogue royale'], answer: 0 },
    { id: 'sacre', type: 'tf', prompt: 'Après le XVe siècle, le Tuʻi Tonga garde un rôle sacré mais perd le pouvoir politique.', answer: true },
    { id: 'fefine', type: 'mcq', prompt: 'Qui a un rang plus élevé que le Tuʻi Tonga ?', options: ['Sa sœur, la Tuʻi Tonga Fefine', 'Son fils', 'Le capitaine Cook', 'Personne'], answer: 0 },
    { id: 'kava', type: 'mcq', prompt: 'Qu’est-ce que le kava ?', options: ['Une boisson tirée d’une racine', 'Un tissu', 'Un dieu', 'Une île'], answer: 0 },
    { id: 'cook', type: 'mcq', prompt: 'Comment James Cook surnomme-t-il Tonga ?', options: ['Les îles des Amis', 'Les îles du Vent', 'Les îles de la Société', 'Les îles Sous-le-Vent'], answer: 0 },
    { id: 'tasman', type: 'mcq', prompt: 'Quel navigateur hollandais aborde Tonga en 1643 ?', options: ['Abel Tasman', 'Jacob Roggeveen', 'Christophe Colomb', 'Magellan'], answer: 0 },
    { id: 'tupou', type: 'mcq', prompt: 'Qui unifie l’archipel en 1845 ?', options: ['George Tupou Ier', 'Kamehameha Ier', 'Hongi Hika', 'Ahoʻeitu'], answer: 0 },
    { id: 'colonise', type: 'tf', prompt: 'Tonga a été une colonie européenne.', answer: false, explanation: 'Tonga n’a jamais été colonisé ; il fut seulement protectorat britannique de 1900 à 1970.' },
    { id: 'royaume', type: 'mcq', prompt: 'Quel régime a Tonga aujourd’hui ?', options: ['Une monarchie', 'Une république', 'Une colonie', 'Un empire'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Premier Tuʻi Tonga (tradition)', 'Haʻamonga ʻa Maui', 'Arrivée d’Abel Tasman', 'George Tupou Ier roi'] },
  ],

  recap: [
    'Vers 950, selon la tradition, le premier Tuʻi Tonga, descendant des dieux',
    'Un « empire » maritime en Polynésie occidentale du XIIe au XVe siècle',
    'Tombeaux de Lapaha, portique du Haʻamonga ʻa Maui ; puis un pouvoir partagé',
    'Guerres civiles, unification par George Tupou Ier (1845) ; Tonga, royaume jamais colonisé',
  ],
}

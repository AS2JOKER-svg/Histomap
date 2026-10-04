/** Chapitre rédigé : Empire de Srivijaya (≈ VIIe – XIVe siècle). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'inscriptions',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Un royaume né à Palembang',
      body:
        "Srivijaya apparaît au VIIe siècle autour de Palembang, sur l'île de Sumatra (Indonésie actuelle). Une inscription en vieux malais, datée de 682, raconte l'expédition victorieuse d'un roi accompagné, selon le texte, de 20 000 soldats. On connaît peu de chose de ses débuts : les sources sont rares.",
      highlight: { value: '682', label: 'inscription de Kedukan Bukit' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le maître des détroits',
      years: [900, 1200],
      caption: "Srivijaya contrôle les détroits de Malacca et de la Sonde, passages obligés entre l'océan Indien et la mer de Chine.",
    },
    {
      id: 'detroit',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Une puissance de la mer',
      body:
        "Srivijaya est une thalassocratie : sa force vient de la mer. Ses navires surveillent les détroits et obligent les marchands à faire escale dans ses ports, où ils paient des taxes. Plutôt qu'un territoire uni, c'est un réseau de ports et de chefs locaux liés au roi par des serments.",
    },
    {
      id: 'mousson',
      tier: 1,
      type: 'text',
      kicker: 'Monde',
      title: 'Au rythme des moussons',
      body:
        "Les navires entre l'Inde et la Chine dépendent des moussons, des vents qui changent de sens selon les saisons. Les marchands doivent attendre le bon vent dans les ports de Srivijaya. On y échange soie et céramiques chinoises, tissus indiens, mais aussi camphre, résines parfumées, or et épices de l'archipel.",
    },
    {
      id: 'yijing',
      tier: 1,
      type: 'person',
      nom: 'Yijing',
      role: 'Moine bouddhiste chinois',
      dates: '635 – 713',
      description: "En route vers l'Inde, il fait escale à Srivijaya en 671 pour apprendre le sanskrit, puis y revient de longues années. Il écrit que plus de mille moines y étudient et conseille aux pèlerins chinois de s'y préparer avant de partir pour l'Inde.",
    },
    {
      id: 'bouddhisme',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Un grand centre bouddhiste',
      body:
        "Les rois de Srivijaya protègent le bouddhisme du Grand Véhicule (mahayana). Au IXe siècle, un roi de Srivijaya finance un monastère à Nalanda, la grande université bouddhiste de l'Inde. Au début du XIe siècle, le maître indien Atisha vient étudier auprès d'un maître de Sumatra avant de partir enseigner au Tibet.",
    },
    {
      id: 'chola',
      tier: 1,
      type: 'text',
      kicker: 'Crise',
      title: 'Le raid des Chola',
      body:
        "Vers 1025, la flotte de Rajendra Ier, roi chola de l'Inde du Sud, attaque Srivijaya. Selon les inscriptions chola, elle pille de nombreux ports et capture le roi. Srivijaya survit, mais son monopole sur les détroits est ébranlé.",
      highlight: { value: '≈ 1025', label: 'expédition navale des Chola' },
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Durée',
      title: 'Sept siècles sur les détroits',
      items: [
        { year: 671, label: 'Escale du moine chinois Yijing' },
        { year: 682, label: 'Inscription de Kedukan Bukit' },
        { year: 1025, label: 'Raid de la flotte chola' },
        { year: 1377, label: 'Palembang soumise par le royaume javanais de Majapahit (vers)' },
      ],
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Un lent effacement',
      body:
        "Après 1025, le centre du pouvoir se déplace vers Jambi, plus au nord de Sumatra. Des royaumes rivaux grandissent, notamment à Java. Vers 1377, Palembang passe sous la domination de Majapahit. Peu après, un prince venu de Palembang fonde Malacca, nouveau grand port des détroits.",
    },

    // ── Niveau 2 ──
    {
      id: 'redecouverte',
      tier: 2,
      type: 'keyfigure',
      kicker: 'Connaissance',
      value: '1918',
      label: "l'empire de Srivijaya est identifié par les historiens",
      caption: "Le savant français George Cœdès rapproche des inscriptions de Sumatra et des récits chinois et arabes, et reconnaît un même royaume. Avant lui, Srivijaya était presque oublié.",
    },
    {
      id: 'archeologie',
      tier: 2,
      type: 'text',
      kicker: 'Connaissance',
      title: "Un empire difficile à fouiller",
      body:
        "On a retrouvé peu de monuments : les maisons et palais étaient en bois, dans des régions humides. Les archéologues étudient des inscriptions, des statues de Bouddha, des perles et des tessons de céramique chinoise. L'emplacement exact de la capitale a longtemps été discuté.",
    },
    {
      id: 'navires',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Des navires cousus',
      body:
        "Les navires d'Asie du Sud-Est de cette époque sont souvent assemblés avec des chevilles de bois et des liens de fibres végétales plutôt qu'avec des clous. Des épaves retrouvées près de Sumatra et de Java montrent cette technique.",
    },
    {
      id: 'noms',
      tier: 2,
      type: 'text',
      kicker: 'Monde',
      title: 'Un royaume aux nombreux noms',
      body:
        "Les Chinois l'appellent Shilifoshi, puis Sanfoqi ; les géographes arabes parlent de Zabag ou de Sribuza. Ces mentions montrent que Srivijaya était connu de tous les marchands de l'océan Indien.",
    },
  ],

  quiz: [
    { id: 'ile', type: 'mcq', prompt: 'Sur quelle île se trouve Palembang, cœur de Srivijaya ?', options: ['Sumatra', 'Bornéo', 'Java', 'Bali'], answer: 0 },
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve surtout Srivijaya ?', options: ["L'Indonésie", 'Le Japon', "L'Inde", 'Les Philippines'], answer: 0 },
    { id: 'thalasso', type: 'mcq', prompt: 'Comment appelle-t-on une puissance dont la force vient de la mer ?', options: ['Une thalassocratie', 'Une théocratie', 'Une monarchie absolue', 'Une démocratie'], answer: 0 },
    { id: 'detroit', type: 'mcq', prompt: 'Quel détroit Srivijaya contrôle-t-il ?', options: ['Le détroit de Malacca', 'Le détroit de Gibraltar', 'Le Bosphore', 'Le détroit de Béring'], answer: 0 },
    { id: 'taxes', type: 'tf', prompt: 'Srivijaya tire une grande partie de sa richesse des taxes payées par les marchands.', answer: true },
    { id: 'mousson', type: 'mcq', prompt: 'Que sont les moussons ?', options: ['Des vents qui changent de sens selon les saisons', 'Des navires de guerre', 'Des impôts sur le commerce', 'Des moines voyageurs'], answer: 0 },
    { id: 'inscription', type: 'mcq', prompt: 'En quelle langue est rédigée l’inscription de Kedukan Bukit (682) ?', options: ['En vieux malais', 'En chinois', 'En arabe', 'En latin'], answer: 0 },
    { id: 'religion', type: 'mcq', prompt: 'Quelle religion les rois de Srivijaya protègent-ils ?', options: ['Le bouddhisme', 'Le christianisme', "L'islam", 'Le zoroastrisme'], answer: 0 },
    { id: 'yijing', type: 'mcq', prompt: 'Pourquoi le moine chinois Yijing fait-il escale à Srivijaya ?', options: ['Pour apprendre le sanskrit', 'Pour acheter des chevaux', 'Pour négocier un mariage', 'Pour fuir la guerre'], answer: 0 },
    { id: 'moines', type: 'tf', prompt: 'Selon Yijing, plus de mille moines bouddhistes étudient à Srivijaya.', answer: true },
    { id: 'nalanda', type: 'mcq', prompt: 'Dans quelle grande université bouddhiste de l’Inde un roi de Srivijaya finance-t-il un monastère ?', options: ['Nalanda', 'Samye', 'Bologne', 'Al-Azhar'], answer: 0 },
    { id: 'atisha', type: 'mcq', prompt: 'Après avoir étudié auprès d’un maître de Sumatra, dans quel pays le maître indien Atisha part-il enseigner ?', options: ['Au Tibet', 'Au Japon', 'En Perse', 'En Égypte'], answer: 0 },
    { id: 'chola', type: 'mcq', prompt: 'Quel empire indien attaque Srivijaya vers 1025 ?', options: ['Les Chola', 'Les Moghols', 'Les Maurya', 'Les Gupta'], answer: 0 },
    { id: 'disparition', type: 'tf', prompt: 'Srivijaya disparaît complètement dès le raid de 1025.', answer: false, explanation: 'Il survit encore plus de trois siècles, mais affaibli, avec un centre déplacé vers Jambi.' },
    { id: 'majapahit', type: 'mcq', prompt: 'Quel royaume javanais domine Palembang vers 1377 ?', options: ['Majapahit', 'Angkor', 'Champa', 'Ayutthaya'], answer: 0 },
    { id: 'malacca', type: 'mcq', prompt: 'Quel port un prince venu de Palembang fonde-t-il vers 1400 ?', options: ['Malacca', 'Bangkok', 'Batavia', 'Manille'], answer: 0 },
    { id: 'coedes', type: 'mcq', prompt: 'Quel savant identifie Srivijaya en 1918 ?', options: ['George Cœdès', 'Henri Mouhot', 'Champollion', 'Marco Polo'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Escale du moine Yijing', 'Raid de la flotte chola', 'Domination de Majapahit sur Palembang', 'Identification de Srivijaya par Cœdès'] },
  ],

  recap: [
    'VIIe siècle : un royaume bouddhiste naît à Palembang (Sumatra)',
    'Une thalassocratie qui taxe le commerce des détroits',
    'Un grand centre d’études bouddhiques décrit par Yijing',
    '1025 : raid des Chola, puis lent déclin jusqu’au XIVe siècle',
  ],
}

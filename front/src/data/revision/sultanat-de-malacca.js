/** Chapitre rédigé : Sultanat de Malacca (vers 1400 – 1511). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'fondation',
      tier: 1,
      type: 'person',
      nom: 'Parameswara',
      role: 'Fondateur de Malacca',
      dates: 'vers 1344 – 1414',
      description:
        "Prince venu de Sumatra, chassé de plusieurs villes, il s'installe vers 1400 sur la côte de la péninsule malaise. Il y fonde Malacca et obtient la protection de la Chine des Ming.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le détroit de Malacca',
      years: [1500],
      caption: 'Malacca contrôle le détroit qui relie l’océan Indien à la mer de Chine.',
    },
    {
      id: 'detroit',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Un passage obligé',
      body:
        "Les navires qui vont de l'océan Indien à la mer de Chine doivent passer par le détroit de Malacca. Ils attendent au port que les vents de la mousson tournent : Malacca devient le plus grand marché d'Asie du Sud-Est.",
      highlight: { value: '84', label: 'langues parlées au port, selon Tomé Pires' },
    },
    {
      id: 'chine',
      tier: 1,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'La protection de la Chine',
      body:
        "Les flottes de l'amiral chinois Zheng He font escale à Malacca. En 1411, Parameswara se rend à la cour de l'empereur Yongle avec plus de 500 personnes. Cette protection l'aide face à ses voisins.",
    },
    {
      id: 'islam',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Un centre de l’islam',
      body:
        "Au début du XVe siècle, les souverains de Malacca adoptent l'islam, apporté par des marchands venus d'Inde et d'Arabie. Malacca contribue à sa diffusion dans l'archipel.",
    },
    {
      id: 'malais',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'La langue du commerce',
      body:
        "Le malais parlé à Malacca devient la langue du commerce dans toute la région. Il est à l'origine des langues nationales de la Malaisie et de l'Indonésie.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Malacca en dates',
      items: [
        { year: 1400, label: 'Fondation (vers)' },
        { year: 1411, label: 'Voyage de Parameswara en Chine' },
        { year: 1459, label: 'Mansur Shah sultan' },
        { year: 1511, label: 'Prise de Malacca par les Portugais' },
      ],
    },
    {
      id: 'portugais',
      tier: 1,
      type: 'war',
      nom: 'Prise de Malacca (1511)',
      annee: 1511,
      adversaires: ['Royaume de Portugal (Afonso de Albuquerque)'],
      allies: ['Sultanat de Malacca'],
      vainqueur: 'Portugal',
      consequences:
        "Les Portugais, qui veulent contrôler le commerce des épices, prennent la ville et y bâtissent une forteresse. Le sultan se réfugie plus au sud et fonde le sultanat de Johor.",
    },
    {
      id: 'venise',
      tier: 1,
      type: 'text',
      kicker: 'Sources',
      title: 'Tenir Venise à la gorge',
      body:
        "Le Portugais Tomé Pires écrit que celui qui est maître de Malacca tient Venise à la gorge, car les épices qui arrivent en Europe par Venise passent d'abord par ce port.",
    },

    // ── Niveau 2 ──
    {
      id: 'legende',
      tier: 2,
      type: 'text',
      kicker: 'Légende',
      title: 'Le chevrotain courageux',
      body:
        "Selon la légende, Parameswara choisit l'emplacement de la ville après avoir vu un petit chevrotain repousser ses chiens de chasse, au pied d'un arbre appelé melaka.",
    },
    {
      id: 'bendahara',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Le bendahara',
      body:
        "Le sultan gouverne avec un Premier ministre, le bendahara. Le plus célèbre, Tun Perak, sert quatre sultans et mène Malacca à son apogée au milieu du XVe siècle.",
    },
    {
      id: 'hangtuah',
      tier: 2,
      type: 'text',
      kicker: 'Littérature',
      title: 'Hang Tuah',
      body:
        "Héros d'une épopée malaise, ce guerrier est un modèle de loyauté envers son sultan. On ne sait pas s'il a vraiment existé.",
    },
    {
      id: 'code',
      tier: 2,
      type: 'text',
      kicker: 'Droit',
      title: 'Un code maritime',
      body:
        "Le sultanat met par écrit les règles de la navigation et du commerce dans son port : c'est le code maritime de Malacca.",
    },
    {
      id: 'aujourdhui',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Malacca aujourd’hui',
      body:
        "La vieille ville de Malacca, marquée par ses différentes époques, est inscrite au patrimoine mondial de l'UNESCO depuis 2008.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve Malacca ?', options: ['La Malaisie', 'L’Indonésie', 'La Thaïlande', 'Les Philippines'], answer: 0 },
    { id: 'fondateur', type: 'mcq', prompt: 'Qui fonde Malacca vers 1400 ?', options: ['Parameswara', 'Zheng He', 'Gajah Mada', 'Albuquerque'], answer: 0 },
    { id: 'detroit', type: 'mcq', prompt: 'Quelles mers relie le détroit de Malacca ?', options: ['L’océan Indien et la mer de Chine', 'La Méditerranée et la mer Noire', 'L’Atlantique et le Pacifique', 'La mer Rouge et le golfe Persique'], answer: 0 },
    { id: 'mousson', type: 'mcq', prompt: 'Pourquoi les navires attendent-ils à Malacca ?', options: ['Que les vents de la mousson tournent', 'Que la marée monte', 'Que le sultan les autorise', 'Que la glace fonde'], answer: 0 },
    { id: 'chine', type: 'mcq', prompt: 'Quel empire protège Malacca à ses débuts ?', options: ['La Chine des Ming', 'L’Empire ottoman', 'Le Portugal', 'Le Japon'], answer: 0 },
    { id: 'zhenghe', type: 'mcq', prompt: 'Quel amiral chinois fait escale à Malacca ?', options: ['Zheng He', 'Kubilai Khan', 'Marco Polo', 'Ibn Battuta'], answer: 0 },
    { id: 'religion', type: 'mcq', prompt: 'Quelle religion les souverains de Malacca adoptent-ils ?', options: ['L’islam', 'Le bouddhisme', 'Le christianisme', 'L’hindouisme'], answer: 0 },
    { id: 'langues', type: 'mcq', prompt: 'Combien de langues parlait-on à Malacca, selon Tomé Pires ?', options: ['84', '2', '10', '500'], answer: 0 },
    { id: 'malais', type: 'tf', prompt: 'Le malais de Malacca est à l’origine des langues nationales de la Malaisie et de l’Indonésie.', answer: true },
    { id: 'portugais', type: 'mcq', prompt: 'Qui prend Malacca en 1511 ?', options: ['Les Portugais', 'Les Hollandais', 'Les Anglais', 'Les Chinois'], answer: 0 },
    { id: 'albuquerque', type: 'mcq', prompt: 'Quel chef portugais conquiert Malacca ?', options: ['Afonso de Albuquerque', 'Vasco de Gama', 'Magellan', 'Henri le Navigateur'], answer: 0 },
    { id: 'epices', type: 'mcq', prompt: 'Quel commerce les Portugais veulent-ils contrôler ?', options: ['Celui des épices', 'Celui du pétrole', 'Celui du café', 'Celui de la laine'], answer: 0 },
    { id: 'venise', type: 'mcq', prompt: 'Quelle ville, selon Tomé Pires, le maître de Malacca tient « à la gorge » ?', options: ['Venise', 'Lisbonne', 'Pékin', 'Le Caire'], answer: 0 },
    { id: 'bendahara', type: 'mcq', prompt: 'Comment s’appelle le Premier ministre du sultan ?', options: ['Le bendahara', 'Le vizir', 'Le peshwa', 'Le patih'], answer: 0 },
    { id: 'johor', type: 'mcq', prompt: 'Où se réfugie le sultan après 1511 ?', options: ['Plus au sud, à Johor', 'En Chine', 'À Java', 'En Inde'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Fondation (vers)', 'Voyage de Parameswara en Chine', 'Mansur Shah sultan', 'Prise de Malacca par les Portugais'] },
  ],

  recap: [
    'Vers 1400, Parameswara fonde Malacca, sur le détroit qui relie deux océans',
    'Protégé par la Chine, Malacca devient le plus grand port d’Asie du Sud-Est',
    'L’islam et la langue malaise se diffusent dans l’archipel',
    '1511 : les Portugais prennent Malacca ; le sultan fonde Johor',
  ],
}

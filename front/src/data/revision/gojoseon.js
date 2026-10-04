/** Chapitre rédigé : Royaume de Gojoseon (Corée ancienne, jusqu'en 108 av. J.-C.). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'dangun',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Le mythe de Dangun',
      body:
        "Selon la légende, Hwanung, fils du dieu du Ciel, descend sur une montagne. Une ourse et un tigre veulent devenir humains : il leur ordonne de rester dans une grotte en ne mangeant que de l'armoise et de l'ail. Le tigre abandonne, l'ourse devient une femme. Leur fils, Dangun, fonde le royaume de Joseon.",
      highlight: { value: '2333 av. J.-C.', label: 'date traditionnelle (légendaire) de la fondation' },
    },
    {
      id: 'mythe-histoire',
      tier: 1,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Mythe ou histoire ?',
      body:
        "Le mythe de Dangun n'est connu que par un livre écrit vers 1281 apr. J.-C., le Samguk yusa du moine Iryeon, plus de 3 500 ans après la date qu'il donne. Les historiens le considèrent comme un récit fondateur, pas comme un fait prouvé. En Corée du Sud, le 3 octobre reste la « fête de la fondation de la nation ».",
    },
    {
      id: 'attestation',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Un royaume attesté par les textes chinois',
      body:
        "Le Gojoseon (« l'ancien Joseon ») apparaît dans les textes chinois au cours du Ier millénaire av. J.-C. Vers le IVe siècle av. J.-C., ses chefs prennent le titre de roi. Le royaume s'étend sur le nord de la péninsule coréenne et sur une partie de la Mandchourie, mais ses frontières exactes sont discutées.",
      highlight: { value: '≈ IVe siècle av. J.-C.', label: 'les souverains de Joseon se disent rois' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Entre la Mandchourie et la péninsule',
      years: [-400],
      caption: "Repérez le royaume au nord de la péninsule coréenne, voisin des royaumes chinois comme celui de Yan.",
    },
    {
      id: 'dolmens',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Découvertes',
      value: '≈ 40 %',
      label: 'des dolmens du monde se trouvent en Corée',
      caption: "Ces tombes de grandes pierres datent de l'âge du bronze. Elles sont présentes dans toute la péninsule, au-delà du seul Gojoseon. Les sites de Gochang, Hwasun et Ganghwa sont inscrits à l'UNESCO depuis 2000.",
    },
    {
      id: 'poignard',
      tier: 1,
      type: 'text',
      kicker: 'Culture',
      title: 'Le poignard en forme de luth',
      body:
        "Les archéologues associent souvent au Gojoseon un poignard en bronze à lame arrondie, en forme de luth (ou de mandoline). On le retrouve en Mandchourie et en Corée, dans des tombes de chefs : c'était sans doute un signe de prestige.",
    },
    {
      id: 'lois',
      tier: 1,
      type: 'text',
      kicker: 'Droits',
      title: 'Les « Huit lois »',
      body:
        "Une chronique chinoise rapporte que le Gojoseon avait huit lois ; trois seulement nous sont parvenues. Celui qui tue est mis à mort, celui qui blesse paie en grain, et le voleur devient l'esclave de sa victime, sauf s'il paie une forte amende.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Fluctuations',
      title: 'Du mythe à la conquête',
      items: [
        { year: -2333, label: 'Fondation par Dangun selon la légende' },
        { year: -300, label: 'Guerre contre le royaume chinois de Yan (vers)' },
        { year: -194, label: 'Wiman prend le pouvoir (vers)' },
        { year: -109, label: "L'empereur Han Wudi attaque le Gojoseon" },
        { year: -108, label: 'Chute de la capitale Wanggeom' },
      ],
    },
    {
      id: 'guerre-han',
      tier: 1,
      type: 'war',
      nom: 'Guerre Han-Gojoseon',
      annee: -109,
      adversaires: ['Dynastie Han (empereur Wudi)'],
      allies: ['Royaume de Gojoseon (roi Ugeo)'],
      vainqueur: 'Dynastie Han',
      consequences: "Attaquée par terre et par mer, la capitale résiste près d'un an. En 108 av. J.-C., le roi Ugeo est assassiné par ses propres ministres et la ville tombe. Les Han créent quatre commanderies dans le nord de la péninsule.",
    },

    // ── Niveau 2 ──
    {
      id: 'wiman',
      tier: 2,
      type: 'person',
      nom: 'Wiman',
      role: 'Roi du Gojoseon',
      dates: 'prend le pouvoir vers 194 av. J.-C.',
      description: "Venu du royaume chinois de Yan avec un millier de partisans, il est accueilli par le roi Jun, qui lui confie la garde de la frontière. Il le renverse ensuite et prend le trône. Ses successeurs profitent du commerce entre la Chine et le sud de la péninsule.",
    },
    {
      id: 'ugeo',
      tier: 2,
      type: 'person',
      nom: 'Ugeo',
      role: 'Dernier roi du Gojoseon',
      dates: 'mort en 108 av. J.-C.',
      description: "Petit-fils de Wiman, il empêche les petits États du sud de la péninsule de commercer directement avec la Chine. Cette politique, et la mort d'un envoyé chinois, servent de prétexte à l'invasion des Han.",
    },
    {
      id: 'gija',
      tier: 2,
      type: 'text',
      kicker: 'Connaissance',
      title: 'La légende de Gija',
      body:
        "D'anciens textes chinois racontent qu'un noble chinois, Gija (Jizi), serait venu régner sur Joseon vers 1100 av. J.-C. La plupart des historiens actuels doutent de ce récit, qui n'est confirmé par aucune découverte archéologique.",
    },
    {
      id: 'lelang',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Après la conquête',
      body:
        "La commanderie chinoise de Lelang (Nangnang), près de l'actuelle Pyongyang, dure jusqu'en 313 apr. J.-C., quand le royaume coréen de Goguryeo s'en empare. L'emplacement exact de la capitale du Gojoseon fait encore débat : Pyongyang ou la région du Liaoning.",
    },
  ],

  quiz: [
    { id: 'dangun', type: 'mcq', prompt: 'Qui est le fondateur légendaire du Gojoseon ?', options: ['Dangun', 'Wiman', 'Ugeo', 'Gija'], answer: 0 },
    { id: 'ourse', type: 'mcq', prompt: 'Dans le mythe, quel animal devient une femme et met au monde Dangun ?', options: ['Une ourse', 'Une tigresse', 'Une louve', 'Une grue'], answer: 0 },
    { id: 'aliments', type: 'mcq', prompt: 'Que doivent manger l’ourse et le tigre dans la grotte ?', options: ['De l’armoise et de l’ail', 'Du riz et du poisson', 'Du miel et des pommes', 'De la viande crue'], answer: 0 },
    { id: 'date-mythe', type: 'mcq', prompt: 'Quelle est la date traditionnelle de la fondation par Dangun ?', options: ['2333 av. J.-C.', '108 av. J.-C.', '194 av. J.-C.', '1281 apr. J.-C.'], answer: 0 },
    { id: 'preuve', type: 'tf', prompt: 'La fondation du royaume par Dangun en 2333 av. J.-C. est prouvée par des documents de l’époque.', answer: false, explanation: 'C’est une légende connue par un livre du XIIIe siècle apr. J.-C.' },
    { id: 'samguk', type: 'mcq', prompt: 'Dans quel livre le mythe de Dangun est-il raconté pour la première fois ?', options: ['Le Samguk yusa', 'Les Mémoires historiques', 'Les Analectes', 'Le Kojiki'], answer: 0 },
    { id: 'fete', type: 'mcq', prompt: 'Quel jour la Corée du Sud fête-t-elle la fondation de la nation ?', options: ['Le 3 octobre', 'Le 14 juillet', 'Le 1er janvier', 'Le 15 août'], answer: 0 },
    { id: 'sources', type: 'tf', prompt: 'Les premières mentions historiques du Gojoseon se trouvent dans des textes chinois.', answer: true },
    { id: 'dolmens', type: 'mcq', prompt: 'Quel type de monument préhistorique est particulièrement nombreux en Corée ?', options: ['Les dolmens', 'Les pyramides', 'Les ziggourats', 'Les menhirs alignés de Carnac'], answer: 0 },
    { id: 'poignard', type: 'mcq', prompt: 'Quelle forme a le poignard en bronze associé au Gojoseon ?', options: ['Une forme de luth', 'Une forme de croissant', 'Une forme de serpent', 'Une forme de croix'], answer: 0 },
    { id: 'lois', type: 'mcq', prompt: 'Combien de lois du Gojoseon nous sont parvenues ?', options: ['Trois sur huit', 'Huit sur huit', 'Une sur dix', 'Douze tables'], answer: 0 },
    { id: 'wiman', type: 'mcq', prompt: 'Qui prend le pouvoir au Gojoseon vers 194 av. J.-C. ?', options: ['Wiman', 'Dangun', 'Wudi', 'Jumong'], answer: 0 },
    { id: 'han', type: 'mcq', prompt: 'Quel empereur chinois conquiert le Gojoseon ?', options: ['Han Wudi', 'Qin Shi Huang', 'Gaozu', 'Kubilai Khan'], answer: 0 },
    { id: 'fin', type: 'mcq', prompt: 'En quelle année le Gojoseon tombe-t-il face aux Han ?', options: ['108 av. J.-C.', '2333 av. J.-C.', '313 apr. J.-C.', '668 apr. J.-C.'], answer: 0 },
    { id: 'ugeo', type: 'tf', prompt: 'Le dernier roi Ugeo est assassiné par ses propres ministres.', answer: true },
    { id: 'lelang', type: 'mcq', prompt: 'Comment s’appelle la principale commanderie chinoise créée après la conquête ?', options: ['Lelang (Nangnang)', 'Goguryeo', 'Silla', 'Baekje'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Date légendaire de Dangun', 'Prise du pouvoir par Wiman', 'Conquête par les Han', 'Prise de Lelang par Goguryeo'] },
  ],

  recap: [
    'Dangun (2333 av. J.-C.) : un mythe fondateur, pas un fait prouvé',
    'Un royaume attesté par les textes chinois, rois dès le IVe siècle av. J.-C.',
    'Dolmens, poignards en bronze et « Huit lois »',
    '108 av. J.-C. : conquête par les Han de Wudi',
  ],
}

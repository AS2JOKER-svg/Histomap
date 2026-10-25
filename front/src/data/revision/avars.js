/** Chapitre rédigé : Khaganat avar (567 – 822). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'steppes',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Des cavaliers venus des steppes',
      body:
        "Vers 558, un peuple de cavaliers venus des steppes d'Asie centrale, les Avars, apparaît aux frontières de l'Empire byzantin. Leurs origines exactes restent discutées.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le khaganat avar',
      years: [600, 800],
      caption: 'Comparez : les Avars dominent la plaine du Danube, au cœur de l’Europe.',
    },
    {
      id: 'pannonie',
      tier: 1,
      type: 'text',
      kicker: 'Installation',
      title: 'La plaine de Pannonie',
      body:
        "En 567, alliés aux Lombards, les Avars détruisent le royaume des Gépides. Quand les Lombards partent pour l'Italie, en 568, les Avars s'installent dans la plaine du Danube, l'actuelle Hongrie.",
      highlight: { value: '568', label: 'installation en Pannonie' },
    },
    {
      id: 'bayan',
      tier: 1,
      type: 'person',
      nom: 'Bayan Ier',
      role: 'Khagan des Avars',
      dates: 'règne vers 562 – vers 602',
      description:
        "Sous son règne, les Avars lancent des raids dans les Balkans, prennent la ville byzantine de Sirmium (582) et obtiennent de Byzance des tributs en or de plus en plus élevés.",
    },
    {
      id: 'constantinople',
      tier: 1,
      type: 'war',
      nom: 'Siège de Constantinople (626)',
      annee: 626,
      adversaires: ['Empire byzantin'],
      allies: ['Avars', 'Perses sassanides'],
      vainqueur: 'Empire byzantin',
      consequences:
        "Avec les Perses, les Avars assiègent Constantinople, mais les murailles et la flotte byzantines résistent. L'échec affaiblit le khagan, et plusieurs peuples soumis se révoltent.",
    },
    {
      id: 'slaves',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Les peuples soumis',
      body:
        "Une élite de cavaliers avars domine de nombreux peuples, surtout slaves, qui cultivent la terre et fournissent des guerriers.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les Avars en dates',
      items: [
        { year: 567, label: 'Destruction des Gépides' },
        { year: 582, label: 'Prise de Sirmium' },
        { year: 626, label: 'Siège de Constantinople' },
        { year: 796, label: 'Prise du Ring par les Francs' },
        { year: 822, label: 'Dernière mention des Avars' },
      ],
    },
    {
      id: 'francs',
      tier: 1,
      type: 'war',
      nom: 'Guerres avaro-franques',
      annee: 791,
      adversaires: ['Royaume franc (Charlemagne)'],
      allies: ['Avars'],
      vainqueur: 'Francs',
      consequences:
        "Les Francs de Charlemagne pénètrent dans la plaine du Danube et prennent le Ring, le grand camp fortifié des khagans, avec son trésor. Les Avars se soumettent et disparaissent peu à peu.",
    },
    {
      id: 'etrier',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'L’étrier',
      body:
        "Les plus anciens étriers de fer retrouvés en Europe viennent de tombes avares. Les Avars ont sans doute contribué à diffuser cette invention qui permet de mieux tenir à cheval.",
    },

    // ── Niveau 2 ──
    {
      id: 'tresor',
      tier: 2,
      type: 'text',
      kicker: 'Récit',
      title: 'Le trésor du Ring',
      body:
        "Selon une source franque, le trésor pris aux Avars en 796 était si grand qu'il fallut quinze chariots tirés par des bœufs pour le transporter.",
    },
    {
      id: 'ceintures',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'Les ceintures',
      body:
        "La ceinture est un signe de rang : elle porte des plaques de bronze décorées de griffons et de rinceaux, auxquelles on accroche armes et outils.",
    },
    {
      id: 'tributs',
      tier: 2,
      type: 'text',
      kicker: 'Économie',
      title: 'L’or de Byzance',
      body:
        "Pour éviter leurs raids, l'Empire byzantin verse aux Avars d'énormes tributs en or chaque année.",
    },
    {
      id: 'samo',
      tier: 2,
      type: 'text',
      kicker: 'Résistance',
      title: 'La révolte de Samo',
      body:
        "Selon une chronique franque, vers 623, un marchand franc, Samo, prend la tête des Slaves révoltés contre les Avars et fonde un royaume.",
    },
    {
      id: 'hongrois',
      tier: 2,
      type: 'text',
      kicker: 'Après',
      title: 'Après les Avars',
      body:
        "Après leur disparition, la plaine de Pannonie est occupée par des Slaves, puis, à la fin du IXe siècle, par les Hongrois.",
    },
  ],

  quiz: [
    { id: 'origine', type: 'mcq', prompt: 'D’où viennent les Avars ?', options: ['Des steppes d’Asie centrale', 'D’Afrique du Nord', 'De Scandinavie', 'D’Arabie'], answer: 0 },
    { id: 'mode', type: 'mcq', prompt: 'Comment se déplacent et combattent les Avars ?', options: ['À cheval', 'En bateau', 'Sur des chars', 'À dos de chameau'], answer: 0 },
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel s’installent les Avars ?', options: ['La Hongrie', 'L’Espagne', 'L’Irlande', 'Le Portugal'], answer: 0 },
    { id: 'gepides', type: 'mcq', prompt: 'Avec qui les Avars détruisent-ils le royaume des Gépides ?', options: ['Les Lombards', 'Les Francs', 'Les Byzantins', 'Les Vikings'], answer: 0 },
    { id: 'titre', type: 'mcq', prompt: 'Quel titre porte le chef des Avars ?', options: ['Khagan', 'Pharaon', 'Calife', 'Doge'], answer: 0 },
    { id: 'bayan', type: 'mcq', prompt: 'Quel khagan fonde la puissance avare en Europe ?', options: ['Bayan Ier', 'Attila', 'Gengis Khan', 'Samo'], answer: 0 },
    { id: 'tributs', type: 'mcq', prompt: 'Que paie Byzance aux Avars pour éviter leurs raids ?', options: ['Des tributs en or', 'Des chevaux', 'Des esclaves', 'Rien'], answer: 0 },
    { id: 'siege', type: 'mcq', prompt: 'Quelle ville les Avars assiègent-ils en vain en 626 ?', options: ['Constantinople', 'Rome', 'Paris', 'Jérusalem'], answer: 0 },
    { id: 'perses', type: 'tf', prompt: 'En 626, les Avars sont alliés aux Perses.', answer: true },
    { id: 'slaves', type: 'mcq', prompt: 'Quels peuples les Avars dominent-ils surtout ?', options: ['Des peuples slaves', 'Des peuples arabes', 'Des peuples celtes', 'Des peuples berbères'], answer: 0 },
    { id: 'ring', type: 'mcq', prompt: 'Comment s’appelle le grand camp fortifié des khagans ?', options: ['Le Ring', 'Le Kremlin', 'L’Acropole', 'Le Limes'], answer: 0 },
    { id: 'charlemagne', type: 'mcq', prompt: 'Qui détruit la puissance avare à la fin du VIIIe siècle ?', options: ['Charlemagne', 'Clovis', 'Justinien', 'Attila'], answer: 0 },
    { id: 'etrier', type: 'mcq', prompt: 'Quelle invention les Avars ont-ils sans doute contribué à diffuser en Europe ?', options: ['L’étrier', 'L’imprimerie', 'La boussole', 'Le moulin à vent'], answer: 0 },
    { id: 'ceinture', type: 'tf', prompt: 'Chez les Avars, la ceinture décorée est un signe de rang.', answer: true },
    { id: 'apres', type: 'mcq', prompt: 'Quel peuple occupe la plaine de Pannonie à la fin du IXe siècle ?', options: ['Les Hongrois', 'Les Romains', 'Les Wisigoths', 'Les Normands'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Destruction des Gépides', 'Prise de Sirmium', 'Siège de Constantinople', 'Prise du Ring par les Francs'] },
  ],

  recap: [
    'Des cavaliers venus des steppes s’installent en Pannonie (568)',
    'Sous Bayan Ier, ils rançonnent Byzance ; échec devant Constantinople (626)',
    'Ils dominent des peuples slaves ; les plus anciens étriers de fer d’Europe',
    'Charlemagne détruit leur puissance (791-796) ; ils disparaissent après 822',
  ],
}

/** Chapitre rédigé : Empire ashanti (1701 – 1789). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'akan',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Des royaumes akan de la forêt',
      body:
        "À la fin du XVIIe siècle, plusieurs petits États akan de la forêt de l'actuel Ghana sont soumis au puissant royaume de Denkyira. Autour de la ville de Kumasi, le roi Osei Tutu les rassemble en une confédération : les Ashanti (ou Asante).",
      highlight: { value: 'Kumasi', label: 'capitale de la confédération' },
    },
    {
      id: 'osei-tutu',
      tier: 1,
      type: 'person',
      nom: 'Osei Tutu Ier',
      role: 'Premier asantehene (roi des Ashanti)',
      dates: 'mort vers 1717',
      description: "Roi de Kumasi à partir de la fin du XVIIe siècle, il unit les chefferies ashanti et libère la confédération de la domination du Denkyira. Il meurt vers 1717 au cours d'une guerre contre le royaume d'Akyem.",
    },
    {
      id: 'trone-or',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: "Le Trône d'or",
      body:
        "Selon la tradition, le prêtre Okomfo Anokye fait descendre du ciel un tabouret recouvert d'or, le Sika Dwa Kofi, qui se pose sur les genoux d'Osei Tutu. Il contiendrait l'âme de toute la nation. Personne, pas même le roi, ne doit s'y asseoir.",
    },
    {
      id: 'feyiase',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Feyiase',
      annee: 1701,
      adversaires: ['Royaume de Denkyira (roi Ntim Gyakari)'],
      allies: ['Confédération ashanti (Osei Tutu)'],
      vainqueur: 'Les Ashanti',
      consequences: "Le roi du Denkyira est tué. Les Ashanti cessent de lui payer tribut et prennent le contrôle des routes de l'or vers la côte.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Un empire qui s’étend',
      years: [1715, 1783],
      caption: "Comparez : au fil du XVIIIe siècle, l'empire s'étend de la forêt vers les savanes du nord et contrôle une grande partie de l'actuel Ghana.",
    },
    {
      id: 'opoku-ware',
      tier: 1,
      type: 'person',
      nom: 'Opoku Ware Ier',
      role: 'Asantehene',
      dates: 'règne vers 1720 – 1750',
      description: "Successeur d'Osei Tutu, c'est un grand conquérant : il soumet le royaume de Bono au nord, puis le Gonja et le Dagbon dans la savane. Sous son règne, l'empire atteint presque ses frontières maximales.",
    },
    {
      id: 'or',
      tier: 1,
      type: 'text',
      kicker: 'Âge d’or',
      title: 'Un pays de l’or',
      body:
        "La forêt ashanti est riche en or, extrait des mines et des rivières. L'or en poudre sert de monnaie : on le pèse avec de petits poids en laiton, sculptés en formes géométriques ou en animaux. Les Européens appellent la région la « Côte de l'Or ».",
    },
    {
      id: 'traite',
      tier: 1,
      type: 'text',
      kicker: 'Monde',
      title: 'Les Ashanti et la traite atlantique',
      body:
        "Sur la côte, des forts européens (néerlandais à Elmina, britanniques à Cape Coast) achètent de l'or et des captifs. Les Ashanti vendent des prisonniers de guerre en échange de fusils, de poudre et de tissus. Selon les estimations, plus d'un million de personnes sont déportées depuis la Côte de l'Or vers les Amériques.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Durée',
      title: "Un siècle d'expansion",
      items: [
        { year: 1701, label: 'Victoire de Feyiase sur le Denkyira' },
        { year: 1717, label: "Mort d'Osei Tutu (date approximative)" },
        { year: 1723, label: 'Conquête du royaume de Bono (vers 1723)' },
        { year: 1744, label: 'Soumission du Dagbon (vers 1744)' },
      ],
    },

    // ── Niveau 2 ──
    {
      id: 'conseil',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Un roi et des chefs',
      body:
        "L'asantehene règne depuis Kumasi, mais il doit compter avec les chefs des autres cités, réunis dans un grand conseil. La reine-mère joue aussi un rôle important : elle propose le candidat au trône quand le roi meurt.",
    },
    {
      id: 'kente',
      tier: 2,
      type: 'text',
      kicker: 'Culture',
      title: 'Le kente, tissu royal',
      body:
        "Les tisserands ashanti fabriquent le kente : de longues bandes étroites aux couleurs vives, cousues ensemble. Chaque motif porte un nom et un sens. Autrefois réservé aux rois et aux grandes occasions, il est aujourd'hui un symbole du Ghana.",
    },
    {
      id: 'odwira',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: "La fête de l'Odwira",
      body:
        "Chaque année, l'Odwira réunit à Kumasi les chefs de tout l'empire. Cette grande fête des récoltes est l'occasion d'honorer les ancêtres royaux, de purifier la nation et de réaffirmer la fidélité au roi.",
    },
    {
      id: 'routes',
      tier: 2,
      type: 'text',
      kicker: 'Expansion',
      title: 'Les grandes routes de Kumasi',
      body:
        "Plusieurs grandes routes partent de Kumasi vers la côte et vers le nord. Des messagers et des postes de contrôle permettent au roi de surveiller le commerce et de lever des taxes sur les marchandises.",
    },
    {
      id: 'heritage',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Un royaume toujours vivant',
      body:
        "Au XIXe siècle, les Ashanti affrontent les Britanniques dans plusieurs guerres et sont annexés en 1902. Le royaume subsiste pourtant au sein du Ghana actuel : l'asantehene, chef traditionnel respecté, siège toujours à Kumasi, et le Trône d'or y est conservé.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve le cœur de l’Empire ashanti ?', options: ['Le Ghana', 'Le Nigeria', 'Le Mali', 'Le Sénégal'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: "Quelle est la capitale des Ashanti ?", options: ['Kumasi', 'Accra', 'Abomey', 'Gao'], answer: 0 },
    { id: 'fondateur', type: 'mcq', prompt: 'Quel roi unit la confédération ashanti ?', options: ['Osei Tutu', 'Opoku Ware', 'Askia Mohammed', 'Afonso Ier'], answer: 0 },
    { id: 'pretre', type: 'mcq', prompt: "Selon la tradition, quel prêtre fait descendre le Trône d'or du ciel ?", options: ['Okomfo Anokye', 'Ahmed Baba', 'Kimpa Vita', 'Bashorun Gaa'], answer: 0 },
    { id: 'trone', type: 'tf', prompt: "Le roi ashanti s'assoit sur le Trône d'or lors des cérémonies.", answer: false, explanation: "Personne, pas même le roi, ne doit s'asseoir sur le Trône d'or, qui contient l'âme de la nation." },
    { id: 'titre', type: 'mcq', prompt: 'Comment s’appelle le roi des Ashanti ?', options: ["L'asantehene", "L'alaafin", 'Le manikongo', "L'askia"], answer: 0 },
    { id: 'feyiase', type: 'mcq', prompt: 'Quel royaume les Ashanti battent-ils à Feyiase en 1701 ?', options: ['Le Denkyira', 'Le Dahomey', 'Le Mali', 'Le Kongo'], answer: 0 },
    { id: 'annee', type: 'mcq', prompt: 'En quelle année a lieu la bataille de Feyiase ?', options: ['1701', '1591', '1665', '1902'], answer: 0 },
    { id: 'opoku', type: 'mcq', prompt: "Quel successeur d'Osei Tutu est un grand conquérant ?", options: ['Opoku Ware Ier', 'Ghézo', 'Abiodun', 'Askia Daoud'], answer: 0 },
    { id: 'monnaie', type: 'mcq', prompt: 'Que sert de monnaie dans l’Empire ashanti ?', options: ["La poudre d'or", 'Le papier-monnaie', 'Les pièces de bronze romaines', 'Le thé'], answer: 0 },
    { id: 'poids', type: 'tf', prompt: "Les Ashanti pèsent l'or avec de petits poids en laiton sculptés.", answer: true },
    { id: 'cote', type: 'mcq', prompt: "Comment les Européens appellent-ils la côte de l'actuel Ghana ?", options: ["La Côte de l'Or", "La Côte d'Ivoire", 'La Côte des Esclaves', 'La Côte du Poivre'], answer: 0 },
    { id: 'elmina', type: 'mcq', prompt: 'Quel fort de la côte est tenu par les Néerlandais au XVIIIe siècle ?', options: ['Elmina', 'Gorée', 'Luanda', 'Ouidah'], answer: 0 },
    { id: 'echange', type: 'mcq', prompt: 'Que reçoivent surtout les Ashanti des Européens en échange de captifs ?', options: ['Des fusils et de la poudre', 'Des chevaux', 'Des épices', 'Des livres'], answer: 0 },
    { id: 'kente', type: 'mcq', prompt: 'Comment s’appelle le tissu royal ashanti ?', options: ['Le kente', 'Le wax', 'La soie', 'Le bogolan'], answer: 0 },
    { id: 'reine-mere', type: 'tf', prompt: 'La reine-mère propose le candidat au trône à la mort du roi.', answer: true },
    { id: 'aujourdhui', type: 'tf', prompt: "Il y a encore aujourd'hui un asantehene à Kumasi.", answer: true },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Bataille de Feyiase', "Mort d'Osei Tutu", 'Soumission du Dagbon', 'Annexion par les Britanniques'] },
  ],

  recap: [
    "Vers 1700 : Osei Tutu unit les Ashanti autour de Kumasi",
    "Le Trône d'or, âme sacrée de la nation",
    "1701 : victoire de Feyiase sur le Denkyira",
    "Un empire de l'or, mêlé à la traite atlantique",
  ],
}

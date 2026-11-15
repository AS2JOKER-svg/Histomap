/** Chapitre rédigé : Royaume de Madagascar (Merina) (vers 1540 – 1897). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'peuplement',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Une île peuplée depuis l’Asie',
      body:
        "Madagascar a été peuplée par des navigateurs venus d'Asie du Sud-Est, il y a plus de mille ans, puis par des populations venues d'Afrique. Le malgache est ainsi une langue cousine des langues d'Indonésie. Sur les hautes terres du centre vit le peuple merina.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le royaume merina dans le temps',
      years: [1700, 1815, 1880],
      caption: 'Comparez : d’abord limité aux hautes terres, le royaume s’étend au XIXe siècle sur une grande partie de l’île.',
    },
    {
      id: 'andrianampoinimerina',
      tier: 1,
      type: 'person',
      nom: 'Andrianampoinimerina',
      role: 'Roi de l’Imerina',
      dates: 'règne vers 1787 – 1810',
      description:
        "Il réunifie les royaumes rivaux des hautes terres et fait d'Antananarivo sa capitale. On lui attribue cette phrase : « La mer est la limite de ma rizière », qui exprime son projet de conquérir toute l'île.",
    },
    {
      id: 'radama',
      tier: 1,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Radama Ier et les Britanniques',
      body:
        "Son fils Radama Ier s'allie aux Britanniques, qui lui fournissent armes et conseillers. En échange, il interdit l'exportation d'esclaves. Avec l'aide de missionnaires, le malgache est écrit en alphabet latin et des écoles s'ouvrent.",
      highlight: { value: '1817', label: 'traité avec les Britanniques' },
    },
    {
      id: 'ranavalona',
      tier: 1,
      type: 'person',
      nom: 'Ranavalona Ire',
      role: 'Reine de Madagascar',
      dates: 'règne 1828 – 1861',
      description:
        "Elle chasse les missionnaires, interdit le christianisme et fait exécuter des chrétiens et des opposants. Elle défend l'indépendance de l'île face aux Européens, mais les corvées et les guerres pèsent lourdement sur la population.",
    },
    {
      id: 'reines',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Le royaume des reines',
      body:
        "Après 1861, trois reines se succèdent. Le pouvoir réel est exercé par le Premier ministre Rainilaiarivony, qui épouse successivement trois reines. En 1869, la reine Ranavalona II se fait baptiser : le protestantisme devient la religion de la cour.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Le royaume merina en dates',
      items: [
        { year: 1610, label: 'Antananarivo sur sa colline' },
        { year: 1787, label: 'Andrianampoinimerina réunifie l’Imerina' },
        { year: 1817, label: 'Alliance avec les Britanniques' },
        { year: 1828, label: 'Règne de Ranavalona Ire' },
        { year: 1869, label: 'Conversion de la cour' },
        { year: 1895, label: 'Conquête française' },
      ],
    },
    {
      id: 'conquete',
      tier: 1,
      type: 'war',
      nom: 'Expédition de Madagascar (1895)',
      annee: 1895,
      adversaires: ['France'],
      allies: ['Royaume de Madagascar'],
      vainqueur: 'France',
      consequences:
        "Une armée française débarque et marche vers Antananarivo ; les maladies tuent environ 6 000 soldats français, bien plus que les combats. La capitale capitule ; Madagascar devient une colonie française et la reine Ranavalona III est exilée en 1897.",
    },
    {
      id: 'riz',
      tier: 1,
      type: 'text',
      kicker: 'Quotidien',
      title: 'Le pays du riz',
      body:
        "Les Merina aménagent les vallées en immenses rizières irriguées. Le riz est servi à presque tous les repas : en malgache, « manger » se dit littéralement « manger du riz ».",
    },

    // ── Niveau 2 ──
    {
      id: 'famadihana',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Le retournement des morts',
      body:
        "Les Malgaches honorent leurs ancêtres. Lors de la fête du famadihana, les familles sortent les défunts du tombeau, les enveloppent dans des linceuls neufs et dansent avec eux, avant de les replacer dans le tombeau.",
    },
    {
      id: 'ambohimanga',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'La colline sacrée',
      body:
        "La colline royale d'Ambohimanga, près d'Antananarivo, est le berceau de la dynastie : on y trouve une cité royale, des tombeaux et des lieux sacrés. Elle est inscrite au patrimoine mondial.",
    },
    {
      id: 'laborde',
      tier: 2,
      type: 'text',
      kicker: 'Techniques',
      title: 'Une usine pour la reine',
      body:
        "Naufragé à Madagascar, le Français Jean Laborde construit pour Ranavalona Ire un grand complexe industriel à Mantasoa, où l'on fabrique armes, outils, verre et savon.",
    },
    {
      id: 'ranavalona-iii',
      tier: 2,
      type: 'person',
      nom: 'Ranavalona III',
      role: 'Dernière reine',
      dates: '1861 – 1917',
      description: "Reine de 1883 à 1897, elle doit affronter les ambitions françaises. Exilée par la France à La Réunion, puis en Algérie, elle meurt à Alger en 1917.",
    },
    {
      id: 'ecole',
      tier: 2,
      type: 'text',
      kicker: 'Savoirs',
      title: 'L’école obligatoire',
      body:
        "Dans les années 1870-1880, le royaume rend l'école obligatoire en Imerina. Les missions ouvrent des écoles, des imprimeries et des hôpitaux à Antananarivo.",
    },
  ],

  quiz: [
    { id: 'ile', type: 'mcq', prompt: 'Sur quelle île se trouve le royaume merina ?', options: ['Madagascar', 'La Réunion', 'Zanzibar', 'Maurice'], answer: 0 },
    { id: 'langue', type: 'mcq', prompt: 'De quelles langues le malgache est-il cousin ?', options: ['Des langues d’Indonésie', 'Des langues romanes', 'De l’arabe', 'Du swahili'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale du royaume ?', options: ['Antananarivo', 'Tamatave', 'Majunga', 'Tuléar'], answer: 0 },
    { id: 'unificateur', type: 'mcq', prompt: 'Quel roi réunifie l’Imerina vers 1787 ?', options: ['Andrianampoinimerina', 'Radama Ier', 'Andriamanelo', 'Ralambo'], answer: 0 },
    { id: 'phrase', type: 'mcq', prompt: 'Quelle phrase attribue-t-on à Andrianampoinimerina ?', options: ['La mer est la limite de ma rizière', 'Je suis venu, j’ai vu, j’ai vaincu', 'L’État, c’est moi', 'Paris vaut bien une messe'], answer: 0 },
    { id: 'radama', type: 'mcq', prompt: 'Avec quel pays Radama Ier s’allie-t-il ?', options: ['Le Royaume-Uni', 'La France', 'Le Portugal', 'L’Espagne'], answer: 0 },
    { id: 'alphabet', type: 'mcq', prompt: 'Avec quel alphabet le malgache est-il écrit à partir des années 1820 ?', options: ['L’alphabet latin', 'L’alphabet arabe', 'Le cyrillique', 'Les idéogrammes'], answer: 0 },
    { id: 'ranavalona', type: 'mcq', prompt: 'Quelle reine chasse les missionnaires et interdit le christianisme ?', options: ['Ranavalona Ire', 'Ranavalona III', 'Rasoherina', 'Ranavalona II'], answer: 0 },
    { id: 'conversion', type: 'tf', prompt: 'En 1869, la cour adopte le protestantisme.', answer: true },
    { id: 'premier-ministre', type: 'mcq', prompt: 'Quel Premier ministre épouse successivement trois reines ?', options: ['Rainilaiarivony', 'Radama II', 'Jean Laborde', 'Andrianjaka'], answer: 0 },
    { id: 'conquete', type: 'mcq', prompt: 'Quel pays conquiert Madagascar en 1895 ?', options: ['La France', 'Le Royaume-Uni', 'L’Allemagne', 'L’Italie'], answer: 0 },
    { id: 'maladies', type: 'tf', prompt: 'Pendant l’expédition de 1895, les maladies tuent plus de soldats français que les combats.', answer: true },
    { id: 'derniere', type: 'mcq', prompt: 'Qui est la dernière reine de Madagascar ?', options: ['Ranavalona III', 'Ranavalona Ire', 'Rasoherina', 'Idia'], answer: 0 },
    { id: 'famadihana', type: 'mcq', prompt: 'Qu’est-ce que le famadihana ?', options: ['Le retournement des morts', 'Une danse de guerre', 'Une récolte du riz', 'Un couronnement'], answer: 0 },
    { id: 'riz', type: 'mcq', prompt: 'Quelle culture est la base de l’alimentation merina ?', options: ['Le riz', 'Le blé', 'Le maïs', 'La pomme de terre'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Andrianampoinimerina réunifie l’Imerina', 'Alliance avec les Britanniques', 'Règne de Ranavalona Ire', 'Conquête française'] },
  ],

  recap: [
    'Madagascar, peuplée depuis l’Asie et l’Afrique ; les Merina des hautes terres',
    'Andrianampoinimerina et Radama Ier unifient une grande partie de l’île',
    'Ranavalona Ire résiste aux Européens ; la cour devient protestante en 1869',
    '1895 : conquête française ; monarchie abolie en 1897',
  ],
}

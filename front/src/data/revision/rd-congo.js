/** Chapitre rédigé : RD Congo (1885 – 2020). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'leopold',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Le Congo de Léopold II',
      body:
        "En 1885, les puissances européennes reconnaissent l'État indépendant du Congo, propriété personnelle du roi des Belges Léopold II.",
      highlight: { value: '1885', label: 'État indépendant du Congo' },
    },
    {
      id: 'caoutchouc',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Le « caoutchouc rouge »',
      body:
        "Pour récolter le caoutchouc, les agents du roi imposent le travail forcé, avec prises d'otages, mutilations et massacres ; la population chute fortement. Le scandale pousse la Belgique à reprendre le Congo en 1908.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Du Congo belge à l’indépendance',
      years: [1914, 1960],
      caption: 'Un immense pays du cœur de l’Afrique, plus de quatre fois plus grand que la France, qui garde ses frontières coloniales.',
    },
    {
      id: 'lumumba',
      tier: 1,
      type: 'person',
      nom: 'Patrice Lumumba',
      role: 'Premier ministre',
      dates: '1925 – 1961',
      description:
        "Héros de l'indépendance, il devient en 1960 le premier Premier ministre du Congo. Renversé quelques mois plus tard, il est assassiné au Katanga en janvier 1961.",
    },
    {
      id: 'crise',
      tier: 1,
      type: 'war',
      nom: 'Crise congolaise',
      annee: 1960,
      adversaires: ['Sécessions du Katanga et du Sud-Kasaï', 'Rébellions (1964-1965)'],
      allies: ['Gouvernement congolais', 'Casques bleus de l’ONU'],
      vainqueur: 'Gouvernement central',
      consequences:
        "Indépendant le 30 juin 1960, le pays plonge aussitôt dans la crise. La sécession du Katanga, riche en mines, dure jusqu'en 1963.",
    },
    {
      id: 'mobutu',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Mobutu et le Zaïre',
      body:
        "En 1965, Mobutu prend le pouvoir. Il rebaptise le pays Zaïre en 1971 et le gouverne en dictateur pendant trente-deux ans, soutenu par les pays occidentaux pendant la guerre froide.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'La RD Congo en dates',
      items: [
        { year: 1885, label: 'État indépendant du Congo' },
        { year: 1908, label: 'Congo belge' },
        { year: 1960, label: 'Indépendance' },
        { year: 1965, label: 'Mobutu prend le pouvoir' },
        { year: 1997, label: 'Chute de Mobutu' },
      ],
    },
    {
      id: 'guerres',
      tier: 1,
      type: 'war',
      nom: 'Deuxième guerre du Congo',
      annee: 1998,
      adversaires: ['Rwanda', 'Ouganda', 'Burundi', 'Rébellions congolaises'],
      allies: ['Gouvernement congolais (Kabila)', 'Angola', 'Zimbabwe', 'Namibie'],
      vainqueur: 'Aucun (accords de paix de 2002-2003)',
      consequences:
        "Surnommée la « guerre mondiale africaine », elle fait avec les famines et les épidémies plusieurs millions de morts selon les estimations. Des groupes armés restent actifs dans l'est.",
    },
    {
      id: 'richesses',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Un pays riche, une population pauvre',
      body:
        "Le sous-sol contient cuivre, cobalt, diamants et or : le pays produit la plus grande partie du cobalt mondial, utilisé dans les batteries. Pourtant, sa population reste parmi les plus pauvres du monde.",
    },

    // ── Niveau 2 ──
    {
      id: 'discours',
      tier: 2,
      type: 'text',
      kicker: 'Récit',
      title: 'Le discours du 30 juin',
      body:
        "Le jour de l'indépendance, devant le roi des Belges, Patrice Lumumba prononce un discours qui dénonce les humiliations de la colonisation.",
    },
    {
      id: 'kimbangu',
      tier: 2,
      type: 'person',
      nom: 'Simon Kimbangu',
      role: 'Prophète',
      dates: 'vers 1887 – 1951',
      description: "Ce prédicateur chrétien est emprisonné par les Belges de 1921 à sa mort. L'Église qu'il a inspirée compte aujourd'hui des millions de fidèles.",
    },
    {
      id: 'ebola',
      tier: 2,
      type: 'text',
      kicker: 'Sciences',
      title: 'Le virus Ebola',
      body:
        "En 1976, le virus Ebola est identifié après une épidémie près de la rivière Ebola, dans le nord du pays. Le médecin congolais Jean-Jacques Muyembe participe plus tard à la mise au point d'un traitement.",
    },
    {
      id: 'rumba',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'La rumba congolaise',
      body:
        "Née à Léopoldville (Kinshasa) et à Brazzaville dans les années 1940, la rumba congolaise a fait danser toute l'Afrique.",
    },
    {
      id: 'mukwege',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Denis Mukwege',
      body:
        "Dans l'est du pays, le gynécologue Denis Mukwege soigne des milliers de femmes victimes de violences sexuelles pendant les guerres. Il reçoit le prix Nobel de la paix en 2018.",
    },
  ],

  quiz: [
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale de la RD Congo ?', options: ['Kinshasa', 'Brazzaville', 'Lubumbashi', 'Kigali'], answer: 0 },
    { id: 'leopold', type: 'mcq', prompt: 'De qui le Congo est-il la propriété personnelle de 1885 à 1908 ?', options: ['Du roi des Belges Léopold II', 'De la reine Victoria', 'De Napoléon III', 'Du roi du Portugal'], answer: 0 },
    { id: 'caoutchouc', type: 'mcq', prompt: 'Quelle récolte est imposée par le travail forcé sous Léopold II ?', options: ['Le caoutchouc', 'Le coton', 'Le café', 'Le cacao'], answer: 0 },
    { id: 'belgique', type: 'mcq', prompt: 'Quel pays reprend le Congo en 1908 ?', options: ['La Belgique', 'La France', 'Le Royaume-Uni', 'L’Allemagne'], answer: 0 },
    { id: 'independance', type: 'mcq', prompt: 'Quel jour le Congo devient-il indépendant ?', options: ['Le 30 juin 1960', 'Le 1er octobre 1960', 'Le 5 juillet 1962', 'Le 14 juillet 1789'], answer: 0 },
    { id: 'lumumba', type: 'mcq', prompt: 'Qui est le premier Premier ministre du Congo indépendant ?', options: ['Patrice Lumumba', 'Mobutu', 'Joseph Kabila', 'Kasa-Vubu'], answer: 0 },
    { id: 'assassinat', type: 'tf', prompt: 'Patrice Lumumba est assassiné en janvier 1961.', answer: true },
    { id: 'katanga', type: 'mcq', prompt: 'Quelle riche région minière fait sécession de 1960 à 1963 ?', options: ['Le Katanga', 'Le Biafra', 'Le Darfour', 'Le Kivu'], answer: 0 },
    { id: 'mobutu', type: 'mcq', prompt: 'Quel dictateur gouverne le pays de 1965 à 1997 ?', options: ['Mobutu', 'Idi Amin Dada', 'Lumumba', 'Bokassa'], answer: 0 },
    { id: 'zaire', type: 'mcq', prompt: 'Comment Mobutu rebaptise-t-il le pays en 1971 ?', options: ['Zaïre', 'Katanga', 'Congo belge', 'Kinshasa'], answer: 0 },
    { id: 'guerre-mondiale', type: 'mcq', prompt: 'Quel surnom donne-t-on à la deuxième guerre du Congo ?', options: ['La « guerre mondiale africaine »', 'La « guerre de Cent Ans »', 'La « guerre froide »', 'La « drôle de guerre »'], answer: 0 },
    { id: 'cobalt', type: 'mcq', prompt: 'Quel métal utilisé dans les batteries la RD Congo produit-elle en grande quantité ?', options: ['Le cobalt', 'L’aluminium', 'Le plomb', 'Le zinc'], answer: 0 },
    { id: 'francophone', type: 'tf', prompt: 'Kinshasa est la plus grande ville francophone du monde.', answer: true },
    { id: 'ebola', type: 'mcq', prompt: 'Quel virus est identifié au Congo en 1976 ?', options: ['Ebola', 'La grippe espagnole', 'Le Covid-19', 'La variole'], answer: 0 },
    { id: 'mukwege', type: 'mcq', prompt: 'Quel médecin congolais reçoit le prix Nobel de la paix en 2018 ?', options: ['Denis Mukwege', 'Jean-Jacques Muyembe', 'Patrice Lumumba', 'Simon Kimbangu'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['État indépendant du Congo', 'Congo belge', 'Indépendance', 'Chute de Mobutu'] },
  ],

  recap: [
    '1885-1908 : le Congo, propriété de Léopold II ; travail forcé pour le caoutchouc',
    '1908-1960 : Congo belge ; 30 juin 1960 : indépendance',
    'Crise congolaise, assassinat de Lumumba (1961), dictature de Mobutu (1965-1997)',
    'Guerres de 1996-2003 et richesses minières convoitées',
  ],
}

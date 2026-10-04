/** Chapitre rédigé : Inde, du Raj britannique à l'indépendance (1789 – aujourd'hui). */
export default {
  readingTime: 5,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'compagnie',
      tier: 1,
      type: 'text',
      kicker: 'Expansion',
      title: 'Une entreprise conquiert l’Inde',
      body:
        "Au XVIIIe siècle, l'Empire moghol s'affaiblit. La Compagnie anglaise des Indes orientales, une entreprise de commerce dotée de sa propre armée, en profite : après sa victoire de Plassey (1757), elle conquiert peu à peu l'Inde. Ses soldats sont surtout des Indiens, les cipayes.",
      highlight: { value: '1757', label: 'victoire de Plassey' },
    },
    {
      id: 'cipayes',
      tier: 1,
      type: 'war',
      nom: 'Révolte des Cipayes',
      annee: 1857,
      adversaires: ['Compagnie anglaise des Indes orientales', 'Armée britannique'],
      allies: ['Soldats indiens révoltés', 'Princes et paysans insurgés'],
      vainqueur: 'Les Britanniques',
      consequences:
        "La révolte est écrasée en 1858, avec de grandes violences des deux côtés. Le dernier empereur moghol est exilé. La Compagnie est supprimée : désormais, la Couronne britannique gouverne directement l'Inde. C'est le début du Raj.",
    },
    {
      id: 'raj',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Le « joyau de la Couronne »',
      body:
        "Le Raj britannique est dirigé par un vice-roi. En 1876, la reine Victoria devient impératrice des Indes. Les Britanniques construisent un immense réseau de chemins de fer, surtout pour exporter coton, thé et blé. Mais de graves famines tuent des millions d'Indiens, et l'artisanat local est ruiné par les tissus anglais.",
      highlight: { value: '1876', label: 'Victoria impératrice des Indes' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: "De l'Inde britannique à l'Inde indépendante",
      years: [1900, 1960],
      caption:
        "Comparez : l'Inde britannique comprend en 1900 les futurs Pakistan et Bangladesh ; en 1960, le Pakistan est un État séparé.",
    },
    {
      id: 'independance-route',
      tier: 1,
      type: 'dates',
      kicker: 'Droits',
      title: "Le chemin vers l'indépendance",
      items: [
        { year: 1885, label: 'Fondation du Congrès national indien' },
        { year: 1919, label: "Massacre d'Amritsar : l'armée tire sur une foule désarmée" },
        { year: 1930, label: 'Marche du sel de Gandhi' },
        { year: 1942, label: 'Campagne « Quittez l’Inde » contre les Britanniques' },
        { year: 1947, label: 'Indépendance, le 15 août' },
      ],
    },
    {
      id: 'gandhi',
      tier: 1,
      type: 'person',
      nom: 'Gandhi',
      role: 'Guide de l’indépendance, surnommé « Mahatma » (« grande âme »)',
      dates: '1869 – 1948',
      description:
        "Avocat formé à Londres, il lutte d'abord contre le racisme en Afrique du Sud. En Inde, il mène la résistance non violente : boycotts, grèves, désobéissance aux lois injustes. Il est assassiné en 1948 par un extrémiste hindou.",
    },
    {
      id: 'sel',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Droits',
      value: '≈ 390 km',
      label: 'parcourus à pied lors de la marche du sel (1930)',
      caption:
        "Pour protester contre l'impôt britannique sur le sel, Gandhi marche 24 jours jusqu'à la mer, suivi par des milliers de personnes, et y ramasse du sel. Des dizaines de milliers d'Indiens sont ensuite arrêtés.",
    },
    {
      id: 'partition',
      tier: 1,
      type: 'text',
      kicker: 'Crise',
      title: 'Indépendance et Partition',
      body:
        "Le 15 août 1947, l'Inde devient indépendante, mais elle est partagée en deux États : l'Inde, à majorité hindoue, et le Pakistan, à majorité musulmane. Environ 15 millions de personnes doivent fuir pour changer de pays. Les violences entre communautés font plusieurs centaines de milliers de morts, peut-être un million ou davantage.",
      highlight: { value: '15 août 1947', label: 'indépendance' },
    },
    {
      id: 'nehru',
      tier: 1,
      type: 'person',
      nom: 'Jawaharlal Nehru',
      role: 'Premier chef du gouvernement de l’Inde',
      dates: '1889 – 1964 (au pouvoir 1947 – 1964)',
      description:
        "Compagnon de Gandhi, il fait de l'Inde une république démocratique et laïque. Pendant la guerre froide, il refuse de choisir entre les États-Unis et l'URSS et contribue à fonder le mouvement des non-alignés.",
    },

    // ── Niveau 2 ──
    {
      id: 'ambedkar',
      tier: 2,
      type: 'person',
      nom: 'B. R. Ambedkar',
      role: 'Juriste, père de la Constitution',
      dates: '1891 – 1956',
      description:
        "Né parmi les « intouchables », les plus méprisés du système des castes, il fait de brillantes études de droit et d'économie à New York et à Londres. Il dirige la rédaction de la Constitution de 1950, qui abolit l'intouchabilité.",
    },
    {
      id: 'pakistan',
      tier: 2,
      type: 'war',
      nom: 'Guerres indo-pakistanaises',
      annee: 1947,
      adversaires: ['Pakistan'],
      vainqueur: 'Sans vainqueur net, sauf en 1971 (victoire indienne)',
      consequences:
        "L'Inde et le Pakistan se battent en 1947-1948, 1965, 1971 et 1999. Ils se disputent toujours la région du Cachemire. En 1971, la guerre aboutit à l'indépendance du Pakistan oriental, qui devient le Bangladesh.",
    },
    {
      id: 'indira',
      tier: 2,
      type: 'person',
      nom: 'Indira Gandhi',
      role: 'Première ministre',
      dates: '1917 – 1984',
      description:
        "Fille de Nehru – et sans lien de parenté avec le Mahatma –, elle est la première femme à diriger l'Inde (1966-1977, puis 1980-1984). Elle est assassinée en 1984 par deux de ses gardes du corps sikhs.",
    },
    {
      id: 'sciences',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Une puissance scientifique',
      body:
        "La « révolution verte » des années 1960, avec de nouvelles semences et des engrais, permet à l'Inde de mieux nourrir sa population. Le pays devient un géant de l'informatique, autour de Bangalore. En 2014, sa sonde atteint Mars dès le premier essai ; en 2023, elle se pose près du pôle Sud de la Lune.",
    },
    {
      id: 'population',
      tier: 2,
      type: 'keyfigure',
      kicker: 'Société',
      value: '≈ 1,4 milliard',
      label: "d'habitants : le pays le plus peuplé du monde depuis 2023",
      caption:
        "Selon l'ONU, l'Inde a dépassé la Chine. Avec des centaines de millions d'électeurs, on la présente souvent comme « la plus grande démocratie du monde ».",
    },
  ],

  quiz: [
    { id: 'compagnie', type: 'mcq', prompt: "Quelle entreprise conquiert l'Inde à partir du XVIIIe siècle ?", options: ['La Compagnie anglaise des Indes orientales', 'La Compagnie de la baie d’Hudson', 'La Compagnie des Indes occidentales', 'La Compagnie du canal de Suez'], answer: 0 },
    { id: 'cipayes', type: 'mcq', prompt: 'Qui sont les cipayes ?', options: ['Des soldats indiens au service des Britanniques', 'Des marchands de thé', 'Des princes moghols', 'Des prêtres hindous'], answer: 0 },
    { id: 'revolte', type: 'mcq', prompt: 'En quelle année éclate la révolte des Cipayes ?', options: ['1857', '1757', '1947', '1919'], answer: 0 },
    { id: 'couronne', type: 'tf', prompt: "Après 1858, la Couronne britannique gouverne directement l'Inde.", answer: true },
    { id: 'victoria', type: 'mcq', prompt: 'Quelle reine britannique devient impératrice des Indes en 1876 ?', options: ['Victoria', 'Élisabeth II', 'Élisabeth Ire', 'Anne'], answer: 0 },
    { id: 'congres', type: 'mcq', prompt: "Quel parti, fondé en 1885, mène la lutte pour l'indépendance ?", options: ['Le Congrès national indien', 'Le Kuomintang', 'Le Parti travailliste', 'Le Parti communiste'], answer: 0 },
    { id: 'non-violence', type: 'mcq', prompt: 'Quelle méthode Gandhi défend-il ?', options: ['La résistance non violente', 'La guérilla', "Le coup d'État militaire", "L'alliance avec le Japon"], answer: 0 },
    { id: 'sel', type: 'mcq', prompt: 'Contre quoi Gandhi proteste-t-il avec la marche de 1930 ?', options: ["L'impôt britannique sur le sel", 'Le prix du thé', 'Le système des castes', 'La construction des chemins de fer'], answer: 0 },
    { id: 'annee', type: 'mcq', prompt: "En quelle année l'Inde devient-elle indépendante ?", options: ['1947', '1950', '1857', '1971'], answer: 0 },
    { id: 'pakistan', type: 'mcq', prompt: "Quel État naît en 1947 en même temps que l'Inde indépendante ?", options: ['Le Pakistan', 'Le Bangladesh', 'Le Sri Lanka', 'Le Népal'], answer: 0 },
    { id: 'partition', type: 'tf', prompt: "La Partition de 1947 se fait sans violence.", answer: false, explanation: "Des millions de personnes doivent fuir et les violences font des centaines de milliers de morts, peut-être davantage." },
    { id: 'gandhi-mort', type: 'tf', prompt: 'Gandhi est assassiné en 1948.', answer: true },
    { id: 'nehru', type: 'mcq', prompt: "Qui est le premier chef du gouvernement de l'Inde indépendante ?", options: ['Jawaharlal Nehru', 'Gandhi', 'Indira Gandhi', 'B. R. Ambedkar'], answer: 0 },
    { id: 'non-alignes', type: 'mcq', prompt: 'Quel mouvement Nehru contribue-t-il à fonder ?', options: ['Le mouvement des non-alignés', "L'OTAN", 'Le pacte de Varsovie', "L'Union européenne"], answer: 0 },
    { id: 'indira', type: 'tf', prompt: 'Indira Gandhi est la fille du Mahatma Gandhi.', answer: false, explanation: "Elle est la fille de Nehru. Elle n'a pas de lien de parenté avec le Mahatma." },
    { id: 'ambedkar', type: 'mcq', prompt: 'Qui dirige la rédaction de la Constitution indienne de 1950 ?', options: ['B. R. Ambedkar', 'Gandhi', 'La reine Victoria', 'Indira Gandhi'], answer: 0 },
    { id: 'bangladesh', type: 'mcq', prompt: 'Quel pays naît en 1971 du Pakistan oriental ?', options: ['Le Bangladesh', 'Le Sri Lanka', 'La Birmanie', 'Le Népal'], answer: 0 },
    { id: 'cachemire', type: 'mcq', prompt: "Quelle région l'Inde et le Pakistan se disputent-ils ?", options: ['Le Cachemire', 'Le Kerala', 'Le Tamil Nadu', 'Le Gujarat'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Révolte des Cipayes', 'Marche du sel', 'Indépendance et Partition', 'Naissance du Bangladesh'] },
  ],

  recap: [
    'La Compagnie anglaise des Indes conquiert l’Inde à partir de 1757',
    'Après la révolte des Cipayes (1857), le Raj britannique gouverne directement',
    'Gandhi mène une lutte non violente ; indépendance le 15 août 1947',
    'Partition sanglante avec le Pakistan ; l’Inde devient une grande démocratie',
  ],
}

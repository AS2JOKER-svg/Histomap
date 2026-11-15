/** Chapitre rédigé : Viêt Nam (1858 – 2020). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'conquete',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'La conquête française',
      body:
        "En 1858, une flotte française attaque le Viêt Nam, alors gouverné par les empereurs Nguyễn. La France prend la Cochinchine au sud, puis impose son protectorat au reste du pays (1884).",
      highlight: { value: '1858', label: 'début de la conquête' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le Viêt Nam',
      years: [1880, 1960],
      caption: 'Comparez : en 1880, le Viêt Nam passe sous domination française ; en 1960, il est en réalité coupé en deux au 17e parallèle.',
    },
    {
      id: 'indochine',
      tier: 1,
      type: 'text',
      kicker: 'Empire',
      title: 'L’Indochine française',
      body:
        "En 1887, la France réunit le Viêt Nam et le Cambodge, puis le Laos, dans l'Indochine française. Plantations d'hévéas, mines et rizières enrichissent surtout les colons.",
    },
    {
      id: 'ho-chi-minh',
      tier: 1,
      type: 'person',
      nom: 'Hô Chi Minh',
      role: 'Dirigeant communiste',
      dates: '1890 – 1969',
      description:
        "Il fonde le Parti communiste indochinois en 1930 et proclame l'indépendance du Viêt Nam le 2 septembre 1945. Il dirige le Nord Viêt Nam jusqu'à sa mort.",
    },
    {
      id: 'indochine-guerre',
      tier: 1,
      type: 'war',
      nom: 'Guerre d’Indochine',
      annee: 1946,
      adversaires: ['France', 'État du Viêt Nam (Bảo Đại)'],
      allies: ['Viêt-minh'],
      vainqueur: 'Viêt-minh',
      consequences:
        "Après la défaite française à Diên Biên Phu (1954), les accords de Genève coupent le Viêt Nam en deux : un Nord communiste et un Sud soutenu par les États-Unis.",
    },
    {
      id: 'guerre-vietnam',
      tier: 1,
      type: 'war',
      nom: 'Guerre du Viêt Nam',
      annee: 1955,
      adversaires: ['Sud Viêt Nam', 'États-Unis et leurs alliés'],
      allies: ['Nord Viêt Nam et Viêt-cong'],
      vainqueur: 'Nord Viêt Nam',
      consequences:
        "Les États-Unis envoient jusqu'à plus de 500 000 soldats et bombardent massivement le pays. La guerre fait entre 1 et 3 millions de morts vietnamiens selon les estimations.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Le Viêt Nam en dates',
      items: [
        { year: 1858, label: 'Attaque française' },
        { year: 1887, label: 'Indochine française' },
        { year: 1945, label: 'Indépendance proclamée' },
        { year: 1954, label: 'Diên Biên Phu' },
        { year: 1975, label: 'Chute de Saïgon' },
        { year: 1986, label: 'Đổi Mới' },
      ],
    },
    {
      id: 'reunification',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'La réunification',
      body:
        "Le 30 avril 1975, les chars du Nord entrent dans Saïgon. Le pays est réunifié en 1976 sous un régime communiste. Des centaines de milliers de « boat people » fuient par la mer.",
    },
    {
      id: 'doi-moi',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Le Đổi Mới',
      body:
        "À partir de 1986, le Parti communiste lance le Đổi Mới (« renouveau ») : il ouvre l'économie au marché tout en gardant le parti unique. Le pays connaît depuis une forte croissance.",
    },

    // ── Niveau 2 ──
    {
      id: 'dien-bien-phu',
      tier: 2,
      type: 'text',
      kicker: 'Guerre',
      title: 'Diên Biên Phu',
      body:
        "En 1954, le Viêt-minh du général Giáp hisse des canons sur les montagnes qui entourent le camp français de Diên Biên Phu. Le camp tombe le 7 mai, après 57 jours de siège.",
    },
    {
      id: 'tet',
      tier: 2,
      type: 'text',
      kicker: 'Guerre',
      title: 'L’offensive du Têt',
      body:
        "En 1968, pendant la fête du Têt, les communistes attaquent les villes du Sud. Militairement repoussée, l'offensive choque l'opinion américaine, qui se retourne contre la guerre.",
    },
    {
      id: 'civils',
      tier: 2,
      type: 'text',
      kicker: 'Guerre',
      title: 'Les civils dans la guerre',
      body:
        "Défoliants comme l'agent orange, massacre de My Lai commis par des soldats américains, massacre de Huế commis par les forces communistes : les civils paient un lourd tribut.",
    },
    {
      id: 'chine',
      tier: 2,
      type: 'text',
      kicker: 'Guerre',
      title: 'Contre le Cambodge et la Chine',
      body:
        "En 1978, le Viêt Nam envahit le Cambodge et renverse les Khmers rouges. En 1979, la Chine attaque le nord du Viêt Nam pendant un mois.",
    },
    {
      id: 'quoc-ngu',
      tier: 2,
      type: 'text',
      kicker: 'Langue',
      title: 'Une écriture latine',
      body:
        "Le vietnamien s'écrit en alphabet latin, avec de nombreux accents : c'est le quốc ngữ, mis au point par des missionnaires au XVIIe siècle et généralisé au XXe siècle.",
    },
  ],

  quiz: [
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale du Viêt Nam ?', options: ['Hanoï', 'Saïgon', 'Huế', 'Phnom Penh'], answer: 0 },
    { id: 'colonisateur', type: 'mcq', prompt: 'Quel pays colonise le Viêt Nam à partir de 1858 ?', options: ['La France', 'Le Royaume-Uni', 'Les Pays-Bas', 'Le Portugal'], answer: 0 },
    { id: 'indochine', type: 'mcq', prompt: 'Comment s’appelle l’ensemble colonial créé en 1887 ?', options: ['L’Indochine française', 'L’Afrique-Occidentale française', 'Les Indes néerlandaises', 'Le Raj britannique'], answer: 0 },
    { id: 'ho', type: 'mcq', prompt: 'Qui proclame l’indépendance du Viêt Nam le 2 septembre 1945 ?', options: ['Hô Chi Minh', 'Bảo Đại', 'Ngô Đình Diệm', 'Võ Nguyên Giáp'], answer: 0 },
    { id: 'dbp', type: 'mcq', prompt: 'Quelle bataille marque la défaite française en 1954 ?', options: ['Diên Biên Phu', 'Verdun', 'Stalingrad', 'Saïgon'], answer: 0 },
    { id: 'giap', type: 'mcq', prompt: 'Quel général vietnamien remporte la bataille de Diên Biên Phu ?', options: ['Võ Nguyên Giáp', 'Hô Chi Minh', 'Lê Duẩn', 'Nguyễn Văn Thiệu'], answer: 0 },
    { id: 'division', type: 'tf', prompt: 'Après 1954, le Viêt Nam est coupé en deux : un Nord communiste et un Sud.', answer: true },
    { id: 'usa', type: 'mcq', prompt: 'Quel pays soutient le Sud Viêt Nam et y envoie plus de 500 000 soldats ?', options: ['Les États-Unis', 'La France', 'La Chine', 'L’URSS'], answer: 0 },
    { id: 'viet-cong', type: 'mcq', prompt: 'Comment appelle-t-on les combattants communistes du Sud ?', options: ['Le Viêt-cong', 'Les Khmers rouges', 'Les Boxers', 'Les Moudjahidines'], answer: 0 },
    { id: 'agent-orange', type: 'mcq', prompt: 'Quel produit chimique l’armée américaine répand-elle sur les forêts ?', options: ['L’agent orange', 'Le gaz moutarde', 'Le chlore', 'Le gaz sarin'], answer: 0 },
    { id: 'saigon', type: 'mcq', prompt: 'En quelle année Saïgon tombe-t-elle ?', options: ['1975', '1954', '1968', '1986'], answer: 0 },
    { id: 'boat-people', type: 'mcq', prompt: 'Comment appelle-t-on les Vietnamiens qui fuient par la mer après 1975 ?', options: ['Les boat people', 'Les pieds-noirs', 'Les harkis', 'Les réfugiés de la Nakba'], answer: 0 },
    { id: 'doi-moi', type: 'mcq', prompt: 'Que signifie « Đổi Mới », la politique lancée en 1986 ?', options: ['Renouveau', 'Révolution', 'Réunification', 'Résistance'], answer: 0 },
    { id: 'chine', type: 'mcq', prompt: 'Quel pays attaque le Viêt Nam en 1979 ?', options: ['La Chine', 'Le Cambodge', 'Les États-Unis', 'La Thaïlande'], answer: 0 },
    { id: 'ecriture', type: 'mcq', prompt: 'Avec quel alphabet le vietnamien s’écrit-il aujourd’hui ?', options: ['L’alphabet latin', 'Les caractères chinois', 'L’alphabet cyrillique', 'L’alphabet arabe'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Attaque française', 'Indépendance proclamée', 'Diên Biên Phu', 'Chute de Saïgon'] },
  ],

  recap: [
    '1858-1887 : la France conquiert le Viêt Nam et crée l’Indochine française',
    '1945 : Hô Chi Minh proclame l’indépendance ; guerre d’Indochine jusqu’à Diên Biên Phu (1954)',
    'Guerre du Viêt Nam (1955-1975) contre le Sud et les États-Unis ; chute de Saïgon',
    'Réunification communiste (1976), puis ouverture économique du Đổi Mới (1986)',
  ],
}

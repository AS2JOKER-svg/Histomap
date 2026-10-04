/** Chapitre rédigé : Japon de l'ère Meiji à nos jours (1789 – aujourd'hui). */
export default {
  readingTime: 5,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'ouverture',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Un archipel forcé de s’ouvrir',
      body:
        "Depuis le XVIIe siècle, le Japon des shoguns Tokugawa vit presque fermé au monde : seuls quelques marchands hollandais et chinois peuvent commercer à Nagasaki. En 1853, les « navires noirs » du commodore américain Perry arrivent dans la baie d'Edo. Sous la menace de leurs canons, le Japon doit ouvrir ses ports en 1854.",
      highlight: { value: '1853', label: 'arrivée des navires noirs' },
    },
    {
      id: 'meiji',
      tier: 1,
      type: 'steps',
      kicker: 'Pouvoir',
      title: "L'ère Meiji, une modernisation éclair",
      items: [
        { year: 1868, label: "Restauration Meiji : l'empereur reprend le pouvoir au shogun ; Edo devient Tokyo" },
        { year: 1872, label: 'Premier chemin de fer, entre Tokyo et Yokohama' },
        { year: 1873, label: "Service militaire obligatoire : l'armée moderne remplace les samouraïs" },
        { year: 1889, label: "Première Constitution, inspirée de celle de l'Allemagne" },
      ],
    },
    {
      id: 'empereur-meiji',
      tier: 1,
      type: 'person',
      nom: 'Empereur Meiji (Mutsuhito)',
      role: 'Empereur du Japon',
      dates: '1852 – 1912 (règne 1867 – 1912)',
      description:
        "Monté sur le trône adolescent, il donne son nom à l'ère Meiji, « le gouvernement éclairé ». Sous son règne, le Japon copie ce que l'Occident a de plus moderne – usines, écoles, armée, flotte – pour ne pas être colonisé.",
    },
    {
      id: 'russo-japonaise',
      tier: 1,
      type: 'war',
      nom: 'Guerre russo-japonaise',
      annee: 1904,
      adversaires: ['Empire russe'],
      vainqueur: 'Le Japon',
      consequences:
        "La flotte japonaise écrase la flotte russe à Tsushima en 1905. C'est la première victoire d'un pays asiatique moderne sur une grande puissance européenne. Le Japon prend le contrôle de la Corée.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: "L'empire japonais grandit puis disparaît",
      years: [1880, 1938, 1960],
      caption:
        "Comparez : en 1938, le Japon contrôle Taïwan, la Corée et une partie de la Chine ; en 1960, il est revenu à son archipel.",
    },
    {
      id: 'expansion',
      tier: 1,
      type: 'dates',
      kicker: 'Expansion',
      title: 'Un empire colonial en Asie',
      items: [
        { year: 1895, label: 'Victoire sur la Chine : Taïwan devient japonaise' },
        { year: 1910, label: 'Annexion de la Corée' },
        { year: 1931, label: 'Invasion de la Mandchourie, au nord-est de la Chine' },
        { year: 1937, label: 'Guerre totale contre la Chine ; massacre de Nankin' },
      ],
    },
    {
      id: 'pacifique',
      tier: 1,
      type: 'war',
      nom: 'Guerre du Pacifique',
      annee: 1941,
      adversaires: ['États-Unis', 'Royaume-Uni', 'Chine', 'Pays-Bas'],
      allies: ['Allemagne nazie', 'Italie'],
      vainqueur: 'Les Alliés',
      consequences:
        "Le 7 décembre 1941, le Japon attaque la flotte américaine à Pearl Harbor. Après la défaite navale de Midway (1942), il recule île après île. Le pays est ruiné et occupé par les Américains jusqu'en 1952.",
    },
    {
      id: 'atome',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Crise',
      value: '6 et 9 août 1945',
      label: 'bombes atomiques sur Hiroshima et Nagasaki',
      caption:
        "Ce sont les seules bombes atomiques jamais utilisées dans une guerre. Elles tuent plus de 200 000 personnes d'ici la fin de 1945, selon les estimations. Le Japon capitule : la capitulation est signée le 2 septembre 1945.",
    },
    {
      id: 'miracle',
      tier: 1,
      type: 'text',
      kicker: "Âge d'or",
      title: 'Le miracle économique',
      body:
        "La Constitution de 1947 fait du Japon une démocratie : l'empereur n'a plus de pouvoir politique et le pays renonce à la guerre (article 9). Le Japon se reconstruit très vite. En 1964, il accueille les Jeux olympiques et inaugure le Shinkansen, le premier train à grande vitesse. Il devient la deuxième économie du monde à la fin des années 1960.",
      highlight: { value: '1964', label: 'premier Shinkansen' },
    },

    // ── Niveau 2 ──
    {
      id: 'samourais',
      tier: 2,
      type: 'text',
      kicker: 'Fin',
      title: 'La fin des samouraïs',
      body:
        "Les réformes Meiji suppriment les privilèges des samouraïs : en 1876, ils n'ont plus le droit de porter le sabre. En 1877, une partie d'entre eux se révolte autour de Saigō Takamori : c'est la rébellion de Satsuma, écrasée par la nouvelle armée de conscrits.",
    },
    {
      id: 'hirohito',
      tier: 2,
      type: 'person',
      nom: 'Hirohito',
      role: 'Empereur du Japon (ère Shōwa)',
      dates: '1901 – 1989 (règne 1926 – 1989)',
      description:
        "Il règne pendant la guerre puis le relèvement du pays. Le 15 août 1945, sa voix est entendue à la radio pour la première fois : il annonce la capitulation. En 1946, il renonce à son caractère divin. Les Américains le maintiennent sur le trône.",
    },
    {
      id: 'culture',
      tier: 2,
      type: 'text',
      kicker: 'Culture',
      title: 'Mangas, animés et jeux vidéo',
      body:
        "Après la guerre, Osamu Tezuka, auteur d'« Astro Boy », donne au manga sa forme moderne. Le studio Ghibli de Hayao Miyazaki (« Le Voyage de Chihiro », 2001) et les jeux vidéo japonais rendent la culture du pays populaire dans le monde entier.",
    },
    {
      id: 'tsunami',
      tier: 2,
      type: 'text',
      kicker: 'Crise',
      title: '2011 : séisme, tsunami et Fukushima',
      body:
        "Le 11 mars 2011, un très puissant séisme provoque un tsunami géant au nord-est du Japon : plus de 18 000 personnes sont tuées ou disparues. La vague endommage la centrale nucléaire de Fukushima, provoquant le pire accident nucléaire depuis Tchernobyl (1986).",
    },
    {
      id: 'vieillissement',
      tier: 2,
      type: 'keyfigure',
      kicker: 'Société',
      value: '≈ 29 %',
      label: 'des Japonais ont 65 ans ou plus (2023)',
      caption:
        "Le Japon est l'un des pays où l'on vit le plus longtemps, mais il naît peu d'enfants. Sa population diminue depuis la fin des années 2000.",
    },
  ],

  quiz: [
    { id: 'perry', type: 'mcq', prompt: 'Qui force le Japon à ouvrir ses ports en 1853-1854 ?', options: ['Le commodore américain Perry', 'Le général MacArthur', 'Christophe Colomb', 'Le tsar Nicolas II'], answer: 0 },
    { id: 'shogun', type: 'mcq', prompt: 'Qui détient le pouvoir réel au Japon avant 1868 ?', options: ['Le shogun', "L'empereur", 'Le Premier ministre', 'Le Parlement'], answer: 0 },
    { id: 'restauration', type: 'mcq', prompt: 'En quelle année a lieu la restauration Meiji ?', options: ['1868', '1853', '1905', '1945'], answer: 0 },
    { id: 'tokyo', type: 'tf', prompt: 'Edo est rebaptisée Tokyo et devient la capitale du Japon.', answer: true },
    { id: 'samourais', type: 'tf', prompt: "Pendant l'ère Meiji, les samouraïs gardent tous leurs privilèges.", answer: false, explanation: "Les réformes Meiji les suppriment : l'armée de conscrits remplace les samouraïs, qui perdent le droit de porter le sabre en 1876." },
    { id: 'russie', type: 'mcq', prompt: 'Quel empire le Japon bat-il en 1905 ?', options: ["L'Empire russe", "L'Empire britannique", "L'Empire ottoman", "L'Empire allemand"], answer: 0 },
    { id: 'tsushima', type: 'mcq', prompt: 'Quelle bataille navale de 1905 est une victoire japonaise ?', options: ['Tsushima', 'Midway', 'Trafalgar', 'Lépante'], answer: 0 },
    { id: 'taiwan', type: 'mcq', prompt: 'Quelle île devient japonaise en 1895 ?', options: ['Taïwan', 'Madagascar', 'Ceylan', 'Java'], answer: 0 },
    { id: 'coree', type: 'mcq', prompt: 'En quelle année le Japon annexe-t-il la Corée ?', options: ['1910', '1868', '1945', '1937'], answer: 0 },
    { id: 'pearl', type: 'mcq', prompt: 'Quelle base américaine le Japon attaque-t-il le 7 décembre 1941 ?', options: ['Pearl Harbor', 'San Diego', 'Okinawa', 'Iwo Jima'], answer: 0 },
    { id: 'hiroshima', type: 'mcq', prompt: 'Quelle ville est frappée par la première bombe atomique, le 6 août 1945 ?', options: ['Hiroshima', 'Nagasaki', 'Tokyo', 'Osaka'], answer: 0 },
    { id: 'hirohito', type: 'mcq', prompt: 'Quel empereur règne pendant la Seconde Guerre mondiale ?', options: ['Hirohito', 'Meiji', 'Akihito', 'Naruhito'], answer: 0 },
    { id: 'article9', type: 'mcq', prompt: "Que prévoit l'article 9 de la Constitution japonaise de 1947 ?", options: ['Le Japon renonce à la guerre', "L'empereur retrouve tous les pouvoirs", 'Le retour des shoguns', "L'alliance avec l'URSS"], answer: 0 },
    { id: 'shinkansen', type: 'mcq', prompt: 'Quel train à grande vitesse est inauguré au Japon en 1964 ?', options: ['Le Shinkansen', 'Le TGV', 'Le Transsibérien', "L'Orient-Express"], answer: 0 },
    { id: 'economie', type: 'tf', prompt: 'À la fin des années 1960, le Japon devient la deuxième économie du monde.', answer: true },
    { id: 'fukushima', type: 'mcq', prompt: 'Quelle centrale nucléaire est endommagée par le tsunami de 2011 ?', options: ['Fukushima', 'Tchernobyl', 'Three Mile Island', 'Flamanville'], answer: 0 },
    { id: 'tezuka', type: 'mcq', prompt: "Quel auteur de manga crée « Astro Boy » ?", options: ['Osamu Tezuka', 'Hayao Miyazaki', 'Saigō Takamori', 'Isoroku Yamamoto'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Arrivée des navires noirs de Perry', 'Restauration Meiji', 'Bataille de Tsushima', 'Attaque de Pearl Harbor', "Bombardement atomique d'Hiroshima"] },
  ],

  recap: [
    '1853 : les navires noirs américains forcent le Japon à s’ouvrir',
    '1868 : l’ère Meiji modernise le pays à toute vitesse',
    'Un empire colonial en Asie, puis la guerre du Pacifique et Hiroshima (1945)',
    'Une démocratie pacifiste devenue une grande puissance économique',
  ],
}

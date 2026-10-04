/** Chapitre rédigé : Royaume du Kongo, de sa fondation (fin du XIVe siècle) à 1492 (la suite fait l'objet du chapitre kongo-mod). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'fondation',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Un royaume né au sud du fleuve Congo',
      body:
        "Selon la tradition, le royaume du Kongo est fondé à la fin du XIVe siècle par Lukeni lua Nimi. Venu de la rive nord du fleuve Congo, il conquiert le plateau de Mbanza Kongo et s'allie aux chefs locaux. Les dates sont incertaines : on parle souvent des environs de 1390.",
      highlight: { value: '≈ 1390', label: 'fondation selon la tradition' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: "Le Kongo à l'arrivée des Portugais",
      years: [1492],
      caption: "Vers 1492, le royaume s'étend au sud de l'embouchure du fleuve Congo, sur le nord de l'actuel Angola et l'ouest de l'actuelle République démocratique du Congo.",
    },
    {
      id: 'capitale',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Mbanza Kongo, la ville du roi',
      body:
        "La capitale, Mbanza Kongo, est bâtie sur une colline, dans le nord de l'actuel Angola. Le roi, appelé mwene Kongo (« manikongo » pour les Portugais), y vit dans une grande enceinte. Le site est inscrit au patrimoine mondial de l'UNESCO depuis 2017.",
      highlight: { value: 'Mbanza Kongo', label: 'capitale, dans le nord de l’Angola actuel' },
    },
    {
      id: 'provinces',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Un royaume organisé en provinces',
      body:
        "Le royaume est divisé en provinces, comme Soyo sur la côte, Mbata ou Nsundi. Le roi y nomme des gouverneurs, souvent ses proches, qui lèvent l'impôt et lui envoient des tributs. Le roi n'est pas désigné automatiquement : il est choisi parmi les descendants du fondateur, ce qui provoque souvent des rivalités.",
    },
    {
      id: 'nzimbu',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Société',
      value: 'Nzimbu',
      label: 'des petits coquillages qui servent de monnaie',
      caption: "Les nzimbu sont ramassés près de l'île de Luanda, qui appartient au roi. En contrôlant leur récolte, le roi contrôle la monnaie. Des pièces de tissu en raphia servent aussi de moyen d'échange.",
    },
    {
      id: 'societe',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Paysans, tisserands et forgerons',
      body:
        "La plupart des habitants sont des paysans qui cultivent le mil, le sorgho et l'igname, et élèvent du petit bétail. Les artisans tissent de fines étoffes en fibres de raphia et travaillent le fer et le cuivre. Selon la tradition, le roi fondateur était lui-même forgeron.",
    },
    {
      id: 'croyances',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Les ancêtres et les esprits',
      body:
        "Avant l'arrivée des Portugais, les Kongo honorent les ancêtres, qui veillent sur les vivants, et des esprits de la nature. Des objets rituels, les nkisi, sont censés contenir des forces capables de protéger ou de guérir. Le roi a aussi un rôle religieux.",
    },
    {
      id: 'contact',
      tier: 1,
      type: 'dates',
      kicker: 'Monde',
      title: 'La rencontre avec le Portugal',
      items: [
        { year: 1482, label: "Le navigateur Diogo Cão atteint l'embouchure du fleuve Congo" },
        { year: 1485, label: 'Vers 1485, des Kongo emmenés à Lisbonne reviennent au pays' },
        { year: 1491, label: 'Une expédition portugaise arrive à Mbanza Kongo' },
        { year: 1491, label: 'Le roi Nzinga a Nkuwu est baptisé' },
      ],
    },
    {
      id: 'nzinga',
      tier: 1,
      type: 'person',
      nom: 'Nzinga a Nkuwu (João Ier)',
      role: 'Roi du Kongo',
      dates: 'règne vers 1470 – 1509',
      description: "C'est sous son règne que les Portugais arrivent. Le 3 mai 1491, il se fait baptiser et prend le nom de João, comme le roi du Portugal. Pour lui, cette nouvelle religion apporte des alliés puissants, des savoir-faire et un prestige nouveau.",
    },

    // ── Niveau 2 ──
    {
      id: 'diogo-cao',
      tier: 2,
      type: 'person',
      nom: 'Diogo Cão',
      role: 'Navigateur portugais',
      dates: 'XVe siècle',
      description: "Chargé par le roi Jean II d'explorer la côte africaine, il atteint l'embouchure du fleuve Congo en 1482. Il y dresse un padrão, une colonne de pierre surmontée d'une croix, pour marquer le passage des Portugais. Il emmène aussi à Lisbonne quelques Kongo, qui reviennent plus tard.",
    },
    {
      id: 'ambassade',
      tier: 2,
      type: 'text',
      kicker: 'Monde',
      title: 'Des Kongo à Lisbonne',
      body:
        "Les Kongo emmenés au Portugal apprennent le portugais et découvrent la cour de Lisbonne. À leur retour, ils racontent ce qu'ils ont vu. Le roi du Kongo envoie à son tour une ambassade au Portugal et demande des prêtres et des artisans.",
    },
    {
      id: 'bapteme',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Les baptêmes de 1491',
      body:
        "En 1491, le gouverneur de la province côtière de Soyo est baptisé le premier. Quelques semaines plus tard, c'est le tour du roi, puis de son épouse et de son fils Mvemba a Nzinga, qui devient Afonso. Une première église est construite à Mbanza Kongo.",
    },
    {
      id: 'sources',
      tier: 2,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Comment connaît-on le Kongo ancien ?',
      body:
        "Le Kongo n'a pas d'écriture avant l'arrivée des Portugais. Son histoire ancienne est connue par des traditions orales, notées plus tard par des missionnaires et des Kongo lettrés, et par l'archéologie. C'est pourquoi les débuts du royaume restent mal datés.",
    },
    {
      id: 'suite',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Un tournant',
      body:
        "En 1492, le Kongo est un royaume puissant qui traite avec le Portugal presque d'égal à égal. Ces relations vont transformer le royaume au XVIe siècle, pour le meilleur comme pour le pire : c'est l'objet du chapitre suivant.",
    },
  ],

  quiz: [
    { id: 'fleuve', type: 'mcq', prompt: 'Près de quel fleuve se trouve le royaume du Kongo ?', options: ['Le fleuve Congo', 'Le Niger', 'Le Nil', 'Le Zambèze'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale du royaume du Kongo ?', options: ['Mbanza Kongo', 'Luanda', 'Kinshasa', 'Gao'], answer: 0 },
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve Mbanza Kongo ?', options: ["L'Angola", 'Le Nigeria', 'Le Kenya', 'Le Mali'], answer: 0 },
    { id: 'fondateur', type: 'mcq', prompt: 'Qui fonde le royaume du Kongo selon la tradition ?', options: ['Lukeni lua Nimi', 'Nzinga a Nkuwu', 'Diogo Cão', 'Soundiata Keïta'], answer: 0 },
    { id: 'date', type: 'tf', prompt: "La date de fondation du Kongo est connue avec précision grâce à des textes de l'époque.", answer: false, explanation: "Elle n'est connue que par des traditions orales : on l'estime vers la fin du XIVe siècle." },
    { id: 'titre', type: 'mcq', prompt: 'Comment les Portugais appellent-ils le roi du Kongo ?', options: ['Le manikongo', 'Le pharaon', 'Le mansa', 'Le négus'], answer: 0 },
    { id: 'nzimbu', type: 'mcq', prompt: 'Que sont les nzimbu ?', options: ['Des coquillages servant de monnaie', 'Des statues royales', 'Des guerriers', 'Des pirogues'], answer: 0 },
    { id: 'luanda', type: 'mcq', prompt: 'Près de quelle île, propriété du roi, récolte-t-on les nzimbu ?', options: ["L'île de Luanda", 'Madagascar', 'Zanzibar', "L'île de Gorée"], answer: 0 },
    { id: 'raphia', type: 'mcq', prompt: 'Avec quelle fibre les Kongo tissent-ils leurs étoffes ?', options: ['Le raphia', 'La soie', 'La laine', 'Le lin'], answer: 0 },
    { id: 'provinces', type: 'tf', prompt: 'Le roi du Kongo nomme des gouverneurs à la tête des provinces.', answer: true },
    { id: 'nkisi', type: 'mcq', prompt: 'Comment appelle-t-on les objets rituels censés contenir des forces protectrices ?', options: ['Les nkisi', 'Les nzimbu', 'Les padrões', 'Les griots'], answer: 0 },
    { id: 'cao', type: 'mcq', prompt: "Quel navigateur portugais atteint l'embouchure du fleuve Congo en 1482 ?", options: ['Diogo Cão', 'Vasco de Gama', 'Christophe Colomb', 'Bartolomeu Dias'], answer: 0 },
    { id: 'padrao', type: 'mcq', prompt: "Qu'est-ce qu'un padrão ?", options: ['Une colonne de pierre surmontée d’une croix', 'Un navire portugais', 'Une monnaie kongo', 'Un titre royal'], answer: 0 },
    { id: 'bapteme', type: 'mcq', prompt: 'En quelle année le roi Nzinga a Nkuwu est-il baptisé ?', options: ['1491', '1482', '1390', '1509'], answer: 0 },
    { id: 'nom', type: 'mcq', prompt: 'Quel nom chrétien prend Nzinga a Nkuwu ?', options: ['João', 'Afonso', 'Manuel', 'Henrique'], answer: 0 },
    { id: 'soyo', type: 'tf', prompt: 'Le gouverneur de Soyo est baptisé avant le roi.', answer: true },
    { id: 'ecriture', type: 'tf', prompt: "Avant l'arrivée des Portugais, le Kongo utilise l'écriture.", answer: false, explanation: "Son histoire ancienne repose sur des traditions orales et sur l'archéologie." },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Fondation du royaume par Lukeni lua Nimi', "Arrivée de Diogo Cão à l'embouchure du Congo", 'Baptême du roi Nzinga a Nkuwu'] },
  ],

  recap: [
    'Fin du XIVe siècle : fondation du Kongo autour de Mbanza Kongo',
    'Un royaume centralisé, divisé en provinces dirigées par des gouverneurs',
    'Coquillages nzimbu, tissus de raphia et travail du fer',
    "1482 : arrivée de Diogo Cão ; 1491 : baptême du roi Nzinga a Nkuwu",
  ],
}

/** Chapitre rédigé : Chine de la fin des Qing à la République populaire (1789 – aujourd'hui). */
export default {
  readingTime: 6,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'qing',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Le puissant empire des Qing',
      body:
        "Vers 1800, la Chine est gouvernée par la dynastie Qing, d'origine mandchoue, depuis Pékin. C'est le pays le plus peuplé du monde. Sûr de sa puissance, l'empereur Qianlong refuse en 1793 d'ouvrir davantage son pays au commerce britannique.",
      highlight: { value: '≈ 300 millions', label: "d'habitants vers 1800 (estimation)" },
    },
    {
      id: 'opium',
      tier: 1,
      type: 'war',
      nom: "Guerres de l'opium",
      annee: 1839,
      adversaires: ['Royaume-Uni', 'France (seconde guerre, 1856-1860)'],
      vainqueur: 'Le Royaume-Uni et la France',
      consequences:
        "La Chine voulait interdire l'opium, une drogue vendue par les marchands britanniques. Vaincue, elle cède Hong Kong au Royaume-Uni (traité de Nankin, 1842) et doit ouvrir ses ports. En 1860, Français et Britanniques pillent et incendient le Palais d'été de Pékin.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Un immense territoire',
      years: [1800, 1914, 1960],
      caption:
        "Comparez : la Mongolie extérieure se détache de la Chine au début du XXe siècle ; la République populaire prend le contrôle du Tibet en 1950.",
    },
    {
      id: 'republique',
      tier: 1,
      type: 'dates',
      kicker: 'Fin',
      title: "La fin de l'empire",
      items: [
        { year: 1911, label: "Une révolution éclate contre les Qing" },
        { year: 1912, label: 'Proclamation de la République ; le dernier empereur, Puyi, abdique' },
        { year: 1921, label: 'Fondation du Parti communiste chinois' },
      ],
    },
    {
      id: 'sun',
      tier: 1,
      type: 'person',
      nom: 'Sun Yat-sen',
      role: 'Révolutionnaire, premier président (provisoire) de la République',
      dates: '1866 – 1925',
      description:
        "Médecin, il lutte pour renverser l'empire et défend les « Trois principes du peuple » : nationalisme, démocratie et bien-être du peuple. Il fonde le Kuomintang, le parti nationaliste. On le considère comme le « père de la Chine moderne », à Pékin comme à Taïwan.",
    },
    {
      id: 'guerre-civile',
      tier: 1,
      type: 'steps',
      kicker: 'Guerre',
      title: 'Nationalistes contre communistes',
      items: [
        { year: 1927, label: 'Tchang Kaï-chek, chef des nationalistes, se retourne contre les communistes' },
        { year: 1934, label: 'Longue Marche : les communistes fuient vers le nord ; Mao s’impose comme leur chef' },
        { year: 1937, label: 'Invasion japonaise : les deux camps luttent contre le Japon' },
        { year: 1949, label: 'Victoire de Mao ; Tchang Kaï-chek se replie à Taïwan' },
      ],
    },
    {
      id: 'mao',
      tier: 1,
      type: 'person',
      nom: 'Mao Zedong',
      role: 'Fondateur de la République populaire de Chine',
      dates: '1893 – 1976',
      description:
        "Le 1er octobre 1949, à Pékin, il proclame la République populaire de Chine. Il dirige le pays jusqu'à sa mort en dictateur, au nom du communisme. Ses campagnes politiques causent des millions de morts.",
    },
    {
      id: 'mao-crises',
      tier: 1,
      type: 'text',
      kicker: 'Crise',
      title: 'Grand Bond en avant et Révolution culturelle',
      body:
        "En 1958, Mao lance le « Grand Bond en avant » pour industrialiser le pays à toute vitesse. L'échec provoque une terrible famine (1959-1961) : des dizaines de millions de morts selon les historiens, sans chiffre exact. De 1966 à 1976, la « Révolution culturelle » lance les jeunes Gardes rouges contre les professeurs, les intellectuels et le patrimoine ancien.",
      highlight: { value: '1966 – 1976', label: 'Révolution culturelle' },
    },
    {
      id: 'reformes',
      tier: 1,
      type: 'text',
      kicker: "Âge d'or",
      title: "L'« atelier du monde »",
      body:
        "À partir de 1978, Deng Xiaoping ouvre l'économie : entreprises privées, investissements étrangers, zones économiques spéciales comme Shenzhen. Le Parti communiste garde tout le pouvoir politique. La Chine entre à l'Organisation mondiale du commerce en 2001 et devient en 2010 la deuxième économie du monde.",
      highlight: { value: '1978', label: 'début des réformes' },
    },

    // ── Niveau 2 ──
    {
      id: 'revoltes',
      tier: 2,
      type: 'text',
      kicker: 'Crise',
      title: 'Taiping et Boxers',
      body:
        "La révolte des Taiping (1850-1864) est l'une des guerres civiles les plus meurtrières de l'histoire : des millions de morts, peut-être plus de 20 millions. En 1900, les Boxers attaquent les étrangers à Pékin ; une armée de huit puissances étrangères occupe la ville.",
    },
    {
      id: 'sino-japonaise',
      tier: 2,
      type: 'war',
      nom: 'Guerre sino-japonaise',
      annee: 1937,
      adversaires: ['Empire du Japon'],
      allies: ['États-Unis', 'Royaume-Uni', 'URSS'],
      vainqueur: 'La Chine et les Alliés',
      consequences:
        "En décembre 1937, l'armée japonaise massacre un très grand nombre de civils et de prisonniers à Nankin. La guerre fait des millions de morts chinois. Elle affaiblit les nationalistes, ce qui aide les communistes à gagner ensuite la guerre civile.",
    },
    {
      id: 'deng',
      tier: 2,
      type: 'person',
      nom: 'Deng Xiaoping',
      role: 'Dirigeant de la Chine',
      dates: '1904 – 1997',
      description:
        "Écarté pendant la Révolution culturelle, il dirige le pays de 1978 à la fin des années 1980. Il résume son choix ainsi : « Peu importe qu'un chat soit noir ou blanc, s'il attrape la souris, c'est un bon chat ».",
    },
    {
      id: 'tiananmen',
      tier: 2,
      type: 'text',
      kicker: 'Droits',
      title: "1989 : la place Tian'anmen",
      body:
        "Au printemps 1989, des étudiants manifestent à Pékin, sur la place Tian'anmen, pour plus de libertés. Dans la nuit du 3 au 4 juin, l'armée réprime le mouvement. Le nombre de morts reste inconnu : de plusieurs centaines à plusieurs milliers selon les sources. Le sujet est toujours censuré en Chine.",
    },
    {
      id: 'population',
      tier: 2,
      type: 'keyfigure',
      kicker: 'Société',
      value: '≈ 1,4 milliard',
      label: "d'habitants en Chine aujourd'hui",
      caption:
        "De 1979 à 2015, la politique de l'enfant unique limite les naissances. En 2023, selon l'ONU, l'Inde devient plus peuplée que la Chine.",
    },
  ],

  quiz: [
    { id: 'qing', type: 'mcq', prompt: 'Quelle dynastie gouverne la Chine en 1800 ?', options: ['Les Qing', 'Les Ming', 'Les Han', 'Les Tang'], answer: 0 },
    { id: 'opium', type: 'mcq', prompt: "Contre quel pays la Chine mène-t-elle la première guerre de l'opium (1839-1842) ?", options: ['Le Royaume-Uni', 'Le Japon', 'La Russie', 'Les États-Unis'], answer: 0 },
    { id: 'hong-kong', type: 'mcq', prompt: 'Quel territoire la Chine cède-t-elle au Royaume-Uni en 1842 ?', options: ['Hong Kong', 'Macao', 'Taïwan', 'Shanghai'], answer: 0 },
    { id: 'traites', type: 'tf', prompt: "On appelle « traités inégaux » les traités imposés à la Chine par les puissances étrangères au XIXe siècle.", answer: true },
    { id: 'boxers', type: 'mcq', prompt: 'Quelle révolte attaque les étrangers à Pékin en 1900 ?', options: ['La révolte des Boxers', 'La révolte des Taiping', 'La révolte des Cipayes', 'La Révolution culturelle'], answer: 0 },
    { id: 'revolution', type: 'mcq', prompt: "En quelle année éclate la révolution qui renverse l'empire ?", options: ['1911', '1949', '1789', '1839'], answer: 0 },
    { id: 'puyi', type: 'mcq', prompt: 'Qui est le dernier empereur de Chine ?', options: ['Puyi', 'Qianlong', 'Qin Shi Huang', 'Kangxi'], answer: 0 },
    { id: 'sun', type: 'mcq', prompt: 'Qui est considéré comme le « père de la Chine moderne » ?', options: ['Sun Yat-sen', 'Mao Zedong', 'Deng Xiaoping', 'Confucius'], answer: 0 },
    { id: 'longue-marche', type: 'mcq', prompt: 'Comment appelle-t-on la grande retraite des communistes en 1934-1935 ?', options: ['La Longue Marche', 'Le Grand Bond en avant', 'La marche du sel', 'La Révolution culturelle'], answer: 0 },
    { id: 'nankin', type: 'mcq', prompt: 'Quelle armée commet le massacre de Nankin en 1937 ?', options: ["L'armée japonaise", "L'armée britannique", "L'armée soviétique", "L'armée communiste chinoise"], answer: 0 },
    { id: 'proclamation', type: 'mcq', prompt: 'Que proclame Mao le 1er octobre 1949 ?', options: ['La République populaire de Chine', 'La République de Chine', "Le retour de l'empire", "L'union avec l'URSS"], answer: 0 },
    { id: 'taiwan', type: 'mcq', prompt: 'Où se réfugie Tchang Kaï-chek en 1949 ?', options: ['À Taïwan', 'À Hong Kong', 'Au Japon', 'En Corée'], answer: 0 },
    { id: 'grand-bond', type: 'tf', prompt: 'Le Grand Bond en avant apporte la prospérité aux paysans chinois.', answer: false, explanation: "C'est un échec : il provoque une terrible famine entre 1959 et 1961." },
    { id: 'livre-rouge', type: 'mcq', prompt: 'Quel livre brandissent les Gardes rouges pendant la Révolution culturelle ?', options: ['Le Petit Livre rouge', 'Le Capital', 'Le Manifeste du parti communiste', 'Les Entretiens de Confucius'], answer: 0 },
    { id: 'deng', type: 'mcq', prompt: "Quel dirigeant ouvre l'économie chinoise à partir de 1978 ?", options: ['Deng Xiaoping', 'Mao Zedong', 'Sun Yat-sen', 'Tchang Kaï-chek'], answer: 0 },
    { id: 'tiananmen', type: 'tf', prompt: "En 1989, le gouvernement accepte les demandes des manifestants de la place Tian'anmen.", answer: false, explanation: "L'armée réprime le mouvement dans la nuit du 3 au 4 juin 1989." },
    { id: 'omc', type: 'mcq', prompt: "En quelle année la Chine entre-t-elle à l'Organisation mondiale du commerce ?", options: ['2001', '1978', '1997', '2010'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ["Première guerre de l'opium", "Révolution qui renverse l'empire", 'Proclamation de la République populaire', 'Début de la Révolution culturelle', "Entrée de la Chine à l'OMC"] },
  ],

  recap: [
    "Au XIXe siècle, l'empire Qing est humilié par les guerres de l'opium",
    "1911-1912 : fin de l'empire et naissance de la République avec Sun Yat-sen",
    '1949 : Mao fonde la République populaire ; famine et Révolution culturelle',
    "Depuis 1978, les réformes de Deng font de la Chine une grande puissance",
  ],
}

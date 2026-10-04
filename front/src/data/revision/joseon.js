/** Chapitre rédigé : Corée de la dynastie Joseon (1392 – 1897). */
export default {
  readingTime: 5,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'fondation',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Un général fonde une dynastie',
      body:
        "En 1392, le général Yi Seong-gye renverse la dynastie Goryeo et devient roi sous le nom de Taejo. Il reprend le nom d'un très ancien royaume, Joseon, et installe sa capitale à Hanyang (l'actuelle Séoul) en 1394. Sa famille, les Yi, va régner plus de 500 ans.",
      highlight: { value: '1392', label: 'fondation de Joseon' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'La péninsule coréenne',
      years: [1600, 1880],
      caption: "Comparez : pendant cinq siècles, les frontières de Joseon changent très peu, entre la Chine au nord et le Japon de l'autre côté de la mer.",
    },
    {
      id: 'confucianisme',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Un royaume confucéen',
      body:
        "Les rois de Joseon font du néo-confucianisme, venu de Chine, la doctrine de l'État : respect des parents, des ancêtres et de la hiérarchie. Le bouddhisme perd ses privilèges et beaucoup de monastères se replient dans les montagnes. Les fonctionnaires sont recrutés par des examens sur les classiques chinois.",
    },
    {
      id: 'sejong',
      tier: 1,
      type: 'person',
      nom: 'Sejong le Grand',
      role: 'Roi de Joseon',
      dates: 'règne 1418 – 1450',
      description: "Roi savant, il réunit des lettrés dans une académie royale, le « Pavillon des sages » (Jiphyeonjeon). Sous son règne, on crée l'alphabet coréen, des horloges à eau, des cadrans solaires et des pluviomètres. Il est le roi le plus admiré de l'histoire coréenne.",
    },
    {
      id: 'hangeul',
      tier: 1,
      type: 'text',
      kicker: 'Culture',
      title: "L'invention du hangeul",
      body:
        "Le chinois écrit est très difficile à apprendre. Sejong fait créer en 1443 un alphabet simple, promulgué en 1446 sous le nom de « Sons corrects pour instruire le peuple ». Certaines lettres imitent la forme de la bouche ou de la langue qui prononce le son. Les lettrés continuent pourtant longtemps d'écrire en chinois.",
      highlight: { value: '1446', label: "promulgation de l'alphabet" },
    },
    {
      id: 'imjin',
      tier: 1,
      type: 'war',
      nom: "Guerre d'Imjin",
      annee: 1592,
      adversaires: ['Japon de Toyotomi Hideyoshi'],
      allies: ['Joseon', 'Chine des Ming'],
      vainqueur: 'Joseon et les Ming',
      consequences: "Environ 150 000 soldats japonais débarquent et prennent Séoul en trois semaines. Avec l'aide de l'armée chinoise et de la flotte de Yi Sun-sin, les Coréens résistent. À la mort de Hideyoshi en 1598, les Japonais repartent, laissant un pays ravagé.",
    },
    {
      id: 'yi-sun-sin',
      tier: 1,
      type: 'person',
      nom: 'Yi Sun-sin',
      role: 'Amiral',
      dates: '1545 – 1598',
      description: "Il utilise des « bateaux-tortues », couverts d'un toit hérissé de pointes contre l'abordage. En 1597, à Myeongnyang, avec seulement 13 navires, il repousse une flotte japonaise d'environ 130 navires. Il est tué en 1598 lors de la dernière bataille de la guerre.",
    },
    {
      id: 'mandchous',
      tier: 1,
      type: 'text',
      kicker: 'Crise',
      title: 'La soumission aux Mandchous',
      body:
        "Les Mandchous, qui vont conquérir la Chine, envahissent la Corée en 1627 puis en 1636. Au début de 1637, le roi Injo doit se prosterner devant leur empereur. Joseon devient vassal de la nouvelle dynastie chinoise des Qing et lui envoie un tribut.",
      highlight: { value: '1637', label: 'soumission aux Qing' },
    },
    {
      id: 'fin',
      tier: 1,
      type: 'dates',
      kicker: 'Fin',
      title: 'Du « royaume ermite » à l’empire',
      items: [
        { year: 1866, label: 'Persécution des catholiques ; expédition française repoussée' },
        { year: 1871, label: 'Une expédition américaine est aussi repoussée' },
        { year: 1876, label: 'Traité de Ganghwa : le Japon force la Corée à ouvrir ses ports' },
        { year: 1897, label: "Le roi Gojong se proclame empereur : fin du royaume de Joseon" },
        { year: 1910, label: 'Le Japon annexe la Corée' },
      ],
    },

    // ── Niveau 2 ──
    {
      id: 'lettres',
      tier: 2,
      type: 'keyfigure',
      kicker: 'Connaissance',
      value: '28',
      label: "lettres dans l'alphabet de 1446 (24 aujourd'hui)",
      caption: "En Corée du Sud, le jour du hangeul, le 9 octobre, est une fête nationale.",
    },
    {
      id: 'societe',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Yangban et nobi',
      body:
        "Au sommet de la société se trouvent les yangban, familles de lettrés et de fonctionnaires. Tout en bas, les nobi sont des esclaves et serviteurs héréditaires : selon les estimations, ils forment une part importante de la population aux XVe-XVIIe siècles. L'esclavage héréditaire est aboli en 1886, puis totalement en 1894.",
    },
    {
      id: 'sciences',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Mesurer le ciel et la pluie',
      body:
        "Sous Sejong, l'ingénieur Jang Yeong-sil construit une horloge à eau qui sonne les heures toute seule (1434). En 1441, des pluviomètres sont installés dans tout le royaume pour mesurer la pluie, essentielle aux rizières. Les Coréens perfectionnent aussi l'imprimerie à caractères métalliques.",
    },
    {
      id: 'annales',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Les Annales de la dynastie',
      body:
        "Jour après jour, des historiens notent les actes de chaque roi. Ces Annales couvrent 472 ans (1392-1863) en près de 1 900 volumes. En principe, le roi n'avait pas le droit de les lire ! Elles sont inscrites au registre « Mémoire du monde » de l'UNESCO.",
    },
    {
      id: 'jeongjo',
      tier: 2,
      type: 'text',
      kicker: 'Âge d’or',
      title: 'Le renouveau du XVIIIe siècle',
      body:
        "Les rois Yeongjo et Jeongjo relancent le pays. Des lettrés développent les « études pratiques » (silhak), tournées vers l'agriculture, les techniques et le commerce. Jeongjo fait bâtir la forteresse de Hwaseong, à Suwon (1794-1796), aujourd'hui classée au patrimoine mondial.",
    },
  ],

  quiz: [
    { id: 'fondation', type: 'mcq', prompt: 'En quelle année la dynastie Joseon est-elle fondée ?', options: ['1392', '1446', '1592', '1897'], answer: 0 },
    { id: 'fondateur', type: 'mcq', prompt: 'Qui fonde la dynastie Joseon ?', options: ['Le général Yi Seong-gye', 'Le roi Sejong', "L'amiral Yi Sun-sin", 'Le roi Gojong'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle ville actuelle était Hanyang, la capitale de Joseon ?', options: ['Séoul', 'Pyongyang', 'Busan', 'Pékin'], answer: 0 },
    { id: 'doctrine', type: 'mcq', prompt: "Quelle doctrine devient celle de l'État sous Joseon ?", options: ['Le néo-confucianisme', 'Le bouddhisme', 'Le shintoïsme', 'Le christianisme'], answer: 0 },
    { id: 'hangeul', type: 'mcq', prompt: "Comment s'appelle l'alphabet coréen ?", options: ['Le hangeul', 'Les kanji', 'Le sanskrit', 'Les hiragana'], answer: 0 },
    { id: 'sejong', type: 'mcq', prompt: "Sous quel roi l'alphabet coréen est-il créé ?", options: ['Sejong', 'Taejo', 'Seonjo', 'Injo'], answer: 0 },
    { id: 'empereur', type: 'tf', prompt: 'Sejong portait le titre d’empereur.', answer: false, explanation: "Il était roi : les souverains de Joseon ne prennent le titre d'empereur qu'en 1897." },
    { id: 'chinois', type: 'tf', prompt: 'Après 1446, les lettrés coréens continuent longtemps d’écrire en chinois.', answer: true },
    { id: 'imjin-qui', type: 'mcq', prompt: 'Quel chef japonais envahit la Corée en 1592 ?', options: ['Toyotomi Hideyoshi', 'Tokugawa Ieyasu', 'Oda Nobunaga', "L'empereur Meiji"], answer: 0 },
    { id: 'ming', type: 'mcq', prompt: 'Quel allié aide Joseon contre le Japon pendant la guerre d’Imjin ?', options: ['La Chine des Ming', 'Les Mongols', 'Le Portugal', 'Les Mandchous'], answer: 0 },
    { id: 'tortue', type: 'mcq', prompt: "Quel type de navire est associé à l'amiral Yi Sun-sin ?", options: ['Le bateau-tortue', 'La jonque-dragon', 'La caravelle', 'La galère'], answer: 0 },
    { id: 'myeongnyang', type: 'mcq', prompt: 'Avec combien de navires Yi Sun-sin repousse-t-il la flotte japonaise à Myeongnyang ?', options: ['13', '130', '300', '1 000'], answer: 0 },
    { id: 'mandchous', type: 'mcq', prompt: 'De quelle dynastie chinoise Joseon devient-il vassal en 1637 ?', options: ['Les Qing', 'Les Ming', 'Les Song', 'Les Yuan'], answer: 0 },
    { id: 'nobi', type: 'mcq', prompt: 'Qui sont les nobi dans la Corée de Joseon ?', options: ['Des esclaves et serviteurs héréditaires', 'Des lettrés fonctionnaires', 'Des moines bouddhistes', 'Des marchands étrangers'], answer: 0 },
    { id: 'pluviometre', type: 'mcq', prompt: 'Quel instrument est installé dans tout le royaume en 1441 ?', options: ['Le pluviomètre', 'Le télescope', 'Le thermomètre', 'La boussole'], answer: 0 },
    { id: 'ganghwa', type: 'mcq', prompt: 'Quel pays force la Corée à ouvrir ses ports en 1876 ?', options: ['Le Japon', 'La France', 'Les États-Unis', 'La Russie'], answer: 0 },
    { id: 'hwaseong', type: 'tf', prompt: 'La forteresse de Hwaseong est construite à la fin du XVIIIe siècle.', answer: true },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Fondation de Joseon', 'Promulgation du hangeul', "Guerre d'Imjin", 'Soumission aux Qing', 'Traité de Ganghwa'] },
  ],

  recap: [
    '1392 : Yi Seong-gye fonde Joseon, capitale Hanyang (Séoul)',
    'Un royaume confucéen ; Sejong fait créer le hangeul (1446)',
    "Invasions japonaises (1592-1598) puis mandchoues (1627, 1636)",
    '1876 : ouverture forcée ; 1897 : fin du royaume, place à l’Empire coréen',
  ],
}

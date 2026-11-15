/** Chapitre rédigé : Đại Việt (939 – 1802). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'independance',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Mille ans plus tard, l’indépendance',
      body:
        "Pendant plus de mille ans, le nord du Vietnam actuel est gouverné par la Chine. En 938, Ngô Quyền détruit une flotte chinoise sur le fleuve Bạch Đằng et devient roi l'année suivante : le pays est indépendant.",
      highlight: { value: '939', label: 'indépendance' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'La marche vers le sud',
      years: [1100, 1500, 1800],
      caption: 'Comparez : en sept siècles, le Đại Việt s’étend du delta du fleuve Rouge jusqu’au delta du Mékong.',
    },
    {
      id: 'bachdang',
      tier: 1,
      type: 'text',
      kicker: 'Guerres',
      title: 'La ruse des pieux',
      body:
        "Ngô Quyền fait planter dans le fleuve des pieux à pointe de fer, cachés par la marée haute. À marée basse, les navires chinois s'y empalent. En 1288, la même ruse détruit la flotte mongole.",
    },
    {
      id: 'thanglong',
      tier: 1,
      type: 'text',
      kicker: 'Ville',
      title: 'Thăng Long, la capitale',
      body:
        "En 1010, le roi Lý Thái Tổ installe sa capitale à Thăng Long, « le dragon qui s'élève », l'actuelle Hanoï. En 1070 y est fondé le temple de la Littérature, qui forme les lettrés du pays.",
    },
    {
      id: 'mongols',
      tier: 1,
      type: 'war',
      nom: 'Invasions mongoles du Đại Việt',
      annee: 1285,
      adversaires: ['Empire mongol de Chine (Kubilai Khan)'],
      allies: ['Đại Việt (dynastie Trần)'],
      vainqueur: 'Đại Việt',
      consequences:
        "Le Đại Việt repousse trois invasions mongoles (1258, 1285, 1287-1288). Le général Trần Hưng Đạo abandonne les villes, harcèle l'ennemi, puis détruit sa flotte sur le Bạch Đằng.",
    },
    {
      id: 'leloi',
      tier: 1,
      type: 'person',
      nom: 'Lê Lợi',
      role: 'Libérateur et empereur',
      dates: '1385 – 1433',
      description:
        "En 1407, la Chine des Ming occupe le pays. Lê Lợi lance une insurrection en 1418 et, après dix ans de lutte, chasse les Ming. Il fonde en 1428 la dynastie Lê.",
    },
    {
      id: 'confucius',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Le pays des lettrés',
      body:
        "Le pays est gouverné par des lettrés recrutés par des concours sur les textes de Confucius. Les noms des lauréats sont gravés sur des stèles posées sur des tortues de pierre, au temple de la Littérature.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Le Đại Việt en dates',
      items: [
        { year: 938, label: 'Bataille du Bạch Đằng' },
        { year: 1010, label: 'Capitale à Thăng Long' },
        { year: 1288, label: 'Victoire sur les Mongols' },
        { year: 1428, label: 'Lê Lợi chasse les Ming' },
        { year: 1471, label: 'Prise de Vijaya' },
        { year: 1802, label: 'Réunification' },
      ],
    },
    {
      id: 'sud',
      tier: 1,
      type: 'text',
      kicker: 'Expansion',
      title: 'Vers le sud',
      body:
        "En 1471, le Đại Việt prend Vijaya, la capitale du Champa. Puis, siècle après siècle, des paysans vietnamiens s'installent toujours plus au sud, jusqu'au delta du Mékong.",
    },

    // ── Niveau 2 ──
    {
      id: 'divise',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Un pays divisé',
      body:
        "À partir du XVIe siècle, les empereurs Lê ne règnent plus que de nom. Les seigneurs Trịnh, au nord, et Nguyễn, au sud, se font la guerre et partagent le pays pendant près de deux siècles.",
    },
    {
      id: 'dongda',
      tier: 2,
      type: 'war',
      nom: 'Bataille de Đống Đa',
      annee: 1789,
      adversaires: ['Chine des Qing'],
      allies: ['Tây Sơn (Quang Trung)'],
      vainqueur: 'Tây Sơn (Quang Trung)',
      consequences: "Pendant la fête du Têt, Quang Trung surprend et met en déroute l'armée chinoise près de Thăng Long. La Chine renonce à intervenir.",
    },
    {
      id: 'quocngu',
      tier: 2,
      type: 'text',
      kicker: 'Écriture',
      title: 'Du chữ nôm au quốc ngữ',
      body:
        "Les lettrés écrivent le vietnamien avec des caractères inspirés du chinois, le chữ nôm. Au XVIIe siècle, des missionnaires mettent au point une écriture en alphabet latin, le quốc ngữ, utilisée aujourd'hui.",
    },
    {
      id: 'marionnettes',
      tier: 2,
      type: 'text',
      kicker: 'Quotidien',
      title: 'Les marionnettes sur l’eau',
      body:
        "Cachés derrière un rideau, des marionnettistes font évoluer leurs personnages sur un bassin. Ce théâtre existe déjà au XIIe siècle, comme l'atteste une stèle de 1121.",
    },
    {
      id: 'epee',
      tier: 2,
      type: 'text',
      kicker: 'Légende',
      title: 'Le lac de l’Épée restituée',
      body:
        "Selon la légende, Lê Lợi aurait rendu à une tortue géante l'épée magique qui l'avait aidé à vaincre les Ming. Le lac Hoàn Kiếm, au cœur de Hanoï, en garde le nom.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Quel pays actuel correspond au Đại Việt ?', options: ['Le Vietnam', 'La Thaïlande', 'La Corée', 'La Birmanie'], answer: 0 },
    { id: 'chine', type: 'mcq', prompt: 'De quel pays le Vietnam se libère-t-il en 938-939 ?', options: ['La Chine', 'Le Japon', 'L’Inde', 'La France'], answer: 0 },
    { id: 'ngo', type: 'mcq', prompt: 'Qui remporte la bataille du Bạch Đằng en 938 ?', options: ['Ngô Quyền', 'Lê Lợi', 'Quang Trung', 'Kubilai Khan'], answer: 0 },
    { id: 'pieux', type: 'mcq', prompt: 'Quelle ruse est utilisée sur le fleuve Bạch Đằng ?', options: ['Des pieux cachés sous l’eau', 'Des brûlots', 'Un faux mur', 'Des éléphants'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quel est l’ancien nom de Hanoï, capitale à partir de 1010 ?', options: ['Thăng Long', 'Huế', 'Saïgon', 'Vijaya'], answer: 0 },
    { id: 'litterature', type: 'mcq', prompt: 'À quel penseur est dédié le temple de la Littérature ?', options: ['Confucius', 'Bouddha', 'Lao-tseu', 'Mahomet'], answer: 0 },
    { id: 'mongols', type: 'mcq', prompt: 'Combien d’invasions mongoles le Đại Việt repousse-t-il ?', options: ['Trois', 'Une', 'Dix', 'Aucune'], answer: 0 },
    { id: 'tranhungdao', type: 'mcq', prompt: 'Quel général bat les Mongols en 1288 ?', options: ['Trần Hưng Đạo', 'Ngô Quyền', 'Gengis Khan', 'Lê Thánh Tông'], answer: 0 },
    { id: 'ming', type: 'mcq', prompt: 'Qui chasse les Ming et fonde la dynastie Lê en 1428 ?', options: ['Lê Lợi', 'Lý Thái Tổ', 'Quang Trung', 'Gia Long'], answer: 0 },
    { id: 'epee', type: 'tf', prompt: 'Selon la légende, Lê Lợi rend son épée magique à une tortue géante.', answer: true },
    { id: 'concours', type: 'mcq', prompt: 'Comment sont recrutés les fonctionnaires ?', options: ['Par des concours de lettrés', 'Par tirage au sort', 'Par l’armée', 'Par élection'], answer: 0 },
    { id: 'champa', type: 'mcq', prompt: 'Quel royaume voisin le Đại Việt affaiblit-il en prenant Vijaya en 1471 ?', options: ['Le Champa', 'Le royaume khmer', 'Ayutthaya', 'Pagan'], answer: 0 },
    { id: 'quocngu', type: 'mcq', prompt: 'Comment s’appelle l’écriture du vietnamien en alphabet latin ?', options: ['Le quốc ngữ', 'Le chữ nôm', 'Le sanskrit', 'Le hangeul'], answer: 0 },
    { id: 'dongda', type: 'mcq', prompt: 'Quelle armée Quang Trung bat-il pendant le Têt 1789 ?', options: ['Une armée chinoise des Qing', 'Une armée française', 'Une armée mongole', 'Une armée siamoise'], answer: 0 },
    { id: 'marionnettes', type: 'tf', prompt: 'Le théâtre de marionnettes sur l’eau existe déjà au XIIe siècle.', answer: true },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Bataille du Bạch Đằng', 'Capitale à Thăng Long', 'Victoire sur les Mongols', 'Lê Lợi chasse les Ming'] },
  ],

  recap: [
    '938-939 : Ngô Quyền gagne l’indépendance face à la Chine',
    'Thăng Long (Hanoï), capitale ; un État de lettrés confucéens',
    'Victoires sur les Mongols (XIIIe siècle) et les Ming (1428)',
    'Expansion vers le sud, divisions, puis réunification en 1802',
  ],
}

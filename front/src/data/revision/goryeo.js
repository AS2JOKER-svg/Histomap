/** Chapitre rédigé : Corée de la dynastie Goryeo (918 – 1392). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'wang-geon',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Wang Geon réunifie la Corée',
      body:
        "À la fin du IXe siècle, le royaume de Silla éclate en trois États rivaux. En 918, le général Wang Geon fonde un nouveau royaume, Goryeo, en référence à l'ancien royaume de Goguryeo. En 935-936, il obtient la soumission de Silla puis vainc le dernier rival : la péninsule est réunifiée.",
      highlight: { value: '918', label: 'fondation de Goryeo' },
    },
    {
      id: 'nom',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Héritage',
      value: 'Goryeo → Corée',
      label: 'un nom passé dans toutes les langues',
      caption: "Les marchands arabes et chinois qui fréquentent le port de la capitale font connaître le nom « Goryeo ». Il a donné « Corée » en français et « Korea » en anglais.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Un royaume péninsulaire',
      years: [1000, 1200],
      caption: "Goryeo occupe la péninsule coréenne. Au nord, il fait face à de puissants peuples des steppes et de Mandchourie : Khitan, Jurchen, puis Mongols.",
    },
    {
      id: 'gaegyeong',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Des lettrés au service du roi',
      body:
        "Le roi gouverne depuis Gaegyeong (aujourd'hui Kaesong, en Corée du Nord). À partir de 958, sur le modèle chinois, des examens permettent de recruter des fonctionnaires lettrés. Mais les grandes familles aristocratiques gardent l'essentiel du pouvoir.",
    },
    {
      id: 'celadon',
      tier: 1,
      type: 'text',
      kicker: 'Culture',
      title: 'Le céladon, vert comme le jade',
      body:
        "Les potiers de Goryeo produisent des céramiques à la couverte gris-vert, les céladons. Au XIIe siècle, ils inventent une technique d'incrustation d'argiles blanche et noire dans le décor. En 1123, un envoyé chinois des Song en fait l'éloge.",
    },
    {
      id: 'tripitaka',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Croyances',
      value: '≈ 81 000',
      label: 'planches de bois gravées du Tripitaka Koreana',
      caption: "Pendant les invasions mongoles, le royaume fait graver l'ensemble des textes bouddhiques pour obtenir la protection du Bouddha. Ces planches sont conservées au temple de Haeinsa et inscrites au patrimoine mondial.",
    },
    {
      id: 'mongols',
      tier: 1,
      type: 'text',
      kicker: 'Crise',
      title: "Trente ans de résistance aux Mongols",
      body:
        "À partir de 1231, les Mongols envahissent Goryeo à plusieurs reprises et ravagent les campagnes. En 1232, la cour se réfugie sur l'île de Ganghwa, protégée par la mer. Elle finit par se soumettre vers 1259-1270 : Goryeo devient vassal de l'empire mongol des Yuan, et les princes coréens épousent des princesses mongoles.",
    },
    {
      id: 'jikji',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Le Jikji, imprimé en métal',
      body:
        "En 1377, un temple de Cheongju imprime le Jikji, un recueil d'enseignements bouddhiques, avec des caractères mobiles en métal. C'est le plus ancien livre conservé imprimé ainsi, environ 78 ans avant la Bible de Gutenberg. Le seul volume qui en subsiste est conservé à la Bibliothèque nationale de France.",
      highlight: { value: '1377', label: 'impression du Jikji' },
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Durée',
      title: 'Près de cinq siècles de Goryeo',
      items: [
        { year: 918, label: 'Wang Geon fonde Goryeo' },
        { year: 936, label: 'Réunification de la péninsule' },
        { year: 1019, label: 'Victoire de Gwiju sur les Khitan' },
        { year: 1170, label: 'Coup d’État des militaires' },
        { year: 1231, label: 'Première invasion mongole' },
        { year: 1392, label: 'Yi Seong-gye fonde la dynastie Joseon' },
      ],
    },

    // ── Niveau 2 ──
    {
      id: 'gwiju',
      tier: 2,
      type: 'war',
      nom: 'Bataille de Gwiju',
      annee: 1019,
      adversaires: ['Empire khitan des Liao'],
      allies: ['Royaume de Goryeo (général Gang Gam-chan)'],
      vainqueur: 'Goryeo',
      consequences: "Cette victoire met fin aux guerres contre les Khitan. Goryeo construit ensuite une longue muraille au nord pour protéger sa frontière.",
    },
    {
      id: 'militaires',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Le temps des généraux',
      body:
        "Méprisés par les nobles civils, des officiers prennent le pouvoir en 1170. À partir de 1196, la famille Choe dirige le pays pendant plus de soixante ans, tandis que le roi n'a plus qu'un rôle symbolique.",
    },
    {
      id: 'gongmin',
      tier: 2,
      type: 'person',
      nom: 'Gongmin',
      role: 'Roi de Goryeo',
      dates: 'règne 1351 – 1374',
      description: "Profitant de l'affaiblissement des Mongols, il rompt avec leur tutelle en 1356, reprend des territoires au nord et tente de réduire la puissance des grandes familles. Il est assassiné en 1374.",
    },
    {
      id: 'samguk',
      tier: 2,
      type: 'text',
      kicker: 'Connaissance',
      title: "Écrire l'histoire de la Corée",
      body:
        "En 1145, le lettré Kim Bu-sik achève le Samguk sagi, « Histoire des Trois Royaumes ». C'est le plus ancien livre d'histoire coréenne conservé. Le bouddhisme reste la religion des rois, tandis que le confucianisme inspire l'administration.",
    },
    {
      id: 'fin',
      tier: 2,
      type: 'text',
      kicker: 'Fin',
      title: 'Pirates et généraux',
      body:
        "À la fin du XIVe siècle, les côtes sont ravagées par des pirates, les wokou. Le général Yi Seong-gye se rend célèbre en les combattant. En 1388, il fait demi-tour avec son armée au lieu d'attaquer les Ming, prend le pouvoir et fonde en 1392 la dynastie Joseon.",
    },
  ],

  quiz: [
    { id: 'fondateur', type: 'mcq', prompt: 'Qui fonde Goryeo en 918 ?', options: ['Wang Geon', 'Yi Seong-gye', 'Gongmin', 'Kim Bu-sik'], answer: 0 },
    { id: 'nom', type: 'tf', prompt: 'Le nom « Corée » vient de Goryeo.', answer: true },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale de Goryeo ?', options: ['Gaegyeong (Kaesong)', 'Séoul', 'Pékin', 'Kyoto'], answer: 0 },
    { id: 'reunif', type: 'mcq', prompt: 'Quel royaume se soumet à Wang Geon en 935 ?', options: ['Silla', 'Joseon', 'Yamato', 'Liao'], answer: 0 },
    { id: 'examens', type: 'mcq', prompt: 'Comment Goryeo recrute-t-il des fonctionnaires à partir de 958 ?', options: ['Par des examens, sur le modèle chinois', 'Par tirage au sort', 'Par élection populaire', 'Uniquement parmi les moines'], answer: 0 },
    { id: 'celadon', type: 'mcq', prompt: 'Quel art fait la célébrité des potiers de Goryeo ?', options: ['Le céladon', 'La porcelaine bleue et blanche', 'La faïence de Delft', 'Le verre soufflé'], answer: 0 },
    { id: 'gwiju', type: 'mcq', prompt: 'Contre quel peuple Goryeo remporte-t-il la bataille de Gwiju en 1019 ?', options: ['Les Khitan', 'Les Mongols', 'Les Japonais', 'Les Jurchen'], answer: 0 },
    { id: 'coup', type: 'mcq', prompt: 'Qui prend le pouvoir à Goryeo en 1170 ?', options: ['Des militaires', 'Des moines bouddhistes', 'Des marchands', 'Les Mongols'], answer: 0 },
    { id: 'choe', type: 'mcq', prompt: 'Quelle famille de militaires dirige Goryeo à partir de 1196 ?', options: ['Les Choe', 'Les Wang', 'Les Yi', 'Les Kim'], answer: 0 },
    { id: 'ganghwa', type: 'mcq', prompt: 'Où la cour se réfugie-t-elle pendant les invasions mongoles ?', options: ["Sur l'île de Ganghwa", 'Au Japon', 'En Chine', "Sur l'île de Jeju"], answer: 0 },
    { id: 'vassal', type: 'tf', prompt: 'Goryeo finit par devenir vassal de l’empire mongol des Yuan.', answer: true },
    { id: 'tripitaka', type: 'mcq', prompt: 'Qu’est-ce que le Tripitaka Koreana ?', options: ['Des dizaines de milliers de planches gravées des textes bouddhiques', 'Une muraille contre les Khitan', 'Un code de lois', 'Une flotte de guerre'], answer: 0 },
    { id: 'jikji', type: 'mcq', prompt: 'Avec quels caractères mobiles le Jikji est-il imprimé en 1377 ?', options: ['En métal', 'En bois', 'En argile', 'En os'], answer: 0 },
    { id: 'bnf', type: 'mcq', prompt: 'Où est conservé le seul volume subsistant du Jikji ?', options: ['À la Bibliothèque nationale de France', 'Au temple de Haeinsa', 'Au British Museum', 'À Pékin'], answer: 0 },
    { id: 'gutenberg', type: 'tf', prompt: 'Le Jikji est imprimé après la Bible de Gutenberg.', answer: false, explanation: 'Il est imprimé en 1377, environ 78 ans avant la Bible de Gutenberg.' },
    { id: 'gongmin', type: 'mcq', prompt: 'Quel roi rompt avec la tutelle mongole en 1356 ?', options: ['Gongmin', 'Wang Geon', 'Taejo de Joseon', 'Gwangjong'], answer: 0 },
    { id: 'joseon', type: 'mcq', prompt: 'Quelle dynastie Yi Seong-gye fonde-t-il en 1392 ?', options: ['Joseon', 'Silla', 'Ming', 'Baekje'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Fondation de Goryeo', 'Bataille de Gwiju', 'Coup d’État des militaires', 'Première invasion mongole', 'Impression du Jikji'] },
  ],

  recap: [
    '918 : Wang Geon fonde Goryeo, qui a donné son nom à la Corée',
    'Céladons, Tripitaka Koreana et Jikji : un grand foyer de culture bouddhiste',
    'Khitan, militaires puis Mongols : un royaume plusieurs fois menacé',
    '1392 : Yi Seong-gye fonde la dynastie Joseon',
  ],
}

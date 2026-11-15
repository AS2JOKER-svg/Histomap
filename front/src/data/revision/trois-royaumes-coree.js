/** Chapitre rédigé : Trois Royaumes de Corée et Silla (−57 – 935). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'trois',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Trois royaumes rivaux',
      body:
        "Selon les chroniques coréennes, trois royaumes naissent au Ier siècle av. J.-C. : Silla au sud-est, Koguryo au nord et Paekche au sud-ouest. Pendant sept siècles, ils se disputent la péninsule.",
      highlight: { value: '3', label: 'royaumes : Koguryo, Paekche, Silla' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'De trois royaumes à un seul',
      years: [400, 900],
      caption: 'Comparez : vers 400, trois royaumes et la confédération de Gaya ; vers 900, le Silla unifié au sud de la péninsule.',
    },
    {
      id: 'gwanggaeto',
      tier: 1,
      type: 'person',
      nom: 'Gwanggaeto le Grand',
      role: 'Roi de Koguryo',
      dates: 'règne 391 – 413',
      description:
        "Il fait de Koguryo la grande puissance du nord-est de l'Asie et conquiert une grande partie de la Mandchourie. Une stèle de plus de six mètres raconte encore ses exploits.",
    },
    {
      id: 'sui',
      tier: 1,
      type: 'war',
      nom: 'Guerre de Koguryo contre les Sui',
      annee: 612,
      adversaires: ['Chine des Sui'],
      allies: ['Koguryo (général Eulji Mundeok)'],
      vainqueur: 'Koguryo',
      consequences:
        "Le général Eulji Mundeok écrase une armée chinoise à la rivière Salsu. Les échecs contre Koguryo contribuent à la chute de la dynastie Sui en 618.",
    },
    {
      id: 'paekche',
      tier: 1,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Paekche et le Japon',
      body:
        "Le royaume de Paekche entretient des liens étroits avec le Japon. Il lui envoie des lettrés, des artisans, des moines, et lui transmet le bouddhisme et l'écriture chinoise.",
    },
    {
      id: 'seondeok',
      tier: 1,
      type: 'person',
      nom: 'Seondeok',
      role: 'Reine de Silla',
      dates: 'règne 632 – 647',
      description:
        "Première femme à régner sur un royaume coréen, elle fait construire l'observatoire de Cheomseongdae et prépare l'alliance avec la Chine qui permettra l'unification.",
    },
    {
      id: 'unification',
      tier: 1,
      type: 'steps',
      kicker: 'Unification',
      title: 'Comment Silla unifie la Corée',
      items: [
        { year: 660, label: 'Allié à la Chine des Tang, Silla conquiert Paekche' },
        { year: 668, label: 'Les deux alliés prennent Koguryo' },
        { year: 676, label: 'Silla se retourne contre les Tang et les chasse de la péninsule' },
      ],
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les Trois Royaumes en dates',
      items: [
        { year: -57, label: 'Fondation de Silla (tradition)' },
        { year: 391, label: 'Gwanggaeto roi de Koguryo' },
        { year: 527, label: 'Silla adopte le bouddhisme' },
        { year: 676, label: 'Silla unifie la péninsule' },
        { year: 935, label: 'Soumission à Goryeo' },
      ],
    },
    {
      id: 'gyeongju',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Gyeongju, la capitale dorée',
      body:
        "La capitale de Silla, Gyeongju, est l'une des grandes villes d'Asie. Ses tombeaux ont livré des couronnes d'or, et le temple de Bulguksa et la grotte de Seokguram sont des chefs-d'œuvre de l'art bouddhiste.",
    },

    // ── Niveau 2 ──
    {
      id: 'os',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Les rangs d’os',
      body:
        "À Silla, la naissance fixe la place de chacun : c'est le système des « rangs d'os ». Seuls les membres du plus haut rang peuvent devenir roi ou reine.",
    },
    {
      id: 'hwarang',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Les hwarang',
      body:
        "Les hwarang sont des groupes de jeunes nobles de Silla. Ils s'entraînent aux armes, à la poésie et à la morale, et fournissent de nombreux chefs militaires.",
    },
    {
      id: 'imprime',
      tier: 2,
      type: 'text',
      kicker: 'Techniques',
      title: 'Un des plus anciens imprimés',
      body:
        "Dans une pagode du temple de Bulguksa, on a retrouvé un texte bouddhiste imprimé avec des planches de bois, daté d'avant 751. C'est l'un des plus anciens imprimés connus au monde.",
    },
    {
      id: 'jangbogo',
      tier: 2,
      type: 'text',
      kicker: 'Économie',
      title: 'Jang Bogo, maître des mers',
      body:
        "Au IXe siècle, le commandant Jang Bogo chasse les pirates et contrôle le commerce maritime entre la Corée, la Chine et le Japon.",
    },
    {
      id: 'coree',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Le nom de la Corée',
      body:
        "En 935, Silla se soumet au royaume de Goryeo. Ce nom, inspiré de Koguryo, est à l'origine du mot « Corée ».",
    },
  ],

  quiz: [
    { id: 'trois', type: 'mcq', prompt: 'Quels sont les trois royaumes de Corée ?', options: ['Koguryo, Paekche et Silla', 'Wei, Shu et Wu', 'Goryeo, Joseon et Silla', 'Yamato, Nara et Heian'], answer: 0 },
    { id: 'nord', type: 'mcq', prompt: 'Quel royaume se trouve au nord de la péninsule ?', options: ['Koguryo', 'Silla', 'Paekche', 'Gaya'], answer: 0 },
    { id: 'gwanggaeto', type: 'mcq', prompt: 'Quel roi conquérant de Koguryo est surnommé « le Grand » ?', options: ['Gwanggaeto', 'Wang Geon', 'Jumong', 'Munmu'], answer: 0 },
    { id: 'salsu', type: 'mcq', prompt: 'Quelle armée Koguryo écrase-t-il à la rivière Salsu en 612 ?', options: ['Une armée chinoise des Sui', 'Une armée japonaise', 'Une armée mongole', 'Une armée de Silla'], answer: 0 },
    { id: 'japon', type: 'mcq', prompt: 'Quel royaume coréen transmet le bouddhisme au Japon ?', options: ['Paekche', 'Koguryo', 'Silla', 'Goryeo'], answer: 0 },
    { id: 'seondeok', type: 'mcq', prompt: 'Qui est la première reine régnante de l’histoire coréenne ?', options: ['Seondeok', 'Himiko', 'Suiko', 'Razia'], answer: 0 },
    { id: 'reines', type: 'tf', prompt: 'Silla est gouverné à trois reprises par une reine.', answer: true },
    { id: 'allie', type: 'mcq', prompt: 'Avec quelle puissance Silla s’allie-t-il pour vaincre ses rivaux ?', options: ['La Chine des Tang', 'Le Japon', 'L’Empire mongol', 'Le Tibet'], answer: 0 },
    { id: 'unification', type: 'mcq', prompt: 'En quelle année Silla chasse-t-il les Tang et unifie-t-il la péninsule ?', options: ['676', '1392', '935', '57'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale de Silla ?', options: ['Gyeongju', 'Séoul', 'Pyongyang', 'Nara'], answer: 0 },
    { id: 'cheomseongdae', type: 'mcq', prompt: 'Qu’est-ce que Cheomseongdae ?', options: ['Un observatoire astronomique', 'Un palais royal', 'Un port', 'Une forteresse'], answer: 0 },
    { id: 'os', type: 'mcq', prompt: 'Comment s’appelle le système qui fixe le rang de chacun à Silla ?', options: ['Les rangs d’os', 'Les castes', 'Les varnas', 'Les ordres'], answer: 0 },
    { id: 'hwarang', type: 'mcq', prompt: 'Qui sont les hwarang ?', options: ['Des groupes de jeunes nobles', 'Des moines bouddhistes', 'Des marchands', 'Des pirates'], answer: 0 },
    { id: 'imprime', type: 'tf', prompt: 'On a retrouvé à Bulguksa l’un des plus anciens textes imprimés connus.', answer: true },
    { id: 'goryeo', type: 'mcq', prompt: 'À quel royaume Silla se soumet-il en 935 ?', options: ['Goryeo', 'Joseon', 'Koguryo', 'La Chine des Song'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Gwanggaeto roi de Koguryo', 'Silla adopte le bouddhisme', 'Silla unifie la péninsule', 'Soumission à Goryeo'] },
  ],

  recap: [
    'Koguryo, Paekche et Silla se disputent la Corée pendant sept siècles',
    'Koguryo, puissance militaire ; Paekche transmet le bouddhisme au Japon',
    'Allié aux Tang, Silla unifie la péninsule en 676, puis les chasse',
    'Gyeongju, Seokguram, couronnes d’or ; en 935, place à Goryeo',
  ],
}

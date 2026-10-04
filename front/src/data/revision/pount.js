/** Chapitre rédigé : Pays de Pount (≈ 2500 – 1000 av. J.-C., connu par les sources égyptiennes). */
export default {
  readingTime: 3,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'mystere',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Un pays connu par les Égyptiens',
      body:
        "Pount est un pays lointain avec lequel l'Égypte commerce pendant plus de mille ans. Ses habitants n'ont laissé aucun texte : tout ce que l'on sait vient des inscriptions et des images égyptiennes. On ignore même où se trouvait exactement sa capitale.",
      highlight: { value: '≈ 2500 – 1100 av. J.-C.', label: 'période des expéditions égyptiennes connues' },
    },
    {
      id: 'ou',
      tier: 1,
      type: 'text',
      kicker: 'Territoire',
      title: 'Où se trouvait Pount ?',
      body:
        "On sait que les Égyptiens s'y rendaient par la mer Rouge. La plupart des historiens placent Pount dans le sud de cette mer : sur les côtes de l'actuel Soudan, de l'Érythrée, de l'Éthiopie, de Djibouti ou de la Somalie, peut-être aussi en Arabie. La question n'est pas tranchée.",
    },
    {
      id: 'expeditions',
      tier: 1,
      type: 'dates',
      kicker: 'Durée',
      title: 'Les expéditions vers Pount (dates approximatives)',
      items: [
        { year: -2480, label: 'Sous le pharaon Sahourê, première expédition bien documentée' },
        { year: -2000, label: 'Vers 2000 av. J.-C., nouvelles expéditions sous le Moyen Empire' },
        { year: -1470, label: 'Vers 1470 av. J.-C., grande expédition de la reine Hatchepsout' },
        { year: -1150, label: 'Vers 1150 av. J.-C., dernière grande expédition connue, sous Ramsès III' },
      ],
    },
    {
      id: 'produits',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Les trésors de Pount',
      body:
        "Les Égyptiens rapportent de Pount de l'encens et de la myrrhe, des résines parfumées brûlées dans les temples et utilisées pour l'embaumement. Ils ramènent aussi de l'or, de l'ébène, de l'ivoire, des peaux de panthère et des babouins. En échange, ils offrent des bijoux, des armes et des outils.",
    },
    {
      id: 'hatchepsout',
      tier: 1,
      type: 'text',
      kicker: 'Apogée',
      title: 'L’expédition d’Hatchepsout',
      body:
        "Vers 1470 av. J.-C., la reine-pharaon Hatchepsout envoie cinq navires vers Pount. L'expédition est racontée en images sur les murs de son temple de Deir el-Bahari, près de Thèbes. On y voit même des arbres à encens rapportés vivants, dans des paniers, pour être replantés en Égypte.",
      highlight: { value: '5 navires', label: "envoyés par Hatchepsout vers Pount" },
    },
    {
      id: 'ati',
      tier: 1,
      type: 'person',
      nom: 'Ati',
      role: 'Reine de Pount',
      dates: 'vers 1470 av. J.-C.',
      description: "Épouse du roi Parahou, elle est représentée sur les reliefs de Deir el-Bahari accueillant les Égyptiens. Ces images, avec leurs maisons sur pilotis et leurs palmiers, sont la meilleure source sur la vie à Pount.",
    },
    {
      id: 'pays-dieux',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Le « pays du dieu »',
      body:
        "Les Égyptiens appellent Pount Ta-netjer, « le pays du dieu ». Pour eux, c'est une terre presque légendaire, liée à la déesse Hathor, appelée « dame de Pount ». Les parfums qui en viennent sont considérés comme dignes des dieux.",
    },

    // ── Niveau 2 ──
    {
      id: 'port',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Le port retrouvé',
      body:
        "Au début des années 2000, des archéologues fouillent Mersa Gaouasis, sur la côte égyptienne de la mer Rouge. Ils y trouvent des grottes-entrepôts, des cordages, des morceaux de navires et des caisses portant l'inscription « merveilles de Pount ». Les bateaux étaient transportés en pièces à travers le désert, puis assemblés au bord de la mer.",
    },
    {
      id: 'babouins',
      tier: 2,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Les babouins mènent l’enquête',
      body:
        "En 2020, des chercheurs étudient des momies de babouins conservées dans des tombes égyptiennes. L'analyse chimique de leurs restes montre que certains venaient sans doute d'une région allant de l'Érythrée à la Somalie. Cela renforce l'idée que Pount se trouvait dans la Corne de l'Afrique.",
    },
    {
      id: 'paix',
      tier: 2,
      type: 'text',
      kicker: 'Monde',
      title: 'Un commerce pacifique',
      body:
        "Aucune source ne parle d'une guerre entre l'Égypte et Pount. Les Égyptiens présentent ces échanges comme des « tributs », mais il s'agit surtout de commerce. C'est l'un des plus anciens échanges maritimes à longue distance connus.",
    },
  ],

  quiz: [
    { id: 'source', type: 'mcq', prompt: 'Par quelles sources connaît-on surtout le pays de Pount ?', options: ['Les textes et images égyptiens', 'Les livres écrits à Pount', 'Les récits des Romains', 'Les chroniques arabes'], answer: 0 },
    { id: 'mer', type: 'mcq', prompt: 'Par quelle mer les Égyptiens rejoignaient-ils Pount ?', options: ['La mer Rouge', 'La mer Méditerranée', 'La mer Noire', 'La mer Égée'], answer: 0 },
    { id: 'localisation', type: 'tf', prompt: "Les historiens savent avec certitude où se trouvait Pount.", answer: false, explanation: "Sa localisation exacte reste débattue, même si la Corne de l'Afrique est l'hypothèse la plus probable." },
    { id: 'corne', type: 'mcq', prompt: 'Dans quelle région la plupart des historiens placent-ils Pount ?', options: ["La Corne de l'Afrique", "L'Afrique du Sud", 'Le golfe de Guinée', 'Le Maghreb'], answer: 0 },
    { id: 'resines', type: 'mcq', prompt: 'Quelles résines parfumées les Égyptiens cherchent-ils à Pount ?', options: ["L'encens et la myrrhe", 'Le caoutchouc et la gomme', 'Le pétrole et le bitume', 'La cire et le miel'], answer: 0 },
    { id: 'usage', type: 'mcq', prompt: "À quoi servaient l'encens et la myrrhe en Égypte ?", options: ["Aux cultes des temples et à l'embaumement", 'À construire les pyramides', 'À fabriquer du papier', 'À nourrir les animaux'], answer: 0 },
    { id: 'animaux', type: 'mcq', prompt: 'Quels animaux les Égyptiens rapportent-ils de Pount ?', options: ['Des babouins', 'Des kangourous', 'Des lamas', 'Des pandas'], answer: 0 },
    { id: 'sahoure', type: 'mcq', prompt: 'Sous quel pharaon a lieu la première expédition bien documentée vers Pount ?', options: ['Sahourê', 'Ramsès II', 'Akhenaton', 'Cléopâtre'], answer: 0 },
    { id: 'hatchepsout', type: 'mcq', prompt: 'Quelle reine-pharaon envoie une célèbre expédition vers Pount vers 1470 av. J.-C. ?', options: ['Hatchepsout', 'Néfertiti', 'Cléopâtre', 'Ati'], answer: 0 },
    { id: 'temple', type: 'mcq', prompt: "Où l'expédition d'Hatchepsout est-elle racontée en images ?", options: ['Au temple de Deir el-Bahari', 'Dans la pyramide de Khéops', 'Au phare d’Alexandrie', 'Au temple d’Abou Simbel'], answer: 0 },
    { id: 'arbres', type: 'tf', prompt: "Les Égyptiens rapportent de Pount des arbres à encens vivants.", answer: true },
    { id: 'ati', type: 'mcq', prompt: 'Comment s’appelle la reine de Pount représentée à Deir el-Bahari ?', options: ['Ati', 'Hatchepsout', 'Tanit', 'Amanirenas'], answer: 0 },
    { id: 'ta-netjer', type: 'mcq', prompt: 'Que signifie Ta-netjer, le nom égyptien de Pount ?', options: ['Le pays du dieu', "Le pays de l'or", 'Le pays du sud', "Le pays de l'arc"], answer: 0 },
    { id: 'hathor', type: 'mcq', prompt: 'Quelle déesse égyptienne est appelée « dame de Pount » ?', options: ['Hathor', 'Isis', 'Bastet', 'Maât'], answer: 0 },
    { id: 'guerre', type: 'tf', prompt: "L'Égypte a conquis Pount par une grande guerre.", answer: false, explanation: "Aucune source ne mentionne de guerre : les relations sont commerciales." },
    { id: 'gaouasis', type: 'mcq', prompt: "Quel port égyptien d'où partaient les navires vers Pount a été fouillé au début des années 2000 ?", options: ['Mersa Gaouasis', 'Alexandrie', 'Memphis', 'Assouan'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Expédition sous Sahourê', "Expédition d'Hatchepsout", 'Expédition sous Ramsès III', 'Étude des momies de babouins'] },
  ],

  recap: [
    "Un pays lointain de la mer Rouge, sans doute dans la Corne de l'Afrique",
    "Connu seulement par les sources égyptiennes, de Sahourê à Ramsès III",
    'Encens, myrrhe, or, ébène et babouins contre bijoux et outils',
    "Vers 1470 av. J.-C. : l'expédition d'Hatchepsout, gravée à Deir el-Bahari",
  ],
}

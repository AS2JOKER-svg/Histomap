/** Chapitre rédigé : Empire songhaï à son apogée (1492 – 1591). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'askia',
      tier: 1,
      type: 'person',
      nom: 'Askia Mohammed',
      role: "Empereur songhaï, fondateur de la dynastie des Askia",
      dates: 'règne 1493 – 1528',
      description: "Général de Sonni Ali, il prend le pouvoir en 1493 en battant le fils de celui-ci, Sonni Baro. Musulman fervent, il s'appuie sur les lettrés des villes, réorganise l'État et agrandit l'empire. Devenu aveugle, il est renversé par son fils en 1528.",
    },
    {
      id: 'coup',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Une nouvelle dynastie',
      body:
        "Sonni Ali meurt fin 1492. Son fils Sonni Baro refuse de se montrer un musulman zélé. En 1493, le général Mohammed Touré le bat à Anfao et prend le titre d'askia : c'est le début de la dynastie des Askia, qui règne près d'un siècle.",
      highlight: { value: '1493', label: "avènement d'Askia Mohammed" },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le plus vaste empire du Sahel',
      years: [1500, 1530],
      caption: "De la boucle du Niger, l'empire s'étend vers l'ouest jusqu'aux abords du fleuve Sénégal et vers l'est jusqu'à l'Aïr (Agadez).",
    },
    {
      id: 'pelerinage',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Le pèlerinage de 1496-1497',
      body:
        "Askia Mohammed part à La Mecque avec une grande escorte et une fortune en or, dont une partie est distribuée en aumônes. Au Caire, le calife abbasside le reconnaît comme son représentant (calife) pour le « Soudan » de l'Ouest, ce qui renforce sa légitimité.",
    },
    {
      id: 'etat',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Un État bien organisé',
      body:
        "L'empire est divisé en provinces confiées à des gouverneurs. Des fonctionnaires spécialisés s'occupent de la flotte du Niger, des impôts ou des marchés. Askia Mohammed unifie les poids et mesures et nomme des juges (cadis) dans les grandes villes.",
    },
    {
      id: 'sankore',
      tier: 1,
      type: 'text',
      kicker: 'Âge d’or',
      title: 'Tombouctou, cité des livres',
      body:
        "Au XVIe siècle, des milliers d'élèves étudient le droit, la grammaire ou l'astronomie auprès des savants de la mosquée de Sankoré. Vers 1510, le voyageur Léon l'Africain note qu'à Tombouctou, le commerce des livres manuscrits rapporte plus que toute autre marchandise.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Durée',
      title: 'Un siècle de puissance',
      items: [
        { year: 1493, label: 'Askia Mohammed prend le pouvoir' },
        { year: 1496, label: 'Pèlerinage à La Mecque' },
        { year: 1528, label: 'Askia Mohammed est renversé par son fils' },
        { year: 1549, label: "Début du règne d'Askia Daoud" },
        { year: 1591, label: 'Défaite de Tondibi face au Maroc' },
      ],
    },
    {
      id: 'tondibi',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Tondibi',
      annee: 1591,
      adversaires: ['Armée du sultan du Maroc Ahmed al-Mansour (Djouder Pacha)'],
      allies: ["Armée de l'askia Ishaq II"],
      vainqueur: 'Le Maroc',
      consequences: "Après avoir traversé le Sahara, environ 4 000 soldats marocains, en majorité armés d'arquebuses, mettent en déroute une armée songhaï bien plus nombreuse, près de Gao. Gao puis Tombouctou sont occupées.",
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: "L'empire se disloque",
      body:
        "Le Maroc espérait s'emparer des mines d'or, mais celles-ci sont situées bien plus au sud et lui échappent. Les Marocains installent un pacha à Tombouctou ; des askia continuent de résister au sud, dans le Dendi. Le grand empire n'existe plus.",
      highlight: { value: '1591', label: "fin de l'empire unifié" },
    },

    // ── Niveau 2 ──
    {
      id: 'daoud',
      tier: 2,
      type: 'person',
      nom: 'Askia Daoud',
      role: 'Empereur songhaï',
      dates: 'règne 1549 – 1582',
      description: "Fils d'Askia Mohammed, il règne plus de trente ans. Son règne est souvent vu comme une période de prospérité : il développe les domaines agricoles royaux et soutient généreusement les savants de Tombouctou.",
    },
    {
      id: 'ahmed-baba',
      tier: 2,
      type: 'person',
      nom: 'Ahmed Baba',
      role: 'Savant de Tombouctou',
      dates: '1556 – 1627',
      description: "Juriste et auteur d'une quarantaine d'ouvrages, il est arrêté par les Marocains et déporté à Marrakech en 1594. Il ne revient à Tombouctou qu'en 1608. Un centre de conservation des manuscrits de la ville porte aujourd'hui son nom.",
    },
    {
      id: 'tombeau',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: "Le tombeau des Askia à Gao",
      body:
        "Askia Mohammed meurt en 1538. Son tombeau, une pyramide de terre crue d'environ 17 m de haut hérissée de pieux de bois, est inscrit au patrimoine mondial de l'UNESCO depuis 2004.",
    },
    {
      id: 'teghazza',
      tier: 2,
      type: 'text',
      kicker: 'Crise',
      title: 'Le sel de Teghazza, objet de convoitise',
      body:
        "Les mines de sel de Teghazza, en plein Sahara, fournissent le sel échangé contre l'or du Sud. Dans les années 1580, le sultan du Maroc Ahmed al-Mansour les revendique et y envoie des troupes : c'est le prélude à l'invasion de 1591.",
    },
    {
      id: 'conquetes',
      tier: 2,
      type: 'text',
      kicker: 'Expansion',
      title: 'Guerres et conquêtes',
      body:
        "Askia Mohammed mène campagne contre les Mossi au sud, contre l'Aïr au nord-est et vers le pays haoussa à l'est. L'empire contrôle ainsi les grandes routes caravanières qui relient le Niger à l'Afrique du Nord.",
    },
  ],

  quiz: [
    { id: 'fondateur', type: 'mcq', prompt: 'Qui fonde la dynastie des Askia ?', options: ['Askia Mohammed', 'Sonni Ali', 'Mansa Moussa', 'Ahmed al-Mansour'], answer: 0 },
    { id: 'date', type: 'mcq', prompt: 'En quelle année Askia Mohammed prend-il le pouvoir ?', options: ['1493', '1324', '1591', '1464'], answer: 0 },
    { id: 'anfao', type: 'mcq', prompt: 'Qui Askia Mohammed bat-il en 1493 pour prendre le pouvoir ?', options: ['Sonni Baro', 'Ahmed al-Mansour', 'Askia Daoud', 'Mansa Moussa'], answer: 0 },
    { id: 'fleuve', type: 'mcq', prompt: "Le long de quel fleuve s'étend l'empire ?", options: ['Le Niger', 'Le Nil', 'Le Congo', 'Le Zambèze'], answer: 0 },
    { id: 'pelerinage', type: 'tf', prompt: 'Askia Mohammed effectue le pèlerinage à La Mecque.', answer: true },
    { id: 'calife', type: 'mcq', prompt: 'Dans quelle ville le calife reconnaît-il Askia Mohammed comme son représentant ?', options: ['Le Caire', 'Bagdad', 'Istanbul', 'Cordoue'], answer: 0 },
    { id: 'sankore', type: 'mcq', prompt: 'Quelle mosquée de Tombouctou est un grand centre d’enseignement ?', options: ['Sankoré', 'Al-Azhar', 'Sainte-Sophie', 'La Kaaba'], answer: 0 },
    { id: 'leon', type: 'mcq', prompt: 'Quel voyageur décrit le commerce des livres à Tombouctou vers 1510 ?', options: ["Léon l'Africain", 'Marco Polo', 'Ibn Battuta', 'Christophe Colomb'], answer: 0 },
    { id: 'poids', type: 'tf', prompt: 'Askia Mohammed unifie les poids et mesures pour faciliter le commerce.', answer: true },
    { id: 'renverse', type: 'mcq', prompt: 'Par qui Askia Mohammed est-il renversé en 1528 ?', options: ['Par son fils', 'Par les Marocains', 'Par les Portugais', 'Par le roi du Mali'], answer: 0 },
    { id: 'daoud', type: 'mcq', prompt: 'Quel askia règne de 1549 à 1582 ?', options: ['Askia Daoud', 'Askia Ishaq II', 'Sonni Baro', 'Askia Moussa'], answer: 0 },
    { id: 'tondibi', type: 'mcq', prompt: "Quelle bataille marque la fin de l'empire en 1591 ?", options: ['Tondibi', 'Kirina', 'Feyiase', 'Mbwila'], answer: 0 },
    { id: 'maroc', type: 'mcq', prompt: 'Quel pays envahit le Songhaï en 1591 ?', options: ['Le Maroc', 'Le Portugal', "L'Empire ottoman", "L'Égypte"], answer: 0 },
    { id: 'armes', type: 'mcq', prompt: 'Quelle arme donne l’avantage aux Marocains à Tondibi ?', options: ["L'arquebuse", "L'arc long", 'Le char', "L'éléphant de guerre"], answer: 0 },
    { id: 'or', type: 'tf', prompt: "Après sa victoire, le Maroc prend le contrôle des mines d'or d'Afrique de l'Ouest.", answer: false, explanation: "Les mines d'or sont situées bien plus au sud et échappent aux Marocains." },
    { id: 'ahmed-baba', type: 'mcq', prompt: 'Quel savant de Tombouctou est déporté à Marrakech en 1594 ?', options: ['Ahmed Baba', 'Ibn Khaldoun', 'Averroès', 'Léon l’Africain'], answer: 0 },
    { id: 'teghazza', type: 'mcq', prompt: 'Que produisent les mines de Teghazza, convoitées par le Maroc ?', options: ['Du sel', "De l'or", 'Du fer', 'Du cuivre'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Askia Mohammed prend le pouvoir', 'Pèlerinage à La Mecque', 'Règne d’Askia Daoud', 'Bataille de Tondibi'] },
  ],

  recap: [
    '1493 : Askia Mohammed fonde la dynastie des Askia',
    'Un État organisé et musulman, du Sénégal à l’Aïr',
    'Tombouctou, grand centre de savoir et de manuscrits',
    '1591 : les arquebuses marocaines l’emportent à Tondibi',
  ],
}

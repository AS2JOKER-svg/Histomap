/** Chapitre rédigé : Sultanat mamelouk (1250 – 1517). */
export default {
  readingTime: 5,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'mamelouks',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Des esclaves devenus sultans',
      body:
        "Les mamelouks sont des esclaves achetés enfants dans les steppes d'Asie, convertis à l'islam et formés pour devenir des soldats d'élite. En 1250, après avoir capturé le roi de France Louis IX lors de la septième croisade, ils prennent le pouvoir en Égypte.",
      highlight: { value: '1250', label: 'les mamelouks au pouvoir' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'De l’Égypte à la Syrie',
      years: [1300, 1500],
      caption: 'Le sultanat mamelouk gouverne l’Égypte, la Syrie, la Palestine et les villes saintes d’Arabie.',
    },
    {
      id: 'ain-jalut',
      tier: 1,
      type: 'war',
      nom: 'Bataille d’Aïn Djalout',
      annee: 1260,
      adversaires: ['Empire mongol (Ilkhanat)'],
      allies: ['Sultanat mamelouk (Qutuz et Baybars)'],
      vainqueur: 'Sultanat mamelouk',
      consequences:
        "En Palestine, les Mamelouks battent l'armée mongole. C'est la première grande défaite des Mongols dans une bataille rangée : l'Égypte échappe à leur conquête.",
    },
    {
      id: 'baybars',
      tier: 1,
      type: 'person',
      nom: 'Baybars',
      role: 'Sultan mamelouk',
      dates: 'règne 1260 – 1277',
      description:
        "Né dans les steppes et vendu comme esclave, il devient le plus célèbre des sultans mamelouks. Il combat les Mongols et les croisés, prend Antioche (1268) et installe au Caire un calife abbasside.",
    },
    {
      id: 'acre',
      tier: 1,
      type: 'text',
      kicker: 'Croisades',
      title: 'La fin des croisades',
      body:
        "En 1291, le sultan al-Ashraf Khalil prend Acre, dernière grande ville tenue par les croisés en Terre sainte. Les autres places sont abandonnées : c'est la fin des États latins d'Orient, fondés près de deux siècles plus tôt.",
    },
    {
      id: 'caire',
      tier: 1,
      type: 'text',
      kicker: 'Villes',
      title: 'Le Caire, « mère des cités »',
      body:
        "Le Caire devient la plus grande ville du monde musulman, couverte de mosquées, de madrasas et de marchés. Le voyageur Ibn Battuta l'appelle « la mère des cités ». L'historien Ibn Khaldoun y vit et y enseigne.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les Mamelouks en dates',
      items: [
        { year: 1250, label: 'Prise du pouvoir' },
        { year: 1260, label: 'Victoire d’Aïn Djalout' },
        { year: 1291, label: 'Chute d’Acre' },
        { year: 1348, label: 'Peste noire' },
        { year: 1382, label: 'Sultans circassiens' },
        { year: 1517, label: 'Conquête ottomane' },
      ],
    },
    {
      id: 'declin',
      tier: 1,
      type: 'text',
      kicker: 'Déclin',
      title: 'Peste et épices',
      body:
        "En 1348, la peste noire tue une grande partie de la population. Au XVe siècle, Tamerlan ravage la Syrie, et en 1498, les Portugais atteignent l'Inde par la mer : le commerce des épices, source de richesse des Mamelouks, leur échappe.",
    },
    {
      id: 'ottomans',
      tier: 1,
      type: 'war',
      nom: 'Conquête ottomane de l’Égypte',
      annee: 1516,
      adversaires: ['Empire ottoman (Selim Ier)'],
      allies: ['Sultanat mamelouk'],
      vainqueur: 'Empire ottoman',
      consequences:
        "Grâce à leur artillerie, les Ottomans gagnent en Syrie (1516) puis près du Caire (1517). L'Égypte devient une province ottomane, mais les émirs mamelouks gardent une grande influence.",
    },

    // ── Niveau 2 ──
    {
      id: 'shajar',
      tier: 2,
      type: 'person',
      nom: 'Shajar al-Durr',
      role: 'Sultane d’Égypte',
      dates: 'morte en 1257',
      description: "Veuve du dernier sultan ayyoubide, elle dirige la résistance contre la croisade de Louis IX, puis règne quelques mois en 1250 : c'est la seule femme sultane d'Égypte.",
    },
    {
      id: 'hopital',
      tier: 2,
      type: 'text',
      kicker: 'Savoirs',
      title: 'Un grand hôpital au Caire',
      body:
        "Le sultan Qalawun fonde au Caire un grand hôpital où l'on soigne gratuitement les malades, hommes et femmes. On y joue de la musique pour apaiser les patients.",
    },
    {
      id: 'hassan',
      tier: 2,
      type: 'text',
      kicker: 'Architecture',
      title: 'La madrasa du sultan Hassan',
      body:
        "Construite de 1356 à 1363, cette immense mosquée-école du Caire a des murs de plus de 30 mètres de haut. Quatre grandes salles voûtées s'ouvrent sur une cour, une pour chacune des quatre écoles du droit musulman.",
    },
    {
      id: 'calife',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Un calife au Caire',
      body:
        "Après le sac de Bagdad par les Mongols (1258), Baybars installe au Caire un survivant de la famille abbasside comme calife. Il n'a pas de pouvoir réel, mais il donne aux sultans mamelouks un grand prestige religieux.",
    },
    {
      id: 'poste',
      tier: 2,
      type: 'text',
      kicker: 'Techniques',
      title: 'Chevaux et pigeons voyageurs',
      body:
        "Les Mamelouks organisent un service postal rapide : des relais de chevaux et des pigeons voyageurs transportent les messages entre Le Caire et la Syrie en quelques jours.",
    },
  ],

  quiz: [
    { id: 'origine', type: 'mcq', prompt: 'Qui sont les mamelouks à l’origine ?', options: ['Des esclaves soldats', 'Des marchands vénitiens', 'Des moines chrétiens', 'Des paysans égyptiens'], answer: 0 },
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays se trouve le cœur du sultanat mamelouk ?', options: ['L’Égypte', 'La Turquie', 'Le Maroc', 'L’Iran'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale des Mamelouks ?', options: ['Le Caire', 'Damas', 'Bagdad', 'Istanbul'], answer: 0 },
    { id: 'louis', type: 'mcq', prompt: 'Quel roi de France est capturé en Égypte en 1250 ?', options: ['Louis IX', 'Philippe Auguste', 'François Ier', 'Louis XIV'], answer: 0 },
    { id: 'ain-jalut', type: 'mcq', prompt: 'Contre qui les Mamelouks gagnent-ils à Aïn Djalout en 1260 ?', options: ['Les Mongols', 'Les croisés', 'Les Byzantins', 'Les Ottomans'], answer: 0 },
    { id: 'baybars', type: 'mcq', prompt: 'Quel est le plus célèbre des sultans mamelouks ?', options: ['Baybars', 'Saladin', 'Soliman', 'Tamerlan'], answer: 0 },
    { id: 'acre', type: 'mcq', prompt: 'Quelle ville tombe en 1291, mettant fin aux États croisés ?', options: ['Acre', 'Jérusalem', 'Constantinople', 'Antioche'], answer: 0 },
    { id: 'calife', type: 'tf', prompt: 'Les Mamelouks accueillent au Caire un calife abbasside.', answer: true },
    { id: 'shajar', type: 'mcq', prompt: 'Qui est la seule femme sultane d’Égypte ?', options: ['Shajar al-Durr', 'Cléopâtre', 'Néfertiti', 'Hatchepsout'], answer: 0 },
    { id: 'voyageur', type: 'mcq', prompt: 'Quel voyageur appelle Le Caire « la mère des cités » ?', options: ['Ibn Battuta', 'Marco Polo', 'Christophe Colomb', 'Hérodote'], answer: 0 },
    { id: 'peste', type: 'mcq', prompt: 'Quelle épidémie frappe l’Égypte en 1348 ?', options: ['La peste noire', 'La grippe espagnole', 'Le choléra', 'La variole'], answer: 0 },
    { id: 'epices', type: 'tf', prompt: 'Les Mamelouks s’enrichissent du commerce des épices entre l’Inde et la Méditerranée.', answer: true },
    { id: 'hopital', type: 'mcq', prompt: 'Quel sultan fonde un grand hôpital au Caire ?', options: ['Qalawun', 'Baybars', 'Barquq', 'Selim'], answer: 0 },
    { id: 'ottomans', type: 'mcq', prompt: 'Qui conquiert l’Égypte en 1517 ?', options: ['Les Ottomans', 'Les Portugais', 'Les Mongols', 'Les Français'], answer: 0 },
    { id: 'mot', type: 'mcq', prompt: 'Que signifie le mot arabe « mamelouk » ?', options: ['Possédé (esclave)', 'Roi', 'Cavalier', 'Saint'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Les mamelouks prennent le pouvoir', 'Bataille d’Aïn Djalout', 'Chute d’Acre', 'Conquête ottomane'] },
  ],

  recap: [
    'D’anciens esclaves soldats prennent le pouvoir en Égypte en 1250',
    'Aïn Djalout (1260) : les Mongols sont arrêtés',
    'Baybars et la chute d’Acre (1291) : fin des États croisés',
    'Le Caire, grande capitale ; conquête ottomane en 1517',
  ],
}

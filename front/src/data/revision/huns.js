/** Chapitre rédigé : Huns (vers 370 – 469). */
export default {
  readingTime: 5,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'arrivee',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Des cavaliers venus d’Asie',
      body:
        "Vers 370, des nomades venus des steppes d'Asie centrale apparaissent au nord de la mer Noire : les Huns. Archers à cheval redoutables, ils soumettent les Alains puis une partie des Goths. Leur origine exacte reste discutée.",
      highlight: { value: '≈ 370', label: 'arrivée des Huns en Europe' },
    },
    {
      id: 'goths',
      tier: 1,
      type: 'text',
      kicker: 'Conséquences',
      title: 'Le grand ébranlement',
      body:
        "Pour fuir les Huns, des dizaines de milliers de Goths demandent en 376 à entrer dans l'Empire romain. Mal accueillis, ils se révoltent et battent l'empereur Valens à Andrinople en 378. D'autres peuples suivent : c'est le début des grandes migrations qui affaiblissent Rome.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'L’empire hunnique',
      years: [400],
      caption: 'Depuis la plaine de Hongrie, les Huns dominent de nombreux peuples entre le Rhin et les steppes.',
    },
    {
      id: 'attila',
      tier: 1,
      type: 'person',
      nom: 'Attila',
      role: 'Roi des Huns',
      dates: 'vers 395 – 453',
      description:
        "Roi avec son frère Bleda à partir de 434, puis seul après 445, il domine les peuples d'Europe centrale. L'Empire romain d'Orient lui verse chaque année des centaines de kilos d'or pour éviter ses invasions.",
    },
    {
      id: 'tribut',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Richesse',
      value: '2 100',
      label: 'livres d’or par an versées par l’Empire d’Orient (447)',
      caption: "Après une invasion dévastatrice des Balkans, Constantinople accepte de payer un énorme tribut annuel, soit environ 700 kilos d'or.",
    },
    {
      id: 'catalauniques',
      tier: 1,
      type: 'war',
      nom: 'Bataille des champs Catalauniques',
      annee: 451,
      adversaires: ['Romains d’Aetius', 'Wisigoths', 'Francs', 'Alains'],
      allies: ['Huns d’Attila', 'Ostrogoths', 'Gépides'],
      vainqueur: 'Romains et Wisigoths (Attila se retire)',
      consequences:
        "En Champagne, la coalition menée par le général Aetius arrête Attila. Le roi wisigoth Théodoric Ier est tué. Attila se retire de Gaule, mais envahit l'Italie l'année suivante.",
    },
    {
      id: 'italie',
      tier: 1,
      type: 'text',
      kicker: 'Conquêtes',
      title: 'L’Italie ravagée',
      body:
        "En 452, Attila détruit Aquilée, puis pille Milan et Pavie. Il se retire après avoir reçu une ambassade conduite par le pape Léon Ier. La famine, les épidémies dans son armée et une attaque de l'Empire d'Orient l'y ont sans doute aussi poussé.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Un siècle de puissance',
      items: [
        { year: 370, label: 'Les Huns arrivent au nord de la mer Noire' },
        { year: 376, label: 'Les Goths fuient dans l’Empire romain' },
        { year: 434, label: 'Attila et Bleda rois' },
        { year: 451, label: 'Bataille des champs Catalauniques' },
        { year: 453, label: 'Mort d’Attila' },
        { year: 454, label: 'Défaite de la Nedao' },
      ],
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Un empire qui s’effondre',
      body:
        "Attila meurt en 453, la nuit de ses noces. Ses fils se disputent l'héritage. En 454, les peuples soumis, menés par les Gépides, se révoltent et les écrasent à la bataille de la Nedao. En quelques années, l'empire hunnique disparaît.",
    },

    // ── Niveau 2 ──
    {
      id: 'priscus',
      tier: 2,
      type: 'text',
      kicker: 'Quotidien',
      title: 'Un dîner chez Attila',
      body:
        "En 449, le diplomate Priscus accompagne une ambassade de Constantinople. Il décrit le village de bois d'Attila et un banquet : les invités boivent dans des coupes d'or et d'argent, mais Attila mange dans une assiette de bois et boit dans une coupe de bois.",
    },
    {
      id: 'aetius',
      tier: 2,
      type: 'person',
      nom: 'Aetius',
      role: 'Général romain',
      dates: 'vers 391 – 454',
      description:
        "Ancien otage chez les Huns, il les connaît bien et les emploie longtemps comme mercenaires. En 451, il réunit Romains et Wisigoths contre Attila. L'empereur Valentinien III le tue de sa propre main en 454.",
    },
    {
      id: 'honoria',
      tier: 2,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'L’anneau d’Honoria',
      body:
        "En 450, Honoria, sœur de l'empereur d'Occident, envoie son anneau à Attila pour échapper à un mariage forcé. Attila y voit une demande en mariage et réclame en dot la moitié de l'Empire d'Occident : un prétexte pour l'envahir.",
    },
    {
      id: 'arc',
      tier: 2,
      type: 'text',
      kicker: 'Armée',
      title: 'L’arc asymétrique',
      body:
        "Les Huns utilisent un arc composite fait de bois, de corne et de tendons, plus long au-dessus de la poignée qu'en dessous. Très puissant, il leur permet de tirer au galop avec précision.",
    },
    {
      id: 'legende',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Le « fléau de Dieu »',
      body:
        "Les auteurs chrétiens surnomment Attila le « fléau de Dieu », envoyé pour punir les péchés. Il devient Etzel dans la Chanson des Nibelungen. Les Hongrois, arrivés bien plus tard, ne descendent pas des Huns, même si des légendes les y ont rattachés.",
    },
  ],

  quiz: [
    { id: 'origine', type: 'mcq', prompt: 'D’où viennent les Huns ?', options: ['Des steppes d’Asie', 'De Scandinavie', 'D’Afrique du Nord', 'D’Arabie'], answer: 0 },
    { id: 'arrivee', type: 'mcq', prompt: 'Vers quand les Huns arrivent-ils au nord de la mer Noire ?', options: ['Vers 370', 'Vers 100', 'Vers 800', 'Vers 1200'], answer: 0 },
    { id: 'goths', type: 'mcq', prompt: 'Quel peuple fuit les Huns et entre dans l’Empire romain en 376 ?', options: ['Les Goths', 'Les Francs', 'Les Vikings', 'Les Arabes'], answer: 0 },
    { id: 'roi', type: 'mcq', prompt: 'Qui est le plus célèbre roi des Huns ?', options: ['Attila', 'Gengis Khan', 'Clovis', 'Alaric'], answer: 0 },
    { id: 'bleda', type: 'mcq', prompt: 'Avec qui Attila règne-t-il d’abord ?', options: ['Son frère Bleda', 'Son fils Ellac', 'Le général Aetius', 'Le pape Léon Ier'], answer: 0 },
    { id: 'tribut', type: 'mcq', prompt: 'Que verse l’Empire romain d’Orient aux Huns ?', options: ['Un tribut en or', 'Des soldats', 'Du blé', 'Des éléphants'], answer: 0 },
    { id: 'catalauniques', type: 'mcq', prompt: 'Dans quelle région se déroule la bataille des champs Catalauniques ?', options: ['En Champagne', 'En Italie', 'En Grèce', 'En Égypte'], answer: 0 },
    { id: 'aetius', type: 'mcq', prompt: 'Quel général romain arrête Attila en 451 ?', options: ['Aetius', 'Jules César', 'Bélisaire', 'Stilicon'], answer: 0 },
    { id: 'wisigoths', type: 'tf', prompt: 'Les Wisigoths combattent aux côtés des Romains contre Attila en 451.', answer: true },
    { id: 'aquilee', type: 'mcq', prompt: 'Quelle ville italienne Attila détruit-il en 452 ?', options: ['Aquilée', 'Rome', 'Naples', 'Venise'], answer: 0 },
    { id: 'pape', type: 'mcq', prompt: 'Quel pape rencontre Attila en 452 ?', options: ['Léon Ier', 'Grégoire le Grand', 'Urbain II', 'Pierre'], answer: 0 },
    { id: 'priscus', type: 'mcq', prompt: 'Selon Priscus, dans quoi Attila mange-t-il ?', options: ['Une assiette de bois', 'Une assiette d’or', 'Un plat d’argent', 'Un bol de cristal'], answer: 0 },
    { id: 'nedao', type: 'mcq', prompt: 'Quelle bataille marque la fin de l’empire hunnique en 454 ?', options: ['La Nedao', 'Andrinople', 'Poitiers', 'Hastings'], answer: 0 },
    { id: 'hongrie', type: 'tf', prompt: 'Les Hongrois actuels descendent des Huns d’Attila.', answer: false, explanation: 'Les Hongrois arrivent à la fin du IXe siècle ; c’est une légende.' },
    { id: 'arc', type: 'mcq', prompt: 'Quelle arme fait la force des Huns ?', options: ['L’arc composite', 'L’arbalète', 'Le canon', 'La catapulte'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Les Goths entrent dans l’Empire romain', 'Attila et Bleda deviennent rois', 'Bataille des champs Catalauniques', 'Bataille de la Nedao'] },
  ],

  recap: [
    'Vers 370 : les Huns arrivent en Europe et poussent les Goths dans l’Empire',
    'Attila (434-453) rançonne l’Empire d’Orient',
    '451 : arrêté aux champs Catalauniques ; 452 : invasion de l’Italie',
    '454 : défaite de la Nedao, fin de l’empire hunnique',
  ],
}

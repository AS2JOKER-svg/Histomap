/** Chapitre rédigé : Italie de la Renaissance (1400 – 1559). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'etats',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Une Italie divisée',
      body:
        "Au XVe siècle, l'Italie n'est pas un pays uni : Florence, Milan, Venise, les États du pape et le royaume de Naples sont des États rivaux. Leurs riches marchands et banquiers financent les artistes.",
      highlight: { value: '5', label: 'grands États rivaux' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'L’Italie en 1530',
      years: [1530],
      caption: 'En 1530, Florence et Milan existent encore comme États, mais passent sous l’influence des Habsbourg, maîtres de l’Espagne et de Naples.',
    },
    {
      id: 'renaissance',
      tier: 1,
      type: 'text',
      kicker: 'Idées',
      title: 'Faire renaître l’Antiquité',
      body:
        "Les humanistes redécouvrent les textes grecs et latins. Les artistes étudient les ruines romaines et le corps humain, et inventent la perspective, qui donne l'illusion de la profondeur.",
    },
    {
      id: 'coupole',
      tier: 1,
      type: 'text',
      kicker: 'Architecture',
      title: 'La coupole de Florence',
      body:
        "En 1436, Brunelleschi achève l'immense coupole de la cathédrale de Florence, construite sans les grands cintres de bois habituels. C'est la plus grande coupole en briques jamais construite.",
    },
    {
      id: 'laurent',
      tier: 1,
      type: 'person',
      nom: 'Laurent de Médicis',
      role: 'Maître de Florence',
      dates: '1449 – 1492',
      description:
        "Surnommé « le Magnifique », ce banquier et poète dirige Florence sans en être officiellement le prince. Il protège des artistes comme Botticelli et le jeune Michel-Ange.",
    },
    {
      id: 'leonard',
      tier: 1,
      type: 'person',
      nom: 'Léonard de Vinci',
      role: 'Peintre, ingénieur et savant',
      dates: '1452 – 1519',
      description:
        "Auteur de La Joconde et de La Cène, il remplit des milliers de pages de dessins de machines et d'anatomie. Il finit sa vie en France, invité par François Ier.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'La Renaissance italienne en dates',
      items: [
        { year: 1436, label: 'Coupole de Florence' },
        { year: 1469, label: 'Laurent de Médicis à la tête de Florence' },
        { year: 1494, label: 'Début des guerres d’Italie' },
        { year: 1504, label: 'Le David de Michel-Ange' },
        { year: 1527, label: 'Sac de Rome' },
        { year: 1559, label: 'Paix du Cateau-Cambrésis' },
      ],
    },
    {
      id: 'guerres',
      tier: 1,
      type: 'war',
      nom: 'Guerres d’Italie',
      annee: 1494,
      adversaires: ['Royaume de France', 'Habsbourg (Espagne et Empire)'],
      allies: ['États italiens, changeant de camp'],
      vainqueur: 'Habsbourg (Espagne)',
      consequences:
        "Pendant soixante-cinq ans, la France et les Habsbourg se disputent l'Italie. En 1559, la paix du Cateau-Cambrésis laisse l'Espagne dominer une grande partie de la péninsule.",
    },
    {
      id: 'michelange',
      tier: 1,
      type: 'text',
      kicker: 'Arts',
      title: 'Michel-Ange et Raphaël',
      body:
        "Michel-Ange sculpte le David (1504) et peint le plafond de la chapelle Sixtine à Rome. Raphaël décore les appartements du pape. La Renaissance rayonne de Florence à Rome.",
    },

    // ── Niveau 2 ──
    {
      id: 'pazzi',
      tier: 2,
      type: 'text',
      kicker: 'Récit',
      title: 'La conjuration des Pazzi',
      body:
        "En 1478, une famille rivale tente d'assassiner les Médicis pendant la messe, dans la cathédrale de Florence. Julien de Médicis est tué ; son frère Laurent, blessé, s'échappe.",
    },
    {
      id: 'machiavel',
      tier: 2,
      type: 'person',
      nom: 'Nicolas Machiavel',
      role: 'Penseur politique',
      dates: '1469 – 1527',
      description: "Ce diplomate florentin écrit Le Prince, une réflexion sur la manière de prendre et de garder le pouvoir.",
    },
    {
      id: 'savonarole',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Savonarole',
      body:
        "À Florence, le moine Savonarole dénonce le luxe et fait brûler des objets jugés impies lors d'un « bûcher des vanités » (1497). Il est exécuté l'année suivante.",
    },
    {
      id: 'sac',
      tier: 2,
      type: 'war',
      nom: 'Sac de Rome (1527)',
      annee: 1527,
      adversaires: ['Armée de l’empereur Charles Quint'],
      allies: ['États pontificaux'],
      vainqueur: 'Troupes impériales',
      consequences: "Des soldats impayés pillent Rome pendant des mois ; de nombreux artistes quittent la ville.",
    },
    {
      id: 'banque',
      tier: 2,
      type: 'text',
      kicker: 'Économie',
      title: 'Les banquiers',
      body:
        "Les Médicis prêtent de l'argent aux rois et aux papes. Le florin de Florence et le ducat de Venise, en or, sont utilisés dans toute l'Europe.",
    },
  ],

  quiz: [
    { id: 'divisee', type: 'tf', prompt: 'Au XVe siècle, l’Italie est un royaume uni sous un seul roi.', answer: false, explanation: 'Elle est divisée en États rivaux : Florence, Milan, Venise, les États du pape, Naples…' },
    { id: 'medicis', type: 'mcq', prompt: 'Quelle famille domine Florence au XVe siècle ?', options: ['Les Médicis', 'Les Sforza', 'Les Habsbourg', 'Les Borgia'], answer: 0 },
    { id: 'sforza', type: 'mcq', prompt: 'Quelle ville les Sforza gouvernent-ils ?', options: ['Milan', 'Florence', 'Venise', 'Naples'], answer: 0 },
    { id: 'mot', type: 'mcq', prompt: 'Que veut « faire renaître » la Renaissance ?', options: ['Les arts et les savoirs de l’Antiquité', 'L’Empire de Charlemagne', 'Les croisades', 'La chevalerie'], answer: 0 },
    { id: 'perspective', type: 'mcq', prompt: 'Quelle technique donne l’illusion de la profondeur dans un tableau ?', options: ['La perspective', 'La mosaïque', 'L’enluminure', 'Le vitrail'], answer: 0 },
    { id: 'brunelleschi', type: 'mcq', prompt: 'Qui construit la coupole de la cathédrale de Florence ?', options: ['Brunelleschi', 'Michel-Ange', 'Raphaël', 'Botticelli'], answer: 0 },
    { id: 'laurent', type: 'mcq', prompt: 'Quel est le surnom de Laurent de Médicis ?', options: ['Le Magnifique', 'Le Téméraire', 'Le Grand', 'Le Pieux'], answer: 0 },
    { id: 'joconde', type: 'mcq', prompt: 'Qui a peint La Joconde ?', options: ['Léonard de Vinci', 'Michel-Ange', 'Raphaël', 'Titien'], answer: 0 },
    { id: 'france', type: 'mcq', prompt: 'Dans quel pays Léonard de Vinci finit-il sa vie ?', options: ['La France', 'L’Espagne', 'L’Angleterre', 'L’Autriche'], answer: 0 },
    { id: 'david', type: 'mcq', prompt: 'Quel artiste sculpte le David installé à Florence en 1504 ?', options: ['Michel-Ange', 'Donatello', 'Léonard de Vinci', 'Brunelleschi'], answer: 0 },
    { id: 'sixtine', type: 'mcq', prompt: 'Qui peint le plafond de la chapelle Sixtine ?', options: ['Michel-Ange', 'Raphaël', 'Botticelli', 'Léonard de Vinci'], answer: 0 },
    { id: 'prince', type: 'mcq', prompt: 'Qui écrit Le Prince ?', options: ['Machiavel', 'Dante', 'Pétrarque', 'Érasme'], answer: 0 },
    { id: 'invasion', type: 'mcq', prompt: 'Quel roi de France envahit l’Italie en 1494 ?', options: ['Charles VIII', 'François Ier', 'Louis XI', 'Henri II'], answer: 0 },
    { id: 'sac', type: 'mcq', prompt: 'Les troupes de quel empereur pillent Rome en 1527 ?', options: ['Charles Quint', 'Napoléon', 'Frédéric Barberousse', 'Soliman le Magnifique'], answer: 0 },
    { id: 'domine', type: 'mcq', prompt: 'Quelle puissance domine l’Italie après 1559 ?', options: ['L’Espagne', 'La France', 'L’Angleterre', 'L’Empire ottoman'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Coupole de Florence', 'Début des guerres d’Italie', 'Sac de Rome', 'Paix du Cateau-Cambrésis'] },
  ],

  recap: [
    'XVe siècle : une Italie divisée en États rivaux, riches de leurs marchands et banquiers',
    'Les humanistes et les artistes font renaître l’Antiquité ; Brunelleschi et la perspective',
    'Laurent de Médicis, Léonard de Vinci, Michel-Ange, Raphaël, Machiavel',
    'Guerres d’Italie (1494-1559) : l’Espagne finit par dominer la péninsule',
  ],
}

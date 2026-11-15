/** Chapitre rédigé : Confédération muisca (vers 800 – 1540). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'plateaux',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Les hauts plateaux de Colombie',
      body:
        "Les Muiscas vivent sur les hauts plateaux froids des Andes, autour de l'actuelle Bogotá, en Colombie. Ils cultivent le maïs, la pomme de terre et le quinoa.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le pays muisca',
      years: [1492],
      caption: 'Vers 1492, les Muiscas occupent les hauts plateaux de la cordillère orientale des Andes.',
    },
    {
      id: 'zipazaque',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Le zipa et le zaque',
      body:
        "Les Muiscas sont organisés en chefferies. Au XVe siècle, deux grands chefs rivaux les dominent : le zipa, à Bacatá, au sud, et le zaque, à Hunza, au nord.",
    },
    {
      id: 'sel',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Le sel et les émeraudes',
      body:
        "Les Muiscas tirent leur richesse du sel, qu'ils extraient de mines comme celle de Zipaquirá, et des émeraudes. Ils les échangent contre l'or et le coton des peuples des basses terres.",
    },
    {
      id: 'guatavita',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'La cérémonie du lac Guatavita',
      body:
        "Selon un récit espagnol, le nouveau chef, couvert de poudre d'or, partait sur un radeau jeter des offrandes d'or et d'émeraudes au milieu du lac sacré de Guatavita.",
    },
    {
      id: 'eldorado',
      tier: 1,
      type: 'text',
      kicker: 'Légende',
      title: 'L’Eldorado',
      body:
        "Ce récit fait naître chez les Européens la légende de l'Eldorado, « l'homme doré », puis d'une cité d'or. Pendant des siècles, des explorateurs la cherchent en vain.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les Muiscas en dates',
      items: [
        { year: 800, label: 'Débuts de la culture muisca' },
        { year: 1490, label: 'Bataille de Chocontá' },
        { year: 1537, label: 'Arrivée des Espagnols' },
        { year: 1538, label: 'Fondation de Bogotá' },
        { year: 1540, label: 'Exécution du dernier zaque' },
      ],
    },
    {
      id: 'conquete',
      tier: 1,
      type: 'war',
      nom: 'Conquête espagnole des Muiscas',
      annee: 1537,
      adversaires: ['Conquistadors espagnols (Gonzalo Jiménez de Quesada)'],
      allies: ['Muiscas'],
      vainqueur: 'Espagne',
      consequences:
        "Divisés entre le zipa et le zaque, les Muiscas ne parviennent pas à s'unir contre quelques centaines d'Espagnols, qui pillent leurs sanctuaires et prennent leurs terres. Le dernier zaque est exécuté en 1540.",
    },
    {
      id: 'bogota',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Bogotá',
      body:
        "En 1538, les Espagnols fondent Santa Fe de Bogotá. Le nom de la capitale de la Colombie vient de Bacatá, le domaine du zipa.",
    },

    // ── Niveau 2 ──
    {
      id: 'radeau',
      tier: 2,
      type: 'text',
      kicker: 'Art',
      title: 'Le radeau d’or',
      body:
        "En 1969, on découvre dans une grotte une petite sculpture d'or représentant un chef sur un radeau, entouré de compagnons. Elle est exposée au musée de l'Or de Bogotá.",
    },
    {
      id: 'chocconta',
      tier: 2,
      type: 'war',
      nom: 'Bataille de Chocontá',
      annee: 1490,
      adversaires: ['Le zaque de Hunza'],
      allies: ['Le zipa de Bacatá'],
      vainqueur: 'Indécis',
      consequences: "Le zipa et le zaque meurent tous les deux dans la bataille. La rivalité entre le sud et le nord continue jusqu'à l'arrivée des Espagnols.",
    },
    {
      id: 'bochica',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Bochica',
      body:
        "Selon les mythes muiscas, le sage Bochica, venu de l'est, enseigne le tissage et les lois, et ouvre la chute du Tequendama pour sauver la plaine d'une inondation.",
    },
    {
      id: 'heritage',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'L’héritage par la sœur',
      body:
        "Chez les Muiscas, le pouvoir d'un chef passe souvent non pas à son fils, mais au fils de sa sœur.",
    },
    {
      id: 'cathedrale',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'La cathédrale de sel',
      body:
        "Dans l'ancienne mine de sel de Zipaquirá, exploitée depuis l'époque muisca, une cathédrale souterraine a été creusée au XXe siècle.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel vivaient les Muiscas ?', options: ['La Colombie', 'Le Mexique', 'Le Pérou', 'L’Argentine'], answer: 0 },
    { id: 'milieu', type: 'mcq', prompt: 'Où vivent les Muiscas ?', options: ['Sur des hauts plateaux des Andes', 'Sur une île', 'Dans le désert', 'Au bord de la mer'], answer: 0 },
    { id: 'chefs', type: 'mcq', prompt: 'Comment s’appellent les deux grands chefs muiscas ?', options: ['Le zipa et le zaque', 'Le pharaon et le vizir', 'Le sapa inca et le coya', 'Le shogun et le daimyo'], answer: 0 },
    { id: 'bacata', type: 'mcq', prompt: 'Où réside le zipa ?', options: ['À Bacatá', 'À Cuzco', 'À Tula', 'À Chan Chan'], answer: 0 },
    { id: 'sel', type: 'mcq', prompt: 'Quelle ressource fait la richesse des Muiscas ?', options: ['Le sel', 'Le pétrole', 'Le fer', 'Le café'], answer: 0 },
    { id: 'pierres', type: 'mcq', prompt: 'Quelles pierres précieuses trouve-t-on chez les Muiscas ?', options: ['Les émeraudes', 'Les diamants', 'Les rubis', 'Les saphirs'], answer: 0 },
    { id: 'guatavita', type: 'mcq', prompt: 'Que fait le nouveau chef au lac Guatavita, selon un récit espagnol ?', options: ['Il jette des offrandes d’or dans le lac', 'Il pêche un poisson sacré', 'Il se baigne avec ses guerriers', 'Il y construit un temple'], answer: 0 },
    { id: 'eldorado', type: 'mcq', prompt: 'Quelle légende naît de cette cérémonie ?', options: ['L’Eldorado', 'L’Atlantide', 'Le Graal', 'La fontaine de Jouvence'], answer: 0 },
    { id: 'radeau', type: 'mcq', prompt: 'Que représente le célèbre radeau muisca en or ?', options: ['Un chef entouré de compagnons', 'Un dieu de la mer', 'Un conquistador', 'Un lama'], answer: 0 },
    { id: 'chocconta', type: 'tf', prompt: 'À la bataille de Chocontá, le zipa et le zaque meurent tous les deux.', answer: true },
    { id: 'conquistador', type: 'mcq', prompt: 'Quel conquistador soumet les Muiscas ?', options: ['Gonzalo Jiménez de Quesada', 'Hernán Cortés', 'Francisco Pizarro', 'Christophe Colomb'], answer: 0 },
    { id: 'bogota', type: 'mcq', prompt: 'Quelle ville les Espagnols fondent-ils en 1538 ?', options: ['Bogotá', 'Lima', 'Mexico', 'Buenos Aires'], answer: 0 },
    { id: 'divises', type: 'tf', prompt: 'Les Muiscas sont unis face aux Espagnols.', answer: false, explanation: 'Divisés entre le zipa et le zaque, ils ne parviennent pas à s’unir.' },
    { id: 'bochica', type: 'mcq', prompt: 'Qui est Bochica dans les mythes muiscas ?', options: ['Un sage qui enseigne le tissage et les lois', 'Le dernier zipa', 'Un conquistador', 'Le dieu de la guerre'], answer: 0 },
    { id: 'cathedrale', type: 'mcq', prompt: 'Qu’a-t-on creusé dans l’ancienne mine de sel de Zipaquirá ?', options: ['Une cathédrale', 'Un métro', 'Un musée de l’or', 'Un stade'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Débuts de la culture muisca', 'Bataille de Chocontá', 'Fondation de Bogotá', 'Exécution du dernier zaque'] },
  ],

  recap: [
    'Les Muiscas, peuple des hauts plateaux de Colombie, autour de Bogotá',
    'Deux grands chefs rivaux : le zipa au sud, le zaque au nord',
    'Sel, émeraudes, or ; la cérémonie de Guatavita et la légende de l’Eldorado',
    '1537-1540 : conquête espagnole ; fondation de Bogotá',
  ],
}

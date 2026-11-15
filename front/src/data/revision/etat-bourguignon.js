/** Chapitre rédigé : État bourguignon (1363 – 1477). Pas de carte : l’État bourguignon n’a pas de territoire propre sur les cartes. */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'hardi',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Un cadeau du roi de France',
      body:
        "En 1363, le roi de France Jean II le Bon donne le duché de Bourgogne à son fils Philippe le Hardi. Par son mariage, celui-ci obtient aussi la riche Flandre.",
      highlight: { value: '1363', label: 'Philippe le Hardi duc de Bourgogne' },
    },
    {
      id: 'territoires',
      tier: 1,
      type: 'text',
      kicker: 'Territoire',
      title: 'De Dijon à Bruges',
      body:
        "Les ducs réunissent peu à peu un ensemble de terres qui va de la Bourgogne jusqu'aux Pays-Bas, avec les villes les plus riches d'Europe du Nord : Bruges, Gand, Anvers, Bruxelles.",
    },
    {
      id: 'guerre-civile',
      tier: 1,
      type: 'text',
      kicker: 'Guerres',
      title: 'Armagnacs contre Bourguignons',
      body:
        "En 1407, le duc Jean sans Peur fait assassiner son rival Louis d'Orléans. Une guerre civile éclate en France entre Armagnacs et Bourguignons, en pleine guerre de Cent Ans.",
    },
    {
      id: 'philippe',
      tier: 1,
      type: 'person',
      nom: 'Philippe le Bon',
      role: 'Duc de Bourgogne',
      dates: 'règne 1419 – 1467',
      description:
        "Allié aux Anglais, ses troupes capturent Jeanne d'Arc en 1430. Il se réconcilie ensuite avec le roi de France (1435) et fait de sa cour la plus brillante d'Europe.",
    },
    {
      id: 'eyck',
      tier: 1,
      type: 'text',
      kicker: 'Arts',
      title: 'Les peintres flamands',
      body:
        "Les peintres de la cour, comme Jan van Eyck, perfectionnent la peinture à l'huile, qui permet des détails et des effets de lumière jamais vus.",
    },
    {
      id: 'toison',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'La Toison d’or',
      body:
        "En 1430, Philippe le Bon fonde l'ordre de chevalerie de la Toison d'or, qui réunit les plus grands seigneurs autour du duc. Il existe toujours.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'L’État bourguignon en dates',
      items: [
        { year: 1363, label: 'Philippe le Hardi duc' },
        { year: 1407, label: 'Assassinat de Louis d’Orléans' },
        { year: 1430, label: 'Ordre de la Toison d’or' },
        { year: 1435, label: 'Traité d’Arras' },
        { year: 1477, label: 'Mort de Charles le Téméraire' },
      ],
    },
    {
      id: 'temeraire',
      tier: 1,
      type: 'war',
      nom: 'Guerres de Bourgogne',
      annee: 1474,
      adversaires: ['Confédérés suisses', 'Lorraine', 'Louis XI de France'],
      allies: ['État bourguignon (Charles le Téméraire)'],
      vainqueur: 'Suisses et Lorrains',
      consequences:
        "Charles le Téméraire veut créer un royaume entre la France et l'Empire. Battu par les Suisses en 1476, il est tué devant Nancy en 1477.",
    },
    {
      id: 'partage',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Le partage',
      body:
        "La Bourgogne revient au roi de France. Les Pays-Bas passent aux Habsbourg, par le mariage de Marie de Bourgogne avec Maximilien en 1477.",
    },

    // ── Niveau 2 ──
    {
      id: 'charles',
      tier: 2,
      type: 'person',
      nom: 'Charles le Téméraire',
      role: 'Duc de Bourgogne',
      dates: '1433 – 1477',
      description: "Grand rival du roi Louis XI, il est battu par les Suisses à Grandson et à Morat. Son corps est retrouvé dans un étang gelé après la bataille de Nancy.",
    },
    {
      id: 'beaune',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Les Hospices de Beaune',
      body:
        "En 1443, le chancelier Nicolas Rolin fonde à Beaune un hôpital pour les pauvres, célèbre pour ses toits de tuiles colorées.",
    },
    {
      id: 'faisan',
      tier: 2,
      type: 'text',
      kicker: 'Récit',
      title: 'Le banquet du Faisan',
      body:
        "Lors d'un banquet resté célèbre, en 1454, Philippe le Bon et ses chevaliers font le vœu de partir en croisade contre les Ottomans, qui viennent de prendre Constantinople. La croisade n'aura jamais lieu.",
    },
    {
      id: 'agneau',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'L’Agneau mystique',
      body:
        "Achevé en 1432, le retable de L'Agneau mystique, des frères Van Eyck, est l'un des chefs-d'œuvre de la peinture européenne. Il est conservé à Gand.",
    },
    {
      id: 'surnom',
      tier: 2,
      type: 'text',
      kicker: 'Mots',
      title: 'Un surnom tardif',
      body:
        "Le surnom de Charles « le Téméraire » lui a été donné après sa mort ; de son vivant, on l'appelait plutôt « le Hardi » ou « le Travailleur ».",
    },
  ],

  quiz: [
    { id: 'region', type: 'mcq', prompt: 'Quelles régions réunit l’État bourguignon ?', options: ['La Bourgogne et les Pays-Bas', 'La Bretagne et la Normandie', 'La Provence et l’Italie', 'L’Espagne et le Portugal'], answer: 0 },
    { id: 'fondateur', type: 'mcq', prompt: 'Qui reçoit le duché de Bourgogne en 1363 ?', options: ['Philippe le Hardi', 'Charles le Téméraire', 'Jean sans Peur', 'Louis XI'], answer: 0 },
    { id: 'dynastie', type: 'mcq', prompt: 'À quelle famille appartiennent les ducs de Bourgogne ?', options: ['Les Valois', 'Les Habsbourg', 'Les Tudor', 'Les Médicis'], answer: 0 },
    { id: 'flandre', type: 'mcq', prompt: 'Quelle riche région Philippe le Hardi obtient-il par son mariage ?', options: ['La Flandre', 'La Bretagne', 'La Savoie', 'La Lorraine'], answer: 0 },
    { id: 'armagnacs', type: 'mcq', prompt: 'Contre qui les Bourguignons se battent-ils dans la guerre civile française ?', options: ['Les Armagnacs', 'Les Anglais', 'Les Suisses', 'Les Habsbourg'], answer: 0 },
    { id: 'jeanne', type: 'mcq', prompt: 'Qui capturent les troupes bourguignonnes en 1430 ?', options: ['Jeanne d’Arc', 'Louis XI', 'Du Guesclin', 'Henri V'], answer: 0 },
    { id: 'arras', type: 'tf', prompt: 'Au traité d’Arras (1435), le duc de Bourgogne se réconcilie avec le roi de France.', answer: true },
    { id: 'eyck', type: 'mcq', prompt: 'Quel peintre travaille à la cour de Philippe le Bon ?', options: ['Jan van Eyck', 'Léonard de Vinci', 'Rembrandt', 'Dürer'], answer: 0 },
    { id: 'huile', type: 'mcq', prompt: 'Quelle technique les peintres flamands perfectionnent-ils ?', options: ['La peinture à l’huile', 'La fresque', 'La mosaïque', 'L’aquarelle'], answer: 0 },
    { id: 'toison', type: 'mcq', prompt: 'Quel ordre de chevalerie Philippe le Bon fonde-t-il en 1430 ?', options: ['La Toison d’or', 'La Jarretière', 'Les Templiers', 'La Légion d’honneur'], answer: 0 },
    { id: 'temeraire', type: 'mcq', prompt: 'Quel duc veut créer un royaume entre la France et l’Empire ?', options: ['Charles le Téméraire', 'Philippe le Bon', 'Jean sans Peur', 'Philippe le Hardi'], answer: 0 },
    { id: 'suisses', type: 'mcq', prompt: 'Qui bat Charles le Téméraire à Grandson et à Morat ?', options: ['Les Suisses', 'Les Anglais', 'Les Espagnols', 'Les Ottomans'], answer: 0 },
    { id: 'nancy', type: 'mcq', prompt: 'Où Charles le Téméraire est-il tué en 1477 ?', options: ['Devant Nancy', 'À Paris', 'À Dijon', 'À Bruges'], answer: 0 },
    { id: 'habsbourg', type: 'mcq', prompt: 'À qui passent les Pays-Bas après 1477 ?', options: ['Aux Habsbourg', 'Au roi de France', 'À l’Angleterre', 'Aux Suisses'], answer: 0 },
    { id: 'beaune', type: 'mcq', prompt: 'Qu’est-ce que les Hospices de Beaune ?', options: ['Un hôpital pour les pauvres', 'Un château', 'Une cathédrale', 'Un port'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Philippe le Hardi duc', 'Assassinat de Louis d’Orléans', 'Traité d’Arras', 'Mort de Charles le Téméraire'] },
  ],

  recap: [
    '1363 : Philippe le Hardi reçoit la Bourgogne, puis hérite de la Flandre',
    'Guerre civile en France (Armagnacs et Bourguignons) ; alliance anglaise',
    'Philippe le Bon : la cour la plus brillante d’Europe, Van Eyck, la Toison d’or',
    '1477 : mort de Charles le Téméraire ; la Bourgogne à la France, les Pays-Bas aux Habsbourg',
  ],
}

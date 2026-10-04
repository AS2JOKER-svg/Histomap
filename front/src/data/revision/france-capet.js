/**
 * Chapitre pilote rédigé à la main : France capétienne (987 – 1492).
 *
 * tier 1 = premier passage (l'essentiel)
 * tier 2 = débloqué quand on reprend le chapitre (nouvelles informations)
 *
 * Types de cartes : voir src/lib/revision.js (text, keyfigure, steps, dates,
 * map, war, person, leaders). Les cartes « couverture » et « bilan » sont
 * ajoutées automatiquement.
 */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 : l'essentiel ─────────────────────────────────────────────
    {
      id: 'creation',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: '987 : un roi élu, presque sans royaume',
      body:
        "À la mort du dernier Carolingien, les grands seigneurs élisent Hugues Capet roi des Francs. Son pouvoir réel ne dépasse guère l'Île-de-France et l'Orléanais : ses vassaux, comme le duc de Normandie ou le comte de Flandre, sont souvent plus puissants que lui.",
      highlight: { value: '987', label: 'Hugues Capet est élu puis sacré' },
    },
    {
      id: 'duree',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Durée',
      value: '505 ans',
      label: 'de Hugues Capet (987) à la fin du Moyen Âge (1492)',
      caption:
        "Les Capétiens « directs » règnent jusqu'en 1328, puis leurs cousins Valois prennent le relais. Secret de la longévité : les premiers rois font sacrer leur fils de leur vivant, et le trône passe de père en fils pendant plus de trois siècles.",
    },
    {
      id: 'territoire',
      tier: 1,
      type: 'map',
      kicker: 'Fluctuations',
      title: 'Le royaume sur la carte',
      years: [1000, 1279, 1400],
      caption:
        "Attention : en l'an 1000, le roi ne contrôle directement qu'un petit domaine autour de Paris ; le reste du royaume est tenu par de grands vassaux. En 1279 et en 1400, repérez les terres anglaises du sud-ouest et la Bretagne, encore indépendante.",
    },
    {
      id: 'domaine',
      tier: 1,
      type: 'steps',
      kicker: 'Fluctuations',
      title: 'Les grandes étapes du domaine royal',
      items: [
        { year: 987, label: 'Île-de-France et Orléanais' },
        { year: 1204, label: 'Philippe Auguste prend la Normandie aux Plantagenêts' },
        { year: 1271, label: 'Le comté de Toulouse rejoint le domaine' },
        { year: 1420, label: "Traité de Troyes : le nord du royaume passe aux Anglais" },
        { year: 1453, label: 'La Guyenne (Bordeaux) est reconquise' },
        { year: 1481, label: "Louis XI hérite de l'Anjou et de la Provence" },
      ],
    },
    {
      id: 'bouvines',
      tier: 1,
      type: 'war',
      kicker: 'Guerre',
      nom: 'Bataille de Bouvines',
      annee: 1214,
      adversaires: ["Empereur Otton IV", 'Comte de Flandre', "Jean sans Terre (roi d'Angleterre, allié)"],
      allies: ['Milices des communes', 'Chevaliers du roi'],
      vainqueur: 'Philippe Auguste',
      consequences:
        "Une victoire décisive près de Lille : le roi garde ses conquêtes (dont la Normandie) et devient le souverain le plus puissant d'Occident.",
    },
    {
      id: 'age-or',
      tier: 1,
      type: 'text',
      kicker: "Âge d'or",
      title: 'Le « beau XIIIe siècle » de Saint Louis',
      body:
        "Sous Louis IX (1226-1270), la France est le royaume le plus peuplé d'Europe et Paris sa plus grande ville. Le roi, réputé juste, rend la justice lui-même et devient un modèle de souverain chrétien : il sera canonisé en 1297.",
      highlight: { value: '≈ 15 à 20 M', label: "d'habitants vers 1300" },
    },
    {
      id: 'gothique',
      tier: 1,
      type: 'text',
      kicker: 'Découverte',
      title: "L'art gothique naît en Île-de-France",
      body:
        "Vers 1140, l'abbé Suger reconstruit la basilique de Saint-Denis avec des voûtes sur croisée d'ogives et de grands vitraux. Ce nouvel art, plus haut et plus lumineux, s'exporte dans toute l'Europe : Notre-Dame de Paris (commencée en 1163), Chartres, Reims, Amiens.",
    },
    {
      id: 'cent-ans',
      tier: 1,
      type: 'dates',
      kicker: 'Guerre',
      title: 'La guerre de Cent Ans en 5 dates',
      items: [
        { year: 1337, label: 'Édouard III d’Angleterre revendique la couronne de France' },
        { year: 1346, label: 'Désastre français à Crécy' },
        { year: 1415, label: 'Azincourt : la chevalerie française écrasée' },
        { year: 1429, label: "Jeanne d'Arc délivre Orléans, Charles VII sacré à Reims" },
        { year: 1453, label: 'Victoire de Castillon : fin de la guerre' },
      ],
    },
    {
      id: 'jeanne',
      tier: 1,
      type: 'person',
      nom: "Jeanne d'Arc",
      role: 'Chef de guerre, sainte',
      dates: '≈ 1412 – 1431',
      description:
        "Jeune paysanne lorraine, elle convainc Charles VII de lui confier une armée, délivre Orléans et le fait sacrer à Reims. Capturée, elle est jugée par un tribunal d'Église favorable aux Anglais et brûlée à Rouen à 19 ans.",
    },

    // ── Niveau 2 : on approfondit ──────────────────────────────────────────
    {
      id: 'sacre',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Un roi sacré et « thaumaturge »',
      body:
        "Le roi est sacré à Reims avec l'huile de la Sainte Ampoule. On lui prête le pouvoir de guérir les écrouelles (une maladie de peau) par simple toucher : un argument de poids face aux seigneurs et même face au pape.",
    },
    {
      id: 'philippe-le-bel',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: "Philippe le Bel tient tête au pape",
      body:
        "Philippe IV (1285-1314) réunit les premiers États généraux en 1302 pour s'appuyer sur le royaume contre le pape Boniface VIII. En 1307, il fait arrêter les Templiers, dont il convoite les richesses : l'ordre est dissous.",
      highlight: { value: '1302', label: 'premiers États généraux' },
    },
    {
      id: 'savoir',
      tier: 2,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Paris, capitale du savoir',
      body:
        "L'Université de Paris naît vers 1200 et attire des étudiants de toute l'Europe. En 1257, Robert de Sorbon fonde un collège pour les étudiants pauvres en théologie : la future Sorbonne. Les foires de Champagne font du royaume un carrefour du commerce européen.",
    },
    {
      id: 'albigeois',
      tier: 2,
      type: 'war',
      kicker: 'Guerre',
      nom: 'Croisade des Albigeois',
      annee: 1209,
      adversaires: ['Cathares (« hérétiques » du Languedoc)', 'Comte de Toulouse'],
      allies: ['Papauté', 'Barons du nord', 'Roi de France (à partir de 1226)'],
      vainqueur: 'Royaume de France',
      consequences: "Le Languedoc est rattaché au domaine royal ; l'Inquisition traque les derniers cathares.",
    },
    {
      id: '1328',
      tier: 2,
      type: 'text',
      kicker: 'Crise',
      title: '1328 : la couronne sans héritier direct',
      body:
        "Les trois fils de Philippe le Bel meurent sans fils. Les grands du royaume écartent le roi d'Angleterre Édouard III, petit-fils de Philippe le Bel par sa mère, et choisissent Philippe VI de Valois. Cette querelle de succession mène à la guerre de Cent Ans.",
    },
    {
      id: 'peste',
      tier: 2,
      type: 'keyfigure',
      kicker: 'Crise',
      value: '1 sur 3',
      label: 'Français environ emportés par la peste noire (1347-1352)',
      caption: "La guerre, les famines et l'épidémie font chuter la population. Les révoltes paysannes, comme la Jacquerie de 1358, éclatent dans un royaume épuisé.",
    },
    {
      id: 'louis-xi',
      tier: 2,
      type: 'person',
      nom: 'Louis XI',
      role: 'Roi de France (1461 – 1483)',
      dates: '1423 – 1483',
      description:
        "Surnommé « l'universelle aragne » pour son art de tisser des intrigues, il préfère la diplomatie et l'argent à la guerre. À la mort de Charles le Téméraire (1477), il récupère la Bourgogne, puis hérite de l'Anjou et de la Provence.",
    },
    {
      id: 'armee',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'À la sortie du Moyen Âge, un État moderne',
      body:
        "Pour gagner la guerre, Charles VII crée une armée permanente payée par un impôt régulier, la taille, et dote le royaume d'une artillerie redoutable. Le roi n'est plus un seigneur parmi d'autres : il gouverne un véritable État.",
    },
  ],
  // Questions de quiz rédigées à la main (ajoutées aux questions générées automatiquement).
  // Types : mcq (answer = index de la bonne réponse), tf (answer = true/false), order (items dans le bon ordre).
  quiz: [
    { id: 'capet-elu', type: 'mcq', prompt: 'Comment Hugues Capet devient-il roi en 987 ?', options: ['Il est élu par les grands seigneurs', 'Il hérite du trône de son père', 'Il est nommé par le pape', 'Il conquiert Paris par les armes'], answer: 0, explanation: "À la mort du dernier Carolingien, les grands du royaume l'élisent." },
    { id: 'domaine-987', type: 'mcq', prompt: 'En 987, quelle région le roi contrôle-t-il vraiment ?', options: ["L'Île-de-France et l'Orléanais", 'La Normandie', 'La Provence', 'Toute la France actuelle'], answer: 0 },
    { id: 'vassaux', type: 'tf', prompt: 'Au début de la dynastie, certains vassaux du roi sont plus puissants que lui.', answer: true, explanation: 'Le duc de Normandie ou le comte de Flandre, par exemple.' },
    { id: 'normandie', type: 'mcq', prompt: 'Quel roi prend la Normandie aux Plantagenêts en 1204 ?', options: ['Philippe Auguste', 'Louis IX', 'Philippe le Bel', 'Hugues Capet'], answer: 0 },
    { id: 'bouvines-lieu', type: 'mcq', prompt: 'La bataille de Bouvines (1214) se déroule près de quelle ville actuelle ?', options: ['Lille', 'Bordeaux', 'Orléans', 'Reims'], answer: 0 },
    { id: 'saint-louis', type: 'mcq', prompt: 'Quel roi est surnommé « Saint Louis » ?', options: ['Louis IX', 'Louis VI', 'Louis XI', 'Louis VII'], answer: 0, explanation: 'Louis IX règne de 1226 à 1270 ; il est canonisé en 1297.' },
    { id: 'gothique-abbe', type: 'mcq', prompt: "Quel abbé fait reconstruire Saint-Denis vers 1140, acte de naissance de l'art gothique ?", options: ['Suger', 'Bernard de Clairvaux', 'Abélard', 'Robert de Sorbon'], answer: 0 },
    { id: 'notre-dame', type: 'mcq', prompt: 'En quelle année commence la construction de Notre-Dame de Paris ?', options: ['1163', '987', '1337', '1453'], answer: 0 },
    { id: 'sorbonne', type: 'tf', prompt: 'Robert de Sorbon fonde en 1257 un collège qui deviendra la Sorbonne.', answer: true },
    { id: 'etats-generaux', type: 'mcq', prompt: 'Quel roi réunit les premiers États généraux en 1302 ?', options: ['Philippe le Bel', 'Charles VII', 'Louis IX', 'Philippe Auguste'], answer: 0, explanation: "Philippe IV s'appuie sur le royaume contre le pape Boniface VIII." },
    { id: 'templiers', type: 'tf', prompt: 'Les Templiers sont arrêtés sur ordre de Louis XI.', answer: false, explanation: "C'est Philippe le Bel, en 1307." },
    { id: 'succession-1328', type: 'mcq', prompt: "Quelle dynastie monte sur le trône en 1328, à la fin des Capétiens « directs » ?", options: ['Les Valois', 'Les Bourbons', 'Les Plantagenêts', 'Les Carolingiens'], answer: 0 },
    { id: 'cent-ans-cause', type: 'mcq', prompt: 'Pourquoi la guerre de Cent Ans éclate-t-elle ?', options: ["Le roi d'Angleterre revendique la couronne de France", 'Une querelle religieuse avec le pape', 'Une invasion viking', 'Une révolte des villes flamandes'], answer: 0 },
    { id: 'cent-ans-ordre', type: 'order', prompt: "Remettez ces batailles de la guerre de Cent Ans dans l'ordre.", items: ['Crécy', 'Azincourt', "Délivrance d'Orléans", 'Castillon'], explanation: 'Crécy (1346) → Azincourt (1415) → Orléans (1429) → Castillon (1453).' },
    { id: 'jeanne-sacre', type: 'mcq', prompt: "Où Jeanne d'Arc fait-elle sacrer Charles VII en 1429 ?", options: ['Reims', 'Paris', 'Orléans', 'Rouen'], answer: 0 },
    { id: 'jeanne-mort', type: 'tf', prompt: "Jeanne d'Arc est brûlée à Rouen en 1431.", answer: true },
    { id: 'peste', type: 'mcq', prompt: 'Quelle part de la population la peste noire emporte-t-elle environ ?', options: ['Un tiers', 'Un dixième', 'Les trois quarts', 'Presque personne'], answer: 0 },
    { id: 'louis-xi-surnom', type: 'mcq', prompt: 'Quel roi est surnommé « l’universelle aragne » ?', options: ['Louis XI', 'Charles VII', 'Philippe le Bel', 'Louis IX'], answer: 0 },
    { id: 'taille', type: 'tf', prompt: "À la fin de la guerre de Cent Ans, le roi dispose d'une armée permanente payée par un impôt régulier.", answer: true, explanation: 'La taille finance la première armée permanente sous Charles VII.' },
  ],
  // Points du bilan (carte finale)
  recap: [
    '987 : Hugues Capet fonde une dynastie qui durera des siècles',
    '1214 : Bouvines consacre la puissance de Philippe Auguste',
    "XIIIe siècle : âge d'or de Saint Louis et des cathédrales gothiques",
    "1337-1453 : guerre de Cent Ans, Jeanne d'Arc et victoire finale",
  ],
}

/** Chapitre rédigé : Royaume d’Écosse (843 – 1707). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'alba',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Le royaume d’Alba',
      body:
        "Selon la tradition, Kenneth MacAlpin réunit vers 843 deux peuples du nord de la Grande-Bretagne, les Pictes et les Scots. Leur royaume, Alba, deviendra l'Écosse.",
      highlight: { value: 'vers 843', label: 'naissance du royaume' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'L’Écosse',
      years: [1000, 1600],
      caption: 'Comparez : le royaume occupe le nord de la Grande-Bretagne, face à l’Angleterre.',
    },
    {
      id: 'wallace',
      tier: 1,
      type: 'text',
      kicker: 'Résistance',
      title: 'William Wallace',
      body:
        "À la fin du XIIIe siècle, le roi d'Angleterre Édouard Ier tente de soumettre l'Écosse. William Wallace prend la tête de la résistance et bat les Anglais à Stirling Bridge (1297), avant d'être capturé et exécuté.",
    },
    {
      id: 'bruce',
      tier: 1,
      type: 'person',
      nom: 'Robert Bruce',
      role: 'Roi d’Écosse',
      dates: 'règne 1306 – 1329',
      description:
        "Couronné en 1306, il mène une guérilla contre les Anglais puis les écrase à Bannockburn en 1314. En 1328, l'Angleterre reconnaît l'indépendance de l'Écosse.",
    },
    {
      id: 'bannockburn',
      tier: 1,
      type: 'war',
      nom: 'Guerres d’indépendance de l’Écosse',
      annee: 1296,
      adversaires: ['Royaume d’Angleterre'],
      allies: ['Écosse', 'France'],
      vainqueur: 'Écosse (indépendance reconnue en 1328)',
      consequences:
        "À Bannockburn (1314), les fantassins écossais armés de longues lances repoussent les chevaliers anglais. L'indépendance de l'Écosse est reconnue en 1328.",
    },
    {
      id: 'alliance',
      tier: 1,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'L’« Auld Alliance »',
      body:
        "Menacée par l'Angleterre, l'Écosse s'allie à la France dès 1295. Cette « vieille alliance » dure plus de deux siècles.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'L’Écosse en dates',
      items: [
        { year: 843, label: 'Kenneth MacAlpin' },
        { year: 1314, label: 'Bataille de Bannockburn' },
        { year: 1560, label: 'Réforme protestante' },
        { year: 1603, label: 'Union des couronnes' },
        { year: 1707, label: 'Acte d’Union' },
      ],
    },
    {
      id: 'marie',
      tier: 1,
      type: 'person',
      nom: 'Marie Stuart',
      role: 'Reine d’Écosse',
      dates: '1542 – 1587',
      description:
        "Reine catholique d'un pays devenu protestant en 1560, elle est forcée d'abdiquer et s'enfuit en Angleterre. Sa cousine Élisabeth Ire la fait emprisonner puis exécuter en 1587.",
    },
    {
      id: 'union',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'De l’union des couronnes à l’Acte d’Union',
      body:
        "En 1603, le fils de Marie Stuart, Jacques VI, devient aussi roi d'Angleterre. En 1707, les deux royaumes s'unissent pour former la Grande-Bretagne.",
    },

    // ── Niveau 2 ──
    {
      id: 'macbeth',
      tier: 2,
      type: 'text',
      kicker: 'Personnages',
      title: 'Le vrai Macbeth',
      body:
        "Macbeth, le héros de la tragédie de Shakespeare, a vraiment régné sur l'Écosse de 1040 à 1057. La pièce prend de grandes libertés avec l'histoire.",
    },
    {
      id: 'knox',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'John Knox et la Réforme',
      body:
        "En 1560, sous l'influence du prédicateur John Knox, l'Écosse adopte le protestantisme. Son Église est dirigée par des assemblées plutôt que par des évêques.",
    },
    {
      id: 'pierre',
      tier: 2,
      type: 'text',
      kicker: 'Symboles',
      title: 'La pierre du destin',
      body:
        "Les rois d'Écosse étaient couronnés sur une pierre sacrée, emportée par les Anglais en 1296. Elle n'a été rendue à l'Écosse qu'en 1996.",
    },
    {
      id: 'napier',
      tier: 2,
      type: 'text',
      kicker: 'Sciences',
      title: 'Les logarithmes',
      body:
        "Au début du XVIIe siècle, le mathématicien écossais John Napier invente les logarithmes, qui facilitent énormément les calculs des astronomes et des navigateurs.",
    },
    {
      id: 'clans',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Les clans des Highlands',
      body:
        "Dans les montagnes du nord, les Highlands, la société est organisée en clans dirigés par des chefs, et l'on parle gaélique. Chaque clan porte un tissu à carreaux, le tartan.",
    },
  ],

  quiz: [
    { id: 'region', type: 'mcq', prompt: 'Où se trouve l’Écosse ?', options: ['Au nord de la Grande-Bretagne', 'Au sud de l’Irlande', 'En Scandinavie', 'En Bretagne française'], answer: 0 },
    { id: 'peuples', type: 'mcq', prompt: 'Quels peuples s’unissent vers 843 pour former le royaume ?', options: ['Les Pictes et les Scots', 'Les Angles et les Saxons', 'Les Vikings et les Normands', 'Les Gaulois et les Bretons'], answer: 0 },
    { id: 'ennemi', type: 'mcq', prompt: 'Contre quel royaume l’Écosse défend-elle son indépendance ?', options: ['L’Angleterre', 'La France', 'La Norvège', 'L’Espagne'], answer: 0 },
    { id: 'wallace', type: 'mcq', prompt: 'Quel héros écossais bat les Anglais à Stirling Bridge en 1297 ?', options: ['William Wallace', 'Robert Bruce', 'Macbeth', 'John Knox'], answer: 0 },
    { id: 'bannockburn', type: 'mcq', prompt: 'Quelle victoire de 1314 assure l’indépendance de l’Écosse ?', options: ['Bannockburn', 'Hastings', 'Flodden', 'Azincourt'], answer: 0 },
    { id: 'bruce', type: 'mcq', prompt: 'Quel roi remporte la bataille de Bannockburn ?', options: ['Robert Bruce', 'Jacques VI', 'Édouard Ier', 'Kenneth MacAlpin'], answer: 0 },
    { id: 'alliance', type: 'mcq', prompt: 'Avec quel pays l’Écosse conclut-elle l’« Auld Alliance » ?', options: ['La France', 'L’Espagne', 'Le Danemark', 'L’Irlande'], answer: 0 },
    { id: 'macbeth', type: 'tf', prompt: 'Macbeth a vraiment été roi d’Écosse.', answer: true },
    { id: 'reforme', type: 'mcq', prompt: 'Quelle religion l’Écosse adopte-t-elle en 1560 ?', options: ['Le protestantisme', 'L’islam', 'L’orthodoxie', 'Le judaïsme'], answer: 0 },
    { id: 'knox', type: 'mcq', prompt: 'Qui conduit la Réforme protestante en Écosse ?', options: ['John Knox', 'Martin Luther', 'Jean Calvin', 'Jan Hus'], answer: 0 },
    { id: 'marie', type: 'mcq', prompt: 'Quelle reine d’Écosse est exécutée en Angleterre en 1587 ?', options: ['Marie Stuart', 'Élisabeth Ire', 'Anne', 'Marie Tudor'], answer: 0 },
    { id: 'elisabeth', type: 'mcq', prompt: 'Qui fait exécuter Marie Stuart ?', options: ['Sa cousine Élisabeth Ire', 'Son fils Jacques VI', 'John Knox', 'Le roi de France'], answer: 0 },
    { id: 'union', type: 'mcq', prompt: 'Que se passe-t-il en 1603 ?', options: ['Le roi d’Écosse devient aussi roi d’Angleterre', 'L’Écosse est conquise', 'L’Écosse devient protestante', 'La France envahit l’Écosse'], answer: 0 },
    { id: '1707', type: 'mcq', prompt: 'Que forment l’Écosse et l’Angleterre en 1707 ?', options: ['La Grande-Bretagne', 'Le Commonwealth', 'L’Union européenne', 'L’Irlande'], answer: 0 },
    { id: 'napier', type: 'mcq', prompt: 'Qu’invente le mathématicien écossais John Napier ?', options: ['Les logarithmes', 'Le télescope', 'La machine à vapeur', 'L’imprimerie'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Kenneth MacAlpin', 'Bataille de Bannockburn', 'Réforme protestante', 'Acte d’Union'] },
  ],

  recap: [
    'Vers 843, Kenneth MacAlpin unit Pictes et Scots : naissance de l’Écosse',
    'Guerres d’indépendance : Wallace, puis Robert Bruce à Bannockburn (1314)',
    'Auld Alliance avec la France ; Réforme protestante (1560) ; Marie Stuart',
    '1603 : union des couronnes ; 1707 : naissance de la Grande-Bretagne',
  ],
}

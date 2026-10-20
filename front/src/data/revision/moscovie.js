/** Chapitre rédigé : Grande-principauté de Moscou (1263 – 1547). */
export default {
  readingTime: 5,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'debuts',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Une petite ville en bois',
      body:
        "Au XIIIe siècle, Moscou n'est qu'une petite ville de bois du nord-est de la Rus', soumise comme les autres principautés à la Horde d'or. Vers 1263, elle revient à Daniel, le plus jeune fils du prince Alexandre Nevski. Ses descendants vont en faire le cœur de la Russie.",
      highlight: { value: '≈ 1263', label: 'Daniel, premier prince de Moscou' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le rassemblement des terres russes',
      years: [1300, 1500],
      caption: 'Comparez : minuscule vers 1300, la principauté de Moscou domine tout le nord-est de la Russie vers 1500.',
    },
    {
      id: 'kalita',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Ivan « la Bourse »',
      body:
        "Le prince Ivan Ier, surnommé Kalita (« la Bourse »), obtient du khan le titre de grand-prince et le droit de collecter le tribut des autres princes. Il attire à Moscou le chef de l'Église russe, le métropolite. Moscou devient la capitale religieuse du pays.",
    },
    {
      id: 'koulikovo',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Koulikovo',
      annee: 1380,
      adversaires: ['Troupes de Mamaï (Horde d’or)'],
      allies: ['Moscou et princes russes alliés'],
      vainqueur: 'Moscou',
      consequences:
        "Le grand-prince Dmitri bat les Mongols près du Don et y gagne le surnom de Donskoï. Mais en 1382, le khan Tokhtamych brûle Moscou : la domination de la Horde continue encore un siècle.",
    },
    {
      id: 'ivan-iii',
      tier: 1,
      type: 'person',
      nom: 'Ivan III le Grand',
      role: 'Grand-prince de Moscou',
      dates: 'règne 1462 – 1505',
      description:
        "Il triple le territoire de Moscou en annexant Novgorod (1478) et Tver (1485), épouse une princesse byzantine et cesse d'obéir à la Horde d'or. Il fait reconstruire le Kremlin par des architectes italiens.",
    },
    {
      id: 'ougra',
      tier: 1,
      type: 'text',
      kicker: 'Indépendance',
      title: 'La halte sur l’Ougra',
      body:
        "En 1480, le khan Ahmed marche sur Moscou. Les deux armées se font face pendant des semaines de part et d'autre de la rivière Ougra, sans vraie bataille. Le khan finit par se retirer : Moscou ne paiera plus jamais de tribut.",
      highlight: { value: '1480', label: 'fin du « joug tatar »' },
    },
    {
      id: 'kremlin',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Un Kremlin à l’italienne',
      body:
        "À la fin du XVe siècle, Ivan III fait venir d'Italie des architectes qui construisent au Kremlin des murailles et des tours de brique rouge, ainsi que la cathédrale de la Dormition, où les tsars seront couronnés.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'De la principauté au tsarat',
      items: [
        { year: 1263, label: 'Daniel, prince de Moscou' },
        { year: 1325, label: 'Le chef de l’Église s’installe à Moscou' },
        { year: 1380, label: 'Victoire de Koulikovo' },
        { year: 1478, label: 'Annexion de Novgorod' },
        { year: 1480, label: 'Fin du tribut à la Horde' },
        { year: 1547, label: 'Ivan IV couronné tsar' },
      ],
    },
    {
      id: 'troisieme-rome',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'La « troisième Rome »',
      body:
        "Après la prise de Constantinople par les Ottomans en 1453, des moines russes présentent Moscou comme la « troisième Rome », seule héritière de Rome et de Byzance et gardienne de la vraie foi orthodoxe. En 1547, Ivan IV se fait couronner tsar, un titre qui vient de « César ».",
    },

    // ── Niveau 2 ──
    {
      id: 'sophie',
      tier: 2,
      type: 'person',
      nom: 'Sophie Paléologue',
      role: 'Grande-princesse de Moscou',
      dates: 'vers 1455 – 1503',
      description:
        "Nièce du dernier empereur byzantin, élevée à Rome, elle épouse Ivan III en 1472. Ce mariage renforce l'idée que Moscou est l'héritière de Byzance ; l'aigle à deux têtes byzantin devient l'emblème de la Russie.",
    },
    {
      id: 'roublev',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'La Trinité de Roublev',
      body:
        "Au début du XVe siècle, le moine Andreï Roublev peint l'icône de la Trinité : trois anges assis autour d'une table, dans des couleurs lumineuses. C'est l'œuvre la plus célèbre de l'art russe ancien.",
    },
    {
      id: 'novgorod',
      tier: 2,
      type: 'war',
      nom: 'Guerre contre Novgorod',
      annee: 1471,
      adversaires: ['République de Novgorod'],
      allies: ['Moscou'],
      vainqueur: 'Moscou',
      consequences: "Novgorod, riche république marchande, est vaincue en 1471 puis annexée en 1478. La cloche qui appelait ses citoyens à l'assemblée est emportée à Moscou.",
    },
    {
      id: 'serge',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Serge de Radonège',
      body:
        "Ce moine fonde au XIVe siècle le monastère de la Trinité, au nord de Moscou. Selon la tradition, il bénit Dmitri avant la bataille de Koulikovo. Il est l'un des saints les plus vénérés de Russie.",
    },
    {
      id: 'servage',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Partir seulement à la Saint-Georges',
      body:
        "En 1497, le code de lois d'Ivan III n'autorise plus les paysans à quitter leur seigneur qu'une fois par an, autour de la Saint-Georges, fin novembre. C'est une première étape vers le servage.",
    },
  ],

  quiz: [
    { id: 'capitale', type: 'mcq', prompt: 'Quelle ville est la capitale de cette principauté ?', options: ['Moscou', 'Kiev', 'Novgorod', 'Saint-Pétersbourg'], answer: 0 },
    { id: 'daniel', type: 'mcq', prompt: 'De qui Daniel, premier prince de Moscou, est-il le fils ?', options: ['Alexandre Nevski', 'Gengis Khan', 'Vladimir le Grand', 'Ivan le Terrible'], answer: 0 },
    { id: 'kalita', type: 'mcq', prompt: 'Que signifie « Kalita », le surnom d’Ivan Ier ?', options: ['La Bourse', 'Le Terrible', 'Le Grand', 'Le Fier'], answer: 0 },
    { id: 'tribut', type: 'tf', prompt: 'Les premiers princes de Moscou collectent le tribut pour la Horde d’or.', answer: true },
    { id: 'eglise', type: 'mcq', prompt: 'Qui s’installe à Moscou vers 1325 ?', options: ['Le chef de l’Église russe', 'Le khan de la Horde', 'Le pape', 'L’empereur byzantin'], answer: 0 },
    { id: 'koulikovo', type: 'mcq', prompt: 'Quelle victoire Dmitri Donskoï remporte-t-il en 1380 ?', options: ['Koulikovo', 'Poltava', 'Borodino', 'Hastings'], answer: 0 },
    { id: 'donskoi', type: 'mcq', prompt: 'Que signifie le surnom « Donskoï » ?', options: ['Du Don', 'Le Courageux', 'Le Saint', 'Le Riche'], answer: 0 },
    { id: 'ivan-iii', type: 'mcq', prompt: 'Quel grand-prince met fin à la domination de la Horde d’or ?', options: ['Ivan III', 'Ivan Ier', 'Vassili II', 'Pierre le Grand'], answer: 0 },
    { id: 'novgorod', type: 'mcq', prompt: 'Quelle république marchande Ivan III annexe-t-il en 1478 ?', options: ['Novgorod', 'Venise', 'Gênes', 'Kiev'], answer: 0 },
    { id: 'sophie', type: 'mcq', prompt: 'Ivan III épouse la nièce de quel souverain ?', options: ['Le dernier empereur byzantin', 'Le sultan ottoman', 'Le roi de France', 'Le khan de Crimée'], answer: 0 },
    { id: 'aigle', type: 'mcq', prompt: 'Quel emblème byzantin la Russie adopte-t-elle ?', options: ['L’aigle à deux têtes', 'Le lion', 'La fleur de lys', 'Le croissant'], answer: 0 },
    { id: 'kremlin', type: 'mcq', prompt: 'D’où viennent les architectes qui reconstruisent le Kremlin ?', options: ['D’Italie', 'De Chine', 'D’Égypte', 'D’Angleterre'], answer: 0 },
    { id: 'rome', type: 'mcq', prompt: 'Comment des moines russes surnomment-ils Moscou après 1453 ?', options: ['La troisième Rome', 'La nouvelle Athènes', 'La Jérusalem du Nord', 'La cité interdite'], answer: 0 },
    { id: 'tsar', type: 'mcq', prompt: 'De quel mot vient le titre de « tsar » ?', options: ['César', 'Khan', 'Pharaon', 'Shah'], answer: 0 },
    { id: 'roublev', type: 'mcq', prompt: 'Quel peintre réalise l’icône de la Trinité ?', options: ['Andreï Roublev', 'Léonard de Vinci', 'Rembrandt', 'Ilia Répine'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Daniel, prince de Moscou', 'Bataille de Koulikovo', 'Halte sur l’Ougra', 'Ivan IV couronné tsar'] },
  ],

  recap: [
    'Petite principauté vassale de la Horde d’or, Moscou grandit en collectant le tribut',
    'Le chef de l’Église russe s’installe à Moscou ; Koulikovo (1380)',
    'Ivan III annexe Novgorod et se libère de la Horde (1480)',
    'Moscou, « troisième Rome » ; Ivan IV tsar en 1547',
  ],
}

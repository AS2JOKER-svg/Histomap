/** Chapitre rédigé : Rus' de Kiev (862 – 1240). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'riourik',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Des Vikings chez les Slaves',
      body:
        "Selon la Chronique des temps passés, écrite au début du XIIe siècle, des Slaves appellent en 862 un chef varègue (scandinave), Riourik, pour régner à Novgorod. Vers 882, son successeur Oleg s'empare de Kiev, sur le Dniepr, et en fait sa capitale. Ces récits mêlent histoire et légende.",
      highlight: { value: '862', label: 'arrivée de Riourik, selon la tradition' },
    },
    {
      id: 'route',
      tier: 1,
      type: 'text',
      kicker: 'Expansion',
      title: 'La route des Varègues aux Grecs',
      body:
        "Par les fleuves, les lacs et des portages (on tire les bateaux à terre), une grande route relie la mer Baltique à la mer Noire et à Constantinople. Les princes de Kiev y vendent fourrures, cire, miel et esclaves, contre de la soie, du vin et de l'argent.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'La Rus’ sur la carte',
      years: [900, 1000, 1200],
      caption: "Comparez : un immense territoire de forêts et de fleuves, de la Baltique jusqu'aux steppes du sud, qui se morcelle en principautés.",
    },
    {
      id: 'olga',
      tier: 1,
      type: 'person',
      nom: 'Olga de Kiev',
      role: 'Princesse régente',
      dates: 'morte en 969',
      description: "Après l'assassinat de son mari Igor par la tribu des Drevliens (945), elle gouverne au nom de son jeune fils Sviatoslav. Selon la Chronique, elle se venge cruellement. Baptisée à Constantinople, elle est la première souveraine chrétienne de la Rus' ; l'Église orthodoxe en a fait une sainte.",
    },
    {
      id: 'bapteme',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: '988 : le baptême de la Rus’',
      body:
        "Le prince Vladimir, petit-fils d'Olga, abandonne les dieux slaves comme Peroun, dieu du tonnerre. Selon la Chronique, il compare les religions et rejette l'islam parce qu'il interdit l'alcool. Il choisit le christianisme de Byzance, épouse la sœur de l'empereur et fait baptiser les habitants de Kiev dans le Dniepr.",
      highlight: { value: '988', label: 'conversion de Vladimir au christianisme byzantin' },
    },
    {
      id: 'vladimir',
      tier: 1,
      type: 'person',
      nom: 'Vladimir Ier',
      role: 'Grand-prince de Kiev',
      dates: 'règne 980 – 1015',
      description: "Il prend le pouvoir après une guerre contre ses frères, agrandit la Rus' et la défend contre les nomades des steppes. En choisissant le christianisme byzantin, il lie durablement son pays à Constantinople. Il est vénéré comme saint.",
    },
    {
      id: 'iaroslav',
      tier: 1,
      type: 'text',
      kicker: "Âge d'or",
      title: 'Iaroslav le Sage',
      body:
        "Sous Iaroslav le Sage (1019-1054), Kiev est l'une des plus grandes villes d'Europe. Il fait bâtir la cathédrale Sainte-Sophie, ornée de mosaïques byzantines, et ouvre des écoles. On lui attribue le premier recueil de lois écrit de la Rus', la Rousskaïa Pravda.",
    },
    {
      id: 'anne',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Monde',
      value: '1051',
      label: 'Anne de Kiev épouse le roi de France Henri Ier',
      caption: "Iaroslav marie ses filles à des rois d'Europe : Anne devient reine de France et mère de Philippe Ier ; sa sœur Élisabeth épouse le roi de Norvège Harald Hardrada.",
    },
    {
      id: 'mongols',
      tier: 1,
      type: 'war',
      nom: 'Prise de Kiev par les Mongols',
      annee: 1240,
      adversaires: ['Armée mongole de Batu, petit-fils de Gengis Khan'],
      allies: ['Défenseurs de Kiev'],
      vainqueur: 'Les Mongols',
      consequences: "En décembre 1240, Kiev est prise et dévastée. Les principautés russes doivent payer un tribut aux khans de la Horde d'Or pendant plus de deux siècles : c'est le « joug tatar ».",
    },

    // ── Niveau 2 ──
    {
      id: 'cyrillique',
      tier: 2,
      type: 'text',
      kicker: 'Connaissance',
      title: 'L’alphabet cyrillique',
      body:
        "Avec le christianisme arrivent des livres écrits en vieux slave, dans l'alphabet cyrillique. Il a été créé à la fin du IXe siècle en Bulgarie par les disciples des moines byzantins Cyrille et Méthode. C'est l'ancêtre des alphabets russe et ukrainien actuels.",
    },
    {
      id: 'novgorod',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Novgorod, ville de marchands',
      body:
        "Au nord, Novgorod commerce avec la Baltique. Une assemblée des habitants, la vetche, y a un grand pouvoir. Les archéologues y ont retrouvé plus d'un millier de lettres écrites sur de l'écorce de bouleau : comptes, messages, et même les exercices d'un petit garçon.",
    },
    {
      id: 'morcellement',
      tier: 2,
      type: 'text',
      kicker: 'Fluctuations',
      title: 'Des princes rivaux',
      body:
        "Le pouvoir est partagé entre les fils et les neveux du grand-prince, chacun recevant une ville. Les guerres entre princes se multiplient. Au XIIe siècle, Kiev perd sa primauté : en 1169, le prince Andreï Bogolioubski, maître du nord-est, fait piller la ville.",
    },
    {
      id: 'kalka',
      tier: 2,
      type: 'war',
      nom: 'Bataille de la Kalka',
      annee: 1223,
      adversaires: ['Avant-garde mongole de Djebé et Subötaï'],
      allies: ['Princes de la Rus’', 'Coumans (Polovtsiens), nomades des steppes'],
      vainqueur: 'Les Mongols',
      consequences: "Premier contact des Russes avec les Mongols : les princes, désunis, sont écrasés près de la mer d'Azov. Les Mongols repartent, puis reviennent en force en 1237.",
    },
    {
      id: 'heritage',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Une origine commune',
      body:
        "Russes, Ukrainiens et Biélorusses voient tous dans la Rus' de Kiev une origine de leur histoire. Après 1240, le centre du pouvoir russe se déplace vers le nord-est, autour d'une petite ville mentionnée pour la première fois en 1147 : Moscou.",
    },
  ],

  quiz: [
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale de la Rus’ à partir de la fin du IXe siècle ?', options: ['Kiev', 'Moscou', 'Novgorod', 'Constantinople'], answer: 0 },
    { id: 'vareges', type: 'mcq', prompt: 'Qui sont les Varègues ?', options: ['Des Scandinaves', 'Des Mongols', 'Des Byzantins', 'Des Hongrois'], answer: 0 },
    { id: 'riourik', type: 'mcq', prompt: 'Selon la tradition, quel chef varègue vient régner à Novgorod en 862 ?', options: ['Riourik', 'Rollon', 'Vladimir', 'Leif Erikson'], answer: 0 },
    { id: 'chronique', type: 'tf', prompt: 'Le récit de l’arrivée de Riourik vient d’une chronique écrite plus de deux siècles plus tard.', answer: true, explanation: 'La Chronique des temps passés date du début du XIIe siècle.' },
    { id: 'dniepr', type: 'mcq', prompt: 'Sur quel fleuve se trouve Kiev ?', options: ['Le Dniepr', 'La Volga', 'Le Danube', 'Le Rhin'], answer: 0 },
    { id: 'route', type: 'mcq', prompt: 'La « route des Varègues aux Grecs » relie la Baltique à quelle grande ville ?', options: ['Constantinople', 'Rome', 'Bagdad', 'Venise'], answer: 0 },
    { id: 'olga', type: 'mcq', prompt: 'Quelle régente est la première souveraine chrétienne de la Rus’ ?', options: ['Olga', 'Anne', 'Théodora', 'Éléonore'], answer: 0 },
    { id: 'vladimir', type: 'mcq', prompt: 'Quel prince fait baptiser les habitants de Kiev en 988 ?', options: ['Vladimir', 'Iaroslav', 'Oleg', 'Sviatoslav'], answer: 0 },
    { id: 'religion', type: 'mcq', prompt: 'Quelle religion Vladimir choisit-il ?', options: ['Le christianisme byzantin', 'L’islam', 'Le judaïsme', 'Le paganisme nordique'], answer: 0 },
    { id: 'alcool', type: 'tf', prompt: 'Selon la Chronique, Vladimir rejette l’islam notamment parce qu’il interdit l’alcool.', answer: true },
    { id: 'peroun', type: 'mcq', prompt: 'Quel dieu slave du tonnerre est abandonné après la conversion ?', options: ['Peroun', 'Thor', 'Zeus', 'Odin'], answer: 0 },
    { id: 'iaroslav', type: 'mcq', prompt: 'Quel est le surnom de Iaroslav, grand-prince de 1019 à 1054 ?', options: ['Le Sage', 'Le Terrible', 'Le Hardi', 'Le Pieux'], answer: 0 },
    { id: 'pravda', type: 'mcq', prompt: 'Comment s’appelle le premier recueil de lois de la Rus’ ?', options: ['La Rousskaïa Pravda', 'La Magna Carta', 'Le Code Justinien', 'La Bulle d’or'], answer: 0 },
    { id: 'anne', type: 'mcq', prompt: 'Anne de Kiev, fille de Iaroslav, devient reine de quel pays ?', options: ['La France', 'L’Angleterre', 'La Norvège', 'La Hongrie'], answer: 0 },
    { id: 'cyrillique', type: 'mcq', prompt: 'Quel alphabet se diffuse dans la Rus’ avec le christianisme ?', options: ['Le cyrillique', 'Les runes', 'L’alphabet arabe', 'L’alphabet latin'], answer: 0 },
    { id: 'kalka', type: 'mcq', prompt: 'Contre qui les princes russes perdent-ils la bataille de la Kalka en 1223 ?', options: ['Les Mongols', 'Les Byzantins', 'Les Polonais', 'Les Suédois'], answer: 0 },
    { id: 'kiev-1240', type: 'tf', prompt: 'En 1240, Kiev est détruite par les Vikings.', answer: false, explanation: 'Elle est prise par les Mongols de Batu, petit-fils de Gengis Khan.' },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Arrivée de Riourik à Novgorod', 'Baptême de Vladimir', 'Mariage d’Anne de Kiev avec Henri Ier', 'Prise de Kiev par les Mongols'] },
  ],

  recap: [
    '862 : selon la tradition, le Varègue Riourik s’installe à Novgorod',
    'Kiev s’enrichit sur la route des Varègues aux Grecs',
    '988 : Vladimir adopte le christianisme byzantin',
    '1240 : les Mongols prennent Kiev',
  ],
}

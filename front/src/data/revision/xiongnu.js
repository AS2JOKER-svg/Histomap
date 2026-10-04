/** Chapitre rédigé : Xiongnu (209 av. J.-C. – 48 apr. J.-C.). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'confederation',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Un empire des steppes',
      body:
        "Les Xiongnu sont des nomades éleveurs de chevaux et de moutons vivant au nord de la Chine, dans l'actuelle Mongolie. À la fin du IIIe siècle av. J.-C., ils forment la première grande confédération des steppes : plusieurs peuples obéissent à un même chef, le chanyu.",
      highlight: { value: '209 av. J.-C.', label: 'Modu devient chanyu' },
    },
    {
      id: 'modu',
      tier: 1,
      type: 'person',
      nom: 'Modu (Maodun)',
      role: 'Chanyu fondateur',
      dates: 'règne 209 – 174 av. J.-C.',
      description: "Selon l'historien chinois Sima Qian, il entraîne ses cavaliers à tirer sur toute cible visée par sa flèche sifflante, puis s'en sert pour faire tuer son propre père. Il soumet ensuite les peuples voisins, comme les Donghu, et chasse les Yuezhi vers l'ouest.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: "L'empire xiongnu",
      years: [-200, -100, -1],
      caption: "Comparez : immense vers 200 av. J.-C., la puissance des Xiongnu recule face aux campagnes de la dynastie Han.",
    },
    {
      id: 'baideng',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Baideng',
      annee: -200,
      adversaires: ['Dynastie Han (empereur Gaozu)'],
      allies: ['Cavaliers xiongnu de Modu'],
      vainqueur: 'Xiongnu',
      consequences: "Le fondateur de la dynastie Han est encerclé pendant sept jours par une immense armée de cavaliers, en plein hiver. Il parvient à s'échapper, mais la Chine doit ensuite négocier avec les Xiongnu.",
    },
    {
      id: 'heqin',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'La « paix par le mariage »',
      body:
        "Après Baideng, les Han signent avec les Xiongnu des traités appelés heqin : la Chine envoie au chanyu une princesse en mariage et, chaque année, de la soie, du vin et des céréales. En échange, les nomades doivent cesser leurs raids. Ces traités sont souvent rompus.",
    },
    {
      id: 'vie',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'La vie dans la steppe',
      body:
        "Les Xiongnu vivent sous des tentes de feutre et se déplacent avec leurs troupeaux selon les saisons. Les enfants apprennent très jeunes à monter à cheval et à tirer à l'arc. Ils n'écrivent pas : presque tout ce que nous savons vient des textes chinois, surtout de Sima Qian.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Fluctuations',
      title: 'Trois siècles face à la Chine',
      items: [
        { year: -209, label: 'Modu devient chanyu' },
        { year: -200, label: 'Victoire de Baideng sur les Han' },
        { year: -133, label: "L'empereur Wudi rompt la paix" },
        { year: -119, label: 'Grande défaite xiongnu face aux généraux Han' },
        { year: -51, label: 'Le chanyu Huhanye se soumet aux Han' },
        { year: 48, label: 'Division en Xiongnu du Nord et du Sud' },
      ],
    },
    {
      id: 'tombes',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Les tombes de Noin-Ula',
      body:
        "En Mongolie, les tombes de nobles xiongnu de Noin-Ula, fouillées depuis 1924, ont livré des tapis de feutre brodés, de la soie chinoise, des laques et même des tissus venus de l'ouest. Elles montrent que les Xiongnu étaient au cœur d'échanges entre la Chine et l'Asie centrale.",
    },
    {
      id: 'huns',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Les ancêtres des Huns ?',
      body:
        "Au IVe siècle apr. J.-C., d'autres nomades, les Huns, envahissent l'Europe. Certains historiens pensent qu'ils descendent en partie des Xiongnu, car leurs noms se ressemblent. La question reste débattue : les preuves archéologiques sont minces.",
    },

    // ── Niveau 2 ──
    {
      id: 'zhaojun',
      tier: 2,
      type: 'person',
      nom: 'Wang Zhaojun',
      role: 'Dame de la cour Han, épouse du chanyu',
      dates: 'Ier siècle av. J.-C.',
      description: "En 33 av. J.-C., cette dame du palais impérial est donnée en mariage au chanyu Huhanye pour sceller la paix. Elle est devenue l'une des « quatre beautés » de la tradition chinoise et un symbole de l'amitié entre les peuples.",
    },
    {
      id: 'lettre',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Une lettre insolente',
      body:
        "Vers 192 av. J.-C., selon les chroniques chinoises, Modu écrit à l'impératrice douairière Lü, qui gouverne la Chine, pour lui proposer de l'épouser. Furieuse, elle envisage la guerre, mais ses conseillers la persuadent de répondre poliment : les Xiongnu sont trop puissants.",
    },
    {
      id: 'assemblees',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Le chanyu, fils du Ciel',
      body:
        "Le chanyu se présente comme envoyé par le Ciel, appelé Tengri. Chaque année, de grandes assemblées réunissent les chefs pour des sacrifices aux ancêtres, au Ciel et à la Terre. À l'automne, on compte les hommes et le bétail.",
    },
    {
      id: 'ikh-bayan',
      tier: 2,
      type: 'text',
      kicker: 'Fin',
      title: 'Une inscription retrouvée en 2017',
      body:
        "En 89 apr. J.-C., le général chinois Dou Xian écrase les Xiongnu du Nord et fait graver sa victoire sur une falaise de Mongolie. Cette inscription, connue par les textes, a été retrouvée en 2017. Les Xiongnu du Nord disparaissent ensuite, remplacés par les Xianbei.",
      highlight: { value: '89 apr. J.-C.', label: 'défaite décisive des Xiongnu du Nord' },
    },
    {
      id: 'sud',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Les Xiongnu du Sud',
      body:
        "Les Xiongnu du Sud s'installent à l'intérieur des frontières chinoises comme alliés des Han. Au début du IVe siècle, l'un de leurs chefs fonde un royaume dans le nord de la Chine, dont l'armée prend la capitale Luoyang en 311.",
    },
  ],

  quiz: [
    { id: 'mode-vie', type: 'mcq', prompt: 'Quel est le mode de vie des Xiongnu ?', options: ['Nomades éleveurs', 'Riziculteurs sédentaires', 'Marins pêcheurs', 'Bâtisseurs de pyramides'], answer: 0 },
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve le cœur du territoire xiongnu ?', options: ['La Mongolie', 'Le Japon', 'L’Inde', 'Le Vietnam'], answer: 0 },
    { id: 'titre', type: 'mcq', prompt: 'Quel titre porte le chef suprême des Xiongnu ?', options: ['Chanyu', 'Khagan', 'Pharaon', 'Shogun'], answer: 0 },
    { id: 'modu', type: 'mcq', prompt: 'Qui unifie les Xiongnu en 209 av. J.-C. ?', options: ['Modu', 'Gengis Khan', 'Attila', 'Huhanye'], answer: 0 },
    { id: 'fleche', type: 'mcq', prompt: 'Quel type de flèche Modu utilise-t-il pour donner ses ordres ?', options: ['Une flèche sifflante', 'Une flèche enflammée', 'Une flèche empoisonnée', 'Une flèche en or'], answer: 0 },
    { id: 'baideng', type: 'mcq', prompt: 'Quel empereur Han est encerclé à Baideng en 200 av. J.-C. ?', options: ['Gaozu (Liu Bang)', 'Wudi', 'Qin Shi Huang', 'Guangwu'], answer: 0 },
    { id: 'heqin', type: 'mcq', prompt: 'Que prévoient les traités heqin ?', options: ['Une princesse et des cadeaux contre la paix', 'La conquête de la Mongolie par la Chine', 'Le partage de la Route de la soie avec Rome', 'La construction commune d’une muraille'], answer: 0 },
    { id: 'heqin-respect', type: 'tf', prompt: 'Les traités heqin mettent fin pour toujours aux raids xiongnu.', answer: false, explanation: 'Ils sont souvent rompus et les raids reprennent.' },
    { id: 'source', type: 'mcq', prompt: 'Quel historien chinois est notre principale source sur les Xiongnu ?', options: ['Sima Qian', 'Confucius', 'Zhang Qian', 'Sun Tzu'], answer: 0 },
    { id: 'wudi', type: 'mcq', prompt: 'Quel empereur Han lance de grandes offensives contre les Xiongnu ?', options: ['Wudi', 'Gaozu', 'Qin Shi Huang', 'Wang Mang'], answer: 0 },
    { id: 'huhanye', type: 'mcq', prompt: 'Quel chanyu se soumet aux Han en 51 av. J.-C. ?', options: ['Huhanye', 'Modu', 'Touman', 'Zhizhi'], answer: 0 },
    { id: 'zhaojun', type: 'mcq', prompt: 'Quelle dame de la cour Han épouse le chanyu Huhanye ?', options: ['Wang Zhaojun', 'Wu Zetian', 'Cixi', 'Ban Zhao'], answer: 0 },
    { id: 'division', type: 'tf', prompt: 'Au Ier siècle apr. J.-C., les Xiongnu se divisent en deux groupes, au Nord et au Sud.', answer: true },
    { id: 'noin-ula', type: 'mcq', prompt: 'Qu’a-t-on retrouvé dans les tombes xiongnu de Noin-Ula ?', options: ['De la soie chinoise et des tapis de feutre', 'Des statues de marbre grec', 'Des tablettes cunéiformes', 'Des momies égyptiennes'], answer: 0 },
    { id: 'inscription', type: 'mcq', prompt: 'En quelle année a-t-on retrouvé l’inscription de la victoire de Dou Xian ?', options: ['2017', '1924', '1949', '1789'], answer: 0 },
    { id: 'huns', type: 'tf', prompt: 'Il est prouvé de façon certaine que les Huns d’Attila descendent des Xiongnu.', answer: false, explanation: 'C’est une hypothèse encore débattue par les historiens.' },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Modu devient chanyu', 'Bataille de Baideng', 'Soumission de Huhanye aux Han', 'Division entre Nord et Sud'] },
  ],

  recap: [
    '209 av. J.-C. : Modu unifie les nomades sous le titre de chanyu',
    'Baideng (200 av. J.-C.) : la Chine Han doit acheter la paix',
    'Les offensives de Wudi affaiblissent la confédération',
    '48 apr. J.-C. : division en Xiongnu du Nord et du Sud',
  ],
}

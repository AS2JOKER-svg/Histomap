/** Chapitre rédigé : Chine des Six Dynasties (220 – 589). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'han',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'La fin des Han',
      body:
        "En 220, la dynastie Han disparaît. La Chine se partage entre Trois Royaumes, Wei, Shu et Wu, qui se font la guerre. C'est le début de près de quatre siècles de division.",
      highlight: { value: '220', label: 'fin de la dynastie Han' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Une Chine divisée',
      years: [300, 500],
      caption: 'Comparez : vers 300, les Jin ont brièvement réunifié la Chine ; vers 500, elle est coupée entre le Nord et le Sud.',
    },
    {
      id: 'jin',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Une réunification fragile',
      body:
        "Les Jin réunifient la Chine en 280, mais leur empire se déchire dans des guerres entre princes. En 311, des troupes xiongnu prennent Luoyang : la cour se réfugie au sud, à Jiankang (Nankin).",
    },
    {
      id: 'nordsud',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Le Nord et le Sud',
      body:
        "Pendant près de trois siècles, le nord est gouverné par des dynasties fondées par des peuples des steppes, comme les Wei du Nord, et le sud par des dynasties chinoises installées à Jiankang.",
    },
    {
      id: 'fei',
      tier: 1,
      type: 'war',
      nom: 'Bataille de la rivière Fei',
      annee: 383,
      adversaires: ['Qin antérieurs (Fu Jian)'],
      allies: ['Jin de l’Est'],
      vainqueur: 'Jin de l’Est',
      consequences:
        "Une armée du Sud, bien moins nombreuse, met en déroute celle du Nord, qui voulait conquérir toute la Chine. La division entre Nord et Sud se prolonge pendant deux siècles.",
    },
    {
      id: 'bouddhisme',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'L’essor du bouddhisme',
      body:
        "Venu de l'Inde par les routes de la soie, le bouddhisme se répand dans toute la Chine. On creuse dans les falaises des grottes ornées de milliers de statues, comme à Longmen, et des moines partent en Inde chercher des textes.",
    },
    {
      id: 'zu',
      tier: 1,
      type: 'person',
      nom: 'Zu Chongzhi',
      role: 'Mathématicien et astronome',
      dates: '429 – 500',
      description:
        "Il calcule que π est compris entre 3,1415926 et 3,1415927. Personne ne fera mieux pendant près de mille ans.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les Six Dynasties en dates',
      items: [
        { year: 220, label: 'Fin des Han' },
        { year: 280, label: 'Réunification par les Jin' },
        { year: 311, label: 'Sac de Luoyang' },
        { year: 383, label: 'Bataille de la rivière Fei' },
        { year: 589, label: 'Réunification par les Sui' },
      ],
    },
    {
      id: 'sui',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'La réunification',
      body:
        "En 589, les armées de la dynastie Sui, venue du Nord, prennent Jiankang. La Chine est réunifiée ; les Tang lui succèdent en 618.",
    },

    // ── Niveau 2 ──
    {
      id: 'wang',
      tier: 2,
      type: 'person',
      nom: 'Wang Xizhi',
      role: 'Calligraphe',
      dates: '303 – 361',
      description: "Considéré en Chine comme le plus grand calligraphe de tous les temps. Son œuvre la plus célèbre, la « Préface du pavillon des Orchidées », n'est connue que par des copies.",
    },
    {
      id: 'xiaowen',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'L’empereur Xiaowen',
      body:
        "À la fin du Ve siècle, cet empereur des Wei du Nord, issu d'un peuple des steppes, installe sa capitale à Luoyang et impose à sa cour la langue, les vêtements et les noms chinois.",
    },
    {
      id: 'etriers',
      tier: 2,
      type: 'text',
      kicker: 'Techniques',
      title: 'Les étriers',
      body:
        "Des statuettes de tombes chinoises du début du IVe siècle montrent parmi les plus anciens étriers connus. Ils permettent au cavalier de mieux tenir en selle.",
    },
    {
      id: 'mulan',
      tier: 2,
      type: 'text',
      kicker: 'Littérature',
      title: 'La ballade de Mulan',
      body:
        "Ce poème raconte une jeune fille qui part à la guerre déguisée en homme, à la place de son père. Il a probablement été composé à cette époque dans le nord de la Chine.",
    },
    {
      id: 'roman',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Le Roman des Trois Royaumes',
      body:
        "Au XIVe siècle, les guerres des Trois Royaumes inspirent l'un des plus célèbres romans chinois, toujours adapté en séries, films et jeux vidéo.",
    },
  ],

  quiz: [
    { id: 'han', type: 'mcq', prompt: 'Quelle dynastie disparaît en 220, ouvrant cette période ?', options: ['Les Han', 'Les Tang', 'Les Qin', 'Les Ming'], answer: 0 },
    { id: 'trois', type: 'mcq', prompt: 'Quels sont les Trois Royaumes de Chine ?', options: ['Wei, Shu et Wu', 'Koguryo, Paekche et Silla', 'Qin, Han et Tang', 'Song, Yuan et Ming'], answer: 0 },
    { id: 'jin', type: 'mcq', prompt: 'Quelle dynastie réunifie brièvement la Chine en 280 ?', options: ['Les Jin', 'Les Sui', 'Les Wei du Nord', 'Les Liang'], answer: 0 },
    { id: 'luoyang', type: 'mcq', prompt: 'Que se passe-t-il à Luoyang en 311 ?', options: ['Des troupes xiongnu prennent la ville', 'Un tremblement de terre', 'L’empereur s’y fait couronner', 'Une université y est fondée'], answer: 0 },
    { id: 'jiankang', type: 'mcq', prompt: 'Où se réfugie la cour des Jin après 311 ?', options: ['À Jiankang (Nankin)', 'À Pékin', 'À Chang’an', 'À Canton'], answer: 0 },
    { id: 'nord', type: 'tf', prompt: 'Le nord de la Chine est longtemps gouverné par des dynasties fondées par des peuples des steppes.', answer: true },
    { id: 'fei', type: 'mcq', prompt: 'Quelle bataille de 383 empêche le Nord de conquérir le Sud ?', options: ['La rivière Fei', 'Les Falaises rouges', 'Talas', 'Panipat'], answer: 0 },
    { id: 'religion', type: 'mcq', prompt: 'Quelle religion venue de l’Inde se répand alors en Chine ?', options: ['Le bouddhisme', 'L’islam', 'Le christianisme', 'L’hindouisme'], answer: 0 },
    { id: 'longmen', type: 'mcq', prompt: 'Que trouve-t-on dans les grottes de Longmen ?', options: ['Des milliers de statues bouddhistes', 'Des tombeaux d’empereurs', 'Des mines de jade', 'Des peintures préhistoriques'], answer: 0 },
    { id: 'pi', type: 'mcq', prompt: 'Quel nombre Zu Chongzhi calcule-t-il avec une grande précision ?', options: ['π', 'Le nombre d’or', 'La vitesse de la lumière', 'L’âge de la Terre'], answer: 0 },
    { id: 'wang', type: 'mcq', prompt: 'Pour quel art Wang Xizhi est-il célèbre ?', options: ['La calligraphie', 'La sculpture', 'La musique', 'La céramique'], answer: 0 },
    { id: 'xiaowen', type: 'mcq', prompt: 'Qu’impose l’empereur Xiaowen des Wei du Nord à sa cour ?', options: ['La langue et les vêtements chinois', 'Le bouddhisme tibétain', 'La langue mongole', 'Le christianisme'], answer: 0 },
    { id: 'mulan', type: 'mcq', prompt: 'Quelle héroïne apparaît dans une ballade de cette époque ?', options: ['Mulan', 'Himiko', 'Seondeok', 'Cléopâtre'], answer: 0 },
    { id: 'sui', type: 'mcq', prompt: 'Quelle dynastie réunifie la Chine en 589 ?', options: ['Les Sui', 'Les Tang', 'Les Jin', 'Les Han'], answer: 0 },
    { id: 'etriers', type: 'tf', prompt: 'Des statuettes chinoises de cette époque montrent parmi les plus anciens étriers connus.', answer: true },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Fin des Han', 'Réunification par les Jin', 'Bataille de la rivière Fei', 'Réunification par les Sui'] },
  ],

  recap: [
    '220 : fin des Han ; les Trois Royaumes, Wei, Shu et Wu, se font la guerre',
    'Après une brève réunification par les Jin, la Chine est coupée entre Nord et Sud',
    'Essor du bouddhisme, calligraphie de Wang Xizhi, π de Zu Chongzhi',
    '589 : les Sui réunifient la Chine',
  ],
}

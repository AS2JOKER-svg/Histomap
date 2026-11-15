/** Chapitre rédigé : Peuples germaniques (vers −500 – 476). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'origines',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Les peuples du Nord',
      body:
        "Vers −500, des peuples parlant des langues germaniques vivent dans le nord de l'Allemagne et au Danemark. Ils ne forment pas un État, mais des dizaines de peuples souvent rivaux : Cimbres, Goths, Francs, Saxons…",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Les Germains',
      years: [-400, 400],
      caption: 'Comparez : vers 400, les peuples germaniques sont aux portes de l’Empire romain, et certains déjà à l’intérieur.',
    },
    {
      id: 'cimbres',
      tier: 1,
      type: 'war',
      nom: 'Bataille d’Arausio',
      annee: -105,
      adversaires: ['République romaine'],
      allies: ['Cimbres et Teutons'],
      vainqueur: 'Cimbres et Teutons',
      consequences:
        "Près d'Orange, les Cimbres et les Teutons écrasent une armée romaine : c'est l'une des pires défaites de Rome. Le général Marius les bat ensuite en −102 et −101.",
    },
    {
      id: 'teutobourg',
      tier: 1,
      type: 'text',
      kicker: 'Guerres',
      title: 'Le désastre de Teutobourg',
      body:
        "En l'an 9, le chef Arminius attire trois légions romaines dans un piège, au milieu des forêts et des marais. Elles sont anéanties. Rome renonce à conquérir la Germanie : le Rhin reste sa frontière.",
      highlight: { value: 'an 9', label: 'bataille de Teutobourg' },
    },
    {
      id: 'frontiere',
      tier: 1,
      type: 'text',
      kicker: 'Échanges',
      title: 'De part et d’autre du Rhin',
      body:
        "Pendant des siècles, Germains et Romains commercent, s'affrontent et se mélangent. Beaucoup de Germains servent dans l'armée romaine, parfois jusqu'aux plus hauts grades.",
    },
    {
      id: 'migrations',
      tier: 1,
      type: 'text',
      kicker: 'Migrations',
      title: 'Les grandes migrations',
      body:
        "À partir de 376, poussés par les Huns ou attirés par les richesses de l'Empire, Goths, Vandales, Francs et autres entrent dans les provinces romaines. En 378, les Goths tuent l'empereur Valens à Andrinople.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les Germains en dates',
      items: [
        { year: -105, label: 'Bataille d’Arausio' },
        { year: 9, label: 'Bataille de Teutobourg' },
        { year: 378, label: 'Bataille d’Andrinople' },
        { year: 410, label: 'Sac de Rome par Alaric' },
        { year: 476, label: 'Fin de l’Empire d’Occident' },
      ],
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: '476 : la fin de l’Empire d’Occident',
      body:
        "En 410, les Wisigoths d'Alaric pillent Rome. En 476, le chef germanique Odoacre dépose le dernier empereur d'Occident, Romulus Augustule. Des royaumes germaniques remplacent l'Empire.",
    },
    {
      id: 'langues',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Des langues vivantes',
      body:
        "L'anglais, l'allemand, le néerlandais et les langues scandinaves sont des langues germaniques. Le français leur a aussi emprunté des centaines de mots, comme « guerre », « jardin » ou « bleu ».",
    },

    // ── Niveau 2 ──
    {
      id: 'arminius',
      tier: 2,
      type: 'person',
      nom: 'Arminius',
      role: 'Chef chérusque',
      dates: 'vers −18 – 21',
      description: "Formé dans l'armée romaine, il se retourne contre Rome et anéantit les légions de Varus à Teutobourg. Il est tué plus tard par des membres de son propre peuple.",
    },
    {
      id: 'dieux',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Wotan et Donar',
      body:
        "Les Germains honorent Wotan, dieu de la sagesse et de la guerre, et Donar, dieu du tonnerre, dans des bois sacrés. En anglais, Wednesday et Thursday leur rendent encore hommage.",
    },
    {
      id: 'runes',
      tier: 2,
      type: 'text',
      kicker: 'Écriture',
      title: 'Les runes',
      body:
        "À partir du IIe siècle environ, les Germains gravent des inscriptions en runes, un alphabet aux traits droits, facile à tailler dans le bois ou la pierre.",
    },
    {
      id: 'wulfila',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'La Bible des Goths',
      body:
        "Au IVe siècle, l'évêque Wulfila invente un alphabet pour traduire la Bible en gotique. Les Goths deviennent chrétiens, mais ariens, c'est-à-dire différents des catholiques de Rome.",
    },
    {
      id: 'vandales',
      tier: 2,
      type: 'text',
      kicker: 'Mots',
      title: 'Le mot « vandalisme »',
      body:
        "En 455, les Vandales pillent Rome. Le mot « vandalisme » a été inventé bien plus tard, en 1794, en souvenir de ce pillage.",
    },
  ],

  quiz: [
    { id: 'region', type: 'mcq', prompt: 'D’où viennent les premiers peuples germaniques ?', options: ['Du nord de l’Allemagne et du Danemark', 'D’Égypte', 'D’Espagne', 'De Grèce'], answer: 0 },
    { id: 'etat', type: 'tf', prompt: 'Les Germains forment un seul État uni.', answer: false, explanation: 'Ils forment des dizaines de peuples souvent rivaux.' },
    { id: 'arausio', type: 'mcq', prompt: 'Quels peuples écrasent une armée romaine à Arausio en −105 ?', options: ['Les Cimbres et les Teutons', 'Les Huns', 'Les Gaulois de Vercingétorix', 'Les Carthaginois'], answer: 0 },
    { id: 'teutobourg', type: 'mcq', prompt: 'Quel chef anéantit trois légions romaines à Teutobourg ?', options: ['Arminius', 'Alaric', 'Attila', 'Odoacre'], answer: 0 },
    { id: 'rhin', type: 'mcq', prompt: 'Quel fleuve reste la frontière de l’Empire après Teutobourg ?', options: ['Le Rhin', 'La Seine', 'Le Nil', 'Le Tibre'], answer: 0 },
    { id: 'armee', type: 'tf', prompt: 'Beaucoup de Germains servent dans l’armée romaine.', answer: true },
    { id: 'andrinople', type: 'mcq', prompt: 'Quel empereur romain est tué par les Goths à Andrinople en 378 ?', options: ['Valens', 'Auguste', 'Néron', 'Constantin'], answer: 0 },
    { id: 'huns', type: 'mcq', prompt: 'Quel peuple des steppes pousse les Goths vers l’Empire en 376 ?', options: ['Les Huns', 'Les Vikings', 'Les Arabes', 'Les Perses'], answer: 0 },
    { id: 'alaric', type: 'mcq', prompt: 'Qui pille Rome en 410 ?', options: ['Les Wisigoths d’Alaric', 'Les Huns d’Attila', 'Les Francs de Clovis', 'Les Vikings'], answer: 0 },
    { id: '476', type: 'mcq', prompt: 'Que se passe-t-il en 476 ?', options: ['Le dernier empereur d’Occident est déposé', 'Rome est fondée', 'Charlemagne est couronné', 'Constantinople tombe'], answer: 0 },
    { id: 'odoacre', type: 'mcq', prompt: 'Qui dépose Romulus Augustule ?', options: ['Odoacre', 'Clovis', 'Arminius', 'Théodoric'], answer: 0 },
    { id: 'dieux', type: 'mcq', prompt: 'Quel est le dieu germanique du tonnerre ?', options: ['Donar', 'Zeus', 'Ra', 'Mars'], answer: 0 },
    { id: 'runes', type: 'mcq', prompt: 'Comment s’appelle l’écriture des Germains ?', options: ['Les runes', 'Les hiéroglyphes', 'Le cunéiforme', 'Les idéogrammes'], answer: 0 },
    { id: 'langues', type: 'mcq', prompt: 'Laquelle de ces langues est germanique ?', options: ['L’anglais', 'L’italien', 'Le grec', 'Le basque'], answer: 0 },
    { id: 'vandalisme', type: 'tf', prompt: 'Le mot « vandalisme » vient du peuple des Vandales.', answer: true },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Bataille d’Arausio', 'Bataille de Teutobourg', 'Bataille d’Andrinople', 'Fin de l’Empire d’Occident'] },
  ],

  recap: [
    'Des dizaines de peuples germaniques, venus du nord de l’Europe',
    'Arausio (−105) puis Teutobourg (9) : le Rhin devient la frontière de Rome',
    'À partir de 376, les grandes migrations ; Andrinople (378), sac de Rome (410)',
    '476 : fin de l’Empire d’Occident ; un héritage dans les langues d’Europe',
  ],
}

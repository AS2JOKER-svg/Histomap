/** Chapitre rédigé : Royaume de Hongrie (1000 – 1526). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'magyars',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Les Magyars',
      body:
        "Vers 895, les Hongrois, ou Magyars, un peuple de cavaliers venu des steppes, s'installent dans la plaine du Danube. Leurs raids terrorisent l'Europe jusqu'à leur défaite au Lechfeld, en 955.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le royaume de Hongrie',
      years: [1100, 1500],
      caption: 'Comparez : le royaume occupe tout le bassin des Carpates, bien au-delà de la Hongrie actuelle.',
    },
    {
      id: 'etienne',
      tier: 1,
      type: 'person',
      nom: 'Étienne Ier',
      role: 'Premier roi de Hongrie',
      dates: 'règne 1000 – 1038',
      description:
        "Couronné en l'an 1000, il convertit son peuple au christianisme, fonde des évêchés et organise le royaume en comtés. Il devient saint ; sa fête, le 20 août, est la fête nationale hongroise.",
    },
    {
      id: 'bulle',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'La Bulle d’or de 1222',
      body:
        "En 1222, le roi André II accorde des droits aux nobles et limite son propre pouvoir. Cette « Bulle d'or » est souvent comparée à la Grande Charte anglaise de 1215.",
    },
    {
      id: 'mongols',
      tier: 1,
      type: 'war',
      nom: 'Invasion mongole de la Hongrie',
      annee: 1241,
      adversaires: ['Empire mongol (Batu, Subötaï)'],
      allies: ['Royaume de Hongrie (Béla IV)'],
      vainqueur: 'Mongols',
      consequences:
        "Après la bataille de Mohi, les Mongols ravagent le pays pendant un an. Le roi Béla IV le reconstruit et fait bâtir des dizaines de châteaux de pierre.",
    },
    {
      id: 'or',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'L’or des Carpates',
      body:
        "Les mines d'or et d'argent du royaume font de la Hongrie l'un des grands producteurs d'or d'Europe. Elle frappe un florin d'or réputé.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'La Hongrie en dates',
      items: [
        { year: 1000, label: 'Couronnement d’Étienne Ier' },
        { year: 1222, label: 'Bulle d’or' },
        { year: 1241, label: 'Invasion mongole' },
        { year: 1456, label: 'Siège de Belgrade' },
        { year: 1526, label: 'Bataille de Mohács' },
      ],
    },
    {
      id: 'matthias',
      tier: 1,
      type: 'text',
      kicker: 'Renaissance',
      title: 'Matthias Corvin',
      body:
        "Élu roi en 1458, Matthias Corvin crée une armée permanente, conquiert Vienne et fait de Buda un grand foyer de la Renaissance, avec l'une des plus belles bibliothèques d'Europe.",
    },
    {
      id: 'mohacs',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Mohács',
      annee: 1526,
      adversaires: ['Empire ottoman (Soliman le Magnifique)'],
      allies: ['Royaume de Hongrie (Louis II)'],
      vainqueur: 'Ottomans (Soliman)',
      consequences:
        "L'armée hongroise est écrasée et le roi Louis II meurt en fuyant. Le royaume est partagé entre les Ottomans, les Habsbourg et la Transylvanie.",
    },

    // ── Niveau 2 ──
    {
      id: 'belgrade',
      tier: 2,
      type: 'text',
      kicker: 'Guerres',
      title: 'La victoire de Belgrade',
      body:
        "En 1456, trois ans après la prise de Constantinople, Jean Hunyadi repousse l'armée ottomane devant Belgrade. Selon une tradition, les cloches sonnent à midi en souvenir de cette victoire.",
    },
    {
      id: 'couronne',
      tier: 2,
      type: 'text',
      kicker: 'Symboles',
      title: 'La Sainte Couronne',
      body:
        "La couronne dite de saint Étienne, symbole de l'État hongrois, est aujourd'hui exposée au Parlement de Budapest.",
    },
    {
      id: 'langue',
      tier: 2,
      type: 'text',
      kicker: 'Langue',
      title: 'Une langue à part',
      body:
        "Le hongrois appartient à la famille des langues ouraliennes, comme le finnois et l'estonien. Il est très différent des langues de ses voisins.",
    },
    {
      id: 'louis',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Louis le Grand',
      body:
        "Au XIVe siècle, le roi Louis Ier le Grand règne à la fois sur la Hongrie et, à partir de 1370, sur la Pologne. La Hongrie est alors l'une des grandes puissances d'Europe.",
    },
    {
      id: 'bouclier',
      tier: 2,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Le bouclier de la chrétienté',
      body:
        "Face à l'avance ottomane dans les Balkans, la Hongrie se présente comme le « bouclier de la chrétienté ».",
    },
  ],

  quiz: [
    { id: 'peuple', type: 'mcq', prompt: 'Comment appelle-t-on aussi les Hongrois ?', options: ['Les Magyars', 'Les Avars', 'Les Slaves', 'Les Goths'], answer: 0 },
    { id: 'origine', type: 'mcq', prompt: 'D’où viennent les Hongrois ?', options: ['Des steppes', 'D’Italie', 'De Scandinavie', 'D’Afrique du Nord'], answer: 0 },
    { id: 'lechfeld', type: 'mcq', prompt: 'Quelle défaite met fin aux raids hongrois en 955 ?', options: ['Le Lechfeld', 'Mohács', 'Mohi', 'Belgrade'], answer: 0 },
    { id: 'etienne', type: 'mcq', prompt: 'Qui est le premier roi de Hongrie ?', options: ['Étienne Ier', 'Matthias Corvin', 'Béla IV', 'Louis II'], answer: 0 },
    { id: 'an1000', type: 'mcq', prompt: 'Vers quelle année Étienne Ier est-il couronné ?', options: ['1000', '1526', '895', '1241'], answer: 0 },
    { id: 'religion', type: 'mcq', prompt: 'Quelle religion adopte la Hongrie ?', options: ['Le catholicisme', 'L’islam', 'L’orthodoxie', 'Le bouddhisme'], answer: 0 },
    { id: 'bulle', type: 'mcq', prompt: 'Comment s’appelle le texte de 1222 qui limite le pouvoir du roi ?', options: ['La Bulle d’or', 'La Grande Charte', 'L’édit de Nantes', 'Le Code civil'], answer: 0 },
    { id: 'mongols', type: 'mcq', prompt: 'Qui ravage la Hongrie en 1241 ?', options: ['Les Mongols', 'Les Ottomans', 'Les Vikings', 'Les Francs'], answer: 0 },
    { id: 'chateaux', type: 'tf', prompt: 'Après l’invasion mongole, Béla IV fait construire des châteaux de pierre.', answer: true },
    { id: 'or', type: 'mcq', prompt: 'Quelle richesse fait la puissance de la Hongrie médiévale ?', options: ['Ses mines d’or et d’argent', 'Son pétrole', 'Ses épices', 'Son coton'], answer: 0 },
    { id: 'hunyadi', type: 'mcq', prompt: 'Qui repousse les Ottomans devant Belgrade en 1456 ?', options: ['Jean Hunyadi', 'Matthias Corvin', 'Étienne Ier', 'Soliman'], answer: 0 },
    { id: 'matthias', type: 'mcq', prompt: 'Quel roi fait de Buda un foyer de la Renaissance ?', options: ['Matthias Corvin', 'André II', 'Coloman', 'Louis II'], answer: 0 },
    { id: 'mohacs', type: 'mcq', prompt: 'Quelle bataille de 1526 brise le royaume de Hongrie ?', options: ['Mohács', 'Lépante', 'Vienne', 'Kosovo'], answer: 0 },
    { id: 'soliman', type: 'mcq', prompt: 'Quel sultan ottoman remporte la bataille de Mohács ?', options: ['Soliman le Magnifique', 'Mehmed II', 'Murad Ier', 'Bayezid Ier'], answer: 0 },
    { id: 'langue', type: 'tf', prompt: 'Le hongrois est une langue proche du finnois.', answer: true },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Couronnement d’Étienne Ier', 'Bulle d’or', 'Invasion mongole', 'Bataille de Mohács'] },
  ],

  recap: [
    'Venus des steppes vers 895, les Hongrois fondent un royaume chrétien en l’an 1000',
    'Bulle d’or (1222) ; invasion mongole (1241) et reconstruction',
    'Une grande puissance riche en or ; Matthias Corvin et la Renaissance',
    '1526 : défaite de Mohács face aux Ottomans ; le royaume est partagé',
  ],
}

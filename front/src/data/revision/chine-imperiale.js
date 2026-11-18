/** Chapitre rédigé : Chine des Qin et des Han (221 av. J.-C. – 220). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'unification',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Le premier empereur',
      body:
        "En 221 av. J.-C., le roi de Qin met fin à plus de deux siècles de guerres entre royaumes rivaux (la période des Royaumes combattants). Il prend le titre de Qin Shi Huang, « premier empereur » : la Chine impériale est née, elle durera jusqu'en 1912.",
      highlight: { value: '221 av. J.-C.', label: 'unification par les Qin' },
    },
    {
      id: 'reformes',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Tout unifier',
      body:
        "Qin Shi Huang impose une seule écriture, une seule monnaie, les mêmes poids et mesures, et même la largeur des essieux des chars. Son régime est très dur : en 213 av. J.-C., il fait brûler de nombreux livres jugés dangereux.",
    },
    {
      id: 'armee',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Découverte',
      value: '≈ 8 000',
      label: 'soldats en terre cuite gardent son tombeau',
      caption: "Découverte par des paysans près de Xi'an en 1974, cette armée grandeur nature compte des fantassins, des archers, des chevaux et des chars ; chaque visage est différent.",
    },
    {
      id: 'muraille',
      tier: 1,
      type: 'text',
      kicker: 'Guerre',
      title: 'Une première Grande Muraille',
      body:
        "Pour arrêter les cavaliers nomades Xiongnu, l'empereur relie des murailles déjà existantes. Attention : la Grande Muraille que l'on visite aujourd'hui a surtout été construite bien plus tard, sous la dynastie Ming.",
    },
    {
      id: 'han',
      tier: 1,
      type: 'text',
      kicker: 'Durée',
      title: 'Quatre siècles de Han',
      body:
        "La dynastie Qin s'effondre peu après la mort de son fondateur. Liu Bang, un homme du peuple, fonde la dynastie Han (206 av. J.-C.), qui règne quatre siècles. Les Chinois s'appellent encore aujourd'hui « Han ».",
      highlight: { value: '≈ 400 ans', label: 'de règne des Han' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'L’empire sur la carte',
      years: [-200, -1, 200],
      caption: "Changez d'année : sous les Han, l'empire s'étend vers le sud et vers l'Asie centrale.",
    },
    {
      id: 'soie',
      tier: 1,
      type: 'text',
      kicker: 'Commerce',
      title: 'La Route de la soie',
      body:
        "Vers 138 av. J.-C., l'empereur Wudi envoie l'explorateur Zhang Qian vers l'ouest. Des routes caravanières relient bientôt la Chine à la Perse et jusqu'à Rome : la soie part vers l'ouest, les chevaux, les idées et plus tard le bouddhisme arrivent en Chine.",
    },
    {
      id: 'wudi',
      tier: 1,
      type: 'person',
      nom: 'Han Wudi',
      role: 'Empereur, « l’empereur martial »',
      dates: 'règne 141 – 87 av. J.-C.',
      description:
        "Il repousse les Xiongnu, agrandit l'empire, place le sel et le fer sous monopole d'État et fait du confucianisme la doctrine officielle : les fonctionnaires sont formés aux textes de Confucius.",
    },
    {
      id: 'papier',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Le papier',
      body:
        "Des papiers grossiers existent déjà, mais en 105, le fonctionnaire Cai Lun perfectionne une fabrication à partir d'écorces, de chiffons et de filets de pêche. Le papier remplace peu à peu les lamelles de bambou et la soie.",
      highlight: { value: '105', label: 'Cai Lun perfectionne le papier' },
    },

    // ── Niveau 2 ──
    {
      id: 'sima-qian',
      tier: 2,
      type: 'person',
      nom: 'Sima Qian',
      role: 'Historien de la cour',
      dates: '≈ 145 – 86 av. J.-C.',
      description:
        "Auteur des Mémoires historiques, qui racontent l'histoire de la Chine depuis ses origines légendaires. Son œuvre servira de modèle à toutes les histoires officielles des dynasties suivantes.",
    },
    {
      id: 'xiongnu',
      tier: 2,
      type: 'war',
      nom: 'Campagnes contre les Xiongnu',
      annee: -133,
      adversaires: ['Confédération nomade des Xiongnu'],
      allies: ['Armées Han (généraux Wei Qing et Huo Qubing)'],
      vainqueur: 'Les Han (au prix de lourdes pertes)',
      consequences: "Les Xiongnu sont repoussés vers le nord ; la Chine prend le contrôle du corridor du Gansu, porte de la Route de la soie.",
    },
    {
      id: 'deux-han',
      tier: 2,
      type: 'text',
      kicker: 'Fluctuations',
      title: 'Une dynastie coupée en deux',
      body:
        "De 9 à 23, un ministre, Wang Mang, usurpe le trône. Les Han reviennent ensuite et déplacent leur capitale de Chang'an à Luoyang : on distingue ainsi les Han occidentaux et les Han orientaux.",
    },
    {
      id: 'zhang-heng',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Le sismoscope de Zhang Heng',
      body:
        "En 132, le savant Zhang Heng invente un appareil qui signale la direction d'un tremblement de terre : une bille tombe de la gueule d'un dragon de bronze dans celle d'un crapaud.",
    },
    {
      id: 'fin',
      tier: 2,
      type: 'text',
      kicker: 'Fin',
      title: 'Les Turbans jaunes et la chute',
      body:
        "En 184, une immense révolte paysanne, les Turbans jaunes, ébranle l'empire. Les généraux deviennent des seigneurs de guerre ; en 220, la dynastie Han disparaît et la Chine se divise en Trois Royaumes.",
    },
  ],

  quiz: [
    { id: 'premier-empereur', carte: 'unification', type: 'mcq', prompt: 'Que signifie « Qin Shi Huang » ?', options: ['Premier empereur', 'Fils du Ciel', 'Empereur martial', 'Grand Khan'], answer: 0 },
    { id: 'unif-date', carte: 'unification', type: 'mcq', prompt: 'En quelle année la Chine est-elle unifiée par les Qin ?', options: ['221 av. J.-C.', '206 av. J.-C.', '105', '1912'], answer: 0 },
    { id: 'royaumes', carte: 'unification', type: 'mcq', prompt: "Comment s'appelle la période de guerres qui précède l'unification ?", options: ['Les Royaumes combattants', 'Les Trois Royaumes', 'Les Printemps et Automnes', 'Les Turbans jaunes'], answer: 0 },
    { id: 'reformes', carte: 'reformes', type: 'tf', prompt: "Qin Shi Huang unifie l'écriture, la monnaie et les poids et mesures.", answer: true },
    { id: 'terre-cuite', carte: 'armee', type: 'mcq', prompt: "Quand l'armée de terre cuite est-elle découverte ?", options: ['1974', '1822', '1922', '1900'], answer: 0 },
    { id: 'muraille', carte: 'muraille', type: 'tf', prompt: 'La Grande Muraille que l’on visite aujourd’hui date surtout des Qin.', answer: false, explanation: 'Elle date surtout de la dynastie Ming, bien plus tardive.' },
    { id: 'muraille-but', carte: 'muraille', type: 'mcq', prompt: 'Contre qui les premières murailles sont-elles reliées ?', options: ['Les nomades Xiongnu', 'Les Japonais', 'Les Mongols de Gengis Khan', 'Les Romains'], answer: 0 },
    { id: 'liu-bang', carte: 'han', type: 'mcq', prompt: 'Qui fonde la dynastie Han ?', options: ['Liu Bang', 'Qin Shi Huang', 'Wudi', 'Wang Mang'], answer: 0 },
    { id: 'han-nom', carte: 'han', type: 'tf', prompt: 'Les Chinois se désignent encore aujourd’hui comme le peuple « Han ».', answer: true },
    { id: 'zhang-qian', carte: 'soie', type: 'mcq', prompt: 'Quel explorateur Wudi envoie-t-il vers l’ouest ?', options: ['Zhang Qian', 'Marco Polo', 'Sima Qian', 'Cai Lun'], answer: 0 },
    { id: 'confucianisme', carte: 'wudi', type: 'mcq', prompt: 'Quelle doctrine Wudi impose-t-il pour former les fonctionnaires ?', options: ['Le confucianisme', 'Le bouddhisme', 'Le taoïsme', 'Le légisme'], answer: 0 },
    { id: 'papier', carte: 'papier', type: 'mcq', prompt: 'Qui perfectionne la fabrication du papier en 105 ?', options: ['Cai Lun', 'Zhang Heng', 'Sima Qian', 'Confucius'], answer: 0 },
    { id: 'soie-produit', carte: 'soie', type: 'mcq', prompt: 'Quel produit chinois donne son nom aux routes vers l’ouest ?', options: ['La soie', 'Le thé', 'La porcelaine', 'Le papier'], answer: 0 },
    { id: 'sima-qian', carte: 'sima-qian', type: 'mcq', prompt: 'Qui écrit les Mémoires historiques ?', options: ['Sima Qian', 'Confucius', 'Zhang Qian', 'Wudi'], answer: 0 },
    { id: 'capitales', carte: 'deux-han', type: 'mcq', prompt: 'Après Wang Mang, les Han déplacent leur capitale à…', options: ['Luoyang', 'Pékin', 'Nankin', 'Xianyang'], answer: 0 },
    { id: 'sismoscope', carte: 'zhang-heng', type: 'tf', prompt: 'Zhang Heng invente un appareil qui détecte les tremblements de terre.', answer: true },
    { id: 'ordre', carte: ['unification', 'han', 'papier', 'fin'], type: 'order', prompt: "Remettez dans l'ordre.", items: ['Unification par les Qin', 'Fondation des Han', 'Papier de Cai Lun', 'Révolte des Turbans jaunes'] },
    { id: 'fin', carte: 'fin', type: 'mcq', prompt: 'En quelle année la dynastie Han disparaît-elle ?', options: ['220', '476', '105', '9'], answer: 0 },
    { id: 'livres', carte: 'reformes', type: 'mcq', prompt: 'Que fait brûler Qin Shi Huang en 213 av. J.-C. ?', options: ['De nombreux livres jugés dangereux', 'Les temples bouddhistes', 'Les papiers de Cai Lun', 'Les cartes de la Route de la soie'], answer: 0, explanation: 'Son régime est très dur : il fait brûler de nombreux livres jugés dangereux. Le bouddhisme, le papier de Cai Lun et la Route de la soie arrivent plus tard.' },
    { id: 'xian', carte: 'armee', type: 'mcq', prompt: "Près de quelle ville l'armée de terre cuite a-t-elle été découverte ?", options: ["Xi'an", 'Pékin', 'Shanghai', 'Nankin'], answer: 0, explanation: 'Des paysans la découvrent en 1974, près du tombeau du premier empereur.' },
    { id: 'jusqu-1912', carte: 'unification', type: 'mcq', prompt: 'Jusqu’en quelle année la Chine reste-t-elle un empire ?', options: ['1912', '1644', '1279', '1949'], answer: 0 },
    { id: 'sel-fer', carte: 'wudi', type: 'mcq', prompt: 'Quelles ressources Han Wudi place-t-il sous monopole d’État ?', options: ['Le sel et le fer', 'Le thé et la soie', 'L’or et l’argent', 'Le riz et le blé'], answer: 0 },
    { id: 'visages', carte: 'armee', type: 'tf', prompt: 'Dans l’armée de terre cuite, tous les soldats ont le même visage.', answer: false, explanation: 'Chaque visage est différent.' },
  ],

  recap: [
    '221 av. J.-C. : Qin Shi Huang, premier empereur, unifie la Chine',
    'Écriture, monnaie et mesures unifiées ; armée de terre cuite',
    'Les Han (206 av. J.-C. – 220) : confucianisme et Route de la soie',
    'Invention du papier perfectionnée par Cai Lun (105)',
  ],
}

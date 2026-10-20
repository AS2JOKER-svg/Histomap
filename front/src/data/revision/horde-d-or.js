/** Chapitre rédigé : Horde d'or (1242 – 1502). */
export default {
  readingTime: 5,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'fondation',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Le khanat de Batu',
      body:
        "Entre 1237 et 1240, les armées mongoles de Batu, petit-fils de Gengis Khan, conquièrent les principautés russes. En 1242, Batu s'installe sur la basse Volga et y fonde un khanat qui devient vite indépendant du reste de l'empire mongol : la Horde d'or.",
      highlight: { value: '1242', label: 'Batu s’installe sur la Volga' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'La Horde d’or dans le temps',
      years: [1300, 1400, 1500],
      caption: 'Comparez : immense vers 1300, la Horde se divise en plusieurs khanats au XVe siècle.',
    },
    {
      id: 'yarlyk',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Le « joug tatar »',
      body:
        "Les principautés russes ne sont pas occupées, mais soumises : leurs princes doivent payer un tribut et se rendre à Saraï pour recevoir du khan une patente, le yarlyk, qui les autorise à régner. Les Russes appelleront plus tard cette période le « joug tatar ».",
    },
    {
      id: 'ozbeg',
      tier: 1,
      type: 'person',
      nom: 'Özbeg',
      role: 'Khan de la Horde d’or',
      dates: 'règne 1313 – 1341',
      description:
        "Sous son règne, la Horde atteint son apogée. Il fait de l'islam la religion officielle, tout en protégeant l'Église orthodoxe russe. Le voyageur Ibn Battuta visite sa cour vers 1333.",
    },
    {
      id: 'saray',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Saraï, carrefour de l’Eurasie',
      body:
        "Saraï, la capitale sur la Volga, est une grande ville commerçante où se croisent marchands russes, italiens, persans et d'Asie centrale. Les fourrures, les esclaves, les céréales et la soie y transitent entre l'Europe et l'Asie.",
    },
    {
      id: 'peste',
      tier: 1,
      type: 'text',
      kicker: 'Catastrophe',
      title: 'La peste à Caffa',
      body:
        "En 1346, l'armée de la Horde assiège Caffa, un comptoir génois de Crimée, quand la peste frappe ses soldats. Selon un chroniqueur italien, les assiégeants lancent des cadavres par-dessus les murs. Des navires génois ramènent ensuite l'épidémie en Europe : c'est la peste noire.",
    },
    {
      id: 'koulikovo',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Koulikovo',
      annee: 1380,
      adversaires: ['Grande-principauté de Moscou (Dmitri Donskoï)'],
      allies: ['Troupes de Mamaï'],
      vainqueur: 'Moscou',
      consequences:
        "Première grande victoire russe sur la Horde. Elle ne libère pas encore Moscou : deux ans plus tard, le khan Tokhtamych brûle la ville et rétablit le tribut.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Deux siècles et demi de Horde',
      items: [
        { year: 1242, label: 'Fondation par Batu' },
        { year: 1313, label: 'Özbeg : l’islam religion officielle' },
        { year: 1380, label: 'Défaite de Koulikovo' },
        { year: 1395, label: 'Tamerlan détruit Saraï' },
        { year: 1480, label: 'Grande halte sur l’Ougra' },
        { year: 1502, label: 'Fin de la Horde' },
      ],
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Un empire qui se disloque',
      body:
        "Battue par Tamerlan en 1395, la Horde se divise en khanats rivaux : Kazan, Crimée, Astrakhan… En 1480, le khan Ahmed renonce à attaquer Moscou sur la rivière Ougra. En 1502, le khan de Crimée détruit Saraï : la Horde d'or disparaît.",
    },

    // ── Niveau 2 ──
    {
      id: 'batu',
      tier: 2,
      type: 'person',
      nom: 'Batu',
      role: 'Fondateur de la Horde d’or',
      dates: 'vers 1205 – 1255',
      description:
        "Petit-fils de Gengis Khan, il dirige la grande campagne mongole vers l'ouest : il prend Kiev en 1240 et ses armées battent Polonais et Hongrois en 1241. Les Mongols l'appellent « Sain Khan », le bon khan.",
    },
    {
      id: 'tatars',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Des Mongols devenus Tatars',
      body:
        "Les Mongols de Batu sont peu nombreux. Ils se fondent rapidement dans les peuples turcs des steppes, les Kiptchaks, dont la langue devient celle de la Horde. Les Russes appellent tous ces peuples « Tatars ».",
    },
    {
      id: 'eglise',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Une Église protégée',
      body:
        "Les khans tolèrent toutes les religions. L'Église orthodoxe russe reçoit même des privilèges : ses terres et ses biens sont exemptés de tribut. Elle s'enrichit et se renforce pendant cette période.",
    },
    {
      id: 'tamerlan',
      tier: 2,
      type: 'war',
      nom: 'Guerre entre Tokhtamych et Tamerlan',
      annee: 1391,
      adversaires: ['Tamerlan'],
      allies: ['Horde d’or (Tokhtamych)'],
      vainqueur: 'Tamerlan',
      consequences: "Tokhtamych, ancien protégé de Tamerlan, se retourne contre lui. Vaincu en 1391 puis en 1395, il perd son trône ; Saraï et les villes de la Volga sont ravagées.",
    },
    {
      id: 'mamai',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Mamaï, le faiseur de khans',
      body:
        "Pendant les troubles qui suivent 1359, une vingtaine de khans se succèdent en vingt ans. Mamaï, un chef de guerre qui ne descend pas de Gengis Khan et ne peut donc pas être khan, gouverne l'ouest de la Horde en plaçant des khans à sa main.",
    },
  ],

  quiz: [
    { id: 'fondateur', type: 'mcq', prompt: 'Qui fonde la Horde d’or ?', options: ['Batu', 'Gengis Khan', 'Tamerlan', 'Attila'], answer: 0 },
    { id: 'lien', type: 'mcq', prompt: 'Quel est le lien entre Batu et Gengis Khan ?', options: ['Batu est son petit-fils', 'Batu est son frère', 'Batu est son père', 'Aucun lien'], answer: 0 },
    { id: 'fleuve', type: 'mcq', prompt: 'Sur quel fleuve se trouve Saraï, la capitale ?', options: ['La Volga', 'Le Danube', 'Le Dniepr', 'Le Nil'], answer: 0 },
    { id: 'yarlyk', type: 'mcq', prompt: 'Que doivent obtenir les princes russes du khan pour régner ?', options: ['Un yarlyk (patente)', 'Une couronne d’or', 'Un baptême', 'Une armée'], answer: 0 },
    { id: 'tribut', type: 'tf', prompt: 'Les principautés russes paient un tribut à la Horde d’or.', answer: true },
    { id: 'religion', type: 'mcq', prompt: 'Quelle religion Özbeg rend-il officielle ?', options: ['L’islam', 'Le christianisme orthodoxe', 'Le bouddhisme', 'Le judaïsme'], answer: 0 },
    { id: 'eglise', type: 'tf', prompt: 'Les khans persécutent l’Église orthodoxe russe.', answer: false, explanation: 'Ils la protègent et exemptent ses biens du tribut.' },
    { id: 'voyageur', type: 'mcq', prompt: 'Quel voyageur visite la cour d’Özbeg vers 1333 ?', options: ['Ibn Battuta', 'Marco Polo', 'Christophe Colomb', 'Zheng He'], answer: 0 },
    { id: 'caffa', type: 'mcq', prompt: 'Quelle épidémie frappe l’armée de la Horde devant Caffa en 1346 ?', options: ['La peste', 'Le choléra', 'La variole', 'La grippe'], answer: 0 },
    { id: 'koulikovo', type: 'mcq', prompt: 'Qui bat les troupes de Mamaï à Koulikovo en 1380 ?', options: ['Dmitri Donskoï', 'Ivan le Terrible', 'Pierre le Grand', 'Alexandre Nevski'], answer: 0 },
    { id: 'tamerlan', type: 'mcq', prompt: 'Quel conquérant bat Tokhtamych et détruit Saraï en 1395 ?', options: ['Tamerlan', 'Soliman', 'Napoléon', 'Gengis Khan'], answer: 0 },
    { id: 'ougra', type: 'mcq', prompt: 'Que se passe-t-il sur la rivière Ougra en 1480 ?', options: ['Le khan renonce à attaquer Moscou', 'Une grande victoire mongole', 'Le baptême des Tatars', 'La fondation de Saraï'], answer: 0 },
    { id: 'tatars', type: 'mcq', prompt: 'Comment les Russes appellent-ils les peuples de la Horde ?', options: ['Les Tatars', 'Les Vikings', 'Les Huns', 'Les Ottomans'], answer: 0 },
    { id: 'fin', type: 'mcq', prompt: 'Qui détruit Saraï en 1502 ?', options: ['Le khan de Crimée', 'Le tsar de Russie', 'Le sultan ottoman', 'Le roi de Pologne'], answer: 0 },
    { id: 'division', type: 'tf', prompt: 'Au XVe siècle, la Horde d’or se divise en plusieurs khanats, comme Kazan et la Crimée.', answer: true },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Fondation par Batu', 'Règne d’Özbeg', 'Bataille de Koulikovo', 'Grande halte sur l’Ougra'] },
  ],

  recap: [
    '1242 : Batu, petit-fils de Gengis Khan, fonde la Horde sur la Volga',
    'Les princes russes paient tribut et reçoivent le yarlyk du khan',
    'Apogée sous Özbeg, converti à l’islam ; la peste frappe en 1346',
    'Koulikovo (1380), Tamerlan (1395), Ougra (1480) : la Horde décline puis disparaît',
  ],
}

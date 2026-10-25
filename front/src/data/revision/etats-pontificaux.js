/** Chapitre rédigé : États pontificaux (754 – 1870). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'donation',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'La donation de Pépin',
      body:
        "En 754-756, le roi des Francs Pépin le Bref enlève aux Lombards des terres du centre de l'Italie et les donne au pape. Le pape devient le souverain d'un véritable État.",
      highlight: { value: '754', label: 'donation de Pépin le Bref' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Les États du pape',
      years: [800, 1500, 1815],
      caption: 'Comparez : les États pontificaux occupent pendant plus de mille ans le centre de l’Italie, autour de Rome.',
    },
    {
      id: 'pape',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Un souverain élu',
      body:
        "Le pape, élu par les cardinaux, est à la fois le chef de l'Église catholique et le souverain de son État. Il gouverne avec une administration de clercs.",
    },
    {
      id: 'empereurs',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Papes et empereurs',
      body:
        "En 800, le pape couronne Charlemagne empereur. Ensuite, papes et empereurs s'affrontent pour savoir qui nomme les évêques : en 1077, l'empereur Henri IV doit s'humilier devant le pape à Canossa.",
    },
    {
      id: 'avignon',
      tier: 1,
      type: 'text',
      kicker: 'Histoire',
      title: 'Les papes à Avignon',
      body:
        "De 1309 à 1377, les papes s'installent à Avignon. Leur retour à Rome est suivi d'un grand schisme, où deux, puis trois papes rivaux se disputent l'Église jusqu'en 1417.",
    },
    {
      id: 'renaissance',
      tier: 1,
      type: 'person',
      nom: 'Jules II',
      role: 'Pape',
      dates: '1443 – 1513',
      description:
        "Le « pape guerrier » conduit lui-même ses armées. Il lance la construction de la basilique Saint-Pierre et commande à Michel-Ange le plafond de la chapelle Sixtine.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les États pontificaux en dates',
      items: [
        { year: 754, label: 'Donation de Pépin' },
        { year: 800, label: 'Couronnement de Charlemagne' },
        { year: 1309, label: 'Les papes à Avignon' },
        { year: 1527, label: 'Sac de Rome' },
        { year: 1870, label: 'Prise de Rome' },
      ],
    },
    {
      id: 'prise',
      tier: 1,
      type: 'war',
      nom: 'Prise de Rome (1870)',
      annee: 1870,
      adversaires: ['Royaume d’Italie'],
      allies: ['États pontificaux (Pie IX)'],
      vainqueur: 'Royaume d’Italie',
      consequences:
        "Le 20 septembre 1870, les troupes italiennes entrent dans Rome. La ville devient la capitale de l'Italie ; le pape se considère comme prisonnier au Vatican.",
    },
    {
      id: 'vatican',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Le Vatican',
      body:
        "En 1929, l'Italie reconnaît l'État de la Cité du Vatican, le plus petit État du monde. C'est tout ce qui reste des États pontificaux.",
    },

    // ── Niveau 2 ──
    {
      id: 'sac',
      tier: 2,
      type: 'war',
      nom: 'Sac de Rome (1527)',
      annee: 1527,
      adversaires: ['Armée de l’empereur Charles Quint'],
      allies: ['États pontificaux (Clément VII)'],
      vainqueur: 'Troupes impériales',
      consequences: "Des soldats mal payés pillent Rome pendant des mois ; le pape se réfugie au château Saint-Ange.",
    },
    {
      id: 'calendrier',
      tier: 2,
      type: 'text',
      kicker: 'Sciences',
      title: 'Le calendrier grégorien',
      body:
        "En 1582, le pape Grégoire XIII fait adopter un nouveau calendrier, plus exact. Le calendrier grégorien est aujourd'hui utilisé dans presque tout le monde.",
    },
    {
      id: 'garde',
      tier: 2,
      type: 'text',
      kicker: 'Quotidien',
      title: 'La Garde suisse',
      body:
        "Depuis 1506, des soldats suisses aux uniformes colorés protègent le pape. La Garde suisse existe toujours au Vatican.",
    },
    {
      id: 'faux',
      tier: 2,
      type: 'text',
      kicker: 'Sources',
      title: 'Un faux célèbre',
      body:
        "La « donation de Constantin », un document qui prétendait que l'empereur Constantin avait donné l'Occident au pape, a été démontrée comme un faux par l'humaniste Lorenzo Valla en 1440.",
    },
    {
      id: 'trente',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Le concile de Trente',
      body:
        "Face à la Réforme protestante, les papes réunissent le concile de Trente (1545-1563), qui réforme l'Église catholique et fixe sa doctrine.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouvaient les États pontificaux ?', options: ['L’Italie', 'La France', 'L’Espagne', 'L’Allemagne'], answer: 0 },
    { id: 'chef', type: 'mcq', prompt: 'Qui gouverne les États pontificaux ?', options: ['Le pape', 'L’empereur', 'Le doge', 'Un roi'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale des États pontificaux ?', options: ['Rome', 'Florence', 'Milan', 'Naples'], answer: 0 },
    { id: 'pepin', type: 'mcq', prompt: 'Quel roi franc donne des terres au pape en 754-756 ?', options: ['Pépin le Bref', 'Clovis', 'Charles Martel', 'Louis XIV'], answer: 0 },
    { id: 'election', type: 'mcq', prompt: 'Par qui le pape est-il élu ?', options: ['Les cardinaux', 'Le peuple de Rome', 'L’empereur', 'Les rois d’Europe'], answer: 0 },
    { id: 'charlemagne', type: 'mcq', prompt: 'Qui le pape couronne-t-il empereur en 800 ?', options: ['Charlemagne', 'Otton Ier', 'Napoléon', 'Constantin'], answer: 0 },
    { id: 'canossa', type: 'mcq', prompt: 'Quel empereur s’humilie devant le pape à Canossa en 1077 ?', options: ['Henri IV', 'Charles Quint', 'Frédéric Barberousse', 'Charlemagne'], answer: 0 },
    { id: 'avignon', type: 'mcq', prompt: 'Dans quelle ville les papes s’installent-ils au XIVe siècle ?', options: ['Avignon', 'Paris', 'Lyon', 'Florence'], answer: 0 },
    { id: 'schisme', type: 'tf', prompt: 'Pendant le grand schisme, plusieurs papes rivaux se disputent l’Église.', answer: true },
    { id: 'jules', type: 'mcq', prompt: 'Quel pape commande le plafond de la chapelle Sixtine ?', options: ['Jules II', 'Pie IX', 'Léon III', 'Grégoire VII'], answer: 0 },
    { id: 'michelange', type: 'mcq', prompt: 'Quel artiste peint le plafond de la chapelle Sixtine ?', options: ['Michel-Ange', 'Léonard de Vinci', 'Botticelli', 'Le Caravage'], answer: 0 },
    { id: 'calendrier', type: 'mcq', prompt: 'Quel calendrier le pape Grégoire XIII fait-il adopter en 1582 ?', options: ['Le calendrier grégorien', 'Le calendrier julien', 'Le calendrier républicain', 'Le calendrier lunaire'], answer: 0 },
    { id: 'garde', type: 'mcq', prompt: 'Qui protège le pape depuis 1506 ?', options: ['La Garde suisse', 'Les Templiers', 'La Légion étrangère', 'Les mousquetaires'], answer: 0 },
    { id: '1870', type: 'mcq', prompt: 'Qui prend Rome en 1870 ?', options: ['Le royaume d’Italie', 'La France', 'L’Autriche', 'L’Espagne'], answer: 0 },
    { id: 'vatican', type: 'mcq', prompt: 'Quel État est créé en 1929 pour le pape ?', options: ['La Cité du Vatican', 'Saint-Marin', 'Monaco', 'Malte'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Donation de Pépin', 'Couronnement de Charlemagne', 'Les papes à Avignon', 'Prise de Rome'] },
  ],

  recap: [
    '754-756 : la donation de Pépin le Bref crée les États pontificaux',
    'Le pape, souverain élu, affronte les empereurs (Canossa, 1077)',
    'Avignon et le grand schisme ; la Renaissance romaine (Jules II, Michel-Ange)',
    '1870 : prise de Rome par l’Italie ; 1929 : création du Vatican',
  ],
}

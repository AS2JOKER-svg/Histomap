/** Chapitre rédigé : Iran contemporain (1789 – aujourd'hui). */
export default {
  readingTime: 5,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'qadjars',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'La dynastie des Qadjars',
      body:
        "Après des décennies de troubles qui suivent la fin des Safavides, Agha Mohammad Khan, chef d'une tribu turkmène, réunifie la Perse. Il fait de Téhéran sa capitale et se fait couronner chah en 1796. Sa dynastie, les Qadjars, règne jusqu'en 1925.",
      highlight: { value: '1796', label: 'couronnement du premier chah qadjar' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Une Perse qui rétrécit',
      years: [1800, 1880, 2000],
      caption: "Comparez : après deux guerres perdues contre la Russie (traités de 1813 et 1828), la Perse perd ses territoires du Caucase, qui correspondent à l'Arménie et à l'Azerbaïdjan actuels.",
    },
    {
      id: 'grand-jeu',
      tier: 1,
      type: 'text',
      kicker: 'Monde',
      title: 'Entre la Russie et le Royaume-Uni',
      body:
        "Au XIXe siècle, la Perse reste indépendante mais devient l'enjeu de la rivalité entre l'Empire russe, au nord, et les Britanniques, maîtres de l'Inde. Les chahs, endettés, accordent aux étrangers des concessions (télégraphe, tabac, banques). En 1907, Russes et Britanniques se partagent le pays en zones d'influence.",
    },
    {
      id: 'constitution',
      tier: 1,
      type: 'text',
      kicker: 'Droits',
      title: 'La révolution constitutionnelle',
      body:
        "En 1905-1906, des marchands, des religieux et des intellectuels se révoltent contre le pouvoir absolu du chah. Ils obtiennent en 1906 une Constitution et un Parlement, le Majlis. C'est l'une des premières Constitutions d'Asie.",
      highlight: { value: '1906', label: 'premier Parlement iranien' },
    },
    {
      id: 'petrole',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Découvertes',
      value: '1908',
      label: 'découverte du pétrole à Masjed Soleyman',
      caption: "C'est le premier grand gisement du Moyen-Orient. Il est exploité par une compagnie britannique, l'Anglo-Persian Oil Company (future BP), qui en garde l'essentiel des profits.",
    },
    {
      id: 'reza',
      tier: 1,
      type: 'person',
      nom: 'Reza Chah Pahlavi',
      role: 'Chah, fondateur de la dynastie Pahlavi',
      dates: 'règne 1925 – 1941',
      description: "Officier, il prend le pouvoir par un coup d'État en 1921, puis se fait proclamer chah en 1925. Il modernise le pays de façon autoritaire : armée, routes, chemin de fer, écoles. En 1935, il demande aux pays étrangers d'appeler la Perse « Iran ». En 1941, Britanniques et Soviétiques envahissent le pays et l'obligent à abdiquer en faveur de son fils.",
    },
    {
      id: 'mossadegh',
      tier: 1,
      type: 'text',
      kicker: 'Crise',
      title: 'Mossadegh et le coup d’État de 1953',
      body:
        "En 1951, le Premier ministre Mohammad Mossadegh nationalise le pétrole iranien, très populaire auprès des Iraniens. En 1953, il est renversé par un coup d'État organisé par la CIA américaine et les services secrets britanniques, avec l'appui d'une partie de l'armée. Le chah Mohammad Reza Pahlavi gouverne ensuite de manière de plus en plus autoritaire.",
    },
    {
      id: 'revolution',
      tier: 1,
      type: 'dates',
      kicker: 'Fluctuations',
      title: 'La révolution de 1979',
      items: [
        { year: 1963, label: 'Le chah lance la « révolution blanche » : réforme agraire, vote des femmes' },
        { year: 1978, label: 'Immenses manifestations contre le chah' },
        { year: 1979, label: 'Janvier : le chah quitte le pays ; février : retour de Khomeini' },
        { year: 1979, label: 'Avril : la République islamique est proclamée après un référendum' },
        { year: 1979, label: "Novembre : prise d'otages à l'ambassade des États-Unis (444 jours)" },
      ],
    },
    {
      id: 'khomeini',
      tier: 1,
      type: 'person',
      nom: 'Rouhollah Khomeini',
      role: 'Ayatollah, premier Guide suprême',
      dates: '1902 – 1989',
      description: "Religieux chiite opposé au chah, il est exilé en 1964 (Turquie, Irak, puis France). Revenu en 1979, il fonde la République islamique, où le pouvoir suprême revient à un religieux, le Guide. Il dirige le pays jusqu'à sa mort en 1989.",
    },

    // ── Niveau 2 ──
    {
      id: 'iran-irak',
      tier: 2,
      type: 'war',
      nom: 'Guerre Iran-Irak',
      annee: 1980,
      adversaires: ['Irak de Saddam Hussein'],
      allies: ['Iran'],
      vainqueur: 'Aucun : cessez-le-feu en 1988, frontières inchangées',
      consequences: "En septembre 1980, l'Irak attaque l'Iran. La guerre dure huit ans et fait plusieurs centaines de milliers de morts, selon les estimations. L'armée irakienne utilise des armes chimiques.",
    },
    {
      id: 'regime',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Comment fonctionne la République islamique ?',
      body:
        "Les Iraniens élisent un président et un Parlement, mais un Conseil des gardiens choisit qui peut être candidat. Le vrai pouvoir appartient au Guide suprême, Ali Khamenei depuis 1989. Les lois s'appuient sur l'islam chiite ; le voile est obligatoire pour les femmes depuis le début des années 1980.",
    },
    {
      id: 'femmes',
      tier: 2,
      type: 'text',
      kicker: 'Droits',
      title: '« Femme, vie, liberté »',
      body:
        "En 2022, la mort de Mahsa Amini, une jeune femme arrêtée par la police des mœurs pour un voile mal porté, provoque de grandes manifestations, durement réprimées. Deux Iraniennes ont reçu le prix Nobel de la paix pour la défense des droits humains : l'avocate Shirin Ebadi (2003) et Narges Mohammadi (2023), alors en prison.",
    },
    {
      id: 'nucleaire',
      tier: 2,
      type: 'text',
      kicker: 'Monde',
      title: 'Le dossier nucléaire',
      body:
        "Depuis les années 2000, les pays occidentaux soupçonnent l'Iran de vouloir fabriquer l'arme atomique, ce que Téhéran dément. Un accord signé à Vienne en 2015 limite son programme, mais les États-Unis s'en retirent en 2018. En juin 2025, Israël puis les États-Unis bombardent des sites nucléaires iraniens.",
    },
    {
      id: 'culture',
      tier: 2,
      type: 'text',
      kicker: 'Culture',
      title: 'Cinéma et bande dessinée',
      body:
        "Le cinéma iranien est reconnu dans le monde entier : Abbas Kiarostami reçoit la Palme d'or à Cannes en 1997, Asghar Farhadi deux Oscars (2012 et 2017). Exilée en France, Marjane Satrapi raconte son enfance pendant la révolution dans la bande dessinée « Persepolis ».",
    },
  ],

  quiz: [
    { id: 'qadjars', type: 'mcq', prompt: 'Quelle dynastie règne sur la Perse de la fin du XVIIIe siècle à 1925 ?', options: ['Les Qadjars', 'Les Safavides', 'Les Pahlavi', 'Les Achéménides'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: "Quelle ville devient la capitale de l'Iran avec les Qadjars ?", options: ['Téhéran', 'Ispahan', 'Persépolis', 'Tabriz'], answer: 0 },
    { id: 'caucase', type: 'mcq', prompt: 'À quelle puissance la Perse cède-t-elle le Caucase au début du XIXe siècle ?', options: ["L'Empire russe", "L'Empire ottoman", 'Le Royaume-Uni', 'La France'], answer: 0 },
    { id: 'colonie', type: 'tf', prompt: 'La Perse devient une colonie britannique au XIXe siècle.', answer: false, explanation: "Elle reste indépendante, mais sous l'influence de la Russie et du Royaume-Uni." },
    { id: 'majlis', type: 'mcq', prompt: 'Comment s’appelle le Parlement iranien créé en 1906 ?', options: ['Le Majlis', 'Le Divan', 'La Douma', 'Le Sénat'], answer: 0 },
    { id: 'petrole', type: 'mcq', prompt: 'Quelle ressource est découverte en Iran en 1908 ?', options: ['Le pétrole', "L'or", 'Le charbon', "L'uranium"], answer: 0 },
    { id: 'nom', type: 'mcq', prompt: 'Quel nom Reza Chah demande-t-il aux étrangers d’utiliser en 1935 ?', options: ['Iran', 'Perse', 'Mésopotamie', 'Khorasan'], answer: 0 },
    { id: 'reza', type: 'tf', prompt: 'En 1941, Britanniques et Soviétiques obligent Reza Chah à abdiquer.', answer: true },
    { id: 'mossadegh', type: 'mcq', prompt: 'Que nationalise Mossadegh en 1951 ?', options: ['Le pétrole', 'Les banques', 'Les terres agricoles', 'Le chemin de fer'], answer: 0 },
    { id: 'coup', type: 'mcq', prompt: 'Quels services secrets organisent le renversement de Mossadegh en 1953 ?', options: ['Américains et britanniques', 'Soviétiques et français', 'Irakiens', 'Israéliens'], answer: 0 },
    { id: 'revolution', type: 'mcq', prompt: 'En quelle année la révolution chasse-t-elle le chah ?', options: ['1979', '1953', '1963', '1989'], answer: 0 },
    { id: 'khomeini', type: 'mcq', prompt: 'Qui devient le premier Guide suprême de la République islamique ?', options: ['Rouhollah Khomeini', 'Mohammad Mossadegh', 'Ali Khamenei', 'Reza Chah'], answer: 0 },
    { id: 'otages', type: 'mcq', prompt: "Quelle ambassade est prise d'assaut à Téhéran en novembre 1979 ?", options: ['Celle des États-Unis', 'Celle du Royaume-Uni', "Celle de l'URSS", 'Celle de la France'], answer: 0 },
    { id: 'guerre', type: 'mcq', prompt: "Quel pays attaque l'Iran en 1980 ?", options: ["L'Irak", "L'Afghanistan", 'La Turquie', "L'Arabie saoudite"], answer: 0 },
    { id: 'chiisme', type: 'tf', prompt: "La République islamique d'Iran s'appuie sur l'islam chiite.", answer: true },
    { id: 'amini', type: 'mcq', prompt: 'Quel slogan accompagne les manifestations de 2022 ?', options: ['« Femme, vie, liberté »', '« Liberté, égalité, fraternité »', '« Du pain et des roses »', '« Paix, terre et pain »'], answer: 0 },
    { id: 'persepolis', type: 'mcq', prompt: 'Qui a écrit la bande dessinée « Persepolis » ?', options: ['Marjane Satrapi', 'Shirin Ebadi', 'Abbas Kiarostami', 'Narges Mohammadi'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Révolution constitutionnelle', 'Reza Chah devient chah', 'Nationalisation du pétrole', 'Révolution islamique', 'Fin de la guerre Iran-Irak'] },
  ],

  recap: [
    'Les Qadjars (1796-1925) : capitale Téhéran, Perse disputée par Russes et Britanniques',
    '1906 : Constitution et Parlement ; 1908 : découverte du pétrole',
    'Les Pahlavi modernisent par la force ; 1953 : coup d’État contre Mossadegh',
    '1979 : révolution et République islamique de Khomeini ; guerre contre l’Irak (1980-1988)',
  ],
}

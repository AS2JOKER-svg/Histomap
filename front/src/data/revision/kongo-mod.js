/** Chapitre rédigé : Royaume du Kongo christianisé (1492 – 1789). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'afonso',
      tier: 1,
      type: 'person',
      nom: 'Afonso Ier (Mvemba a Nzinga)',
      role: 'Manikongo, roi du Kongo',
      dates: 'règne vers 1509 – 1542',
      description: "Fils du premier roi baptisé, il l'emporte sur son frère dans une guerre de succession. Chrétien convaincu, il fait construire des églises, ouvre des écoles et échange de nombreuses lettres avec les rois du Portugal, qu'il traite d'égal à égal.",
    },
    {
      id: 'christianisme',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Un christianisme choisi',
      body:
        "Le Kongo n'est pas conquis : ce sont ses rois qui adoptent le christianisme, dès 1491. La foi nouvelle se mêle aux croyances anciennes : la croix devient un symbole de protection, et les saints sont rapprochés des esprits traditionnels.",
      highlight: { value: '1491', label: 'baptême du premier roi du Kongo' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: "Un royaume d'Afrique centrale",
      years: [1500, 1650, 1783],
      caption: "Le royaume s'étend au sud de l'embouchure du fleuve Congo, sur le nord de l'actuel Angola et l'ouest de l'actuelle RD Congo. Comparez son étendue au fil des siècles.",
    },
    {
      id: 'henrique',
      tier: 1,
      type: 'text',
      kicker: 'Monde',
      title: 'Un évêque africain',
      body:
        "Afonso envoie son fils Henrique étudier au Portugal. En 1518, avec l'accord du pape, Henrique devient évêque : c'est l'un des tout premiers évêques d'Afrique subsaharienne. Il rentre au Kongo, mais meurt vers 1531.",
    },
    {
      id: 'lettres',
      tier: 1,
      type: 'text',
      kicker: 'Crise',
      title: 'Les lettres de 1526',
      body:
        "Des marchands portugais achètent de plus en plus de captifs, et certains enlèvent même des habitants libres. En 1526, Afonso écrit au roi du Portugal pour se plaindre de ces enlèvements. Il crée un contrôle des captifs vendus, mais ne parvient pas à arrêter la traite.",
      highlight: { value: '1526', label: 'lettres d’Afonso Ier contre les abus de la traite' },
    },
    {
      id: 'traite',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Société',
      value: '≈ 12,5 millions',
      label: "d'Africains déportés vers les Amériques par la traite atlantique (XVIe – XIXe s.), selon les estimations",
      caption: "L'Afrique centrale de l'Ouest, autour du Kongo et de l'Angola, est la plus grande région de départ. Beaucoup de captifs partent travailler dans les plantations du Brésil.",
    },
    {
      id: 'mbwila',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Mbwila (Ambuila)',
      annee: 1665,
      adversaires: ["Colonie portugaise d'Angola et alliés africains"],
      allies: ['Armée du roi António Ier'],
      vainqueur: 'Les Portugais',
      consequences: "Le roi António Ier est tué et décapité, et une grande partie de la noblesse périt. Le royaume sombre dans une longue guerre civile entre prétendants au trône.",
    },
    {
      id: 'kimpa-vita',
      tier: 1,
      type: 'person',
      nom: 'Kimpa Vita (Dona Beatriz)',
      role: 'Prophétesse',
      dates: 'vers 1684 – 1706',
      description: "En 1704, cette jeune noble affirme être habitée par saint Antoine. Elle prêche un christianisme africain et appelle à réunifier le royaume en repeuplant sa capitale abandonnée. Jugée hérétique, elle est brûlée vive en 1706.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Durée',
      title: 'Trois siècles agités',
      items: [
        { year: 1509, label: "Vers 1509 : début du règne d'Afonso Ier" },
        { year: 1526, label: 'Lettres d’Afonso au roi du Portugal' },
        { year: 1576, label: 'Les Portugais fondent Luanda, en Angola' },
        { year: 1665, label: 'Défaite de Mbwila' },
        { year: 1709, label: 'Pedro IV réunifie le royaume' },
      ],
    },

    // ── Niveau 2 ──
    {
      id: 'capitale',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Mbanza Kongo devient São Salvador',
      body:
        "La capitale, Mbanza Kongo, est rebaptisée São Salvador au XVIe siècle et se couvre d'églises de pierre. Les nobles prennent des titres portugais (duc, marquis, comte) et certains apprennent à lire et à écrire le portugais.",
    },
    {
      id: 'jagas',
      tier: 2,
      type: 'text',
      kicker: 'Crise',
      title: "L'invasion des Jagas",
      body:
        "En 1568, des guerriers venus de l'est, que les sources appellent « Jagas », pillent la capitale. Le roi Álvaro Ier doit fuir et ne retrouve son trône qu'avec l'aide de soldats portugais. Peu après, le Portugal s'installe au sud, en Angola.",
    },
    {
      id: 'ambassade',
      tier: 2,
      type: 'text',
      kicker: 'Monde',
      title: 'Un ambassadeur à Rome',
      body:
        "En 1608, le roi du Kongo envoie un ambassadeur, Antonio Manuel ne Vunda, auprès du pape. Il meurt à Rome peu après son arrivée ; son buste orne encore la basilique Sainte-Marie-Majeure.",
    },
    {
      id: 'nzimbu',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Coquillages et tissus de raphia',
      body:
        "Au Kongo, on paie avec des nzimbu, de petits coquillages pêchés près de Luanda et contrôlés par le roi, ou avec des étoffes de raphia finement tissées. Les Européens admiraient la qualité de ces tissus.",
    },
    {
      id: 'heritage',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Un royaume affaibli mais vivant',
      body:
        "Après 1709, le Kongo est réunifié, mais le roi n'a plus qu'un pouvoir limité sur les provinces. Le royaume passe peu à peu sous domination portugaise au XIXe siècle, avant d'être supprimé en 1914. Le site de Mbanza Kongo est inscrit au patrimoine mondial de l'UNESCO depuis 2017.",
    },
  ],

  quiz: [
    { id: 'roi', type: 'mcq', prompt: 'Quel roi du Kongo écrit au roi du Portugal en 1526 ?', options: ['Afonso Ier', 'António Ier', 'Pedro IV', 'Álvaro Ier'], answer: 0 },
    { id: 'titre', type: 'mcq', prompt: 'Comment appelle-t-on le roi du Kongo ?', options: ['Le manikongo', "L'asantehene", "L'alaafin", 'Le négus'], answer: 0 },
    { id: 'religion', type: 'mcq', prompt: 'Quelle religion les rois du Kongo adoptent-ils ?', options: ['Le christianisme', "L'islam", 'Le bouddhisme', 'Le judaïsme'], answer: 0 },
    { id: 'force', type: 'tf', prompt: 'Le christianisme est imposé au Kongo par une conquête portugaise.', answer: false, explanation: "Ce sont les rois du Kongo eux-mêmes qui choisissent de se convertir, dès 1491." },
    { id: 'partenaire', type: 'mcq', prompt: 'Avec quel pays européen le Kongo entretient-il surtout des relations ?', options: ['Le Portugal', "L'Angleterre", 'La France', 'Les Provinces-Unies'], answer: 0 },
    { id: 'henrique', type: 'mcq', prompt: "Quel fils d'Afonso Ier devient évêque en 1518 ?", options: ['Henrique', 'António', 'Álvaro', 'Garcia'], answer: 0 },
    { id: 'lettres', type: 'mcq', prompt: 'De quoi Afonso Ier se plaint-il dans ses lettres de 1526 ?', options: ['Des enlèvements de ses sujets par les négriers', "Du manque d'or", 'Des impôts du pape', 'Des attaques ottomanes'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quel nom portugais prend la capitale Mbanza Kongo ?', options: ['São Salvador', 'Luanda', 'São Tomé', 'Elmina'], answer: 0 },
    { id: 'bresil', type: 'mcq', prompt: 'Vers quelle colonie beaucoup de captifs du Kongo et de l’Angola sont-ils déportés ?', options: ['Le Brésil', 'Le Canada', "L'Inde", "L'Australie"], answer: 0 },
    { id: 'chiffre', type: 'mcq', prompt: 'Combien de personnes la traite atlantique a-t-elle déportées au total, selon les estimations ?', options: ['Environ 12,5 millions', 'Environ 500 000', 'Environ 100 millions', 'Environ 1 million'], answer: 0 },
    { id: 'luanda', type: 'mcq', prompt: 'Quelle ville les Portugais fondent-ils en 1576 au sud du Kongo ?', options: ['Luanda', 'Lisbonne', 'Le Cap', 'Mombasa'], answer: 0 },
    { id: 'jagas', type: 'tf', prompt: 'En 1568, des guerriers appelés « Jagas » pillent la capitale du Kongo.', answer: true },
    { id: 'mbwila', type: 'mcq', prompt: 'Quelle bataille de 1665 voit la mort du roi António Ier ?', options: ['Mbwila', 'Tondibi', 'Feyiase', 'Lépante'], answer: 0 },
    { id: 'apres', type: 'mcq', prompt: 'Que se passe-t-il au Kongo après 1665 ?', options: ['Une longue guerre civile', 'Une conquête ottomane', 'Une période de grande paix', "L'abolition de la royauté"], answer: 0 },
    { id: 'kimpa', type: 'mcq', prompt: 'Par quel saint Kimpa Vita affirme-t-elle être habitée ?', options: ['Saint Antoine', 'Saint Pierre', 'Saint Jacques', 'Saint Louis'], answer: 0 },
    { id: 'nzimbu', type: 'mcq', prompt: 'Que sont les nzimbu ?', options: ['Des coquillages servant de monnaie', 'Des soldats du roi', 'Des églises', 'Des masques sacrés'], answer: 0 },
    { id: 'rome', type: 'tf', prompt: 'Un ambassadeur du Kongo est envoyé auprès du pape à Rome au début du XVIIe siècle.', answer: true },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Lettres d’Afonso Ier', 'Invasion des Jagas', 'Bataille de Mbwila', 'Mort de Kimpa Vita'] },
  ],

  recap: [
    'Un royaume africain qui choisit le christianisme',
    'Afonso Ier dialogue avec le Portugal mais ne peut freiner la traite',
    '1665 : défaite de Mbwila et guerre civile',
    'Kimpa Vita tente de refonder le royaume ; Pedro IV le réunifie en 1709',
  ],
}

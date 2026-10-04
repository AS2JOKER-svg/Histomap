/** Chapitre rédigé : Civilisation Nok (≈ 1500 av. J.-C. – début de notre ère, Nigeria central). */
export default {
  readingTime: 3,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'decouverte',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Une civilisation sortie d’une mine',
      body:
        "Au XXe siècle, des mineurs qui exploitent l'étain dans le centre du Nigeria trouvent d'étranges têtes en terre cuite. En 1943, l'archéologue britannique Bernard Fagg comprend qu'elles appartiennent à une même culture très ancienne. Il la nomme Nok, d'après le village où l'une des premières pièces a été trouvée.",
      highlight: { value: '1943', label: 'Bernard Fagg identifie la culture Nok' },
    },
    {
      id: 'territoire',
      tier: 1,
      type: 'text',
      kicker: 'Territoire',
      title: 'Des villages du Nigeria central',
      body:
        "Les sites Nok se trouvent au centre du Nigeria, au sud-ouest du plateau de Jos. On ne connaît ni ville, ni palais, ni capitale : les Nok vivaient dans des villages d'agriculteurs. Ils cultivaient notamment le mil et le niébé (une sorte de haricot), dont les archéologues ont retrouvé des graines carbonisées.",
    },
    {
      id: 'duree',
      tier: 1,
      type: 'dates',
      kicker: 'Durée',
      title: 'Une longue histoire (dates approximatives)',
      items: [
        { year: -1500, label: 'Vers 1500 av. J.-C. : premiers villages Nok' },
        { year: -900, label: 'Vers 900 av. J.-C. : début des sculptures en terre cuite' },
        { year: -500, label: 'Vers le milieu du Ier millénaire av. J.-C. : le fer est travaillé' },
        { year: 1, label: 'Vers le début de notre ère : la culture Nok s’efface' },
      ],
    },
    {
      id: 'terres-cuites',
      tier: 1,
      type: 'text',
      kicker: 'Culture',
      title: 'Des sculptures en terre cuite',
      body:
        "Les Nok sont célèbres pour leurs statues en argile cuite, creuses à l'intérieur. Les visages ont de grands yeux en triangle ou en amande, aux pupilles percées, et des coiffures très travaillées. Certaines têtes sont presque grandeur nature. Ce sont parmi les plus anciennes sculptures connues d'Afrique au sud du Sahara.",
      highlight: { value: '≈ 900 av. J.-C.', label: 'début de la production des terres cuites' },
    },
    {
      id: 'fer',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'De la pierre au fer',
      body:
        "Les Nok font partie des premiers peuples d'Afrique de l'Ouest à fondre le fer, dans des fourneaux en argile. Ici, il n'y a pas eu d'âge du bronze : on passe directement des outils de pierre aux outils de fer. Les archéologues débattent encore pour savoir si cette technique a été inventée sur place ou apprise ailleurs.",
    },
    {
      id: 'croyances',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'À quoi servaient les statues ?',
      body:
        "Sans écriture, impossible de lire ce que pensaient les Nok. Les statues représentaient peut-être des ancêtres, des chefs ou des esprits, et servaient sans doute lors de rites. On les retrouve souvent cassées, dans des fosses : était-ce un rituel ? La question reste ouverte.",
    },
    {
      id: 'mysteres',
      tier: 1,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Ce que l’on ignore encore',
      body:
        "Le sol de la région est très acide : les os ne s'y conservent presque pas. On ne connaît donc ni les tombes ni le corps des Nok. On ignore aussi comment ils étaient gouvernés et pourquoi leur culture disparaît au tournant de notre ère.",
    },

    // ── Niveau 2 ──
    {
      id: 'datation',
      tier: 2,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Comment date-t-on les Nok ?',
      body:
        "Les archéologues utilisent le carbone 14, qui date les restes de bois et de graines brûlés, et la thermoluminescence, qui indique quand une poterie a été cuite pour la dernière fois. Depuis 2005, une équipe d'archéologues allemands et nigérians fouille de nombreux sites Nok.",
    },
    {
      id: 'pillage',
      tier: 2,
      type: 'text',
      kicker: 'Crise',
      title: 'Des sites pillés',
      body:
        "Les terres cuites Nok valent très cher sur le marché de l'art. Beaucoup de sites ont été pillés par des fouilleurs clandestins, et de nombreux faux circulent. Une statue arrachée à son site perd toute valeur scientifique : on ne sait plus d'où elle vient ni à quoi elle servait.",
    },
    {
      id: 'heritage',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Des héritiers ?',
      body:
        "Certains historiens voient un lien entre l'art Nok et les sculptures plus tardives d'Ife, au sud-ouest du Nigeria. Mais plus de mille ans séparent les deux, et aucune preuve directe ne relie ces cultures.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouvent les sites de la culture Nok ?', options: ['Le Nigeria', "L'Éthiopie", 'Le Maroc', "L'Afrique du Sud"], answer: 0 },
    { id: 'nom', type: 'mcq', prompt: "D'où vient le nom « Nok » ?", options: ["D'un village du Nigeria", "D'un roi légendaire", "D'un fleuve", "D'un dieu"], answer: 0 },
    { id: 'fagg', type: 'mcq', prompt: 'Quel archéologue identifie la culture Nok en 1943 ?', options: ['Bernard Fagg', 'Howard Carter', 'Heinrich Schliemann', 'Louis Leakey'], answer: 0 },
    { id: 'mine', type: 'mcq', prompt: 'Qui trouve les premières terres cuites Nok ?', options: ["Des mineurs d'étain", 'Des pêcheurs', 'Des soldats', 'Des moines'], answer: 0 },
    { id: 'materiau', type: 'mcq', prompt: 'En quel matériau sont faites les célèbres statues Nok ?', options: ['En terre cuite', 'En bronze', 'En marbre', 'En ivoire'], answer: 0 },
    { id: 'yeux', type: 'mcq', prompt: 'Quelle est une caractéristique des visages Nok ?', options: ['De grands yeux en triangle ou en amande', 'Des yeux en pierres précieuses', 'Des visages sans yeux', 'Des yeux peints en bleu'], answer: 0 },
    { id: 'capitale', type: 'tf', prompt: 'Les archéologues ont retrouvé le palais royal de la capitale Nok.', answer: false, explanation: "On ne connaît ni ville ni palais : les Nok vivaient dans des villages." },
    { id: 'metal', type: 'mcq', prompt: 'Quel métal les Nok savent-ils fondre ?', options: ['Le fer', "L'or", 'Le bronze', "L'argent"], answer: 0 },
    { id: 'bronze', type: 'tf', prompt: "En Afrique de l'Ouest, on passe de la pierre au fer sans âge du bronze.", answer: true },
    { id: 'cultures', type: 'mcq', prompt: 'Quelle plante les Nok cultivaient-ils ?', options: ['Le mil', 'Le maïs', 'La pomme de terre', 'Le riz asiatique'], answer: 0 },
    { id: 'os', type: 'mcq', prompt: 'Pourquoi ne retrouve-t-on presque pas de squelettes Nok ?', options: ['Le sol acide détruit les os', 'Les Nok brûlaient tous leurs morts', 'Les sites sont sous la mer', 'Les os ont été vendus'], answer: 0 },
    { id: 'ecriture', type: 'tf', prompt: 'Les Nok ont laissé des textes qui expliquent leurs croyances.', answer: false, explanation: "Les Nok n'avaient pas d'écriture : on ne les connaît que par l'archéologie." },
    { id: 'c14', type: 'mcq', prompt: 'Quelle méthode permet de dater des graines ou du bois brûlés ?', options: ['Le carbone 14', 'La boussole', 'Le sextant', 'Le microscope'], answer: 0 },
    { id: 'thermo', type: 'mcq', prompt: 'Quelle méthode indique quand une poterie a été cuite ?', options: ['La thermoluminescence', 'La dendrochronologie', 'La stratigraphie', 'La radiographie'], answer: 0 },
    { id: 'pillage', type: 'tf', prompt: 'Beaucoup de sites Nok ont été pillés pour le marché de l’art.', answer: true },
    { id: 'fosses', type: 'mcq', prompt: 'Où retrouve-t-on souvent les statues Nok ?', options: ['Cassées, dans des fosses', 'Intactes, dans des temples', 'Dans des tombeaux royaux', 'Au fond des lacs'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Premiers villages Nok', 'Début des sculptures en terre cuite', 'Disparition de la culture Nok', 'Identification par Bernard Fagg'] },
  ],

  recap: [
    'Une culture villageoise du Nigeria central, sans écriture',
    'Des statues en terre cuite parmi les plus anciennes d’Afrique subsaharienne',
    'Parmi les premiers forgerons du fer en Afrique de l’Ouest',
    "Connue seulement par l'archéologie : beaucoup de questions restent ouvertes",
  ],
}

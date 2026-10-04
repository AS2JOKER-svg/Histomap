/** Chapitre rédigé : Empire songhaï, de Sonni Ali à 1492 (la suite, avec les Askia, fait l'objet du chapitre songhai-mod). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'gao',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Gao, la ville du fleuve',
      body:
        "Les Songhaï vivent le long du fleuve Niger, en aval de Tombouctou. Leur ville principale, Gao, est connue des géographes arabes dès le IXe siècle. Ses rois se convertissent à l'islam vers le début du XIe siècle. Au XIVe siècle, Gao est soumise à l'Empire du Mali, puis retrouve peu à peu son indépendance.",
      highlight: { value: 'Gao', label: 'capitale, sur la boucle du Niger' },
    },
    {
      id: 'sonni-ali',
      tier: 1,
      type: 'person',
      nom: 'Sonni Ali Ber',
      role: 'Souverain songhaï, fondateur de l’empire',
      dates: 'règne 1464 – 1492',
      description: "Surnommé Ber, « le Grand », ce roi de la dynastie des Sonni passe presque tout son règne à faire la guerre. Selon la tradition, il n'a jamais perdu une bataille. Il transforme le petit royaume de Gao en un vaste empire le long du Niger.",
    },
    {
      id: 'expansion',
      tier: 1,
      type: 'dates',
      kicker: 'Expansion',
      title: 'Les conquêtes de Sonni Ali',
      items: [
        { year: 1464, label: 'Sonni Ali devient roi à Gao' },
        { year: 1468, label: 'Il chasse les Touaregs de Tombouctou' },
        { year: 1473, label: 'Vers 1473, Djenné se rend après un long siège' },
        { year: 1483, label: 'Il repousse les Mossis' },
        { year: 1492, label: 'Mort de Sonni Ali' },
      ],
    },
    {
      id: 'tombouctou',
      tier: 1,
      type: 'war',
      nom: 'Prise de Tombouctou',
      annee: 1468,
      adversaires: ['Touaregs du chef Akil'],
      allies: ['Armée songhaï (Sonni Ali)'],
      vainqueur: 'Sonni Ali',
      consequences: "Les Touaregs occupaient Tombouctou depuis 1433. Sonni Ali les chasse, mais ses troupes pillent la ville. Il fait persécuter des savants qu'il accuse d'avoir soutenu les Touaregs ; beaucoup s'enfuient vers Oualata.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: "L'empire à la mort de Sonni Ali",
      years: [1492],
      caption: "En 1492, l'empire songhaï contrôle la boucle du Niger, de Djenné à Gao en passant par Tombouctou. Il a pris la place du Mali dans cette région.",
    },
    {
      id: 'djenne',
      tier: 1,
      type: 'text',
      kicker: 'Guerre',
      title: 'Le siège de Djenné',
      body:
        "Djenné, grande ville marchande du delta intérieur du Niger, est protégée par les eaux qui l'entourent. Selon la chronique de Tombouctou, Sonni Ali l'assiège pendant « sept ans, sept mois et sept jours ». La ville finit par se rendre vers 1473 ; d'après la tradition, Sonni Ali épouse ensuite la mère du jeune roi de Djenné.",
      highlight: { value: '≈ 1473', label: 'reddition de Djenné' },
    },
    {
      id: 'flotte',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Une armée de cavaliers et de pirogues',
      body:
        "La force de Sonni Ali repose sur sa cavalerie, très mobile, et sur une flotte de grandes pirogues qui transporte soldats et vivres sur le Niger. Le fleuve devient l'axe de l'empire : il relie les villes de Djenné, Tombouctou et Gao.",
    },
    {
      id: 'religion',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Un roi entre islam et traditions',
      body:
        "Sonni Ali se dit musulman, mais il pratique aussi les cultes traditionnels songhaï. Pour la population, c'est un roi aux pouvoirs magiques. Les lettrés musulmans de Tombouctou, eux, le jugent sévèrement et le présentent comme un tyran cruel.",
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'La mort du conquérant',
      body:
        "En 1492, au retour d'une campagne, Sonni Ali meurt, noyé en traversant un cours d'eau selon les chroniques. Son fils lui succède, mais il est renversé dès 1493 par un de ses généraux, Mohammed Touré : avec lui commence la dynastie des Askia, à l'apogée de l'empire.",
      highlight: { value: '1492', label: 'mort de Sonni Ali' },
    },

    // ── Niveau 2 ──
    {
      id: 'sources',
      tier: 2,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Des chroniques écrites après coup',
      body:
        "On connaît Sonni Ali surtout par deux chroniques rédigées à Tombouctou au XVIIe siècle, comme le Tarikh al-Sudan. Leurs auteurs, des lettrés musulmans, lui sont hostiles. Les traditions orales songhaï, au contraire, en font un héros. Les historiens croisent ces sources pour s'approcher de la vérité.",
    },
    {
      id: 'mossis',
      tier: 2,
      type: 'war',
      nom: 'Guerre contre les Mossis',
      annee: 1483,
      adversaires: ['Royaume mossi (actuel Burkina Faso)'],
      allies: ['Armée songhaï (Sonni Ali)'],
      vainqueur: 'Songhaï',
      consequences: "Les cavaliers mossis avaient pillé Oualata vers 1480. En 1483, Sonni Ali les bat et les repousse vers le sud, ce qui protège les terres agricoles de la boucle du Niger.",
    },
    {
      id: 'canal',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Un canal dans le désert ?',
      body:
        "Selon le Tarikh al-Sudan, Sonni Ali fait creuser, à la fin de son règne, un canal pour relier le Niger à la ville de Oualata, située en plein Sahel. Le chantier est abandonné. Ce projet montre l'importance du fleuve pour déplacer les armées.",
    },
    {
      id: 'duree',
      tier: 2,
      type: 'keyfigure',
      kicker: 'Durée',
      value: '28 ans',
      label: 'de règne, presque tous passés en campagne',
      caption: "Sonni Ali ne s'installe presque jamais dans sa capitale : il se déplace sans cesse avec son armée, d'une guerre à l'autre.",
    },
    {
      id: 'mali',
      tier: 2,
      type: 'text',
      kicker: 'Fluctuations',
      title: 'Le relais du Mali',
      body:
        "Au XVe siècle, le Mali s'affaiblit : les Touaregs lui prennent Tombouctou vers 1433. Les Songhaï profitent de ce vide pour s'emparer des grandes villes du Niger. Le centre du pouvoir dans le Sahel passe du pays mandingue à Gao.",
    },
  ],

  quiz: [
    { id: 'fleuve', type: 'mcq', prompt: 'Le long de quel fleuve vivent les Songhaï ?', options: ['Le Niger', 'Le Nil', 'Le Congo', 'Le Sénégal'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: "Quelle est la capitale de l'Empire songhaï ?", options: ['Gao', 'Tombouctou', 'Djenné', 'Koumbi Saleh'], answer: 0 },
    { id: 'vassal', type: 'mcq', prompt: 'De quel empire Gao est-elle vassale au XIVe siècle ?', options: ['Le Mali', 'Le Ghana', 'Le Maroc', 'Le Kongo'], answer: 0 },
    { id: 'fondateur', type: 'mcq', prompt: "Quel souverain fonde l'Empire songhaï à partir de 1464 ?", options: ['Sonni Ali', 'Askia Mohammed', 'Mansa Moussa', 'Soundiata Keïta'], answer: 0 },
    { id: 'ber', type: 'mcq', prompt: 'Que signifie le surnom « Ber » de Sonni Ali ?', options: ['Le Grand', 'Le Pieux', 'Le Cruel', 'Le Sage'], answer: 0 },
    { id: 'tombouctou', type: 'mcq', prompt: 'Qui Sonni Ali chasse-t-il de Tombouctou en 1468 ?', options: ['Les Touaregs', 'Les Portugais', 'Les Marocains', 'Les Mossis'], answer: 0 },
    { id: 'savants', type: 'tf', prompt: 'Sonni Ali protège et honore tous les savants de Tombouctou.', answer: false, explanation: "Il persécute des savants qu'il accuse d'avoir soutenu les Touaregs." },
    { id: 'djenne', type: 'mcq', prompt: 'Quelle ville marchande se rend vers 1473 après un très long siège ?', options: ['Djenné', 'Gao', 'Oualata', 'Le Caire'], answer: 0 },
    { id: 'siege', type: 'mcq', prompt: 'Selon la chronique, combien de temps dure le siège de Djenné ?', options: ['Sept ans, sept mois et sept jours', 'Sept jours', 'Trois mois', 'Cent ans'], answer: 0 },
    { id: 'armee', type: 'mcq', prompt: "Sur quoi repose la force militaire de Sonni Ali ?", options: ['La cavalerie et une flotte de pirogues', 'Les éléphants de guerre', 'Les canons', 'Les navires de haute mer'], answer: 0 },
    { id: 'mossis', type: 'mcq', prompt: 'Quel peuple Sonni Ali repousse-t-il en 1483 ?', options: ['Les Mossis', 'Les Almoravides', 'Les Romains', 'Les Zoulous'], answer: 0 },
    { id: 'religion', type: 'tf', prompt: 'Sonni Ali mêle islam et cultes traditionnels songhaï.', answer: true },
    { id: 'chroniques', type: 'mcq', prompt: 'Quelle chronique de Tombouctou raconte le règne de Sonni Ali ?', options: ['Le Tarikh al-Sudan', "L'Épopée de Soundiata", 'Le Périple de la mer Érythrée', 'La Chanson de Roland'], answer: 0 },
    { id: 'hostile', type: 'tf', prompt: 'Les chroniqueurs musulmans de Tombouctou présentent Sonni Ali comme un tyran.', answer: true },
    { id: 'mort', type: 'mcq', prompt: 'En quelle année meurt Sonni Ali ?', options: ['1492', '1464', '1591', '1324'], answer: 0 },
    { id: 'askia', type: 'mcq', prompt: 'Quelle dynastie prend le pouvoir après les Sonni, en 1493 ?', options: ['Les Askia', 'Les Keïta', 'Les Almoravides', 'Les Saadiens'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Les Touaregs prennent Tombouctou au Mali', 'Sonni Ali devient roi', 'Prise de Tombouctou par Sonni Ali', 'Reddition de Djenné', 'Mort de Sonni Ali'] },
  ],

  recap: [
    'Gao, royaume songhaï du Niger, longtemps vassal du Mali',
    '1464-1492 : Sonni Ali, conquérant jamais vaincu selon la tradition',
    'Prise de Tombouctou (1468) et de Djenné (vers 1473)',
    'Un roi entre islam et traditions, jugé sévèrement par les lettrés',
  ],
}

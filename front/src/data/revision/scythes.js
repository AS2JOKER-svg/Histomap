/** Chapitre rédigé : Cavaliers scythes (≈ 800 – 300 av. J.-C.). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'nomades',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Des nomades des steppes',
      body:
        "Les Scythes sont des peuples nomades parlant une langue iranienne. À partir du VIIIe-VIIe siècle av. J.-C., ils dominent les steppes au nord de la mer Noire (l'Ukraine et le sud de la Russie actuels). Ils vivent dans des chariots et sous des tentes, avec leurs troupeaux de chevaux, de moutons et de bœufs.",
      highlight: { value: '≈ VIIe siècle av. J.-C.', label: 'les Scythes s’installent au nord de la mer Noire' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Les steppes scythes',
      years: [-700, -400],
      caption: "Les steppes forment un immense couloir d'herbe qui va de l'Europe de l'Est jusqu'à la Mongolie.",
    },
    {
      id: 'archers',
      tier: 1,
      type: 'text',
      kicker: 'Guerre',
      title: 'Des archers à cheval',
      body:
        "Les Scythes font partie des premiers grands peuples d'archers à cheval. Leur arc composite, court et puissant (bois, corne et tendon collés), permet de tirer au galop. Ils montent sans étriers, qui n'apparaîtront que bien plus tard, et portent des pantalons, très pratiques pour monter à cheval.",
    },
    {
      id: 'herodote',
      tier: 1,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Hérodote, notre principale source',
      body:
        "Les Scythes n'écrivent pas. Le Grec Hérodote leur consacre au Ve siècle av. J.-C. tout un livre de ses Histoires, en mêlant observations et récits fabuleux. L'archéologie des tombes confirme souvent ses descriptions.",
    },
    {
      id: 'darius',
      tier: 1,
      type: 'war',
      nom: 'Expédition de Darius contre les Scythes',
      annee: -513,
      adversaires: ['Empire perse (Darius Ier)'],
      allies: ['Scythes'],
      vainqueur: 'Scythes',
      consequences: "Les Scythes refusent la bataille : ils reculent dans la steppe, comblent les puits et brûlent l'herbe. Épuisée, l'armée perse doit faire demi-tour (date approximative).",
    },
    {
      id: 'kourganes',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Les kourganes',
      body:
        "Les rois scythes sont enterrés sous d'immenses tertres de terre, les kourganes. Selon Hérodote, on sacrifie avec eux des serviteurs et des chevaux. Les fouilles confirment la présence de nombreux squelettes de chevaux autour des tombes royales.",
    },
    {
      id: 'pectoral',
      tier: 1,
      type: 'keyfigure',
      kicker: "Âge d'or",
      value: '≈ 1,1 kg',
      label: "d'or dans le pectoral de Tolstaïa Moguila",
      caption: "Ce collier découvert en 1971 en Ukraine (IVe siècle av. J.-C.) montre des scènes de la vie scythe et des combats d'animaux, sans doute réalisé par des orfèvres grecs pour un roi scythe.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Fluctuations',
      title: 'Grandeur et déclin des Scythes',
      items: [
        { year: -700, label: 'Les Scythes dominent la steppe pontique (vers)' },
        { year: -513, label: 'Darius Ier échoue face aux Scythes (vers)' },
        { year: -339, label: 'Le roi Atéas est tué face à Philippe II' },
        { year: -300, label: 'Les Sarmates repoussent les Scythes (vers)' },
      ],
    },
    {
      id: 'ateas',
      tier: 1,
      type: 'person',
      nom: 'Atéas',
      role: 'Roi scythe',
      dates: 'mort en 339 av. J.-C.',
      description: "Ce roi étend son pouvoir jusqu'au Danube. Âgé, selon les auteurs anciens, de plus de 90 ans, il est tué en combattant l'armée de Philippe II de Macédoine, le père d'Alexandre le Grand.",
    },

    // ── Niveau 2 ──
    {
      id: 'art-animalier',
      tier: 2,
      type: 'text',
      kicker: 'Culture',
      title: "L'art animalier",
      body:
        "Les Scythes décorent armes, harnais et bijoux de cerfs, de félins, de griffons et d'oiseaux, souvent enroulés ou en plein combat. Ce style animalier se retrouve dans toutes les steppes, jusqu'à l'Altaï.",
    },
    {
      id: 'chanvre',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Des bains de vapeur au chanvre',
      body:
        "Hérodote raconte que les Scythes jettent des graines de chanvre sur des pierres brûlantes, sous une petite tente, et poussent des cris de joie. Des archéologues ont retrouvé dans des tombes de l'Altaï des braseros et des graines de chanvre.",
    },
    {
      id: 'grecs',
      tier: 2,
      type: 'text',
      kicker: 'Monde',
      title: 'Commerce avec les Grecs',
      body:
        "Les cités grecques fondées au bord de la mer Noire, comme Olbia, achètent aux Scythes du blé, des esclaves et des peaux. En échange, ils reçoivent du vin, de l'huile et des objets d'orfèvrerie.",
    },
    {
      id: 'message',
      tier: 2,
      type: 'text',
      kicker: 'Guerre',
      title: 'Un étrange message',
      body:
        "Selon Hérodote, les Scythes envoient à Darius un oiseau, une souris, une grenouille et cinq flèches. Sens possible : « Si vous ne vous envolez pas comme des oiseaux, ne vous cachez pas sous terre ou dans l'eau, vous périrez sous nos flèches. »",
    },
    {
      id: 'heritage',
      tier: 2,
      type: 'text',
      kicker: 'Fin',
      title: 'La fin des Scythes',
      body:
        "À partir du IIIe siècle av. J.-C., d'autres nomades, les Sarmates, s'emparent des steppes. Un petit royaume scythe survit en Crimée jusqu'au IIIe siècle apr. J.-C. Les trésors scythes sont aujourd'hui exposés notamment à Saint-Pétersbourg et à Kiev.",
    },
  ],

  quiz: [
    { id: 'mode-vie', type: 'mcq', prompt: 'Quel est le mode de vie des Scythes ?', options: ['Nomades éleveurs', 'Agriculteurs en grandes villes', 'Marins commerçants', 'Chasseurs de la forêt tropicale'], answer: 0 },
    { id: 'region', type: 'mcq', prompt: 'Où les Scythes dominent-ils à partir du VIIe siècle av. J.-C. ?', options: ['Au nord de la mer Noire', 'En Égypte', 'En Gaule', 'En Inde du Sud'], answer: 0 },
    { id: 'langue', type: 'mcq', prompt: 'À quelle famille de langues appartient la langue des Scythes ?', options: ['Les langues iraniennes', 'Les langues sémitiques', 'Les langues celtiques', 'Les langues turques'], answer: 0 },
    { id: 'arc', type: 'mcq', prompt: 'Quelle arme fait la force des Scythes ?', options: ['L’arc tiré à cheval', 'La catapulte', 'Le char de guerre lourd', 'La sarisse'], answer: 0 },
    { id: 'etriers', type: 'tf', prompt: 'Les Scythes utilisent déjà des étriers.', answer: false, explanation: 'Les étriers apparaissent bien plus tard, vers le IVe siècle apr. J.-C.' },
    { id: 'herodote', type: 'mcq', prompt: 'Quel auteur grec décrit longuement les Scythes ?', options: ['Hérodote', 'Homère', 'Platon', 'César'], answer: 0 },
    { id: 'ecriture', type: 'tf', prompt: 'Les Scythes ont laissé leurs propres archives écrites.', answer: false, explanation: 'Ils n’écrivent pas : on les connaît par les Grecs et par l’archéologie.' },
    { id: 'darius', type: 'mcq', prompt: 'Quel roi perse échoue à soumettre les Scythes vers 513 av. J.-C. ?', options: ['Darius Ier', 'Cyrus II', 'Xerxès', 'Darius III'], answer: 0 },
    { id: 'tactique', type: 'mcq', prompt: 'Quelle tactique les Scythes utilisent-ils contre les Perses ?', options: ['Reculer en dévastant le terrain', 'Une grande bataille rangée', 'Un siège de Persépolis', 'Une attaque navale'], answer: 0 },
    { id: 'kourgane', type: 'mcq', prompt: 'Comment appelle-t-on les tertres funéraires des steppes ?', options: ['Des kourganes', 'Des pyramides', 'Des ziggourats', 'Des dolmens'], answer: 0 },
    { id: 'chevaux', type: 'tf', prompt: 'Des chevaux sont sacrifiés lors des funérailles des rois scythes.', answer: true },
    { id: 'pectoral', type: 'mcq', prompt: 'Dans quel pays actuel a été trouvé le pectoral d’or de Tolstaïa Moguila ?', options: ['L’Ukraine', 'La Grèce', 'L’Iran', 'La Mongolie'], answer: 0 },
    { id: 'art', type: 'mcq', prompt: 'Quel style décore les objets scythes ?', options: ['Le style animalier', 'Le style gothique', 'La peinture à l’huile', 'La calligraphie'], answer: 0 },
    { id: 'ateas', type: 'mcq', prompt: 'Qui bat et tue le roi scythe Atéas en 339 av. J.-C. ?', options: ['Philippe II de Macédoine', 'Darius Ier', 'Jules César', 'Cyrus II'], answer: 0 },
    { id: 'sarmates', type: 'mcq', prompt: 'Quels nomades remplacent les Scythes dans les steppes ?', options: ['Les Sarmates', 'Les Mongols', 'Les Vikings', 'Les Huns'], answer: 0 },
    { id: 'olbia', type: 'mcq', prompt: 'Que vendent surtout les Scythes aux cités grecques comme Olbia ?', options: ['Du blé', 'Du papyrus', 'De la soie', 'Des épices d’Inde'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Arrivée des Scythes au nord de la mer Noire', 'Expédition de Darius Ier', 'Mort du roi Atéas', 'Royaume scythe réduit à la Crimée'] },
  ],

  recap: [
    'Nomades de langue iranienne au nord de la mer Noire',
    'Archers à cheval qui font reculer Darius Ier',
    'Kourganes, chevaux sacrifiés et or au style animalier',
    'Remplacés par les Sarmates à partir du IIIe siècle av. J.-C.',
  ],
}

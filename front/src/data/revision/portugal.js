/** Chapitre rédigé : Portugal et son empire (1139 – 1822). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'naissance',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Un royaume né de la Reconquista',
      body:
        "En 1139, Alphonse Henriques se proclame roi de Portugal. En 1147, il prend Lisbonne aux musulmans. Au XIIIe siècle, le royaume atteint ses frontières actuelles, parmi les plus anciennes d'Europe.",
      highlight: { value: '1139', label: 'naissance du royaume' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le Portugal et ses comptoirs',
      years: [1300, 1700],
      caption: 'Comparez : au petit royaume de 1300 s’ajoutent, vers 1700, des comptoirs et des colonies sur plusieurs continents.',
    },
    {
      id: 'aljubarrota',
      tier: 1,
      type: 'war',
      nom: 'Bataille d’Aljubarrota',
      annee: 1385,
      adversaires: ['Royaume de Castille'],
      allies: ['Portugal (Jean Ier)', 'Archers anglais'],
      vainqueur: 'Portugal (Jean Ier)',
      consequences:
        "La victoire assure l'indépendance du Portugal face à la Castille. En 1386, le traité de Windsor scelle l'alliance avec l'Angleterre, la plus ancienne toujours en vigueur.",
    },
    {
      id: 'henri',
      tier: 1,
      type: 'person',
      nom: 'Henri le Navigateur',
      role: 'Prince portugais',
      dates: '1394 – 1460',
      description:
        "Fils du roi Jean Ier, il finance les premières expéditions le long des côtes de l'Afrique, sans presque jamais naviguer lui-même. En 1434, ses marins franchissent le cap Bojador.",
    },
    {
      id: 'inde',
      tier: 1,
      type: 'text',
      kicker: 'Explorations',
      title: 'La route des Indes',
      body:
        "En 1488, Bartolomeu Dias contourne le sud de l'Afrique. En 1498, Vasco de Gama atteint l'Inde par la mer. Deux ans plus tard, Pedro Álvares Cabral aborde le Brésil.",
    },
    {
      id: 'empire',
      tier: 1,
      type: 'text',
      kicker: 'Empire',
      title: 'Un empire mondial',
      body:
        "Le Portugal bâtit un empire de comptoirs et de colonies : en Afrique, au Brésil, en Inde (Goa), en Chine (Macao). Ses navires participent massivement à la traite des Africains réduits en esclavage.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Le Portugal en dates',
      items: [
        { year: 1139, label: 'Naissance du royaume' },
        { year: 1385, label: 'Bataille d’Aljubarrota' },
        { year: 1498, label: 'Vasco de Gama en Inde' },
        { year: 1580, label: 'Union avec l’Espagne' },
        { year: 1755, label: 'Séisme de Lisbonne' },
        { year: 1822, label: 'Indépendance du Brésil' },
      ],
    },
    {
      id: 'union',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Soixante ans avec l’Espagne',
      body:
        "En 1578, le jeune roi Sébastien disparaît à la bataille des Trois Rois, au Maroc. En 1580, le roi d'Espagne devient roi de Portugal. Le pays retrouve son indépendance en 1640.",
    },
    {
      id: 'lisbonne',
      tier: 1,
      type: 'text',
      kicker: 'Catastrophe',
      title: 'Le séisme de 1755',
      body:
        "Le 1er novembre 1755, un tremblement de terre, un tsunami et des incendies détruisent Lisbonne. Le ministre Pombal reconstruit la ville selon un plan régulier.",
    },

    // ── Niveau 2 ──
    {
      id: 'caravelle',
      tier: 2,
      type: 'text',
      kicker: 'Techniques',
      title: 'La caravelle',
      body:
        "Les Portugais perfectionnent la caravelle, un navire léger capable de remonter au vent, indispensable pour revenir des côtes africaines.",
    },
    {
      id: 'camoes',
      tier: 2,
      type: 'text',
      kicker: 'Littérature',
      title: 'Les Lusiades',
      body:
        "En 1572, le poète Luís de Camões publie Les Lusiades, une épopée qui chante le voyage de Vasco de Gama. C'est le grand poème national portugais.",
    },
    {
      id: 'bresil',
      tier: 2,
      type: 'text',
      kicker: 'Fin',
      title: 'La cour au Brésil',
      body:
        "En 1807, fuyant l'invasion des troupes de Napoléon, la famille royale part s'installer à Rio de Janeiro. En 1822, le Brésil proclame son indépendance.",
    },
    {
      id: 'azulejos',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'Les azulejos',
      body:
        "Les murs des églises et des maisons portugaises se couvrent d'azulejos, des carreaux de faïence souvent peints en bleu.",
    },
    {
      id: 'langue',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Une langue mondiale',
      body:
        "Le portugais est parlé au Portugal, au Brésil, en Angola, au Mozambique et ailleurs, par plus de 250 millions de personnes.",
    },
  ],

  quiz: [
    { id: 'peninsule', type: 'mcq', prompt: 'Dans quelle péninsule se trouve le Portugal ?', options: ['La péninsule Ibérique', 'La péninsule italienne', 'La péninsule balkanique', 'La péninsule scandinave'], answer: 0 },
    { id: 'roi', type: 'mcq', prompt: 'Qui est le premier roi de Portugal ?', options: ['Alphonse Henriques', 'Manuel Ier', 'Jean Ier', 'Sébastien Ier'], answer: 0 },
    { id: 'lisbonne', type: 'mcq', prompt: 'Quelle ville les Portugais prennent-ils aux musulmans en 1147 ?', options: ['Lisbonne', 'Madrid', 'Séville', 'Grenade'], answer: 0 },
    { id: 'aljubarrota', type: 'mcq', prompt: 'Contre quel royaume le Portugal gagne-t-il à Aljubarrota en 1385 ?', options: ['La Castille', 'La France', 'Le Maroc', 'L’Angleterre'], answer: 0 },
    { id: 'windsor', type: 'mcq', prompt: 'Avec quel pays le Portugal a-t-il la plus ancienne alliance du monde encore en vigueur ?', options: ['L’Angleterre', 'La France', 'L’Espagne', 'Le Brésil'], answer: 0 },
    { id: 'henri', type: 'mcq', prompt: 'Quel prince encourage les premières explorations portugaises ?', options: ['Henri le Navigateur', 'Vasco de Gama', 'Christophe Colomb', 'Magellan'], answer: 0 },
    { id: 'navigue', type: 'tf', prompt: 'Henri le Navigateur a lui-même dirigé de nombreuses expéditions en mer.', answer: false, explanation: 'Il finance et organise les expéditions, mais ne navigue presque jamais lui-même.' },
    { id: 'dias', type: 'mcq', prompt: 'Qui contourne le sud de l’Afrique en 1488 ?', options: ['Bartolomeu Dias', 'Vasco de Gama', 'Cabral', 'Magellan'], answer: 0 },
    { id: 'gama', type: 'mcq', prompt: 'Quel pays Vasco de Gama atteint-il par la mer en 1498 ?', options: ['L’Inde', 'La Chine', 'Le Brésil', 'Le Japon'], answer: 0 },
    { id: 'caravelle', type: 'mcq', prompt: 'Comment s’appelle le navire léger des explorateurs portugais ?', options: ['La caravelle', 'La galère', 'Le drakkar', 'La jonque'], answer: 0 },
    { id: 'espagne', type: 'mcq', prompt: 'Avec quel pays le Portugal partage-t-il son roi de 1580 à 1640 ?', options: ['L’Espagne', 'La France', 'L’Angleterre', 'Le Brésil'], answer: 0 },
    { id: 'seisme', type: 'mcq', prompt: 'Quelle catastrophe frappe Lisbonne en 1755 ?', options: ['Un tremblement de terre et un tsunami', 'Une éruption volcanique', 'Une épidémie de peste', 'Une invasion mongole'], answer: 0 },
    { id: 'camoes', type: 'mcq', prompt: 'Quel poète écrit Les Lusiades ?', options: ['Luís de Camões', 'Dante', 'Cervantès', 'Shakespeare'], answer: 0 },
    { id: 'cour', type: 'mcq', prompt: 'Où s’installe la cour du Portugal en 1807 ?', options: ['À Rio de Janeiro', 'À Londres', 'À Goa', 'À Madrid'], answer: 0 },
    { id: 'traite', type: 'tf', prompt: 'Les navires portugais ont participé massivement à la traite des Africains.', answer: true },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Naissance du royaume', 'Bataille d’Aljubarrota', 'Vasco de Gama en Inde', 'Séisme de Lisbonne'] },
  ],

  recap: [
    '1139 : naissance du royaume ; Aljubarrota (1385) assure son indépendance',
    'Henri le Navigateur, Dias, Vasco de Gama : la route maritime des Indes',
    'Un empire mondial de comptoirs et de colonies, fondé en partie sur la traite',
    'Union avec l’Espagne (1580-1640), séisme de 1755, indépendance du Brésil (1822)',
  ],
}

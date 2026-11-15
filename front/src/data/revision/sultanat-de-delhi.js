/** Chapitre rédigé : Sultanat de Delhi (1206 – 1526). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'fondation',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Un esclave devenu sultan',
      body:
        "À la fin du XIIe siècle, Muhammad de Ghor, un souverain de l'Afghanistan actuel, conquiert le nord de l'Inde. À sa mort, en 1206, son général Qutb ud-Din Aibak, un ancien esclave militaire, devient le premier sultan de Delhi.",
      highlight: { value: '1206', label: 'premier sultan de Delhi' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le sultanat de Delhi',
      years: [1300, 1400],
      caption: 'Comparez : vers 1300, le sultanat domine le nord de l’Inde ; un siècle plus tard, il s’est beaucoup réduit.',
    },
    {
      id: 'dynasties',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Cinq dynasties',
      body:
        "En un peu plus de trois siècles, cinq dynasties d'origine turque ou afghane se succèdent : les Mamelouks, les Khalji, les Tughluq, les Sayyid et les Lodi. Elles gouvernent en persan un pays majoritairement hindou.",
    },
    {
      id: 'razia',
      tier: 1,
      type: 'person',
      nom: 'Razia',
      role: 'Sultane de Delhi',
      dates: 'règne 1236 – 1240',
      description:
        "Choisie par son père Iltutmish de préférence à ses fils, elle est la seule femme à avoir régné sur Delhi. Elle commande elle-même l'armée, mais une partie des nobles la renverse au bout de quatre ans.",
    },
    {
      id: 'mongols',
      tier: 1,
      type: 'war',
      nom: 'Invasions mongoles de l’Inde',
      annee: 1299,
      adversaires: ['Mongols du khanat de Djaghataï'],
      allies: ['Sultanat de Delhi (Alauddin Khalji)'],
      vainqueur: 'Sultanat de Delhi',
      consequences:
        "Entre 1297 et 1306, Alauddin Khalji repousse plusieurs grandes invasions mongoles, dont un siège de Delhi. Le nord de l'Inde échappe à la domination mongole.",
    },
    {
      id: 'tughluq',
      tier: 1,
      type: 'person',
      nom: 'Muhammad ibn Tughluq',
      role: 'Sultan',
      dates: 'règne 1325 – 1351',
      description:
        "Savant et ambitieux, il règne sur le plus grand territoire du sultanat. Mais plusieurs de ses projets échouent : il déplace la capitale dans le Dekkan, puis revient, et sa monnaie de cuivre est massivement contrefaite.",
    },
    {
      id: 'qutb',
      tier: 1,
      type: 'text',
      kicker: 'Architecture',
      title: 'Le Qutb Minar',
      body:
        "Commencé vers 1200, ce minaret de grès d'environ 73 mètres marque l'arrivée de l'architecture islamique en Inde, avec ses arcs et ses coupoles. La mosquée voisine est construite avec des pierres de temples détruits.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Le sultanat de Delhi en dates',
      items: [
        { year: 1206, label: 'Premier sultan' },
        { year: 1236, label: 'Razia sultane' },
        { year: 1296, label: 'Alauddin Khalji' },
        { year: 1398, label: 'Tamerlan pille Delhi' },
        { year: 1526, label: 'Bataille de Panipat' },
      ],
    },
    {
      id: 'panipat',
      tier: 1,
      type: 'war',
      nom: 'Première bataille de Panipat',
      annee: 1526,
      adversaires: ['Babur'],
      allies: ['Sultanat de Delhi (Ibrahim Lodi)'],
      vainqueur: 'Babur',
      consequences:
        "Avec une petite armée équipée de canons, Babur bat le dernier sultan, Ibrahim Lodi, qui est tué. Le sultanat disparaît et l'empire moghol commence.",
    },

    // ── Niveau 2 ──
    {
      id: 'battuta',
      tier: 2,
      type: 'text',
      kicker: 'Sources',
      title: 'Ibn Battuta, juge à Delhi',
      body:
        "En 1334, le voyageur marocain Ibn Battuta arrive à Delhi. Muhammad ibn Tughluq le nomme juge, puis l'envoie comme ambassadeur en Chine. Son récit décrit une cour fastueuse et un sultan imprévisible.",
    },
    {
      id: 'tamerlan',
      tier: 2,
      type: 'war',
      nom: 'Campagne de Tamerlan en Inde',
      annee: 1398,
      adversaires: ['Tamerlan'],
      allies: ['Sultanat de Delhi'],
      vainqueur: 'Tamerlan',
      consequences: "Le conquérant turco-mongol pille Delhi et massacre une partie de ses habitants. Le sultanat ne s'en relève pas.",
    },
    {
      id: 'jizya',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Musulmans et hindous',
      body:
        "Les non-musulmans paient en général un impôt particulier, la jizya, en échange de la protection du souverain. Des temples sont détruits lors des conquêtes, mais des saints soufis attirent des fidèles de toutes origines.",
    },
    {
      id: 'khusrau',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'Amir Khusrau',
      body:
        "Poète à la cour de plusieurs sultans, il écrit en persan et en hindavi, une langue du nord de l'Inde. La tradition lui attribue des innovations musicales encore célébrées aujourd'hui.",
    },
    {
      id: 'hindoustani',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Une langue nouvelle',
      body:
        "Les échanges entre le persan et les langues locales donnent naissance à l'hindoustani, l'ancêtre de l'hindi et de l'ourdou, parlés aujourd'hui par des centaines de millions de personnes.",
    },
  ],

  quiz: [
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale du sultanat ?', options: ['Delhi', 'Pataliputra', 'Bombay', 'Lahore'], answer: 0 },
    { id: 'premier', type: 'mcq', prompt: 'Qui est le premier sultan de Delhi, en 1206 ?', options: ['Qutb ud-Din Aibak', 'Babur', 'Tamerlan', 'Akbar'], answer: 0 },
    { id: 'esclave', type: 'tf', prompt: 'Le premier sultan de Delhi est un ancien esclave militaire.', answer: true },
    { id: 'dynasties', type: 'mcq', prompt: 'Combien de dynasties se succèdent à la tête du sultanat ?', options: ['Cinq', 'Une', 'Deux', 'Douze'], answer: 0 },
    { id: 'razia', type: 'mcq', prompt: 'Qui est la seule femme à avoir régné sur Delhi ?', options: ['Razia', 'Cléopâtre', 'Ahilyabai', 'Nana Asma’u'], answer: 0 },
    { id: 'langue', type: 'mcq', prompt: 'Quelle langue utilise la cour du sultan ?', options: ['Le persan', 'Le latin', 'Le chinois', 'Le grec'], answer: 0 },
    { id: 'mongols', type: 'mcq', prompt: 'Quels envahisseurs Alauddin Khalji repousse-t-il ?', options: ['Les Mongols', 'Les Britanniques', 'Les Romains', 'Les Portugais'], answer: 0 },
    { id: 'monnaie', type: 'mcq', prompt: 'Pourquoi la monnaie de cuivre de Muhammad ibn Tughluq échoue-t-elle ?', options: ['Les faux se multiplient', 'Le cuivre manque', 'Elle est trop lourde', 'Les marchands refusent l’argent'], answer: 0 },
    { id: 'daulatabad', type: 'tf', prompt: 'Muhammad ibn Tughluq déplace un temps la capitale dans le Dekkan.', answer: true },
    { id: 'qutb', type: 'mcq', prompt: 'Quel monument de Delhi date du début du sultanat ?', options: ['Le Qutb Minar', 'Le Taj Mahal', 'Le Fort Rouge', 'La porte de l’Inde'], answer: 0 },
    { id: 'battuta', type: 'mcq', prompt: 'Quel voyageur devient juge à Delhi ?', options: ['Ibn Battuta', 'Marco Polo', 'Faxian', 'Christophe Colomb'], answer: 0 },
    { id: 'tamerlan', type: 'mcq', prompt: 'Qui pille Delhi en 1398 ?', options: ['Tamerlan', 'Gengis Khan', 'Nader Shah', 'Babur'], answer: 0 },
    { id: 'jizya', type: 'mcq', prompt: 'Comment s’appelle l’impôt payé en général par les non-musulmans ?', options: ['La jizya', 'La dîme', 'La gabelle', 'Le tribut'], answer: 0 },
    { id: 'panipat', type: 'mcq', prompt: 'Quelle bataille met fin au sultanat en 1526 ?', options: ['Panipat', 'Talikota', 'Plassey', 'Waterloo'], answer: 0 },
    { id: 'hindoustani', type: 'mcq', prompt: 'De quelle langue l’hindi et l’ourdou descendent-ils ?', options: ['L’hindoustani', 'Le latin', 'Le sanskrit seul', 'L’arabe'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Premier sultan', 'Razia sultane', 'Tamerlan pille Delhi', 'Bataille de Panipat'] },
  ],

  recap: [
    '1206 : un ancien esclave militaire devient le premier sultan de Delhi',
    'Cinq dynasties gouvernent en persan un pays majoritairement hindou',
    'Razia, Alauddin Khalji face aux Mongols, Muhammad ibn Tughluq',
    'Pillage par Tamerlan (1398), puis fin à Panipat (1526) : place aux Moghols',
  ],
}

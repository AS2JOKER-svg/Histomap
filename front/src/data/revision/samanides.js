/** Chapitre rédigé : Émirat samanide (819 – 999). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'origines',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Des gouverneurs du calife',
      body:
        "En 819, le calife abbasside de Bagdad confie le gouvernement de villes d'Asie centrale, comme Samarcande, aux petits-fils de Saman, un noble persan converti à l'islam. Leurs descendants deviennent les maîtres de la région.",
      highlight: { value: '819', label: 'les Samanides gouverneurs' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'L’émirat samanide vers 900',
      years: [900],
      caption: 'De la mer d’Aral à l’Afghanistan, les Samanides gouvernent l’Asie centrale et l’est de l’Iran.',
    },
    {
      id: 'ismail',
      tier: 1,
      type: 'person',
      nom: 'Ismaïl Samani',
      role: 'Émir samanide',
      dates: 'règne 892 – 907',
      description:
        "Il fait de Boukhara sa capitale et bat en 900 la dynastie rivale des Saffarides. Il gouverne au nom du calife, mais en toute indépendance. Au Tadjikistan, il est aujourd'hui un héros national.",
    },
    {
      id: 'boukhara',
      tier: 1,
      type: 'text',
      kicker: 'Savoirs',
      title: 'Boukhara, ville des savants',
      body:
        "Boukhara devient l'une des capitales de la culture du monde musulman. Ses bibliothèques sont célèbres : le jeune Avicenne, futur grand médecin et philosophe, étudie dans celle de l'émir Nuh II, qu'il a soigné.",
    },
    {
      id: 'persan',
      tier: 1,
      type: 'text',
      kicker: 'Langue',
      title: 'La renaissance du persan',
      body:
        "Depuis la conquête arabe, l'arabe domine l'écrit. À la cour samanide, la poésie renaît en persan, écrit désormais en alphabet arabe. Le poète Roudaki est considéré comme le père de la poésie persane classique.",
    },
    {
      id: 'shahnameh',
      tier: 1,
      type: 'text',
      kicker: 'Arts',
      title: 'Le Livre des rois',
      body:
        "Vers 977, le poète Ferdowsi commence le Shahnameh, le « Livre des rois » : 50 000 vers qui racontent l'histoire de l'Iran, des rois légendaires à la conquête arabe. C'est l'épopée nationale iranienne.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les Samanides en dates',
      items: [
        { year: 819, label: 'Gouverneurs au nom du calife' },
        { year: 892, label: 'Ismaïl Ier, capitale Boukhara' },
        { year: 900, label: 'Victoire sur les Saffarides' },
        { year: 977, label: 'Ferdowsi commence le Shahnameh' },
        { year: 999, label: 'Chute de Boukhara' },
      ],
    },
    {
      id: 'argent',
      tier: 1,
      type: 'text',
      kicker: 'Commerce',
      title: 'Des pièces jusqu’en Scandinavie',
      body:
        "Les Samanides commercent avec les peuples des steppes, de la Volga et de l'Europe du Nord. Des milliers de leurs pièces d'argent, les dirhams, ont été retrouvées en Russie et en Scandinavie, dans des trésors vikings.",
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Remplacés par des Turcs',
      body:
        "L'armée samanide repose sur des soldats d'origine turque, qui prennent peu à peu le pouvoir. En 999, les Karakhanides, des Turcs musulmans venus de l'est, prennent Boukhara ; les Ghaznévides, d'anciens soldats des Samanides, prennent le reste.",
    },

    // ── Niveau 2 ──
    {
      id: 'mausolee',
      tier: 2,
      type: 'text',
      kicker: 'Architecture',
      title: 'Le mausolée des Samanides',
      body:
        "À Boukhara, l'émir Ismaïl repose dans un petit mausolée de brique dont les murs forment un décor en relief, comme une vannerie. Enfoui sous la terre pendant des siècles, il a été dégagé dans les années 1930.",
    },
    {
      id: 'papier',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Le papier de Samarcande',
      body:
        "Samarcande fabrique du papier, une technique venue de Chine. Le papier, moins cher que le parchemin, se diffuse dans tout le monde musulman et favorise la multiplication des livres.",
    },
    {
      id: 'roudaki',
      tier: 2,
      type: 'person',
      nom: 'Roudaki',
      role: 'Poète',
      dates: 'vers 858 – vers 941',
      description: "Poète de la cour de l'émir Nasr II, il chante l'amour, le vin et la sagesse. Il est considéré comme le père de la poésie persane classique.",
    },
    {
      id: 'islam-turcs',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'La conversion des Turcs',
      body:
        "Musulmans sunnites, les Samanides soutiennent la diffusion de l'islam chez les peuples turcs des steppes, au nord de leur territoire. Au Xe siècle, beaucoup de ces peuples deviennent musulmans.",
    },
    {
      id: 'somoni',
      tier: 2,
      type: 'keyfigure',
      kicker: 'Héritage',
      value: 'Somoni',
      label: 'la monnaie du Tadjikistan, nommée d’après Ismaïl Samani',
      caption: "Pour les Tadjiks, qui parlent une langue persane, les Samanides sont les fondateurs de leur nation.",
    },
  ],

  quiz: [
    { id: 'region', type: 'mcq', prompt: 'Où se trouve l’émirat samanide ?', options: ['En Asie centrale', 'En Afrique du Nord', 'En Europe de l’Ouest', 'En Inde du Sud'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale des Samanides ?', options: ['Boukhara', 'Bagdad', 'Damas', 'Le Caire'], answer: 0 },
    { id: 'calife', type: 'mcq', prompt: 'Au nom de quel souverain les Samanides gouvernent-ils ?', options: ['Le calife abbasside', 'L’empereur de Chine', 'Le pape', 'Le roi de Perse'], answer: 0 },
    { id: 'origine', type: 'mcq', prompt: 'Quelle est l’origine de la famille samanide ?', options: ['Persane', 'Mongole', 'Grecque', 'Arabe'], answer: 0 },
    { id: 'ismail', type: 'mcq', prompt: 'Quel émir installe sa capitale à Boukhara en 892 ?', options: ['Ismaïl', 'Nuh II', 'Nasr II', 'Saman'], answer: 0 },
    { id: 'langue', type: 'mcq', prompt: 'Quelle langue renaît en littérature à la cour samanide ?', options: ['Le persan', 'Le latin', 'Le grec', 'Le chinois'], answer: 0 },
    { id: 'roudaki', type: 'mcq', prompt: 'Quel poète est considéré comme le père de la poésie persane classique ?', options: ['Roudaki', 'Homère', 'Dante', 'Li Bai'], answer: 0 },
    { id: 'ferdowsi', type: 'mcq', prompt: 'Qui écrit le Shahnameh, le « Livre des rois » ?', options: ['Ferdowsi', 'Avicenne', 'Roudaki', 'Omar Khayyam'], answer: 0 },
    { id: 'avicenne', type: 'mcq', prompt: 'Quel grand savant étudie dans la bibliothèque de l’émir Nuh II ?', options: ['Avicenne', 'Averroès', 'Isaac Newton', 'Aristote'], answer: 0 },
    { id: 'papier', type: 'mcq', prompt: 'Quelle technique venue de Chine Samarcande maîtrise-t-elle ?', options: ['La fabrication du papier', 'L’imprimerie', 'La poudre à canon', 'La boussole'], answer: 0 },
    { id: 'dirhams', type: 'tf', prompt: 'Des pièces samanides ont été retrouvées dans des trésors vikings en Scandinavie.', answer: true },
    { id: 'religion', type: 'mcq', prompt: 'Quelle est la religion des Samanides ?', options: ['L’islam sunnite', 'Le zoroastrisme', 'Le christianisme', 'Le bouddhisme'], answer: 0 },
    { id: 'fin', type: 'mcq', prompt: 'Qui prend Boukhara en 999 ?', options: ['Les Karakhanides', 'Les Mongols', 'Les Byzantins', 'Les Arabes'], answer: 0 },
    { id: 'somoni', type: 'mcq', prompt: 'Quel pays a nommé sa monnaie d’après Ismaïl Samani ?', options: ['Le Tadjikistan', 'L’Iran', 'La Turquie', 'L’Égypte'], answer: 0 },
    { id: 'mausolee', type: 'tf', prompt: 'Le mausolée des Samanides est construit en marbre blanc.', answer: false, explanation: 'Il est en brique, avec un décor de briques en relief.' },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Gouverneurs au nom du calife', 'Capitale à Boukhara', 'Ferdowsi commence le Shahnameh', 'Chute de Boukhara'] },
  ],

  recap: [
    '819 : une famille persane gouverne l’Asie centrale au nom du calife',
    'Ismaïl Samani fait de Boukhara une capitale de la culture',
    'Renaissance de la poésie en persan : Roudaki, Ferdowsi',
    '999 : les Turcs karakhanides et ghaznévides se partagent l’émirat',
  ],
}

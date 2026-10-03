/**
 * map-links.js — Lien entre la carte historique et les fiches HistoMap
 * =====================================================================
 *
 * TERRITORIES : pour chaque civilisation (id de epochs.json), les noms des
 * territoires dans les cartes historical-basemaps (champ NAME, ou SUBJECTO =
 * puissance dominante : les colonies prennent la couleur de leur empire).
 * Un territoire n'est relié que si l'année de la carte tombe dans la période
 * de la civilisation (ou, pour une civilisation trop courte, la carte la plus
 * proche) : « France » en 1300 → France capétienne, en 1900 → France contemporaine.
 *
 * Pour trouver un nom : public/map/index.json liste les territoires de chaque carte.
 * Civilisations absentes = pas de territoire identifiable sur ces cartes.
 */
export const TERRITORIES = {
  // ── Préhistoire ──
  'hominides-est': ['Homo erectus', 'Homo heidelbergensis'],
  'europe-paleo': ['Neanderthal'],
  'europe-neo': ['Funnel-Beaker', 'Dimini', 'Stentinello culture', 'La Almagra culture', 'Narva'],
  'mesopotamie-prehist': ['Ubaid', 'Levantine Corridor (Neolithic Farmers)', 'Amuq D', 'Ghassul'],
  'gobekli-tepe': ['Levantine Corridor (Neolithic Farmers)'],
  'caral-supe': ['Norte Chico'],

  // ── Antiquité ──
  egypte: ['Egypt'],
  carthage: ['Carthaginian Empire', 'Carthage'],
  koush: ['Kush', 'Kerma', 'Meroe', 'Kushites'],
  aksoum: ['Axum'],
  'minoen-mycenien': ['Minoan', 'Cycladic'],
  grece: ['Greek city-states', 'Greek colonies', 'Empire of Alexander'],
  etrusques: ['Etrurians'],
  rome: [
    'Rome', 'Roman Republic', 'Roman Empire', 'Western Roman Empire',
    'Rome (Constantinus)', 'Rome (Diocletianus)', 'Rome (Galerius)', 'Rome (Maximian)',
  ],
  celtes: ['Celts', 'Boii'],
  thraces: ['Thrace', 'Odrysian Kingdom'],
  iberes: ['Celtiberians'],
  scythes: ['Scythians', 'Proto-Scythian culture'],
  illyriens: ['Illyrians'],
  mesopotamie: ['Ur', 'Babylonia', 'Assyria'],
  perse: ['Achaemenid Empire'],
  hittites: ['Hittites'],
  hebreux: ['Kingdom of David and Solomon', 'Judea'],
  maurya: ['Mauryan Empire'],
  'chine-imperiale': ['Qin', 'Han Empire', 'Han'],
  xiongnu: ['Xiongnu', 'Southern Xiongnu'],
  gojoseon: ['Gojoseon'],
  olmeques: ['Olmec'],
  teotihuacan: ['Teotihuacan'],
  chavin: ['Chavin'],
  nazca: ['Nazca'],

  // ── Moyen Âge ──
  byzance: ['Eastern Roman Empire', 'Byzantine Empire'],
  francs: ['Franks', 'Frankish Kingdom', 'Carolingian Empire', 'West Francia', 'East Francia'],
  'france-capet': ['Kingdom of France', 'France'],
  serg: ['Holy Roman Empire'],
  angleterre: ['England', 'English territory', 'Angevin Empire'],
  vikings: ['Danes', 'Northmen', 'Swedes and Goths', 'Kingdom of Norway', 'Norway', 'Sweden', 'Denmark', 'Icelandic Commonwealth'],
  'rus-kiev': [
    "Rus' Khaganate", 'Kyivan Rus', 'Kievan Rus', 'Principality of Kyiv', 'Other Rus Principalities',
    'Principality of Novgorod', 'Principality of Vladimir-Suzdal', 'Principality of Galicia-Volhynia',
  ],
  'italie-maritime': ['Venice', 'Genoa'],
  'al-andalus': ['Emirate of Córdoba', 'Caliphate of Córdoba', 'Almohad Caliphate', 'Granada'],
  'reconquista-royaumes': ['Asturias', 'León', 'Castilla', 'Castile', 'Castille', 'Aragón', 'Navarre', 'Portugal'],
  califat: ['Umayyad Caliphate', 'Abbasid Caliphate'],
  mongols: ['Mongol Empire', 'Great Khanate', 'Chagatai Khanate', 'Ilkhanate', 'Khanate of the Golden Horde'],
  'chine-tang-song': ['Sui Empire', 'Tang Empire', 'Song Empire'],
  'tibet-empire': ['Tufan Empire', 'Tibetan Empire'],
  'japon-feodal': ['Japan', 'Imperial Japan (Fujiwara)', 'Shogun Japan (Kamakura)'],
  goryeo: ['Goryeo', 'Korea'],
  khmer: ['Chen-La', 'Khmer Empire'],
  srivijaya: ['Srivijaya Empire'],
  chola: ['Cholas', 'Chola Empire'],
  'ghana-med': ['Empire of Ghana', 'Ghana'],
  mali: ['Mali'],
  songhai: ['Songhai'],
  kongo: ['Congo'],
  'zimbabwe-civilisation': ['Great Zimbabwe'],
  maya: ['Maya chiefdoms and states', 'Maya states', 'Maya city-states'],
  tiwanaku: ['Tiahuanaco Empire'],
  huari: ['Huari Empire'],

  // ── Époque moderne ──
  espagne: ['Spain', 'Castille', 'Aragón', 'Spanish Habsburg'],
  'france-mod': ['France'],
  'angleterre-mod': ['England', 'England and Ireland', 'Great Britain', 'United Kingdom', 'United Kingdom of Great Britain and Ireland'],
  'provinces-unies': ['Dutch Republic', 'Netherlands'],
  'suede-empire': ['Sweden'],
  prusse: ['Prussia', 'Hohenzollern'],
  'pologne-lituanie': ['Poland-Lithuania', 'Polish–Lithuanian Commonwealth'],
  'songhai-mod': ['Songhai'],
  ashanti: ['Asante'],
  'kongo-mod': ['Congo'],
  oyo: ['Oyo'],
  ottomans: ['Ottoman Empire'],
  moghols: ['Mughal Empire'],
  safavides: ['Safavid Empire'],
  'chine-mod': ['Ming Empire', 'Ming Chinese Empire', 'Post-Ming Warlords', 'Manchu Empire', 'Qing Empire'],
  'japon-mod': ['Tokugawa shogunate', 'Japan'],
  joseon: ['Korea'],
  azteque: ['Aztec Empire'],
  inca: ['Inca Empire'],
  'usa-moderne': ['United States of America'],

  // ── Époque contemporaine ──
  'france-contemp': ['France'],
  'royaume-uni': ['United Kingdom', 'United Kingdom of Great Britain and Ireland', 'Great Britain'],
  allemagne: ['Germany', 'German Empire'],
  russie: ['Russian Empire', 'Russia', 'USSR'],
  'autriche-hongrie': ['Austrian Empire', 'Austria Hungary', 'Austro-Hungarian Empire'],
  'italie-contemp': ['Italy', 'Kingdom of Italy'],
  'etats-unis': ['United States of America', 'United States', 'USA'],
  mexique: ['Mexico'],
  bresil: ['Kingdom of Brazil', 'Brazil'],
  turquie: ['Ottoman Empire', 'Ottoman Sultanate', 'Republic of Turkey', 'Turkey'],
  iran: ['Persia', 'Iran'],
  'chine-contemp': ['Manchu Empire', 'Qing Empire', 'China'],
  japon: ['Japan', 'Imperial Japan', 'Empire of Japan'],
  'coree-contemp': ['Korea', 'Korea, Republic of', "Korea, Democratic People's Republic of"],
  'inde-contemp': ['British Raj', 'India'],
  indonesie: ['Dutch East Indies', 'Netherlands Indies', 'Indonesia'],
  'ethiopie-contemp': ['Ethiopia', 'Abyssinia'],
  dahomey: ['Dahomey'],
  'afrique-sud': ['Cape Colony', 'Union of South Africa', 'South Africa'],
}

/**
 * CONFLICTS : lieu emblématique de chaque guerre (clé = nom exact dans
 * epochs.json → [longitude, latitude]). Pour une guerre longue ou étendue,
 * on retient la bataille ou la région la plus représentative.
 */
export const CONFLICTS = {
  'Bataille de Qadesh': [36.51, 34.56],
  'Deuxième Guerre Punique': [16.13, 41.31], // Cannes
  'Guerre Méroïtico-Romaine': [31.95, 22.0],
  'Campagne de Nubie': [33.75, 16.94], // Méroé
  'Guerre de Troie': [26.24, 39.96],
  'Guerre du Péloponnèse': [22.4, 37.5],
  'Guerres romano-étrusques': [12.39, 42.02], // Véies
  'Guerre des Gaules': [4.5, 47.0],
  'Troisième Guerre Punique': [10.32, 36.85], // Carthage
  "Bataille d'Alésia": [4.5, 47.54],
  'Troisième Guerre Servile': [14.43, 40.82], // Vésuve
  'Guerres celtibères & numantines': [-2.44, 41.81], // Numance
  'Campagne perse contre les Scythes': [32.0, 47.0],
  "Guerres d'Illyrie": [19.0, 42.3],
  'Conquête de Babylone par les Perses': [44.42, 32.54],
  'Bataille de Gaugamèles': [43.5, 36.36],
  'Siège de Tyr par Alexandre': [35.2, 33.27],
  'Première Guerre judéo-romaine': [35.23, 31.78],
  'Guerre du Kalinga': [85.8, 20.3],
  'Campagnes Han contre les Xiongnu': [106.0, 41.5],
  'Bataille de Baideng': [113.3, 40.1],
  'Guerre Han-Gojoseon': [125.75, 39.03],
  'Guerre Civile Interne': [-98.84, 19.69], // Teotihuacan
  'Chute de Constantinople': [28.98, 41.01],
  'Guerres saxonnes': [8.9, 52.0],
  'Guerre de Cent Ans': [2.0, 50.32], // Crécy / Azincourt
  'Guerres d\'Italie / Ligue Lombarde': [8.9, 45.6], // Legnano
  'Invasion de la Grande Armée païenne': [-1.08, 53.96], // York
  'Guerre contre la Horde d\'Or (Mongols)': [40.4, 56.13], // Vladimir
  'Guerre de Saint-Sabas / Guerre de Chioggia': [12.28, 45.22],
  'Bataille de Las Navas de Tolosa': [-3.58, 38.28],
  'Guerre de Grenade': [-3.6, 37.18],
  'Invasion Mongole et Sac de Bagdad': [44.36, 33.31],
  "Campagne de la Rus' et de l'Europe": [16.5, 51.2], // Legnica
  "Révolte d'An Lushan": [108.94, 34.34], // Chang'an
  'Guerres arabo-tibétaines / sino-tibétaines': [72.3, 42.5], // Talas
  'Invasions mongoles': [130.4, 33.6], // Hakata
  'Guerre Mongol-Goryeo': [126.5, 37.75], // Ganghwa
  'Guerres Khméro-Chams': [103.87, 13.41], // Angkor
  'Invasion des Chola': [104.75, -2.99], // Palembang
  "Campagnes navales d'Asie du Sud-Est": [100.4, 5.6], // Kedah
  'Guerre Almoravide': [-7.8, 15.4], // Koumbi Saleh
  'Bataille de Kirina': [-8.1, 12.5],
  'Expansion contre les royaumes Mossis': [-1.5, 13.5],
  'Unification du bassin': [14.25, -6.27], // Mbanza Kongo
  'Première et Seconde Guerre Tikal-Calakmul': [-89.62, 17.22],
  'Conquête de la culture Moche': [-79.0, -8.1],
  'Guerre de Quatre-Vingts Ans': [4.4, 51.9],
  'Guerre de Trente Ans': [12.3, 51.3],
  'Guerre de Sept Ans (Guerre de la Conquête)': [-71.22, 46.81], // Québec
  'Guerre de Hollande': [4.9, 52.37],
  'Grande Guerre du Nord': [34.55, 49.59], // Poltava
  'Guerre de Sept Ans (Front Européen)': [15.0, 51.0],
  'Le Déluge (Potop)': [21.0, 52.23],
  'Bataille de Tondibi': [-0.05, 16.3],
  "Guerre d'indépendance Ashanti": [-1.62, 6.69], // Kumasi
  "Bataille d'Ambuila": [15.1, -7.6],
  'Guerres contre le Dahomey': [2.1, 7.2],
  'Bataille de Mohács': [18.68, 45.99],
  'Guerres Marathes': [75.3, 19.9],
  'Guerres Ottomano-Persanes': [46.3, 38.07], // Tabriz
  "Campagnes de l'empereur Qianlong": [87.6, 43.8], // Dzoungarie
  'Bataille de Sekigahara': [136.47, 35.37],
  'Bataille de Myeongnyang (Guerre d\'Imjin)': [126.3, 34.57],
  'Siège de Tenochtitlan': [-99.13, 19.43],
  'Bataille de Cajamarca': [-78.52, -7.16],
  "Guerre d'indépendance des États-Unis": [-76.5, 37.24], // Yorktown
  'Première Guerre mondiale (La Grande Guerre)': [5.39, 49.16], // Verdun
  "Bataille d'Angleterre (WWII)": [-0.13, 51.51],
  "Seconde Guerre mondiale (Front de l'Est/Ouest)": [13.4, 52.52],
  "Grande Guerre patriotique (Front de l'Est WWII)": [44.5, 48.7], // Stalingrad
  'Bataille de Sadowa': [15.73, 50.29],
  "Troisième guerre d'Indépendance italienne": [10.8, 45.4], // Custoza
  'Guerres de Yougoslavie': [18.41, 43.86],
  'La Guerre de Sécession (Civil War)': [-77.23, 39.81], // Gettysburg
  'Guerre Froide (Guerre du Viêt Nam)': [106.63, 10.82],
  'La Révolution Mexicaine': [-99.13, 19.43],
  'Guerre de la Triple Alliance': [-57.6, -25.3],
  "Guerre d'Indépendance Turque": [32.86, 39.93],
  'Guerre Iran-Irak': [48.3, 30.4], // Khorramshahr
  'Seconde Guerre sino-japonaise': [118.8, 32.06], // Nankin
  'La Guerre du Pacifique': [-157.95, 21.36], // Pearl Harbor
  'Guerre de Corée': [127.0, 38.0],
  'Guerres Indo-Pakistanaises': [74.8, 34.08], // Cachemire
  "Guerre d'indépendance indonésienne": [112.75, -7.25], // Surabaya
  "L'Occupation Japonaise": [103.82, 1.35],
  "Bataille d'Adoua": [38.9, 14.17],
  'Seconde Guerre du Dahomey': [2.0, 7.18], // Abomey
  'Guerre Anglo-Zouloue': [30.65, -28.36], // Isandlwana
}

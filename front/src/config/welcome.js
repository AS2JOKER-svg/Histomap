/**
 * Message de bienvenue affiché à la première visite (et via le bouton « Mot de bienvenue »).
 * Passer `enabled` à false pour le désactiver complètement.
 * Les paragraphes acceptent du texte simple ; **gras** est rendu en gras.
 */
export const welcome = {
  enabled: true,
  emoji: '👋',
  title: 'Bienvenue sur HistoMap !',
  paragraphs: [
    "Bonjour ma femme ! Je t'envoie ce site parce que tu me dis souvent que tu souhaiterais apprendre mais tu ne sais pas par où commencer. J'ai donc développé une **frise chronologique interactive** pour cartographier et comparer l'histoire des grandes civilisations mondiales à travers les âges.",
    "Tu peux cliquer sur les différentes **Époques** pour zoomer, explorer les continents en parallèle, et cliquer sur les blocs pour ouvrir les fiches détaillées (Régimes politiques, innovations technologiques, guerres mythiques et grands personnages).",
  ],
  note: "J'espere que ca va t'aider à te lancer dans l'apprentissage de l'histoire ! Hâte de pouvoir discuter de GenGiskane avec toi !",
  cta: 'Commencer l’exploration',
}

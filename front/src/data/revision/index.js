/**
 * Chapitres de révision rédigés à la main (prioritaires sur la génération
 * automatique). Clé = id de la civilisation.
 * Pour ajouter un chapitre : créer un fichier sur le modèle de france-capet.js
 * et l'enregistrer ici.
 */
import europePaleo from './europe-paleo.js'
import egypte from './egypte.js'
import grece from './grece.js'
import rome from './rome.js'
import chineImperiale from './chine-imperiale.js'
import byzance from './byzance.js'
import califat from './califat.js'
import mongols from './mongols.js'
import franceCapet from './france-capet.js'
import franceMod from './france-mod.js'
import franceContemp from './france-contemp.js'

export const HANDWRITTEN = {
  // Préhistoire
  'europe-paleo': europePaleo,
  // Antiquité
  egypte,
  grece,
  rome,
  'chine-imperiale': chineImperiale,
  // Moyen Âge
  byzance,
  califat,
  mongols,
  'france-capet': franceCapet,
  // Époque moderne
  'france-mod': franceMod,
  // Époque contemporaine
  'france-contemp': franceContemp,
}

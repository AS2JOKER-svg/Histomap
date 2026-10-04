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
import mesopotamie from './mesopotamie.js'
import perse from './perse.js'
import carthage from './carthage.js'
import japonFeodal from './japon-feodal.js'
import ottomans from './ottomans.js'
import moghols from './moghols.js'
import azteque from './azteque.js'
import inca from './inca.js'
import royaumeUni from './royaume-uni.js'
import etatsUnis from './etats-unis.js'

export const HANDWRITTEN = {
  // Préhistoire
  'europe-paleo': europePaleo,
  // Antiquité
  mesopotamie,
  egypte,
  perse,
  grece,
  carthage,
  rome,
  'chine-imperiale': chineImperiale,
  // Moyen Âge
  byzance,
  califat,
  mongols,
  'france-capet': franceCapet,
  'japon-feodal': japonFeodal,
  // Époque moderne
  'france-mod': franceMod,
  ottomans,
  moghols,
  azteque,
  inca,
  // Époque contemporaine
  'france-contemp': franceContemp,
  'royaume-uni': royaumeUni,
  'etats-unis': etatsUnis,
}

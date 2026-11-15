/**
 * partage.js — Image de résultat à partager (V3, sprint 22)
 * ==========================================================
 * L'image est dessinée sur le téléphone (canvas), sans serveur ni compte : rien ne part
 * ailleurs que là où le joueur choisit de l'envoyer (partage natif) ; sinon elle est téléchargée.
 */

const W = 1080
const H = 1350

async function polices() {
  if (typeof document === 'undefined' || !document.fonts?.load) return
  try {
    await Promise.all([document.fonts.load('700 120px "Cormorant Garamond"'), document.fonts.load('600 40px "DM Sans"')])
  } catch {
    /* polices indisponibles hors ligne : le canvas prend la police de secours */
  }
}

/**
 * Dessine l'image → Promise<Blob>.
 * { titre, sousTitre, note, etoiles, niveau, rang, titreAffiche, cadre: couleur | null, doree: bool }
 */
export async function imageResultat({ titre, sousTitre, note, etoiles = 0, niveau, rang, titreAffiche, cadre, doree }) {
  await polices()
  const c = document.createElement('canvas')
  c.width = W
  c.height = H
  const g = c.getContext('2d')
  const serif = '"Cormorant Garamond", Georgia, serif'
  const sans = '"DM Sans", system-ui, sans-serif'

  // Fond encre, halo et rayons
  g.fillStyle = '#1f1812'
  g.fillRect(0, 0, W, H)
  const cx = W / 2
  const cy = 520
  const halo = g.createRadialGradient(cx, cy, 40, cx, cy, 520)
  halo.addColorStop(0, 'rgba(224,194,122,.35)')
  halo.addColorStop(1, 'rgba(224,194,122,0)')
  g.fillStyle = halo
  g.fillRect(0, 0, W, H)
  g.fillStyle = 'rgba(224,194,122,.10)'
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2
    g.beginPath()
    g.moveTo(cx, cy)
    g.lineTo(cx + Math.cos(a - 0.05) * 900, cy + Math.sin(a - 0.05) * 900)
    g.lineTo(cx + Math.cos(a + 0.05) * 900, cy + Math.sin(a + 0.05) * 900)
    g.closePath()
    g.fill()
  }

  // Cadre (cadre choisi, ou double filet doré de l'« édition dorée »)
  if (cadre || doree) {
    g.strokeStyle = cadre ?? '#d4a12a'
    g.lineWidth = 18
    g.strokeRect(30, 30, W - 60, H - 60)
    if (doree) {
      g.strokeStyle = '#e0c27a'
      g.lineWidth = 4
      g.strokeRect(62, 62, W - 124, H - 124)
    }
  }

  g.textAlign = 'center'
  g.fillStyle = '#e0c27a'
  g.font = `600 34px ${sans}`
  g.fillText(sousTitre.toUpperCase(), cx, 190)

  // Médaille
  g.beginPath()
  g.arc(cx, cy, 190, 0, Math.PI * 2)
  g.fillStyle = '#e0c27a'
  g.fill()
  g.lineWidth = 16
  g.strokeStyle = '#a8791c'
  g.stroke()
  g.fillStyle = '#2a2118'
  g.font = `700 150px ${serif}`
  g.fillText(`${note}/20`, cx, cy + 45)
  g.font = `700 64px ${serif}`
  g.fillText('★'.repeat(etoiles) + '☆'.repeat(3 - etoiles), cx, cy + 125)

  // Civilisation, niveau, titre
  g.fillStyle = '#f6efe2'
  g.font = `700 104px ${serif}`
  g.fillText(titre, cx, 900, W - 160)
  g.fillStyle = '#c9b48c'
  g.font = `500 40px ${sans}`
  g.fillText(`Niveau ${niveau} · ${rang}`, cx, 980)
  if (titreAffiche) {
    g.fillStyle = '#e0c27a'
    g.font = `italic 700 52px ${serif}`
    g.fillText(`« ${titreAffiche} »`, cx, 1060, W - 160)
  }

  // Signature
  g.fillStyle = '#e0c27a'
  g.font = `700 60px ${serif}`
  g.fillText('HistoMap', cx, 1210)
  g.fillStyle = '#c9b48c'
  g.font = `500 30px ${sans}`
  g.fillText('L’histoire du monde, salle après salle', cx, 1260)

  return new Promise((resolve) => c.toBlob(resolve, 'image/png'))
}

/** Partage natif de l'image (Android, iOS récents) ; sinon téléchargement. Renvoie 'partage' | 'telecharge' | 'annule'. */
export async function partagerImage(blob, nom, texte) {
  const fichier = new File([blob], nom, { type: 'image/png' })
  if (navigator.canShare?.({ files: [fichier] })) {
    try {
      await navigator.share({ files: [fichier], text: texte })
      return 'partage'
    } catch (e) {
      if (e?.name === 'AbortError') return 'annule'
    }
  }
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = nom
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 2000)
  return 'telecharge'
}

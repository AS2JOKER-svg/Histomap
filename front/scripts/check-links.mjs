// Vérifie que tous les liens Wikipédia de content/ mènent à une page existante.
// Interroge l'API de Wikipédia par paquets (les redirections sont acceptées).
//
// Usage : npm run links   (nécessite une connexion internet ; non lancé par le build)
import { readdirSync, readFileSync } from 'fs'
import { join, relative } from 'path'
import { PATHS } from './lib/content.mjs'

const LINK = /https:\/\/([a-z]+)\.wikipedia\.org\/wiki\/([^"\s#]+)/g
const BATCH = 45
// Politique de Wikimedia : un User-Agent qui identifie l'outil
const USER_AGENT = 'HistoMap-links/1.0 (https://github.com/AS2JOKER-svg/Histomap)'

// lang → titre → fichiers qui le citent
const titles = new Map()
for (const entry of readdirSync(PATHS.content, { recursive: true })) {
  if (!entry.endsWith('.json')) continue
  const file = join(PATHS.content, entry)
  for (const [, lang, slug] of readFileSync(file, 'utf8').matchAll(LINK)) {
    const title = decodeURIComponent(slug).replaceAll('_', ' ')
    if (!titles.has(lang)) titles.set(lang, new Map())
    const files = titles.get(lang).get(title) ?? new Set()
    files.add(relative(PATHS.content, file))
    titles.get(lang).set(title, files)
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function query(lang, batch) {
  const params = new URLSearchParams({ action: 'query', titles: batch.join('|'), redirects: '1', format: 'json' })
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(`https://${lang}.wikipedia.org/w/api.php?${params}`, { headers: { 'User-Agent': USER_AGENT }, signal: AbortSignal.timeout(60000) })
      if (res.ok) return (await res.json()).query
      // 429 : trop de requêtes, on attend le délai demandé
      const wait = res.status === 429 ? Number(res.headers.get('retry-after') || 10) * 1000 : 2000 * attempt
      if (attempt === 5) throw new Error(`HTTP ${res.status}`)
      await sleep(wait)
    } catch (e) {
      if (attempt === 5) throw new Error(`Wikipédia injoignable (${lang}) : ${e.message}`)
      await sleep(2000 * attempt)
    }
  }
}

let total = 0
const missing = []
for (const [lang, map] of titles) {
  const list = [...map.keys()]
  total += list.length
  for (let i = 0; i < list.length; i += BATCH) {
    const { pages } = await query(lang, list.slice(i, i + BATCH))
    await sleep(500) // une requête toutes les demi-secondes au plus
    for (const p of Object.values(pages)) {
      if ('missing' in p || 'invalid' in p) missing.push({ lang, title: p.title, files: map.get(p.title) ?? new Set() })
    }
  }
}

if (missing.length) {
  console.error(`❌ ${missing.length} lien(s) Wikipédia mort(s) sur ${total} :`)
  for (const m of missing) console.error(`   · ${m.lang}: ${m.title} — ${[...m.files].join(', ')}`)
  process.exit(1)
}
console.log(`✅ ${total} liens Wikipédia vérifiés, tous valides.`)

/**
 * history.ts — Backend HistoArrow  (Hono + Bun ou Node)
 * =======================================================
 *
 * Endpoints:
 *   POST /enrich   → génère le contenu enrichi d'une civilisation via Mistral
 *   GET  /health   → check rapide
 *
 * Variables d'environnement:
 *   MISTRAL_API_KEY  — clé API Mistral
 *   PORT             — port d'écoute (défaut: 3000)
 */

import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'

// ── Vérification de la clé API au démarrage ─────────────────────────
const MISTRAL_API_KEY = process.env.MISTRAL_API_KEY || ''
if (!MISTRAL_API_KEY) {
  console.warn('⚠️  MISTRAL_API_KEY non définie — /enrich renverra des données de secours.')
}

const app = new Hono()

// ── Middleware ────────────────────────────────────────────────────────
app.use('*', cors({ origin: '*' }))
app.use('*', logger())

// ────────────────────────────────────────────────────────────────────
//  POST /enrich
//  Body: { civId, label, epochId, continentId }
//  Retour: { dates, wars, figures, discoveries, culturalHeritage, facts }
// ────────────────────────────────────────────────────────────────────
app.post('/enrich', async (c) => {
  const body = await c.req.json<{
    civId:        string
    label:        string
    epochId:      string
    continentId:  string
  }>()

  const { civId, label, epochId, continentId } = body

  if (!civId || !label) {
    return c.json({ error: 'civId et label sont requis.' }, 400)
  }

  // ── Prompt Mistral (règles strictes — cf. PROMPT_IA.md) ──────────
  const systemPrompt = `Tu es un historien expert. Réponds UNIQUEMENT en JSON valide, sans texte avant ou après. Le JSON doit contenir exactement ces champs:

{
  "dates": {
    "creation": "string (ex: 'Vers -3000' ou 'En 527')",
    "disparition": "string (ex: 'En -31' ou 'En 1453' ou 'Still existing')",
    "duration": "string (ex: 'environ 250 ans')"
  },
  "wars": [
    {
      "name": "string",
      "start": "string",
      "end": "string (ou 'in progress')",
      "opponent": "string",
      "result": "string (Victoire, Défaite, Treaty, Draw)"
    }
  ],
  "figures": [
    {
      "name": "string",
      "role": "string",
      "life": "string (ex: 'c. 484-524')",
      "highlight": "string (une phrase)"
    }
  ],
  "discoveries": [
    {
      "title": "string",
      "year": "string",
      "description": "string (2-3 phrases)"
    }
  ],
  "culturalHeritage": ["string", "string", "string"],
  "funFacts": ["string", "string", "string"],
  "sources": [
    {
      "name": "string",
      "url": "string (URL réelle et vérifiable)"
    }
  ]
}

RÈGLES ABSOLUES:
- Réponds uniquement avec ce JSON, rien d'autre.
- Pas de markdown, pas de code block, pas de texte explicatif.
- Chaque guerre doit être véridique et historiquement attestée.
- Chaque figure doit exister et avoir les bonnes dates.
- Chaque découverte doit être attribuable.
- Sources = URLs réelles (Wikipedia, Britannica, Encyclopedia Britannica, etc.)
- Langue: la même que label si possible, sinon en français.`

  const userPrompt = `Génère l'histoire enrichie de la civilisation: "${label}" (ID: ${civId})
Époque: ${epochId} | Continent: ${continentId}

Réponds en JSON strict comme défini dans le système.`

  // ── Données de secours (fallback si pas de clé API) ────────────────
  const fallbackData = {
    dates: { creation: 'Unknown', disparition: 'Unknown', duration: 'Unknown' },
    wars:  [],
    figures: [],
    discoveries: [],
    culturalHeritage: [],
    funFacts:   [`${label} est une civilisation majeure de l'histoire.`, `Consultez des sources historiques pour plus de détails.`],
    sources:    [{ name: 'Wikipedia', url: `https://en.wikipedia.org/wiki/${encodeURIComponent(label)}` }],
  }

  if (!MISTRAL_API_KEY) {
    console.log(`[history] No API key — returning fallback for "${label}"`)
    return c.json(fallbackData)
  }

  try {
    const mistralRes = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method:  'POST',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${MISTRAL_API_KEY}`,
      },
      body: JSON.stringify({
        model:      'mistral-small-latest',
        messages:   [
          { role: 'system', content: systemPrompt },
          { role: 'user',   content: userPrompt },
        ],
        response_format: { type: 'json_object' },
        temperature:     0.3,   // faible → factuel, pas créatif
        max_tokens:      2000,
      }),
    })

    if (!mistralRes.ok) {
      const err = await mistralRes.text()
      console.error(`[history] Mistral error ${mistralRes.status}: ${err}`)
      return c.json(fallbackData, 200)
    }

    const data = await mistralRes.json()
    const raw  = data.choices?.[0]?.message?.content

    if (!raw) return c.json(fallbackData, 200)

    // Parse le JSON retourné par Mistral
    let parsed: Record<string, unknown>
    try {
      parsed = JSON.parse(raw)
    } catch {
      console.warn('[history] Mistral returned invalid JSON, using fallback.')
      return c.json(fallbackData, 200)
    }

    console.log(`[history] Enriched "${label}" successfully.`)
    return c.json(parsed, 200)

  } catch (err) {
    console.error('[history] Network error calling Mistral:', err)
    return c.json(fallbackData, 200)
  }
})

// ────────────────────────────────────────────────────────────────────
//  GET /health
// ────────────────────────────────────────────────────────────────────
app.get('/health', (c) => {
  return c.json({
    status:    'ok',
    mistral:   !!MISTRAL_API_KEY,
    timestamp: new Date().toISOString(),
  })
})

// ── Démarrage ────────────────────────────────────────────────────────
const PORT = parseInt(process.env.PORT || '3000', 10)

console.log(`\n🗺️  HistoArrow backend running on http://localhost:${PORT}`)
console.log(`   POST /enrich  → enrichit une civilisation`)
console.log(`   GET  /health  → health check\n`)

export default {
  port:   PORT,
  fetch:  app.fetch,
}
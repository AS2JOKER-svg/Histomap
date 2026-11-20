/**
 * Code de dist/sw.js (plugin « serviceWorker » de vite.config.js ; vérifié par scripts/test-aventure.mjs) :
 * sw/sw.js, avec sa version, la liste des fichiers à mettre en cache, et src/lib/rappels.js recopié à la place du
 * repère « /* __RAPPELS__ *\/ ». Le service worker est un script classique (sans modules) : les mots `export` de
 * rappels.js sont retirés, et rappels.js ne doit rien importer.
 */
export function codeRappels(rappels) {
  if (/^\s*import\b/m.test(rappels)) throw new Error('src/lib/rappels.js ne doit rien importer : il est recopié dans le service worker')
  const code = rappels.replace(/^export\s+(?=(?:async\s+)?function\b|const\b|let\b|class\b)/gm, '')
  if (/^\s*export\b/m.test(code)) throw new Error('src/lib/rappels.js : seules les formes « export function / const / let / class » sont recopiables dans le service worker')
  return code
}

export function codeServiceWorker({ sw, rappels, version, precache }) {
  if (!sw.includes('/* __RAPPELS__ */')) throw new Error('sw/sw.js : repère /* __RAPPELS__ */ introuvable')
  return sw
    .replace('__VERSION__', version)
    .replace('__PRECACHE__', () => JSON.stringify(precache, null, 2))
    .replace('/* __RAPPELS__ */', () => codeRappels(rappels))
}

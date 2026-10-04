/* Service worker HistoMap — généré au build (voir vite.config.js, plugin « serviceWorker »).
 * - Coquille de l'application (HTML, JS, CSS, icônes) mise en cache à l'installation :
 *   le site s'ouvre et les révisions fonctionnent sans réseau.
 * - Fonds de carte et polices : mis en cache au premier affichage.
 * - Nouvelle version : elle attend que l'utilisateur accepte la mise à jour (bandeau dans l'appli).
 */
const VERSION = '__VERSION__'
const SHELL = `histomap-shell-${VERSION}`
const RUNTIME = 'histomap-runtime-v1'
const PRECACHE = __PRECACHE__

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(SHELL).then((cache) => cache.addAll(PRECACHE)))
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('histomap-shell-') && k !== SHELL).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  )
})

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting()
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return
  const url = new URL(request.url)

  // Pages : réseau d'abord (contenu à jour), sinon la page en cache.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => caches.match('./index.html', { ignoreSearch: true }).then((r) => r ?? caches.match('./')))
    )
    return
  }

  // Polices Google et fonds de carte : cache d'abord, puis réseau (et mise en cache).
  const isFont = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com'
  const isMap = url.origin === self.location.origin && url.pathname.includes('/map/')
  if (isFont || isMap) {
    event.respondWith(
      caches.match(request).then((hit) =>
        hit ??
        fetch(request).then((res) => {
          if (res.ok || res.type === 'opaque') {
            const copy = res.clone()
            caches.open(RUNTIME).then((cache) => cache.put(request, copy))
          }
          return res
        })
      )
    )
    return
  }

  // Fichiers du site (noms avec empreinte) : cache d'abord.
  if (url.origin === self.location.origin) {
    event.respondWith(caches.match(request).then((hit) => hit ?? fetch(request)))
  }
})

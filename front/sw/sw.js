/* Service worker HistoMap — généré au build (voir vite.config.js, plugin « serviceWorker »).
 * - Coquille de l'application (HTML, JS, CSS, icônes) mise en cache à l'installation :
 *   le site s'ouvre et les révisions fonctionnent sans réseau.
 * - Fonds de carte et polices : mis en cache au premier affichage.
 * - Nouvelle version : elle attend que l'utilisateur accepte la mise à jour (bandeau dans l'appli).
 * - Rappels (sprint 33) : réveillé par la synchronisation périodique de Chrome, il montre au plus une notification
 *   (rappel du jour ou série en danger) ; les règles viennent de src/lib/rappels.js, recopié ci-dessous au build.
 */
const VERSION = '__VERSION__'
const SHELL = `histomap-shell-${VERSION}`
const RUNTIME = 'histomap-runtime-v1'
const PRECACHE = __PRECACHE__

/* __RAPPELS__ */

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

// ── Rappels (sprint 33) ──────────────────────────────────────────────────────

self.addEventListener('periodicsync', (event) => {
  if (event.tag === TAG_SYNC) event.waitUntil(rappelDuMoment().catch(() => null))
})

/**
 * Montre la notification du moment s'il y en a une (choisirRappel) et la note dans le journal.
 * Rien si l'autorisation manque ou si l'app est à l'écran. Renvoie la notification montrée, ou null.
 */
async function rappelDuMoment(maintenant = new Date()) {
  if (typeof Notification === 'undefined' || Notification.permission !== 'granted') return null
  const fenetres = await self.clients.matchAll({ type: 'window', includeUncontrolled: true })
  if (fenetres.some((f) => f.visibilityState === 'visible')) return null
  const [etat, journal] = await Promise.all([lireRappels('etat'), lireRappels('journal')])
  const choix = choisirRappel(etat, journal, maintenant)
  if (!choix) return null
  const adresse = (chemin) => new URL(chemin, self.registration.scope).href
  await self.registration.showNotification(choix.titre, {
    body: choix.corps,
    tag: TAG_NOTIF,
    renotify: true,
    lang: 'fr',
    icon: adresse('icons/icon-192.png'),
    badge: adresse('icons/badge-96.png'),
    data: { url: choix.url },
  })
  await ecrireRappels('journal', noterEnvoi(journal, jourLocal(maintenant), choix.type))
  return choix
}

// Notification touchée : l'app ouverte va à la salle en cours, sinon elle s'ouvre dessus.
// (Une autre page du site ouverte dans un onglet, comme licences.txt, n'est pas l'app.)
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  const hash = String(event.notification.data?.url ?? '#/')
  const pages = [self.registration.scope, new URL('index.html', self.registration.scope).href]
  const estApp = (f) => pages.includes(f.url.split('#')[0].split('?')[0])
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((fenetres) => {
      const fenetre = fenetres.find((f) => estApp(f) && f.focused) ?? fenetres.find(estApp)
      if (!fenetre) return self.clients.openWindow(new URL(hash, self.registration.scope).href)
      fenetre.postMessage({ type: 'OUVRIR', hash })
      return fenetre.focus()
    })
  )
})

/**
 * storage.js — localStorage sans risque
 * ======================================
 * localStorage peut être indisponible (navigation privée, stockage bloqué) :
 * chaque accès est protégé pour que le site fonctionne quand même.
 */
export function load(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key)
    return raw === null ? fallback : JSON.parse(raw)
  } catch {
    return fallback
  }
}

export function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* stockage indisponible : on ignore */
  }
}

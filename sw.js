// Offline cache: app shell is cached on install; fonts are cached the first time they load.
const CACHE = "glucose-v3";
const SHELL = [
  "./",
  "index.html",
  "app.js",
  "meals.js",
  "vendor/google-genai.js",
  "manifest.webmanifest",
  "icons/icon.svg",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  // Only cache our own files and fonts; never API calls.
  if (e.request.method !== "GET") return;
  const host = new URL(e.request.url).hostname;
  if (host !== self.location.hostname && !host.endsWith("fonts.googleapis.com") && !host.endsWith("fonts.gstatic.com")) return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) => {
      const net = fetch(e.request).then((res) => {
        if (res && (res.ok || res.type === "opaque")) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy));
        }
        return res;
      }).catch(() => hit);
      return hit || net;
    })
  );
});

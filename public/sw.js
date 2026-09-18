const CACHE_NAME = 'aethoflix-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/favicon.svg',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  
  // Let external APIs and video iframes bypass service worker cache
  const url = new URL(event.request.url);
  if (
    url.hostname.includes('themoviedb.org') ||
    url.hostname.includes('tmdb.org') ||
    url.hostname.includes('anilist.co') ||
    url.hostname.includes('vidstuck.xyz') ||
    url.hostname.includes('zxcstream.xyz') ||
    url.hostname.includes('bingr.one') ||
    url.hostname.includes('nxsha.space') ||
    url.hostname.includes('vidlink.pro') ||
    url.hostname.includes('vidnest.fun')
  ) {
    return;
  }

  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});

// Service Worker for ChefGemini PWA
const CACHE_NAME = 'chef-gemini-v1';
const RUNTIME_CACHE = 'chef-runtime-v1';

// Assets to cache on install
const STATIC_ASSETS = [
    '/',
    '/favicon.ico',
    '/android-chrome-192x192.png',
    '/android-chrome-512x512.png',
    '/apple-touch-icon.png',
    '/loadLogo.png',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
    console.log('[SW] Installing service worker...');
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[SW] Caching static assets');
            return cache.addAll(STATIC_ASSETS);
        }).then(() => {
            console.log('[SW] Skip waiting');
            return self.skipWaiting();
        })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating service worker...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME && name !== RUNTIME_CACHE)
                    .map((name) => {
                        console.log('[SW] Deleting old cache:', name);
                        return caches.delete(name);
                    })
            );
        }).then(() => {
            console.log('[SW] Claiming clients');
            return self.clients.claim();
        })
    );
});

// Fetch event - network first, then cache fallback
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip cross-origin requests
    if (url.origin !== location.origin) {
        return;
    }

    // Skip API calls and Convex requests (always need fresh data)
    if (
        url.pathname.startsWith('/api/') ||
        url.pathname.startsWith('/_next/') ||
        url.hostname.includes('convex.cloud') ||
        url.hostname.includes('convex.dev')
    ) {
        return;
    }

    event.respondWith(
        caches.open(RUNTIME_CACHE).then((cache) => {
            return fetch(request)
                .then((response) => {
                    // Cache successful responses
                    if (response.status === 200) {
                        cache.put(request, response.clone());
                    }
                    return response;
                })
                .catch(() => {
                    // Network failed, try cache
                    return cache.match(request).then((cachedResponse) => {
                        if (cachedResponse) {
                            return cachedResponse;
                        }
                        // If not in cache, try static cache
                        return caches.match(request);
                    });
                });
        })
    );
});

// Handle messages from clients
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

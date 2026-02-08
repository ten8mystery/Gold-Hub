/* Root Service Worker Bridge */
importScripts('/data/local/pages/unlocker/ultraviolet/uv/uv.bundle.js');
importScripts('/data/local/pages/unlocker/ultraviolet/uv/uv.config.js');
importScripts('/data/local/pages/unlocker/ultraviolet/uv/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => {
    event.respondWith(sw.fetch(event));
});

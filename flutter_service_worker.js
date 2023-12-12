'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "d189b7da9c5b2cc082fe0556a7521acd",
"style.css": "0585a69ee4bc0f392b13c1ae851e0ad5",
"apple-icon-114x114.png": "92a48dd1fd17ed1746360ba1c88ef7a6",
"apple-icon-144x144.png": "da958483be731522fddecd260c854939",
"apple-icon-152x152.png": "c93248b1c0641bc510bb4722b6356fdb",
"android-icon-144x144.png": "da958483be731522fddecd260c854939",
"index.html": "4806602c36612d109003722c7f2548c8",
"/": "4806602c36612d109003722c7f2548c8",
"android-icon-36x36.png": "38d49e68337ad78761c3bdd30b261642",
"apple-icon-60x60.png": "9868d11104b2fcf4bc2898f07c47bf5e",
"main.dart.js": "fdb6c18919741914bc9c06e84bf3d7de",
"favicon-16x16.png": "a8b39cbcbf8229200266607245fa3d17",
"assets/FontManifest.json": "c6b115e9ab2ac9308748c8767ca04429",
"assets/AssetManifest.json": "b292e89be750829aec52f8679a8787cd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/social_media_buttons/fonts/SocialMediaIcons.ttf": "be271838cfb555093a41e12292acce83",
"assets/AssetManifest.bin": "e11d41fed23f6291d07aba625c01a9f7",
"assets/assets/images/insta-movies-v1.png": "97dbfa4988c1c59727a60c369400ce56",
"assets/assets/images/insta-movies-v1-dark.png": "f3a6ac562f082730466d7b108174e12c",
"assets/assets/images/insta-movies-v2-dark.png": "1ab54df56994f38f686a2014cd1a1ca6",
"assets/assets/images/edumate.png": "4a7479fb0b49c898de38d33e79610dc9",
"assets/assets/images/contacts-dark.png": "e29ed2af86c98b585c67fcc8849049c1",
"assets/assets/images/avatar.png": "83d93ab8919491a77532b95a0309b611",
"assets/assets/images/edumate-dark.png": "d53df976488b92376617acfff85583e3",
"assets/assets/images/divider-animated.gif": "0f490c1179909ee8006859e60c6177b9",
"assets/assets/images/contacts.png": "2a4e8e8069a316fb657f7d955f6e078c",
"assets/assets/images/insta-movies-v2.png": "edba56fdd40ae8aa6a85fd19f3cb2797",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/fonts/MaterialIcons-Regular.otf": "3d319ccc662d7f2aef64667e8288a408",
"assets/NOTICES": "da02358e07be74ab45c7d6e0e59cd9a5",
"assets/AssetManifest.bin.json": "2970c6bd14e034622a0f8e6fc048464c",
"ms-icon-144x144.png": "da958483be731522fddecd260c854939",
"apple-icon-76x76.png": "b1944a88a54b6428b79e46df52da008e",
"version.json": "009c9e65172e010890f7f65fde438006",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"ms-icon-70x70.png": "748e4c177ffc573d56772c8fb40debb9",
"favicon-96x96.png": "8869251ad7ed3e5024abc77791e11867",
"ms-icon-310x310.png": "37b42738a53b9b4f6552237247e45c21",
"android-icon-192x192.png": "8bf08a27ab8209fb87492374a349d405",
"browserconfig.xml": "49fe6bf8088b9408671eaffeaa8aaec9",
"apple-icon.png": "3f6ee710ef7b35948e9df68db66e3244",
"apple-icon-57x57.png": "3688faa945a103fb0a5aba1eccece607",
"android-icon-512x512.png": "91855739bbd0bcab2c93056d6477a749",
"android-icon-72x72.png": "ed4255571da31c743342c76b0a3c4634",
"apple-icon-180x180.png": "4b9a706a94a72b7071ac87cc98757a9a",
"apple-icon-120x120.png": "668ea7962d5d1cee99d7f30f83cf9b36",
"apple-icon-72x72.png": "ed4255571da31c743342c76b0a3c4634",
"android-icon-48x48.png": "18bcf215dff61dde1440db0114ec8ca8",
"favicon-32x32.png": "1d1762592032758cdc5133ad3c9f9b09",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.ico": "15d6b8496c67f15a4e1abaf809a64740",
"apple-icon-precomposed.png": "3f6ee710ef7b35948e9df68db66e3244",
"ms-icon-150x150.png": "a1536a27a3416df1e7cf50e3195d5015",
"android-icon-96x96.png": "8869251ad7ed3e5024abc77791e11867"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6088163a82f63b6c9d15ca22cdb68a4b",
".git/config": "6f05f8f67d4237492522655dea2ca305",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f236beb494bbb24e6166802e74c11ad6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1f6f018709d60ffb19555a448589b9df",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6e906afcfc220bac223f1ac5d46b2ca7",
".git/logs/refs/heads/main": "3ca0524823cf58219112812ee4a06de7",
".git/logs/refs/heads/master": "afeda87335b524481de8c7fa29e41c32",
".git/logs/refs/remotes/portfolio/HEAD": "86c24e3dc21cf3476ed62fbb65482305",
".git/logs/refs/remotes/portfolio/main": "662faf8709e534ca76cdfd43cb9e8740",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/10/5ee9bb95263876ad8c51b6c5f11ab62f4a49e1": "b872896794afca78a7af299e6accacf7",
".git/objects/13/9f51affcd5eb0f47cf89f5ce8ff132e25cd19c": "d9fb80d23d29b326769fd0b93606b6d2",
".git/objects/1b/3f85f182572157ab14765f3608e335c381c0dc": "169cc59f12f0f2583b40b3acca0d01b4",
".git/objects/1c/e0ef39565b3a54548da29595062e4f745ac72e": "a8adc026293234c79958c6ed1f9c3341",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/a63ab45a861f122652453d3fd6c6d8f8952947": "8dcad0ed9534b6eb7014793ab40aa335",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/22/262f171f9c07d9be26bd78f25d0fce222afef2": "d293bdad8ce530a62fc3185d25e33815",
".git/objects/23/074efacfac2493ebe209f8e2513e128d040829": "51c8a4d0936930106e22a7511247327a",
".git/objects/26/0b19879e76e146e7edca7c824f4a7c7dfc5dba": "fe005395c110fb6667cc5f72142602e8",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/28/762f49ae2cf36618a9f1c6e7533d9b260b4d2f": "624aa8d3728d264f70aceb2d59c2e4bf",
".git/objects/2b/5420e6310d9712fdf323bb8e45f06f961df9bb": "79268fbd6d02b54502f8bead4302db3a",
".git/objects/2b/813e0a902d85b7ed2832b8c30e3b4851fcf8e7": "a3e68a979cf50feb56eb96317144099d",
".git/objects/2c/35603ac12a15be62ce225fdb28c15c9de86718": "15d57d8192e68f71daf5a033c93f8327",
".git/objects/2f/de5da091bdb53907ce4f60a8467ddd82f99a5b": "fa07a070b0526b7388eb06fc4815c828",
".git/objects/30/2eeef3606043f6680090ccdce111d468e64447": "faa020eb116873ed3670c7698ee46fe8",
".git/objects/32/726fa81076b49bc34eb1be05976424c394bdfe": "32807c7fe651a3e2e254f97bbbc9cace",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/42/252ce8c3cca34368f7cbcba1d756a8c36450b4": "21e3f22bb089924a5b1def1f29719a44",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/7b95e019181a4060581a910f169b66aba2e9fd": "f48b3c58cd1e9bde1d995694e2fcc60f",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/53/9a254ba493e2757c1a760eb601c3bab8bd9d26": "5421727efbb6f988eb690a1bb52ccee4",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5b/1557738893ce2afa1e6ba2c08cbd6382aebb63": "0fd675db6d3b2ea279b0a24d1b347863",
".git/objects/5b/39597fc5e1d839f1509f8b0ca998934360ab1f": "0d944f2ea432c7564aa9cd5fe0124d86",
".git/objects/5d/0ccdb43e5d2ff7fc69545087f898b7043145d6": "ac2de95e8890e45916ff8ef307f33429",
".git/objects/5f/4f7d07ead206a8808ce090f21f64ae2c072f02": "c50bee024d044c81b1329f0216cc0e2a",
".git/objects/60/775c91a24206031f404dd8b392ca42c0b3af16": "75cdd527bb58e1c12de682024df9c783",
".git/objects/61/977fff12ec16a6bec7d9d95817aff48af75496": "f62e0bd283aef1430fd1e0ff1ed88815",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/6d/6eb484865163279ded5aecd058cd3066ebac45": "a91f1da6b7775c8d84b1f662eb26e7f8",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/7b/89a42b5fdc38fe35189589b15ab1b493a4d8cc": "64a6de3ab3cfe54a01715fa50646626d",
".git/objects/7b/fd5ec54ca7f918acd7db730006ea32b42c6389": "a8c5a7794f7d09655691894a8fb68e24",
".git/objects/7e/471017200105e5e3ee0a561fb60de4d7cbb700": "488889038cff0ae4eee3b515cb2a9e46",
".git/objects/83/616b08e7afa9e22eb231bddd4c86fc7b94a76e": "f282763fb17e14ee54358ab15b924818",
".git/objects/85/8f79ffa1404f5dfbcf468e05bae5e4a85f1561": "259e4e72623d1180a54ed37e7437a8da",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/ca8bcf500bab6b23014f5d08a5d89b016fc1e9": "a3af1ffb8e08ba6cfd1a34f3407dd81d",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/95/416f72b6c91cb39a53ae433674b034e53d3785": "0151b958f1a6cb123e5edf2f87ac3d4d",
".git/objects/9a/ac7f4114ff285ef96ceedd4e63777531a67bf5": "1b1af5931db4db6232f5d55cd566c7d1",
".git/objects/9e/eba1ffe0f5405691062b9fe54165604d95514f": "ec6524969dbcd86f6d371003d75d5508",
".git/objects/a5/cef3b138c4d7b713036bd7e1ea9affef6e904a": "78b526c0c05e8d19bcaab5558e385f77",
".git/objects/a7/0a2258d271feda9676ccc658546c471f235b0e": "a23b432054516a77383e9ced61f466dc",
".git/objects/a9/47f4361e3b5be72ee29aee22b5d22cc1e3a207": "65a8112f535153da95277de9aa50fbf3",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ae/e60e5a17e8461638d203d64ad6aab391fe8e48": "7011f81e08ae3033cc4ce97514e6c328",
".git/objects/b0/e599f325f73e983767d492c7aa2d52cbe54ae2": "8ab05e2fa3b7ecb6768fd229e75b25c3",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/1d7818f680712d9f229063481a9bf15fd09767": "445cb4b46f558e5cfc55679d5c8e8854",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c0/625e9f8ef490d715dec44e40aec04f40bd44a4": "00671b62c14fbb368042db513d436dc8",
".git/objects/c0/68d6c49acb433b5a89cd090f316feedb609c57": "ad181d607376ff6ea585cfbeb56edd78",
".git/objects/c4/a8f51a10d3f06599091ee7c9a7473076f0ce88": "eda1cea5e01e5b22a4ef49ea5f4d0a07",
".git/objects/c7/bdd4d65c03a9ef952e4ea6347065e6eae366f8": "878580aa22faf6586da05af8f442dafc",
".git/objects/c8/ac70b89fbb7b2e92317057b3687580fafdfc4a": "a801f2ea0e8bc445999e083a0828fbd5",
".git/objects/c9/7c5f4f952d43b383957e6e3cccc9c777903a93": "43e0814a13587bdb0148ae5456fff178",
".git/objects/c9/b84d5732726c38b88306c55a7568a358eb2fbd": "9b797df4e94dc876e1158b5843539a66",
".git/objects/cc/b6ef43626619572e10a884f7d0cf89a7bb488b": "694f5366464e20768fb6b42838cd5c97",
".git/objects/cc/b8873fefabf5b0159445a3e9e113170f805bec": "2810a0104ec1c1d171edb230cc4718cf",
".git/objects/cd/e6c400818281efc7c0373a70734ba7ca320adb": "0c3b9e30220fac5ed72faa294a530d9e",
".git/objects/ce/64932782213f1cced093a60922ca20ab0e0c3f": "8f15597e69b7a232625bcfb180fa9e4e",
".git/objects/d3/271542b989ceb5298d9dc944b043800d40e05b": "909fa51b87faf4d404c4d3b150e6099f",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/3540f0902e34d7c33ac00ffae1382912ed17bb": "9b89f99b30c47040899d91f3b4f63d92",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/e3/f4f06eadc056711bcce8ac3acfca1f8b18310d": "d57874461ae6a692c81db44d3684f409",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/e458fde368af3d393e93ba57ac59de52daff24": "83e8bc1fbbc91afa1159dc2fee30031b",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/ff/48a14077b6d5e6fd95ab65053a7548ebffba20": "2b0708d10ae1535ea4385c5660d1277f",
".git/refs/heads/main": "577df9650e6cc8cb27a98a2c4aaddf84",
".git/refs/heads/master": "68e53191817800e69f9a6c9201fb2ffe",
".git/refs/remotes/portfolio/HEAD": "5565d054fdd34f82d53c9c8b09a72eeb",
".git/refs/remotes/portfolio/main": "577df9650e6cc8cb27a98a2c4aaddf84",
"assets/AssetManifest.json": "3992062ca920f52ab914d0e2df7c25cb",
"assets/AssetManifest.smcbin": "8c5daafd5c6f3037547760bea9942ef2",
"assets/assets/images/edumate-home.png": "ad9c1dbd43f292e725e568ff2eec6618",
"assets/assets/images/profile-picture.jpeg": "8e9e9dcabfacfc88565cbd62eb1aedbe",
"assets/FontManifest.json": "c6b115e9ab2ac9308748c8767ca04429",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "debeb65bba670f07d45cd650aef10c80",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/social_media_buttons/fonts/SocialMediaIcons.ttf": "be271838cfb555093a41e12292acce83",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "01c4b0d1b01a3662ecc317428e245113",
"/": "01c4b0d1b01a3662ecc317428e245113",
"main.dart.js": "4cce4a16b211fdcb315ba46f8cef8706",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
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

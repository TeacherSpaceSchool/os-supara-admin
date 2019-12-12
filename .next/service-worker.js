self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.fc1431d63b28ee38f0c7.js",
    "revision": "fd2a9625eca162e94cda"
  },
  {
    "url": "/_next/static/css/commons.6bbea07d.chunk.css",
    "revision": "fd2a9625eca162e94cda"
  },
  {
    "url": "/_next/static/runtime/main-e04efe777b78c0ac87c6.js",
    "revision": "dd8f27246635eac7c66d"
  },
  {
    "url": "/_next/static/runtime/webpack-4b444dab214c6491079c.js",
    "revision": "71726f334912f74c262a"
  },
  {
    "url": "/_next/static\\sq8PZVlnbGJvVUml1bIFv\\pages\\_app.js",
    "revision": "7e9ecac9654834d03105"
  },
  {
    "url": "/_next/static\\sq8PZVlnbGJvVUml1bIFv\\pages\\_error.js",
    "revision": "f108e020f43b6357c573"
  },
  {
    "url": "/_next/static\\sq8PZVlnbGJvVUml1bIFv\\pages\\ads.js",
    "revision": "ccab910055c510c2f213"
  },
  {
    "url": "/_next/static\\sq8PZVlnbGJvVUml1bIFv\\pages\\basket.js",
    "revision": "df0b99edaa1b8c760b41"
  },
  {
    "url": "/_next/static\\sq8PZVlnbGJvVUml1bIFv\\pages\\blog.js",
    "revision": "97a6b61ef8e692bfe5ad"
  },
  {
    "url": "/_next/static\\sq8PZVlnbGJvVUml1bIFv\\pages\\bonus.js",
    "revision": "bba39a673e5b07f804e9"
  },
  {
    "url": "/_next/static\\sq8PZVlnbGJvVUml1bIFv\\pages\\bonusclient.js",
    "revision": "5b1928e21a15e9c07f91"
  },
  {
    "url": "/_next/static\\sq8PZVlnbGJvVUml1bIFv\\pages\\brand\\[id].js",
    "revision": "53daf92bfd761ccfd2c3"
  },
  {
    "url": "/_next/static\\sq8PZVlnbGJvVUml1bIFv\\pages\\brands.js",
    "revision": "a8e2aaf9d833bc920af9"
  },
  {
    "url": "/_next/static\\sq8PZVlnbGJvVUml1bIFv\\pages\\client\\[id].js",
    "revision": "4dfc345c2855149643fe"
  },
  {
    "url": "/_next/static\\sq8PZVlnbGJvVUml1bIFv\\pages\\clients.js",
    "revision": "da4a857c7b7fb09c0ce3"
  },
  {
    "url": "/_next/static\\sq8PZVlnbGJvVUml1bIFv\\pages\\contact.js",
    "revision": "68d84fad4fec548c9ebf"
  },
  {
    "url": "/_next/static\\sq8PZVlnbGJvVUml1bIFv\\pages\\employment\\[id].js",
    "revision": "8da607abe5b36f57ad5a"
  },
  {
    "url": "/_next/static\\sq8PZVlnbGJvVUml1bIFv\\pages\\employments.js",
    "revision": "a7cb0809c960fb647b94"
  },
  {
    "url": "/_next/static\\sq8PZVlnbGJvVUml1bIFv\\pages\\favorite.js",
    "revision": "5e832131dfe4dc713b48"
  },
  {
    "url": "/_next/static\\sq8PZVlnbGJvVUml1bIFv\\pages\\index.js",
    "revision": "49e3e6cecf769dbc5d9a"
  },
  {
    "url": "/_next/static\\sq8PZVlnbGJvVUml1bIFv\\pages\\item\\[id].js",
    "revision": "9dfc44c555b3c7378b59"
  },
  {
    "url": "/_next/static\\sq8PZVlnbGJvVUml1bIFv\\pages\\items\\[id].js",
    "revision": "63256361758f66452a60"
  },
  {
    "url": "/_next/static\\sq8PZVlnbGJvVUml1bIFv\\pages\\notification.js",
    "revision": "956b4781c0d06e9637c6"
  },
  {
    "url": "/_next/static\\sq8PZVlnbGJvVUml1bIFv\\pages\\orders.js",
    "revision": "9ee3bb93613916f14ed0"
  },
  {
    "url": "/_next/static\\sq8PZVlnbGJvVUml1bIFv\\pages\\organization\\[id].js",
    "revision": "548112d3a0aefab49164"
  },
  {
    "url": "/_next/static\\sq8PZVlnbGJvVUml1bIFv\\pages\\organizations.js",
    "revision": "49d55725dfd322e41c68"
  },
  {
    "url": "/_next/static\\sq8PZVlnbGJvVUml1bIFv\\pages\\route\\[id].js",
    "revision": "e9e9d4208c0e1559528a"
  },
  {
    "url": "/_next/static\\sq8PZVlnbGJvVUml1bIFv\\pages\\routes.js",
    "revision": "927997753f7418b9fe8f"
  },
  {
    "url": "/_next/static\\sq8PZVlnbGJvVUml1bIFv\\pages\\subcategory\\[id].js",
    "revision": "385df891549428dc5612"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "static/192x192.png",
    "revision": "cc313352186009f4f254a1f151a32eda"
  },
  {
    "url": "static/512x512.png",
    "revision": "b271067deb34eb596ce3475e1801a308"
  },
  {
    "url": "static/add.png",
    "revision": "55251e1d4d78651b1c5eca6ecea6d0c4"
  },
  {
    "url": "static/brand.png",
    "revision": "851bb73993329b5b2e12b14b98dd5591"
  },
  {
    "url": "static/facebook.svg",
    "revision": "d3d5088f6491df12be40d840fcc12e2d"
  },
  {
    "url": "static/favicon.ico",
    "revision": "696fd1d88cf84b34bd936529cd379d04"
  },
  {
    "url": "static/instagram.svg",
    "revision": "bb3fda5c6302b48820cdb70cbec5c4c4"
  },
  {
    "url": "static/manifest.json",
    "revision": "bb991eb8f3fee6412946fe37eddd5ad2"
  },
  {
    "url": "static/milk.png",
    "revision": "ff9762bd70ccd73ca1c74e8f4f5fae27"
  },
  {
    "url": "static/sitemap.xml",
    "revision": "c0c63374f302c16fb3cbddf4a3bb4579"
  },
  {
    "url": "static/telegram.svg",
    "revision": "a1994736ad75ab94e8733fe148b6e44e"
  },
  {
    "url": "static/twitter.svg",
    "revision": "4f41a9846006dbe195ddcf426c32c502"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');

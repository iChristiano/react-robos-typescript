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

importScripts("/react-robos-typescript/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/react-robos-typescript/workbox-v3.6.3"});

importScripts(
  "/react-robos-typescript/precache-manifest.ba13be23a8a985dd1d48e53dbd2a9ccc.js"
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/react-robos-typescript/index.html", {
  
  blacklist: [/^\/_/,/\/[^/]+\.[^/]+$/],
});

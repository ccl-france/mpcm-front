!function(){"use strict";const e=1638718943555,t=`cache${e}`,s=["/client/client.a9d528c3.js","/client/inject_styles.5607aec6.js","/client/index.f782ddcb.js","/client/index.86df9440.js","/client/Seo.d8797d3c.js","/client/HowItWorks.38012e07.js","/client/Manifesto.b0026476.js","/client/SupportedBy.9a13ce76.js","/client/MentionedIn.4627ea19.js","/client/Collapse.9aff5616.js","/client/Image.43cf8b5a.js","/client/index.3b3ef50c.js","/client/index.48cf90c6.js","/client/Organization.627f9132.js","/client/index.90ca77c1.js","/client/index.10e80953.js","/client/Modal.a7ce69df.js"].concat(["/service-worker-index.html","/CNAME","/background.png","/background.webp","/favicon.png","/fonts/SpaceGrotesk-Bold.woff","/fonts/SpaceGrotesk-Bold.woff2","/fonts/SpaceGrotesk-Light.woff","/fonts/SpaceGrotesk-Light.woff2","/fonts/SpaceGrotesk-Medium.woff","/fonts/SpaceGrotesk-Medium.woff2","/fonts/SpaceGrotesk-Regular.woff","/fonts/SpaceGrotesk-Regular.woff2","/fonts/SpaceGrotesk-SemiBold.woff","/fonts/SpaceGrotesk-SemiBold.woff2","/global.css","/logo_white.png","/logo_white.webp","/manifest.json"]),n=new Set(s);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&n.has(s.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open(`offline${e}`).then((async e=>{try{const s=await fetch(t.request);return e.put(t.request,s.clone()),s}catch(s){const n=await e.match(t.request);if(n)return n;throw s}})))))}))}();
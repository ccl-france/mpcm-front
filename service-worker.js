!function(){"use strict";const e=1612636092877,t=`cache${e}`,n=["/client/client.53d9e4ca.js","/client/inject_styles.5607aec6.js","/client/index.3bdcc879.js","/client/index.7f4a354e.js","/client/Seo.166713f1.js","/client/Manifesto.654c0c05.js","/client/HowItWorks.5a5213c2.js","/client/SupportedBy.9b9a5589.js","/client/MentionedIn.b3385cce.js","/client/Image.f449c810.js","/client/index.72f28b3a.js","/client/index.5b343748.js","/client/Organization.3d01d01e.js","/client/index.f81d89bc.js","/client/index.683e2376.js","/client/Modal.6c3a53a1.js"].concat(["/service-worker-index.html","/CNAME","/background.png","/background.webp","/favicon.png","/fonts/SpaceGrotesk-Bold.woff","/fonts/SpaceGrotesk-Bold.woff2","/fonts/SpaceGrotesk-Light.woff","/fonts/SpaceGrotesk-Light.woff2","/fonts/SpaceGrotesk-Medium.woff","/fonts/SpaceGrotesk-Medium.woff2","/fonts/SpaceGrotesk-Regular.woff","/fonts/SpaceGrotesk-Regular.woff2","/fonts/SpaceGrotesk-SemiBold.woff","/fonts/SpaceGrotesk-SemiBold.woff2","/global.css","/logo_white.png","/logo_white.webp","/manifest.json"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&s.has(n.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open(`offline${e}`).then((async e=>{try{const n=await fetch(t.request);return e.put(t.request,n.clone()),n}catch(n){const s=await e.match(t.request);if(s)return s;throw n}})))))}))}();

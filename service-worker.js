!function(){"use strict";const e=1612644343110,t=`cache${e}`,s=["/client/client.e254c001.js","/client/inject_styles.5607aec6.js","/client/index.e276d554.js","/client/index.f33f1faa.js","/client/Seo.d14aa583.js","/client/Manifesto.fdd77377.js","/client/HowItWorks.0bd0b5bb.js","/client/SupportedBy.ab306f1a.js","/client/MentionedIn.d22828cc.js","/client/Image.f2409154.js","/client/index.a7434b2c.js","/client/index.437b8761.js","/client/Organization.fbf14a7f.js","/client/index.31383324.js","/client/index.30e58d1e.js","/client/Modal.c7cbc436.js"].concat(["/service-worker-index.html","/CNAME","/background.png","/background.webp","/favicon.png","/fonts/SpaceGrotesk-Bold.woff","/fonts/SpaceGrotesk-Bold.woff2","/fonts/SpaceGrotesk-Light.woff","/fonts/SpaceGrotesk-Light.woff2","/fonts/SpaceGrotesk-Medium.woff","/fonts/SpaceGrotesk-Medium.woff2","/fonts/SpaceGrotesk-Regular.woff","/fonts/SpaceGrotesk-Regular.woff2","/fonts/SpaceGrotesk-SemiBold.woff","/fonts/SpaceGrotesk-SemiBold.woff2","/global.css","/logo_white.png","/logo_white.webp","/manifest.json","/sitemap.xml"]),n=new Set(s);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&n.has(s.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open(`offline${e}`).then((async e=>{try{const s=await fetch(t.request);return e.put(t.request,s.clone()),s}catch(s){const n=await e.match(t.request);if(n)return n;throw s}})))))}))}();

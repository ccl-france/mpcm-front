import{S as e,i as t,s as a,e as n,c as r,f as l,h as s,j as i,a as o,l as f,k as m,p as c,q as h,m as g,r as u,t as p,b as x,d,v as $,w as v,H as b,u as I}from"./client.e254c001.js";import{I as w}from"./Image.f2409154.js";function j(e,t,a){const n=e.slice();return n[1]=t[a],n}function T(e){let t,a,$,v,b,I;return a=new w({props:{src:e[1].image.url,alt:e[1].image.alternativeText,width:200,height:40}}),{c(){t=n("a"),r(a.$$.fragment),$=l(),this.h()},l(e){t=s(e,"A",{rel:!0,target:!0,class:!0,"aria-label":!0,href:!0});var n=i(t);o(a.$$.fragment,n),$=f(n),n.forEach(m),this.h()},h(){c(t,"rel","external noopener noreferrer"),c(t,"target","_blank"),c(t,"class","block sm:flex-1 p-2 sm:p-0 opacity-50 hover:opacity-100 transition ease-in-out duration-200"),c(t,"aria-label",v=e[1].image.alternativeText),c(t,"href",b=e[1].href)},m(e,n){h(e,t,n),g(a,t,null),u(t,$),I=!0},p(e,n){const r={};1&n&&(r.src=e[1].image.url),1&n&&(r.alt=e[1].image.alternativeText),a.$set(r),(!I||1&n&&v!==(v=e[1].image.alternativeText))&&c(t,"aria-label",v),(!I||1&n&&b!==(b=e[1].href))&&c(t,"href",b)},i(e){I||(p(a.$$.fragment,e),I=!0)},o(e){x(a.$$.fragment,e),I=!1},d(e){e&&m(t),d(a)}}}function k(e){let t,a,r,o,g=e[0].text+"",u=e[0].articles,d=[];for(let t=0;t<u.length;t+=1)d[t]=T(j(e,u,t));const w=e=>x(d[e],1,1,(()=>{d[e]=null}));return{c(){a=l(),r=n("div");for(let e=0;e<d.length;e+=1)d[e].c();this.h()},l(e){a=f(e),r=s(e,"DIV",{class:!0});var t=i(r);for(let e=0;e<d.length;e+=1)d[e].l(t);t.forEach(m),this.h()},h(){t=new b(a),c(r,"class","flex-none max-w-15 sm:max-w-none mx-auto sm:flex items-center justify-around mb-24")},m(e,n){t.m(g,e,n),h(e,a,n),h(e,r,n);for(let e=0;e<d.length;e+=1)d[e].m(r,null);o=!0},p(e,[a]){if((!o||1&a)&&g!==(g=e[0].text+"")&&t.p(g),1&a){let t;for(u=e[0].articles,t=0;t<u.length;t+=1){const n=j(e,u,t);d[t]?(d[t].p(n,a),p(d[t],1)):(d[t]=T(n),d[t].c(),p(d[t],1),d[t].m(r,null))}for(I(),t=u.length;t<d.length;t+=1)w(t);$()}},i(e){if(!o){for(let e=0;e<u.length;e+=1)p(d[e]);o=!0}},o(e){d=d.filter(Boolean);for(let e=0;e<d.length;e+=1)x(d[e]);o=!1},d(e){e&&t.d(),e&&m(a),e&&m(r),v(d,e)}}}function y(e,t,a){let{mentionedIn:n}=t;return e.$$set=e=>{"mentionedIn"in e&&a(0,n=e.mentionedIn)},[n]}export default class extends e{constructor(e){super(),t(this,e,y,k,a,{mentionedIn:0})}}

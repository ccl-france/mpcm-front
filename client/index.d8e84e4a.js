import{S as s,i as a,s as t,c as e,f as n,e as r,g as o,a as l,l as i,h as c,j as f,o as h,k as u,p as m,m as p,q as $,r as d,t as x,b as w,d as v}from"./client.de2e3530.js";import"./Image.e06eeeb4.js";import g from"./HowItWorks.f687f8f7.js";import{S as j}from"./Seo.9c68cf21.js";function y(s){let a,t,y,E,I,P,D,b,H,S,A,T,V,k,z=s[0].plan+"";return a=new j({props:{seo:s[0].seo}}),H=new g({props:{hiw:s[0].hiw}}),{c(){e(a.$$.fragment),t=n(),y=r("section"),E=r("div"),I=r("div"),P=r("a"),D=o("Déjà lu ? Allez plus\n        loin."),b=n(),e(H.$$.fragment),S=n(),A=r("hr"),T=n(),V=r("div"),this.h()},l(s){l(a.$$.fragment,s),t=i(s),y=c(s,"SECTION",{class:!0});var e=f(y);E=c(e,"DIV",{class:!0});var n=f(E);I=c(n,"DIV",{class:!0});var r=f(I);P=c(r,"A",{href:!0,class:!0});var o=f(P);D=h(o,"Déjà lu ? Allez plus\n        loin."),o.forEach(u),r.forEach(u),b=i(n),l(H.$$.fragment,n),S=i(n),A=c(n,"HR",{class:!0}),T=i(n),V=c(n,"DIV",{id:!0}),f(V).forEach(u),n.forEach(u),e.forEach(u),this.h()},h(){m(P,"href","the-plan#details"),m(P,"class","text-sm underline"),m(I,"class","text-center mb-4"),m(A,"class","mx-auto max-w-3xl"),m(V,"id","details"),m(E,"class","max-w-2xl"),m(y,"class","pt-32 w-full max-w-4xl mx-auto py-16 sm:pb-32 px-6")},m(s,e){p(a,s,e),$(s,t,e),$(s,y,e),d(y,E),d(E,I),d(I,P),d(P,D),d(E,b),p(H,E,null),d(E,S),d(E,A),d(E,T),d(E,V),V.innerHTML=z,k=!0},p(s,[t]){const e={};1&t&&(e.seo=s[0].seo),a.$set(e);const n={};1&t&&(n.hiw=s[0].hiw),H.$set(n),(!k||1&t)&&z!==(z=s[0].plan+"")&&(V.innerHTML=z)},i(s){k||(x(a.$$.fragment,s),x(H.$$.fragment,s),k=!0)},o(s){w(a.$$.fragment,s),w(H.$$.fragment,s),k=!1},d(s){v(a,s),s&&u(t),s&&u(y),v(H)}}}var E=function(s,a,t,e){return new(t||(t=Promise))((function(n,r){function o(s){try{i(e.next(s))}catch(s){r(s)}}function l(s){try{i(e.throw(s))}catch(s){r(s)}}function i(s){var a;s.done?n(s.value):(a=s.value,a instanceof t?a:new t((function(s){s(a)}))).then(o,l)}i((e=e.apply(s,a||[])).next())}))};function I({params:s}){return E(this,void 0,void 0,(function*(){const s=yield this.fetch("/the-plan.json"),a=yield s.json();if(200===s.status)return{thePlan:a};this.error(s.status,a.message)}))}function P(s,a,t){let{thePlan:e}=a;return s.$$set=s=>{"thePlan"in s&&t(0,e=s.thePlan)},[e]}export default class extends s{constructor(s){super(),a(this,s,P,y,t,{thePlan:0})}}export{I as preload};

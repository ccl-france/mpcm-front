import{S as s,i as a,s as t,c as e,f as n,e as r,g as o,a as l,l as i,h as c,j as f,o as h,k as u,p as m,m as p,q as d,r as $,t as x,b as w,d as v}from"./client.5cfcb656.js";import g from"./HowItWorks.15d0b481.js";import"./Image.de1e2ca8.js";import{S as j}from"./Seo.2db73cf7.js";function b(s){let a,t,b,y,E,I,P,D,H,S,A,T,V,k,z=s[0].plan+"";return a=new j({props:{seo:s[0].seo}}),H=new g({props:{hiw:s[0].hiw}}),{c(){e(a.$$.fragment),t=n(),b=r("section"),y=r("div"),E=r("div"),I=r("a"),P=o("Déjà lu ? Allez plus\n        loin."),D=n(),e(H.$$.fragment),S=n(),A=r("hr"),T=n(),V=r("div"),this.h()},l(s){l(a.$$.fragment,s),t=i(s),b=c(s,"SECTION",{class:!0});var e=f(b);y=c(e,"DIV",{class:!0});var n=f(y);E=c(n,"DIV",{class:!0});var r=f(E);I=c(r,"A",{href:!0,class:!0});var o=f(I);P=h(o,"Déjà lu ? Allez plus\n        loin."),o.forEach(u),r.forEach(u),D=i(n),l(H.$$.fragment,n),S=i(n),A=c(n,"HR",{class:!0}),T=i(n),V=c(n,"DIV",{id:!0}),f(V).forEach(u),n.forEach(u),e.forEach(u),this.h()},h(){m(I,"href","the-plan#details"),m(I,"class","text-sm underline"),m(E,"class","text-center mb-4"),m(A,"class","mx-auto max-w-3xl"),m(V,"id","details"),m(y,"class","max-w-2xl"),m(b,"class","pt-32 w-full max-w-4xl mx-auto py-16 sm:pb-32 px-6")},m(s,e){p(a,s,e),d(s,t,e),d(s,b,e),$(b,y),$(y,E),$(E,I),$(I,P),$(y,D),p(H,y,null),$(y,S),$(y,A),$(y,T),$(y,V),V.innerHTML=z,k=!0},p(s,[t]){const e={};1&t&&(e.seo=s[0].seo),a.$set(e);const n={};1&t&&(n.hiw=s[0].hiw),H.$set(n),(!k||1&t)&&z!==(z=s[0].plan+"")&&(V.innerHTML=z)},i(s){k||(x(a.$$.fragment,s),x(H.$$.fragment,s),k=!0)},o(s){w(a.$$.fragment,s),w(H.$$.fragment,s),k=!1},d(s){v(a,s),s&&u(t),s&&u(b),v(H)}}}var y=function(s,a,t,e){return new(t||(t=Promise))((function(n,r){function o(s){try{i(e.next(s))}catch(s){r(s)}}function l(s){try{i(e.throw(s))}catch(s){r(s)}}function i(s){var a;s.done?n(s.value):(a=s.value,a instanceof t?a:new t((function(s){s(a)}))).then(o,l)}i((e=e.apply(s,a||[])).next())}))};function E({params:s}){return y(this,void 0,void 0,(function*(){const s=yield this.fetch("/the-plan.json"),a=yield s.json();if(200===s.status)return{thePlan:a};this.error(s.status,a.message)}))}function I(s,a,t){let{thePlan:e}=a;return s.$$set=s=>{"thePlan"in s&&t(0,e=s.thePlan)},[e]}export default class extends s{constructor(s){super(),a(this,s,I,b,t,{thePlan:0})}}export{E as preload};
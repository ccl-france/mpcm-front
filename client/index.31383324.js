import{S as s,i as a,s as t,c as n,f as e,e as r,g as o,a as l,l as i,h as c,j as f,o as h,k as u,p as m,m as p,q as $,r as d,t as x,b as w,d as v}from"./client.e254c001.js";import g from"./HowItWorks.0bd0b5bb.js";import"./Image.f2409154.js";import{S as j}from"./Seo.d14aa583.js";function b(s){let a,t,b,y,E,I,P,D,H,S,A,T,V,k,z=s[0].plan+"";return a=new j({props:{seo:s[0].seo}}),H=new g({props:{hiw:s[0].hiw}}),{c(){n(a.$$.fragment),t=e(),b=r("section"),y=r("div"),E=r("div"),I=r("a"),P=o("Déjà lu ? Allez plus\n        loin."),D=e(),n(H.$$.fragment),S=e(),A=r("hr"),T=e(),V=r("div"),this.h()},l(s){l(a.$$.fragment,s),t=i(s),b=c(s,"SECTION",{class:!0});var n=f(b);y=c(n,"DIV",{class:!0});var e=f(y);E=c(e,"DIV",{class:!0});var r=f(E);I=c(r,"A",{href:!0,class:!0});var o=f(I);P=h(o,"Déjà lu ? Allez plus\n        loin."),o.forEach(u),r.forEach(u),D=i(e),l(H.$$.fragment,e),S=i(e),A=c(e,"HR",{class:!0}),T=i(e),V=c(e,"DIV",{id:!0}),f(V).forEach(u),e.forEach(u),n.forEach(u),this.h()},h(){m(I,"href","the-plan#details"),m(I,"class","text-sm underline"),m(E,"class","text-center mb-4"),m(A,"class","mx-auto max-w-3xl"),m(V,"id","details"),m(y,"class","max-w-2xl"),m(b,"class","pt-32 w-full max-w-4xl mx-auto py-16 sm:pb-32 px-6")},m(s,n){p(a,s,n),$(s,t,n),$(s,b,n),d(b,y),d(y,E),d(E,I),d(I,P),d(y,D),p(H,y,null),d(y,S),d(y,A),d(y,T),d(y,V),V.innerHTML=z,k=!0},p(s,[t]){const n={};1&t&&(n.seo=s[0].seo),a.$set(n);const e={};1&t&&(e.hiw=s[0].hiw),H.$set(e),(!k||1&t)&&z!==(z=s[0].plan+"")&&(V.innerHTML=z)},i(s){k||(x(a.$$.fragment,s),x(H.$$.fragment,s),k=!0)},o(s){w(a.$$.fragment,s),w(H.$$.fragment,s),k=!1},d(s){v(a,s),s&&u(t),s&&u(b),v(H)}}}var y=function(s,a,t,n){return new(t||(t=Promise))((function(e,r){function o(s){try{i(n.next(s))}catch(s){r(s)}}function l(s){try{i(n.throw(s))}catch(s){r(s)}}function i(s){var a;s.done?e(s.value):(a=s.value,a instanceof t?a:new t((function(s){s(a)}))).then(o,l)}i((n=n.apply(s,a||[])).next())}))};function E({params:s}){return y(this,void 0,void 0,(function*(){const s=yield this.fetch("/the-plan.json"),a=yield s.json();if(200===s.status)return{thePlan:a};this.error(s.status,a.message)}))}function I(s,a,t){let{thePlan:n}=a;return s.$$set=s=>{"thePlan"in s&&t(0,n=s.thePlan)},[n]}export default class extends s{constructor(s){super(),a(this,s,I,b,t,{thePlan:0})}}export{E as preload};

import{$ as t,a as n,b as a,c as e,d as r,i as s,e as c,S as o,s as i,I as u,X as f,l,T as h,J as p,Y as m,m as v,n as $,U as x,p as d,R as w,K as g,r as y,V as j,y as b,t as D,g as I,L as P}from"./client.bb4f0f46.js";import R from"./HowItWorks.e9ac358c.js";import"./Image.e73f9100.js";import{S as E}from"./Seo.c9409ee1.js";function S(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,s=a(t);if(n){var c=a(this).constructor;r=Reflect.construct(s,arguments,c)}else r=s.apply(this,arguments);return e(this,r)}}function H(t){var n,a,e,r,s,c,o,i,S,H,T,V,k,A,L=t[0].plan+"";return n=new E({props:{seo:t[0].seo}}),S=new R({props:{hiw:t[0].hiw}}),{c:function(){u(n.$$.fragment),a=f(),e=l("section"),r=l("div"),s=l("div"),c=l("a"),o=h("Déjà lu ? Allez plus\n        loin."),i=f(),u(S.$$.fragment),H=f(),T=l("hr"),V=f(),k=l("div"),this.h()},l:function(t){p(n.$$.fragment,t),a=m(t),e=v(t,"SECTION",{class:!0});var u=$(e);r=v(u,"DIV",{class:!0});var f=$(r);s=v(f,"DIV",{class:!0});var l=$(s);c=v(l,"A",{href:!0,class:!0});var h=$(c);o=x(h,"Déjà lu ? Allez plus\n        loin."),h.forEach(d),l.forEach(d),i=m(f),p(S.$$.fragment,f),H=m(f),T=v(f,"HR",{class:!0}),V=m(f),k=v(f,"DIV",{id:!0}),$(k).forEach(d),f.forEach(d),u.forEach(d),this.h()},h:function(){w(c,"href","the-plan#details"),w(c,"class","text-sm underline"),w(s,"class","text-center mb-4"),w(T,"class","mx-auto max-w-3xl"),w(k,"id","details"),w(r,"class","max-w-2xl"),w(e,"class","pt-32 w-full max-w-4xl mx-auto py-16 sm:pb-32 px-6")},m:function(t,u){g(n,t,u),y(t,a,u),y(t,e,u),j(e,r),j(r,s),j(s,c),j(c,o),j(r,i),g(S,r,null),j(r,H),j(r,T),j(r,V),j(r,k),k.innerHTML=L,A=!0},p:function(t,a){var e=b(a,1)[0],r={};1&e&&(r.seo=t[0].seo),n.$set(r);var s={};1&e&&(s.hiw=t[0].hiw),S.$set(s),(!A||1&e)&&L!==(L=t[0].plan+"")&&(k.innerHTML=L)},i:function(t){A||(D(n.$$.fragment,t),D(S.$$.fragment,t),A=!0)},o:function(t){I(n.$$.fragment,t),I(S.$$.fragment,t),A=!1},d:function(t){P(n,t),t&&d(a),t&&d(e),P(S)}}}var T=function(t,n,a,e){return new(a||(a=Promise))((function(r,s){function c(t){try{i(e.next(t))}catch(t){s(t)}}function o(t){try{i(e.throw(t))}catch(t){s(t)}}function i(t){var n;t.done?r(t.value):(n=t.value,n instanceof a?n:new a((function(t){t(n)}))).then(c,o)}i((e=e.apply(t,n||[])).next())}))};function V(n){n.params;return T(this,void 0,void 0,t.mark((function n(){var a,e;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("/the-plan.json");case 2:return a=t.sent,t.next=5,a.json();case 5:if(e=t.sent,200!==a.status){t.next=10;break}return t.abrupt("return",{thePlan:e});case 10:this.error(a.status,e.message);case 11:case"end":return t.stop()}}),n,this)})))}function k(t,n,a){var e=n.thePlan;return t.$$set=function(t){"thePlan"in t&&a(0,e=t.thePlan)},[e]}var A=function(t){n(e,o);var a=S(e);function e(t){var n;return r(this,e),n=a.call(this),s(c(n),t,k,H,i,{thePlan:0}),n}return e}();export default A;export{V as preload};

import{S as O,i as P,s as W,e as _,j as A,k as V,t as T,c as g,a as v,m as F,d as f,n as k,g as q,b as $,f as y,D as h,o as G,h as z,x as D,u as j,v as J,r as K,w as L,O as M}from"./vendor-73570837.js";import{I as N}from"./Image-9552384c.js";function B(c,l,n){const s=c.slice();return s[1]=l[n],s[3]=n,s}function C(c){let l,n,s,i,e,u,t=c[1].label+"",r,a,m,x=c[1].text+"",I,E,p;return s=new N({props:{src:c[1].image.url,alt:c[1].image.alternativeText,width:312,height:150,loading:c[3]===0?"eager":"lazy"}}),{c(){l=_("div"),n=_("div"),A(s.$$.fragment),i=V(),e=_("div"),u=_("div"),r=T(t),a=V(),m=_("p"),I=T(x),E=V(),this.h()},l(o){l=g(o,"DIV",{class:!0});var d=v(l);n=g(d,"DIV",{});var b=v(n);F(s.$$.fragment,b),b.forEach(f),i=k(d),e=g(d,"DIV",{});var w=v(e);u=g(w,"DIV",{class:!0});var H=v(u);r=q(H,t),H.forEach(f),a=k(w),m=g(w,"P",{});var S=v(m);I=q(S,x),S.forEach(f),w.forEach(f),E=k(d),d.forEach(f),this.h()},h(){$(u,"class","flex items-center mb-2 text-lg font-semibold"),$(l,"class","mb-12 sm:flex sm:flex-col sm:items-center")},m(o,d){y(o,l,d),h(l,n),G(s,n,null),h(l,i),h(l,e),h(e,u),h(u,r),h(e,a),h(e,m),h(m,I),h(l,E),p=!0},p(o,d){const b={};d&1&&(b.src=o[1].image.url),d&1&&(b.alt=o[1].image.alternativeText),s.$set(b),(!p||d&1)&&t!==(t=o[1].label+"")&&z(r,t),(!p||d&1)&&x!==(x=o[1].text+"")&&z(I,x)},i(o){p||(D(s.$$.fragment,o),p=!0)},o(o){j(s.$$.fragment,o),p=!1},d(o){o&&f(l),J(s)}}}function Q(c){let l,n,s,i=c[0].steps,e=[];for(let t=0;t<i.length;t+=1)e[t]=C(B(c,i,t));const u=t=>j(e[t],1,1,()=>{e[t]=null});return{c(){l=_("div"),n=_("div");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){l=g(t,"DIV",{class:!0});var r=v(l);n=g(r,"DIV",{class:!0});var a=v(n);for(let m=0;m<e.length;m+=1)e[m].l(a);a.forEach(f),r.forEach(f),this.h()},h(){$(n,"class","grid grid-cols-1 md:grid-cols-3 gap-10"),$(l,"class","relative bg-sand-100 mt-12 p-10 pb-0 md:pr-20 md:pl-20 mx-auto max-w-7xl rounded-sm")},m(t,r){y(t,l,r),h(l,n);for(let a=0;a<e.length;a+=1)e[a].m(n,null);s=!0},p(t,[r]){if(r&1){i=t[0].steps;let a;for(a=0;a<i.length;a+=1){const m=B(t,i,a);e[a]?(e[a].p(m,r),D(e[a],1)):(e[a]=C(m),e[a].c(),D(e[a],1),e[a].m(n,null))}for(K(),a=i.length;a<e.length;a+=1)u(a);L()}},i(t){if(!s){for(let r=0;r<i.length;r+=1)D(e[r]);s=!0}},o(t){e=e.filter(Boolean);for(let r=0;r<e.length;r+=1)j(e[r]);s=!1},d(t){t&&f(l),M(e,t)}}}function R(c,l,n){let{hiw:s}=l;return c.$$set=i=>{"hiw"in i&&n(0,s=i.hiw)},[s]}class Y extends O{constructor(l){super();P(this,l,R,Q,W,{hiw:0})}}export{Y as H};

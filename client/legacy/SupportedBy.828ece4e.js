import{a as t,b as n,c as r,d as e,i as a,e as s,S as o,s as c,l as i,I as f,X as l,m as u,n as h,J as m,Y as p,p as v,R as g,r as x,K as d,V as y,t as $,g as w,L as I,y as R,F as b,a4 as B,E as D}from"./client.b0d2e188.js";import{I as E}from"./Image.d46f7aed.js";function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=n(t);if(e){var o=n(this).constructor;a=Reflect.construct(s,arguments,o)}else a=s.apply(this,arguments);return r(this,a)}}function V(t,n,r){var e=t.slice();return e[1]=n[r],e}function j(t){var n,r,e,a,s;return r=new E({props:{src:t[1].image.url,alt:t[1].image.alternativeText,classes:"w-40 mx-auto sm:w-full h-16 object-contain",width:250,height:64}}),{c:function(){n=i("a"),f(r.$$.fragment),e=l(),this.h()},l:function(t){n=u(t,"A",{class:!0,href:!0,rel:!0,target:!0});var a=h(n);m(r.$$.fragment,a),e=p(a),a.forEach(v),this.h()},h:function(){g(n,"class","inline-block md:w-1/2 p-2 xl:p-4"),g(n,"href",a=t[1].href),g(n,"rel","external noopener noreferer"),g(n,"target","_blank")},m:function(t,a){x(t,n,a),d(r,n,null),y(n,e),s=!0},p:function(t,e){var o={};1&e&&(o.src=t[1].image.url),1&e&&(o.alt=t[1].image.alternativeText),r.$set(o),(!s||1&e&&a!==(a=t[1].href))&&g(n,"href",a)},i:function(t){s||($(r.$$.fragment,t),s=!0)},o:function(t){w(r.$$.fragment,t),s=!1},d:function(t){t&&v(n),I(r)}}}function L(t){for(var n,r,e,a,s,o=t[0].text+"",c=t[0].organizations,f=[],m=0;m<c.length;m+=1)f[m]=j(V(t,c,m));var d=function(t){return w(f[t],1,1,(function(){f[t]=null}))};return{c:function(){n=i("div"),r=i("div");for(var t=0;t<f.length;t+=1)f[t].c();e=l(),a=i("div"),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var s=h(n);r=u(s,"DIV",{class:!0});for(var o=h(r),c=0;c<f.length;c+=1)f[c].l(o);o.forEach(v),e=p(s),a=u(s,"DIV",{class:!0}),h(a).forEach(v),s.forEach(v),this.h()},h:function(){g(r,"class","sm:w-1/2 sm:mr-8 lg:mr-8 xl:mr-16 text-center py-4"),g(a,"class","sm:w-1/2 sm:ml-8 xl:ml-16 text-center sm:text-left"),g(n,"class","flex flex-col-reverse sm:flex-row sm:items-center sm:px-8 lg:px-32")},m:function(t,c){x(t,n,c),y(n,r);for(var i=0;i<f.length;i+=1)f[i].m(r,null);y(n,e),y(n,a),a.innerHTML=o,s=!0},p:function(t,n){var e=R(n,1)[0];if(1&e){var i;for(c=t[0].organizations,i=0;i<c.length;i+=1){var l=V(t,c,i);f[i]?(f[i].p(l,e),$(f[i],1)):(f[i]=j(l),f[i].c(),$(f[i],1),f[i].m(r,null))}for(D(),i=c.length;i<f.length;i+=1)d(i);b()}(!s||1&e)&&o!==(o=t[0].text+"")&&(a.innerHTML=o)},i:function(t){if(!s){for(var n=0;n<c.length;n+=1)$(f[n]);s=!0}},o:function(t){f=f.filter(Boolean);for(var n=0;n<f.length;n+=1)w(f[n]);s=!1},d:function(t){t&&v(n),B(f,t)}}}function k(t,n,r){var e=n.supportedBy;return t.$$set=function(t){"supportedBy"in t&&r(0,e=t.supportedBy)},[e]}var z=function(n){t(i,o);var r=T(i);function i(t){var n;return e(this,i),n=r.call(this),a(s(n),t,k,L,c,{supportedBy:0}),n}return i}();export default z;

import{a as t,b as n,c as r,d as a,i as e,e as s,S as c,s as o,a1 as f,l as u,X as i,I as l,m as h,n as p,Y as m,J as $,p as v,a9 as d,R as x,r as b,V as g,K as y,y as R,t as w,g as D,L as E,T as I,U as S,W as V}from"./client.bb4f0f46.js";function j(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,s=n(t);if(a){var c=n(this).constructor;e=Reflect.construct(s,arguments,c)}else e=s.apply(this,arguments);return r(this,e)}}function k(t){var n,r=t[1].text+"";return{c:function(){n=I(r)},l:function(t){n=S(t,r)},m:function(t,r){b(t,n,r)},p:function(t,a){2&a&&r!==(r=t[1].text+"")&&V(n,r)},d:function(t){t&&v(n)}}}function A(t){var n,r,a,e,s,c,o;return s=new f({props:{classes:"my-4 md:mb-0",$$slots:{default:[k]},$$scope:{ctx:t}}}),{c:function(){n=u("div"),a=i(),e=u("a"),l(s.$$.fragment),this.h()},l:function(t){n=h(t,"DIV",{class:!0});var r=p(n);a=m(r),e=h(r,"A",{href:!0,target:!0,rel:!0});var c=p(e);$(s.$$.fragment,c),c.forEach(v),r.forEach(v),this.h()},h:function(){r=new d(a),x(e,"href",c=t[1].href),x(e,"target","_blank"),x(e,"rel","noopener noreferrer"),x(n,"class","relative bg-sand-100 p-10 md:p-20 mx-auto max-w-3xl rounded-sm")},m:function(c,f){b(c,n,f),r.m(t[0],n),g(n,a),g(n,e),y(s,e,null),o=!0},p:function(t,n){var a=R(n,1)[0];(!o||1&a)&&r.p(t[0]);var f={};6&a&&(f.$$scope={dirty:a,ctx:t}),s.$set(f),(!o||2&a&&c!==(c=t[1].href))&&x(e,"href",c)},i:function(t){o||(w(s.$$.fragment,t),o=!0)},o:function(t){D(s.$$.fragment,t),o=!1},d:function(t){t&&v(n),E(s)}}}function J(t,n,r){var a=n.text,e=n.button;return t.$$set=function(t){"text"in t&&r(0,a=t.text),"button"in t&&r(1,e=t.button)},[a,e]}var K=function(n){t(f,c);var r=j(f);function f(t){var n;return a(this,f),n=r.call(this),e(s(n),t,J,A,o,{text:0,button:1}),n}return f}();export default K;

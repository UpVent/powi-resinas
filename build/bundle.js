var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function l(){return Object.create(null)}function o(t){t.forEach(n)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a,r;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function u(t,e,n,l){if(t){const o=d(t,e,n,l);return t[0](o)}}function d(t,n,l,o){return t[1]&&o?e(l.ctx.slice(),t[1](o(n))):l.ctx}function h(t,e,n,l){if(t[2]&&l){const o=t[2](l(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let l=0;l<n;l+=1)t[l]=e.dirty[l]|o[l];return t}return e.dirty|o}return e.dirty}function f(t,e,n,l,o,i){if(o){const s=d(e,n,l,i);t.p(s,o)}}function m(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function p(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function g(t,e){const n={};e=new Set(e);for(const l in t)e.has(l)||"$"===l[0]||(n[l]=t[l]);return n}function w(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function x(t){return document.createElement(t)}function b(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function L(t){return document.createTextNode(t)}function y(){return L(" ")}function z(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t,e){for(const n in e)k(t,n,e[n])}function A(t,e,n){t.classList[n?"add":"remove"](e)}function M(t){r=t}function B(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const _=[],V=[],E=[],j=[],S=Promise.resolve();let P=!1;function q(t){E.push(t)}const H=new Set;let N=0;function R(){const t=r;do{for(;N<_.length;){const t=_[N];N++,M(t),T(t.$$)}for(M(null),_.length=0,N=0;V.length;)V.pop()();for(let t=0;t<E.length;t+=1){const e=E[t];H.has(e)||(H.add(e),e())}E.length=0}while(_.length);for(;j.length;)j.pop()();P=!1,H.clear(),M(t)}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const G=new Set;function I(t,e){t&&t.i&&(G.delete(t),t.i(e))}function D(t,e,n,l){if(t&&t.o){if(G.has(t))return;G.add(t),undefined.c.push((()=>{G.delete(t),l&&(n&&t.d(1),l())})),t.o(e)}}function O(t,e){const n={},l={},o={$$scope:1};let i=t.length;for(;i--;){const s=t[i],a=e[i];if(a){for(const t in s)t in a||(l[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[i]=a}else for(const t in s)o[t]=1}for(const t in l)t in n||(n[t]=void 0);return n}function U(t){t&&t.c()}function Y(t,e,l,s){const{fragment:a,on_mount:r,on_destroy:c,after_update:u}=t.$$;a&&a.m(e,l),s||q((()=>{const e=r.map(n).filter(i);c?c.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(q)}function F(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function X(t,e){-1===t.$$.dirty[0]&&(_.push(t),P||(P=!0,S.then(R)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(e,n,i,s,a,c,u,d=[-1]){const h=r;M(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:l(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(h?h.$$.context:[])),callbacks:l(),dirty:d,skip_bound:!1,root:n.target||h.$$.root};u&&u(f.root);let m=!1;if(f.ctx=i?i(e,n.props||{},((t,n,...l)=>{const o=l.length?l[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),m&&X(e,t)),n})):[],f.update(),m=!0,o(f.before_update),f.fragment=!!s&&s(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(v)}else f.fragment&&f.fragment.c();n.intro&&I(e.$$.fragment),Y(e,n.target,n.anchor,n.customElement),R()}M(h)}class K{$destroy(){F(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Q(t){let n,l,i,s,a,r;const c=t[2].default,d=u(c,t,t[1],null);let p=[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},t[0]],g={};for(let t=0;t<p.length;t+=1)g=e(g,p[t]);return{c(){n=b("svg"),d&&d.c(),l=b("path"),i=b("path"),k(l,"fill-rule","evenodd"),k(l,"d","M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"),k(i,"fill-rule","evenodd"),k(i,"d","M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"),C(n,g),A(n,"bi",!0),A(n,"bi-house",!0)},m(e,o){$(e,n,o),d&&d.m(n,null),w(n,l),w(n,i),s=!0,a||(r=[z(n,"click",t[3]),z(n,"mouseover",t[4]),z(n,"mouseenter",t[5]),z(n,"mouseleave",t[6]),z(n,"keydown",t[7])],a=!0)},p(t,[e]){d&&d.p&&(!s||2&e)&&f(d,c,t,t[1],s?h(c,t[1],e,null):m(t[1]),null),C(n,g=O(p,[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},1&e&&t[0]])),A(n,"bi",!0),A(n,"bi-house",!0)},i(t){s||(I(d,t),s=!0)},o(t){D(d,t),s=!1},d(t){t&&v(n),d&&d.d(t),a=!1,o(r)}}}function W(t,n,l){const o=[];let i=g(n,o),{$$slots:s={},$$scope:a}=n;return t.$$set=t=>{n=e(e({},n),p(t)),l(0,i=g(n,o)),"$$scope"in t&&l(1,a=t.$$scope)},[i,a,s,function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)}]}var Z=class extends K{constructor(t){super(),J(this,t,W,Q,s,{})}};function tt(t){let n,l,i,s,a;const r=t[2].default,c=u(r,t,t[1],null);let d=[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},t[0]],p={};for(let t=0;t<d.length;t+=1)p=e(p,d[t]);return{c(){n=b("svg"),c&&c.c(),l=b("path"),k(l,"d","M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"),C(n,p),A(n,"bi",!0),A(n,"bi-bag-fill",!0)},m(e,o){$(e,n,o),c&&c.m(n,null),w(n,l),i=!0,s||(a=[z(n,"click",t[3]),z(n,"mouseover",t[4]),z(n,"mouseenter",t[5]),z(n,"mouseleave",t[6]),z(n,"keydown",t[7])],s=!0)},p(t,[e]){c&&c.p&&(!i||2&e)&&f(c,r,t,t[1],i?h(r,t[1],e,null):m(t[1]),null),C(n,p=O(d,[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},1&e&&t[0]])),A(n,"bi",!0),A(n,"bi-bag-fill",!0)},i(t){i||(I(c,t),i=!0)},o(t){D(c,t),i=!1},d(t){t&&v(n),c&&c.d(t),s=!1,o(a)}}}function et(t,n,l){const o=[];let i=g(n,o),{$$slots:s={},$$scope:a}=n;return t.$$set=t=>{n=e(e({},n),p(t)),l(0,i=g(n,o)),"$$scope"in t&&l(1,a=t.$$scope)},[i,a,s,function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)}]}var nt=class extends K{constructor(t){super(),J(this,t,et,tt,s,{})}};function lt(t){let n,l,i,s,a,r;const c=t[2].default,d=u(c,t,t[1],null);let p=[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},t[0]],g={};for(let t=0;t<p.length;t+=1)g=e(g,p[t]);return{c(){n=b("svg"),d&&d.c(),l=b("path"),i=b("path"),k(l,"d","M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"),k(i,"d","M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"),C(n,g),A(n,"bi",!0),A(n,"bi-images",!0)},m(e,o){$(e,n,o),d&&d.m(n,null),w(n,l),w(n,i),s=!0,a||(r=[z(n,"click",t[3]),z(n,"mouseover",t[4]),z(n,"mouseenter",t[5]),z(n,"mouseleave",t[6]),z(n,"keydown",t[7])],a=!0)},p(t,[e]){d&&d.p&&(!s||2&e)&&f(d,c,t,t[1],s?h(c,t[1],e,null):m(t[1]),null),C(n,g=O(p,[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},1&e&&t[0]])),A(n,"bi",!0),A(n,"bi-images",!0)},i(t){s||(I(d,t),s=!0)},o(t){D(d,t),s=!1},d(t){t&&v(n),d&&d.d(t),a=!1,o(r)}}}function ot(t,n,l){const o=[];let i=g(n,o),{$$slots:s={},$$scope:a}=n;return t.$$set=t=>{n=e(e({},n),p(t)),l(0,i=g(n,o)),"$$scope"in t&&l(1,a=t.$$scope)},[i,a,s,function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)}]}var it=class extends K{constructor(t){super(),J(this,t,ot,lt,s,{})}};function st(t){let n,l,i,s,a;const r=t[2].default,c=u(r,t,t[1],null);let d=[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},t[0]],p={};for(let t=0;t<d.length;t+=1)p=e(p,d[t]);return{c(){n=b("svg"),c&&c.c(),l=b("path"),k(l,"d","M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"),C(n,p),A(n,"bi",!0),A(n,"bi-instagram",!0)},m(e,o){$(e,n,o),c&&c.m(n,null),w(n,l),i=!0,s||(a=[z(n,"click",t[3]),z(n,"mouseover",t[4]),z(n,"mouseenter",t[5]),z(n,"mouseleave",t[6]),z(n,"keydown",t[7])],s=!0)},p(t,[e]){c&&c.p&&(!i||2&e)&&f(c,r,t,t[1],i?h(r,t[1],e,null):m(t[1]),null),C(n,p=O(d,[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},1&e&&t[0]])),A(n,"bi",!0),A(n,"bi-instagram",!0)},i(t){i||(I(c,t),i=!0)},o(t){D(c,t),i=!1},d(t){t&&v(n),c&&c.d(t),s=!1,o(a)}}}function at(t,n,l){const o=[];let i=g(n,o),{$$slots:s={},$$scope:a}=n;return t.$$set=t=>{n=e(e({},n),p(t)),l(0,i=g(n,o)),"$$scope"in t&&l(1,a=t.$$scope)},[i,a,s,function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)}]}var rt=class extends K{constructor(t){super(),J(this,t,at,st,s,{})}};function ct(t){let n,l,i,s,a;const r=t[2].default,c=u(r,t,t[1],null);let d=[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},t[0]],p={};for(let t=0;t<d.length;t+=1)p=e(p,d[t]);return{c(){n=b("svg"),c&&c.c(),l=b("path"),k(l,"d","M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"),C(n,p),A(n,"bi",!0),A(n,"bi-twitter",!0)},m(e,o){$(e,n,o),c&&c.m(n,null),w(n,l),i=!0,s||(a=[z(n,"click",t[3]),z(n,"mouseover",t[4]),z(n,"mouseenter",t[5]),z(n,"mouseleave",t[6]),z(n,"keydown",t[7])],s=!0)},p(t,[e]){c&&c.p&&(!i||2&e)&&f(c,r,t,t[1],i?h(r,t[1],e,null):m(t[1]),null),C(n,p=O(d,[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},1&e&&t[0]])),A(n,"bi",!0),A(n,"bi-twitter",!0)},i(t){i||(I(c,t),i=!0)},o(t){D(c,t),i=!1},d(t){t&&v(n),c&&c.d(t),s=!1,o(a)}}}function ut(t,n,l){const o=[];let i=g(n,o),{$$slots:s={},$$scope:a}=n;return t.$$set=t=>{n=e(e({},n),p(t)),l(0,i=g(n,o)),"$$scope"in t&&l(1,a=t.$$scope)},[i,a,s,function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)}]}var dt=class extends K{constructor(t){super(),J(this,t,ut,ct,s,{})}};function ht(t){let n,l,i,s,a;const r=t[2].default,c=u(r,t,t[1],null);let d=[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},t[0]],p={};for(let t=0;t<d.length;t+=1)p=e(p,d[t]);return{c(){n=b("svg"),c&&c.c(),l=b("path"),k(l,"d","M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"),C(n,p),A(n,"bi",!0),A(n,"bi-facebook",!0)},m(e,o){$(e,n,o),c&&c.m(n,null),w(n,l),i=!0,s||(a=[z(n,"click",t[3]),z(n,"mouseover",t[4]),z(n,"mouseenter",t[5]),z(n,"mouseleave",t[6]),z(n,"keydown",t[7])],s=!0)},p(t,[e]){c&&c.p&&(!i||2&e)&&f(c,r,t,t[1],i?h(r,t[1],e,null):m(t[1]),null),C(n,p=O(d,[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},1&e&&t[0]])),A(n,"bi",!0),A(n,"bi-facebook",!0)},i(t){i||(I(c,t),i=!0)},o(t){D(c,t),i=!1},d(t){t&&v(n),c&&c.d(t),s=!1,o(a)}}}function ft(t,n,l){const o=[];let i=g(n,o),{$$slots:s={},$$scope:a}=n;return t.$$set=t=>{n=e(e({},n),p(t)),l(0,i=g(n,o)),"$$scope"in t&&l(1,a=t.$$scope)},[i,a,s,function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)}]}var mt=class extends K{constructor(t){super(),J(this,t,ft,ht,s,{})}};function pt(t){let n,l,i,s,a;const r=t[2].default,c=u(r,t,t[1],null);let d=[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},t[0]],p={};for(let t=0;t<d.length;t+=1)p=e(p,d[t]);return{c(){n=b("svg"),c&&c.c(),l=b("path"),k(l,"d","M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"),C(n,p),A(n,"bi",!0),A(n,"bi-box-seam",!0)},m(e,o){$(e,n,o),c&&c.m(n,null),w(n,l),i=!0,s||(a=[z(n,"click",t[3]),z(n,"mouseover",t[4]),z(n,"mouseenter",t[5]),z(n,"mouseleave",t[6]),z(n,"keydown",t[7])],s=!0)},p(t,[e]){c&&c.p&&(!i||2&e)&&f(c,r,t,t[1],i?h(r,t[1],e,null):m(t[1]),null),C(n,p=O(d,[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},1&e&&t[0]])),A(n,"bi",!0),A(n,"bi-box-seam",!0)},i(t){i||(I(c,t),i=!0)},o(t){D(c,t),i=!1},d(t){t&&v(n),c&&c.d(t),s=!1,o(a)}}}function gt(t,n,l){const o=[];let i=g(n,o),{$$slots:s={},$$scope:a}=n;return t.$$set=t=>{n=e(e({},n),p(t)),l(0,i=g(n,o)),"$$scope"in t&&l(1,a=t.$$scope)},[i,a,s,function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)}]}var wt=class extends K{constructor(t){super(),J(this,t,gt,pt,s,{})}};function $t(t){let n,l,i,s,a;const r=t[2].default,c=u(r,t,t[1],null);let d=[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},t[0]],p={};for(let t=0;t<d.length;t+=1)p=e(p,d[t]);return{c(){n=b("svg"),c&&c.c(),l=b("path"),k(l,"d","M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"),C(n,p),A(n,"bi",!0),A(n,"bi-people",!0)},m(e,o){$(e,n,o),c&&c.m(n,null),w(n,l),i=!0,s||(a=[z(n,"click",t[3]),z(n,"mouseover",t[4]),z(n,"mouseenter",t[5]),z(n,"mouseleave",t[6]),z(n,"keydown",t[7])],s=!0)},p(t,[e]){c&&c.p&&(!i||2&e)&&f(c,r,t,t[1],i?h(r,t[1],e,null):m(t[1]),null),C(n,p=O(d,[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},1&e&&t[0]])),A(n,"bi",!0),A(n,"bi-people",!0)},i(t){i||(I(c,t),i=!0)},o(t){D(c,t),i=!1},d(t){t&&v(n),c&&c.d(t),s=!1,o(a)}}}function vt(t,n,l){const o=[];let i=g(n,o),{$$slots:s={},$$scope:a}=n;return t.$$set=t=>{n=e(e({},n),p(t)),l(0,i=g(n,o)),"$$scope"in t&&l(1,a=t.$$scope)},[i,a,s,function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)}]}var xt=class extends K{constructor(t){super(),J(this,t,vt,$t,s,{})}};function bt(e){let n,l,o,i,s,a,r,u,d,h,f,m,p,g,b,z,C,A,M,B,_,V,E,j,S,P,q,H,N,R,T,G,O,X,J,K,Q,W,tt,et,lt;return h=new Z({}),b=new nt({}),B=new wt({}),S=new it({}),R=new xt({}),X=new rt({}),Q=new dt({}),et=new mt({}),{c(){n=x("header"),l=x("a"),o=x("img"),s=y(),a=x("ul"),r=x("li"),u=x("a"),d=L("Inicio "),U(h.$$.fragment),f=y(),m=x("li"),p=x("a"),g=L("Tienda "),U(b.$$.fragment),z=y(),C=x("li"),A=x("a"),M=L("Servicios "),U(B.$$.fragment),_=y(),V=x("li"),E=x("a"),j=L("Galería "),U(S.$$.fragment),P=y(),q=x("li"),H=x("a"),N=L("Acerca de "),U(R.$$.fragment),T=y(),G=x("div"),O=x("a"),U(X.$$.fragment),J=y(),K=x("a"),U(Q.$$.fragment),W=y(),tt=x("a"),U(et.$$.fragment),k(o,"class","img-fluid mx-auto shadow rounded-circle"),k(o,"width","100"),k(o,"height","100"),c(o.src,i=Lt)||k(o,"src",i),k(o,"alt","Logo de Powi Resinas"),k(l,"href","/"),k(l,"class","d-flex align-items-center col-md-3 mb-1 mb-md-0 text-dark text-decoration-none navbar-brand"),k(u,"class","nav-link px-2 text-muted"),k(u,"href","/"),k(p,"class","nav-link px-2 text-muted"),k(p,"href","/"),k(A,"class","nav-link px-2 text-muted"),k(A,"href","/"),k(E,"class","nav-link px-2 text-muted"),k(E,"href","/"),k(H,"class","nav-link px-2 text-muted"),k(H,"href","/"),k(a,"class","nav nav-pills col-12 mx-auto col-md-auto mb-1 justify-content-center mb-md-0"),k(O,"href","https://www.instagram.com/powi.resina/"),k(O,"class","px-2 text-instagram svelte-nwi9t1"),k(K,"href","https://twitter.com/Resinas_Powi"),k(K,"class","px-2 text-twitter svelte-nwi9t1"),k(tt,"href","https://www.facebook.com/Resinas-Powi-104488658279251/"),k(tt,"class","px-2 text-facebook svelte-nwi9t1"),k(G,"class","text-end me-auto ms-auto mx-auto"),k(n,"class","d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1 mb-0")},m(t,e){$(t,n,e),w(n,l),w(l,o),w(n,s),w(n,a),w(a,r),w(r,u),w(u,d),Y(h,u,null),w(a,f),w(a,m),w(m,p),w(p,g),Y(b,p,null),w(a,z),w(a,C),w(C,A),w(A,M),Y(B,A,null),w(a,_),w(a,V),w(V,E),w(E,j),Y(S,E,null),w(a,P),w(a,q),w(q,H),w(H,N),Y(R,H,null),w(n,T),w(n,G),w(G,O),Y(X,O,null),w(G,J),w(G,K),Y(Q,K,null),w(G,W),w(G,tt),Y(et,tt,null),lt=!0},p:t,i(t){lt||(I(h.$$.fragment,t),I(b.$$.fragment,t),I(B.$$.fragment,t),I(S.$$.fragment,t),I(R.$$.fragment,t),I(X.$$.fragment,t),I(Q.$$.fragment,t),I(et.$$.fragment,t),lt=!0)},o(t){D(h.$$.fragment,t),D(b.$$.fragment,t),D(B.$$.fragment,t),D(S.$$.fragment,t),D(R.$$.fragment,t),D(X.$$.fragment,t),D(Q.$$.fragment,t),D(et.$$.fragment,t),lt=!1},d(t){t&&v(n),F(h),F(b),F(B),F(S),F(R),F(X),F(Q),F(et)}}}const Lt="images/logo-powi.png";class yt extends K{constructor(t){super(),J(this,t,null,bt,s,{})}}function zt(e){let n;return{c(){n=x("div"),n.innerHTML='<div class="container text-center"><br/> \n        <br/> \n        <h1 class="display-5 text-light mt-5 mb-3">RESINA EPÓXICA</h1> \n         <p class="text-light small lead mt-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam felis eget sollicitudin vestibulum. Proin felis arcu, placerat aliquam dapibus non, tincidunt sit amet enim. Vivamus fringilla ante varius neque fringilla bibendum. Suspendisse eget eros rhoncus, convallis sem sed, tempor elit.</p> \n        <div class="container mt-5"><a class="btn btn-light rounded-pill" href="#">Visita nuestro catálogo de productos</a></div></div>',k(n,"class","jumbotron svelte-1f0lhxf")},m(t,e){$(t,n,e)},p:t,i:t,o:t,d(t){t&&v(n)}}}class kt extends K{constructor(t){super(),J(this,t,null,zt,s,{})}}function Ct(e){let n;return{c(){n=x("div"),n.innerHTML='<div class="row row-cols-3"><div class="col"><div class="mx-auto"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="border border-dark border-2 rounded-3 p-2 bi bi-tools" viewBox="0 0 16 16"><path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"></path></svg></div> \n        <h3 class="text-wrap text-break">Calibración de instrumentos</h3> \n        <p>Servicios de calibración de equipos de medición y piezas.</p></div> \n\n    \n    <div class="col"><div class="mx-auto"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="border border-dark border-2 rounded-3 p-2 bi bi-tools" viewBox="0 0 16 16"><path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"></path></svg></div> \n        <h3 class="text-wrap text-break">Certificación</h3> \n        <p>Acredite su laboratorio con una certificación de calibración.</p></div> \n\n    \n    <div class="col"><div class="mx-auto"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="border border-dark border-2 rounded-3 p-2 bi bi-tools" viewBox="0 0 16 16"><path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"></path></svg></div> \n        <h3 class="text-wrap text-break">Calibración de instrumentos</h3> \n        <p>Servicios de calibración de equipos de medición y piezas.</p></div> \n\n    \n    <div class="col"><div class="mx-auto"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="border border-dark border-2 rounded-3 p-2 bi bi-tools" viewBox="0 0 16 16"><path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"></path></svg></div> \n        <h3 class="text-wrap text-break">Calibración de instrumentos</h3> \n        <p>Servicios de calibración de equipos de medición y piezas.</p></div> \n\n    \n    <div class="col"><div class="mx-auto"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="border border-dark border-2 rounded-3 p-2 bi bi-tools" viewBox="0 0 16 16"><path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"></path></svg></div> \n        <h3 class="text-wrap text-break">Calibración de instrumentos</h3> \n        <p>Servicios de calibración de equipos de medición y piezas.</p></div> \n\n    \n    <div class="col"><div class="mx-auto"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="border border-dark border-2 rounded-3 p-2 bi bi-tools" viewBox="0 0 16 16"><path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"></path></svg></div> \n        <h3 class="text-wrap text-break">Calibración de instrumentos</h3> \n        <p>Servicios de calibración de equipos de medición y piezas.</p></div></div>',k(n,"class","container mt-5 mb-5")},m(t,e){$(t,n,e)},p:t,i:t,o:t,d(t){t&&v(n)}}}class At extends K{constructor(t){super(),J(this,t,null,Ct,s,{})}}function Mt(t){let n,l,i,s,a;const r=t[2].default,c=u(r,t,t[1],null);let d=[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},t[0]],p={};for(let t=0;t<d.length;t+=1)p=e(p,d[t]);return{c(){n=b("svg"),c&&c.c(),l=b("path"),k(l,"fill-rule","evenodd"),k(l,"d","M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"),C(n,p),A(n,"bi",!0),A(n,"bi-heart-fill",!0)},m(e,o){$(e,n,o),c&&c.m(n,null),w(n,l),i=!0,s||(a=[z(n,"click",t[3]),z(n,"mouseover",t[4]),z(n,"mouseenter",t[5]),z(n,"mouseleave",t[6]),z(n,"keydown",t[7])],s=!0)},p(t,[e]){c&&c.p&&(!i||2&e)&&f(c,r,t,t[1],i?h(r,t[1],e,null):m(t[1]),null),C(n,p=O(d,[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},1&e&&t[0]])),A(n,"bi",!0),A(n,"bi-heart-fill",!0)},i(t){i||(I(c,t),i=!0)},o(t){D(c,t),i=!1},d(t){t&&v(n),c&&c.d(t),s=!1,o(a)}}}function Bt(t,n,l){const o=[];let i=g(n,o),{$$slots:s={},$$scope:a}=n;return t.$$set=t=>{n=e(e({},n),p(t)),l(0,i=g(n,o)),"$$scope"in t&&l(1,a=t.$$scope)},[i,a,s,function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)}]}var _t=class extends K{constructor(t){super(),J(this,t,Bt,Mt,s,{})}};function Vt(e){let n,l,o,i,s,a,r,u,d,h,f,m,p,g,b,z,C,A,M,B,_,V,E,j,S,P,q,H,N,R,T,G;return m=new dt({}),z=new rt({}),B=new mt({}),q=new _t({props:{class:"text-danger"}}),{c(){n=x("footer"),l=x("div"),o=x("a"),i=x("img"),a=y(),r=x("span"),r.textContent=`© ${e[0]} Powi Resinas.`,u=y(),d=x("ul"),h=x("li"),f=x("a"),U(m.$$.fragment),p=y(),g=x("li"),b=x("a"),U(z.$$.fragment),C=y(),A=x("li"),M=x("a"),U(B.$$.fragment),_=y(),V=x("div"),E=x("p"),E.textContent="La creatividad es contagiosa. En Powi Resinas creamos accesorios y artículos de resina époxica. Venta de productos de stock y personalizados. Envíos a todo el país, ubicados en León, Gto.",j=y(),S=x("p"),P=L("Hecho con "),U(q.$$.fragment),H=L(" por "),N=x("a"),N.textContent="UpVent Technologies",R=y(),T=x("div"),T.innerHTML='<p>El <a href="https://github.com/UpVent/powi-resinas">código fuente</a> de esta página se encuentra bajo la <a href="https://www.gnu.org/licenses/agpl-3.0.html">Licencia Pública General de Affero (GNU) versión 3</a>. Excepto donde se indique lo <a href="https://creativecommons.org/policies#license">contrario</a>, el trabajo escrito, blogs, opiniones y parte del contenido visual se encuentra bajo la <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">Licencia Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0)</a></p>',k(i,"class","img-fluid mx-auto p-1"),k(i,"height","100"),k(i,"width","100"),c(i.src,s=Et)||k(i,"src",s),k(i,"alt","Logo de Medilia"),k(o,"href","/"),k(o,"class","mb-3 me-2 mb-md-0 text-powi text-decoration-none lh-1 svelte-1slnx2n"),k(r,"class","text-powi svelte-1slnx2n"),k(l,"class","col-md-4 d-flex align-items-center"),k(f,"class","text-powi svelte-1slnx2n"),k(f,"href","https://twitter.com/Resinas_Powi"),k(h,"class","ms-3"),k(b,"class","text-powi svelte-1slnx2n"),k(b,"href","https://www.instagram.com/powi.resina/"),k(g,"class","ms-3"),k(M,"class","text-powi svelte-1slnx2n"),k(M,"href","https://www.facebook.com/Resinas-Powi-104488658279251/"),k(A,"class","ms-3"),k(d,"class","nav col-md-4 justify-content-end list-unstyled d-flex"),k(N,"class","text-decoration-none"),k(N,"href","https://upvent.codes"),k(N,"target","_blank"),k(V,"class","container text-center text-powi svelte-1slnx2n"),k(T,"class","container text-center text-powi small mt-5 border-top border-light border-4 svelte-1slnx2n"),k(n,"class","d-flex flex-wrap footer-powi justify-content-between align-items-center py-3 my-4 svelte-1slnx2n")},m(t,e){$(t,n,e),w(n,l),w(l,o),w(o,i),w(l,a),w(l,r),w(n,u),w(n,d),w(d,h),w(h,f),Y(m,f,null),w(d,p),w(d,g),w(g,b),Y(z,b,null),w(d,C),w(d,A),w(A,M),Y(B,M,null),w(n,_),w(n,V),w(V,E),w(V,j),w(V,S),w(S,P),Y(q,S,null),w(S,H),w(S,N),w(n,R),w(n,T),G=!0},p:t,i(t){G||(I(m.$$.fragment,t),I(z.$$.fragment,t),I(B.$$.fragment,t),I(q.$$.fragment,t),G=!0)},o(t){D(m.$$.fragment,t),D(z.$$.fragment,t),D(B.$$.fragment,t),D(q.$$.fragment,t),G=!1},d(t){t&&v(n),F(m),F(z),F(B),F(q)}}}const Et="images/logo-powi.png";function jt(t){return[(new Date).getFullYear()]}class St extends K{constructor(t){super(),J(this,t,jt,Vt,s,{})}}function Pt(e){let n,l,o,i,s,a,r,c;return n=new yt({}),o=new kt({}),s=new At({}),r=new St({}),{c(){U(n.$$.fragment),l=y(),U(o.$$.fragment),i=y(),U(s.$$.fragment),a=y(),U(r.$$.fragment)},m(t,e){Y(n,t,e),$(t,l,e),Y(o,t,e),$(t,i,e),Y(s,t,e),$(t,a,e),Y(r,t,e),c=!0},p:t,i(t){c||(I(n.$$.fragment,t),I(o.$$.fragment,t),I(s.$$.fragment,t),I(r.$$.fragment,t),c=!0)},o(t){D(n.$$.fragment,t),D(o.$$.fragment,t),D(s.$$.fragment,t),D(r.$$.fragment,t),c=!1},d(t){F(n,t),t&&v(l),F(o,t),t&&v(i),F(s,t),t&&v(a),F(r,t)}}}return new class extends K{constructor(t){super(),J(this,t,null,Pt,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map

var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function l(){return Object.create(null)}function o(t){t.forEach(n)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let r,a;function c(t,e){return r||(r=document.createElement("a")),r.href=e,t===r.href}function u(t,e,n,l){if(t){const o=d(t,e,n,l);return t[0](o)}}function d(t,n,l,o){return t[1]&&o?e(l.ctx.slice(),t[1](o(n))):l.ctx}function f(t,e,n,l){if(t[2]&&l){const o=t[2](l(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let l=0;l<n;l+=1)t[l]=e.dirty[l]|o[l];return t}return e.dirty|o}return e.dirty}function h(t,e,n,l,o,i){if(o){const s=d(e,n,l,i);t.p(s,o)}}function m(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function p(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function g(t,e){const n={};e=new Set(e);for(const l in t)e.has(l)||"$"===l[0]||(n[l]=t[l]);return n}function $(t,e){t.appendChild(e)}function w(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function x(t){return document.createElement(t)}function b(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function L(t){return document.createTextNode(t)}function y(){return L(" ")}function z(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t,e){for(const n in e)k(t,n,e[n])}function M(t,e,n){t.classList[n?"add":"remove"](e)}function A(t){a=t}function B(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const V=[],_=[],j=[],E=[],S=Promise.resolve();let q=!1;function H(t){j.push(t)}const N=new Set;let T=0;function P(){const t=a;do{for(;T<V.length;){const t=V[T];T++,A(t),D(t.$$)}for(A(null),V.length=0,T=0;_.length;)_.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];N.has(e)||(N.add(e),e())}j.length=0}while(V.length);for(;E.length;)E.pop()();q=!1,N.clear(),A(t)}function D(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}const G=new Set;function O(t,e){t&&t.i&&(G.delete(t),t.i(e))}function U(t,e,n,l){if(t&&t.o){if(G.has(t))return;G.add(t),undefined.c.push((()=>{G.delete(t),l&&(n&&t.d(1),l())})),t.o(e)}}function I(t,e){const n={},l={},o={$$scope:1};let i=t.length;for(;i--;){const s=t[i],r=e[i];if(r){for(const t in s)t in r||(l[t]=1);for(const t in r)o[t]||(n[t]=r[t],o[t]=1);t[i]=r}else for(const t in s)o[t]=1}for(const t in l)t in n||(n[t]=void 0);return n}function R(t){t&&t.c()}function Y(t,e,l,s){const{fragment:r,on_mount:a,on_destroy:c,after_update:u}=t.$$;r&&r.m(e,l),s||H((()=>{const e=a.map(n).filter(i);c?c.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(H)}function F(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function J(t,e){-1===t.$$.dirty[0]&&(V.push(t),q||(q=!0,S.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(e,n,i,s,r,c,u,d=[-1]){const f=a;A(e);const h=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:r,bound:l(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:l(),dirty:d,skip_bound:!1,root:n.target||f.$$.root};u&&u(h.root);let m=!1;if(h.ctx=i?i(e,n.props||{},((t,n,...l)=>{const o=l.length?l[0]:n;return h.ctx&&r(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),m&&J(e,t)),n})):[],h.update(),m=!0,o(h.before_update),h.fragment=!!s&&s(h.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);h.fragment&&h.fragment.l(t),t.forEach(v)}else h.fragment&&h.fragment.c();n.intro&&O(e.$$.fragment),Y(e,n.target,n.anchor,n.customElement),P()}A(f)}class Q{$destroy(){F(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function W(t){let n,l,i,s,r,a;const c=t[2].default,d=u(c,t,t[1],null);let p=[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},t[0]],g={};for(let t=0;t<p.length;t+=1)g=e(g,p[t]);return{c(){n=b("svg"),d&&d.c(),l=b("path"),i=b("path"),k(l,"fill-rule","evenodd"),k(l,"d","M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"),k(i,"fill-rule","evenodd"),k(i,"d","M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"),C(n,g),M(n,"bi",!0),M(n,"bi-house",!0)},m(e,o){w(e,n,o),d&&d.m(n,null),$(n,l),$(n,i),s=!0,r||(a=[z(n,"click",t[3]),z(n,"mouseover",t[4]),z(n,"mouseenter",t[5]),z(n,"mouseleave",t[6]),z(n,"keydown",t[7])],r=!0)},p(t,[e]){d&&d.p&&(!s||2&e)&&h(d,c,t,t[1],s?f(c,t[1],e,null):m(t[1]),null),C(n,g=I(p,[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},1&e&&t[0]])),M(n,"bi",!0),M(n,"bi-house",!0)},i(t){s||(O(d,t),s=!0)},o(t){U(d,t),s=!1},d(t){t&&v(n),d&&d.d(t),r=!1,o(a)}}}function X(t,n,l){const o=[];let i=g(n,o),{$$slots:s={},$$scope:r}=n;return t.$$set=t=>{n=e(e({},n),p(t)),l(0,i=g(n,o)),"$$scope"in t&&l(1,r=t.$$scope)},[i,r,s,function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)}]}var Z=class extends Q{constructor(t){super(),K(this,t,X,W,s,{})}};function tt(t){let n,l,i,s,r;const a=t[2].default,c=u(a,t,t[1],null);let d=[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},t[0]],p={};for(let t=0;t<d.length;t+=1)p=e(p,d[t]);return{c(){n=b("svg"),c&&c.c(),l=b("path"),k(l,"d","M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"),C(n,p),M(n,"bi",!0),M(n,"bi-bag-fill",!0)},m(e,o){w(e,n,o),c&&c.m(n,null),$(n,l),i=!0,s||(r=[z(n,"click",t[3]),z(n,"mouseover",t[4]),z(n,"mouseenter",t[5]),z(n,"mouseleave",t[6]),z(n,"keydown",t[7])],s=!0)},p(t,[e]){c&&c.p&&(!i||2&e)&&h(c,a,t,t[1],i?f(a,t[1],e,null):m(t[1]),null),C(n,p=I(d,[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},1&e&&t[0]])),M(n,"bi",!0),M(n,"bi-bag-fill",!0)},i(t){i||(O(c,t),i=!0)},o(t){U(c,t),i=!1},d(t){t&&v(n),c&&c.d(t),s=!1,o(r)}}}function et(t,n,l){const o=[];let i=g(n,o),{$$slots:s={},$$scope:r}=n;return t.$$set=t=>{n=e(e({},n),p(t)),l(0,i=g(n,o)),"$$scope"in t&&l(1,r=t.$$scope)},[i,r,s,function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)}]}var nt=class extends Q{constructor(t){super(),K(this,t,et,tt,s,{})}};function lt(t){let n,l,i,s,r,a;const c=t[2].default,d=u(c,t,t[1],null);let p=[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},t[0]],g={};for(let t=0;t<p.length;t+=1)g=e(g,p[t]);return{c(){n=b("svg"),d&&d.c(),l=b("path"),i=b("path"),k(l,"d","M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"),k(i,"d","M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"),C(n,g),M(n,"bi",!0),M(n,"bi-images",!0)},m(e,o){w(e,n,o),d&&d.m(n,null),$(n,l),$(n,i),s=!0,r||(a=[z(n,"click",t[3]),z(n,"mouseover",t[4]),z(n,"mouseenter",t[5]),z(n,"mouseleave",t[6]),z(n,"keydown",t[7])],r=!0)},p(t,[e]){d&&d.p&&(!s||2&e)&&h(d,c,t,t[1],s?f(c,t[1],e,null):m(t[1]),null),C(n,g=I(p,[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},1&e&&t[0]])),M(n,"bi",!0),M(n,"bi-images",!0)},i(t){s||(O(d,t),s=!0)},o(t){U(d,t),s=!1},d(t){t&&v(n),d&&d.d(t),r=!1,o(a)}}}function ot(t,n,l){const o=[];let i=g(n,o),{$$slots:s={},$$scope:r}=n;return t.$$set=t=>{n=e(e({},n),p(t)),l(0,i=g(n,o)),"$$scope"in t&&l(1,r=t.$$scope)},[i,r,s,function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)}]}var it=class extends Q{constructor(t){super(),K(this,t,ot,lt,s,{})}};function st(t){let n,l,i,s,r;const a=t[2].default,c=u(a,t,t[1],null);let d=[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},t[0]],p={};for(let t=0;t<d.length;t+=1)p=e(p,d[t]);return{c(){n=b("svg"),c&&c.c(),l=b("path"),k(l,"d","M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"),C(n,p),M(n,"bi",!0),M(n,"bi-instagram",!0)},m(e,o){w(e,n,o),c&&c.m(n,null),$(n,l),i=!0,s||(r=[z(n,"click",t[3]),z(n,"mouseover",t[4]),z(n,"mouseenter",t[5]),z(n,"mouseleave",t[6]),z(n,"keydown",t[7])],s=!0)},p(t,[e]){c&&c.p&&(!i||2&e)&&h(c,a,t,t[1],i?f(a,t[1],e,null):m(t[1]),null),C(n,p=I(d,[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},1&e&&t[0]])),M(n,"bi",!0),M(n,"bi-instagram",!0)},i(t){i||(O(c,t),i=!0)},o(t){U(c,t),i=!1},d(t){t&&v(n),c&&c.d(t),s=!1,o(r)}}}function rt(t,n,l){const o=[];let i=g(n,o),{$$slots:s={},$$scope:r}=n;return t.$$set=t=>{n=e(e({},n),p(t)),l(0,i=g(n,o)),"$$scope"in t&&l(1,r=t.$$scope)},[i,r,s,function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)}]}var at=class extends Q{constructor(t){super(),K(this,t,rt,st,s,{})}};function ct(t){let n,l,i,s,r;const a=t[2].default,c=u(a,t,t[1],null);let d=[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},t[0]],p={};for(let t=0;t<d.length;t+=1)p=e(p,d[t]);return{c(){n=b("svg"),c&&c.c(),l=b("path"),k(l,"d","M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"),C(n,p),M(n,"bi",!0),M(n,"bi-twitter",!0)},m(e,o){w(e,n,o),c&&c.m(n,null),$(n,l),i=!0,s||(r=[z(n,"click",t[3]),z(n,"mouseover",t[4]),z(n,"mouseenter",t[5]),z(n,"mouseleave",t[6]),z(n,"keydown",t[7])],s=!0)},p(t,[e]){c&&c.p&&(!i||2&e)&&h(c,a,t,t[1],i?f(a,t[1],e,null):m(t[1]),null),C(n,p=I(d,[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},1&e&&t[0]])),M(n,"bi",!0),M(n,"bi-twitter",!0)},i(t){i||(O(c,t),i=!0)},o(t){U(c,t),i=!1},d(t){t&&v(n),c&&c.d(t),s=!1,o(r)}}}function ut(t,n,l){const o=[];let i=g(n,o),{$$slots:s={},$$scope:r}=n;return t.$$set=t=>{n=e(e({},n),p(t)),l(0,i=g(n,o)),"$$scope"in t&&l(1,r=t.$$scope)},[i,r,s,function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)}]}var dt=class extends Q{constructor(t){super(),K(this,t,ut,ct,s,{})}};function ft(t){let n,l,i,s,r;const a=t[2].default,c=u(a,t,t[1],null);let d=[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},t[0]],p={};for(let t=0;t<d.length;t+=1)p=e(p,d[t]);return{c(){n=b("svg"),c&&c.c(),l=b("path"),k(l,"d","M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"),C(n,p),M(n,"bi",!0),M(n,"bi-facebook",!0)},m(e,o){w(e,n,o),c&&c.m(n,null),$(n,l),i=!0,s||(r=[z(n,"click",t[3]),z(n,"mouseover",t[4]),z(n,"mouseenter",t[5]),z(n,"mouseleave",t[6]),z(n,"keydown",t[7])],s=!0)},p(t,[e]){c&&c.p&&(!i||2&e)&&h(c,a,t,t[1],i?f(a,t[1],e,null):m(t[1]),null),C(n,p=I(d,[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},1&e&&t[0]])),M(n,"bi",!0),M(n,"bi-facebook",!0)},i(t){i||(O(c,t),i=!0)},o(t){U(c,t),i=!1},d(t){t&&v(n),c&&c.d(t),s=!1,o(r)}}}function ht(t,n,l){const o=[];let i=g(n,o),{$$slots:s={},$$scope:r}=n;return t.$$set=t=>{n=e(e({},n),p(t)),l(0,i=g(n,o)),"$$scope"in t&&l(1,r=t.$$scope)},[i,r,s,function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)}]}var mt=class extends Q{constructor(t){super(),K(this,t,ht,ft,s,{})}};function pt(t){let n,l,i,s,r;const a=t[2].default,c=u(a,t,t[1],null);let d=[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},t[0]],p={};for(let t=0;t<d.length;t+=1)p=e(p,d[t]);return{c(){n=b("svg"),c&&c.c(),l=b("path"),k(l,"d","M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"),C(n,p),M(n,"bi",!0),M(n,"bi-box-seam",!0)},m(e,o){w(e,n,o),c&&c.m(n,null),$(n,l),i=!0,s||(r=[z(n,"click",t[3]),z(n,"mouseover",t[4]),z(n,"mouseenter",t[5]),z(n,"mouseleave",t[6]),z(n,"keydown",t[7])],s=!0)},p(t,[e]){c&&c.p&&(!i||2&e)&&h(c,a,t,t[1],i?f(a,t[1],e,null):m(t[1]),null),C(n,p=I(d,[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},1&e&&t[0]])),M(n,"bi",!0),M(n,"bi-box-seam",!0)},i(t){i||(O(c,t),i=!0)},o(t){U(c,t),i=!1},d(t){t&&v(n),c&&c.d(t),s=!1,o(r)}}}function gt(t,n,l){const o=[];let i=g(n,o),{$$slots:s={},$$scope:r}=n;return t.$$set=t=>{n=e(e({},n),p(t)),l(0,i=g(n,o)),"$$scope"in t&&l(1,r=t.$$scope)},[i,r,s,function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)}]}var $t=class extends Q{constructor(t){super(),K(this,t,gt,pt,s,{})}};function wt(t){let n,l,i,s,r;const a=t[2].default,c=u(a,t,t[1],null);let d=[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},t[0]],p={};for(let t=0;t<d.length;t+=1)p=e(p,d[t]);return{c(){n=b("svg"),c&&c.c(),l=b("path"),k(l,"d","M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"),C(n,p),M(n,"bi",!0),M(n,"bi-people",!0)},m(e,o){w(e,n,o),c&&c.m(n,null),$(n,l),i=!0,s||(r=[z(n,"click",t[3]),z(n,"mouseover",t[4]),z(n,"mouseenter",t[5]),z(n,"mouseleave",t[6]),z(n,"keydown",t[7])],s=!0)},p(t,[e]){c&&c.p&&(!i||2&e)&&h(c,a,t,t[1],i?f(a,t[1],e,null):m(t[1]),null),C(n,p=I(d,[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},1&e&&t[0]])),M(n,"bi",!0),M(n,"bi-people",!0)},i(t){i||(O(c,t),i=!0)},o(t){U(c,t),i=!1},d(t){t&&v(n),c&&c.d(t),s=!1,o(r)}}}function vt(t,n,l){const o=[];let i=g(n,o),{$$slots:s={},$$scope:r}=n;return t.$$set=t=>{n=e(e({},n),p(t)),l(0,i=g(n,o)),"$$scope"in t&&l(1,r=t.$$scope)},[i,r,s,function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)}]}var xt=class extends Q{constructor(t){super(),K(this,t,vt,wt,s,{})}};function bt(e){let n,l,o,i,s,r,a,u,d,f,h,m,p,g,b,z,C,M,A,B,V,_,j,E,S,q,H,N,T,P,D,G,I,J,K,Q,W,X,tt,et,lt;return f=new Z({}),b=new nt({}),B=new $t({}),S=new it({}),P=new xt({}),J=new at({}),W=new dt({}),et=new mt({}),{c(){n=x("header"),l=x("a"),o=x("img"),s=y(),r=x("ul"),a=x("li"),u=x("a"),d=L("Inicio "),R(f.$$.fragment),h=y(),m=x("li"),p=x("a"),g=L("Tienda "),R(b.$$.fragment),z=y(),C=x("li"),M=x("a"),A=L("Servicios "),R(B.$$.fragment),V=y(),_=x("li"),j=x("a"),E=L("Galería "),R(S.$$.fragment),q=y(),H=x("li"),N=x("a"),T=L("Acerca de "),R(P.$$.fragment),D=y(),G=x("div"),I=x("a"),R(J.$$.fragment),K=y(),Q=x("a"),R(W.$$.fragment),X=y(),tt=x("a"),R(et.$$.fragment),k(o,"class","img-fluid mx-auto shadow rounded-circle"),k(o,"width","100"),k(o,"height","100"),c(o.src,i=Lt)||k(o,"src",i),k(o,"alt","Logo de Powi Resinas"),k(l,"href","/"),k(l,"class","d-flex align-items-center col-md-3 mb-1 mb-md-0 text-dark text-decoration-none navbar-brand"),k(u,"class","nav-link px-2 text-muted"),k(u,"href","/"),k(p,"class","nav-link px-2 text-muted"),k(p,"href","/"),k(M,"class","nav-link px-2 text-muted"),k(M,"href","/"),k(j,"class","nav-link px-2 text-muted"),k(j,"href","/"),k(N,"class","nav-link px-2 text-muted"),k(N,"href","/"),k(r,"class","nav nav-pills col-12 mx-auto col-md-auto mb-1 justify-content-center mb-md-0"),k(I,"class","px-2 text-instagram svelte-nwi9t1"),k(Q,"class","px-2 text-twitter svelte-nwi9t1"),k(tt,"class","px-2 text-facebook svelte-nwi9t1"),k(G,"class","text-end me-auto ms-auto mx-auto"),k(n,"class","d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1 mb-0")},m(t,e){w(t,n,e),$(n,l),$(l,o),$(n,s),$(n,r),$(r,a),$(a,u),$(u,d),Y(f,u,null),$(r,h),$(r,m),$(m,p),$(p,g),Y(b,p,null),$(r,z),$(r,C),$(C,M),$(M,A),Y(B,M,null),$(r,V),$(r,_),$(_,j),$(j,E),Y(S,j,null),$(r,q),$(r,H),$(H,N),$(N,T),Y(P,N,null),$(n,D),$(n,G),$(G,I),Y(J,I,null),$(G,K),$(G,Q),Y(W,Q,null),$(G,X),$(G,tt),Y(et,tt,null),lt=!0},p:t,i(t){lt||(O(f.$$.fragment,t),O(b.$$.fragment,t),O(B.$$.fragment,t),O(S.$$.fragment,t),O(P.$$.fragment,t),O(J.$$.fragment,t),O(W.$$.fragment,t),O(et.$$.fragment,t),lt=!0)},o(t){U(f.$$.fragment,t),U(b.$$.fragment,t),U(B.$$.fragment,t),U(S.$$.fragment,t),U(P.$$.fragment,t),U(J.$$.fragment,t),U(W.$$.fragment,t),U(et.$$.fragment,t),lt=!1},d(t){t&&v(n),F(f),F(b),F(B),F(S),F(P),F(J),F(W),F(et)}}}const Lt="images/logo-powi.png";class yt extends Q{constructor(t){super(),K(this,t,null,bt,s,{})}}function zt(e){let n;return{c(){n=x("div"),n.innerHTML='<div class="container text-center"><br/> \n        <br/> \n        <h1 class="display-3 text-light mt-5 mb-3">Resina epóxica</h1> \n        <hr class="text-light"/> \n         <p class="text-light lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam felis eget sollicitudin vestibulum. Proin felis arcu, placerat aliquam dapibus non, tincidunt sit amet enim. Vivamus fringilla ante varius neque fringilla bibendum. Suspendisse eget eros rhoncus, convallis sem sed, tempor elit.</p> \n        <div class="container mt-5"><a class="btn btn-light rounded-pill" href="#">Visita nuestro catálogo de productos</a></div></div>',k(n,"class","jumbotron svelte-7kpv2n")},m(t,e){w(t,n,e)},p:t,i:t,o:t,d(t){t&&v(n)}}}class kt extends Q{constructor(t){super(),K(this,t,null,zt,s,{})}}function Ct(e){let n;return{c(){n=x("div"),n.innerHTML='<div class="row row-cols-3"><div class="col"><div class="mx-auto"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="border border-dark border-2 rounded-3 p-2 bi bi-tools" viewBox="0 0 16 16"><path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"></path></svg></div> \n        <h3 class="text-wrap text-break">Calibración de instrumentos</h3> \n        <p>Servicios de calibración de equipos de medición y piezas.</p></div> \n\n    \n    <div class="col"><div class="mx-auto"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="border border-dark border-2 rounded-3 p-2 bi bi-tools" viewBox="0 0 16 16"><path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"></path></svg></div> \n        <h3 class="text-wrap text-break">Certificación</h3> \n        <p>Acredite su laboratorio con una certificación de calibración.</p></div> \n\n    \n    <div class="col"><div class="mx-auto"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="border border-dark border-2 rounded-3 p-2 bi bi-tools" viewBox="0 0 16 16"><path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"></path></svg></div> \n        <h3 class="text-wrap text-break">Calibración de instrumentos</h3> \n        <p>Servicios de calibración de equipos de medición y piezas.</p></div> \n\n    \n    <div class="col"><div class="mx-auto"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="border border-dark border-2 rounded-3 p-2 bi bi-tools" viewBox="0 0 16 16"><path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"></path></svg></div> \n        <h3 class="text-wrap text-break">Calibración de instrumentos</h3> \n        <p>Servicios de calibración de equipos de medición y piezas.</p></div> \n\n    \n    <div class="col"><div class="mx-auto"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="border border-dark border-2 rounded-3 p-2 bi bi-tools" viewBox="0 0 16 16"><path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"></path></svg></div> \n        <h3 class="text-wrap text-break">Calibración de instrumentos</h3> \n        <p>Servicios de calibración de equipos de medición y piezas.</p></div> \n\n    \n    <div class="col"><div class="mx-auto"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="border border-dark border-2 rounded-3 p-2 bi bi-tools" viewBox="0 0 16 16"><path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"></path></svg></div> \n        <h3 class="text-wrap text-break">Calibración de instrumentos</h3> \n        <p>Servicios de calibración de equipos de medición y piezas.</p></div></div>',k(n,"class","container mt-5 mb-5")},m(t,e){w(t,n,e)},p:t,i:t,o:t,d(t){t&&v(n)}}}class Mt extends Q{constructor(t){super(),K(this,t,null,Ct,s,{})}}function At(t){let n,l,i,s,r;const a=t[2].default,c=u(a,t,t[1],null);let d=[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},t[0]],p={};for(let t=0;t<d.length;t+=1)p=e(p,d[t]);return{c(){n=b("svg"),c&&c.c(),l=b("path"),k(l,"fill-rule","evenodd"),k(l,"d","M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"),C(n,p),M(n,"bi",!0),M(n,"bi-heart-fill",!0)},m(e,o){w(e,n,o),c&&c.m(n,null),$(n,l),i=!0,s||(r=[z(n,"click",t[3]),z(n,"mouseover",t[4]),z(n,"mouseenter",t[5]),z(n,"mouseleave",t[6]),z(n,"keydown",t[7])],s=!0)},p(t,[e]){c&&c.p&&(!i||2&e)&&h(c,a,t,t[1],i?f(a,t[1],e,null):m(t[1]),null),C(n,p=I(d,[{xmlns:"http://www.w3.org/2000/svg"},{width:"16"},{height:"16"},{fill:"currentColor"},{viewBox:"0 0 16 16"},1&e&&t[0]])),M(n,"bi",!0),M(n,"bi-heart-fill",!0)},i(t){i||(O(c,t),i=!0)},o(t){U(c,t),i=!1},d(t){t&&v(n),c&&c.d(t),s=!1,o(r)}}}function Bt(t,n,l){const o=[];let i=g(n,o),{$$slots:s={},$$scope:r}=n;return t.$$set=t=>{n=e(e({},n),p(t)),l(0,i=g(n,o)),"$$scope"in t&&l(1,r=t.$$scope)},[i,r,s,function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)},function(e){B.call(this,t,e)}]}var Vt=class extends Q{constructor(t){super(),K(this,t,Bt,At,s,{})}};function _t(e){let n,l,o,i,s,r,a,u,d,f,h,m,p,g,b,z,C,M,A,B,V,_,j,E,S,q,H,N,T,P,D,G;return m=new dt({}),z=new at({}),B=new mt({}),H=new Vt({props:{class:"text-danger"}}),{c(){n=x("footer"),l=x("div"),o=x("a"),i=x("img"),r=y(),a=x("span"),a.textContent=`© ${e[0]} Medilia.`,u=y(),d=x("ul"),f=x("li"),h=x("a"),R(m.$$.fragment),p=y(),g=x("li"),b=x("a"),R(z.$$.fragment),C=y(),M=x("li"),A=x("a"),R(B.$$.fragment),V=y(),_=x("div"),j=x("p"),j.textContent="Somos un proveedor experto de soluciones de calibración y certificación empresarial, con un enfoque impulsado por la tecnología moderna que nos permite ofrecer soluciones de alto rendimiento.",E=y(),S=x("p"),q=L("Hecho con "),R(H.$$.fragment),N=L(" por "),T=x("a"),T.textContent="UpVent Technologies",P=y(),D=x("div"),D.innerHTML='<p>El <a href="https://github.com/UpVent/medilia.mx">código fuente</a> de esta página se encuentra bajo la <a href="https://www.gnu.org/licenses/agpl-3.0.html">Licencia Pública General de Affero (GNU) versión 3</a>. Excepto donde se indique lo <a href="https://creativecommons.org/policies#license">contrario</a>, el trabajo escrito, blogs, opiniones y parte del contenido visual se encuentra bajo la <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">Licencia Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0)</a></p>',k(i,"class","img-thumbnail"),c(i.src,s=jt)||k(i,"src",s),k(i,"alt","Logo de Medilia"),k(o,"href","/"),k(o,"class","mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"),k(a,"class","text-muted"),k(l,"class","col-md-4 d-flex align-items-center"),k(h,"class","text-muted"),k(h,"href","#"),k(f,"class","ms-3"),k(b,"class","text-muted"),k(b,"href","#"),k(g,"class","ms-3"),k(A,"class","text-muted"),k(A,"href","#"),k(M,"class","ms-3"),k(d,"class","nav col-md-4 justify-content-end list-unstyled d-flex"),k(T,"class","text-decoration-none"),k(T,"href","https://upvent.codes"),k(T,"target","_blank"),k(_,"class","container text-center text-muted"),k(D,"class","container text-center text-muted small mt-5 border-top"),k(n,"class","d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top")},m(t,e){w(t,n,e),$(n,l),$(l,o),$(o,i),$(l,r),$(l,a),$(n,u),$(n,d),$(d,f),$(f,h),Y(m,h,null),$(d,p),$(d,g),$(g,b),Y(z,b,null),$(d,C),$(d,M),$(M,A),Y(B,A,null),$(n,V),$(n,_),$(_,j),$(_,E),$(_,S),$(S,q),Y(H,S,null),$(S,N),$(S,T),$(n,P),$(n,D),G=!0},p:t,i(t){G||(O(m.$$.fragment,t),O(z.$$.fragment,t),O(B.$$.fragment,t),O(H.$$.fragment,t),G=!0)},o(t){U(m.$$.fragment,t),U(z.$$.fragment,t),U(B.$$.fragment,t),U(H.$$.fragment,t),G=!1},d(t){t&&v(n),F(m),F(z),F(B),F(H)}}}const jt="images/logo-powi.png";function Et(t){return[(new Date).getFullYear()]}class St extends Q{constructor(t){super(),K(this,t,Et,_t,s,{})}}function qt(e){let n,l,o,i,s,r,a,c;return n=new yt({}),o=new kt({}),s=new Mt({}),a=new St({}),{c(){R(n.$$.fragment),l=y(),R(o.$$.fragment),i=y(),R(s.$$.fragment),r=y(),R(a.$$.fragment)},m(t,e){Y(n,t,e),w(t,l,e),Y(o,t,e),w(t,i,e),Y(s,t,e),w(t,r,e),Y(a,t,e),c=!0},p:t,i(t){c||(O(n.$$.fragment,t),O(o.$$.fragment,t),O(s.$$.fragment,t),O(a.$$.fragment,t),c=!0)},o(t){U(n.$$.fragment,t),U(o.$$.fragment,t),U(s.$$.fragment,t),U(a.$$.fragment,t),c=!1},d(t){F(n,t),t&&v(l),F(o,t),t&&v(i),F(s,t),t&&v(r),F(a,t)}}}return new class extends Q{constructor(t){super(),K(this,t,null,qt,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map

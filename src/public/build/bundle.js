var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode&&t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function i(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let a;function l(t){a=t}const d=[],$=[];let p=[];const h=[],m=Promise.resolve();let g=!1;function y(t){p.push(t)}const _=new Set;let b=0;function x(){if(0!==b)return;const t=a;do{try{for(;b<d.length;){const t=d[b];b++,l(t),k(t.$$)}}catch(t){throw d.length=0,b=0,t}for(l(null),d.length=0,b=0;$.length;)$.pop()();for(let t=0;t<p.length;t+=1){const n=p[t];_.has(n)||(_.add(n),n())}p.length=0}while(d.length);for(;h.length;)h.pop()();g=!1,_.clear(),l(t)}function k(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(y)}}const v=new Set;let w;function E(t,n){t&&t.i&&(v.delete(t),t.i(n))}function A(t,e,c,u){const{fragment:s,after_update:f}=t.$$;s&&s.m(e,c),u||y((()=>{const e=t.$$.on_mount.map(n).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(y)}function O(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];p.forEach((o=>-1===t.indexOf(o)?n.push(o):e.push(o))),e.forEach((t=>t())),p=n}(e.after_update),o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function j(t,n){-1===t.$$.dirty[0]&&(d.push(t),g||(g=!0,m.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function C(n,r,c,u,f,i,d,$=[-1]){const p=a;l(n);const h=n.$$={fragment:null,ctx:[],props:i,update:t,not_equal:f,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(p?p.$$.context:[])),callbacks:e(),dirty:$,skip_bound:!1,root:r.target||p.$$.root};d&&d(h.root);let m=!1;if(h.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return h.ctx&&f(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),m&&j(n,t)),e})):[],h.update(),m=!0,o(h.before_update),h.fragment=!!u&&u(h.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);h.fragment&&h.fragment.l(t),t.forEach(s)}else h.fragment&&h.fragment.c();r.intro&&E(n.$$.fragment),A(n,r.target,r.anchor,r.customElement),x()}l(p)}class N{$destroy(){O(this,1),this.$destroy=t}$on(n,e){if(!r(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function S(n){let e,o;return{c(){e=f("main"),o=f("h1"),o.textContent=`Hello, ${q}!`,i(o,"class","svelte-1r2x8ki")},m(t,n){u(t,e,n),function(t,n){t.appendChild(n)}(e,o)},p:t,i:t,o:t,d(t){t&&s(e)}}}let q="World";class B extends N{constructor(t){super(),C(this,t,null,S,c,{})}}function H(n){let e,o,r;return o=new B({}),{c(){var t;e=f("main"),(t=o.$$.fragment)&&t.c(),i(e,"class","svelte-1gmv5eg")},m(t,n){u(t,e,n),A(o,e,null),r=!0},p:t,i(t){r||(E(o.$$.fragment,t),r=!0)},o(t){!function(t,n,e,o){if(t&&t.o){if(v.has(t))return;v.add(t),w.c.push((()=>{v.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}else o&&o()}(o.$$.fragment,t),r=!1},d(t){t&&s(e),O(o)}}}return new class extends N{constructor(t){super(),C(this,t,null,H,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
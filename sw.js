if(!self.define){let e,i={};const s=(s,d)=>(s=new URL(s+".js",d).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const t=e=>s(e,r),c={module:{uri:r},exports:o,require:t};i[r]=Promise.all(d.map((e=>c[e]||t(e)))).then((e=>(n(...e),o)))}}define(["./workbox-51c3625d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/icon-192.png",revision:"45f0e9513ee33bdb3ff8879f7c2fc268"},{url:"assets/icon-384.png",revision:"3cf251a83522d13e74d40f753556f2a0"},{url:"assets/icon-512.png",revision:"69cea7d072d7e42f2bad8b6b1a562b09"},{url:"dexie.min.js",revision:"2d348dec959cb6f0a0b5aafbc7dded44"},{url:"index.css",revision:"9d012ad6dc89da5be40ad39985ec6187"},{url:"index.html",revision:"8ebd4368d8f1593a05342a9f95a10a1d"},{url:"index.js",revision:"f33d91a1ef2e9acd00dd66fc802388a0"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map

if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let f={};const n=e=>c(e,d),l={module:{uri:d},exports:f,require:n};i[d]=Promise.all(s.map((e=>l[e]||n(e)))).then((e=>(r(...e),f)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/05/28/hello-world/index.html",revision:"ec49bfdd8be88504b894df84292162d3"},{url:"2023/05/28/index/index.html",revision:"95c58bfa7f13a3db1aca0c5f02c314cb"},{url:"archives/2023/05/index.html",revision:"e88e85b30c93cc1b1449400016a5f4c1"},{url:"archives/2023/index.html",revision:"7640f2a8e310205cc1fa1c4c525a245c"},{url:"archives/index.html",revision:"bf4cf5bdf63c43504193f7d48fc43f52"},{url:"css/index.css",revision:"db2ffbdc4dadde3fe26905e5dae85961"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"95fbd3a04c9219b9ce943ed752d19bce"},{url:"js/main.js",revision:"4802a927bf0b57f3859b3be8ed0b0351"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"a0c72193c089d7ef2c3d5359379c4516"},{url:"node安装/index.html",revision:"0b664fe91faa13b384ceb7e2bd356f54"},{url:"tags/index.html",revision:"ee7f722675e2b684e32f19970371deb0"}],{})}));
//# sourceMappingURL=service-worker.js.map

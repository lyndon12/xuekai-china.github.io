!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n=new Map;self.addEventListener("message",(async function(e){const{href:t,info:r}=e.data;!function(e,t){const{url:r}=t,o=function(e,t){if(t.includes("http"))return t;{const n=t.split("/"),r=e.split("/");r.pop();const o=[];for(let e in n)".."===n[e]?r.pop():o.push(n[e]);return[...r,...o].join("/")}}(e,r);n.has(o)?self.postMessage({buffer:n.get(o),info:t}):fetch(o).then(e=>e.arrayBuffer()).then(e=>{n.set(o,e),self.postMessage({buffer:e,info:t})})}(t,r)}),!1)}]);
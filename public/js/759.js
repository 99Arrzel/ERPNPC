"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[759],{7707:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(3645),r=n.n(a)()((function(e){return e[1]}));r.push([e.id,"body[data-v-00b8efae]{background:#4682b4}.aselect[data-v-00b8efae]{margin:20px auto;width:180px}.aselect .selector[data-v-00b8efae]{background:#171a21;border:2px #dcdcdc;border-radius:4px;position:relative;z-index:1}.aselect .selector .arrow[data-v-00b8efae]{border-left:7px solid transparent;border-right:7px solid transparent;border-top:10px solid #888;height:0;position:absolute;right:10px;top:40%;transform:rotate(0deg) translateY(0);transition-duration:.3s;transition-timing-function:cubic-bezier(.59,1.39,.37,1.01);width:0}.aselect .selector .expanded[data-v-00b8efae]{transform:rotate(180deg) translateY(2px)}.aselect .selector .label[data-v-00b8efae]{color:#fff;display:block;font-size:16px;padding:12px}.aselect ul[data-v-00b8efae]{background:#fff;border:1px solid #dcdcdc;font-size:16px;list-style-type:none;margin:0;padding:0;position:absolute;width:100%;z-index:1}.aselect li[data-v-00b8efae]{color:#000;padding:12px}.aselect li[data-v-00b8efae]:hover{background:#66c0f4;color:#fff}.aselect .current[data-v-00b8efae]{background:#eaeaea}.aselect .hidden[data-v-00b8efae]{visibility:hidden}.aselect .visible[data-v-00b8efae]{visibility:visible}",""]);const o=r},3645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(a)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);a&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},3379:(e,t,n)=>{var a,r=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function l(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},a=[],r=0;r<e.length;r++){var o=e[r],c=t.base?o[0]+t.base:o[0],s=n[c]||0,d="".concat(c," ").concat(s);n[c]=s+1;var u=l(d),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:d,updater:h(f,t),references:1}),a.push(d)}return a}function s(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var r=n.nc;r&&(a.nonce=r)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,a){var r=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var o=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function p(e,t,n){var a=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var v=null,b=0;function h(e,t){var n,a,r;if(t.singleton){var o=b++;n=v||(v=s(t)),a=f.bind(null,n,o,!1),r=f.bind(null,n,o,!0)}else n=s(t),a=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var r=l(n[a]);i[r].references--}for(var o=c(e,t),s=0;s<n.length;s++){var d=l(n[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=o}}}},3744:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,a]of t)n[e]=a;return n}},4759:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var a=n(6598),r={id:"app"},o=["data-value","data-list"],i={class:"label"},l={class:"cursor-pointer"},c=["onClick"];var s=n(9680);const d={props:{value:{type:String,default:"Opciones"},list:{type:Array,default:[["Valor","Enlace"],["Valor","Enlace"],["Valor","Enlace"]]}},data:function(){return{visible:!1}},methods:{toggle:function(){this.visible=!this.visible},takeMeTo:function(e){"logout"==e&&(history.pushState(null,document.title,location.href),window.addEventListener("popstate",(function(e){console.log(e),history.pushState(null,document.title,location.href)})),window.location.href=route("logout")),s.Inertia.get(route(e))}}};var u=n(3379),f=n.n(u),p=n(7707),v={insert:"head",singleton:!1};f()(p.Z,v);p.Z.locals;const b=(0,n(3744).Z)(d,[["render",function(e,t,n,s,d,u){return(0,a.openBlock)(),(0,a.createElementBlock)("div",r,[(0,a.createElementVNode)("div",{class:"aselect","data-value":n.value,"data-list":n.list},[(0,a.createElementVNode)("div",{class:"cursor-pointer selector",onClick:t[0]||(t[0]=function(e){return u.toggle()})},[(0,a.createElementVNode)("div",i,[(0,a.createElementVNode)("button",null,[(0,a.createElementVNode)("span",null,(0,a.toDisplayString)(n.value),1)])]),(0,a.createElementVNode)("div",{class:(0,a.normalizeClass)(["arrow",{expanded:d.visible}])},null,2),(0,a.createElementVNode)("div",{class:(0,a.normalizeClass)({hidden:!d.visible,visible:d.visible})},[(0,a.createElementVNode)("ul",l,[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(n.list,(function(e){return(0,a.openBlock)(),(0,a.createElementBlock)("li",{class:(0,a.normalizeClass)({current:e===n.value}),key:e,onClick:function(t){return u.takeMeTo(e[1])}},(0,a.toDisplayString)(e[0]),11,c)})),128))])],2)])],8,o)])}],["__scopeId","data-v-00b8efae"]])}}]);
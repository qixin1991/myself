(function(e){function t(t){for(var i,s,l=t[0],r=t[1],c=t[2],u=0,f=[];u<l.length;u++)s=l[u],a[s]&&f.push(a[s][0]),a[s]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);v&&v(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,s=1;s<n.length;s++){var r=n[s];0!==a[r]&&(i=!1)}i&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},a={app:0},o=[];function s(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"fa6634bd"}[e]+".js"}function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,i){n=a[e]=[t,i]});t.push(n[2]=i);var o,r=document.createElement("script");r.charset="utf-8",r.timeout=120,l.nc&&r.setAttribute("nonce",l.nc),r.src=s(e),o=function(t){r.onerror=r.onload=null,clearTimeout(c);var n=a[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+i+": "+o+")");s.type=i,s.request=o,n[1](s)}a[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:r})},12e4);r.onerror=r.onload=o,document.head.appendChild(r)}return Promise.all(t)},l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/myself/",l.oe=function(e){throw console.error(e),e};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var v=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s=n("2877"),l={},r=Object(s["a"])(l,a,o,!1,null,null,null),c=r.exports,u=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e._m(0),e._m(1),n("span",{staticClass:"experience"},[e._v("职业经历")]),n("div",{staticClass:"timeline"},[n("a-timeline",{attrs:{mode:"alternate"}},[n("a-timeline-item",[n("span",[e._v("2016/03 ~ Now")]),n("div",[n("span",{staticClass:"title-company"},[e._v("架构师 @ 家装E站")])]),n("div",[n("ul",[n("li",[e._v("负责面向全国近500家分站的分站管理系统开发")]),n("li",[e._v("Nodejs 技术栈在内部的推广")]),n("li",[e._v("百台 Linux 服务器的运维管理工作")])])])]),n("a-timeline-item",{attrs:{color:"green"}},[n("span",[e._v("2015/11 ~ 2016/03")]),n("div",[n("span",{staticClass:"title-company"},[e._v("CTO @ 天天一百网络科技")])]),n("div",{staticClass:"left-desc"},[n("ul",{staticClass:"left-ul"},[n("li",[e._v("点餐100餐饮系统的重构")]),n("li",[e._v("服务器性能优化")]),n("li",[e._v("技术培训")]),n("li",[e._v("Golang 在公司各个业务模块的推广")])])])]),n("a-timeline-item",[n("a-icon",{staticStyle:{"font-size":"16px"},attrs:{slot:"dot",type:"clock-circle-o"},slot:"dot"}),n("span",[e._v("2015/01 ~ 2015/11")]),n("div",[n("span",{staticClass:"title-company"},[e._v("系统架构师 @ 天下互联苏州分公司")])]),n("div",[n("ul",[n("li",[e._v("社交App Backend开发")]),n("li",[e._v("运维")])])])],1),n("a-timeline-item",{attrs:{color:"green"}},[n("span",[e._v("2014/09 ~ 2015/01")]),n("div",[n("span",{staticClass:"title-company"},[e._v("Java高级工程师 @ 苏州用心创造")])]),n("div",{staticClass:"left-desc"},[n("ul",{staticClass:"left-ul"},[n("li",[e._v("微信公众号开发")])])])]),n("a-timeline-item",[n("span",[e._v("2014/07 ~ 2014/09")]),n("div",[n("span",{staticClass:"title-company"},[e._v("Java高级工程师 @ 苏州瑞鹏")])]),n("div",[n("ul",[n("li",[e._v("外婆家 - 微信公众号")])])])]),n("a-timeline-item",[n("a-icon",{staticStyle:{"font-size":"16px"},attrs:{slot:"dot",type:"clock-circle-o"},slot:"dot"}),n("span",[e._v("2013/11 ~ 2014/07")]),n("div",[n("span",{staticClass:"title-company"},[e._v("项目经理 @ 苏州梦图数码")])]),n("div",{staticClass:"left-desc"},[n("ul",{staticClass:"left-ul"},[n("li",[e._v("GIS方向开发")]),n("li",[e._v("项目管理")])])])],1),n("a-timeline-item",{attrs:{color:"green"}},[n("span",[e._v("2011/08 ~ 2013/11")]),n("div",[n("span",{staticClass:"title-company"},[e._v("Java开发工程师 @ 南京斯帝普科技有限公司")])]),n("div",[n("ul",[n("li",[e._v("苏源高科公司外包项目开发")])])])])],1)],1)])},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"head"},[n("div",[n("span",{staticClass:"about-me"},[e._v("About me")])]),n("div",{staticClass:"contact-me"},[n("a",{attrs:{href:"mailto:me@qixin.io"}},[e._v("contact")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tech-main"},[n("span",{staticClass:"title"},[e._v("技术栈")]),n("ul",{staticClass:"ul-container"},[n("li",{staticClass:"li-title"},[e._v("Front end\n        "),n("ul",[n("li",[e._v("Vue.js")]),n("li",[e._v("React.js")]),n("li",[e._v("SASS")])])]),n("li",{staticClass:"li-title"},[e._v("Back end\n        "),n("ul",[n("li",[e._v("Java")]),n("li",[e._v("Go")]),n("li",[e._v("Nodejs")])])]),n("li",{staticClass:"li-title"},[e._v("Mobile\n        "),n("ul",[n("li",[e._v("Android")])])])])])}],d=n("387a"),p=n("0c63"),m=(n("f72d"),{name:"home",components:{ATimeline:d["a"],ATimelineItem:d["a"].Item,AIcon:p["a"]}}),_=m,h=(n("d917"),Object(s["a"])(_,v,f,!1,null,"f41a0556",null)),b=h.exports;i["a"].use(u["a"]);var g=new u["a"]({mode:"history",base:"/myself/",routes:[{path:"/",name:"home",component:b},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),y=n("9483");Object(y["a"])("".concat("/myself/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),i["a"].config.productionTip=!1,new i["a"]({router:g,render:function(e){return e(c)}}).$mount("#app")},b0f2:function(e,t,n){},d917:function(e,t,n){"use strict";var i=n("b0f2"),a=n.n(i);a.a}});
//# sourceMappingURL=app.b44f0605.js.map
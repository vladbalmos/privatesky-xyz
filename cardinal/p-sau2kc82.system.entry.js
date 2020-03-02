var __awaiter=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))(function(i,o){function a(t){try{c(n.next(t))}catch(t){o(t)}}function s(t){try{c(n["throw"](t))}catch(t){o(t)}}function c(t){t.done?i(t.value):new r(function(e){e(t.value)}).then(a,s)}c((n=n.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return c([t,e])}}function c(a){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;i=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(a[0]===6&&r.label<o[1]){r.label=o[1];o=a;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(a);break}if(o[2])r.ops.pop();r.trys.pop();continue}a=e.call(t,r)}catch(t){a=[6,t];i=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-226ad382.system.js","./p-0f0da370.system.js","./p-5f414978.system.js","./p-d9445517.system.js"],function(t){"use strict";var e,r,n,i,o,a,s,c,u,l,f,h,v,p,d,y,g,m,b,w,T,O;return{setters:[function(t){e=t.r;r=t.h;n=t.g;i=t.d},function(t){o=t.A},function(t){a=t.m;s=t.a;c=t.s;u=t.b;l=t.c;f=t.d;h=t.h;v=t.e;p=t.f;d=t.g;y=t.l},function(t){g=t.s;m=t.a;b=t.b;w=t.g;T=t.c;O=t.d}],execute:function(){var P=t("stencil_route",function(){function t(t){e(this,t);this.group=null;this.match=null;this.componentProps={};this.exact=false;this.scrollOnNextRender=false;this.previousMatch=null}t.prototype.computeMatch=function(t){var e=this.group!=null||this.el.parentElement!=null&&this.el.parentElement.tagName.toLowerCase()==="stencil-route-switch";if(!t||e){return}this.previousMatch=this.match;return this.match=a(t.pathname,{path:this.url,exact:this.exact,strict:true})};t.prototype.loadCompleted=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){t={};if(this.history&&this.history.location.hash){t={scrollToId:this.history.location.hash.substr(1)}}else if(this.scrollTopOffset){t={scrollTopOffset:this.scrollTopOffset}}if(typeof this.componentUpdated==="function"){this.componentUpdated(t)}else if(this.match&&!s(this.match,this.previousMatch)&&this.routeViewsUpdated){this.routeViewsUpdated(t)}return[2]})})};t.prototype.componentDidUpdate=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadCompleted()];case 1:t.sent();return[2]}})})};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadCompleted()];case 1:t.sent();return[2]}})})};t.prototype.render=function(){if(!this.match||!this.history){return null}var t=Object.assign({},this.componentProps,{history:this.history,match:this.match});if(this.routeRender){return this.routeRender(Object.assign({},t,{component:this.component}))}if(this.component){var e=this.component;return r(e,Object.assign({},t))}};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["computeMatch"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"stencil-route.inactive{display:none}"},enumerable:true,configurable:true});return t}());o.injectProps(P,["location","history","historyType","routeViewsUpdated"]);var x=function(){return((Math.random()*1e17).toString().match(/.{4}/g)||[]).join("-")};var L=function(t,e,r){return a(t,{path:e,exact:r,strict:true})};var _=function(t){return t.tagName==="STENCIL-ROUTE"};var k=t("stencil_route_switch",function(){function t(t){e(this,t);this.group=x();this.subscribers=[];this.queue=i(this,"queue")}t.prototype.componentWillLoad=function(){if(this.location!=null){this.regenerateSubscribers(this.location)}};t.prototype.regenerateSubscribers=function(t){return __awaiter(this,void 0,void 0,function(){var e,r;var n=this;return __generator(this,function(i){if(t==null){return[2]}e=-1;this.subscribers=Array.prototype.slice.call(this.el.children).filter(_).map(function(r,n){var i=L(t.pathname,r.url,r.exact);if(i&&e===-1){e=n}return{el:r,match:i}});if(e===-1){return[2]}if(this.activeIndex===e){this.subscribers[e].el.match=this.subscribers[e].match;return[2]}this.activeIndex=e;r=this.subscribers[this.activeIndex];if(this.scrollTopOffset){r.el.scrollTopOffset=this.scrollTopOffset}r.el.group=this.group;r.el.match=r.match;r.el.componentUpdated=function(t){n.queue.write(function(){n.subscribers.forEach(function(t,e){t.el.componentUpdated=undefined;if(e===n.activeIndex){return t.el.style.display=""}if(n.scrollTopOffset){t.el.scrollTopOffset=n.scrollTopOffset}t.el.group=n.group;t.el.match=null;t.el.style.display="none"})});if(n.routeViewsUpdated){n.routeViewsUpdated(Object.assign({scrollTopOffset:n.scrollTopOffset},t))}};return[2]})})};t.prototype.render=function(){return r("slot",null)};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["regenerateSubscribers"]}},enumerable:true,configurable:true});return t}());o.injectProps(k,["location","routeViewsUpdated"]);var S=function(t){var e=[];for(var r=1;r<arguments.length;r++){e[r-1]=arguments[r]}if(!t){console.warn.apply(console,e)}};var E=function(){var t;var e=[];var r=function(e){S(t==null,"A history supports only one prompt at a time");t=e;return function(){if(t===e){t=null}}};var n=function(e,r,n,i){if(t!=null){var o=typeof t==="function"?t(e,r):t;if(typeof o==="string"){if(typeof n==="function"){n(o,i)}else{S(false,"A history needs a getUserConfirmation function in order to use a prompt message");i(true)}}else{i(o!==false)}}else{i(true)}};var i=function(t){var r=true;var n=function(){var e=[];for(var n=0;n<arguments.length;n++){e[n]=arguments[n]}if(r){t.apply(void 0,e)}};e.push(n);return function(){r=false;e=e.filter(function(t){return t!==n})}};var o=function(){var t=[];for(var r=0;r<arguments.length;r++){t[r]=arguments[r]}e.forEach(function(e){return e.apply(void 0,t)})};return{setPrompt:r,confirmTransitionTo:n,appendListener:i,notifyListeners:o}};var j=function(t,e){if(e===void 0){e="scrollPositions"}var r=new Map;var n=function(e,n){r.set(e,n);if(g(t,"sessionStorage")){var i=[];r.forEach(function(t,e){i.push([e,t])});t.sessionStorage.setItem("scrollPositions",JSON.stringify(i))}};var i=function(t){return r.get(t)};var o=function(t){return r.has(t)};var a=function(e){n(e,[t.scrollX,t.scrollY])};if(g(t,"sessionStorage")){var s=t.sessionStorage.getItem(e);r=s?new Map(JSON.parse(s)):r}if("scrollRestoration"in t.history){history.scrollRestoration="manual"}return{set:n,get:i,has:o,capture:a}};var U="popstate";var I="hashchange";var A=function(t,e){if(e===void 0){e={}}var r=false;var n=t.history;var i=t.location;var o=t.navigator;var a=m(t);var s=!b(o);var d=j(t);var y=e.forceRefresh!=null?e.forceRefresh:false;var g=e.getUserConfirmation!=null?e.getUserConfirmation:w;var O=e.keyLength!=null?e.keyLength:6;var P=e.basename?c(u(e.basename)):"";var x=function(){try{return t.history.state||{}}catch(t){return{}}};var L=function(t){t=t||{};var e=t.key,r=t.state;var n=i.pathname,o=i.search,a=i.hash;var s=n+o+a;S(!P||h(s,P),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+s+'" to begin with "'+P+'".');if(P){s=v(s,P)}return l(s,r,e||f(O))};var _=E();var k=function(t){d.capture(K.location.key);Object.assign(K,t);K.location.scrollPosition=d.get(K.location.key);K.length=n.length;_.notifyListeners(K.location,K.action)};var A=function(t){if(!T(o,t)){C(L(t.state))}};var R=function(){C(L(x()))};var C=function(t){if(r){r=false;k()}else{var e="POP";_.confirmTransitionTo(t,e,g,function(r){if(r){k({action:e,location:t})}else{H(t)}})}};var H=function(t){var e=K.location;var n=M.indexOf(e.key);var i=M.indexOf(t.key);if(n===-1){n=0}if(i===-1){i=0}var o=n-i;if(o){r=true;F(o)}};var V=L(x());var M=[V.key];var q=0;var N=false;var Y=function(t){return P+p(t)};var B=function(t,e){S(!(typeof t==="object"&&t.state!==undefined&&e!==undefined),"You should avoid providing a 2nd state argument to push when the 1st "+"argument is a location-like object that already has state; it is ignored");var r="PUSH";var o=l(t,e,f(O),K.location);_.confirmTransitionTo(o,r,g,function(t){if(!t){return}var e=Y(o);var s=o.key,c=o.state;if(a){n.pushState({key:s,state:c},"",e);if(y){i.href=e}else{var u=M.indexOf(K.location.key);var l=M.slice(0,u===-1?0:u+1);l.push(o.key);M=l;k({action:r,location:o})}}else{S(c===undefined,"Browser history cannot push state in browsers that do not support HTML5 history");i.href=e}})};var D=function(t,e){S(!(typeof t==="object"&&t.state!==undefined&&e!==undefined),"You should avoid providing a 2nd state argument to replace when the 1st "+"argument is a location-like object that already has state; it is ignored");var r="REPLACE";var o=l(t,e,f(O),K.location);_.confirmTransitionTo(o,r,g,function(t){if(!t){return}var e=Y(o);var s=o.key,c=o.state;if(a){n.replaceState({key:s,state:c},"",e);if(y){i.replace(e)}else{var u=M.indexOf(K.location.key);if(u!==-1){M[u]=o.key}k({action:r,location:o})}}else{S(c===undefined,"Browser history cannot replace state in browsers that do not support HTML5 history");i.replace(e)}})};var F=function(t){n.go(t)};var J=function(){return F(-1)};var W=function(){return F(1)};var X=function(e){q+=e;if(q===1){t.addEventListener(U,A);if(s){t.addEventListener(I,R)}}else if(q===0){t.removeEventListener(U,A);if(s){t.removeEventListener(I,R)}}};var G=function(t){if(t===void 0){t=""}var e=_.setPrompt(t);if(!N){X(1);N=true}return function(){if(N){N=false;X(-1)}return e()}};var z=function(t){var e=_.appendListener(t);X(1);return function(){X(-1);e()}};var K={length:n.length,action:"POP",location:V,createHref:Y,push:B,replace:D,go:F,goBack:J,goForward:W,block:G,listen:z,win:t};return K};var R="hashchange";var C={hashbang:{encodePath:function(t){return t.charAt(0)==="!"?t:"!/"+d(t)},decodePath:function(t){return t.charAt(0)==="!"?t.substr(1):t}},noslash:{encodePath:d,decodePath:u},slash:{encodePath:u,decodePath:u}};var H=function(t,e){if(e===void 0){e={}}var r=false;var n=null;var i=0;var o=false;var a=t.location;var s=t.history;var d=O(t.navigator);var g=e.keyLength!=null?e.keyLength:6;var m=e.getUserConfirmation,b=m===void 0?w:m,T=e.hashType,P=T===void 0?"slash":T;var x=e.basename?c(u(e.basename)):"";var L=C[P],_=L.encodePath,k=L.decodePath;var j=function(){var t=a.href;var e=t.indexOf("#");return e===-1?"":t.substring(e+1)};var U=function(t){return a.hash=t};var I=function(t){var e=a.href.indexOf("#");a.replace(a.href.slice(0,e>=0?e:0)+"#"+t)};var A=function(){var t=k(j());S(!x||h(t,x),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+t+'" to begin with "'+x+'".');if(x){t=v(t,x)}return l(t,undefined,f(g))};var H=E();var V=function(t){Object.assign(tt,t);tt.length=s.length;H.notifyListeners(tt.location,tt.action)};var M=function(){var t=j();var e=_(t);if(t!==e){I(e)}else{var i=A();var o=tt.location;if(!r&&y(o,i)){return}if(n===p(i)){return}n=null;q(i)}};var q=function(t){if(r){r=false;V()}else{var e="POP";H.confirmTransitionTo(t,e,b,function(r){if(r){V({action:e,location:t})}else{N(t)}})}};var N=function(t){var e=tt.location;var n=F.lastIndexOf(p(e));var i=F.lastIndexOf(p(t));if(n===-1){n=0}if(i===-1){i=0}var o=n-i;if(o){r=true;G(o)}};var Y=j();var B=_(Y);if(Y!==B){I(B)}var D=A();var F=[p(D)];var J=function(t){return"#"+_(x+p(t))};var W=function(t,e){S(e===undefined,"Hash history cannot push state; it is ignored");var r="PUSH";var i=l(t,undefined,f(g),tt.location);H.confirmTransitionTo(i,r,b,function(t){if(!t){return}var e=p(i);var o=_(x+e);var a=j()!==o;if(a){n=e;U(o);var s=F.lastIndexOf(p(tt.location));var c=F.slice(0,s===-1?0:s+1);c.push(e);F=c;V({action:r,location:i})}else{S(false,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack");V()}})};var X=function(t,e){S(e===undefined,"Hash history cannot replace state; it is ignored");var r="REPLACE";var i=l(t,undefined,f(g),tt.location);H.confirmTransitionTo(i,r,b,function(t){if(!t){return}var e=p(i);var o=_(x+e);var a=j()!==o;if(a){n=e;I(o)}var s=F.indexOf(p(tt.location));if(s!==-1){F[s]=e}V({action:r,location:i})})};var G=function(t){S(d,"Hash history go(n) causes a full page reload in this browser");s.go(t)};var z=function(){return G(-1)};var K=function(){return G(1)};var Q=function(t,e){i+=e;if(i===1){t.addEventListener(R,M)}else if(i===0){t.removeEventListener(R,M)}};var Z=function(e){if(e===void 0){e=""}var r=H.setPrompt(e);if(!o){Q(t,1);o=true}return function(){if(o){o=false;Q(t,-1)}return r()}};var $=function(e){var r=H.appendListener(e);Q(t,1);return function(){Q(t,-1);r()}};var tt={length:s.length,action:"POP",location:D,createHref:J,push:W,replace:X,go:G,goBack:z,goForward:K,block:Z,listen:$,win:t};return tt};var V=function(t,e){var r=t.pathname.indexOf(e)==0?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:r})};var M={browser:A,hash:H};var q=t("stencil_router",function(){function t(t){var r=this;e(this,t);this.root="/";this.historyType="browser";this.titleSuffix="";this.routeViewsUpdated=function(t){if(t===void 0){t={}}if(r.history&&t.scrollToId&&r.historyType==="browser"){var e=r.history.win.document.getElementById(t.scrollToId);if(e){return e.scrollIntoView()}}r.scrollTo(t.scrollTopOffset||r.scrollTopOffset)};this.isServer=i(this,"isServer");this.queue=i(this,"queue")}t.prototype.componentWillLoad=function(){var t=this;this.history=M[this.historyType](this.el.ownerDocument.defaultView);this.history.listen(function(e){e=V(e,t.root);t.location=e});this.location=V(this.history.location,this.root)};t.prototype.scrollTo=function(t){var e=this.history;if(t==null||this.isServer||!e){return}if(e.action==="POP"&&Array.isArray(e.location.scrollPosition)){return this.queue.write(function(){if(e&&e.location&&Array.isArray(e.location.scrollPosition)){e.win.scrollTo(e.location.scrollPosition[0],e.location.scrollPosition[1])}})}return this.queue.write(function(){e.win.scrollTo(0,t)})};t.prototype.render=function(){if(!this.location||!this.history){return}var t={historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated};return r(o.Provider,{state:t},r("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});return t}())}}});
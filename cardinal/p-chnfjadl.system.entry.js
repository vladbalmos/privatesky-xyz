System.register(["./p-226ad382.system.js","./p-7db317d0.system.js","./p-a6c41423.system.js","./p-f7aa7448.system.js"],function(e){"use strict";var t,n,r,i,s;return{setters:[function(e){t=e.r;n=e.c;r=e.h},function(e){i=e.C},function(e){s=e.T},function(){}],execute:function(){var a=undefined&&undefined.__decorate||function(e,t,n,r){var i=arguments.length,s=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)if(a=e[o])s=(i<3?a(s):i>3?a(t,n,s):a(t,n))||s;return i>3&&s&&Object.defineProperty(t,n,s),s};var o=e("psk_menu_item_renderer",function(){function e(e){t(this,e);this.notifyItemClicked=function(e){this.menuClicked.emit(e.target)};this.menuClicked=n(this,"menuClicked",7)}e.prototype.renderMenuItem=function(e){var t=this;var n=e.path;var i=[];if(e.children){e.children.forEach(function(e){i.push(t.renderMenuItem(e))})}var s=this.historyType==="query"?"query-page-link":"stencil-route-link";var a=e.type==="abstract"?"dropdown-renderer":s;return r(a,{url:n,activeClass:"active",exact:false,somethingChanged:this.value,onClick:function(e){return t.notifyItemClicked(e)}},r("div",{class:"wrapper_container"},r("div",{class:"item_container"},r("span",{class:"icon fa "+e.icon}),r("a",null,e.children?r("span",{class:"item_name"},e.name,r("span",{class:"fa fa-caret-down"})):r("span",{class:"item_name"},e.name))),e.children?r("div",{class:"children"},i):null))};e.prototype.render=function(){return this.renderMenuItem(this.value)};return e}());a([i(),s({description:"This property is the MenuItem that will be renderer as part of the menu",isMandatory:false,propertyType:"MenuItem"})],o.prototype,"value",void 0);a([s({description:"This property is used in the css file for renderes in order to verify the state of the component",isMandatory:false,propertyType:"boolean"})],o.prototype,"active",void 0)}}});
System.register(["./p-226ad382.system.js","./p-7db317d0.system.js","./p-57436eba.system.js","./p-5ca8f7bd.system.js"],function(e){"use strict";var t,n,o,i,s;return{setters:[function(e){t=e.r;n=e.c;o=e.h},function(e){i=e.C},function(){},function(e){s=e.T}],execute:function(){var r=undefined&&undefined.__decorate||function(e,t,n,o){var i=arguments.length,s=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(r=e[a])s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s;return i>3&&s&&Object.defineProperty(t,n,s),s};var a=e("psk_floating_menu",function(){function e(e){t(this,e);this.menuItems=[];this.opened=false;this.needFloatingMenu=n(this,"needFloatingMenu",7)}e.prototype.componentWillLoad=function(){var e=this;this.needFloatingMenu.emit(function(t,n){if(!t&&n){e.menuItems=JSON.parse(JSON.stringify(n))}else{console.error(t)}})};e.prototype.render=function(){var e=this;return[o("div",{id:"backdrop",onClick:function(t){t.preventDefault();e.opened=!e.opened}}),o("div",{class:"container"},o("ul",{class:"items"},this.menuItems.map(function(t){return o("li",{onClick:function(){e.opened=!e.opened},class:"nav-item"},o("a",{href:t.path},t.name))})),o("div",{class:"toggleFloatingMenu"},o("a",{href:"#",class:"plus",onClick:function(t){t.preventDefault();e.opened=!e.opened}},o("span",{class:"fa fa-plus"}))))]};return e}());r([i()],a.prototype,"menuItems",void 0);r([s({description:"This property shows the state of the backdrop on the Floating Menu and the Floating Menu itself.",isMandatory:false,propertyType:"boolean",defaultValue:"false"})],a.prototype,"opened",void 0)}}});
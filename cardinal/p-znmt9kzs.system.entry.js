System.register(["./p-226ad382.system.js","./p-7db317d0.system.js","./p-a6c41423.system.js","./p-f7aa7448.system.js"],function(e){"use strict";var t,n,r,i,o,a,s;return{setters:[function(e){t=e.r;n=e.h;r=e.g},function(e){i=e.C},function(e){o=e.A;a=e.T},function(e){s=e.c}],execute:function(){var l=undefined&&undefined.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)if(a=e[s])o=(i<3?a(o):i>3?a(t,n,o):a(t,n))||o;return i>3&&o&&Object.defineProperty(t,n,o),o};var c=e("psk_toolbar",function(){function e(e){t(this,e);this.icons=false}e.prototype.render=function(){var e=this;if(!this.actions)return null;return this.actions.split(",").map(function(e){return e.trim()}).map(function(t){var r=0;while(r<e.host.children.length){var i=e.host.children.item(r++);if(i.hasAttribute("slot")&&i.getAttribute("slot")===t){return n("slot",{name:t})}}return e.icons&&o.hasOwnProperty(t)?n("psk-icon",{icon:o[t].value,title:o[t].value,color:o[t].color,onClick:function(n){e.handleClick(n,t)}}):n("button",{class:"btn btn-primary",name:t.toUpperCase(),onClick:function(n){e.handleClick(n,t)}},t.toUpperCase())})};e.prototype.handleClick=function(e,t){var n=null;try{n=JSON.parse(this.eventData)}catch(e){}e.preventDefault();e.stopImmediatePropagation();s(t,{bubbles:true,composed:true,cancelable:true,detail:n},true)};Object.defineProperty(e.prototype,"host",{get:function(){return r(this)},enumerable:true,configurable:true});return e}());l([i(),a({description:["This property is a string where every action is delimitated by ','.","If an HTML child has a slot attribute with the same value as the entry in the string then a new slot will be created with that value as the name."],isMandatory:true,defaultValue:"null",propertyType:"string"})],c.prototype,"actions",void 0);l([a({description:["This property is the icon attached to the toolbar action so it can be rendered .","If this property is not given then the value false will be assumed and instead of a psk-icon, a button will be rendered."],propertyType:"boolean",isMandatory:false,defaultValue:"false"})],c.prototype,"icons",void 0);l([a({description:["This property is the data that will be passed to the newly created event in the detail property.","It will only be passed along when an icon/button inside the toolbar is clicked."],propertyType:"string",isMandatory:false,defaultValue:"null"})],c.prototype,"eventData",void 0)}}});
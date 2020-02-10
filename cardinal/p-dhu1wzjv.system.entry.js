System.register(["./p-226ad382.system.js","./p-d949cbdf.system.js","./p-7db317d0.system.js"],function(e){"use strict";var t,r,n,a,s,o,l,i;return{setters:[function(e){t=e.r;r=e.h;n=e.g},function(e){a=e.G;s=e.g;o=e.T;l=e.h},function(e){i=e.C}],execute:function(){var u=undefined&&undefined.__decorate||function(e,t,r,n){var a=arguments.length,s=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)if(o=e[l])s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s;return a>3&&s&&Object.defineProperty(t,r,s),s};var c=e("psk_grid",function(){function e(e){t(this,e);this.columns=null;this.layout=null}e.prototype.render=function(){var e=this;var t=Array.from(this._host.children);var n=[];if(!this.columns||!this.layout){return r("slot",null)}var s=this._createLayoutRules.call(this);if(s.length===0){return r("slot",null)}var o=0;t.forEach(function(t){if(a.indexOf(t.tagName.toLowerCase())>=0){return}var r="";s.forEach(function(t){switch(t.breakpoint){case"xs":{r+=e._getClass("xs",t.values[o]);break}case"s":{r+=e._getClass("sm",t.values[o]);break}case"m":{r+=e._getClass("md",t.values[o]);break}case"l":{r+=e._getClass("lg",t.values[o]);break}case"xl":{r+=e._getClass("xl",t.values[o]);break}default:break}});t.className=(t.className.trim()+" "+r.trim()).trim();o=(o+1)%e.columns;n.push(t.parentNode.removeChild(t))});var l=false;var i=function(){var e=n.splice(0,Math.min(u.columns,n.length));var t=document.createElement("div");t.className="row";e.forEach(function(e){t.appendChild(e)});u._host.appendChild(t);l=n.length===0};var u=this;while(!l){i()}return r("slot",null)};e.prototype._getClass=function(e,t){var r="";switch(t){case"0":{r+=l[e]+" ";break}default:{r+="col-"+e+"-"+t+" ";break}}return r};e.prototype._createLayoutRules=function(){var e=this;var t=this.layout.split("]").map(function(e){return e.trim().toLowerCase()+"]"});var r=t.filter(function(t){var r=t.split("=");if(r.length===0){return false}if(s.indexOf(r[0].trim())===-1){return false}var n=r[1].replace("[","").replace("]","").split(",").map(function(e){return e.trim()}).filter(function(e){if(e==="auto"){return true}if(parseInt(e)<13&&parseInt(e)>=0){return true}return false});if(n.length!==e.columns){return false}return true});var n=r.map(function(e){var t=e.split("=");var r=t[0].trim();var n=t[1].replace("[","").replace("]","").split(",").map(function(e){return e.trim()});return{breakpoint:r,values:n}});return n};Object.defineProperty(e.prototype,"_host",{get:function(){return n(this)},enumerable:true,configurable:true});return e}());u([i(),o({isMandatory:true,propertyType:"number",description:"This is the number of columns for the bootstrap columns class. ",defaultValue:"null",specialNote:"That number can only be an integer between 1 and 12."})],c.prototype,"columns",void 0);u([o({isMandatory:true,propertyType:"string",description:["This attribute will set the layout for the components inside the grid, according to the number of columns.",'Example: <psk-grid columns="3" layout="xs=[12,12,12] s=[6,6,12] m=[3,3,6] l=[3,4,5]" xl=[3,4,5]>',"There are 5 possible breakpoints, according to Bootstrap documentation: xs, s, m, l and xl. For each breakpoint you want to use, the number of the values must be the same with the number of the columns, otherwise, the breakpoint will be ignored.",'Each breakpoint will be written in the following manner: breakpoint=[value1, value2,... valueN], where N is the number of columns and the value accepts numbers between 0 and 12 included, or the string "auto".',"If a value is 0, then the element for that column will be hidden. If a value is auto, it will have no bootstrap class and will inherit the design.","If any other value is set, the breakpoint will be ignored even if it has the same number of columns."],defaultValue:"null"})],c.prototype,"layout",void 0)}}});
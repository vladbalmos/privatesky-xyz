System.register(["./p-226ad382.system.js","./p-9c53ea88.system.js","./p-e1f22d46.system.js"],function(e){"use strict";var t,i,s,r;return{setters:[function(e){t=e.r;i=e.h},function(e){s=e.T},function(e){r=e.C}],execute:function(){var n=undefined&&undefined.__decorate||function(e,t,i,s){var r=arguments.length,n=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,i):s,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(e,t,i,s);else for(var o=e.length-1;o>=0;o--)if(a=e[o])n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n;return r>3&&n&&Object.defineProperty(t,i,n),n};var a="https://raw.githubusercontent.com/PrivateSky/pwc-apps/master/pages/";var o=e("psk_img",function(){function e(e){t(this,e);if(this.src.indexOf("http")!==-1){this.basePath=this.src;return}if(typeof globalConfig!=="undefined"&&typeof globalConfig.pagesBasePath==="string"){this.basePath=globalConfig.pagesBasePath+this.src}else{this.basePath=a+this.src}}e.prototype.render=function(){return i("div",{class:"image_container"},i("div",{class:"image_wrapper"},i("img",{src:this.src,class:"img-fluid",alt:this.title})),this.title?i("div",{class:"image_description"},this.title):null)};return e}());n([r(),s({description:'This property is the path to the image source (Example:"PrivateSky/EDFS.png").',isMandatory:false,propertyType:"string"})],o.prototype,"src",void 0);n([s({description:"This property is the title of the image(the alt attribute) and the description of the image.",isMandatory:false,propertyType:"string",specialNote:"If no title is given,there will not be assumed one and there will be no image description/alt."})],o.prototype,"title",void 0)}}});
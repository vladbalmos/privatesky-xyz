System.register(["./p-226ad382.system.js","./p-a6c41423.system.js","./p-f7aa7448.system.js","./p-e811389c.system.js"],function(t){"use strict";var e,r,o,n,l;return{setters:[function(t){e=t.r;r=t.h;o=t.g},function(t){n=t.T},function(){},function(t){l=t.C}],execute:function(){var i=undefined&&undefined.__decorate||function(t,e,r,o){var n=arguments.length,l=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,i;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")l=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)if(i=t[s])l=(n<3?i(l):n>3?i(e,r,l):i(e,r))||l;return n>3&&l&&Object.defineProperty(e,r,l),l};var s="base-controllers/BindableController";var c=t("psk_container",function(){function t(t){var r=this;e(this,t);this.promisifyControllerLoad=function(t){return new Promise(function(e,o){l.getController(t).then(function(t){r.controller=new t(r._host);r.__getInnerController.call(r,r._host);e()}).catch(o)})}}t.prototype.render=function(){return[r("slot",null),this.htmlFilePath&&r("psk-page-loader",{pageUrl:this.htmlFilePath}),this.controller&&this.controllerScript&&this.controller.executeScript(this.controller,this.controllerScript)]};t.prototype.componentWillLoad=function(){if(typeof this.controllerName==="string"&&this.controllerName.length>0){return this.promisifyControllerLoad(this.controllerName)}return this.promisifyControllerLoad(s)};t.prototype.__getInnerController=function(t){var e=t.querySelector("script");if(e!==null){this.controllerScript=e.innerHTML;e.innerHTML=""}};Object.defineProperty(t.prototype,"_host",{get:function(){return o(this)},enumerable:true,configurable:true});return t}());i([n({isMandatory:false,description:["This property is a string that will permit the developer to choose his own controller.","If no value is sent then the null default value will be taken and the component will use the basic Controller."],propertyType:"string",defaultValue:"null"})],c.prototype,"controllerName",void 0);i([n({description:["This property is the page url (html) that will be passed to the psk-page-loader component","This component will sent a get request to that url in order to get the content of that url."],isMandatory:false,propertyType:"string",defaultValue:"null"})],c.prototype,"htmlFilePath",void 0)}}});
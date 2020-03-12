System.register(["./p-226ad382.system.js","./p-7db317d0.system.js","./p-57436eba.system.js","./p-5ca8f7bd.system.js","./p-b5719584.system.js"],function(e){"use strict";var t,o,s,r,i;return{setters:[function(e){t=e.r;o=e.h},function(e){s=e.C},function(){},function(e){r=e.T},function(e){i=e.B}],execute:function(){var n=undefined&&undefined.__decorate||function(e,t,o,s){var r=arguments.length,i=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,o):s,n;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)if(n=e[a])i=(r<3?n(i):r>3?n(t,o,i):n(t,o))||i;return r>3&&i&&Object.defineProperty(t,o,i),i};var a=e("psk_icon",function(){function e(e){t(this,e);this.disableColor=false;this.color="rgba(0, 0, 255, 1)"}e.prototype.render=function(){return this.icon&&o("span",{style:{color:this.color},class:"icon fa fa-"+this.icon+" "+(this.disableColor?"disable-color":"")})};return e}());n([s(),i(),r({isMandatory:true,propertyType:"string",description:["This property is mandatory and it is the icon defined in font-awesome Cascading Style Sheet .","We choose to use these icons because they are popular and quite expressive and very easy to use.(Example: user,"]})],a.prototype,"icon",void 0);n([r({isMandatory:false,propertyType:"boolean",description:["This property is used for disabling the color of the icon. The default color is grey..","If this property is not given, false is assumed"],defaultValue:"false"})],a.prototype,"disableColor",void 0);n([r({isMandatory:false,propertyType:"string",description:["This property gives the color of the icon. ","If this property is not given, blue color (rgba(0, 0, 255, 1)) is assumed"],defaultValue:"rgba(0, 0, 255, 1)"})],a.prototype,"color",void 0)}}});
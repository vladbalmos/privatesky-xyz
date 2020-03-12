System.register(["./p-226ad382.system.js","./p-7db317d0.system.js","./p-a6c41423.system.js","./p-f7aa7448.system.js","./p-8c245f5b.system.js"],function(e){"use strict";var t,i,n,a,o;return{setters:[function(e){t=e.r;i=e.h},function(e){n=e.C},function(e){a=e.T},function(){},function(e){o=e.B}],execute:function(){var s=undefined&&undefined.__decorate||function(e,t,i,n){var a=arguments.length,o=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)if(s=e[r])o=(a<3?s(o):a>3?s(t,i,o):s(t,i))||o;return a>3&&o&&Object.defineProperty(t,i,o),o};var r=e("psk_textarea",function(){function e(e){var i=this;t(this,e);this.__inputHandler=function(e){e.stopImmediatePropagation();var t=e.target.value;if(i["changeModel"]){i["changeModel"].call(i,"value",t)}else{console.warn("[psk-textarea] Function named -=changeModel=- is not defined!")}};this.label=null;this.value=null;this.name=null;this.placeholder=null;this.required=false;this.readOnly=false;this.invalidValue=null}e.prototype.render=function(){var e=this.invalidValue===null?"":this.invalidValue?"is-invalid":"is-valid";return i("div",{class:"form-group"},this.label&&i("psk-label",{for:this.name,label:this.label}),i("textarea",{name:this.name,value:this.value,placeholder:this.placeholder,required:this.required,class:"form-control "+e,readOnly:this.readOnly,onKeyUp:this.__inputHandler.bind(this),onChange:this.__inputHandler.bind(this)}))};return e}());s([n(),o()],r.prototype,"render",null);s([a({description:['By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:false,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],r.prototype,"label",void 0);s([a({description:["Specifies the value of an psk-textarea component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:false,propertyType:"string"})],r.prototype,"value",void 0);s([a({description:["Specifies the name of a psk-textarea component. It is used along with the psk-label component."],isMandatory:false,propertyType:"string"})],r.prototype,"name",void 0);s([a({description:["Specifies a short hint that describes the expected value of an psk-textarea component"],isMandatory:false,propertyType:"string"})],r.prototype,"placeholder",void 0);s([a({description:["Specifies that an input field must be filled out before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:false,propertyType:"boolean"})],r.prototype,"required",void 0);s([a({description:["\tSpecifies that an input field is read-only.",'Accepted values: "true" and "false"'],isMandatory:false,propertyType:"boolean"})],r.prototype,"readOnly",void 0);s([a({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:false,propertyType:"boolean"})],r.prototype,"invalidValue",void 0)}}});
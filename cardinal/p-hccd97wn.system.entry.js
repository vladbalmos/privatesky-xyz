System.register(["./p-226ad382.system.js"],function(e){"use strict";var l,t;return{setters:[function(e){l=e.r;t=e.h}],execute:function(){var s=e("psk_select",function(){function e(e){l(this,e);this.label=null;this.defaultValue=null;this.selectionType="single";this.placeholder=null;this.required=false;this.disabled=false;this.invalidValue=null;this.options=null}e.prototype.componentWillLoad=function(){if(this.selectionType!=="single"&&this.selectionType!=="multiple"){this.selectionType="single"}};e.prototype.render=function(){var e=this;var l=this.label.replace(/\s/g,"").toLowerCase();return t("div",{class:"form-group"},t("psk-label",{for:l,label:this.label}),t("select",{name:l,id:l,class:"form-control",disabled:this.disabled,required:this.required,multiple:this.selectionType==="multiple"},this.placeholder&&t("option",{disabled:true,label:this.placeholder,value:""}),this.options.map(function(l){var s=l.value?l.value:l.label.replace(/\s/g,"").toLowerCase();var i=l.selected?l.selected:e.defaultValue===l.value;return t("option",{selected:i,value:s,label:l.label,disabled:l.disabled})})))};return e}())}}});
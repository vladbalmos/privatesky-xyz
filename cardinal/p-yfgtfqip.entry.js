import{r as t,h as e,g as o}from"./p-bd5842d7.js";import{E as s}from"./p-18c69f0f.js";import{T as r}from"./p-7aa21657.js";import{C as i}from"./p-853e84b9.js";const l=s.PSK_SCROLL_EVT;class n extends CustomEvent{constructor(t,e,o){super(t,o),this.getEventType=function(){return l},this.parentEventData=e}}const c=class{constructor(e){t(this,e),this.mobileLayout=!1,this.componentCode="",this.hasSlot=!1}__createLoader(){let t="";for(let e=1;e<=12;e++)t+=`<div class="sk-circle${e} sk-circle"></div>`;let e=document.createElement("div");return e.className="app-loader",e.innerHTML=`<div class='sk-fading-circle'>${t}</div>`,e}componentWillLoad(){this.host.parentElement&&(this.htmlLoader=this.__createLoader(),this.host.parentElement.appendChild(this.htmlLoader));let t=this.host.innerHTML;if((t=t.replace(/\s/g,"")).length&&(this.hasSlot=!0),"string"==typeof this.controller)return new Promise((t,e)=>{i.getController(this.controller).then(e=>{new e(this.host),t()}).catch(e)});console.error("No controller added to app-root")}componentDidLoad(){this.htmlLoader&&this.htmlLoader.parentNode&&this.htmlLoader.parentNode.removeChild(this.htmlLoader)}render(){return this.hasSlot?e("slot",null):e("psk-default-renderer",{handleScrollEvent:this.handleScrollEvent.bind(this)})}handleScrollEvent(t){t.preventDefault(),t.stopImmediatePropagation(),t.target.dispatchEvent(new n("pageScroll",t.target,{bubbles:!0,composed:!0,cancelable:!0}))}get host(){return o(this)}};!function(t,e,o,s){var r,i=arguments.length,l=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,o,s);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(l=(i<3?r(l):i>3?r(e,o,l):r(e,o))||l);i>3&&l&&Object.defineProperty(e,o,l)}([r({isMandatory:!0,description:["This property is a string that will permit the developer to choose his own controller.","It is recommended that each app to extend the provided default controller and adapt it to the application needs"],propertyType:"string",defaultValue:"null"})],c.prototype,"controller",void 0);export{c as psk_app_root};
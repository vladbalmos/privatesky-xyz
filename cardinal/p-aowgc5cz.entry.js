import{r as t,h as e}from"./p-bd5842d7.js";import{C as i}from"./p-92afb37f.js";import"./p-18c69f0f.js";import{T as r}from"./p-7aa21657.js";import{B as s}from"./p-250a54e6.js";var a=function(t,e,i,r){var s,a=arguments.length,o=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var p=t.length-1;p>=0;p--)(s=t[p])&&(o=(a<3?s(o):a>3?s(e,i,o):s(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o};const o=class{constructor(e){t(this,e)}render(){return e("div",{class:"image_container"},e("div",{class:"image_wrapper"},e("img",{src:this.src,class:"img-fluid",alt:this.title})),this.title?e("div",{class:"image_description"},this.title):null)}};a([i(),s(),r({description:'This property is the path to the image source (Example:"page/PrivateSky/EDFS.png").',isMandatory:!0,propertyType:"string"})],o.prototype,"src",void 0),a([r({description:"This property is the title of the image(the alt attribute) and the description of the image.",isMandatory:!1,propertyType:"string",specialNote:"If no title is given,there will not be assumed one and there will be no image description/alt."})],o.prototype,"title",void 0);export{o as psk_img};
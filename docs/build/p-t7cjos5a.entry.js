import{r as t,h as s}from"./p-94bfe925.js";const e=class{constructor(s){t(this,s),this.errorLoadingPage=!1}componentWillLoad(){let t=new XMLHttpRequest;t.open("GET",this.pageUrl),t.onload=()=>{200!=t.status?this.errorLoadingPage=!0:this.pageContent=t.responseText},t.onerror=()=>{this.errorLoadingPage=!0},t.send()}render(){return this.errorLoadingPage?s("h4",null,`Page ${this.pageUrl} could not be loaded!`):s("div",{class:"page_content",innerHTML:this.pageContent})}};export{e as psk_page_loader};
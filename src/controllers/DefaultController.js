import {getElement} from "@stencil/core";
import appNavigationStructure from "../global/app-navigation-structure";

export default class DefaultController {

  constructor(view) {
    this.element = getElement(view);

    this.element.addEventListener('menuEvent', (e) => {
      e.stopImmediatePropagation();
      if (e.detail.type === "href") {
        window.location.href = e.detail.path;
      }
      let menuItem = e.detail;
      let changePathEvt = new CustomEvent("routeChanged", {bubbles: true, cancelable: false, detail: menuItem});
      this.element.dispatchEvent(changePathEvt);
    });

    this.element.addEventListener("needMenuItems", (e) => {

      let callback = e.detail;
      if (callback && typeof callback === "function") {
        callback(appNavigationStructure);
      } else {
        console.error("Callback was not properly provided!");
      }
    });


    this.element.addEventListener("getUserInfo", (e) => {

      let callback = e.detail;
      if (callback && typeof callback === "function") {
        callback(null,{
          username:"PSK Components",
          email:"info@privatesky.ro",
          avatar:"https://www.seekpng.com/png/full/24-249312_abstract-abstract-colorful-squares-png.png"
        });
      } else {
        console.error("Callback was not properly provided!");
      }
    });
  }
}


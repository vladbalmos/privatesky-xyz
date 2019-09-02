export default class DefaultController {

  constructor(view){
    console.log(view);
    if(!view) {
      view = document;
    }

    view.addEventListener('menuEvent', function (e) {
      e.stopImmediatePropagation();
      let path = e.detail;

      let changePathEvt = new CustomEvent("routeChanged",{bubbles:true, cancelable:false, detail:path});
      view.dispatchEvent(changePathEvt);

      console.log("Event din default controller", e.detail);

    });
  }

  getMenuItems() {
    return [{
      name: "Home",
      path: "/home"
    },
      {
        name: "About",
        path: "/about"
      },
      {
        name: "Contact",
        path: "/contact"
      }]
  }
}


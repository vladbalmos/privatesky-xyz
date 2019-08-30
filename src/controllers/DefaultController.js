export default class DefaultController {

  constructor(view){
    document.addEventListener('MenuEvent', function (e) {
      console.log("default", e);
    });
  }

}


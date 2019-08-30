export default class DefaultController {

  constructor(view){
    console.log("sunt in default");
    document.addEventListener('MenuEvent', function (e) {
      console.log("default", e);
    });
  }

}


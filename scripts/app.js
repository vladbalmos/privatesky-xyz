import DefaultController from "./controllers/DefaultController.js";
import Controller from "./controllers/Controller.js";

document.addEventListener("controllerFactoryIsReady", (e) => {
    let ControllerFactory = e.detail;
    ControllerFactory.registerController("Controller", Controller);
    ControllerFactory.registerController("DefaultController", DefaultController);
});
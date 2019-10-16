import { getElement } from "@stencil/core";
import appNavigationStructure from "../global/app-navigation-structure";
import wizardConfiguration from "../global/wizard-structure";
const PluginPagesURL = "https://raw.githubusercontent.com/PrivateSky/pwc-apps/master/src/pages/pages-structure.json";
export default class DefaultController {

    constructor(view) {
        this.element = getElement(view);

        this.element.addEventListener('menuEvent', (e) => {
            e.stopImmediatePropagation();
            if (e.detail.type === "href") {
                window.location.href = e.detail.path;
            }
            let menuItem = e.detail;
            let changePathEvt = new CustomEvent("routeChanged", { bubbles: true, cancelable: false, detail: menuItem });
            this.element.dispatchEvent(changePathEvt);
        });

        /*this.element.addEventListener('pageInstall', (e) => {

        });*/

        this.element.addEventListener("needMenuItems", (e) => {

         let prepareNavigationStructure = function(appNavigationStructure){
            let callback = e.detail;
            if (callback && typeof callback === "function") {
              callback(appNavigationStructure);
            } else {
              console.error("Callback was not properly provided!");
            }
          };

         let xhr = new XMLHttpRequest();

          xhr.open("GET",PluginPagesURL);

          xhr.onload = () => {
            if (xhr.status != 200) {
              prepareNavigationStructure(appNavigationStructure);
            } else {
              let pagesNavigation = JSON.stringify(xhr.responseText);
              prepareNavigationStructure(appNavigationStructure.concat(pagesNavigation));
            }
          };

          xhr.onerror = () => {
            prepareNavigationStructure(appNavigationStructure);
          };

          xhr.send();


        });

        this.element.addEventListener("getUserInfo", (e) => {

            let callback = e.detail;
            if (callback && typeof callback === "function") {
                callback(null, {
                    username: "PSK Components",
                    email: "info@privatesky.ro",
                    avatar: "https://i.ibb.co/ZTcVc3L/psk-component.png"
                });
            } else {
                console.error("Callback was not properly provided!");
            }
        });

        this.element.addEventListener("needWizardConfiguration", (e) => {
            let callback = e.detail;
            if (callback && typeof callback === "function") {
                callback(wizardConfiguration);
            } else {
                console.error("Callback was not properly provided!");
            }
        });

        this.element.addEventListener("changeStep", (e) => {
            let callback = e.detail.callback;
            if (callback && typeof callback === "function") {
                this._handleChangeStep(e.detail);
            } else {
                console.error("Callback was not properly provided!");
            }
        });

        this.element.addEventListener("sendPin", (evt) => {
            let callback = evt.detail.callback;
            if (callback && typeof callback === "function") {
                this._handleSendPin(evt.detail);
            } else {
                console.error("Callback was not properly provided!");
            }
        });
    }

    _handleSendPin({ pin, callback }) {
        if (!pin || pin.trim().length < 6) {
            callback("Invalid PIN length. Minimum is 6!");
        } else {
            console.log(pin);
            callback(null);
        }
    }

    __getPropertyValue(properties, pName) {
        if (properties.stepProperties && properties.stepProperties.hasOwnProperty(pName)) {
            return properties.stepProperties[pName];
        }
        return null;
    }

    _handleChangeStep(details) {
        let index = details.stepIndexToDisplay;
        let callback = details.callback;
        let wizardSteps = details.wizardSteps;
        let activeStep = details.activeStep;
        let errorMessage = null;

        if (index < 0 || index >= wizardSteps.length) {
            errorMessage = "Index has no valid value";
        } else if (index <= activeStep.stepIndex) {
            wizardSteps[activeStep.stepIndex] = {...activeStep };
            activeStep = {...wizardSteps[index] };
        } else {
            switch (activeStep.stepProperties.stepPhase) {
                case 'csb-name':
                    {
                        const csbName = this.__getPropertyValue(activeStep, "csbName");
                        if (csbName === null || csbName.trim().length === 0) {
                            errorMessage = "CSB Name is empty";
                        } else {
                            activeStep.stepCompleted = true;
                            wizardSteps[activeStep.stepIndex] = {...activeStep };
                            activeStep = {...wizardSteps[index] };
                        }
                        break;
                    }
                case 'csb-type':
                    {
                        const csbType = this.__getPropertyValue(activeStep, "csbType");
                        if (csbType === null || csbType.trim().length === 0) {
                            errorMessage = "CSB Type is empty";
                        } else {
                            activeStep.stepCompleted = true;
                            wizardSteps[activeStep.stepIndex] = {...activeStep };
                            activeStep = {...wizardSteps[index] };
                        }
                        break;
                    }
                case 'save-recovery-phrase':
                    {
                        const saveRecoveryPhrase = this.__getPropertyValue(activeStep, "saveRecoveryPhrase");
                        if (saveRecoveryPhrase === null) {
                            errorMessage = "Recovery phase property is not sent";
                        } else {
                            activeStep.stepCompleted = true;
                            wizardSteps[activeStep.stepIndex] = {...activeStep };
                            activeStep = {...wizardSteps[index] };
                        }
                        break;
                    }

                default:
                    break;
            }
        }

        callback(errorMessage, {
            activeStep: activeStep,
            wizardSteps: wizardSteps
        });
    }
}

import { c as getElement, r as registerInstance, d as createEvent, h } from './core-1b7fc012.js';

const appConfig = {
  basePagesUrl: "https://raw.githubusercontent.com/PrivateSky/pwc-apps/master/src/pages/",
  defaultPageProp: {
    icon: "fa-bars",
    type: "route",
    component: "psk-page-loader",
    exact: true
  },
  profile: {
    username: "PrivateSky",
    email: "privatesky@axiologic.net",
    avatar: "https://privatesky.xyz/assets/icon/privatesky.png"
  }
};

const appNavigationStructure = [
	{
		name: "PSK Components",
		path: "/psk-components",
		icon: "fa-bars",
		type: "abstract",
		children: [
			{
				name: "App Menu",
				path: "/psk-components/app-menu",
				component: "app-menu-usage",
				icon: "fa-bars",
				type: "route",
				exact: true
			},
			{
				name: "App Router",
				component: "app-router-usage",
				path: "/psk-components/app-router",
				icon: "fa-bars",
				type: "route",
				exact: true
			},
			{
				name: "Attachments List",
				component: "attachment-list-usage",
				path: "/psk-components/attach-list",
				icon: "fa-bars",
				type: "route",
				exact: true
			},
			{
				name: "Files Chooser",
				component: "files-chooser-usage",
				path: "/psk-components/files-chooser",
				icon: "fa-bars",
				type: "route",
				exact: true
			},
			{
				name: "Modal",
				component: "modal-usage",
				path: "/psk-components/modal",
				icon: "fa-bars",
				type: "route",
				exact: true
			},
			{
				name: "Page not found",
				component: "page-not-found-usage",
				path: "/psk-components/page-not-found",
				icon: "fa-bars",
				type: "route",
				exact: true
			},
			{
				name: "PIN Popup",
				component: "pin-popup-usage",
				path: "/psk-components/pin-popup",
				icon: "fa-bars",
				type: "route",
				exact: true
			},
			{
				name: "UI Loader",
				component: "ui-loader-usage",
				path: "/psk-components/ui-loader",
				icon: "fa-bars",
				type: "route",
				exact: true
			},
			{
				name: "User Profile",
				path: "/psk-components/user-profile",
				icon: "fa-bars",
				type: "route",
				component: "user-profile-usage",
				exact: true
			},
			{
				name: "Feedback Alert",
				path: "/psk-components/ui-feedback",
				icon: "fa-bars",
				type: "route",
				component: "feedback-alert-usage",
				exact: true
			},
			{
				name: "Feedback List",
				path: "/psk-components/list-feedback",
				icon: "fa-bars",
				type: "route",
				component: "feedback-list-usage",
				exact: true
			},
			{
				name: "Wizard",
				path: "/psk-components/wizard",
				icon: "fa-bars",
				type: "route",
				component: "wizard-usage",
				exact: true
			}
		]
	}
];

const wizardConfiguration = [
	{
		stepName: "Name your CSB",
		stepIndex: 0,
		stepComponent: "enter-csb-name"
	},
	{
		stepName: "Select CSB type(s)",
		stepIndex: 1,
		stepComponent: "select-csb-type"
	},
	{
		stepName: "Save recovery Phrase",
		stepIndex: 2,
		stepComponent: "save-recovery-phrase"
	},
	{
		stepName: "Finish",
		stepIndex: 3,
		stepComponent: "finish-page"
	}
];

const PluginPagesURL = appConfig.basePagesUrl + "pages-structure.json";

class DefaultController {

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
      let appStructure = JSON.parse(JSON.stringify(appNavigationStructure));
      let prepareNavigationStructure = appNavigationStructure => {
        let callback = e.detail;
        if (callback && typeof callback === "function") {
          callback(appNavigationStructure);
        } else {
          console.error("Callback was not properly provided!");
        }
      };

      let fillOptionalProps = (navigationPages, pathPrefix) => {

        navigationPages.forEach(page => {

          if (!page.path) {
            page.path = page.name;
          }

          if (pathPrefix) {
            page.path = pathPrefix + "/"+page.path;
          }

          if (page.children) {
            page.type = "abstract";
            if (!page.icon) {
              page.icon = appConfig.defaultPageProp.icon;
            }
          } else {
            for (let prop in appConfig.defaultPageProp) {
              if (!page[prop]) {
                page[prop] = appConfig.defaultPageProp[prop];
              }
            }

            if (page.component === "psk-page-loader") {
              if (!page.componentProps) {
                page.componentProps = {};
              }
              page.componentProps.pageUrl = appConfig.basePagesUrl + page.pageSrc;
            }
          }

          if (page.children) {
            fillOptionalProps(page.children, page.path);
          }
        });
      };

      let xhr = new XMLHttpRequest();

      xhr.open("GET", PluginPagesURL);

      xhr.onload = () => {
        if (xhr.status != 200) {
          prepareNavigationStructure(appStructure);
        } else {
          let navigationPages = JSON.parse(xhr.responseText);
          fillOptionalProps(navigationPages);

          let rootPages = appStructure.map(rootPage => rootPage.name);

          navigationPages.forEach((page, index) => {
            if (page.parent > -1) {
              let parentIndex = rootPages.indexOf(page.parent);
              if (parentIndex) {
                if (!appStructure[parentIndex].children) {
                  appStructure[parentIndex].children = [];
                }
                page.path = appStructure[parentIndex].path + page.path;
                appStructure[parentIndex].children.push(page);
                navigationPages.splice(index, 1);
              }
            }
          });



          prepareNavigationStructure(navigationPages.concat(appStructure));
        }
      };

      xhr.onerror = () => {
        prepareNavigationStructure(appStructure);
      };

      xhr.send();

    });

    this.element.addEventListener("getUserInfo", (e) => {

      let callback = e.detail;
      if (callback && typeof callback === "function") {
        callback(null, appConfig.profile);
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

  _handleSendPin({pin, callback}) {
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
      wizardSteps[activeStep.stepIndex] = {...activeStep};
      activeStep = {...wizardSteps[index]};
    } else {
      switch (activeStep.stepProperties.stepPhase) {
        case 'csb-name': {
          const csbName = this.__getPropertyValue(activeStep, "csbName");
          if (csbName === null || csbName.trim().length === 0) {
            errorMessage = "CSB Name is empty";
          } else {
            activeStep.stepCompleted = true;
            wizardSteps[activeStep.stepIndex] = {...activeStep};
            activeStep = {...wizardSteps[index]};
          }
          break;
        }
        case 'csb-type': {
          const csbType = this.__getPropertyValue(activeStep, "csbType");
          if (csbType === null || csbType.trim().length === 0) {
            errorMessage = "CSB Type is empty";
          } else {
            activeStep.stepCompleted = true;
            wizardSteps[activeStep.stepIndex] = {...activeStep};
            activeStep = {...wizardSteps[index]};
          }
          break;
        }
        case 'save-recovery-phrase': {
          const saveRecoveryPhrase = this.__getPropertyValue(activeStep, "saveRecoveryPhrase");
          if (saveRecoveryPhrase === null) {
            errorMessage = "Recovery phase property is not sent";
          } else {
            activeStep.stepCompleted = true;
            wizardSteps[activeStep.stepIndex] = {...activeStep};
            activeStep = {...wizardSteps[index]};
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

const appMaxWidth = 650;
const AppRoot = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.mobileLayout = false;
        if (!this.controller) {
            this.controller = new DefaultController(this);
        }
        this.routeChangedEvent = createEvent(this, "routeChanged", 7);
    }
    checkLayout() {
        this.mobileLayout = document.documentElement.clientWidth < appMaxWidth;
    }
    componentWillLoad() {
        this.checkLayout();
    }
    render() {
        return (h("div", { class: `global_container ${this.mobileLayout ? "is-mobile" : ""}` }, h("aside", null, h("psk-user-profile", null), h("app-menu", { "item-renderer": "sidebar-renderer", hamburgerMaxWidth: appMaxWidth }, " "), this.mobileLayout === false ? h("div", { class: "nav-footer" }, "version 0.1") : null), h("section", null, h("nav", null), h("psk-app-router", { failRedirectTo: "/home" }, " "), this.mobileLayout === true ? h("div", { class: "nav-footer bottom-stick" }, "version 0.1") : null)));
    }
    static get style() { return "div.global_container{\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  height: 100%;\n  background-color: #f8f9fc;\n}\n\ndiv.global_container.is-mobile{\n  width: 100%;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n\n.is-mobile aside{\n  width: 100%;\n  height: auto;\n  overflow: inherit;\n}\n\naside {\n  height:100%;\n  background-color: #4e73df;\n  background-image: -webkit-gradient(linear,left top, left bottom,color-stop(10%, #4e73df),to(#224abe));\n  background-image: linear-gradient(180deg,#4e73df 10%,#224abe 100%);\n  color: white;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  -ms-flex-order:1;\n  order:1;\n  -ms-flex: 1;\n  flex: 1;\n  min-width: 320px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  overflow: auto;\n}\nnav{\n  width:100%;\n  height: 4.375rem;\n  background-color: #fff!important;\n  -webkit-box-shadow: 0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important;\n  box-shadow: 0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important;\n}\n\n.nav-footer{\n  text-align: center;\n  width: 100%;\n  padding: 10px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  background: #142b86;\n  font-size: 85%;\n}\n.nav-footer.bottom-stick{\n color:#FFF;\n  background: #224abe;\n}\n\nsection{\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  height:100%;\n  overflow:hidden auto;\n}\n\napp-menu,\npsk-app-router{\n-ms-flex-positive: 1;\nflex-grow: 1;\n}\n\npsk-user-profile{\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n\nh1 {\n  font-size: 1.4rem;\n  font-weight: 500;\n  color: #fff;\n  padding: 0 12px;\n}\n\nsection{\n-ms-flex-order:2;\norder:2;\n-ms-flex: 8;\nflex: 8;\n}"; }
};

export { AppRoot as app_root };

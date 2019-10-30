import { getElement } from "@stencil/core";
import appConfig from "../app-config";
import appNavigationStructure from "../global/app-navigation-structure";
import wizardConfiguration from "../global/wizard-structure";

const PluginPagesURL = appConfig.basePagesUrl + "pages-structure.json";

export default class DefaultController {

    constructor(view) {
        this.element = getElement(view);
        this.openFeedbackRequest = null;

        let appStructure = JSON.parse(JSON.stringify(appNavigationStructure));
        this._fetchPagesStructure(appStructure);

        this.element.addEventListener('menuEvent', (e) => {
            e.stopImmediatePropagation();
            if (e.detail.type === "href") {
                window.location.href = e.detail.path;
            }
            let menuItem = e.detail;
            let changePathEvt = new CustomEvent("routeChanged", {
                bubbles: true,
                cancelable: false,
                detail: menuItem
            });
            this.element.dispatchEvent(changePathEvt);
        });

        this.element.addEventListener("needMenuItems", (e) => {
            e.stopImmediatePropagation();
            let callback = e.detail;
            if (callback && typeof callback === "function") {
                let interval = setInterval(() => {
                    if (this.pagesStructure) {
                        callback(null, this.pagesStructure);
                        stopInterval();
                    }
                }, 100);

                let stopInterval = () => {
                    clearInterval(interval);
                }
            } else {
                console.error("Callback was not properly provided!");
            }
        });

        this.element.addEventListener("validateUrl", (e) => {
            e.stopImmediatePropagation();
            let { sourceUrl, callback } = e.detail;
            if (callback && typeof callback === "function") {
                this._parseSourceUrl(sourceUrl, callback);
            } else {
                console.error("Callback was not properly provided!");
            }
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

        this.element.addEventListener('openFeedback', (e) => {
            this.openFeedbackRequest = e.detail;
        });
        this.element.addEventListener('showFeedback', (e) => {
            this.openFeedbackRequest(e.detail.message, e.detail.name, e.detail.type);
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

    _parseSourceUrl(sourceUrl, callback) {
        let builtInPath = '',
            urlSent = false,
            errorSent = false,
            menuList = JSON.parse(JSON.stringify(this.pagesStructure)),
            pathStructure = sourceUrl.split('/').map(el => el.replace(/(\s+|:+|\/+)/g, '').toLowerCase());

        pathStructure.forEach((path, index) => {
            if (errorSent) return;

            if (menuList.length === 0) {
                callback(`${sourceUrl} is not a valid path in the application!`);
                errorSent = true;
                return;
            }

            builtInPath = `${builtInPath}${path}`;

            let childMenu = menuList.find(menuItem => {
                let menuPath = menuItem.path.replace(/(\s+|:+|\/+|-+)/g, '').toLowerCase();
                let menuName = menuItem.name.replace(/(\s+|:+|\/+|-+)/g, '').toLowerCase();
                return path === menuName || builtInPath === menuPath;
            });

            if (!childMenu) {
                callback(`${sourceUrl} is not a valid path in the application!`);
                errorSent = true;
                return;
            }

            if (index === pathStructure.length - 1 &&
                childMenu.type === 'route') {
                callback(null, childMenu.path);
                urlSent = true;
                return;
            }

            menuList = childMenu.hasOwnProperty("children") ? childMenu.children : [];
        });

        if (!urlSent && !errorSent) {
            callback(`${sourceUrl} is not a valid path in the application!`);
        }
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
            wizardSteps[activeStep.stepIndex] = {
                ...activeStep
            };
            activeStep = {
                ...wizardSteps[index]
            };
        } else {
            switch (activeStep.stepProperties.stepPhase) {
                case 'csb-name':
                    {
                        const csbName = this.__getPropertyValue(activeStep, "csbName");
                        if (csbName === null || csbName.trim().length === 0) {
                            errorMessage = "CSB Name is empty";
                        } else {
                            activeStep.stepCompleted = true;
                            wizardSteps[activeStep.stepIndex] = {
                                ...activeStep
                            };
                            activeStep = {
                                ...wizardSteps[index]
                            };
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
                            wizardSteps[activeStep.stepIndex] = {
                                ...activeStep
                            };
                            activeStep = {
                                ...wizardSteps[index]
                            };
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
                            wizardSteps[activeStep.stepIndex] = {
                                ...activeStep
                            };
                            activeStep = {
                                ...wizardSteps[index]
                            };
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

    _fetchPagesStructure(appStructure) {
        let xhr = new XMLHttpRequest();

        xhr.open("GET", PluginPagesURL);

        xhr.onload = () => {
            if (xhr.status != 200) {
                this._prepareNavigationStructure(appStructure);
            } else {
                let navigationPages = JSON.parse(xhr.responseText);
                this._fillOptionalProps(navigationPages);

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

                this._prepareNavigationStructure(navigationPages.concat(appStructure));
            }
        };

        xhr.onerror = () => {
            this._prepareNavigationStructure(appStructure);
        };

        xhr.send();
    }

    _prepareNavigationStructure(appNavigationStructure) {
        this.pagesStructure = JSON.parse(JSON.stringify(appNavigationStructure));
    };

    _fillOptionalProps(navigationPages, pathPrefix) {
        navigationPages.forEach(page => {

            if (!page.path) {
                let pageName = page.name.toLowerCase();
                let pagePath = pageName.toLowerCase().replace(/\s+/g, '-');
                pagePath = pagePath.replace(/[:\/]/g, '');
                page.path = pagePath;
            }

            if (pathPrefix) {
                page.path = pathPrefix + "/" + page.path;
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
                    if (page.pageSrc) {
                        page.componentProps.pageUrl = appConfig.basePagesUrl + page.pageSrc;
                    } else {

                        let filename = page.name.replace(/\s(.)/g, function($1) {
                            return $1.toUpperCase();
                        }).replace(/\s/g, '');

                        let prefix = pathPrefix.replace(/^\//, '');
                        page.componentProps.pageUrl = appConfig.basePagesUrl + prefix + "/" + filename + ".html";
                    }
                }
            }

            if (page.children) {
                this._fillOptionalProps(page.children, page.path);
            }
        });
    };
}

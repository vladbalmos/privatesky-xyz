import { B as BUILD, c as getElement } from './core-1b7fc012.js';

function CustomTheme() {
    return (proto) => {
        // this is to resolve the 'compiler optimization issue':
        // lifecycle events not being called when not explicitly declared in at least one of components from bundle
        BUILD.cmpDidLoad = true;
        BUILD.cmpDidUnload = true;
        const { componentDidLoad, componentDidUnload } = proto;
        proto.componentDidLoad = function () {
            const host = getElement(this);
            if (!host) {
                //current component does not have a shadow dom.
                return;
            }
            let componentName = host.tagName.toLowerCase();
            // @ts-ignore
            if (typeof globalConfig !== "undefined" && typeof globalConfig.theme === "string") {
                // @ts-ignore
                let themeStylePath = "/assets/themes/" + globalConfig.theme + "/components/" + componentName + "/" + componentName + ".css";
                var styleElement = document.createElement("link");
                styleElement.setAttribute("rel", "stylesheet");
                styleElement.setAttribute("href", themeStylePath);
                host.shadowRoot.prepend(styleElement);
            }
            return componentDidLoad && componentDidLoad.call(this);
        };
        proto.componentDidUnload = function () {
            //const host = getElement(this);
            //const method = this[methodName];
            // Your decorating code goes here. Cleanup!
            return componentDidUnload && componentDidUnload.call(this);
        };
    };
}

export { CustomTheme as C };

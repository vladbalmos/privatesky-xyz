import { B as BUILD, c as getElement, r as registerInstance, h } from './core-1b7fc012.js';

const HELP_PROPERTY = "with-help";
const BASE_CLASS = "baseClass";
const DEFINED_PROPERTIES = "definedProperties";
const DEFINED_METHODS = "definedMethods";
const PSK_TOC_DOCUMENTATION = "psk-toc-help";

function TableOfContentProperty(opts) {
    return function (proto, propertyKey) {
        const { componentWillLoad } = proto;
        proto.componentWillLoad = function () {
            let self = this;
            if (self.helpConfiguration) {
                const tempHelpConf = Object.assign({}, self.helpConfiguration);
                const newProperty = Object.assign({}, opts, { propertyName: propertyKey });
                if (tempHelpConf.hasOwnProperty(DEFINED_PROPERTIES)) {
                    let tempProps = [...tempHelpConf[DEFINED_PROPERTIES]];
                    tempProps.push(newProperty);
                    tempHelpConf[DEFINED_PROPERTIES] = [...tempProps];
                }
                else {
                    tempHelpConf[DEFINED_PROPERTIES] = [newProperty];
                }
                self.helpConfiguration = Object.assign({}, tempHelpConf);
            }
            return componentWillLoad && componentWillLoad.call(self);
        };
    };
}

function TableOfContentClass(opts) {
    // @ts-ignore
    return function (proto, ...args) {
        BUILD.cmpWillLoad = true;
        let renderHelpSection = true;
        let { render, componentWillLoad } = proto;
        proto.componentWillLoad = function () {
            let self = this;
            const thisElement = getElement(self);
            renderHelpSection = thisElement.hasAttribute(HELP_PROPERTY);
            if (renderHelpSection) {
                self.helpConfiguration = {
                    baseClass: Object.assign({}, opts)
                };
            }
            return componentWillLoad && componentWillLoad.call(self);
        };
        proto.render = function () {
            let self = this;
            if (!renderHelpSection) {
                return render && render.call(self);
            }
            document.dispatchEvent(new CustomEvent(PSK_TOC_DOCUMENTATION, {
                bubbles: true,
                composed: true,
                cancelable: true,
                detail: self.helpConfiguration
            }));
        };
    };
}

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const PskPageNotFound = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.urlDestination = null;
        this.pageRenderer = "psk-page-not-found-renderer";
    }
    render() {
        if (this.urlDestination !== null) {
            return (h("stencil-router-redirect", { url: this.urlDestination }));
        }
        else {
            let currentLocation = window.location.pathname;
            let shouldBeRedirected = currentLocation.indexOf(this.basePath) != -1;
            if (shouldBeRedirected) {
                return h("stencil-router-redirect", { url: this.basePath });
            }
            else {
                return h(this.pageRenderer, null);
            }
        }
    }
    static get style() { return ":host>* {\n    width: 100%;\n    height: 100%;\n}\n\nh1 {\n    color: red;\n    padding: 1em;\n}\n\na {\n    text-decoration: none;\n    font-style: italic;\n    font-weight: bold;\n}"; }
};
__decorate([
    TableOfContentProperty({
        description: `This property is the base path of the website. 
		If this parameter is sent to the component, then when the user navigates to an unknown page, he will be redirected to the base path. 
		It is not mandatory to be the root of the application, it can be the root of a section inside the website.`,
        specialNote: `If this parameter is missing, urlDestination parameter is checked.`,
        mandatory: false
    })
], PskPageNotFound.prototype, "basePath", void 0);
__decorate([
    TableOfContentProperty({
        description: `This property gives a custom redirect URL destination in case the user navigates to an unknown page.`,
        specialNote: `If this parameter is missing, pageRenderer parameter is checked.`,
        mandatory: false
    })
], PskPageNotFound.prototype, "urlDestination", void 0);
__decorate([
    TableOfContentProperty({
        description: `This property allows the component to display a custom Page 
		not found content in case the user navigates to an unknown page.`,
        specialNote: `If this parameter is missing, <b>psk-page-not-found-renderer</b> is assumed.`,
        mandatory: false
    })
], PskPageNotFound.prototype, "pageRenderer", void 0);
__decorate([
    TableOfContentClass({
        className: "PskPageNotFound",
        componentTag: "psk-page-not-found",
        description: [
            `This component is intended to be used inside a router component, so when the user navigates to an unknown route, this component will be loaded.`,
            `This component should be instantiated everywhere in application where there is a possibility to navigate to a wrong or unknown route.`,
            `The component has the role to redirect the user to a valid route inside the application by using basePath or urlDestination properties.`,
            `If none of these two properties are given, then a third property is checked: pageRenderer.`,
            `The the order of the properties priority is the following: basePath; urlDestination - if basePath is not given, this property will be used; pageRenderer - if urlDestination is not given, pageRenderer will be used`
        ]
    })
], PskPageNotFound.prototype, "helpConfiguration", void 0);

export { PskPageNotFound as psk_page_not_found };

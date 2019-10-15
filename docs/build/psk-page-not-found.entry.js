import { r as registerInstance, h } from './core-1b7fc012.js';

const PskPageNotFound = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.urlDestination = null;
    }
    render() {
        if (this.urlDestination !== null) {
            return h("stencil-router-redirect", { url: this.urlDestination });
        }
        else {
            let currentLocation = window.location.pathname;
            let shouldBeRedirected = currentLocation.indexOf(this.basePath) != -1;
            if (shouldBeRedirected) {
                return h("stencil-router-redirect", { url: this.basePath });
            }
        }
    }
    static get style() { return ":host>* {\n    width: 100%;\n    height: 100%;\n}\n\nh1 {\n    color: red;\n    padding: 1em;\n}\n\na {\n    text-decoration: none;\n    font-style: italic;\n    font-weight: bold;\n}"; }
};

export { PskPageNotFound as psk_page_not_found };

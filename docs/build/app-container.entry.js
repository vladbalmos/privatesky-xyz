import { r as registerInstance, h } from './core-1b7fc012.js';

const AppContainer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("app-menu", null);
    }
    static get style() { return ""; }
};

export { AppContainer as app_container };

import { r as registerInstance, h } from './core-210175f2.js';

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

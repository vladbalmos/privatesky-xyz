import { r as registerInstance, h } from './core-1b7fc012.js';

const AppThemes = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: 'psk-themes' }, h("p", null, "App Themes")));
    }
};

export { AppThemes as psk_themes };

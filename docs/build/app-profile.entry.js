import { r as registerInstance, h } from './core-210175f2.js';

const AppProfile = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    normalize(name) {
        if (name) {
            return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
        }
        return '';
    }
    render() {
        console.log(this.match);
        if (this.match && this.match.params.name) {
            return (h("div", { class: "app-profile" }, h("p", null, "Hello! My name is ", this.normalize(this.match.params.name), ". My last name is ", this.lastName, " and my full Name is ", this.getMyName(this.match.params.name, this.lastName))));
        }
    }
    static get style() { return ".app-profile {\n  padding: 10px;\n}"; }
};

export { AppProfile as app_profile };

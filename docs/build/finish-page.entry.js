import { r as registerInstance, h } from './core-1b7fc012.js';

const Finish = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "content clearfix" }, h("section", { role: "tabpanel", class: "body" }, h("div", { class: "inner" }, h("div", { class: "wizard-header" }, h("h3", { class: "heading" }, "Finish")), h("div", { class: "form-row" }, h("div", { class: "form-holder form-holder-2" }, h("div", { class: "content-inner" }, h("h3", null, "Congratulations!"), h("p", null, "You have created your Cloud safe box!"))))))));
    }
};

export { Finish as finish_page };

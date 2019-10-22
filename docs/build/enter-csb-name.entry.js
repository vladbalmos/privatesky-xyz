import { r as registerInstance, h } from './core-1b7fc012.js';

const CsbName = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        if (!this.stepProperties) {
            this.stepProperties = {
                csbName: "",
                stepPhase: "csb-name"
            };
            this.onPropertiesChange(this.stepProperties);
        }
    }
    handleInputChange(evt) {
        this.stepProperties.csbName = evt.target.value;
        this.onPropertiesChange(this.stepProperties);
    }
    render() {
        return (h("div", { class: "content clearfix" }, h("section", { role: "tabpanel", class: "body" }, h("div", { class: "inner" }, h("div", { class: "wizard-header" }, h("h3", { class: "heading" }, "Enter your Cloud safe box name")), h("div", { class: "form-row" }, h("div", { class: "form-holder form-holder-2" }, h("label", { htmlFor: "csb-name" }, "Enter CSB Name"), h("input", { type: "text", name: "csb-name", id: "csb-name", class: "form-control", placeholder: "Enter a name for your cloud safe box", value: this.stepProperties.csbName, onKeyUp: this.handleInputChange.bind(this), required: true })))))));
    }
};

export { CsbName as enter_csb_name };

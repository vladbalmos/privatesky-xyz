import { r as registerInstance, h } from './core-1b7fc012.js';

const CsbType = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        if (!this.stepProperties) {
            this.stepProperties = {
                csbType: "",
                stepPhase: "csb-type"
            };
            this.onPropertiesChange(this.stepProperties);
        }
    }
    handleInputChange(evt) {
        this.stepProperties.csbType = evt.target.value;
        this.onPropertiesChange(this.stepProperties);
    }
    render() {
        return (h("div", { class: "content clearfix" }, h("section", { role: "tabpanel", class: "body" }, h("div", { class: "inner" }, h("div", { class: "wizard-header" }, h("h3", { class: "heading" }, "CSB Type")), h("div", { class: "form-row" }, h("div", { class: "form-holder form-holder-2" }, h("label", { htmlFor: "csb-type" }, "Enter the type of your CSB"), h("input", { type: "text", name: "csb-type", id: "csb-type", class: "form-control", placeholder: "E.g. Password, Financial, Health", value: this.stepProperties.csbType, onKeyUp: this.handleInputChange.bind(this), required: true })))))));
    }
};

export { CsbType as select_csb_type };

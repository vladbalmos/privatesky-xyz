import { r as registerInstance, h } from './core-1b7fc012.js';

const RecoveryPhrase = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        if (!this.stepProperties) {
            this.stepProperties = {
                saveRecoveryPhrase: false,
                stepPhase: "save-recovery-phrase"
            };
            this.onPropertiesChange(this.stepProperties);
        }
    }
    handleInputChange(evt) {
        this.stepProperties.saveRecoveryPhrase = evt.target.checked;
        this.onPropertiesChange(this.stepProperties);
    }
    render() {
        return (h("div", { class: "content clearfix" }, h("section", { role: "tabpanel", class: "body" }, h("div", { class: "inner" }, h("div", { class: "wizard-header" }, h("h3", { class: "heading" }, "Save recovery phrase")), h("div", { class: "form-row" }, h("div", { class: "form-holder form-holder-2" }, h("div", { class: "content-inner" }, h("p", null, "Massa placerat duis ultricies lacus sed turpis tin Elementum sagittis vitae et leo duis ut diam quam nulla. Viverra mauris in aliquam sem fringilla ut. Id leo in vitae turpis massa sed elementum tempus. Aliquet enim tortor at auctor urna nunc id cursus. Nulla aliquet enim tortor at auctor .Consquat nisl vel pretium lectus quam id leo."), h("div", { class: "form-checkbox" }, h("label", { class: "container" }, h("p", null, "I want to store recovery phrase untill I opt out."), h("input", { type: "checkbox", name: "checkbox", checked: this.stepProperties.saveRecoveryPhrase, onChange: this.handleInputChange.bind(this) }), h("span", { class: "checkmark" }))))))))));
    }
};

export { RecoveryPhrase as save_recovery_phrase };

import { r as registerInstance, d as createEvent, h } from './core-1b7fc012.js';

const PskWizard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.needWizardConfiguration = createEvent(this, "needWizardConfiguration", 7);
        this.changeStep = createEvent(this, "changeStep", 7);
        this.finishWizard = createEvent(this, "finishWizard", 7);
    }
    componentWillLoad() {
        this.needWizardConfiguration.emit((data) => {
            this.wizardSteps = data;
            this.activeStep = this.wizardSteps.length > 0 ? this.wizardSteps[0] : null;
        });
    }
    handleStepChange(indexToAdvance) {
        this.changeStep.emit({
            stepIndexToDisplay: indexToAdvance,
            wizardSteps: this.wizardSteps,
            activeStep: this.activeStep,
            callback: (err, data) => {
                if (err) {
                    console.error(err);
                    return;
                }
                this.activeStep = data.activeStep;
                this.wizardSteps = data.wizardSteps;
            }
        });
        return;
    }
    handleFinish() {
        this.finishWizard.emit({
            wizardSteps: this.wizardSteps,
            callback: (err, data) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(data);
            }
        });
        return;
    }
    handleStepPropertiesChange(newProperties) {
        this.activeStep["stepProperties"] = newProperties;
    }
    computeStepDesign(stepIndex, activeStepIndex, lastStepIndex) {
        let stepClass = "";
        if (stepIndex === 0) {
            stepClass += "first ";
        }
        else if (stepIndex === lastStepIndex - 1) {
            stepClass += "last ";
        }
        if (stepIndex < activeStepIndex) {
            stepClass += "done";
        }
        else if (stepIndex === activeStepIndex) {
            stepClass += "current";
        }
        return stepClass;
    }
    render() {
        const StepComponentRenderer = this.activeStep.stepComponent;
        return [
            h("div", { class: "page-content" }, h("div", { class: "wizard-content" }, h("div", { class: "wizard-form" }, h("form", { class: "form-register", action: "#", method: "post", onSubmit: (ev) => {
                    ev.preventDefault();
                    ev.stopImmediatePropagation();
                } }, h("div", { id: "form-total", class: "wizard clearfix" }, h("psk-stepper", { componentRender: this.componentRender, wizardSteps: this.wizardSteps, activeStep: this.activeStep, handleStepChange: this.handleStepChange.bind(this) }), h(StepComponentRenderer, { onPropertiesChange: this.handleStepPropertiesChange.bind(this), stepProperties: this.activeStep.stepProperties }), h("div", { class: "actions clearfix" }, h("ul", { role: "menu", "aria-label": "Pagination" }, this.activeStep.stepIndex > 0
                ? h("li", null, h("button", { role: "menuitem", onClick: this.handleStepChange.bind(this, this.activeStep.stepIndex - 1) }, "Previous"))
                : null, this.activeStep.stepIndex < this.wizardSteps.length - 1
                ? h("li", null, h("button", { role: "menuitem", onClick: this.handleStepChange.bind(this, this.activeStep.stepIndex + 1) }, "Next"))
                : null, this.activeStep.stepIndex === this.wizardSteps.length - 1
                ? h("li", null, h("button", { role: "menuitem", onClick: this.handleFinish.bind(this) }, "Finish"))
                : null)))))))
        ];
    }
    static get style() { return "\@font-face {\n    font-family: \'Open Sans\';\n    src: url(\'../fonts/Open_Sans/OpenSans-ExtraBold.ttf\') format(\'truetype\');\n    font-weight: 800;\n    font-style: normal;\n}\n\n\@font-face {\n    font-family: \'Open Sans\';\n    src: url(\'../fonts/Open_Sans/OpenSans-Regular.ttf\') format(\'truetype\');\n    font-weight: normal;\n    font-style: normal;\n}\n\n\@font-face {\n    font-family: \'Open Sans\';\n    src: url(\'../fonts/Open_Sans/OpenSans-ExtraBoldItalic.ttf\') format(\'truetype\');\n    font-weight: 800;\n    font-style: italic;\n}\n\n\@font-face {\n    font-family: \'Open Sans\';\n    src: url(\'../fonts/Open_Sans/OpenSans-Light.ttf\') format(\'truetype\');\n    font-weight: 300;\n    font-style: normal;\n}\n\n\@font-face {\n    font-family: \'Open Sans\';\n    src: url(\'../fonts/Open_Sans/OpenSans-SemiBold.ttf\') format(\'truetype\');\n    font-weight: 600;\n    font-style: normal;\n}\n\n\@font-face {\n    font-family: \'Open Sans\';\n    src: url(\'../fonts/Open_Sans/OpenSans-SemiBoldItalic.ttf\') format(\'truetype\');\n    font-weight: 600;\n    font-style: italic;\n}\n\n\@font-face {\n    font-family: \'Open Sans\';\n    src: url(\'../fonts/Open_Sans/OpenSans-BoldItalic.ttf\') format(\'truetype\');\n    font-weight: bold;\n    font-style: italic;\n}\n\n\@font-face {\n    font-family: \'Open Sans\';\n    src: url(\'../fonts/Open_Sans/OpenSans-Bold.ttf\') format(\'truetype\');\n    font-weight: bold;\n    font-style: normal;\n}\n\n\@font-face {\n    font-family: \'Open Sans\';\n    src: url(\'../fonts/Open_Sans/OpenSans-LightItalic.ttf\') format(\'truetype\');\n    font-weight: 300;\n    font-style: italic;\n}\n\n\@font-face {\n    font-family: \'Open Sans\';\n    src: url(\'../fonts/Open_Sans/OpenSans-Italic.ttf\') format(\'truetype\');\n    font-weight: normal;\n    font-style: italic;\n}\n\n\n.body {\n    height: 100%;\n    width: 100%;\n}\n\n.page-content {\n    width: 100%;\n    margin: 0 auto;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -ms-flex-direction: column;\n    flex-direction: column;\n}\n\n.wizard-content {\n    width: 790px;\n    border-radius: 10px;\n    font-family: \'Open Sans\', sans-serif;\n    position: relative;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);\n    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);\n}\n\n.wizard-content .wizard-form {\n    width: 100%;\n}\n\n.form-register .vertical {\n    display: block;\n    width: 100%;\n    overflow: hidden;\n    border-radius: 10px;\n}\n\n.form-register .content {\n    float: right;\n    width: 530px;\n    min-height: 400px;\n}\n\n.form-register .content h2 {\n    display: none;\n}\n\n.form-register .content .inner {\n    margin: 35px 40px 25px;\n    -webkit-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1);\n    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1);\n    border-radius: 5px;\n    padding: 0 30px 25px;\n    background-color: #fff;\n    height: 100%;\n}\n\n.form-register .content .wizard-header {\n    padding: 9px 30px 11px;\n    background: #33a7d7;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    margin: 0 -30px 24px;\n}\n\n.form-register .content .wizard-header h3 {\n    font-size: 22px;\n    color: #fff;\n    margin: 0;\n}\n\n.inner .form-row {\n    display: -ms-flexbox;\n    display: flex;\n    margin: 0 -10px;\n    position: relative;\n}\n\n.inner .form-row .form-holder {\n    width: 50%;\n    padding: 0 10px;\n    margin-bottom: 19px;\n    position: relative;\n}\n\n.inner .form-row .form-holder.form-holder-1 {\n    width: 65.3%;\n}\n\n.inner .form-row .form-holder.form-holder-2 {\n    width: 100%;\n    position: relative;\n}\n\n.inner .form-row .form-holder label {\n    color: #666;\n    font-size: 16px;\n    font-weight: 400;\n    display: block;\n    padding-bottom: 8px;\n}\n\n.inner .form-row .form-holder input,\n.inner .form-row .form-holder select {\n    width: 100%;\n    padding: 12px 20px;\n    border: 1px solid #e5e5e5;\n    -webkit-appearance: unset;\n    -moz-appearance: unset;\n    appearance: unset;\n    font-family: \'Open Sans\', sans-serif;\n    font-weight: 600;\n    font-size: 16px;\n    color: #333;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    border-radius: 3px;\n}\n\ninput::-webkit-input-placeholder {\n    color: #999;\n    font-size: 15px;\n    font-weight: 400;\n}\n\ninput::-moz-placeholder {\n    color: #999;\n    font-size: 15px;\n    font-weight: 400;\n}\n\ninput:-ms-input-placeholder {\n    color: #999;\n    font-size: 15px;\n    font-weight: 400;\n}\n\ninput::-ms-input-placeholder {\n    color: #999;\n    font-size: 15px;\n    font-weight: 400;\n}\n\ninput::placeholder {\n    color: #999;\n    font-size: 15px;\n    font-weight: 400;\n}\n\ninput:-ms-input-placeholder {\n    /* Internet Explorer 10-11 */\n    color: #999;\n    font-size: 15px;\n    font-weight: 400;\n}\n\ninput::-ms-input-placeholder {\n    /* Microsoft Edge */\n    color: #999;\n    font-size: 15px;\n    font-weight: 400;\n}\n\n.inner .form-row .form-holder .content-inner {\n    font-weight: 400;\n    color: #666;\n    font-size: 14px;\n}\n\n.inner .form-row .form-holder .content-inner p {\n    margin: 0;\n}\n\n.inner .form-row .form-holder .form-checkbox {\n    position: relative;\n    padding-top: 55px;\n}\n\n.inner .form-row .form-holder .form-checkbox p {\n    margin-left: 27px;\n    color: #333;\n    font-size: 14px;\n    font-weight: 600;\n}\n\n.inner .form-row .form-holder .form-checkbox input {\n    position: absolute;\n    opacity: 0;\n}\n\n.inner .form-row .form-holder .form-checkbox .checkmark {\n    position: absolute;\n    bottom: 8%;\n    left: 0;\n    height: 18px;\n    width: 18px;\n    border: 1px solid #e5e5e5;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n.inner .form-row .form-holder .form-checkbox .checkmark::after {\n    content: \"\";\n    position: absolute;\n    left: 6px;\n    top: 2px;\n    width: 3px;\n    height: 8px;\n    border: 1px solid #33a7d7;\n    border-width: 0 2px 2px 0;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n    display: none;\n}\n\n.inner .form-row .form-holder .form-checkbox input:checked~.checkmark::after {\n    display: block;\n}\n\n.actions {\n    float: right;\n    width: 530px;\n}\n\n.actions ul {\n    list-style: none;\n    padding: 0 40px;\n    margin-bottom: 40px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n}\n\n.actions button {\n    border: none;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    height: 42px;\n    width: 120px;\n    border-radius: 3px;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -ms-flex-align: center;\n    align-items: center;\n    background: #364cd2;\n    cursor: pointer;\n    font-size: 16px;\n    font-weight: 400;\n    color: #fff;\n    text-decoration: none;\n    padding: 13px 19px;\n}\n\n.actions button:hover {\n    background: #28379e;\n}\n\n\n/* Responsive */\n\n\@media screen and (max-width: 991px) {\n    .page-content .wizard-heading {\n        margin-left: 0;\n        width: 90%;\n    }\n    .wizard-content {\n        width: 90%;\n    }\n    .form-register .content,\n    .actions {\n        float: none;\n        width: 100%;\n    }\n}\n\n\@media screen and (max-width: 575px) {\n    .inner .form-row {\n        flex-direction: column;\n        -o-flex-direction: column;\n        -ms-flex-direction: column;\n        -moz-flex-direction: column;\n        -webkit-flex-direction: column;\n        margin: 0;\n    }\n    .inner .form-row .form-holder {\n        width: 100%;\n    }\n    .inner .form-row .form-holder {\n        padding: 0;\n    }\n    .form-register .steps {\n        width: 90%;\n        float: none;\n    }\n}"; }
};

export { PskWizard as psk_wizard };

import { r as registerInstance, h } from './core-1b7fc012.js';

const PskStepperRenderer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    computeStepDesign(stepIndex, activeStepIndex, lastStepIndex) {
        let stepClass = "";
        if (stepIndex === 0) {
            stepClass += "first ";
        }
        else if (stepIndex === lastStepIndex) {
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
        return (h("div", { class: "steps clearfix" }, h("ul", { role: "tablist" }, this.wizardSteps.map((step) => (h("li", { role: "tab", class: this.computeStepDesign(step.stepIndex, this.activeStep.stepIndex, this.wizardSteps.length - 1) }, h("div", { class: "button", onClick: (ev) => {
                ev.preventDefault();
                ev.stopImmediatePropagation();
                this.handleStepChange(step.stepIndex);
            } }, h("span", { class: "current-info audible" }), h("div", { class: "title" }, h("p", { class: "step-icon" }, h("span", null, step.stepIndex + 1)), h("div", { class: "step-text" }, h("span", { class: "step-inner" }, step.stepName))))))))));
    }
    static get style() { return ".steps {\n    float: left;\n    width: 260px;\n}\n\n.steps ul {\n    list-style: none;\n    padding-left: 0;\n    margin: 0;\n}\n\n.steps li {\n    background: #b2b2b2;\n}\n\n.steps li:first-child,\n.steps li.current:first-child {\n    margin-top: 35px;\n}\n\n.steps li,\n.steps li.current {\n    position: relative;\n    margin: 0 50px 15px 40px;\n}\n\n.steps li.current {\n    background: #33a7d7;\n}\n\n.steps li.done {\n    background: #269b30;\n}\n\n.steps li .current-info {\n    display: none;\n}\n\n.steps li .button {\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.steps li .button .title {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    position: relative;\n}\n\n.steps li .button .title::after {\n    content: \"\";\n    position: absolute;\n    left: 100%;\n    top: 0;\n    border-top: 25px solid transparent;\n    border-bottom: 30px solid transparent;\n    border-left: 45px solid #b2b2b2;\n}\n\n.steps li.current .title::after {\n    border-left: 45px solid #33a7d7;\n}\n\n.steps li.done .title::after {\n    border-left: 45px solid #269b30;\n}\n\n.steps li .button .title .step-icon {\n    color: #fff;\n    font-size: 25px;\n    margin: 0;\n    padding: 13px 17px;\n    position: relative;\n}\n\n.steps li .button .title .step-icon::before {\n    position: absolute;\n    height: 60px;\n    width: 1px;\n    left: 100%;\n    top: 0;\n    content: \"\";\n    background: rgba(255, 255, 255, 0.3);\n}\n\n.steps li .button .step-text {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    margin-left: 10px;\n    padding-left: 5px;\n}\n\n.steps li .button .step-text span {\n    display: block;\n}\n\n.steps li .button .step-text .step-inner {\n    font-size: 16px;\n    color: #fff;\n}\n\n\n/* Responsive */\n\n\@media screen and (max-width: 991px) {\n    .steps {\n        width: 95%;\n        float: none;\n    }\n}\n\n\@media screen and (max-width: 575px) {\n    .steps {\n        width: 90%;\n        float: none;\n    }\n}"; }
};

export { PskStepperRenderer as psk_stepper_renderer };

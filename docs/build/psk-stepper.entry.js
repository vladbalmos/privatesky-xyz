import { r as registerInstance, h } from './core-1b7fc012.js';

const PskStepper = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.componentRender = "psk-stepper-renderer";
    }
    render() {
        const StepperComponentRenderer = this.componentRender;
        return h(StepperComponentRenderer, { wizardSteps: this.wizardSteps, activeStep: this.activeStep, handleStepChange: this.handleStepChange });
    }
};

export { PskStepper as psk_stepper };

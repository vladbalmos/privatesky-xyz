import { Component, h } from "@stencil/core";

@Component({
    tag: 'wizard-usage',
    styleUrl: '../general-css/general-css.css',
    shadow: true,
})
export class Wizard {
    render() {
        return (
            <div class="card">
                <h5 class="card-header">psk-wizard</h5>
                <div class="card-body">
                    <h5>HTML Tag:</h5>
                    <pre class="text-center">
                        <code class="language-html" data-lang="html">
                            <span class="nt">&lt;psk-wizard /&gt;</span>
                        </code>
                    </pre>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h5>Description</h5>
                        </div>
                        <div class="card-body">
                            <p>Private Sky Wizard component.</p>
                            <p>This component will be able to display a list of steps for a certain behavior needed in the application.</p>
                            <p>The main purpose for this component is to have a user-form presented by a stepper, so custom validations for each step can be made in a controller.</p>
                            <p>The component that is displayed comes with two properties:</p>
                            <p>
                                <ul>
                                    <li><code>stepProperties</code> - this property is stored in <code><b>wizardSteps</b></code> property of the wizard and you should use it if you want some persistance inside the component, but you can also use other ways to do this when you change the step.</li>
                                    <li><code>onPropertiesChange</code> - if you use <code>stepProperties</code> to store the information, then you need to call this function in order to update the information inside <code><b>wizardSteps</b></code> property. In this way, a two-way binding is made.</li>
                                </ul>
                            </p>

                        </div>
                    </div>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h5>Supported properties</h5>
                        </div>
                        <div class="card-body">
                            <div class="card border-light">
                                <div class="card-header">
                                    <h5 class="card-title"><code>wizardSteps: <b>array of WizardStep types</b> <i>(WizardStep[])</i></code></h5>
                                </div>
                                <div class="card-body text-secondary">
                                    <p>This parameter holds the wizard configuration, the names of the steps, the components that will be displayed and if there is the case, other properties, like informations for the steps.</p>
                                    <p>These informations are filled in and handled by the controller of the component, not by the component itself.</p>
                                    <p>If this property is not set, the component will emit an event <code><i>(needWizardConfiguration)</i></code> in order to fetch the configuration of the wizard.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h5>Events triggered</h5>
                        </div>
                        <div class="card-body">
                            <div class="card border-light">
                                <div class="card-header">
                                    <h5 class="card-title"><code>changeStep</code></h5>
                                </div>
                                <div class="card-body text-secondary">
                                    <p>This event is triggered when the buttons <code>Next</code>, <code>Previous</code> and the step names from the left side of the component are clicked.</p>
                                    <p>This event comes with the following parameters:</p>
                                    <p>
                                        <ul>
                                            <li><code>stepIndexToDisplay</code> - the number of the step to be displayed</li>
                                            <li><code>wizardSteps</code> - the list of the steps from the wizard</li>
                                            <li><code>activeStep</code> - the step that will be displayed</li>
                                            <li><code>callback</code> - a callback function that is called from the controller when the validation is done</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            
                            <div class="card mt-4 border-light">
                                <div class="card-header">
                                    <h5 class="card-title"><code>finishWizard</code></h5>
                                </div>
                                <div class="card-body text-secondary">
                                    <p>This event is triggered when the buttons <code>Finish</code> is clicked.</p>
                                    <p>This event comes with the following parameters:</p>
                                    <p>
                                        <ul>
                                            <li><code>wizardSteps</code> - the list of the steps from the wizard. Maybe the information inside the wizard will be stored somewhere.</li>
                                            <li><code>callback</code> - a callback function that is called from the controller when the validation is done</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            
                            <div class="card mt-4 border-light">
                                <div class="card-header">
                                    <h5 class="card-title"><code>needWizardConfiguration</code></h5>
                                </div>
                                <div class="card-body text-secondary">
                                    <p>This event is triggered when the component is loaded and if no configuration is given for the wizard.</p>
                                    <p>In this case, the controller is responsible to send the configuration to the wizard.</p>
                                    <p>This event comes with a single parameter, a <code>callback</code> function the sends the configuration to the component.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h5>HTML Children</h5>
                        </div>
                        <div class="card-body">
                            <p>This component has no HTML children.</p>
                        </div>
                    </div>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h5>Usage Example</h5>
                        </div>
                        <div class="card-body">
                            <p>The following example is a simple wizard which will collect the information needed to create a Cloud Safe Box.</p>
                            <p>The navigation between steps is given by the controller.</p>
                            <psk-wizard />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
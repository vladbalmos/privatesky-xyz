import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: 'save-recovery-phrase'
})
export class RecoveryPhrase {
    @Prop() onPropertiesChange: Function;
    @Prop({ reflect: true, mutable: true }) stepProperties: any;

    componentWillLoad() {
        if (!this.stepProperties) {
            this.stepProperties = {
                saveRecoveryPhrase: false,
                stepPhase: "save-recovery-phrase"
            };

            this.onPropertiesChange(this.stepProperties);
        }
    }

    handleInputChange(evt): void {
        this.stepProperties.saveRecoveryPhrase = evt.target.checked;
        this.onPropertiesChange(this.stepProperties);
    }

    render() {
        return (
            <div class="content clearfix">
                <section role="tabpanel" class="body">
                    <div class="inner">
                        <div class="wizard-header">
                            <h3 class="heading">Save recovery phrase</h3>
                        </div>
                        <div class="form-row">
                            <div class="form-holder form-holder-2">
                                <div class="content-inner">
                                    <p>Massa placerat duis ultricies lacus sed turpis tin Elementum sagittis vitae et leo duis ut diam quam nulla. Viverra mauris in aliquam sem fringilla ut. Id leo in vitae turpis massa sed elementum tempus. Aliquet enim tortor at auctor urna nunc id cursus. Nulla aliquet enim tortor at auctor .Consquat nisl vel pretium lectus quam id leo.</p>
                                    <div class="form-checkbox">
                                        <label class="container">
                                            <p>I want to store recovery phrase untill I opt out.</p>
                                            <input type="checkbox" name="checkbox"
                                                checked={this.stepProperties.saveRecoveryPhrase}
                                                onChange={this.handleInputChange.bind(this)} />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
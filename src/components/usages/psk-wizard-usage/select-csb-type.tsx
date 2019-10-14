import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: 'select-csb-type'
})
export class CsbType {
    @Prop() onPropertiesChange: Function;
    @Prop({ reflect: true, mutable: true }) stepProperties: any;

    componentWillLoad() {
        if (!this.stepProperties) {
            this.stepProperties = {
                csbType: "",
                stepPhase: "csb-type"
            };

            this.onPropertiesChange(this.stepProperties);
        }
    }

    handleInputChange(evt): void {
        this.stepProperties.csbType = evt.target.value;
        this.onPropertiesChange(this.stepProperties);
    }

    render() {
        return (
            <div class="content clearfix">
                <section role="tabpanel" class="body">
                    <div class="inner">
                        <div class="wizard-header">
                            <h3 class="heading">CSB Type</h3>
                        </div>
                        <div class="form-row">
                            <div class="form-holder form-holder-2">
                                <label htmlFor="csb-type">Enter the type of your CSB</label>
                                <input
                                    type="text"
                                    name="csb-type"
                                    id="csb-type"
                                    class="form-control"
                                    placeholder="E.g. Password, Financial, Health"
                                    value={this.stepProperties.csbType}
                                    onKeyUp={this.handleInputChange.bind(this)}
                                    required />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
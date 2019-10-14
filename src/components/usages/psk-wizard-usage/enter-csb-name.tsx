import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: 'enter-csb-name'
})
export class CsbName {
    @Prop() onPropertiesChange: Function;
    @Prop({ reflect: true, mutable: true }) stepProperties: any;

    componentWillLoad() {
        if (!this.stepProperties) {
            this.stepProperties = {
                csbName: "",
                stepPhase: "csb-name"
            };

            this.onPropertiesChange(this.stepProperties);
        }
    }

    handleInputChange(evt): void {
        this.stepProperties.csbName = evt.target.value;
        this.onPropertiesChange(this.stepProperties);
    }

    render() {
        return (
            <div class="content clearfix">
                <section role="tabpanel" class="body">
                    <div class="inner">
                        <div class="wizard-header">
                            <h3 class="heading">Enter your Cloud safe box name</h3>
                        </div>
                        <div class="form-row">
                            <div class="form-holder form-holder-2">
                                <label htmlFor="csb-name">Enter CSB Name</label>
                                <input
                                    type="text"
                                    name="csb-name"
                                    id="csb-name"
                                    class="form-control"
                                    placeholder="Enter a name for your cloud safe box"
                                    value={this.stepProperties.csbName}
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
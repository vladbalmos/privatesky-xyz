import { Component, h } from "@stencil/core";

@Component({
    tag: 'finish-page'
})
export class Finish {
    render() {
        return (
            <div class="content clearfix">
                <section role="tabpanel" class="body">
                    <div class="inner">
                        <div class="wizard-header">
                            <h3 class="heading">Finish</h3>
                        </div>
                        <div class="form-row">
                            <div class="form-holder form-holder-2">
                                <div class="content-inner">
                                    <h3>Congratulations!</h3>
                                    <p>You have created your Cloud safe box!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
import { Component, h, Listen } from '@stencil/core'

@Component({
    tag: 'feedback-list-usage',
    styleUrl: '../general-css/general-css.css',
    shadow: true,
})
export class FeedbackListUsage {
    protected openFeedbackRequest = null;
    @Listen('openFeedback')
    openFeedbackexample(evt: CustomEvent) {
        this.openFeedbackRequest = evt.detail;
    }
    @Listen('showFeedback')
    showFeedbackexample(evt: CustomEvent) {
        this.openFeedbackRequest(evt.detail)
    }
    render() {
        return (
            <div class="card">
                <h5 class="card-header">psk-list-feedbacks</h5>
                <div class='card-body'>
                    <div class="card">
                        <div class="card-body">
                            <hr />
                            <h5>HTML Tag:</h5>
                            <pre class="text-center">
                                <code class="language-html" data-lang="html">
                                    <span class="nt">&lt;psk-list-feedbacks/&gt;</span>
                                </code>
                            </pre>
                            <div class="card">
                                <h5 class="card-header">Description</h5>
                                <div class="card-body">
                                    <p>This component uses a pool of <code><span class="nt">&lt;psk-list-feedbacks/&gt;</span></code> in order to render the feedback accordingly</p>
                                    <p>It is intended to be used as a notification pool in order to maintain the feedbacks logic and order</p>
                                    <p>When used with the pool <code><span class="nt">&lt;psk-list-feedbacks/&gt;</span></code> these two don't need to be send as options,but in the singularity case we need to send them(Eg: 20 seconds ago)</p>
                                    <p>In order to initialize the pool you send an event with the <code>message</code> or even an array of messages.</p>
                                    <p>When the popup need to be closed,an (<code>closeFeedback</code>) is triggered and the Application Controller should listen to this, so the notification can be closed within the controller</p>
                                </div>
                            </div>
                            <div class="card">
                                <h5 class="card-header">Properties</h5>
                                <div class="card-body">
                                    <div class="card">
                                        <h5 class="class-header"><code>messagesToDisplay : number (optional)</code></h5>
                                        <div class="body">
                                            <p>This property is the only one that this component needs in order to know how many notifications need to be render and how many need to be memory saved </p>
                                            <p>The default value for this property is 3</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <h5 class="class-header">Example</h5>
                                <div class="card-body">
                                    By pressing the <strong>Show One Alert!</strong> button an Exemple notification will pop, and if you press the <strong>Show Three Alerts!</strong> button three notifications will pop up.
                                    <psk-list-feedbacks />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
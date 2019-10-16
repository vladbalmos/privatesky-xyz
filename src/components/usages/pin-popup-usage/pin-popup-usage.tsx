import { Component, h, State } from "@stencil/core";

@Component({
    tag: 'pin-popup-usage',
    styleUrl: '../general-css/general-css.css',
    shadow: true,
})
export class PinPopupUsage {
    @State() openPin: boolean = false;

    render() {
        return (
            <div class="card">
                <h5 class="card-header">psk-pin-popup</h5>
                <div class="card-body">
                    <h5>HTML Tag:</h5>
                    <pre class="text-center">
                        <code class="language-html" data-lang="html">
                            <span class="nt">&lt;psk-pin-popup /&gt;</span>
                        </code>
                    </pre>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h5>Description</h5>
                        </div>
                        <div class="card-body">
                            <p>This component is intended to be used when a PIN is required from the user.</p>
                            <p>When the popup needs to be closed, an event (<code>closeModal</code>) is triggered and the Application Controller should listen to this, so a custom logic can be provided in order to get a result.</p>
                            <p>The controller will call the function provided by the event emitter <code>(callback)</code> and it is able to send error messages in case the PIN entered by the user is not the expected one.</p>
                            <p>If the popup can be closed after the user submites the PIN, the parameter from the <code>callback</code> should be <code>null</code>.</p>
                        </div>
                    </div>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h5>Supported properties</h5>
                        </div>
                        <div class="card-body">
                            <div class="card border-light">
                                <div class="card-header">
                                    <h5 class="card-title"><code>opened: <b>boolean</b> <i>(optional)</i></code></h5>
                                </div>
                                <div class="card-body text-secondary">
                                    <p>This is the property that gives the state of the popup if it is opened or closed. <i>The posible values are <code>true</code> or <code>false</code>.</i></p>
                                    <p><b>Note: <i>If this property is not given, <code>false</code> is assumed in order to avoid the UI blocking.</i></b></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h5>Event triggered:</h5>
                        </div>
                        <div class="card-body">
                            <div class="card border-light">
                                <div class="card-header">
                                    <h5 class="card-title"><code>sendPin</code></h5>
                                </div>
                                <div class="card-body text-secondary">
                                    <p>This event is triggered when the button "Send PIN" is clicked. This event comes with two parameters:</p>
                                    <p>
                                        <ul>
                                            <li><code>pin</code> - the PIN written by the user</li>
                                            <li><code>callback</code> - a callback function that is called after the pin is checked. this <code>callback</code> has one parameter <code><i>(err)</i></code> and should be sent only if the PIN is invalid.</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h5>HTML Children:</h5>
                        </div>
                        <div class="card-body">
                            <p>This component has no HTML Children</p>
                        </div>
                    </div>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h5 class="card-title">Usage Example</h5>
                        </div>
                        <div class="card-body">
                            <p>Click the bellow button to open the PIN Popup</p>
                            <p>Write some text and then click on "Send PIN" to see the text below in the page.</p>
                            <p>The written PIN is displayed in console (only for testing purposes).</p>
                            <p>Each implementation and usage of this component should define its own logic of how to use the PIN, inside the controller.</p>
                            <button class="btn btn-primary" onClick={() => { this.openPin = true; }}>Open PIN Popup</button>
                            <psk-pin-popup opened={this.openPin} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
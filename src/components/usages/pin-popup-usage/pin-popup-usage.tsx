import { Component, h, Listen, State } from "@stencil/core";

@Component({
    tag: 'pin-popup-usage',
    styleUrl: '../general-css/general-css.css',
    shadow: true,
})
export class PinPopupUsage {
    @State() pin: string;

    @Listen('sendPin')
    listenPinExample(evt: CustomEvent) {
        evt.stopImmediatePropagation();
        const { pin } = evt.detail;
        this.pin = pin;
    }

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
                            <p>When the popup need to be closed, an event (<code>closeModal</code>) is triggered and the Application Controller should listen to this, so the popup can be closed withing the controller.</p>
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
                            <p><i><b>
                                The pip popup is above displayed. Once closed, you need to refresh the page.
                                <br />
                                Write some text and then click on "Send PIN" to see the text below in the page.
                            </b></i></p>
                            <psk-pin-popup opened={true} />
                            <p>The written PIN is: {this.pin}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
import { Component, h } from "@stencil/core";

@Component({
    tag: 'modal-usage',
    styleUrl: '../general-css/general-css.css',
    shadow: true,
})
export class ModalUsage {
    render() {
        return (
            <div class="card">
                <h5 class="card-header">psk-modal</h5>
                <div class="card-body">
                    <h5>HTML Tag:</h5>
                    <pre class="text-center">
                        <code class="language-html" data-lang="html">
                            <span class="nt">&lt;psk-modal /&gt;</span>
                        </code>
                    </pre>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h5>Description</h5>
                        </div>
                        <div class="card-body">
                            <p>This component is intended to be used when a modal is needed in the application.</p>
                            <p>This component should be instantiated only once per application, so it can be easily controlled by an Application Controller.</p>
                            <p>By default, the modal will be closed and it will have no content.</p>
                            <p>When the modal need to be closed, an event (<code>closeModal</code>) is triggered and the Application Controller should listen to this, so the modal can be closed withing the controller.</p>
                        </div>
                    </div>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h5>Supported properties</h5>
                        </div>
                        <div class="card-body">
                            <p><code>opened</code> - is the property that gives the state of the modal if it is opened or closed. The posible values are <code>true</code> or <code>false</code></p>
                        </div>
                    </div>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h5>HTML Children:</h5>
                        </div>
                        <div class="card-body"><p>
                            <p><code>Modal title</code> - is the title that will be displayed on the modal.</p>
                            <p>This is a slot inside the modal component (<code>title</code>) and the title will be displayed only if the slot is specified.</p>
                            <div class="card text-white bg-dark">
                                <div class="card-header">
                                    <span>Example:</span>
                                </div>
                                <div class="card-body">
                                    <code class="language-html" data-lang="html">
                                        <span class="nt">&lt;psk-modal opened="true"&gt;</span>
                                        <br />
                                        <span class="nt">&lt;h5 slot=<b><i>"title"</i></b>&gt;Modal Title&lt;/h5&gt;</span>
                                        <br />
                                        <span class="nt">&lt;/psk-modal&gt;</span>
                                    </code>
                                </div>
                            </div>
                        </p>
                            <p>
                                <p><code>Modal Content</code> - This is the actual content of the modal. There is a blank slot in the component, so any HTML content that will be passed without a slot name will be displayed here.</p>
                                <div class="card text-white bg-dark">
                                    <div class="card-header">
                                        <span>Example:</span>
                                    </div>
                                    <div class="card-body">
                                        <code class="language-html" data-lang="html">
                                            <span class="nt">&lt;psk-modal opened="true"&gt;</span>
                                            <br />
                                            <span class="nt">&lt;h5 slot="title"&gt;Modal Title&lt;/h5&gt;</span>
                                            <br />
                                            <br />
                                            <b>
                                                <i>
                                                    <span class="nt">&lt;p&gt;This is the content of my modal&lt;/p&gt;</span>
                                                    <br />
                                                    <span class="nt">&lt;p&gt;This is another line&lt;/p&gt;</span>
                                                    <br />
                                                    <span class="nt">&lt;p&gt;Everything will be displayed in the modal content section.&lt;/p&gt;</span>
                                                    <br />
                                                </i>
                                            </b>

                                            <span class="nt">&lt;/psk-modal&gt;</span>
                                        </code>
                                    </div>
                                </div>
                            </p>
                            <p>
                                <p><code>Modal Action Container</code> - Is the part of the modal that will display what actions can be performed when the modal is opened.</p>
                                <p>This is a slot inside the modal component (<code>confirm_action</code>) and the actions will be displayed only if the slot is specified.</p>
                                <div class="card text-white bg-dark">
                                    <div class="card-header">
                                        <span>Example:</span>
                                    </div>
                                    <div class="card-body">
                                        <code class="language-html" data-lang="html">
                                            <span class="nt">&lt;psk-modal opened="true"&gt;</span>
                                            <br />
                                            <span class="nt">&lt;h5 slot="title"&gt;Modal Title&lt;/h5&gt;</span>
                                            <br />
                                            <br />
                                            <span class="nt">&lt;p&gt;This is the content of my modal&lt;/p&gt;</span>
                                            <br />
                                            <span class="nt">&lt;p&gt;This is another line&lt;/p&gt;</span>
                                            <br />
                                            <span class="nt">&lt;p&gt;Everything will be displayed in the modal content section.&lt;/p&gt;</span>
                                            <br />
                                            <br />
                                            <span class="nt">&lt;button slot=<b><i>"confirm_action"</i></b>&gt;Modal Action&lt;/button&gt;</span>
                                            <br />
                                            <span class="nt">&lt;/psk-modal&gt;</span>
                                        </code>
                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
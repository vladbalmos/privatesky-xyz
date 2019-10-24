import { Component, h, Event, EventEmitter, State } from '@stencil/core'

@Component({
    tag: 'feedback-list-usage',
    styleUrls: ['../general-css/general-css.css', './feedback-list-usage.css'],
    shadow: true,
})

export class FeedbackListUsage {
    @State() message: string = ''
    @State() name: string = ''
    @State() exampleOne: boolean = false
    @State() exampleTwo: boolean = false
    @Event({
        eventName: 'showFeedback',
        composed: true,
        cancelable: true,
        bubbles: true,
    }) showFeedbackHandler: EventEmitter
    messageInputHandler(event) {
        this.message = event.target.value;
    }
    nameInputHandler(event) {
        this.name = event.target.value;
    }
    showFirstExampleHandler() {
        this.showFeedbackHandler.emit({ message: 'Example', name: 'Example-Name', type: 'toast' })
    }
    showSecondExampleHandler() {
        this.showFeedbackHandler.emit({ message: 'Example',type: 'alert-info' })
    }
    render() {
        return [
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
                                    <p>This componentent is intended to be used as a notification pool in order to keep the user experince more to his liking.</p>
                                    <p>In order for everything to work smoothly this component uses a pool of <code><span class="nt">&lt;psk-ui-toast/&gt;</span></code> and <code><span class="nt">&lt;psk-ui-alert/&gt;</span></code>.</p>
                                    <p>For beggining you could send a <code>message</code> or an array of <code>message</code> which are separated in distinctive notifications(the <code>message</code> is not mandatory) and a <code>name</code> for each message(again,this is not mandatory).</p>
                                    <h5 class='card-header'>Example:</h5>
                                    <input type="text"
                                        name="alertMessage"
                                        placeholder="Enter message here..."
                                        value={this.message}
                                        onChange={(event) => this.messageInputHandler(event)} />
                                    <input type="text"
                                        name="alertMessage"
                                        placeholder="Enter the source of your feedback here..."
                                        value={this.name}
                                        onChange={(event) => this.nameInputHandler(event)} />
                                    <button onClick={() => this.showFeedbackHandler.emit({ message: this.message, name: this.name, type: 'toast' })}>Show notification!</button>
                                    <psk-list-feedbacks
                                        messages-to-display={5}
                                        time-alive={5000}
                                        toast-renderer="my-toast-renderer"
                                        alert-renderer="my-alert-renderer"
                                        styleCustomisation={{
                                            toast: {
                                                header: {
                                                    style:
                                                    {
                                                        color: 'red',
                                                        backgroundColor: 'purple'
                                                    },
                                                    title: 'HAHA YOU GOT JOKED'
                                                },
                                                body: {
                                                    style: {
                                                        color: 'purple',
                                                        backgroundColor: 'red'
                                                    },
                                                    content: 'I DO NOT THINK SO!'
                                                },
                                                feedback: {
                                                    style: {
                                                        textAlign: 'center'
                                                    }
                                                },
                                            },
                                            alert: {
                                                style: {
                                                    color: 'red',
                                                    backgroundColor: 'purple'
                                                },
                                                content: 'NICE TRY!'
                                            }
                                        }} />

                                    <br /><p>The alerts are stackable and they will only show a specific number of them(will talk about that in the properties part).</p>
                                    <p>When the <strong>X</strong> button is pressed(when a <code>Toast</code> pool is used) an event(<code>closeFeedback</code>) is triggered and the Application Controller should listen to this, so the alert can be closed within the controller.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>,
            <div class="card">
                <h5 class='card-header'>Child Components</h5>
                <div class='card-body'>
                    <h5>HTML Tag:</h5>
                    <pre class="text-center">
                        <code class="language-html" data-lang="html">
                            <span class="nt">&lt;psk-ui-alert/&gt;</span>
                        </code>
                    </pre>
                    <div class="card">
                        <h5 class="card-header">Description</h5>
                        <div class="card-body">
                            <p>Technically this is the alert and it is a bootstrap alert.</p>
                            <p>You can use all the alerts in the bootstrap documentation(for more info click <a href='https://getbootstrap.com/docs/4.0/components/alerts/'><code>here</code></a>).</p>
                            <p>You only need the type of the alert (Example: <code>alert-info</code>) and optionally a message to be rendered.</p>
                            <h5 class='card-header'>Example</h5>
                            <div class="highlight">
                                <pre>
                                    <code>
                                        this.showFeedbackHandler.emit(&#123; message: 'Example', type: 'alert-info' &#125;)
                                    </code>
                                </pre>
                                <button onClick={this.showSecondExampleHandler.bind(this)}>Click me to see the example.</button>
                            </div><br />
                            <p>This component has an auto-close feature which can be seen even in our example, but it can also be closed by clicking on it.</p>
                        </div>
                    </div>
                </div>
                <div class='card-body'>
                    <h5>HTML Tag:</h5>
                    <pre class="text-center">
                        <code class="language-html" data-lang="html">
                            <span class="nt">&lt;psk-ui-toast/&gt;</span>
                        </code>
                    </pre>
                    <div class="card">
                        <h5 class="card-header">Description</h5>
                        <div class="card-body">
                            <p>Technically this is the notification and it is a bootstrap toast.</p>
                            <p>For this type of feedback to work how it should work it needs : <code>message</code>, <code>name</code> and the <code>type</code> to be toast.</p>
                            <p></p>
                            <p></p>
                            <h5 class='card-header'>Example</h5>
                            <div class='highlight'>
                                <pre>
                                    <code >
                                        this.showFeedbackHandler.emit(&#123;message:'Example',name:'Example-Name',type: 'toast'&#125;)<br />
                                    </code>
                                </pre>
                                <button onClick={this.showFirstExampleHandler.bind(this)}>Click me to see the example</button>
                            </div><br />
                            <p>This component does not have an auto-close feature, but it can be closed by clicking on <strong>X</strong>.</p>
                        </div>
                    </div>
                </div>
            </div>,
            <div class='card'>
                <h5 class='card-header'>Pool properties</h5>
                <div class='card border-light'>
                    <div class='card-body'>
                        <div class="card-header">
                            <h5 class="card-title"><code>timeAlive: <b>number</b> <i>(optional)</i></code></h5>
                        </div>
                        <div class='card-body text-secondary'>
                            <p>This property is used in the closing procedure of the <code>&lt;psk-ui-alert/&gt;</code>.</p>
                            <p>It represents how much time(in seconds) this component should persist on the user interface.</p>
                            <p><b>Note: <i>If this property is not given, the value <b>5</b> will be assumed.</i></b></p>
                        </div>
                    </div>
                </div>
                <div class='card border-light'>
                    <div class='card-body'>
                        <div class="card-header">
                            <h5 class="card-title"><code>messagesToDisplay: <b>number</b> <i>(optional)</i></code></h5>
                        </div>
                        <div class='card-body text-secondary'>
                            <p>This property is used in the showing of the <code>&lt;psk-ui-toast/&gt;</code>.</p>
                            <p>It represents how many feedbacks this component should persist on the user interface.</p>
                            <p><b>Note: <i>If this property is not given, the value <b>3</b> will be assumed.</i></b></p>
                        </div>
                    </div>
                </div>
                <div class='card border-light'>
                    <div class='card-body'>
                        <div class="card-header">
                            <h5 class="card-title"><code>toast-renderer: <b>string</b> <i>(optional)</i></code></h5>
                        </div>
                        <div class='card-body text-secondary'>
                            <p>Another web component that can render your own toast notification</p>
                            <p>For the up exemples we used <code>my-toast-renderer</code> which have some basic modifications</p>
                        </div>
                    </div>
                </div>
                <div class='card border-light'>
                    <div class='card-body'>
                        <div class="card-header">
                            <h5 class="card-title"><code>alert-renderer: <b>string</b> <i>(optional)</i></code></h5>
                        </div>
                        <div class='card-body text-secondary'>
                            <p>Another web component that can render your own alert notification</p>
                            <p>For the up exemples we used <code>my-alert-renderer</code> which have some basic modifications</p>
                        </div>
                    </div>
                </div>
                <div class='card border-light'>
                    <div class='card-body'>
                        <div class="card-header">
                            <h5 class="card-title"><code>styleCustomisation: <b>Object</b> <i>(optional)</i></code></h5>
                        </div>
                        <div class='card-body text-secondary'>
                            <p>If you want to use this property is it a little bit stricter because it has it's on structure:</p>
                            <code>
                                toast: &#123;<br/>&nbsp;
                                    header: &#123;<br/>&nbsp;&nbsp;
                                        style: &#123;[key: string]: string;&#125;,<br/>&nbsp;&nbsp;
                                        title: string<br/>
                                        &nbsp;&nbsp;&#125;,<br/>&nbsp;
                                    body:&#123;<br/>&nbsp;&nbsp;
                                        style: &#123;[key: string]: string;&#125;,<br/>&nbsp;&nbsp;
                                        content: string<br/>
                                        &nbsp;&nbsp;&#125;,<br/>&nbsp;
                                    feedback: &#123;<br/>&nbsp;&nbsp;
                                        style: &#123;[key: string]: string;&#125;<br/>&nbsp;
                                    &#125;<br/>
                                    &#125;<br/>
                                alert:&#123;<br/>&nbsp;
                                    style:&#123;[key: string]: string; &#125;,<br/>&nbsp;
                                    content:string<br/>
                                    &#125;<br/>
                            </code><br/>
                            <p>Even if you do not use all the parameters there will not be a problem with the default renderers.</p>
                        </div>
                    </div>
                </div>
            </div>,
            <div class='card'>
                <h5 class='card-header'>Event parameters</h5>
                <div class='card border-light'>
                    <div class='card-body'>
                        <div class='card-header'>
                            <h5 class='card-title'><code>message: <b>string</b></code></h5>
                        </div>
                        <div class='card-body text-secondary'>
                            <p>This parameter is the text that will be rendered as the <b>content</b> of the feedback.</p>
                            <p>It is necessary in the alert/toast logic.</p>
                        </div>
                    </div>
                </div>
                <div class='card border-light'>
                    <div class='card-body'>
                        <div class='card-header'>
                            <h5 class='card-title'><code>name: <b>string</b></code></h5>
                        </div>
                        <div class='card-body text-secondary'>
                            <p>This parameter is the text that will be rendered as the <b>name</b> of the feedback.</p>
                            <p>It is necessary in the toast logic , but the alert <b>does not need it</b>  because the color of the alert indicates it's type.</p>
                        </div>
                    </div>
                </div>
                <div class='card border-light'>
                    <div class='card-body'>
                        <div class='card-header'>
                            <h5 class='card-title'><code>type: <b>string</b></code></h5>
                        </div>
                        <div class='card-body text-secondary'>
                            <p>This parameter is the type of notification that you want to render for the user.</p>
                            <p>There are two types of notifications that can be rendered: <b>Toast</b> and <b>Alert</b>.</p>
                            <p>For the <b>Toast</b> notification the type is simply <code>'Toast'</code>,but for the <b>Alert</b> things get a bit tricky, as you need to know the exact type from the bootstrap documentation.</p>
                        </div>
                    </div>
                </div>
            </div>
        ]
    }
}
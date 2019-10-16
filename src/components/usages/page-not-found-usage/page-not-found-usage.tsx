import { Component, h } from "@stencil/core";

@Component({
    tag: 'page-not-found-usage',
    styleUrl: '../general-css/general-css.css',
    shadow: true,
})
export class NotFoundUsage {
    render() {
        return (
            <div class="card">
                <h5 class="card-header">psk-page-not-found</h5>
                <div class="card-body">
                    <h5>HTML Tag:</h5>
                    <pre class="text-center">
                        <code class="language-html" data-lang="html">
                            <span class="nt">&lt;psk-page-not-found /&gt;</span>
                        </code>
                    </pre>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h5>Description</h5>
                        </div>
                        <div class="card-body">
                            <p>This component is intended to be used inside a router component, so when the user navigates to an unknown route, this component will be loaded.</p>
                            <p>This component should be instantiated everywhere in application where there is a possibility to navigate to a wrong or unknown route.</p>
                            <p>The component has the role to redirect the user to a valid route inside the application by using <code>basePath</code> or <code>urlDestination</code> properties.</p>
                            <p>If none of these two properties are given, then a third property is checked: <code>pageRenderer</code></p>
                            <p>The the order of the properties priority is the following:</p>
                            <p>
                                <ul>
                                    <li><code>basePath</code></li>
                                    <li><code>urlDestination</code> - if basePath is not given, this property will be used</li>
                                    <li><code>pageRenderer</code> - if urlDestination is not given, pageRenderer will be used</li>
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
                                    <h5 class="card-title"><code>basePath: <b>string</b> <i>(optional)</i></code></h5>
                                </div>
                                <div class="card-body text-secondary">
                                    <p>This property is the base path of the website. If this parameter is sent to the component, then when the user navigates to an unknown page, he will be redirected to the base path.</p>
                                    <p>It is not mandatory to be the root of the application, it can be the root of a section inside the website</p>
                                    <p><b>Note: <i>If this parameter is missing, <code>urlDestination</code> parameter is checked.</i></b></p>
                                </div>
                            </div>

                            <div class="card border-light mt-4">
                                <div class="card-header">
                                    <h5 class="card-title"><code>urlDestination: <b>string</b> <i>(optional)</i></code></h5>
                                </div>
                                <div class="card-body text-secondary">
                                    <p>This property gives a custom redirect URL destination in case the user navigates to an unknown page.</p>
                                    <p><b>Note: <i>If this parameter is missing, <code>pageRenderer</code> parameter is checked.</i></b></p>
                                </div>
                            </div>

                            <div class="card border-light mt-4">
                                <div class="card-header">
                                    <h5 class="card-title"><code>pageRenderer: <b>string</b> <i>(optional)</i></code></h5>
                                </div>
                                <div class="card-body text-secondary">
                                    <p>This property allows the component to display a custom <code>Page not found</code> content in case the user navigates to an unknown page.</p>
                                    <p><b>Note: <i>If this parameter is missing, <code>psk-page-not-found-renderer</code> is assumed.</i></b></p>
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
                            <code class="language-html" data-lang="html">
                                <span class="nt">&lt;psk-page-not-found basePath=&#123;<code>"/"</code>&#125; /&gt;</span>
                            </code>
                            <br />
                            <code class="language-html" data-lang="html">
                                <span class="nt">&lt;psk-page-not-found urlDestination=&#123;<code>"/path/to/destination"</code>&#125; /&gt;</span>
                            </code>
                            <br />
                            <code class="language-html" data-lang="html">
                                <span class="nt">&lt;psk-page-not-found pageRenderer=&#123;<code>"some-custom-renderer"</code>&#125; /&gt;</span>
                            </code>
                            <br />
                            <code class="language-html" data-lang="html">
                                <span class="nt">&lt;psk-page-not-found /&gt;</span>
                            </code>
                        </div>
                    </div>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h5>Usage Preview with the default <code>pageRenderer</code></h5>
                        </div>
                        <div class="card-body">
                            <psk-page-not-found />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
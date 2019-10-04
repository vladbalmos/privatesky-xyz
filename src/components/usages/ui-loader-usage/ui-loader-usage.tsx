import { Component, h } from "@stencil/core";

@Component({
    tag: 'ui-loader-usage',
    styleUrl: '../general-css/general-css.css',
    shadow: true,
})
export class LoaderUsage {
    render() {
        return (
            <div class="card">
                <h5 class="card-header">psk-ui-loader</h5>
                <div class="card-body">
                    <h5>HTML Tag:</h5>
                    <pre class="text-center">
                        <code class="language-html" data-lang="html">
                            <span class="nt">&lt;psk-ui-loader /&gt;</span>
                        </code>
                    </pre>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h5>Description</h5>
                        </div>
                        <div class="card-body">
                            <p>This component is intended to be used when an action is running in background <i>(e.g. an API call)</i> and we need to render the result of the action inside the page.</p>
                            <p>This component should be instantiated only once per application, so it can be easily controlled by an Application Controller.</p>
                            <p>By default, the loader will be hidden.</p>
                        </div>
                    </div>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h5>Supported properties</h5>
                        </div>
                        <div class="card-body">
                            <p><code>shouldBeRendered</code> - is the property that gives the state of the loader, if it is displayed or not. The posible values are <code>true</code> or <code>false</code></p>
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
                                <span class="nt">&lt;psk-ui-loader shouldBeRendered=&#123;<code>true</code>/<code>false</code>&#125; /&gt;</span>
                            </code>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
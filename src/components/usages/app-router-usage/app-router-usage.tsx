import { Component, h } from "@stencil/core";

@Component({
    tag: 'app-router-usage',
    styleUrl: '../general-css/general-css.css',
    shadow: true,
})
export class AppRouterUsage {
    render() {
        return (
            <div class="card">
                <h5 class="card-header">psk-app-router</h5>
                <div class="card-body">
                    <h5>HTML Tag:</h5>
                    <pre class="text-center">
                        <code class="language-html" data-lang="html">
                            <span class="nt">&lt;psk-app-router /&gt;</span>
                        </code>
                    </pre>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h5>Description</h5>
                        </div>
                        <div class="card-body">
                            <p>This component is in charge with the routing of the application using a simple <code><i>configuration JSON file</i></code>.</p>
                        </div>
                    </div>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h5>Supported properties</h5>
                        </div>
                        <div class="card-body">
                            <div class="card border-light">
                                <div class="card-header">
                                    <h5 class="card-title"><code>menuItems <code><i>(optional)</i></code>: <b>array of MenuItem types</b> <i>(MenuItem[])</i></code></h5>
                                </div>
                                <div class="card-body text-secondary">
                                    <p>
                                        This parameter holds the datasource for the creation of the application routes.
                                        If this property is not provided, the component will emit an event <code>(needMenuItems)</code> in order to fetch this information.
                                    </p>
                                    <p><i>Note: The same configuration file is used in generating the <a href="/psk-components/app-menu">App Menu</a> component</i></p>
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
                            <p>An example of using this component is inside this application. All the routing is made using </p>
                            <div class="card border-light">
                                <div class="card-header">
                                    <h5 class="card-title">Example of configuration file:</h5>
                                </div>
                                <div class="card-body text-secondary">
                                    <code>&#91;&#123;
                                        <br />"name": "Home",
                                    <br />"path": "/home",
                                    <br />"icon": "fa-home",
                                    <br />"type": "route",
                                    <br />"component": "app-home",
                                    <br />"exact": true
                                    <br />&#125;,</code>
                                    <code>&#123;<br />"name": "PSK Components",
                                    <br />"path": "/psk-components",
                                    <br />"icon": "fa-bars",
                                    <br />"type": "abstract",
                                    <br />"children": &#91;&#123;
                                    <br />&nbsp;&nbsp;"name": "App Menu",
                                    <br />&nbsp;&nbsp;"path": "/psk-components/app-menu",
                                    <br />&nbsp;&nbsp;"component": "app-menu-usage",
                                    <br />&nbsp;&nbsp;"icon": "fa-bars",
                                    <br />&nbsp;&nbsp;"type": "route",
                                    <br />&nbsp;&nbsp;"exact": true
                                    <br />&#125;&#93;
                                    <br />&#125;&#93;</code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
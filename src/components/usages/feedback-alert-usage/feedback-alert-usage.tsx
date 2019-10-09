import {Component, h} from "@stencil/core";

@Component({
  tag: 'feedback-alert-usage',
  styleUrl: '../general-css/general-css.css',
  shadow: true,
})
export class FeedbackAlertUsage {

  render() {
    return (

        <div class = "card">
            <h5 class="card-header">psk-feedback-alert</h5>
            <div class ="card-body">

            <div class="card">
            <div class="card-body">
              <hr/>
              <h5>HTML Tag:</h5>
              <pre class="text-center">
              <code class="language-html" data-lang="html">
                <span class="nt">&lt;psk-ui-feedback/&gt;</span>
              </code>
            </pre>
            <h5>Descripton</h5>
              <p>This component is intended to be used to show a response from the server to the user interface. By default, if no datasource is
                provided (<code>feedbackInfo</code>), the component will emit an (<code>succes-alert</code>) in order
                to show some response.</p>
                <p>When the <strong>X</strong> button is pressed an event is dispatched and the alert is closed</p>
              <h5>Supported properties</h5>

              <code>feedbackInfo</code> - should receive an object with the following properties if the default renderer is
              wanted: <code>typeOfAlert,message,timeSinceCreation</code>.
              <hr/>
              <h5>Using psk-ui-feedback with provided <code>typeOfAlert,message,timeSinceCreation</code> in case of a toast alert and in case of a succes alert or a danger one only the <code>typeOfAlert</code> and the <code>message</code> is enough.</h5>

              
              <div class="card-deck">
                <div class="card">
                  <div class="card-body">
                  <psk-ui-feedback 
                    message= {
                        {content: 'a toast alert'}} 
                    type-of-alert='toast'  
                    timeSinceCreation='20' 
                    timeMeasure='seconds'
                    />
                  <div class="card-footer">
                    <pre class="text-center">
                      <code class="language-html" data-lang="html">
                        <span class="nt">&lt;psk-ui-feedback 
                          message= &#123;&#123;content: 'a toast alert'&#125;&#125;  
                          type-of-alert='toast'  
                          timeSinceCreation='20' 
                          timeMeasure='seconds'&#125;&#125; /&gt;
                        </span>
                      </code>
                    </pre>
                  </div>
                  
                  </div>
                  </div>
                  <div class="card">
                  <div class="card-body">
                  <psk-ui-feedback 
                    message= {
                        {content: 'a success alert'}}  
                    type-of-alert='success-alert'  
                    />
                  <div class="card-footer">
                    <pre class="text-center">
                      <code class="language-html" data-lang="html">
                        <span class="nt">&lt;psk-ui-feedback 
                          message= &#123;&#123;content: 'a succes alert'&#125;&#125;  
                          type-of-alert='succes-alert'  &#125;&#125; /&gt;
                        </span>
                      </code>
                    </pre>
                  </div>
                  
                  </div>
                  </div>
                  <div class="card">
                  <div class="card-body">
                  <psk-ui-feedback 
                    message= {
                        {content: 'a danger alert'}}  
                    type-of-alert='danger-alert'  
                    />
                  <div class="card-footer">
                    <pre class="text-center">
                      <code class="language-html" data-lang="html">
                        <span class="nt">&lt;psk-ui-feedback 
                          message= &#123;&#123;content: 'a danger alert'&#125;&#125;  
                          type-of-alert='danger-alert'&#125;&#125; /&gt;
                        </span>
                      </code>
                    </pre>
                  </div>

                  </div>
                  </div>
                  </div>
            </div>
            </div>
            </div>
        </div>
    )
  }
}
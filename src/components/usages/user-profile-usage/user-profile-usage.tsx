import {Component, h} from "@stencil/core";

@Component({
  tag: 'user-profile-usage',
  styleUrl: 'user-profile-usage.css',
  shadow: true,
})
export class UserProfileUsage {

  render() {
    return (

      <div class="card">
        <h5 class="card-header">psk-user-profile</h5>
        <div class="card-body">


          <div class="card">
            <div class="card-body">
              <psk-user-profile/>
              <hr/>
              <h5>HTML Tag:</h5>
              <pre class="text-center">
              <code class="language-html" data-lang="html">
                <span class="nt">&lt;psk-user-profile/&gt;</span>
              </code>
            </pre>

              <h5>Descripton</h5>
              <p>This component is intended to be used to show some user information. By default, if no datasource is
                provided (<code>userInfo</code>), the component will emit an event (<code>getUserInfo</code>) in order
                to get desired data.</p>
              <h5>Supported properties</h5>

              <code>userInfo</code> - should receive an object with the following properties if the default renderer is
              wanted: <code>username, avatar, email</code>.
              <hr/>
              <code>profileRenderer</code> - it is another web component <code>username, avatar, email</code>.
              <hr/>
              <h5>Using psk-user-profile with provided <code>userInfo</code></h5>

              <div class="card-deck">
                <div class="card">
                  <div class="card-body">
                    <psk-user-profile userInfo={{
                      username: "Aramis",
                      email: "aramis@threemusketeers.net",
                      avatar: "https://www.dingogames.com/three-musketeers-game/instructions/graphics/aramis.jpg"
                    }}/>
                  </div>

                  <div class="card-footer">
                  <pre class="text-center">
                    <code class="language-html" data-lang="html">
                      <span class="nt">&lt;psk-user-profile userInfo=&#123;&#123;username:"Aramis", email:"aramis@threemusketeers.net", avatar:"https://www.dingogames.com/three-musketeers-game/instructions/graphics/aramis.jpg"&#125;&#125; /&gt;</span>
                    </code>
                  </pre>
                  </div>


                </div>
                <div class="card">
                  <div class="card-body">
                    <psk-user-profile userInfo={{
                      username: "D'Artagnan",
                      email: "dartagnan@threemusketeers.net",
                      avatar: "https://www.dingogames.com/three-musketeers-game/instructions/graphics/dartagnan.jpg"
                    }}/>
                  </div>
                  <div class="card-footer">
                  <pre class="text-center">
                    <code class="language-html" data-lang="html">
                      <span class="nt">&lt;psk-user-profile userInfo=&#123;&#123;username:"D'Artagnan", email:"dartagnan@threemusketeers.net", avatar:"https://www.dingogames.com/three-musketeers-game/instructions/graphics/dartagnan.jpg"&#125;&#125; /&gt;</span>
                    </code>
                  </pre>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <psk-user-profile userInfo={{
                      username: "Athos",
                      email: "athos@threemusketeers.net",
                      avatar: "https://www.dingogames.com/three-musketeers-game/instructions/graphics/athos.jpg"
                    }}/>
                  </div>
                  <div class="card-footer">
                  <pre class="text-center">
                    <code class="language-html" data-lang="html">
                      <span class="nt">&lt;psk-user-profile userInfo=&#123;&#123;username:"Athos", email:"athos@threemusketeers.net", avatar:"https://www.dingogames.com/three-musketeers-game/instructions/graphics/athos.jpg"&#125;&#125; /&gt;</span>
                    </code>
                  </pre>
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

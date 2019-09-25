import {Component, h} from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <h1>Welcome to PrivateSky Web Components</h1>



          <div class="card-body">
            Web Components are a set of features that provide a standard component model for the Web allowing for encapsulation and interoperability of individual HTML elements.

            Primary technologies used to create them include:
              <ul class="list-group">
                <li class="list-group-item">Custom Elements – APIs to define new HTML elements</li>
                <li class="list-group-item">Shadow DOM – Encapsulated DOM and styling, with composition</li>
                <li class="list-group-item">HTML Templates, an HTML fragment is not rendered, but stored until it is instantiated via JavaScript</li>
              </ul>
              <footer class="blockquote-footer">Source:<cite title="Source Title">Wikipedia</cite></footer>
          </div>

        <p>You can use this starter app in order to build your own app using <b>Private Sky Custom Web Components</b>.
        </p>
        <p>You can checkout this app and private-sky webcomponents from GitHub.</p>
        <p>
          <a class="btn btn-primary" href="https://github.com/PrivateSky/pwc-apps" target="_blank">Checkout this app</a>
          <a class="btn btn-primary" href="https://github.com/PrivateSky/pskwebcomponents" target="_blank">Checkout
            psk-webcomponents</a>
        </p>

      </div>
    );
  }
}

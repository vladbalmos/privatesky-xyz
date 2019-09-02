import {Component, h, Listen, Prop, Element, EventEmitter,Event} from '@stencil/core';
import DefaultController from "../../controllers/DefaultController";
import {RouterHistory} from "@stencil/router";

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {

  @Prop() controller: any;
  @Prop() history: RouterHistory;
  @Element() element:HTMLElement;

  @Event({
    eventName: 'routeChanged',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) routeChangedEvent:EventEmitter;


  @Listen('routeChanged', {capture: true})
  changeRoute(ev){
    console.log(ev.detail);
    window.location.pathname=ev.detail;
  }

  render() {

    if(!this.controller){
      this.controller = new DefaultController(this.element);
    }

    return (
      <div>
        <header >
          <app-menu itemRenderer="app-menu-renderer"  controller={this.controller}></app-menu>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' componentProps ={{lastName:"Test", getMyName(a:string,b:string){return a+b;}}} component='app-profile' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}

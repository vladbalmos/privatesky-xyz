import {Component, h,  Prop, EventEmitter,Event} from '@stencil/core';
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

  @Event({
    eventName: 'routeChanged',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) routeChangedEvent:EventEmitter;

  constructor(){
    if(!this.controller){
      this.controller = new DefaultController(this);
    }
  }

  render() {
    return (
      <div class="global_container">
        <aside>
          <psk-user-profile/>
          <app-menu item-renderer="sidebar-renderer"></app-menu>
          <div class="nav-footer">version 0.1</div>
        </aside>

        <section>
          <nav> </nav>
          <psk-app-router> </psk-app-router>
        </section>

      </div>
    );
  }
}

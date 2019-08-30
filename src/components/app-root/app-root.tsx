import {Component, h, Prop} from '@stencil/core';
import DefaultController from "../../controllers/DefaultController";

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {

  @Prop() controller: any;


  render() {
    if(!this.controller){
      this.controller = new DefaultController();
    }

    return (
      <div>
        <header >
          <app-menu itemRenderer="my-menu-item" onMenuChanged="controller.handler"></app-menu>
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

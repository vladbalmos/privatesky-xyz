import { Component,  h } from '@stencil/core';
import {Prop} from "@stencil/core";
@Component({
  tag: 'my-menu-item',
  styleUrl: 'my-menu-item.css',
  shadow: true
})

export class AppContainer {

  @Prop() label: string;

  render() {
    return (<div>Test{this.label}</div>);
  }
}

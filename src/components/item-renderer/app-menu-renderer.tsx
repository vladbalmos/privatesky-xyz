import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'app-menu-renderer',
  styleUrl: 'app-menu-renderer.css',
  shadow: true
})

export class MenuItemRenderer {
  @Prop() value: string;
  @Prop({
    reflectToAttr:true,
  }) active: boolean;

  render() {
    let href = "#"+this.value;
    return (<div><a href={href}>
      <slot/>
      </a></div>);
  }
}

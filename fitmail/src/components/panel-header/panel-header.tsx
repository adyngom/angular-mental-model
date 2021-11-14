import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'panel-header',
  styleUrl: 'panel-header.css',
  shadow: true,
})
export class PanelHeader {
  /**
   * Header title
   */
  @Prop() headerTitle: string;

  /**
   * Header subtitle
   */
  @Prop() subtitle: string;

  render() {
    return (
      <header class="panel-header">
            <h2 class="panel-header-title font-bold">{this.headerTitle}</h2>     
            {this.subtitle ? <h3 class="panel-header-subtitle font-subtitle">{this.subtitle}</h3> : ''}
      </header>
    );
  }

}

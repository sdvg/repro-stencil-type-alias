import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { ShowPropType } from './types';

export type LocalShow = boolean;

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  // @Prop({mutable: true, reflect: true}) show: boolean = false; // this is fine
  // @Prop({mutable: true, reflect: true}) show: LocalShow = false; // this is also fine
  @Prop({mutable: true, reflect: true}) show: ShowPropType = false; // this is not fine

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}

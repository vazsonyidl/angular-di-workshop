import {Component, Inject} from '@angular/core';
import {FLOWER} from '../../app/injector.const';

@Component({
  template: `
      <div>{{flower}} - from self component</div>
      <app-self-child></app-self-child>
  `
})
export class SelfComponent {
  constructor(@Inject(FLOWER) public flower) {
  }
}

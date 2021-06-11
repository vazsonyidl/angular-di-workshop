import {Component, Inject, SkipSelf} from '@angular/core';
import {FLOWER} from '../../app/injector.const';

@Component({
  template: `
      <div>{{flower}} - from skip-self component</div>
      <app-skip-self-child></app-skip-self-child>
  `,
  providers: [{provide: FLOWER, useValue: '🌷'}]
})
export class SkipSelfComponent {
  constructor(@SkipSelf() @Inject(FLOWER) public flower) {
  // constructor(@Inject(FLOWER) public flower) {
  }
}

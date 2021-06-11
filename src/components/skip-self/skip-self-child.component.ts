import {Component, Inject, SkipSelf} from '@angular/core';
import {FLOWER} from '../../app/injector.const';

@Component({
  selector: 'app-skip-self-child',
  template: `<div>{{flower}} from skip-self-child component</div>`,
  providers: [{provide: FLOWER, useValue: '💐'}],
})
export class SkipSelfChildComponent {
  constructor(@SkipSelf() @Inject(FLOWER) public flower) {
  // constructor(@Inject(FLOWER) public flower) {
  }
}

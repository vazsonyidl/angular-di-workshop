import {Component, Inject, Self} from '@angular/core';
import {FLOWER} from '../../app/injector.const';

@Component({
  selector: 'app-self-child',
  template: `<div>{{flower}} from self-child component</div>`,
  providers: [{provide: FLOWER, useValue: '💐'}],
})
export class SelfChildComponent {
  constructor(@Self() @Inject(FLOWER) public flower) {
  }
}

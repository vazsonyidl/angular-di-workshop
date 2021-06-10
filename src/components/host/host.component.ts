import {Component, Host, Inject, Optional, Self, SkipSelf} from '@angular/core';
import {FLOWER} from '../../app/injector.const';

@Component({
  selector: 'app-host',
  template: `
      <div>Host flower: {{flower}}</div>
      <app-host-list>
          <app-host-list-template></app-host-list-template>
      </app-host-list>
  `,
  providers: [{provide: FLOWER, useValue: 'Rose _roseemoji_'}]
})
export class HostComponent {
  // constructor(@Host() @Inject(FLOWER) public flower: string) {
  constructor(@Inject(FLOWER) public flower: string) {
  }
}

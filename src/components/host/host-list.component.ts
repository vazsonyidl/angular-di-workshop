import {Component, Host, Inject, Optional} from '@angular/core';
import {FLOWER} from '../../app/injector.const';

@Component({
  selector: 'app-host-list',
  template: `
      <div>List flower: {{flower}}</div>
      <ng-content></ng-content>
  `,
  // providers: [{provide: FLOWER, useValue: 'Blossom 🌼'}]
})
export class HostListComponent {
  constructor(@Optional() @Inject(FLOWER) public flower: string) {
  }
}

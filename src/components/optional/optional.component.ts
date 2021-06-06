import {Component, Optional} from '@angular/core';
import {OptionalService} from './optional.service';

@Component({
  selector: 'app-optional',
  template: `
  <app-optional-list *ngFor="let name of names" [optionalListName]="name"></app-optional-list>
  `,
  // providers: [OptionalService]
})
export class OptionalComponent {
  public names: Array<string>;
  constructor(@Optional() private readonly optionalService: OptionalService) {
    console.log(this.optionalService === null); // will log true and do not throw a NullInjectorError
    this.names = this.optionalService?.optionalListNames;
  }
}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-optional-list',
  template: `<div>{{optionalListName}}</div>`,
})
export class OptionalListComponent {
  @Input() optionalListName!: string;
}

import {Component, Host, Inject} from '@angular/core';
import {FLOWER} from '../../app/injector.const';

@Component({
  selector: 'app-host-list-template',
  template: '<div>{{flower}} - from host list template</div>',
})
export class HostListTemplateComponent{
  constructor(@Host() @Inject(FLOWER) public flower: string) {
  }
}

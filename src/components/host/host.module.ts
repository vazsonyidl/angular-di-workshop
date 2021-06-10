import {NgModule} from '@angular/core';
import {HostComponent} from './host.component';
import {HostListComponent} from './host-list.component';
import {CommonModule} from '@angular/common';
import {hostConfig} from './host.routing';
import {HostListTemplateComponent} from './host-list-template.component';

@NgModule({
  imports: [
    CommonModule,
    hostConfig
  ],
  declarations: [HostComponent, HostListComponent, HostListTemplateComponent]
})
export class HostModule {
}

import {NgModule} from '@angular/core';
import {OptionalComponent} from './optional.component';
import {OptionalListComponent} from './optional-list.component';
import {CommonModule} from '@angular/common';
import {optionalConfig} from './optional.routing';

@NgModule({
  imports: [
    CommonModule,
    optionalConfig
  ],
  declarations: [OptionalComponent, OptionalListComponent]
})
export class OptionalModule {
}

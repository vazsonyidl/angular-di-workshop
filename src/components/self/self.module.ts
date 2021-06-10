import {NgModule} from '@angular/core';
import {SelfComponent} from './self.component';
import {SelfChildComponent} from './self-child.component';
import {selfConfig} from './self.routing';

@NgModule({
  declarations: [SelfComponent, SelfChildComponent],
  imports: [selfConfig]
})
export class SelfModule {}

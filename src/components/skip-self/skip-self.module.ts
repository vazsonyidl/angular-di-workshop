import {NgModule} from '@angular/core';
import {SkipSelfComponent} from './skip-self.component';
import {SkipSelfChildComponent} from './skip-self-child.component';
import {selfConfig} from './skip-self.routing';

@NgModule({
  declarations: [SkipSelfComponent, SkipSelfChildComponent],
  imports: [selfConfig]
})
export class SkipSelfModule {}

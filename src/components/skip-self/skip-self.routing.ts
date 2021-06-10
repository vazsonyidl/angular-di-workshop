import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SkipSelfComponent} from './skip-self.component';

const routes: Routes = [
  {
    path: '',
    component: SkipSelfComponent
  }
]

export const selfConfig: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);

import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SelfComponent} from './self.component';

const routes: Routes = [
  {
    path: '',
    component: SelfComponent
  }
]

export const selfConfig: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);

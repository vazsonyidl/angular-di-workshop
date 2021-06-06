import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {OptionalComponent} from './optional.component';

const routes: Routes = [
  {
    path: '',
    component: OptionalComponent
  }
]

export const optionalConfig: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);

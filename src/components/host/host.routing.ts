import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HostComponent} from './host.component';

const routes: Routes = [
  {
    path: '',
    component: HostComponent
  }
]

export const hostConfig: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);

import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SandboxComponent} from './sandbox.component';

const routes: Routes = [
  {
    path: '',
    component: SandboxComponent
  }
]

export const sandboxConfig: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);

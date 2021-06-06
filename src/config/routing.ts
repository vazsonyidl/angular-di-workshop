import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

const routes: Routes = [
  {
    path: 'sandbox',
    loadChildren: () => import('../components/sandbox/sandbox.module').then(m => m.SandboxModule)
  },
  {
    path: 'optional',
    loadChildren: () => import('../components/optional/optional.module').then(m => m.OptionalModule)
  },
  {
    path: 'host',
    loadChildren: () => import('../components/host/host.module').then(m => m.HostModule)
  }
];

export const routeConfig: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes, {useHash: true});

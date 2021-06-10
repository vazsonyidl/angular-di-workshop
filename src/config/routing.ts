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
  },
  {
    path: 'self',
    loadChildren: () => import('../components/self/self.module').then(m => m.SelfModule)
  },
  {
    path: 'skip-self',
    loadChildren: () => import('../components/skip-self/skip-self.module').then(m => m.SkipSelfModule)
  }
];

export const routeConfig: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes, {useHash: true});

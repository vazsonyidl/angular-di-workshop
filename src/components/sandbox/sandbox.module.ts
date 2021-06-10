import {NgModule, OnDestroy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {SandboxComponent} from './sandbox.component';
import {SandboxListComponent} from './sandbox-list.component';
import {sandboxConfig} from './sandbox.routing';
import {SandboxService} from './sandbox.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    sandboxConfig
  ],
  declarations: [SandboxComponent, SandboxListComponent],
  // providers: [SandboxService]
})
export class SandboxModule implements OnDestroy {
  constructor() {
    console.log('Sandbox module constructed');
  }

  ngOnDestroy() {
    console.log('Sandbox module destroyed');
    // never runs, issue: https://github.com/angular/angular/issues/37095
  }
}

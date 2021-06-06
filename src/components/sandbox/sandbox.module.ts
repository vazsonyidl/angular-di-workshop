import {SandboxComponent} from './sandbox.component';
import {SandboxListComponent} from './sandbox-list.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {sandboxConfig} from './sandbox.routing';
import {NgModule, OnDestroy} from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    sandboxConfig
  ],
  declarations: [SandboxComponent, SandboxListComponent],
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

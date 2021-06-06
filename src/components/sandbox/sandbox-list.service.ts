import {Injectable, OnDestroy} from '@angular/core';

@Injectable()
export class SandboxListService implements OnDestroy {
  public randN = Math.random();
  constructor() {
    console.info('Sandbox-list service constructed');
  }

  ngOnDestroy() {
    console.info('Sandbox-list service destroyed');
  }
}

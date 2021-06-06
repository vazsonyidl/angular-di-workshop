import {Injectable, OnDestroy} from '@angular/core';

@Injectable()
export class SandboxService implements OnDestroy {
  public sandboxNames = ['Sandbox one', 'Sandbox two'];

  constructor() {
    console.info('Sandbox service constructed');
  }

  ngOnDestroy() {
    console.info('Sandbox service destroyed');
  }
}

import {Injectable, OnDestroy} from '@angular/core';

@Injectable()
export class SandboxService implements OnDestroy {
  public sandboxNames = ['Sandbox one', 'Sandbox two'];
  private readonly dummy: Array<number>;
  constructor() {
    this.dummy = Array(100000).fill('').map((v,i) => i + 1);
    console.log(this.dummy.length);
    console.info('Sandbox service constructed');
  }

  ngOnDestroy() {
    console.info('Sandbox service destroyed');
  }
}

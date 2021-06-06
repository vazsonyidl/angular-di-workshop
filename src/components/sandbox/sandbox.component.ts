import {Component, OnDestroy} from '@angular/core';
import {SandboxService} from './sandbox.service';

@Component({
  selector: 'app-sandbox',
  template: `
      <app-sandbox-list *ngFor="let name of sandBoxNames" [sandBoxName]="name"></app-sandbox-list>
  `,
  providers: [SandboxService]
})
export class SandboxComponent implements OnDestroy {
  public sandBoxNames: Array<string>;

  constructor(private readonly sandboxService: SandboxService) {
    this.sandBoxNames = this.sandboxService.sandboxNames;
  }

  ngOnDestroy() {
    console.log('Sandbox list destroyed');
  }
}

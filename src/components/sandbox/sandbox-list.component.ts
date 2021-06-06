import {Component, Input} from '@angular/core';
import {SandboxListService} from './sandbox-list.service';

@Component({
  selector: 'app-sandbox-list',
  template: `<div>{{sandBoxName}} - {{randN}}</div>`,
  providers: [SandboxListService]
})
export class SandboxListComponent {
  @Input() sandBoxName!: string;
  public randN: number;
  constructor(sandboxListService: SandboxListService) {
    this.randN = sandboxListService.randN;
  }
}

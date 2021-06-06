import {Component, Inject, Optional} from '@angular/core';
import {FLOWER} from './injector.const';

@Component({
  selector: 'app-root',
  template: `
      <div>{{title}}</div>
<!--      <button [routerLink]="'/recipes'">Recipes</button>-->
<!--      <button [routerLink]="'/recipe-injection'">Recipe injection</button>-->
      <button [routerLink]="'/'">Main</button>
      <button [routerLink]="'/sandbox'">Sandbox</button>
      <button [routerLink]="'/optional'">Optional</button>
      <button [routerLink]="'/host'">Host</button>
      <router-outlet></router-outlet>
  `,
  providers: [{provide: FLOWER, useValue: '🌺 Hibiscus'}]
})
export class AppComponent {
  public title = 'angular-di-workshop';
  constructor(@Optional() @Inject(FLOWER) private flower: string) {
    console.log(flower);
  }
}

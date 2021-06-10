import {Component, Inject, Optional} from '@angular/core';
import {FLOWER} from './injector.const';

@Component({
  selector: 'app-root',
  template: `
      <div>{{title}} - {{flower}}</div>
<!--      <button [routerLink]="'/recipes'">Recipes</button>-->
<!--      <button [routerLink]="'/recipe-injection'">Recipe injection</button>-->
      <button [routerLink]="'/'">Main</button>
      <button [routerLink]="'/sandbox'">Sandbox</button>
      <button [routerLink]="'/optional'">Optional</button>
      <button [routerLink]="'/host'">Host</button>
      <button [routerLink]="'/self'">Self</button>
      <button [routerLink]="'/skip-self'">Skip Self</button>
      <router-outlet></router-outlet>
  `,
  providers: [{provide: FLOWER, useValue: '🌺 Hibiscus'}]
})
export class AppComponent {
  public title = 'angular-di-workshop';
  constructor(@Optional() @Inject(FLOWER) public flower: string) {
    console.log(flower);
  }
}

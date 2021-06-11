import {Component, Inject, Optional} from '@angular/core';
import {FLOWER} from './injector.const';
import {ControlContainer, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
      <div>{{title}} - {{flower}}</div>
<!--      <mat-form-field appearance="outline">-->
<!--          <mat-label>Main color</mat-label>-->
<!--          <input type="text" matInput [formControl]="control" [value]="control.value"/>-->
<!--          <input type="color" matSuffix [formControl]="control" [value]="control.value">-->
<!--      </mat-form-field>-->
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
  styleUrls: ['./app.style.scss'],
  providers: [{provide: FLOWER, useValue: '🌺 Hibiscus'}]
})
export class AppComponent {
  public title = 'angular-di-workshop';
  public control = new FormControl('#123456');

  constructor(@Optional() @Inject(FLOWER) public flower: string) {
    console.log(flower);
  }
}

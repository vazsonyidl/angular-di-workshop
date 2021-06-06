import {Component, Host, Inject, SkipSelf} from '@angular/core';
import {RecipeService} from './recipe.service';
import {FLOWER} from '../injector.const';

@Component({
  selector: 'app-recipe-list',
  template: `
    <app-recipe-list-item *ngFor="let name of recipeNames" [recipeName]="name"></app-recipe-list-item>
  `,
  // providers: [RecipeService, {provide: FLOWER, useValue: 'Rose'}]
  providers: [RecipeService]
})
export class RecipeListComponent {
  public recipeNames: Array<string>;
  // constructor(@Host() private readonly recipeService: RecipeService, @SkipSelf() @Inject(FLOWER) public flower) {
  constructor(@Host() private readonly recipeService: RecipeService) {
    this.recipeNames = recipeService.recipeNames;
    // console.log(flower);
  }
}

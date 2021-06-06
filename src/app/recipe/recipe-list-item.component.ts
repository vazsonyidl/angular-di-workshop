import {Component, Host, Inject, Input, Optional, Self, SkipSelf} from '@angular/core';
import {RecipeService} from './recipe.service';
import {FLOWER} from '../injector.const';

@Component({
  selector: 'app-recipe-list-item',
  template: `
    <div>{{recipeName}}</div>
  `,
  styles: [
    `
    div {
        display: flex;
    }
    `
  ],
  providers: [{provide: FLOWER, useValue: 'Rosemary'}]
})
export class RecipeListItemComponent {
  @Input() recipeName!: string;
  constructor(@SkipSelf() private readonly recipeService: RecipeService, @Host() @Optional() @Inject(FLOWER) private flower: string) {
    console.log(recipeService.recipeNames);
    console.log(flower, 'flower from list-item');
  }
}

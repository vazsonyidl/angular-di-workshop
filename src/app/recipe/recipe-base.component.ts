import {Component, Inject, Injector, OnDestroy} from '@angular/core';
import {RecipeBaseInjectorComponent} from './recipe-base.injector.component';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipe-base',
  template: `
    <div>Recipe base works</div>
  `,
  providers: [RecipeService]
})
export class RecipeBaseComponent extends RecipeBaseInjectorComponent implements OnDestroy {
  constructor(inject: Injector) {
    super(inject);
    console.log(this.recipeService.recipeNames);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    console.log('recipebase detroyed');
  }
}

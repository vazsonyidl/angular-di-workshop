import {Injectable, Injector, OnDestroy} from '@angular/core';
import {RecipeService} from './recipe.service';

@Injectable()
export abstract class RecipeBaseInjectorComponent implements OnDestroy {
  protected recipeService: RecipeService;
  protected constructor(inject: Injector) {
    this.recipeService = inject.get<RecipeService>(RecipeService)
  }

  public ngOnDestroy(): void {
    console.log('base injector destroyed');
  }
}

import {Injectable, OnDestroy} from '@angular/core';
import {interval} from 'rxjs';

@Injectable()
export class RecipeService implements OnDestroy {
  public readonly recipeNames: Array<string> = ['Tomato soup', 'Bean soup'];

  constructor() {
    console.log('recipe service initiated');
    interval(5000).subscribe(v => console.info(v));
  }

  public ngOnDestroy(): void {
    console.log('recipe service destroyed');
  }
}

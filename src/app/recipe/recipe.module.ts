import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipeListComponent} from './recipe-list.component';
import {RecipeListItemComponent} from './recipe-list-item.component';
import {RecipeBaseComponent} from './recipe-base.component';

@NgModule({
  declarations: [RecipeListComponent, RecipeListItemComponent, RecipeBaseComponent],
  exports: [
    RecipeListComponent
  ],
  imports: [
    CommonModule
  ],
})
export class RecipeModule {
  constructor() {
    console.log('recipe module initiated');
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RecipeModule} from './recipe/recipe.module';
import {RouterModule} from '@angular/router';
import {routeConfig} from '../config/routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RecipeModule,
    RouterModule,
    routeConfig
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import {RecipeUpdateComponent} from "./recipe/recipe-update.component";
import {AngularTokenService} from "angular-token";
import { RecipeResolver } from "./recipe/recipe.resolver";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'recipes/new',
    component: RecipeUpdateComponent,
    resolve: {
      recipe: RecipeResolver
    },
    data: {
      readonly: false
    },
    canActivate: [AngularTokenService]
  },
  {
    path: 'recipes/:id/view',
    component: RecipeUpdateComponent,
    resolve: {
      recipe: RecipeResolver
    },
    data: {
      readonly: true
    },
    canActivate: [AngularTokenService]
  },
  {
    path: 'recipes/:id/edit',
    component: RecipeUpdateComponent,
    resolve: {
      recipe: RecipeResolver
    },
    data: {
      readonly: false
    },
    canActivate: [AngularTokenService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

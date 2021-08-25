import { Component, OnInit } from '@angular/core';
import {IRecipe} from "../shared/model/recipe.model";
import {RecipeService} from "./recipe.service";
import { take}  from "rxjs/operators";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html'
})
export class RecipeComponent implements OnInit {

  recipes:IRecipe[] = [];

  constructor(private recipeService: RecipeService) {
    this.recipeService.findAll().pipe(take(1)).subscribe(res => {
      this.recipes = res;
    })
  }

  ngOnInit(): void {
  }

}

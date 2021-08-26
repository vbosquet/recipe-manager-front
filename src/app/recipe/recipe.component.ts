import { Component, OnInit } from '@angular/core';
import {IRecipe} from "../shared/model/recipe.model";
import {RecipeService} from "./recipe.service";
import {count, take} from "rxjs/operators";
import {FormBuilder} from "@angular/forms";

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

  onDeletedButtonClicked(id: any) {
    this.recipeService.delete(id).pipe(take(1)).subscribe(res => {
      this.refreshPage();
    }, error => console.log(error));
  }

  refreshPage() {
    location.reload();
  }
}

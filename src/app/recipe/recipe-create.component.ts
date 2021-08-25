import {Component, OnInit} from "@angular/core";
import {IRecipe, Recipe} from "../shared/model/recipe.model";
import {FormBuilder, Validators} from "@angular/forms";
import {RecipeService} from "./recipe.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-recipe-update',
  templateUrl: './recipe-create.component.html'
})
export class RecipeCreateComponent implements OnInit {

  recipe: IRecipe = new Recipe();

  createForm = this.fb.group({
    title: [null, Validators.required],
    description: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  save() {
    const recipe = this.createFromForm();
    this.recipeService.create(recipe).pipe(take(1)).subscribe(res => {
      console.log(res);
    });
  }

  private createFromForm(): IRecipe {
    return {
      ...new Recipe(),
      title: this.createForm.get(['title'])?.value,
      description: this.createForm.get(['description'])?.value
    };
  }
}

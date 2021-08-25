import {Component, OnInit} from "@angular/core";
import {IRecipe, Recipe} from "../shared/model/recipe.model";
import {FormBuilder, Validators} from "@angular/forms";
import {RecipeService} from "./recipe.service";
import {take} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-recipe-update',
  templateUrl: './recipe-update.component.html'
})
export class RecipeUpdateComponent implements OnInit {

  recipe: IRecipe = new Recipe();
  readonly: boolean = false;

  editForm = this.fb.group({
    id: [],
    title: [null, Validators.required],
    description: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private recipeService: RecipeService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.pipe(take(1)).subscribe(({ recipe, readonly }) => {
      this.readonly = readonly;
      this.recipe = recipe;
      console.log(recipe);
      this.updateForm();
    });
  }

  ngOnInit(): void {
  }

  save() {
    const recipe = this.createFromForm();
    if (recipe.id !== undefined) {
      this.subscribeToSaveResponse(this.recipeService.update(recipe));
    } else {
      this.subscribeToSaveResponse(this.recipeService.create(recipe));
    }
  }

  updateForm() {
    this.editForm.patchValue({
      ...this.recipe
    });
  }

  previousState() {
    window.history.back();
  }

  protected subscribeToSaveResponse(result: Observable<IRecipe>) {
    result.pipe(take(1)).subscribe(() => this.previousState(), (error) => console.log(error));
  }

  private createFromForm(): IRecipe {
    return {
      ...new Recipe(),
      id: this.editForm.get(['id'])?.value,
      title: this.editForm.get(['title'])?.value,
      description: this.editForm.get(['description'])?.value
    };
  }
}

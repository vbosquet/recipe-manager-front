import {Component, OnInit} from "@angular/core";
import {IRecipe, Recipe} from "../shared/model/recipe.model";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "./recipe.service";
import {take} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";


@Component({
  selector: 'app-recipe-update',
  templateUrl: './recipe-update.component.html'
})
export class RecipeUpdateComponent implements OnInit {

  recipe: IRecipe = new Recipe();
  readonly: boolean = false;
  ingredients: any[] = [];

  editForm = this.fb.group({
    id: [],
    title: [null, Validators.required],
    description: [null, Validators.required],
    ingredients: this.fb.array([], [])
  });

  constructor(private fb: FormBuilder, private recipeService: RecipeService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.pipe(take(1)).subscribe(({ recipe, readonly }) => {
      this.readonly = readonly;
      this.recipe = recipe;
      this.ingredients = recipe.ingredients;
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
    if (this.ingredients) {
      for (const ingredient of this.ingredients) {
        (this.editForm.get('ingredients') as FormArray).push(this.fb.group(ingredient));
      }
    }
  }

  previousState() {
    window.history.back();
  }

  createItems(): FormGroup {
    return this.fb.group({
      id: [],
      name: [],
      quantity: []
    })
  }

  addIngredient() {
    const array: FormArray = this.editForm.get('ingredients') as FormArray;
    if(array.length < 10) {
      (this.editForm.get('ingredients') as FormArray).push(this.createItems())
    }
  }

  deleteIngredient(index: number): void {
    (this.editForm.get('ingredients') as FormArray).removeAt(index);
  }

  get ingredientFormGroups () {
    return this.editForm.get('ingredients') as FormArray
  }

  protected subscribeToSaveResponse(result: Observable<IRecipe>) {
    result.pipe(take(1)).subscribe(() => this.previousState(), (error) => console.log(error));
  }

  private createFromForm(): IRecipe {
    return {
      ...new Recipe(
        this.editForm.get(['id'])?.value,
        this.editForm.get(['title'])?.value,
        this.editForm.get(['description'])?.value,
        this.editForm.get(['ingredients'])?.value
      ),
    };
  }
}

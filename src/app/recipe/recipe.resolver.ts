import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {IRecipe, Recipe} from "../shared/model/recipe.model";
import {RecipeService} from "./recipe.service";
import {observable, Observable, of} from "rxjs";
import {map, take} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RecipeResolver implements Resolve<IRecipe> {
  constructor(private service: RecipeService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IRecipe> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(map((recipe: IRecipe) => recipe));
    }
    return of(new Recipe());
  }
}

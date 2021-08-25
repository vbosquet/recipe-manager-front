import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRecipe } from "../shared/model/recipe.model";
import {SERVER_API_URL} from "../app.constant";

@Injectable({ providedIn: 'root' })
export class RecipeService {

  public resourceUrl = SERVER_API_URL + '/recipes';

  constructor(protected http: HttpClient) {}

  find(id: number): Observable<IRecipe> {
    return this.http.get<IRecipe>(`${this.resourceUrl}/${id}`);
  }

  create(recipe: IRecipe): Observable<IRecipe> {
    return this.http.post<IRecipe>(`${this.resourceUrl}`, {"recipe": recipe});
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRecipe } from "../shared/model/recipe.model";
import {SERVER_API_URL} from "../app.constant";

@Injectable({ providedIn: 'root' })
export class RecipeService {

  public resourceUrl = SERVER_API_URL + '/recipes';

  constructor(protected http: HttpClient) {}

  search(req?: any): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(this.resourceUrl + '/search?query=' + req);
  }

  find(id: number): Observable<IRecipe> {
    return this.http.get<IRecipe>(`${this.resourceUrl}/${id}`);
  }

  findAll(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(`${this.resourceUrl}`);
  }

  create(recipe: IRecipe): Observable<IRecipe> {
    return this.http.post<IRecipe>(`${this.resourceUrl}`, {"recipe": recipe});
  }

  update(recipe: IRecipe): Observable<IRecipe> {
    return this.http.put<IRecipe>(`${this.resourceUrl}/${recipe.id}`, {"recipe": recipe});
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`);
  }
}


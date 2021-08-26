import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRecipe } from "../shared/model/recipe.model";
import {SERVER_API_URL} from "../app.constant";

@Injectable({ providedIn: 'root' })
export class HomeService {

  public resourceUrl = SERVER_API_URL + '/home';

  constructor(protected http: HttpClient) {}

  search(req?: any): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(this.resourceUrl + '/search?query=' + req);
  }
}

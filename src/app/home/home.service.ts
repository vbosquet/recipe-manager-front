import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {SERVER_API_URL} from "../app.constant";

type EntityArrayResponseType = HttpResponse<any[]>;

@Injectable({ providedIn: 'root' })
export class HomeService {

  public resourceUrl = SERVER_API_URL + '/home';

  constructor(protected http: HttpClient) {}

  search(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<any[]>(this.resourceUrl + '/search', { params: options, observe: 'response' });
  }
}


export const createRequestOption = (req?: any): HttpParams => {
  let options: HttpParams = new HttpParams();
  if (req) {
    Object.keys(req).forEach(key => {
      if (key !== 'sort') {
        options = options.set(key, req[key]);
      }
    });
    if (req.sort) {
      req.sort.forEach((val: any) => {
        options = options.append('sort', val);
      });
    }
  }
  return options;
};


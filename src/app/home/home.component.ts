import { Component, OnInit } from '@angular/core';
import {AngularTokenService} from "angular-token";
import {IRecipe} from "../shared/model/recipe.model";
import {FormBuilder} from "@angular/forms";
import {take} from "rxjs/operators";
import {RecipeService} from "../recipe/recipe.service";
import {HomeService} from "./home.service";
import {ISearchCriteria, SearchCriteria} from "../shared/model/search.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  isUserSignedIn: boolean = false;
  recipes:IRecipe[] = [];
  searchForm = this.fb.group({
    query: []
  });

  constructor(private tokenService: AngularTokenService, private homeService: HomeService, private fb: FormBuilder) {
    this.isUserSignedIn = tokenService.userSignedIn();
  }

  ngOnInit(): void {
  }

  search() {
    const query: ISearchCriteria = new SearchCriteria(this.searchForm.get(['query'])?.value);
    if (query != null) {
      this.homeService.search(query).pipe(take(1)).subscribe(res => {
        console.log(res);
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import {AngularTokenService} from "angular-token";
import {IRecipe} from "../shared/model/recipe.model";
import {FormBuilder} from "@angular/forms";
import {take} from "rxjs/operators";
import {RecipeService} from "../recipe/recipe.service";
import {HomeService} from "./home.service";

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
    const query: string = this.searchForm.get(['query'])?.value;
    if (query != null) {
      this.homeService.search(this.searchForm.get(['query'])?.value).pipe(take(1)).subscribe(res => {
        console.log(res);
      });
    }
  }

}

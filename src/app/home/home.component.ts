import { Component, OnInit } from '@angular/core';
import {AngularTokenService} from "angular-token";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  isUserSignedIn: boolean = false;

  constructor(private tokenService: AngularTokenService) {
    this.isUserSignedIn = tokenService.userSignedIn();
  }

  ngOnInit(): void {
  }

}

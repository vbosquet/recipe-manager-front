import { Component } from '@angular/core';
import { AngularTokenService } from "angular-token";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'baby-shop-front';

  constructor(public tokenService: AngularTokenService) {
    this.tokenService.signIn({
      login:    'user@example.com',
      password: 'monkey67'
    }).subscribe(
      res =>      console.log(res),
      error =>    console.log(error)
    );
  }
}

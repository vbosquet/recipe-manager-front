import {Component, OnInit, ViewChild} from '@angular/core';

import { MenuItem } from 'primeng/api';
import { AuthDialogComponent } from "../auth-dialog/auth-dialog.component";
import {AngularTokenService} from "angular-token";
import {Router} from "@angular/router";


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnInit {

  loggedInItems: MenuItem[];
  loggedOutItems: MenuItem[];
  isUserSignedIn: boolean = false;

  @ViewChild('authDialog', { static: false }) authDialog!: AuthDialogComponent;

  constructor(private tokenService: AngularTokenService, private router: Router) {
    this.isUserSignedIn = tokenService.userSignedIn();
    this.loggedOutItems = [
      {
        label: 'Login', command: event => {
          this.presentAuthDialog();
        }
      },
      {
        label: 'Register', command: event => {
          this.presentAuthDialog('register');
        }
      }
    ];

    this.loggedInItems = [
      {
        label: 'Home', routerLink: '/home'
      },
      {
        label: 'Sign Out', command: event => {
          this.onSignOutClicked();
        }

      }
    ];
  }

  ngOnInit(): void {
  }

  presentAuthDialog(mode?: 'login'| 'register') {
    this.authDialog.openDialog(mode);
  }

  onSignOutClicked() {
    this.tokenService.signOut().subscribe(
      res =>      {
        this.isUserSignedIn = false;
        this.router.navigate(['home']);
      },
      error =>    console.log(error)
    );
  }
}

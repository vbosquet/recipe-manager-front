import {Component, OnInit, ViewChild} from '@angular/core';

import { MenuItem } from 'primeng/api';
import { AuthDialogComponent } from "../auth-dialog/auth-dialog.component";
import {AngularTokenService} from "angular-token";


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  loggedInItems: MenuItem[];
  loggedOutItems: MenuItem[];
  isUserSignedIn: boolean = false;

  @ViewChild('authDialog', { static: false }) authDialog!: AuthDialogComponent;

  constructor(private tokenService: AngularTokenService) {
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
        label: 'Profile'
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
      res =>      this.isUserSignedIn = false,
      error =>    console.log(error)
    );
  }

  updateUserStatus($event: boolean) {
    this.isUserSignedIn = $event;
  }
}

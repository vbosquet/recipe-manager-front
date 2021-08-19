import {Component, OnInit, ViewChild} from '@angular/core';

import { MenuItem } from 'primeng/api';
import { AuthDialogComponent } from "../auth-dialog/auth-dialog.component";


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  items: MenuItem[];

  @ViewChild('authDialog', { static: false }) authDialog!: AuthDialogComponent;

  constructor() {
    this.items = [
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
  }

  ngOnInit(): void {
  }

  presentAuthDialog(mode?: 'login'| 'register') {
    this.authDialog.openDialog(mode);
  }

}

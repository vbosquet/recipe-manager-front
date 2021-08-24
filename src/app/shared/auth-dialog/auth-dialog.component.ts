import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent implements OnInit {

  display: boolean = false;
  authMode: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  openDialog(mode: 'login' | 'register' = 'login') {
    this.authMode = mode;
    this.showDialog();
  }

  showDialog() {
    this.display = true;
  }

  isLoginMode(){
    return this.authMode == 'login'
  }

  isRegisterMode(){
    return this.authMode == 'register'
  }

  onLoginFormResult($event: any) {
    if ($event.signedIn) {
      this.display = false;
    }
  }

  onRegisterFormResult($event: any) {
    if ($event.signedUp) {
      this.display = false;
    }
  }
}

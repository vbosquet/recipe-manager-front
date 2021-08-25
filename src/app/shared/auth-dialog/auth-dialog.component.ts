import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularTokenService} from "angular-token";

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html'
})
export class AuthDialogComponent implements OnInit {

  display: boolean = false;
  authMode: string = '';

  @Output() onAuthSuccess = new EventEmitter<any>();

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
      this.onAuthSuccess.emit($event.signedIn);
      this.display = false;
    } else {
      alert($event.err.message)
    }
  }

  onRegisterFormResult($event: any) {
    if ($event.signedUp) {
      this.display = false;
    } else {
      alert($event.err.message)
    }
  }

  onCloseDialog() {
    this.display = false;
  }
}

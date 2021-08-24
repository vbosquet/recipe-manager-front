import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {AngularTokenService, SignInData} from "angular-token";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signInUser: SignInData = {
    login: '',
    password: ''
  };

  authForm = this.fb.group({
    password: [null, [Validators.required]],
    email: [null, [Validators.required]]
  });

  @Output() onFormResult = new EventEmitter<any>();
  constructor(private fb: FormBuilder, private tokenService: AngularTokenService) {}

  ngOnInit(): void {
  }

  onSignInSubmit() {
    const user = this.createFromForm();
    this.tokenService.signIn(user).subscribe(res => {
      if(res.status == 200){
        this.onFormResult.emit({signedIn: true, res});
      }
    },
      err => {
        console.log('err:', err);
        this.onFormResult.emit({signedIn: false, err});
      });
  }

  private createFromForm(): SignInData {
    this.signInUser.login = this.authForm.get('email')?.value;
    this.signInUser.password = this.authForm.get('password')?.value;
    return this.signInUser;
  }

}

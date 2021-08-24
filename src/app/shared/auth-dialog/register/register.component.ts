import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AngularTokenService, RegisterData, SignInData} from "angular-token";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signUpUser: RegisterData = {
    login: '',
    password: '',
    passwordConfirmation: '',
    name: '',
    userType: ''
  };

  authForm = this.fb.group({
    email: [null, [Validators.required]],
    password: [null, [Validators.required]],
    passwordConfirmation: [null, Validators.required],
  });

  @Output() onFormResult = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private tokenService: AngularTokenService) { }

  ngOnInit(): void {}

  onSignUpSubmit() {
    const user = this.createFromForm();
    this.tokenService.registerAccount(user).subscribe(res => {
      if(res.status == 200){
        this.onFormResult.emit({signedUp: true, res});
      }
    },
      err => {
        console.log('err:', err);
        this.onFormResult.emit({signedUp: false, err});
      });
  }

  private createFromForm(): RegisterData {
    this.signUpUser.login = this.authForm.get('email')?.value;
    this.signUpUser.password = this.authForm.get('password')?.value;
    this.signUpUser.passwordConfirmation = this.authForm.get('passwordConfirmation')?.value;
    return this.signUpUser;
  }

}

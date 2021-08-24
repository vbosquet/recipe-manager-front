import {Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AngularTokenService, RegisterData, SignInData} from "angular-token";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnChanges {

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

  @Input() displayDialog: boolean = false;
  @Output() onFormResult = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private tokenService: AngularTokenService) { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.displayDialog) {
      this.authForm.reset();
    }
  }

  onSignUpSubmit() {
    const user = this.createFromForm();
    this.tokenService.registerAccount(user).subscribe(res => {
      if(res.status == "success") {
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

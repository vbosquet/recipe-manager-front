import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authForm = this.fb.group({
    password: [null, [Validators.required]],
    email: [null, [Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  save() {
    console.log('is saving...');
  }

}

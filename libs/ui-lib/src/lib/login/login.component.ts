import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@nx11/core-data';
import { User } from '@nx11/core-data';

@Component({
  selector: 'ui-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  userLogin = { email: 'test@test.test', password: 'test' }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authservice: AuthService
    ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    })
  }

  login() {
    const inputedUser: User = this.form.value
    if(this.form.invalid) {
    } else {
      if(inputedUser.email === this.userLogin.email && inputedUser.password === this.userLogin.password) {
        this.authservice.setToken(inputedUser.email);
        this.router.navigate(['/projects']);
      }
    }
  }
}

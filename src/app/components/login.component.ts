import {Component, OnInit} from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods} from "angularfire2";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
@Component({
  selector: 'login-form',
  templateUrl: '../templates/login.component.html',
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private af: AngularFire) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['@stud.hslu.ch', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(data) {
    this.af.auth.login({
        email: data.email,
        password: data.password
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      });
  }

}



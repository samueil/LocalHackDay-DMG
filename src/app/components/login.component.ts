import {Component, OnInit} from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods} from "angularfire2";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'login-form',
  templateUrl: '../templates/login.component.html',
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error: string;

  constructor(private formBuilder: FormBuilder, private af: AngularFire, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
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
      })
      .then(success => {
        this.router.navigate(['']);
      })
      .catch(error => {
        this.error = error.message;
      });
  }

}



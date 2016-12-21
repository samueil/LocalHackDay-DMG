import {Component, OnInit} from "@angular/core";
import {AngularFire} from "angularfire2";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'login-form',
  templateUrl: '../templates/register.component.html',
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  error: string;

  constructor(private formBuilder: FormBuilder, private af: AngularFire, private router: Router) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  register(data) {
    this.af.auth.createUser({
      email: data.email,
      password: data.password
    })
      .then(success => {
        this.router.navigate(['']);
      })
      .catch(error => {
        this.error = error.message;
      });
  }

}



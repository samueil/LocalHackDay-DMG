import {Component, OnInit} from "@angular/core";
import {AngularFire} from "angularfire2";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
@Component({
  selector: 'login-form',
  templateUrl: '../templates/login.component.html',
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private af: AngularFire) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['@stud.hslu.ch', Validators.required],
      password: ['', Validators.required],
    });
  }

  register(data) {
    this.af.auth.createUser({
      email: data.email,
      password: data.password
    });
  }

}



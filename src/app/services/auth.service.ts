import {Injectable, OnInit} from "@angular/core";
import {AngularFire} from "angularfire2";


@Injectable()
export class AuthService implements OnInit{

  user: any;

  constructor(private angularFire: AngularFire) {
    this.angularFire.auth.subscribe(auth => this.user);
  }

  ngOnInit() {

  }

}

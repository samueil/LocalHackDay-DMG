import {Component, OnInit} from "@angular/core";
import {AngularFire} from "angularfire2";

@Component({
  selector: 'navbar',
  templateUrl: '../templates/navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(public af: AngularFire) {
  }

  ngOnInit() {
  }

  logout() {
    this.af.auth.logout();
  }
}



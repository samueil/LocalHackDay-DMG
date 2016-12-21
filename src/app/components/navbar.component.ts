import {Component, OnInit} from "@angular/core";
import {AngularFire} from "angularfire2";
import {Router} from "@angular/router";

@Component({
  selector: 'navbar',
  templateUrl: '../templates/navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(public af: AngularFire, private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.af.auth.logout();
    this.router.navigate(['']);
  }
}



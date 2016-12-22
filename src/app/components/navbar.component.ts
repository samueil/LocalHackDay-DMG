import {Component, OnInit, AfterViewInit} from "@angular/core";
import {AngularFire} from "angularfire2";
import {Router} from "@angular/router";
declare var $;

@Component({
  selector: 'navbar',
  templateUrl: '../templates/navbar.component.html',
})
export class NavbarComponent implements OnInit, AfterViewInit {

  constructor(public af: AngularFire, private router: Router) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
      }
    );
  }

  logout() {
    this.af.auth.logout();
    this.router.navigate(['']);
  }
}



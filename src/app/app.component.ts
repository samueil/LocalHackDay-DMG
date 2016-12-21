import {Component} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  auth: any;

  constructor(private af: AngularFire) {
    this.af.auth.subscribe(auth => this.auth);
  }
}

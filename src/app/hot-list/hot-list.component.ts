import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'hot-list',
  templateUrl: './hot-list.component.html',
  styleUrls: ['./hot-list.component.css']
})
export class HotListComponent implements OnInit {

  hot_list: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.hot_list = af.database.list('/feedback');
  }

  ngOnInit() {

  }

}

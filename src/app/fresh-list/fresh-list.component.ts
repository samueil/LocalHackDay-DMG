import { Component, OnInit } from '@angular/core';
import {FirebaseListObservable, AngularFire} from "angularfire2";

@Component({
  selector: 'fresh-list',
  templateUrl: './fresh-list.component.html',
  styleUrls: ['./fresh-list.component.css']
})
export class FreshListComponent implements OnInit {

  fresh_list: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.fresh_list = af.database.list('/feedback', {
      query: {
        orderByKey: true
      }
    });
  }

  ngOnInit() {
  }

  agree(feedback) {
    if (!feedback.vote) {
      feedback.vote = 0;
    }
    feedback.vote++;
    this.fresh_list.update(feedback.$key, {vote: feedback.vote});
  }

  disagree(feedback) {
    if (!feedback.vote) {
      feedback.vote = 0;
    }
    feedback.vote--;
    this.fresh_list.update(feedback.$key, {vote: feedback.vote});
  }

}

import {Component, OnInit, Pipe} from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {FeedbackService} from "../feedback.service";
import {feedback} from "../feedback";


@Component({
  selector: 'hot-list',
  templateUrl: './hot-list.component.html',
  styleUrls: ['./hot-list.component.css']
})
export class HotListComponent {

  hot_list: FirebaseListObservable<any>;

  constructor(private af: AngularFire, private feedbackService: FeedbackService) {
    this.hot_list = af.database.list('feedback');
  }
}

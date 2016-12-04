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
  deleteLimit = -10;

  constructor(private af: AngularFire, private feedbackService: FeedbackService) {
    this.hot_list = af.database.list('/feedback', {
      query: {
        orderByChild: 'vote'
      }
    });
  }

  agree(feedback) {
    if (!feedback.vote) {
      feedback.vote = 0;
    }
    feedback.vote++;
    this.hot_list.update(feedback.$key, {vote: feedback.vote});
  }

  disagree(feedback) {
    if (!feedback.vote) {
      feedback.vote = 0;
    }

    feedback.vote--;

    if (feedback.vote <= this.deleteLimit) {
      this.hot_list.remove(feedback.$key);
    } else {
      this.hot_list.update(feedback.$key, {vote: feedback.vote});
    }
  }
}

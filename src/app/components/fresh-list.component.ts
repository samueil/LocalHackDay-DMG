import {Component, OnInit} from "@angular/core";
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {FeedbackService} from "../services/feedback.service";

@Component({
  selector: 'fresh-list',
  templateUrl: '../templates/fresh-list.component.html'
})
export class FreshListComponent implements OnInit {

  feedbacks: FirebaseListObservable<any[]>;

  constructor(private feedbackService: FeedbackService, public af: AngularFire) {
  }

  ngOnInit() {
    this.feedbacks = this.feedbackService.getFresh();
  }

  agree(feedback) {
    if (!feedback.vote) {
      feedback.vote = 0;
    }
    feedback.vote++;
    this.feedbacks.update(feedback.$key, {vote: feedback.vote});
  }

  disagree(feedback) {
    if (!feedback.vote) {
      feedback.vote = 0;
    }
    feedback.vote--;
    this.feedbacks.update(feedback.$key, {vote: feedback.vote});
  }
}

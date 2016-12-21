import {Component, OnInit} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {FeedbackService} from "../services/feedback.service";

@Component({
  selector: 'hot-list',
  templateUrl: '../templates/hot-list.component.html',
})
export class HotListComponent implements OnInit {

  feedbacks: FirebaseListObservable<any>;

  constructor(private feedbackService: FeedbackService, public af: AngularFire) {
  }

  ngOnInit() {
    this.feedbacks = this.feedbackService.getHot();
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

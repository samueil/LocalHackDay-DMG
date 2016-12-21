import {Injectable} from "@angular/core";
import {AngularFire} from "angularfire2";


@Injectable()
export class FeedbackService {

  constructor(private angularFire: AngularFire) {

  }
  getHot() {
     return this.angularFire.database.list('/feedback/', {
      query: {
        orderByChild: "vote"
      }
    });
  }

  getFresh() {
    return this.angularFire.database.list('/feedback', {
      query: {
        orderByKey: true
      }
    });
  }

  saveFeedback(data) {
    this.angularFire.database.list('/feedback').push(data);
  }

}

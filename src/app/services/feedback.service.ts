import {Injectable} from "@angular/core";
import {AngularFire} from "angularfire2";
import {forEach} from "@angular/router/src/utils/collection";


@Injectable()
export class FeedbackService {

  user: any;

  constructor(private angularFire: AngularFire) {
    this.angularFire.auth.subscribe(auth => this.user = auth);
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

  upvote(key: string, votes: number) {
    this.angularFire.database.object('/feedback/' + key).update({vote: votes, upvotes: this.user.uid});
    let profile = this.angularFire.database.object('/profiles/' + this.user.uid + '/upvotes');
    profile.update({[key]: true});
  }

  downvote(key) {

  }

  saveFeedback(data) {
    data.autor = this.user.uid;
    this.angularFire.database.list('/feedback').push(data);
  }

}

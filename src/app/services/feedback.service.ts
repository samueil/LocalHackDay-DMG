import {Injectable} from "@angular/core";
import {AngularFire} from "angularfire2";

@Injectable()
export class FeedbackService {

  user: any;
  profile: any;

  constructor(private angularFire: AngularFire) {
    this.angularFire.auth.subscribe(auth => {
      this.user = auth;
      console.log(this.user.uid);
      if (this.user) {
        this.angularFire.database.object('/profiles/' + this.user.uid).subscribe(profile => {
          this.profile = profile;
        });
      }
    });
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
    this.angularFire.database.object('/feedback/' + key).update({vote: votes});
    this.angularFire.database.list('/feedback/' + key + '/upvotes').push(this.user.uid);
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

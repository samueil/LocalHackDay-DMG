import {Injectable} from "@angular/core";
import {AngularFire} from "angularfire2";


@Injectable()
export class FeedbackService {

  constructor(private af: AngularFire) {
  }

}

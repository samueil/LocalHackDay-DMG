import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AngularFireModule} from "angularfire2";
import {FreshListComponent} from "./fresh-list/fresh-list.component";
import {HotListComponent} from "./hot-list/hot-list.component";
import {FollowingListComponent} from './following-list/following-list.component';
import {FeedbackFormComponent} from './feedback-form/feedback-form.component';
import {FeedbackService} from "./feedback.service";
import { ReversePipe } from './reverse.pipe';
import {HotPipe} from "./hot.pipe";

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyB2Nc9GjHuZ8uE-PQEuwjm1dFsbEdSmTS0",
  authDomain: "feedbackoverflow-3efdc.firebaseapp.com",
  databaseURL: "https://feedbackoverflow-3efdc.firebaseio.com",
  storageBucket: "feedbackoverflow-3efdc.appspot.com",
};

@NgModule({
  declarations: [
    AppComponent,
    FreshListComponent,
    HotListComponent,
    FollowingListComponent,
    FeedbackFormComponent,
    ReversePipe,
    HotPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    FeedbackService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

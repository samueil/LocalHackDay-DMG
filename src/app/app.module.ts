import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {AngularFireModule} from "angularfire2";
import {FreshListComponent} from "./components/fresh-list.component";
import {HotListComponent} from "./components/hot-list.component";
import {FeedbackFormComponent} from "./components/feedback-form.component";
import {FeedbackService} from "./services/feedback.service";
import {ReversePipe} from "./pipes/reverse.pipe";
import {LoginComponent} from "./components/login.component";
import {AppRoutingModule} from "./app-routing.module";
import {RegisterComponent} from "./components/register.component";
import {NavbarComponent} from "./components/navbar.component";

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
    FeedbackFormComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    FeedbackService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}

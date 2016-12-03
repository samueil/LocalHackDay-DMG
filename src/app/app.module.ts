import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AngularFireModule} from "angularfire2";

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyB2Nc9GjHuZ8uE-PQEuwjm1dFsbEdSmTS0",
  authDomain: "feedbackoverflow-3efdc.firebaseapp.com",
  databaseURL: "https://feedbackoverflow-3efdc.firebaseio.com",
  storageBucket: "feedbackoverflow-3efdc.appspot.com",
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

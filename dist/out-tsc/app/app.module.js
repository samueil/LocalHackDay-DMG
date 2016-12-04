var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from "angularfire2";
import { FreshListComponent } from "./fresh-list/fresh-list.component";
import { HotListComponent } from "./hot-list/hot-list.component";
import { FollowingListComponent } from './following-list/following-list.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { FeedbackService } from "./feedback.service";
import { ReversePipe } from './reverse.pipe';
import { HotPipe } from "./hot.pipe";
// Must export the config
export var firebaseConfig = {
    apiKey: "AIzaSyB2Nc9GjHuZ8uE-PQEuwjm1dFsbEdSmTS0",
    authDomain: "feedbackoverflow-3efdc.firebaseapp.com",
    databaseURL: "https://feedbackoverflow-3efdc.firebaseio.com",
    storageBucket: "feedbackoverflow-3efdc.appspot.com",
};
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/jandor/Repositories/LocalHackDay-DMG/src/app/app.module.js.map
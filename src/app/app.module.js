"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var angularfire2_1 = require("angularfire2");
var fresh_list_component_1 = require("./components/fresh-list.component");
var hot_list_component_1 = require("./components/hot-list.component");
var following_list_component_1 = require("./components/following-list.component");
var feedback_form_component_1 = require("./components/feedback-form.component");
var feedback_service_1 = require("./services/feedback.service");
var reverse_pipe_1 = require("./pipes/reverse.pipe");
var hot_pipe_1 = require("./pipes/hot.pipe");
var test_list_component_1 = require("./components/test-list.component");
// Must export the config
exports.firebaseConfig = {
    apiKey: "AIzaSyB2Nc9GjHuZ8uE-PQEuwjm1dFsbEdSmTS0",
    authDomain: "feedbackoverflow-3efdc.firebaseapp.com",
    databaseURL: "https://feedbackoverflow-3efdc.firebaseio.com",
    storageBucket: "feedbackoverflow-3efdc.appspot.com",
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                fresh_list_component_1.FreshListComponent,
                hot_list_component_1.HotListComponent,
                following_list_component_1.FollowingListComponent,
                feedback_form_component_1.FeedbackFormComponent,
                test_list_component_1.TestListComponent,
                reverse_pipe_1.ReversePipe,
                hot_pipe_1.HotPipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                angularfire2_1.AngularFireModule.initializeApp(exports.firebaseConfig),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
            ],
            providers: [
                feedback_service_1.FeedbackService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

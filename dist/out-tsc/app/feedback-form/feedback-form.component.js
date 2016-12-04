var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { AngularFire } from "angularfire2";
export var FeedbackFormComponent = (function () {
    function FeedbackFormComponent(formBuilder, af) {
        this.formBuilder = formBuilder;
        this.af = af;
    }
    FeedbackFormComponent.prototype.ngOnInit = function () {
        this.feedbackForm = this.formBuilder.group({
            title: ['', Validators.required],
            text: ['', Validators.required],
            date: Date.now()
        });
    };
    FeedbackFormComponent.prototype.submitFeedback = function (data) {
        data.vote = 0;
        this.af.database.list('/feedback').push(data);
        this.feedbackForm.reset();
    };
    FeedbackFormComponent = __decorate([
        Component({
            selector: 'feedback-form',
            templateUrl: './feedback-form.component.html',
            styleUrls: ['./feedback-form.component.css']
        }), 
        __metadata('design:paramtypes', [FormBuilder, AngularFire])
    ], FeedbackFormComponent);
    return FeedbackFormComponent;
}());
//# sourceMappingURL=/Users/jandor/Repositories/LocalHackDay-DMG/src/app/feedback-form/feedback-form.component.js.map
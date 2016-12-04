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
import { AngularFire } from "angularfire2";
import { FeedbackService } from "../feedback.service";
export var HotListComponent = (function () {
    function HotListComponent(af, feedbackService) {
        this.af = af;
        this.feedbackService = feedbackService;
        this.deleteLimit = -10;
        this.hot_list = af.database.list('/feedback', {
            query: {
                orderByChild: 'vote'
            }
        });
    }
    HotListComponent.prototype.agree = function (feedback) {
        if (!feedback.vote) {
            feedback.vote = 0;
        }
        feedback.vote++;
        this.hot_list.update(feedback.$key, { vote: feedback.vote });
    };
    HotListComponent.prototype.disagree = function (feedback) {
        if (!feedback.vote) {
            feedback.vote = 0;
        }
        feedback.vote--;
        if (feedback.vote <= this.deleteLimit) {
            this.hot_list.remove(feedback.$key);
        }
        else {
            this.hot_list.update(feedback.$key, { vote: feedback.vote });
        }
    };
    HotListComponent = __decorate([
        Component({
            selector: 'hot-list',
            templateUrl: './hot-list.component.html',
            styleUrls: ['./hot-list.component.css']
        }), 
        __metadata('design:paramtypes', [AngularFire, FeedbackService])
    ], HotListComponent);
    return HotListComponent;
}());
//# sourceMappingURL=/Users/jandor/Repositories/LocalHackDay-DMG/src/app/hot-list/hot-list.component.js.map
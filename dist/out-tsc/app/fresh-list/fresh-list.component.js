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
export var FreshListComponent = (function () {
    function FreshListComponent(af) {
        this.af = af;
        this.fresh_list = af.database.list('/feedback', {
            query: {
                orderByKey: true
            }
        });
    }
    FreshListComponent.prototype.ngOnInit = function () {
    };
    FreshListComponent.prototype.agree = function (feedback) {
        if (!feedback.vote) {
            feedback.vote = 0;
        }
        feedback.vote++;
        this.fresh_list.update(feedback.$key, { vote: feedback.vote });
    };
    FreshListComponent.prototype.disagree = function (feedback) {
        if (!feedback.vote) {
            feedback.vote = 0;
        }
        feedback.vote--;
        this.fresh_list.update(feedback.$key, { vote: feedback.vote });
    };
    FreshListComponent = __decorate([
        Component({
            selector: 'fresh-list',
            templateUrl: './fresh-list.component.html',
            styleUrls: ['./fresh-list.component.css']
        }), 
        __metadata('design:paramtypes', [AngularFire])
    ], FreshListComponent);
    return FreshListComponent;
}());
//# sourceMappingURL=/Users/jandor/Repositories/LocalHackDay-DMG/src/app/fresh-list/fresh-list.component.js.map
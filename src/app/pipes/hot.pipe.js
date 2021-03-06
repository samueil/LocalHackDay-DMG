"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HotPipe = (function () {
    function HotPipe() {
    }
    HotPipe.prototype.transform = function (value) {
        if (value) {
            return value.sort(function (n1, n2) { return n1 - n2; });
        }
    };
    HotPipe = __decorate([
        core_1.Pipe({
            name: 'hot'
        })
    ], HotPipe);
    return HotPipe;
}());
exports.HotPipe = HotPipe;

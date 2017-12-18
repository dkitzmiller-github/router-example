"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var lessonsData_1 = require("./lessonsData");
var router_1 = require("@angular/router");
var Playlist = (function () {
    function Playlist(route) {
        var _this = this;
        this.lessons = lessonsData_1.lessonsData.lessons;
        route.params.subscribe(function (params) { return _this.description = params['description']; });
    }
    return Playlist;
}());
Playlist = __decorate([
    core_1.Component({
        selector: 'playlist',
        template: "\n\n        <div class=\"playlist\">\n            <h1>{{description}}</h1>\n            <lessons-list [lessons]=\"lessons\"></lessons-list>        \n        </div>\n\n    "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], Playlist);
exports.Playlist = Playlist;
//# sourceMappingURL=playlist.component.js.map
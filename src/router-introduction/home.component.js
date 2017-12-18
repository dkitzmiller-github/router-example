"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var lessonsData_1 = require("./lessonsData");
var Home = (function () {
    function Home() {
        this.lessons = lessonsData_1.lessonsData.lessons;
    }
    return Home;
}());
Home = __decorate([
    core_1.Component({
        selector: 'home',
        template: "\n\n        <img class=\"youtube-logo card card-strong\" \n            src=\"https://i.ytimg.com/vi/s5y-4EpmfRQ/maxresdefault.jpg\">\n        \n        <div class=\"home-screen\">\n            <h2>Latest Lessons</h2>\n            <lessons-list [lessons]=\"lessons\"></lessons-list>        \n        </div>\n\n\n    "
    })
], Home);
exports.Home = Home;
//# sourceMappingURL=home.component.js.map
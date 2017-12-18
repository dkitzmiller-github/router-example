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
var router_1 = require("@angular/router");
var CoursesList = (function () {
    function CoursesList(router, route) {
        this.router = router;
        this.route = route;
        this.courses = [];
    }
    CoursesList.prototype.openCourse = function (course, $event) {
        this.router.navigateByUrl("/courses/" + course.id);
        $event.stopPropagation();
    };
    CoursesList.prototype.showCoursePlayList = function (course) {
        this.router.navigateByUrl("/courses(playlist:playlist;description=" + course.description + ")");
    };
    return CoursesList;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CoursesList.prototype, "courses", void 0);
CoursesList = __decorate([
    core_1.Component({
        selector: 'courses-list',
        template: "\n            <table class=\"courses-list card card-strong\">\n                <tr class=\"course-summary\" *ngFor=\"let course of courses\" \n                    (click)=\"showCoursePlayList(course)\">\n                    <td>\n                        <img class=\"lesson-logo\" \n                        src=\"https://material.angularjs.org/latest/img/icons/angular-logo.svg\">  \n                    </td>\n                    <td class=\"description\">\n                        {{course.description}}    \n                    </td>\n                    <td>\n                        <button (click)=\"openCourse(course, $event)\">View</button>\n                    </td>\n                </tr>\n           </table>\n           \n           <router-outlet name=\"chat\"></router-outlet>\n\n        "
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
], CoursesList);
exports.CoursesList = CoursesList;
//# sourceMappingURL=courses-list.component.js.map
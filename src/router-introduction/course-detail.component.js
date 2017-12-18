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
var CourseDetail = (function () {
    function CourseDetail(route) {
        var _this = this;
        this.lessons = lessonsData_1.lessonsData.lessons;
        this.dirty = false;
        this.paramsSub = route.params.subscribe(function (params) {
            _this.courseId = parseInt(params['id']);
            _this.dirty = false;
        });
        this.queryParamsSub = route.queryParams.subscribe(function (params) {
            _this.description = params['description'];
        });
        console.log('observers count', route.queryParams['observers'].length);
    }
    CourseDetail.prototype.previous = function () {
        return this.courseId - 1;
    };
    CourseDetail.prototype.next = function () {
        return this.courseId + 1;
    };
    CourseDetail.prototype.ngOnDestroy = function () {
        this.paramsSub.unsubscribe();
        this.queryParamsSub.unsubscribe();
    };
    return CourseDetail;
}());
CourseDetail = __decorate([
    core_1.Component({
        selector: 'course-detail',
        template: "\n\n        <div>\n            <h2>{{description}} Course id = {{courseId}}</h2>\n            <div class=\"nav-fields\">\n                <button [routerLink]=\"['/courses',previous()]\" class=\"nav-button\">Previous</button>\n                <button [routerLink]=\"['/courses', next()]\" class=\"nav-button\">Next</button>              \n                <input (keyup)=\"dirty = true\" placeholder=\"Edit Description\">            \n            </div>\n            <lessons-list [lessons]=\"lessons\"></lessons-list>        \n        </div>\n        \n\n"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], CourseDetail);
exports.CourseDetail = CourseDetail;
//# sourceMappingURL=course-detail.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var courses_list_component_1 = require("./courses-list.component");
var common_1 = require("@angular/common");
var courses_component_1 = require("./courses.component");
var course_detail_component_1 = require("./course-detail.component");
var course_detail_deactivate_guard_1 = require("./course-detail-deactivate.guard");
var course_detail_activate_guard_1 = require("./course-detail-activate.guard");
var router_1 = require("@angular/router");
var shared_module_1 = require("./shared.module");
var routerConfig = [
    {
        path: '',
        component: courses_component_1.Courses
    },
    {
        path: 'legacy-list',
        redirectTo: '/lessons',
        pathMatch: 'full'
    },
    {
        path: ':id',
        canActivate: [course_detail_activate_guard_1.CanCourseDetailActivate],
        canDeactivate: [course_detail_deactivate_guard_1.CanCourseDetailDeactivate],
        component: course_detail_component_1.CourseDetail
    }
];
var CoursesModule = (function () {
    function CoursesModule() {
    }
    return CoursesModule;
}());
CoursesModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule,
            router_1.RouterModule.forChild(routerConfig), shared_module_1.SharedModule],
        declarations: [courses_component_1.Courses, courses_list_component_1.CoursesList, course_detail_component_1.CourseDetail],
        exports: [courses_list_component_1.CoursesList],
        providers: [course_detail_deactivate_guard_1.CanCourseDetailDeactivate, course_detail_activate_guard_1.CanCourseDetailActivate]
    })
], CoursesModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CoursesModule;
//# sourceMappingURL=courses.module.js.map
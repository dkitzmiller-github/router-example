"use strict";
var Rx_1 = require("rxjs/Rx");
var coursesData_1 = require("./coursesData");
var CanCourseDetailActivate = (function () {
    function CanCourseDetailActivate() {
    }
    CanCourseDetailActivate.prototype.canActivate = function (route, state) {
        var subject = new Rx_1.Subject();
        setTimeout(function () {
            var index = route.params['id'] - 1;
            var course = coursesData_1.coursesData.courses[index];
            subject.next(course ? !course.pro : true);
            subject.complete();
        });
        return subject;
    };
    return CanCourseDetailActivate;
}());
exports.CanCourseDetailActivate = CanCourseDetailActivate;
//# sourceMappingURL=course-detail-activate.guard.js.map
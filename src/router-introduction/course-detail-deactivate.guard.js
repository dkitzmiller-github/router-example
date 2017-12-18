"use strict";
var CanCourseDetailDeactivate = (function () {
    function CanCourseDetailDeactivate() {
    }
    CanCourseDetailDeactivate.prototype.canDeactivate = function (component, route, state) {
        if (!component.dirty) {
            return true;
        }
        return confirm("Unsaved changes exist, do you want to exit ?");
    };
    return CanCourseDetailDeactivate;
}());
exports.CanCourseDetailDeactivate = CanCourseDetailDeactivate;
//# sourceMappingURL=course-detail-deactivate.guard.js.map
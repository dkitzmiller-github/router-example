"use strict";
var all_lessons_component_1 = require("./all-lessons.component");
var home_component_1 = require("./home.component");
var courses_router_config_1 = require("./courses-router-config");
var indexRoute = {
    path: "",
    component: home_component_1.Home
};
var fallbackRoute = {
    path: '**',
    component: home_component_1.Home
};
exports.routeConfig = [
    {
        path: 'home',
        component: home_component_1.Home
    }
].concat(courses_router_config_1.coursesRouterConfig, [
    {
        path: 'lessons',
        component: all_lessons_component_1.AllLessons
    },
    fallbackRoute,
    indexRoute
]);
//# sourceMappingURL=router-config.js.map
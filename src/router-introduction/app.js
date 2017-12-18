"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var router_config_1 = require("./router-config");
var shared_module_1 = require("./shared.module");
var home_component_1 = require("./home.component");
var playlist_component_1 = require("./playlist.component");
var all_lessons_component_1 = require("./all-lessons.component");
var App = (function () {
    function App() {
    }
    return App;
}());
App = __decorate([
    core_1.Component({
        selector: 'app',
        template: "\n\n  <header class=\"l-header v-center-parent\">\n    <img class=\"v-center\" routerLink=\"home\"\n        src=\"https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png\">\n    \n    <ul class=\"top-menu disable-link-styles\" \n        routerLinkActive=\"menu-active\" >\n        <li>\n            <a routerLink=\"\" \n            routerLinkActive=\"menu-active\" \n            [routerLinkActiveOptions]=\"{exact:true}\">Home</a>\n        </li>\n        <li>\n            <a routerLinkActive=\"menu-active\"  \n                routerLink=\"courses\">Courses</a>\n        </li>\n        <li>\n            <a routerLinkActive=\"menu-active\" \n                [routerLink]=\"['lessons']\">Lessons</a>\n        </li>\n    </ul>\n            \n  </header>\n\n  <main class=\"l-main l-sample-app\">\n    \n    <div>\n    \n        <div class=\"main-container\">\n            <div class=\"list\">\n                <router-outlet></router-outlet>            \n            </div>\n            <div class=\"list\">\n                <router-outlet name=\"playlist\"></router-outlet>\n            </div>        \n        </div>\n    \n    </div>\n\n  </main>\n\n        "
    })
], App);
exports.App = App;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [App, home_component_1.Home, playlist_component_1.Playlist, all_lessons_component_1.AllLessons],
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(router_config_1.routeConfig),
            shared_module_1.SharedModule
        ],
        bootstrap: [App]
    })
], AppModule);
exports.AppModule = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=app.js.map
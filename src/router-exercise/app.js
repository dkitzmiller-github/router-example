"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var router_config_1 = require("./router-config");
var dashboard_header_1 = require("./dashboard-header");
var page_views_by_browser_component_1 = require("./page-views-by-browser.component");
var page_views_pie_chart_component_1 = require("./page-views-pie-chart.component");
var impresssions_by_country_component_1 = require("./impresssions-by-country.component");
var App = (function () {
    function App() {
    }
    return App;
}());
App = __decorate([
    core_1.Component({
        selector: 'app',
        template: "\n\n  <header class=\"l-header v-center-parent\">\n    <img class=\"v-center\" routerLink=\"home\"\n        src=\"https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png\">\n            \n  </header>\n\n  <main class=\"l-main l-sample-app\">\n    \n    <div>\n    \n        <div class=\"main-container\">\n        \n            <router-outlet></router-outlet>\n            \n            <router-outlet name=\"section1\"></router-outlet>\n\n            <router-outlet name=\"section2\"></router-outlet>\n\n            <router-outlet name=\"section3\"></router-outlet>\n\n        </div>\n    \n    </div>\n\n  </main>\n\n        "
    })
], App);
exports.App = App;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_2.NgModule({
        declarations: [App, dashboard_header_1.DashboardHeader, page_views_by_browser_component_1.PageViewsByBrowserWidget, page_views_pie_chart_component_1.PageViewsPieChartWidget, impresssions_by_country_component_1.ImpressionsByCountryWidget],
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(router_config_1.routeConfig)],
        bootstrap: [App]
    })
], AppModule);
exports.AppModule = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=app.js.map
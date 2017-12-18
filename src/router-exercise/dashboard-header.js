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
var DashboardHeader = (function () {
    function DashboardHeader(router) {
        this.router = router;
    }
    DashboardHeader.prototype.setGraphs = function (g1, g2, g3) {
        console.log(g1, g2, g3);
        var sections = "";
        if (g1) {
            sections += "section1:section1";
        }
        if (g2) {
            if (sections) {
                sections += "//";
            }
            sections += "section2:section2";
        }
        if (g3) {
            if (sections) {
                sections += "//";
            }
            sections += "section3:section3";
        }
        var url = '/home';
        if (sections) {
            url += "(" + sections + ")";
        }
        console.log(url);
        this.router.navigateByUrl(url);
    };
    return DashboardHeader;
}());
DashboardHeader = __decorate([
    core_1.Component({
        selector: 'dashboard',
        template: "\n\n    <h1>Dashboard</h1>\n    <p>click on a checkbox to include a section</p>  \n          \n    <div class=\"toggle-buttons\">\n        <input class=\"graph-toggle\" type=\"checkbox\"\n            (click)=\"setGraphs(g1.checked, g2.checked, g3.checked)\"  #g1>Graph 1\n          \n        <input class=\"graph-toggle\" type=\"checkbox\" \n            (click)=\"setGraphs(g1.checked, g2.checked, g3.checked)\" #g2>Graph 2\n        \n        <input class=\"graph-toggle\" type=\"checkbox\" \n            (click)=\"setGraphs(g1.checked, g2.checked, g3.checked)\" #g3>Graph 3\n    </div>\n\n"
    }),
    __metadata("design:paramtypes", [router_1.Router])
], DashboardHeader);
exports.DashboardHeader = DashboardHeader;
//# sourceMappingURL=dashboard-header.js.map
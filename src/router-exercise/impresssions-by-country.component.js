"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ImpressionsByCountryWidget = (function () {
    function ImpressionsByCountryWidget() {
    }
    return ImpressionsByCountryWidget;
}());
ImpressionsByCountryWidget = __decorate([
    core_1.Component({
        selector: 'dashboard-section',
        template: "\n\n    <div>\n        <h2>Impressions By Country</h2>\n        <img class=\"card card-very-strong dashboard-section\" \n            src=\"/images/dashboard-section-3.png\">            \n    </div>  \n\n"
    })
], ImpressionsByCountryWidget);
exports.ImpressionsByCountryWidget = ImpressionsByCountryWidget;
//# sourceMappingURL=impresssions-by-country.component.js.map
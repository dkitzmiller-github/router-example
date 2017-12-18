"use strict";
var dashboard_header_1 = require("./dashboard-header");
var page_views_by_browser_component_1 = require("./page-views-by-browser.component");
var page_views_pie_chart_component_1 = require("./page-views-pie-chart.component");
var impresssions_by_country_component_1 = require("./impresssions-by-country.component");
exports.routeConfig = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: 'home',
        component: dashboard_header_1.DashboardHeader
    },
    {
        path: 'section1',
        component: page_views_by_browser_component_1.PageViewsByBrowserWidget,
        outlet: 'section1'
    },
    {
        path: 'section2',
        component: page_views_pie_chart_component_1.PageViewsPieChartWidget,
        outlet: 'section2'
    },
    {
        path: 'section3',
        component: impresssions_by_country_component_1.ImpressionsByCountryWidget,
        outlet: 'section3'
    }
];
//# sourceMappingURL=router-config.js.map
"use strict";
var playlist_component_1 = require("./playlist.component");
exports.coursesRouterConfig = [
    {
        path: 'courses',
        loadChildren: '/src/router-introduction/courses.module'
    },
    {
        path: 'playlist',
        component: playlist_component_1.Playlist,
        outlet: 'playlist'
    }
];
//# sourceMappingURL=courses-router-config.js.map
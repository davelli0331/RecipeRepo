require.config({
    baseUrl: 'Scripts/libraries',
    paths: {
        app: '../app',
        templates: '../templates',
        views: '../views'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "backbone"
        }
    }
});

require(['jquery', 'underscore', 'backbone', 'handlebars', 'views/appView'],
    function ($, _, Backbone, Handlebars, AppView) {
        'use strict';

        var appView = new AppView();
    });
define(['underscore', 'backbone', 'app/globalevents', 'app/systemstrings'], function (_, Backbone, GlobalEvents, SystemStrings) {
    'use strict';

    var recipeRouter = Backbone.Router.extend({
        routes: {
            "RecipeRepo/Recipe/Add": "add",
            "RecipeRepo/Recipe/:id": "details",
            "RecipeRepo/": "default"
        },

        details: function (id) {
            GlobalEvents.trigger("recipes:detail", id);
        },

        add: function () {
            GlobalEvents.trigger("recipes:add");
        },

        default: function () {
            GlobalEvents.trigger(SystemStrings.events.views.DefaultViewRequested)
        }
    });

    return recipeRouter;
});
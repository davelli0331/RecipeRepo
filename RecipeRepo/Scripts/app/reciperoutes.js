define(['underscore', 'backbone', 'app/globalevents'], function (_, Backbone, GlobalEvents) {
    'use strict';

    var recipeRouter = Backbone.Router.extend({
        routes: {
            "RecipeRepo/Recipe/Add": "add",
            "RecipeRepo/Recipe/:id": "details"
        },

        details: function (id) {
            GlobalEvents.trigger("recipes:detail", id);
        },

        add: function () {
            GlobalEvents.trigger("recipes:add");
        }
    });

    return recipeRouter;
});
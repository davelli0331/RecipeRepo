define(['underscore', 'backbone', 'app/globalevents'], function (_, Backbone, GlobalEvents) {
    'use strict';

    var recipeRouter = Backbone.Router.extend({
        routes: {
            "RecipeRepo/Recipe/:id": "details"
        },

        details: function (id) {
            GlobalEvents.trigger("recipes:detail", id);
        }
    });

    return recipeRouter;
});
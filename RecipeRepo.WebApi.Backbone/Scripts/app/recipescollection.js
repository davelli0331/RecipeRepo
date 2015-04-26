define(['app/recipe'], function (Recipe) {
    'use strict';

    var recipesCollection = Backbone.Collection.extend({
        model: Recipe,
        url: '/RecipeRepo/api/Recipes'
    });

    return recipesCollection;
});
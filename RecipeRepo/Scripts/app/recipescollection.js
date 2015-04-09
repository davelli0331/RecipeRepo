define(['app/recipe'], function (Recipe) {
    'use strict';

    var recipesCollection = Backbone.Collection.extend({
        model: Recipe,
        url: '/api/Recipes'
    });

    return recipesCollection;
});
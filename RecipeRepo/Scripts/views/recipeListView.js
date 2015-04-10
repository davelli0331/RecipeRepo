define(['jquery', 'underscore', 'backbone', 'handlebars', 'views/recipeView'], function ($, _, Backbone, Handlebars, RecipeView) {
    'use strict';

    return Backbone.View.extend({
        el: $('#div-search-results'),
        initialize: function () {
            if (!this.model) {
                throw 'RecipesCollection was not provided!';
            }
        },
        render: function () {
            this.$el.empty();

            var me = this;
            this.model.each(function (recipe) {
                var recipeView = new RecipeView({
                    model: recipe
                });
                recipeView.render();

                me.$el.append(recipeView.el);
            });
        }
    });
});
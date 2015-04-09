define(['app/recipescollection', 'views/recipeView'], function (RecipesCollection, RecipeView) {
    'use strict';

    var appView;

    appView = Backbone.View.extend({
        el: $("#div-body"),
        initialize: function () {
            this.searchInput = $('#text-search');
            this.searchResults = $('#div-search-results');

            this.recipes = new RecipesCollection();

            var me = this;
            this.recipes.fetch({
                success: function () {
                    me.render();
                }
            });
        },
        events: {
            "click button": "searchRecipes"
        },
        render: function () {
            var me = this;
            this.searchResults.empty();
            this.recipes.each(function (recipe) {
                me.addRecipe(recipe);
            });
        },
        addRecipe: function (recipe) {
            var recipeView = new RecipeView({
                model: recipe
            });
            recipeView.render();

            this.searchResults.append(recipeView.el);
        },
        searchRecipes: function () {
            var me = this;
            this.recipes.fetch({
                data: {
                    name: this.searchInput.val()
                },
                success: function () {
                    me.render();
                }
            });
        }
    });

    return appView;
});
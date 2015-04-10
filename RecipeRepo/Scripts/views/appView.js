define(['app/recipescollection', 'views/recipeListView'], function (RecipesCollection, RecipeListView) {
    'use strict';

    var appView;

    appView = Backbone.View.extend({
        el: $("#div-body"),
        initialize: function () {
            this.searchInput = $('#text-search');
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
            var reciplesListView = new RecipeListView({
                model: this.recipes
            });
            reciplesListView.render();

            this.$el.append(reciplesListView.el);
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
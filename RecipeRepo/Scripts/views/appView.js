define(['app/globalevents',
        'app/recipescollection',
        'views/recipeListView',
        'views/recipeDetailsView'],
    function (GlobalEvents, RecipesCollection, RecipeListView, RecipeDetailsView) {
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

                GlobalEvents.on('showRecipeDetailsClicked', this.showRecipeDetailView, this);
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
            },
            showRecipeDetailView: function (model) {
                var detailView = new RecipeDetailsView({
                    model: model
                });
                detailView.render();
                this.$el
                    .empty()
                    .append(detailView.el);
            }
        });

        return appView;
    });
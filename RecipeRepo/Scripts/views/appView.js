define(['jquery',
        'underscore',
        'backbone',
        'app/globalevents',
        'app/systemstrings',
        'app/recipescollection',
        'views/recipeListView',
        'views/recipeDetailsView',
        'views/recipeAddView'],
    function ($, _, Backbone, GlobalEvents, SystemStrings, RecipesCollection, RecipeListView, RecipeDetailsView, RecipeAddView) {
        'use strict';

        var appView;

        Backbone.history.start({
            pushState: true
        });

        appView = Backbone.View.extend({
            el: $("#div-views"),

            initialize: function () {
                this.searchInput = $('#text-search');
                this.recipes = new RecipesCollection();

                var me = this;

                this.recipes.fetch({
                    success: function () {
                        me.render();
                    }
                });

                GlobalEvents.on('recipes:detail', this.recipeDetail, this);
                GlobalEvents.on('recipes:add', this.addRecipe, this);
                GlobalEvents.on(SystemStrings.events.views.DefaultViewRequested, this.render, this);
            },

            events: {
                "click #button-search": "searchRecipes"
            },

            render: function () {
                var reciplesListView = new RecipeListView({
                    model: this.recipes
                });
                reciplesListView.render();

                this.$el
                    .empty()
                    .append(reciplesListView.el);
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

            recipeDetail: function (id) {
                var recipe = this.recipes.get(id),
                    detailView;

                if (recipe) {
                    detailView = new RecipeDetailsView({
                        model: recipe
                    });
                    detailView.render();
                    this.$el
                        .empty()
                        .append(detailView.el);
                }
            },

            addRecipe: function () {
                var addView = new RecipeAddView({
                    model: this.recipes
                });
                addView.render();

                this.$el
                    .empty()
                    .append(addView.el);
            }
        });

        return appView;
    });
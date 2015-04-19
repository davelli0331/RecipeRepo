define(['jquery',
        'underscore',
        'backbone',
        'anchorclickhandler',
        'app/globalevents',
        'app/recipescollection',
        'views/recipeListView',
        'views/recipeDetailsView',
        'views/recipeAddView'],
    function ($, _, Backbone, anchorClickHandler, GlobalEvents, RecipesCollection, RecipeListView, RecipeDetailsView, RecipeAddView) {
        'use strict';

        var appView;

        Backbone.history.start({
            pushState: true
        });

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

                GlobalEvents.on('recipes:detail', this.recipeDetail, this);
                GlobalEvents.on('recipes:add', this.addRecipe, this);
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
                var addView = new RecipeAddView();
                addView.render();

                this.$el
                    .empty()
                    .append(addView.el);
            }
        });

        return appView;
    });
/*global define*/
define(['jquery', 'underscore', 'backbone', 'handlebars', 'app/globalevents', 'app/recipe', 'text!templates/recipeDetails.html'],
    function ($, _, Backbone, Handlebars, GlobalEvents, Recipe, RecipeDetailsTemplate) {
        'use strict';

        var detailsView = Backbone.View.extend({
            template: Handlebars.compile(RecipeDetailsTemplate),

            render: function () {
                this.$el.append(this.template(this.model.toJSON()));
            },

            events: {
                "click #button-delete-recipe": "deleteRecipe"
            },

            deleteRecipe: function () {
                if (window.confirm('Are you sure you want to delete this recipe?') === true) {
                    this.model.destroy()
                        .done(function () {
                            Backbone.history.navigate('RecipeRepo/', {
                                trigger: true
                            });
                        })
                        .fail(function (response) {
                            window.alert('An error occurred while attempting to delete the recipe!');
                        });
                }
            }
        });

        return detailsView;
    });
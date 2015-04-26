define(['jquery',
        'underscore',
        'backbone',
        'app/globalevents',
        'app/systemstrings',
        'text!templates/recipeAdd.html'],
    function ($, _, Backbone, GlobalEvents, SystemStrings, addTemplate) {
        'use strict';

        var addView = Backbone.View.extend({
            render: function () {
                this.$el
                    .empty()
                    .append(addTemplate);
            },

            events: {
                "click #button-add-recipe": "addRecipe"
            },

            addRecipe: function () {
                this.recipeTitle = $('#recipe-name');
                this.recipeDescription = $('#recipe-description');

                this.model.create({
                    Title: this.recipeTitle.val(),
                    Description: this.recipeDescription.val()
                }, {
                    success: function () {
                        Backbone.history.navigate('RecipeRepo/', {
                            trigger: true
                        });
                    }
                })
            }
        });

        return addView;
    });
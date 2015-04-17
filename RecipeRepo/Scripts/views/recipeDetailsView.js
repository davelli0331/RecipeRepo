/*global define*/
define(['jquery', 'underscore', 'backbone', 'handlebars', 'app/recipe', 'text!templates/recipeDetails.html'],
    function ($, _, Backbone, Handlebars, Recipe, RecipeDetailsTemplate) {
        'use strict';

        var detailsView = Backbone.View.extend({
            template: Handlebars.compile(RecipeDetailsTemplate),
            render: function () {
                this.$el.append(this.template(this.model.toJSON()));
            }
        });

        return detailsView;
    });
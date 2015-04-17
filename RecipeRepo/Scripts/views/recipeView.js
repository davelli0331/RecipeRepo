define(['jquery', 'underscore', 'backbone', 'handlebars', 'app/globalevents', 'text!templates/list.html'],
    function ($, _, Backbone, Handlebars, GlobalEvents, itemTemplate) {
        'use strict';

        var RecipesView = Backbone.View.extend({
            tagName: 'li',
            template: Handlebars.compile(itemTemplate),
            events: {
                "click .clickable-link": "showRecipeDetails"
            },
            render: function () {
                this.$el.html(this.template(this.model.toJSON()));
            },
            showRecipeDetails: function () {
                GlobalEvents.trigger('showRecipeDetailsClicked', this.model);
            }
        });

        return RecipesView;
    });
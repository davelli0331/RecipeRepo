define(['jquery', 'underscore', 'backbone', 'handlebars'], function ($, _, Backbone, Handlebars) {
    'use strict';

    var RecipesView = Backbone.View.extend({
        tagName: 'li',
        template: Handlebars.compile($('#template-item').html()),
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });

    return RecipesView;
});
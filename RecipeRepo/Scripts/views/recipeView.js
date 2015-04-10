define(['jquery', 'underscore', 'backbone', 'handlebars', 'text!templates/list.html'], function ($, _, Backbone, Handlebars, itemTemplate) {
    'use strict';

    var RecipesView = Backbone.View.extend({
        tagName: 'li',
        //template: Handlebars.compile($('#template-item').html()),
        template: Handlebars.compile(itemTemplate),
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });

    return RecipesView;
});
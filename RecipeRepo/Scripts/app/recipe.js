define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
    'use strict';

    var recipe = Backbone.Model.extend({
        validate: function (attrs) {
            if (!attrs.Title) {
                return 'Title is required!'
            }
        }
    });

    return recipe;
});
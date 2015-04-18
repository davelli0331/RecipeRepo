define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
    'use strict';

    var recipe = Backbone.Model.extend({
        idAttribute: "Id",
        validate: function (attrs) {
            if (!attrs.Title) {
                return 'Title is required!'
            }
        }
    });

    return recipe;
});
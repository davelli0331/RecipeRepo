define(['jquery',
        'underscore',
        'backbone',
        'text!templates/recipeAdd.html'],
    function ($, _, Backbone, addTemplate) {
        'use strict';

        var addView = Backbone.View.extend({
            render: function () {
                this.$el
                    .empty()
                    .append(addTemplate);
            }
        });

        return addView;
    });
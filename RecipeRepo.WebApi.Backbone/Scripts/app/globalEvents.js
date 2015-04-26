define(['jQuery', 'underscore', 'backbone'], function ($, _, Backbone) {
    'use strict';

    var GlobalEvents = _.extend({}, Backbone.Events);
    return GlobalEvents;
});
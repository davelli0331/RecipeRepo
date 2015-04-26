define([], function () {
    'use strict';

    return {
        events: {
            model: {
                RecipeAdded: 'model:recipe:added'
            },
            views: {
                RecipeViewRequested: 'view:recipe:requested',
                DefaultViewRequested: 'view:default:requested'
            }
        }
    };
});
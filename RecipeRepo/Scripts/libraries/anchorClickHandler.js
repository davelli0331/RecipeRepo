define(['jquery', 'app/reciperoutes'], function ($, RecipeRoutes) {
    'use strict';

    var router = new RecipeRoutes({
        root: '/RecipeRepo'
    });

    $(document).on("click ", "a[href ^= '/']", function (event) {
        if (!event.shiftKey) {
            event.preventDefault();

            var href = $(this).attr('href');
            router.navigate(href, {
                trigger: true
            });

            return false;
        }
    });
});
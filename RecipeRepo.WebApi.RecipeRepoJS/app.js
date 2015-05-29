/// <reference path="C:\Solutions\RecipeRepo\Source\RecipeRepo.WebApi.RecipeRepoJS\RecipeRepo.js" />
(function () {

    var view = new Views.BaseView({
        model: {
            Title: "Test"
        },
        rootHtmlElement: $('#div-main-view'),
        template: Handlebars.compile($('#recipe-listing-template').html())
    });

    view.Render();

} ());
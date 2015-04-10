﻿using RecipeRepo.Domain;

namespace RecipeRepo.Tests.EntityBuilders
{
    public class RecipeBuilder : IRecipeEntityBuilder<Recipe, RecipeBuilder>
    {
        private readonly Recipe _recipe = new Recipe();

        public RecipeBuilder With(int id)
        {
            _recipe.Id = id;

            return this;
        }

        public RecipeBuilder With(string title = null, string description = null, double timeToPrepare = 0)
        {
            _recipe.Title = title;
            _recipe.Description = description;
            _recipe.TimeToPrepare = timeToPrepare;

            return this;
        }

        public Recipe Build()
        {
            return _recipe;
        }
    }
}

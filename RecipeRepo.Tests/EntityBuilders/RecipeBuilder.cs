using RecipeRepo.Domain;
using System.Collections.Generic;

namespace RecipeRepo.Tests.EntityBuilders
{
    public class RecipeBuilder : IRecipeEntityBuilder<Recipe, RecipeBuilder>
    {
        private readonly Recipe _recipe = new Recipe
        {
            Ingredients = new List<RecipeIngredient>()
        };

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

        internal RecipeBuilder Has(Ingredient ingredient, int quantity, string measurement)
        {
            _recipe.Ingredients.Add(new RecipeIngredient 
            {
                Recipe = _recipe,
                RecipeId = _recipe.Id,
                Ingredient = ingredient,
                IngredientId = ingredient.Id,
                Quantity = quantity,
                Measurement = measurement
            });

            return this;
        }
    }
}

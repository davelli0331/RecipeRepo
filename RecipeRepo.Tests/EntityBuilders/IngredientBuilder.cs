using RecipeRepo.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RecipeRepo.Tests.EntityBuilders
{
    internal class IngredientBuilder : IRecipeEntityBuilder<Ingredient, IngredientBuilder>
    {
        private Ingredient _ingredient = new Ingredient();

        public Ingredient Build()
        {
            return _ingredient;
        }

        public IngredientBuilder With(int id)
        {
            _ingredient.Id = id;

            return this;
        }

        public IngredientBuilder With(string name = null)
        {
            _ingredient.Name = name;
            return this;
        }
    }
}

using Newtonsoft.Json;
using RecipeRepo.Domain;
using RecipeRepo.Repository.Contracts;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace RecipeRepo.Repository.Json
{
    public class JsonRepository : IRepository
    {
        private readonly List<Recipe> _recipes;
        private readonly List<Ingredient> _ingredients;

        public const string JsonFolderLocation = @"C:\Repositories\";

        public IQueryable<Recipe> Recipes { get { return _recipes.AsQueryable(); } }
        public IQueryable<Ingredient> Ingredients { get { return _ingredients.AsQueryable(); } }

        public JsonRepository()
        {
            _recipes = JsonConvert.DeserializeObject<IEnumerable<Recipe>>(File.ReadAllText(JsonFolderLocation + "Recipes.json")).ToList();
            _ingredients = JsonConvert.DeserializeObject<IEnumerable<Ingredient>>(File.ReadAllText(JsonFolderLocation + "Ingredients.json")).ToList();
        }

        public IRepository Create<TEntity>(TEntity entity) where TEntity : class
        {
            var recipe = entity as Recipe;
            if (recipe != null)
            {
                recipe.Id = _recipes.Count + 1;
                _recipes.Add(recipe);
            }

            var ingredient = entity as Ingredient;
            if (ingredient != null)
            {
                ingredient.Id = _ingredients.Count + 1;
                _ingredients.Add(ingredient);
            }

            return this;
        }

        public IRepository SaveChanges()
        {
            File.WriteAllText(JsonFolderLocation + "Recipes.json", JsonConvert.SerializeObject(_recipes));
            File.WriteAllText(JsonFolderLocation + "Ingredients.json", JsonConvert.SerializeObject(_ingredients));

            return this;
        }

        public IRepository Update<TEntity>(TEntity entity)
        {
            var recipe = entity as Recipe;
            if (recipe != null)
            {
                var existing = _recipes.Single(r => r.Id == recipe.Id);
                existing.Title = recipe.Title;
                existing.Description = recipe.Description;
                existing.TimeToPrepare = recipe.TimeToPrepare;
            }

            return this;
        }

        public IRepository Delete<TEntity>(TEntity entity)
        {
            var recipe = entity as Recipe;
            if (recipe != null)
            {
                _recipes.RemoveAll(r => r.Id == recipe.Id);
            }

            return this;
        }



    }
}

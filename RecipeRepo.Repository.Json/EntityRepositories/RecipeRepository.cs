using Newtonsoft.Json;
using RecipeRepo.Domain;
using RecipeRepo.Repository.Contracts;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RecipeRepo.Repository.Json.EntityRepositories
{
    internal class RecipeRepository : IRepository
    {
        private readonly List<Recipe> _recipes;
        private const string fileLocation = JsonRepositoryStrings.JsonFolderLocation + JsonRepositoryStrings.RecipesFileName;
        
        internal RecipeRepository()
        {
            _recipes = JsonConvert.DeserializeObject<IEnumerable<Recipe>>(File.ReadAllText(fileLocation)).ToList();
        }

        public IQueryable<Recipe> Recipes
        {
            get { return _recipes.AsQueryable(); }
        }

        public IQueryable<Domain.Ingredient> Ingredients
        {
            get { throw new NotImplementedException(); }
        }

        public IRepository Create<TEntity>(TEntity entity) where TEntity : class
        {
            var recipe = entity as Recipe;
            recipe.Id = _recipes.Count + 1;

            _recipes.Add(recipe);

            return this;
        }

        public IRepository SaveChanges()
        {
            File.WriteAllText(fileLocation, 
                JsonConvert.SerializeObject(_recipes, Formatting.Indented, new JsonSerializerSettings
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                }));
                
            return this;
        }

        public IRepository Delete<TEntity>(TEntity entity)
        {
            var recipe = entity as Recipe;
            _recipes.RemoveAll(r => r.Id == recipe.Id);

            return this;
        }

        public IRepository Update<TEntity>(TEntity entity)
        {
            return this;
        }
    }
}

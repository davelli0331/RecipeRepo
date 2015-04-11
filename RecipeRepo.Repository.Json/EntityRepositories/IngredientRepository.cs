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
    internal class IngredientRepository : IRepository
    {
        private readonly List<Ingredient> _ingredients;

        internal IngredientRepository()
        {
            _ingredients = JsonConvert.DeserializeObject<IEnumerable<Ingredient>>(File.ReadAllText(JsonRepositoryStrings.JsonFolderLocation + JsonRepositoryStrings.IngredientsFileName)).ToList();
        }

        public IQueryable<Domain.Recipe> Recipes
        {
            get { throw new NotImplementedException(); }
        }

        public IQueryable<Domain.Ingredient> Ingredients
        {
            get { return _ingredients.AsQueryable(); }
        }

        public IRepository Create<TEntity>(TEntity entity) where TEntity : class
        {
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
            File.WriteAllText(JsonRepositoryStrings.JsonFolderLocation + JsonRepositoryStrings.IngredientsFileName, JsonConvert.SerializeObject(_ingredients));

            return this;    
        }

        public IRepository Delete<TEntity>(TEntity entity)
        {
            var ingredient = entity as Ingredient;
            _ingredients.RemoveAll(i => i.Id == ingredient.Id);

            return this;
        }

        public IRepository Update<TEntity>(TEntity entity)
        {
            return this;
        }
    }
}

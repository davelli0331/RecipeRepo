using Newtonsoft.Json;
using RecipeRepo.Domain;
using RecipeRepo.Repository.Contracts;
using RecipeRepo.Repository.Json.EntityRepositories;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace RecipeRepo.Repository.Json
{
    public class JsonRepository : IRepository
    {
        private readonly RecipeRepository _recipeRepository = new RecipeRepository();
        private readonly IngredientRepository _ingredientRepository = new IngredientRepository();

        private readonly Dictionary<Type, IRepository> _typeToRepositoryDictionary;

        public IQueryable<Recipe> Recipes { get { return _recipeRepository.Recipes; } }
        public IQueryable<Ingredient> Ingredients { get { return _ingredientRepository.Ingredients.AsQueryable(); } }

        public JsonRepository()
        {
            _typeToRepositoryDictionary = new Dictionary<Type, IRepository> 
            {
                { typeof(Recipe), _recipeRepository },
                { typeof(Ingredient), _ingredientRepository }
            };
        }

        public IRepository Create<TEntity>(TEntity entity) where TEntity : class
        {
            if (_typeToRepositoryDictionary.ContainsKey(typeof(TEntity)))
            {
                _typeToRepositoryDictionary[typeof(TEntity)].Create(entity);
            }

            return this;
        }

        public IRepository SaveChanges()
        {
            foreach (var repo in _typeToRepositoryDictionary.Values)
            {
                repo.SaveChanges();
            }

            return this;
        }

        public IRepository Update<TEntity>(TEntity entity)
        {
            return this;
        }

        public IRepository Delete<TEntity>(TEntity entity)
        {
            if (_typeToRepositoryDictionary.ContainsKey(typeof(TEntity)))
            {
                _typeToRepositoryDictionary[typeof(TEntity)].Delete(entity);
            }

            return this;
        }
    }
}

using RecipeRepo.Crud.Contracts.Retreive.Queries;
using RecipeRepo.Crud.Contracts.Retreive.QueryOptions;
using RecipeRepo.Domain;
using RecipeRepo.Repository.Contracts;
using System.Collections.Generic;
using System.Linq;

namespace RecipeRepo.Crud.Concrete.Queries
{
    public class RecipeQuery : IRecipeQuery
    {
        private readonly IRepository _repository;

        public RecipeQuery(IRepository repository)
        {
            _repository = repository;
        }

        public IEnumerable<Recipe> Get()
        {
            return _repository.Recipes;
        }

        public Recipe GetById(int Id)
        {
            return _repository.Recipes.SingleOrDefault(r => r.Id == Id);
        }

        public IEnumerable<Recipe> GetWhere(RecipeQueryOptions queryOptions)
        {
            var queryable = _repository.Recipes;

            if (!string.IsNullOrEmpty(queryOptions.TitleContains))
            {
                queryable = queryable.Where(r => r.Title.Contains(queryOptions.TitleContains));
            }

            return queryable;                
        }
    }
}

using RecipeRepo.Crud.Concrete.Queries;
using RecipeRepo.Crud.Contracts.Retreive.Queries;
using RecipeRepo.Crud.Contracts.Retreive.QueryGenerator.Abstract;
using RecipeRepo.Repository.Contracts;

namespace RecipeRepo.Crud.Concrete
{
    public class QueryGenerator : IQueryGenerator
    {
        private readonly IRepository _repository;

        public QueryGenerator(IRepository repository)
        {
            _repository = repository;
        }

        public IRecipeQuery GenerateRecipeQuery()
        {
            return new RecipeQuery(_repository);
        }

    }
}

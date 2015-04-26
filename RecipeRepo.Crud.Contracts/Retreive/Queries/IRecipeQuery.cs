using RecipeRepo.Crud.Contracts.Retreive.QueryGenerator.Abstract;
using RecipeRepo.Crud.Contracts.Retreive.QueryOptions;
using RecipeRepo.Domain;

namespace RecipeRepo.Crud.Contracts.Retreive.Queries
{
    public interface IRecipeQuery : IQuery<Recipe, RecipeQueryOptions>
    {
    }
}

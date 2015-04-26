using RecipeRepo.Crud.Contracts.Retreive.Queries;

namespace RecipeRepo.Crud.Contracts.Retreive.QueryGenerator.Abstract
{
    public interface IQueryGenerator
    {
        IRecipeQuery GenerateRecipeQuery();
    }
}

using RecipeRepo.Crud.Contracts.Retreive.QueryGenerator.Abstract;

namespace RecipeRepo.WebApi.Controllers
{
    public interface IRequirements
    {
        IQueryGenerator QueryGenerator { get; }
    }
}

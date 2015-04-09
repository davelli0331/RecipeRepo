using RecipeRepo.Crud.Contracts.Retreive.QueryGenerator.Abstract;
using RecipeRepo.WebApi.Controllers;

namespace RecipeRepo.WebApi
{
    public class ControllerRequirements : IRequirements
    {
        public IQueryGenerator QueryGenerator { get;  private set; }

        public ControllerRequirements(IQueryGenerator queryGenerator)
        {
            QueryGenerator = queryGenerator;
        }
    }
}
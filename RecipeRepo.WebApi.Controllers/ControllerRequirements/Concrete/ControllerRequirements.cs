using RecipeRepo.Crud.Contracts.Retreive.QueryGenerator.Abstract;
using RecipeRepo.WebApi.Controllers;
using RecipeRepo.WebApi.Controllers.ControllerRequirements.Abstract;

namespace RecipeRepo.WebApi.Controllers.ControllerRequirements.Concrete
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
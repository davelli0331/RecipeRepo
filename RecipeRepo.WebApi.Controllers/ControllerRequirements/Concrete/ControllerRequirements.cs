using RecipeRepo.Crud.Contracts.CreateUpdateDelete;
using RecipeRepo.Crud.Contracts.Retreive.QueryGenerator.Abstract;
using RecipeRepo.WebApi.Controllers.ControllerRequirements.Abstract;

namespace RecipeRepo.WebApi.Controllers.ControllerRequirements.Concrete
{
    public class ControllerRequirements : IRequirements
    {
        public IQueryGenerator QueryGenerator { get;  private set; }
        public ICommandGenerator CommandGenerator { get { throw new System.NotImplementedException(); } }

        public ControllerRequirements(IQueryGenerator queryGenerator)
        {
            QueryGenerator = queryGenerator;
        }
    }
}
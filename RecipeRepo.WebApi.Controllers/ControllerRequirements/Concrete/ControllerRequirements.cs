using RecipeRepo.Crud.Contracts.CreateUpdateDelete;
using RecipeRepo.Crud.Contracts.Retreive.QueryGenerator.Abstract;
using RecipeRepo.WebApi.Controllers.ControllerRequirements.Abstract;

namespace RecipeRepo.WebApi.Controllers.ControllerRequirements.Concrete
{
    public class ControllerRequirements : IRequirements
    {
        public IQueryGenerator QueryGenerator { get;  private set; }
        public ICommandGenerator CommandGenerator { get; private set; }

        public ControllerRequirements(IQueryGenerator queryGenerator, ICommandGenerator commandGenerator)
        {
            QueryGenerator = queryGenerator;
            CommandGenerator = commandGenerator;
        }
    }
}
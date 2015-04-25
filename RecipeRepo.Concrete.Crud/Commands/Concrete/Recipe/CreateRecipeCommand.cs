using RecipeRepo.Crud.Concrete.Commands.Abstract;
using RecipeRepo.Domain;
using RecipeRepo.Repository.Contracts;

namespace RecipeRepo.Crud.Concrete.Commands.RecipeCommands
{
    public class CreateRecipeCommand : BaseCommand
    {
        private readonly Recipe _recipe;

        public CreateRecipeCommand(IRepository repository, Recipe recipe)
            : base(repository)
        {
            Repository = repository;
            _recipe = recipe;
        }

        protected override void ExecuteCommand()
        {
            Repository
                .Create(_recipe)
                .SaveChanges();
        }
    }
}

using RecipeRepo.Domain;
using RecipeRepo.Repository.Contracts;

namespace RecipeRepo.Crud.Concrete.Commands.RecipeCommands
{
    public class CreateRecipeCommand
    {
        private readonly IRepository Repository;
        private readonly Recipe _recipe;

        public CreateRecipeCommand(IRepository repository, Recipe recipe)
        {
            Repository = repository;
            _recipe = recipe;
        }

        public int Execute()
        {
            Repository
                .Create(_recipe)
                .SaveChanges();

            return _recipe.Id;
        }
    }
}

using RecipeRepo.Crud.Concrete.Commands.Abstract;
using RecipeRepo.Domain;
using RecipeRepo.Repository.Contracts;

namespace RecipeRepo.Crud.Concrete.Commands.RecipeCommands
{
    public class CreateRecipeCommand : BaseCommand
    {
        private readonly Recipe[] _recipe;

        public CreateRecipeCommand(IRepository repository, params Recipe[] recipe)
            : base(repository)
        {
            Repository = repository;
            _recipe = recipe;
        }

        protected override void ExecuteCommand()
        {
            foreach (var recipe in _recipe)
            {
                Repository.Create(recipe);
            }
            
            Repository.SaveChanges();
        }
    }
}

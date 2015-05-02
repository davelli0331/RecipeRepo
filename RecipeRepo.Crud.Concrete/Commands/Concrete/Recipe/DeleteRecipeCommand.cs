using RecipeRepo.Crud.Concrete.Commands.Abstract;
using RecipeRepo.Domain;
using RecipeRepo.Repository.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RecipeRepo.Crud.Concrete.Commands.Concrete.RecipeCommands
{
    public class DeleteRecipeCommand : BaseCommand
    {
        private Recipe _recipe;

        public DeleteRecipeCommand(IRepository repository, Recipe recipe)
            : base(repository)
        {
            _recipe = recipe;
        }

        protected override void ExecuteCommand()
        {
            Repository
                .Delete(_recipe)
                .SaveChanges();
        }
    }
}

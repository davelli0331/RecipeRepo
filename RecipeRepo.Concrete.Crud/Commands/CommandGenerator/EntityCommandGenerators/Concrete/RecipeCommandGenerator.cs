using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RecipeRepo.Crud.Concrete.Commands.CommandGenerator.EntityCommandGenerators.Abstract;
using RecipeRepo.Domain;
using RecipeRepo.Repository.Contracts;
using RecipeRepo.Crud.Contracts.CreateUpdateDelete;
using RecipeRepo.Crud.Concrete.Commands.RecipeCommands;

namespace RecipeRepo.Crud.Concrete.Commands.CommandGenerator.EntityCommandGenerators.Concrete
{
    internal class RecipeCommandGenerator : IEntityCommandGenerator<Recipe>
    {
        private IRepository Repository;
        private IEnumerable<Recipe> Recipes;

        internal RecipeCommandGenerator(IRepository repository, IEnumerable<Recipe> recipes)
        {
            Repository = repository;
            Recipes = recipes;
        }

        public ICommand ThatWill(CommandType commandType)
        {
            switch (commandType)
            {
                case CommandType.Create:
                    return new CreateRecipeCommand(Repository, Recipes.Single());

                default:
                    throw new ArgumentException("commandType");
            }
        }
    }
}

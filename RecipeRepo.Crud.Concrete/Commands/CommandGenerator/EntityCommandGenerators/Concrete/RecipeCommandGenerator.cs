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
using RecipeRepo.Crud.Concrete.Commands.Concrete.RecipeCommands;

namespace RecipeRepo.Crud.Concrete.Commands.CommandGenerator.EntityCommandGenerators.Concrete
{
    internal class RecipeCommandGenerator : IEntityCommandGenerator<Recipe>
    {
        private IRepository Repository;
        private IEnumerable<Recipe> Recipes;

        private Dictionary<CommandType, Func<IRepository, Recipe, ICommand>> _commandTypeToCommandMapping = new Dictionary<CommandType, Func<IRepository, Recipe, ICommand>> 
        {
            { CommandType.Create, (IRepository repository, Recipe recipe) => new CreateRecipeCommand(repository, recipe) },
            { CommandType.Delete, (IRepository repository, Recipe recipe) => new DeleteRecipeCommand(repository, recipe) }
        };

        internal RecipeCommandGenerator(IRepository repository, IEnumerable<Recipe> recipes)
        {
            Repository = repository;
            Recipes = recipes;
        }

        public ICommand ThatWill(CommandType commandType)
        {
            return _commandTypeToCommandMapping[commandType](Repository, Recipes.Single());
        }
    }
}

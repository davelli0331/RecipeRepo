using RecipeRepo.Crud.Concrete.Commands.CommandGenerator.EntityCommandGenerators.Abstract;
using RecipeRepo.Crud.Concrete.Commands.CommandGenerator.EntityCommandGenerators.Concrete;
using RecipeRepo.Crud.Contracts.CreateUpdateDelete;
using RecipeRepo.Domain;
using RecipeRepo.Repository.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RecipeRepo.Crud.Concrete.Commands.CommandGenerator.Concrete
{
    public class CommandGenerator : ICommandGenerator
    {
        private IRepository _repository;

        public CommandGenerator(IRepository repository)
        {
            _repository = repository;
        }

        public IEntityCommandGenerator<TEntity> For<TEntity>(params TEntity[] recipeEntity)
        {
            if (typeof(TEntity) == typeof(Recipe))
            {
                return (IEntityCommandGenerator<TEntity>) new RecipeCommandGenerator(_repository, recipeEntity.Cast<Recipe>());
            }

            throw new ArgumentException("TEntity");
        }
    }
}

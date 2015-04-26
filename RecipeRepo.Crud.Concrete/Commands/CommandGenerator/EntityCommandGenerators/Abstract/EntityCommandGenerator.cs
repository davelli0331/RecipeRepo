using RecipeRepo.Crud.Contracts.CreateUpdateDelete;
using RecipeRepo.Repository.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RecipeRepo.Crud.Concrete.Commands.CommandGenerator.EntityCommandGenerators.Abstract
{
    internal abstract class EntityCommandGenerator
    {
        protected IRepository Repository;
        protected CommandType CommandType;

        internal EntityCommandGenerator(IRepository repository)
        {
            Repository = repository;
        }
    }
}

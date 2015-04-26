using RecipeRepo.Crud.Contracts.CreateUpdateDelete;
using RecipeRepo.Repository.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RecipeRepo.Crud.Concrete.Commands.Abstract
{
    public abstract class BaseCommand : ICommand
    {
        protected IRepository Repository;

        internal BaseCommand(IRepository repository)
        {
            Repository = repository;
        }

        public void Execute()
        {
            ExecuteCommand();
        }

        protected abstract void ExecuteCommand();
    }
}

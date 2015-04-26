using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RecipeRepo.Repository.Contracts;

namespace RecipeRepo.Crud.Contracts.CreateUpdateDelete
{
    public interface ICommandGenerator
    {
        IEntityCommandGenerator<TEntity> For<TEntity>(params TEntity[] recipeEntity);
    }

    public interface IEntityCommandGenerator<TEntity>
    {
        ICommand ThatWill(CommandType commandType);
    }
}

using System.Collections.Generic;

namespace RecipeRepo.Crud.Contracts.Retreive.QueryGenerator.Abstract
{
    public interface IQuery<TEntity, TQueryOptions>
        where TQueryOptions : IQueryOptions<TEntity>
    {
        IEnumerable<TEntity> Get();
        TEntity GetById(int id);
        IEnumerable<TEntity> GetWhere(TQueryOptions queryOptions);
    }
}

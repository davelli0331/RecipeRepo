using RecipeRepo.Domain;
using System.Linq;

namespace RecipeRepo.Repository.Contracts
{
    public interface IRepository
    {
        IQueryable<Recipe> Recipes { get; }
        IQueryable<Ingredient> Ingredients { get; }

        IRepository Create<TEntity>(TEntity _recipe) where TEntity : class;
        IRepository SaveChanges();
        IRepository Delete<TEntity>(TEntity entity);
        IRepository Update<TEntity>(TEntity entity);
    }
}

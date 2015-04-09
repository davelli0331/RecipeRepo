using System;
namespace RecipeRepo.Tests.EntityBuilders
{
    public interface IRecipeEntityBuilder<TEntity, TEntityBuilder>
    {
        TEntity Build();
        TEntityBuilder With(int id);
    }
}

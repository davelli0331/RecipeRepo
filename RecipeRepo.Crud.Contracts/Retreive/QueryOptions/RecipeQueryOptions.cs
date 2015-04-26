using RecipeRepo.Crud.Contracts.Retreive.QueryGenerator.Abstract;
using RecipeRepo.Domain;

namespace RecipeRepo.Crud.Contracts.Retreive.QueryOptions
{
    public class RecipeQueryOptions : IQueryOptions<Recipe>
    {
        public string TitleContains { get; set; }
    }
}

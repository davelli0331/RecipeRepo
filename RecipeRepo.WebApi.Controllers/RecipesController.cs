using RecipeRepo.Crud.Contracts.Retreive.QueryOptions;
using System.Net.Http;

namespace RecipeRepo.WebApi.Controllers
{
    public class RecipesController : BaseController
    {
        public RecipesController(IRequirements requirements) : base(requirements) { }

        public HttpResponseMessage Get(string name = null)
        {
            return Request.CreateResponse(ControllerRequirements.QueryGenerator
                .GenerateRecipeQuery()
                .GetWhere(new RecipeQueryOptions
                {
                    TitleContains = name
                }));
        }
    }
}

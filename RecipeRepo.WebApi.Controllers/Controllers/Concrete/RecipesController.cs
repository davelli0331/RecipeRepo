using RecipeRepo.Crud.Contracts.Retreive.QueryOptions;
using RecipeRepo.WebApi.Controllers.Abstract;
using RecipeRepo.WebApi.Controllers.ControllerRequirements.Abstract;
using System.Net.Http;

namespace RecipeRepo.WebApi.Controllers.Concrete
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

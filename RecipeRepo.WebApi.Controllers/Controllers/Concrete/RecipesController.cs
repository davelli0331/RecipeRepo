using RecipeRepo.Crud.Contracts.Retreive.QueryOptions;
using RecipeRepo.WebApi.Controllers.Abstract;
using RecipeRepo.WebApi.Controllers.ControllerRequirements.Abstract;
using System.Net.Http;

namespace RecipeRepo.WebApi.Controllers.Concrete
{
    public class RecipesController : BaseController
    {
        public RecipesController(IRequirements requirements) : base(requirements) { }

        public HttpResponseMessage Get(int? id = null, string name = null)
        {
            var query = ControllerRequirements.QueryGenerator
                .GenerateRecipeQuery();

            if (id.HasValue)
            {
                return Request.CreateResponse(query.GetById(id.Value));
            }

            return Request.CreateResponse(query
                .GetWhere(new RecipeQueryOptions
                {
                    TitleContains = name
                }));
        }
    }
}

using RecipeRepo.Crud.Contracts.CreateUpdateDelete;
using RecipeRepo.Crud.Contracts.Retreive.QueryOptions;
using RecipeRepo.Domain;
using RecipeRepo.WebApi.Controllers.Abstract;
using RecipeRepo.WebApi.Controllers.ControllerRequirements.Abstract;
using RecipeRepo.WebApi.Controllers.JsonResponses.Concrete;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Linq;

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

        public HttpResponseMessage Post(Recipe recipe)
        {
            var command = ControllerRequirements.CommandGenerator
                .For(recipe)
                .ThatWill(CommandType.Create);

            command.Execute();

            return Request.CreateResponse(recipe);
        }

        public HttpResponseMessage Delete(int id)
        {
            ControllerRequirements.CommandGenerator
                .For(new Recipe { Id = id })
                .ThatWill(CommandType.Delete)
                .Execute();

            return Request.CreateResponse(JsonResponse.CreateSuccessResponse());
        }
    }
}

using RecipeRepo.WebApi.Controllers.ControllerRequirements.Abstract;
using System.Web.Http;

namespace RecipeRepo.WebApi.Controllers.Abstract
{
    public class BaseController : ApiController
    {
        protected readonly IRequirements ControllerRequirements;

        public BaseController(IRequirements requirements)
        {
            ControllerRequirements = requirements;
        }
    }
}

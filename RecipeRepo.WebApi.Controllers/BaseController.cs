using System.Web.Http;

namespace RecipeRepo.WebApi.Controllers
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

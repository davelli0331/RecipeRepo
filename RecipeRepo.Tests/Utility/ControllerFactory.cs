using RecipeRepo.WebApi.Controllers;
using System;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace RecipeRepo.Tests.Utility
{
    internal static class ControllerFactory
    {
        internal static TController CreateController<TController>(Func<TController> constructorDelegate) where TController : BaseController
        {
            var controller = constructorDelegate();

            controller.Request = new HttpRequestMessage();
            controller.RequestContext = new HttpRequestContext
            {
                Configuration = new HttpConfiguration()
            };

            return controller;
        }
    }
}

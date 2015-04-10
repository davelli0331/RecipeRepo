using Ninject;
using RecipeRepo.Crud.Concrete;
using RecipeRepo.Crud.Contracts.Retreive.QueryGenerator.Abstract;
using RecipeRepo.Repository.Contracts;
using RecipeRepo.Repository.Json;
using RecipeRepo.WebApi.Controllers;
using RecipeRepo.WebApi.Controllers.ControllerRequirements.Abstract;
using RecipeRepo.WebApi.Controllers.ControllerRequirements.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RecipeRepo.WebApi.DependencyResolution
{
    public static class DependencyConfiguration
    {
        public static void Configure(IKernel kernel)
        {
            kernel
                .Bind<IRepository>()
                .To<JsonRepository>();

            kernel
                .Bind<IQueryGenerator>()
                .To<QueryGenerator>();

            kernel
                .Bind<IRequirements>()
                .To<ControllerRequirements>();
        }
    }
}

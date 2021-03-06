﻿using RecipeRepo.Crud.Contracts.CreateUpdateDelete;
using RecipeRepo.Crud.Contracts.Retreive.QueryGenerator.Abstract;

namespace RecipeRepo.WebApi.Controllers.ControllerRequirements.Abstract
{
    public interface IRequirements
    {
        IQueryGenerator QueryGenerator { get; }
        ICommandGenerator CommandGenerator { get; }
    }
}

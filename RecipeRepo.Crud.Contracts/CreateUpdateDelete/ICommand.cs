﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RecipeRepo.Crud.Contracts.CreateUpdateDelete
{
    public interface ICommand
    {
        void Execute();
    }
}

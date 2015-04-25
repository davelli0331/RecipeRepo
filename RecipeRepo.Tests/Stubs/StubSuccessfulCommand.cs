using RecipeRepo.Crud.Contracts.CreateUpdateDelete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RecipeRepo.Tests.Stubs
{
    public class StubSuccessfulCommand : ICommand
    {
        public void Execute()
        {
        }
    }
}

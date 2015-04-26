using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using RecipeRepo.Crud.Contracts.CreateUpdateDelete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RecipeRepo.Crud.Concrete.Commands.CommandGenerator.Concrete;
using RecipeRepo.Repository.Contracts;
using RecipeRepo.Domain;
using RecipeRepo.Crud.Concrete.Commands.RecipeCommands;

namespace RecipeRepo.Tests.Commands
{
    [TestClass]
    public class CommandGeneratorTests
    {
        private Mock<IRepository> _mockRepository = new Mock<IRepository>();

        [TestMethod]
        public void CommandGenerator_Generate_Create_Recipe_Command_Succeeds()
        {
            var generator = new CommandGenerator(_mockRepository.Object);

            var command = generator
                .For(new Recipe
                {
                    Id = 1,
                    TimeToPrepare = 1.5,
                    Title = "Test title",
                    Description = "Test descriptoin"
                })
                .ThatWill(CommandType.Create);

            Assert.IsNotNull(command);
            Assert.IsInstanceOfType(command, typeof(CreateRecipeCommand));
        }
    }
}

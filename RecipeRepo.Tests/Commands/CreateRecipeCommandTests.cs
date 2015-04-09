using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using RecipeRepo.Crud.Concrete.Commands.RecipeCommands;
using RecipeRepo.Domain;
using RecipeRepo.Repository.Contracts;

namespace RecipeRepo.Tests.Commands
{
    [TestClass]
    public class CreateRecipeCommandTests
    {
        private readonly Mock<IRepository> _mockRepository = new Mock<IRepository>();

        [TestInitialize]
        public void InitializeCommandTest()
        {
            _mockRepository
                .Setup(r => r.Create(It.IsAny<Recipe>()))
                .Returns(_mockRepository.Object);
        }

        [TestMethod]
        public void CreateRecipeCommand_Succeeds()
        {
            var command = new CreateRecipeCommand(_mockRepository.Object, new Recipe 
            {
                Id = 1,
                Title = "Homemade Pizza",
                Description = "Pizza Made At Home",
                TimeToPrepare = 1.5
            });
            var result = command.Execute();

            Assert.AreEqual(1, result);

            _mockRepository.Verify(r => r.Create(It.Is<Recipe>(rec =>
                rec.Id == 1 &&
                rec.Title == "Homemade Pizza" &&
                rec.Description == "Pizza Made At Home" &&
                rec.TimeToPrepare == 1.5)), Times.Once());

            _mockRepository.Verify(r => r.SaveChanges(), Times.Once());
        }
    }
}

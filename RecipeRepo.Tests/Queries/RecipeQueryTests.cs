using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using RecipeRepo.Crud.Concrete.Queries;
using RecipeRepo.Crud.Contracts.Retreive.QueryOptions;
using RecipeRepo.Domain;
using RecipeRepo.Repository.Contracts;
using System.Collections.Generic;
using System.Linq;

namespace RecipeRepo.Tests.Queries
{
    [TestClass]
    public class RecipeQueryTests
    {
        private readonly Mock<IRepository> _mockRepository = new Mock<IRepository>();

        [TestInitialize]
        public void InitializeRepository()
        {
            var recipes = new List<Recipe>();

            for (int i = 1; i <= 100; i++)
            {
                recipes.Add(new Recipe
                {
                    Id = i,
                    Title = i.ToString(),
                    Description = "Description: " + i,
                    TimeToPrepare = i
                });
            }

            _mockRepository
                .Setup(r => r.Recipes)
                .Returns(recipes.AsQueryable());
        }

        [TestMethod]
        public void RecipeQuery_Get_All_Succeeds()
        {
            var recipes = new RecipeQuery(_mockRepository.Object)
                .Get();

            Assert.AreEqual(100, recipes.Count());
            Assert.IsTrue(recipes.All(r => r.Id >= 1 && r.Id <= 100));
        }

        [TestMethod]
        public void RecipeQuery_Get_By_Id_Succeeds()
        {
            var recipe = new RecipeQuery(_mockRepository.Object)
                .GetById(20);

            Assert.IsNotNull(recipe);
            Assert.AreEqual(20, recipe.Id);
            Assert.AreEqual("20", recipe.Title);
            Assert.AreEqual("Description: 20", recipe.Description);
            Assert.AreEqual(20, recipe.TimeToPrepare);
        }

        [TestMethod]
        public void RecipeQuery_Get_Where_Succeeds()
        {
            var recipes = new RecipeQuery(_mockRepository.Object)
                .GetWhere(new RecipeQueryOptions 
                {
                    TitleContains = "50"                
                });

            Assert.IsNotNull(recipes);
            Assert.AreEqual(1, recipes.Count());

            var recipe = recipes.Single();

            Assert.AreEqual(50, recipe.Id);
            Assert.AreEqual(50, recipe.TimeToPrepare);
        }
    }
}

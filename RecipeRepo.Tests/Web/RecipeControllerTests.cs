using Microsoft.VisualStudio.TestTools.UnitTesting;
using RecipeRepo.Domain;
using RecipeRepo.Tests.EntityBuilders;
using RecipeRepo.Tests.Utility;
using RecipeRepo.WebApi.Controllers.Concrete;
using System.Collections.Generic;
using System.Linq;

namespace RecipeRepo.Tests.Web
{
    [TestClass]
    public class RecipeControllerTests : BaseControllerTest
    {
        [TestInitialize]
        public void Initialize()
        {
            SetupScaffolding();
        }

        [TestMethod]
        public void RecipeController_Get_Succeeds()
        {
            SetRecipes(new List<Recipe> 
                {
                    new Recipe
                    {
                        Id = 1,
                        Title = "Homemade Pizza",
                        Description = "Pizza Made At Home",
                        TimeToPrepare = 1.5
                    }                
                });

            var controller = ControllerFactory.CreateController(() => new RecipesController(_mockRequirements.Object));
            var response = controller.Get();

            var recipe = Deserialize<IEnumerable<Recipe>>(response.Content).Single();

            Assert.AreEqual(1, recipe.Id);
            Assert.AreEqual("Homemade Pizza", recipe.Title);
            Assert.AreEqual("Pizza Made At Home", recipe.Description);
            Assert.AreEqual(1.5, recipe.TimeToPrepare);
        }

        [TestMethod]
        public void RecipeController_Get_By_Name_Succeeds()
        {
            SetRecipes(new List<Recipe> 
            { 
                new RecipeBuilder().With(1).With("Test 1", "This is a test recipe 1", 1.5).Build(),
                new RecipeBuilder().With(2).With("Test 2", "This is a test recipe 2", 3.0).Build()
            });

            var controller = ControllerFactory.CreateController(() => new RecipesController(_mockRequirements.Object));
            var response = controller.Get(null, "Test 2");

            var recipe = Deserialize<IEnumerable<Recipe>>(response.Content).Single();

            Assert.AreEqual(2, recipe.Id);
            Assert.AreEqual("Test 2", recipe.Title);
        }

        [TestMethod]
        public void RecipeController_Get_By_Id_Succeeds()
        {
            SetRecipes(new List<Recipe> 
            { 
                new RecipeBuilder().With(1).With("Test 1", "This is a test recipe 1", 1.5).Build(),
                new RecipeBuilder().With(2).With("Test 2", "This is a test recipe 2", 3.0).Build()
            });

            var controller = ControllerFactory.CreateController(() => new RecipesController(_mockRequirements.Object));
            var response = controller.Get(2);

            var recipe = Deserialize<Recipe>(response.Content);

            Assert.AreEqual(2, recipe.Id);
            Assert.AreEqual("Test 2", recipe.Title);
        }
    }
}

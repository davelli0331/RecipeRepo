using Microsoft.VisualStudio.TestTools.UnitTesting;
using RecipeRepo.Domain;
using RecipeRepo.Repository.Json;
using System.IO;
using System.Linq;

namespace RecipeRepo.Tests.Integration.Repositories
{
    [TestClass]
    public class JsonRepositoryTests
    {
        private string _existingJson;

        [TestInitialize]
        public void Initialize()
        {
            // cache the existing JSON
            _existingJson = File.ReadAllText(JsonRepository.JsonFolderLocation + "Recipes.json");

            File.WriteAllText(JsonRepository.JsonFolderLocation + "Recipes.json", "[{Id:\"1\",Title:\"Homemade Pizza\",Description:\"Pizza made at home\",TimeToPrepare:\"1.5\"},{Id:\"2\",Title:\"Almond Milk Biscuits\",Description:\"Biscuits made with almond milk\",TimeToPrepare:\"1.0\"}]");
        }

        [TestCleanup]
        public void Cleanup()
        {
            // reset JSON back to original
            File.WriteAllText(JsonRepository.JsonFolderLocation + "Recipes.json", _existingJson);
        }

        [TestMethod]
        public void JsonRepository_Read_Succeeds()
        {
            var recipes = new JsonRepository().Recipes;

            Assert.AreEqual(2, recipes.Count());

            var homemadePizza = recipes.Single(r => r.Id == 1);

            Assert.AreEqual("Homemade Pizza", homemadePizza.Title);
        }

        [TestMethod]
        public void JsonRepository_Create_Succeeds()
        {
            var repo = new JsonRepository();
            repo
                .Create(new Recipe
                {
                    Title = "Baked fish",
                    Description = "Fish that is baked",
                    TimeToPrepare = .5
                })
                .SaveChanges();

            repo = new JsonRepository();

            var addedRecipe = repo.Recipes.Single(r => r.Id == 3);

            Assert.AreEqual("Baked fish", addedRecipe.Title);
            Assert.AreEqual("Fish that is baked", addedRecipe.Description);
            Assert.AreEqual(.5, addedRecipe.TimeToPrepare);
        }

        [TestMethod]
        public void JsonRepository_Update_Succeeds()
        {
            var repo = new JsonRepository();
            var existing = repo.Recipes.Single(r => r.Id == 1);

            existing.Title = "test";
            existing.Description = "also test";
            existing.TimeToPrepare = 35;

            repo
                .Update(existing)
                .SaveChanges();

            repo = new JsonRepository();
            existing = repo.Recipes.Single(r => r.Id == 1);

            Assert.AreEqual("test", existing.Title);
            Assert.AreEqual("also test", existing.Description);
            Assert.AreEqual(35, existing.TimeToPrepare);
        }

        [TestMethod]
        public void JsonRepository_Delete_Succeeds()
        {
            var repo = new JsonRepository();
            var existing = repo.Recipes.Single(r => r.Id == 1);

            repo.Delete(existing)
                .SaveChanges();

            existing = repo.Recipes.SingleOrDefault(r => r.Id == 1);

            Assert.IsNull(existing);
        }
    }
}

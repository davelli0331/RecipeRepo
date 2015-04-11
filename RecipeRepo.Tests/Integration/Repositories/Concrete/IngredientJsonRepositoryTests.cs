using Microsoft.VisualStudio.TestTools.UnitTesting;
using RecipeRepo.Domain;
using RecipeRepo.Repository.Json;
using RecipeRepo.Tests.Integration.Repositories.Abstract;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RecipeRepo.Tests.Integration.Repositories
{
    [TestClass]
    public class IngredientJsonRepositoryTests : BaseJsonRepositoryTest
    {
        private const string fileName = "Ingredients.json";
        [TestInitialize]
        public void InitializeTests()
        {
            CacheExistingJson(fileName);

            File.WriteAllText(JsonRepositoryStrings.JsonFolderLocation + fileName, "[{\"Id\":\"1\",\"Name\":\"All Purpose Flour\"},{\"Id\":\"2\",\"Name\":\"Active Yeast\"}]");
        }

        [TestCleanup]
        public void Cleanup()
        {
            RestoreCachedJson(fileName);
        }

        [TestMethod]
        public void IngredientJsonRepository_Get_Succeeds()
        {
            var repo = new JsonRepository();
            var ingredients = repo.Ingredients;

            Assert.AreEqual(2, ingredients.Count());
        }

        [TestMethod]
        public void IngredientJsonRepository_Add_Succeeds()
        {
            var repo = new JsonRepository();
            repo.Create(new Ingredient 
            {
                Name = "Cilantro"
            })
            .SaveChanges();

            repo = new JsonRepository();
            var ingredients = repo.Ingredients;

            Assert.AreEqual(3, ingredients.Count());
            Assert.AreEqual(1, ingredients.Count(i => i.Id == 3 && i.Name == "Cilantro"));
        }

        [TestMethod]
        public void IngredientJsonRepository_Update_Succeeds()
        {
            var repo = new JsonRepository();
            var ingredient = repo.Ingredients.Single(i => i.Id == 1);

            ingredient.Name = "Le test";

            repo.Update(ingredient)
                .SaveChanges();

            repo = new JsonRepository();

            var updated = repo.Ingredients.Single(i => i.Id == 1);

            Assert.AreEqual("Le test", updated.Name);
        }

        [TestMethod]
        public void IngredientJsonRepository_Delete_Succeeds()
        {
            var repo = new JsonRepository();
            var ingredient = repo.Ingredients.Single(i => i.Id == 1);

            repo.Delete(ingredient)
                .SaveChanges();

            repo = new JsonRepository();

            var shouldBeNull = repo.Ingredients.SingleOrDefault(i => i.Id == 1);

            Assert.IsNull(shouldBeNull);
            Assert.AreEqual(1, repo.Ingredients.Count());
        }
    }
}

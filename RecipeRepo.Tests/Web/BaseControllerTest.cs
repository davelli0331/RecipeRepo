using Moq;
using Newtonsoft.Json;
using RecipeRepo.Crud.Concrete.Queries;
using RecipeRepo.Crud.Contracts.CreateUpdateDelete;
using RecipeRepo.Crud.Contracts.Retreive.QueryGenerator.Abstract;
using RecipeRepo.Domain;
using RecipeRepo.Repository.Contracts;
using RecipeRepo.Tests.Stubs;
using RecipeRepo.WebApi.Controllers.ControllerRequirements.Abstract;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;

namespace RecipeRepo.Tests.Web
{
    public class BaseControllerTest
    {
        internal readonly Mock<IQueryGenerator> _mockQueryGenerator = new Mock<IQueryGenerator>();
        internal readonly Mock<IRepository> _mockRepository = new Mock<IRepository>();
        internal readonly Mock<IRequirements> _mockRequirements = new Mock<IRequirements>();
        internal readonly Mock<ICommandGenerator> _mockCommandGenerator = new Mock<ICommandGenerator>();

        internal TItem Deserialize<TItem>(HttpContent content)
        {
            var contentString = content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<TItem>(contentString.Result);
        }

        internal void SetupScaffolding()
        {
            _mockQueryGenerator
                .Setup(q => q.GenerateRecipeQuery())
                .Returns(new RecipeQuery(_mockRepository.Object));

            _mockRequirements
                .Setup(q => q.QueryGenerator)
                .Returns(_mockQueryGenerator.Object);

            _mockRequirements
                .Setup(r => r.CommandGenerator)
                .Returns(_mockCommandGenerator.Object);

            var mockRecipeCommandGenerator = new Mock<IEntityCommandGenerator<Recipe>>();

            _mockCommandGenerator
                .Setup(c => c.For(It.IsAny<Recipe>()))
                .Returns(mockRecipeCommandGenerator.Object);

            mockRecipeCommandGenerator
                .Setup(c => c.ThatWill(It.IsAny<CommandType>()))
                .Returns(new StubSuccessfulCommand());
        }

        internal void SetRecipes(IEnumerable<Recipe> recipes)
        {
            _mockRepository
                .Setup(r => r.Recipes)
                .Returns(recipes.AsQueryable());
        }
    }
}

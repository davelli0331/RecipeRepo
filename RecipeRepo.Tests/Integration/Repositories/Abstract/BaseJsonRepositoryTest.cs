using RecipeRepo.Repository.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RecipeRepo.Tests.Integration.Repositories.Abstract
{
    public class BaseJsonRepositoryTest
    {
        protected string ExistingJson;

        protected void CacheExistingJson(string fileName)
        {
            ExistingJson = File.ReadAllText(JsonRepository.JsonFolderLocation + fileName);
        }

        protected void RestoreCachedJson(string fileName)
        {
            File.WriteAllText(JsonRepository.JsonFolderLocation + fileName, ExistingJson);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RecipeRepo.WebApi.Controllers.JsonResponses.Concrete
{
    public class JsonResponse
    {
        private const string _successResultString = "Success";
        private const string _errorResultString = "Error";

        public string Result { get; private set; }

        public static JsonResponse CreateSuccessResponse()
        {
            return new JsonResponse
            {
                Result = _successResultString
            };
        }
    }
}

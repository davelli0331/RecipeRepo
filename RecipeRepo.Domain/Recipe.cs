
using System.Collections.Generic;

namespace RecipeRepo.Domain
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public double TimeToPrepare { get; set; }

        public virtual List<RecipeIngredient> Ingredients { get; set; }
    }
}

declare module Models {
    class RecipeModel extends BaseModel {
        RecipeName: string;
        constructor(controller: IController, recipeName: string);
    }
}

class RecipeModel extends BaseModel {

    RecipeName: string;

    constructor(controller: IController, recipeName: string) {
        super(controller);

        this.RecipeName = recipeName;
    }
}
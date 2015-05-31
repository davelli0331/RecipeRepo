declare module Models {
    class RecipeModel extends BaseModel {
        Title: string;
        Description: string;
        TimeToPrepare: number;
        constructor(controller?: Controllers.IController, title?: string, description?: string, timeToPrepare?: number);
    }
}

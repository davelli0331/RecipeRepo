module Models {
    export class RecipeModel extends BaseModel {

        Title: string;
        Description: string;
        TimeToPrepare: number;

        constructor(controller?: Controllers.IController, title?: string, description?: string, timeToPrepare?: number) {
            controller = controller || new Controllers.RecipeController();
            super(controller);

            this.Title = title;
            this.Description = description;
            this.TimeToPrepare = timeToPrepare;
        }
    }
}
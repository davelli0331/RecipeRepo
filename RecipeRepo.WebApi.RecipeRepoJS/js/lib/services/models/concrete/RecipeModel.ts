/// <reference path="../../../_references.ts" />
class RecipeModel extends BaseModel {
	RecipeName: string;
	
	constructor(controller: IService, recipeName: string) {
		super(controller);
		
		this.RecipeName = recipeName;
	}
}
/// <reference path="scripts/typings/jasmine-matchers/jasmine-matchers.d.ts" />
/// <reference path="scripts/typings/es6-promise/es6-promise.d.ts" />
/// <reference path="scripts/typings/jasmine/jasmine.d.ts" />
interface IController {
    getJson: Function;
    postJson: Function;
    putJson: Function;
    deleteJson: Function;
}
declare class BaseModel {
    private controller;
    private isDirty;
    private isNew;
    IsNew: boolean;
    IsDirty: boolean;
    constructor(controller?: IController);
    Save(): any;
    toJson(): {};
}
declare class RecipeModel extends BaseModel {
    RecipeName: string;
    constructor(controller: IController, recipeName: string);
}
declare class Service implements IController {
    getJson: Function;
    postJson: Function;
    putJson: Function;
    deleteJson: Function;
    constructor(options: IController);
}
declare class mockService implements IController {
    getJson(): void;
    postJson(): Promise<{}>;
    putJson(): void;
    deleteJson(): void;
}

/// <reference path="scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="scripts/typings/jasmine-matchers/jasmine-matchers.d.ts" />
interface IService {
    getJson: Function;
    postJson: Function;
    putJson: Function;
    deleteJson: Function;
}
declare class BaseModel {
    private controller;
    private isDirty;
    private isNew;
    private testField;
    IsNew: boolean;
    IsDirty: boolean;
    constructor(controller: IService);
    save(): any;
    toJson(): {};
}
declare class mockService implements IService {
    getJson(): void;
    postJson(): void;
    putJson(): void;
    deleteJson(): void;
}
declare class Collection<TItem> {
    private items;
    constructor();
    Add(item: TItem): void;
}
declare class RecipeModel extends BaseModel {
    RecipeName: string;
    constructor(controller: IService, recipeName: string);
}
declare class Service implements IService {
    getJson: Function;
    postJson: Function;
    putJson: Function;
    deleteJson: Function;
    constructor(options: IService);
}

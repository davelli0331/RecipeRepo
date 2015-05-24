declare class BaseModel {
    private controller;
    private isDirty;
    private isNew;
    IsNew: boolean;
    IsDirty: boolean;
    constructor(controller?: IController);
    Save(): Promise<any>;
    toJson(): {};
}

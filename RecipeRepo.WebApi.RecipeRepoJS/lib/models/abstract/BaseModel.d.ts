declare module Models {
    class BaseModel {
        private controller;
        private isDirty;
        private isNew;
        IsNew: boolean;
        IsDirty: boolean;
        constructor(controller?: IController);
        Save(options?: {
            onSuccess?: (successReponse?: any) => void;
            onFailure?: (failureResponse?: any) => void;
        }): void;
        toJson(): {};
    }
}

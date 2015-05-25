class BaseModel {
    private controller: IController;
    private isDirty: boolean;
    private isNew: boolean;

    get IsNew() {
        return this.isNew;
    }

    get IsDirty() {
        return this.isDirty;
    }

    constructor(controller?: IController) {
        this.controller = controller;

        this.isDirty = true;
        this.isNew = true;
    }

    Save(options?: { onSuccess?: (successReponse?: any) => void; onFailure?: (failureResponse?: any) => void; }) {
        options = options || {};

        if (this.isNew) {
            var me = this;
            this.controller
                .postJson(this.toJson())
                .then((response: any) => {
                me.isDirty = false;
                me.isNew = false;

                if (options.onSuccess) {
                    options.onSuccess();
                }
            })
                .catch((response: any) => {
                if (options.onFailure) {
                    options.onFailure(response);
                }
            });
        } else if (this.isDirty) {
            this.controller
                .putJson(this.toJson())
                .then((response: any) => {
            });
        }
    }

    toJson() {
        return {};
    }


}
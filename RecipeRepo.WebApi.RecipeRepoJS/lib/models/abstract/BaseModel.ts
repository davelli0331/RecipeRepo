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

    Save() {
        if (this.isNew) {
            var me = this;
            this.controller
                .postJson(this.toJson())
                .then((response: any) => {
                me.isDirty = false;
                me.isDirty = false;
            })
                .catch((response: any) => { });
        } else if (this.isDirty) {
            return this.controller.putJson(this.toJson());
        }
    }

    toJson() {
        return {};
    }


}
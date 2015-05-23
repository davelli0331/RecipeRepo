/// <reference path="../../services/abstract/iservice.ts" />
class BaseModel {
    private controller: IService;
    private isDirty: boolean;
    private isNew: boolean;
    private testField: string;

    get IsNew() {
        return this.isNew;
    }

    get IsDirty() {
        return this.isDirty;
    }

    constructor(controller: IService) {
        this.controller = controller;

        this.isDirty = false;
        this.isNew = true;
        this.testField = "";

    }

    save() {
        if (this.isNew) {
            var me = this;
            this.controller
                .postJson(this.toJson())
                .done(function (response) {
                    me.isNew = false;
                    me.isDirty = false;
                });
        } else if (this.isDirty) {
            return this.controller.putJson(this.toJson());
        }
    }

    toJson() {
        return {};
    }

    
}
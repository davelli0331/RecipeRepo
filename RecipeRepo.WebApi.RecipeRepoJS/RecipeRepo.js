var BaseModel = (function () {
    function BaseModel(controller) {
        this.controller = controller;

        this.isDirty = false;
        this.isNew = true;
        this.testField = "";
    }
    BaseModel.prototype.save = function () {
        if (this.isNew) {
            var me = this;
            this.controller.postJson(this.toJson()).done(function (response) {
                me.isNew = false;
                me.isDirty = false;
            });
        } else if (this.isDirty) {
            return this.controller.putJson(this.toJson());
        }
    };

    BaseModel.prototype.toJson = function () {
        return {};
    };
    return BaseModel;
})();
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var RecipeModel = (function (_super) {
    __extends(RecipeModel, _super);
    function RecipeModel(controller, recipeName) {
        _super.call(this, controller);

        this.RecipeName = recipeName;
    }
    return RecipeModel;
})(BaseModel);
/// <reference path="IService.ts" />
var Service = (function () {
    function Service(options) {
        this.getJson = options.getJson;
        this.postJson = options.postJson;
        this.putJson = options.putJson;
        this.deleteJson = options.deleteJson;
    }
    return Service;
})();
/// <reference path="lib/services/abstract/IService.ts" />
/// <reference path="lib/models/abstract/BaseModel.ts" />

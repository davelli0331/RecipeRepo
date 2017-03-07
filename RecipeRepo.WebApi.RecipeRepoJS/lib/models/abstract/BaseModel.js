var Models;
(function (Models) {
    var BaseModel = (function () {
        function BaseModel(controller) {
            this.controller = controller;
            this.isDirty = true;
            this.isNew = true;
        }
        Object.defineProperty(BaseModel.prototype, "IsNew", {
            get: function () {
                return this.isNew;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseModel.prototype, "IsDirty", {
            get: function () {
                return this.isDirty;
            },
            enumerable: true,
            configurable: true
        });
        BaseModel.prototype.Save = function (options) {
            options = options || {};
            if (this.isNew) {
                var me = this;
                this.controller
                    .postJson(this.toJson())
                    .then(function (response) {
                    me.isDirty = false;
                    me.isNew = false;
                    if (options.onSuccess) {
                        options.onSuccess();
                    }
                })
                    .catch(function (response) {
                    if (options.onFailure) {
                        options.onFailure(response);
                    }
                });
            }
            else if (this.isDirty) {
                this.controller
                    .putJson(this.toJson())
                    .then(function (response) {
                });
            }
        };
        BaseModel.prototype.toJson = function () {
            return {};
        };
        return BaseModel;
    }());
    Models.BaseModel = BaseModel;
})(Models || (Models = {}));

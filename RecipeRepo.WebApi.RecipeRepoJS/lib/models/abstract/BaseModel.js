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
    BaseModel.prototype.Save = function () {
        if (this.isNew) {
            var me = this;
            this.controller
                .postJson(this.toJson())
                .then(function (response) {
                me.isDirty = false;
                me.isDirty = false;
            })
                .catch(function (response) { });
        }
        else if (this.isDirty) {
            return this.controller.putJson(this.toJson());
        }
    };
    BaseModel.prototype.toJson = function () {
        return {};
    };
    return BaseModel;
})();

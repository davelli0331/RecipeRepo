/// <reference path="../../../scripts/typings/jasmine/jasmine.d.ts" />
describe('Collection ', function () {
    describe('add ', function () {
        it('adds new item', function () {
        });
    });
});
/// <reference path="../../services/abstract/iservice.ts" />
var BaseModel = (function () {
    function BaseModel(controller) {
        this.controller = controller;
        this.isDirty = false;
        this.isNew = true;
        this.testField = "";
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
    BaseModel.prototype.save = function () {
        if (this.isNew) {
            var me = this;
            this.controller
                .postJson(this.toJson())
                .done(function (response) {
                me.isNew = false;
                me.isDirty = false;
            });
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
/// <reference path="../../../scripts/typings/jasmine-matchers/jasmine-matchers.d.ts" />
/// <reference path="../../lib/models/abstract/basemodel.ts" />
/// <reference path="../../lib/services/abstract/iservice.ts" />
/// <reference path="../../../scripts/typings/jasmine/jasmine.d.ts" />
var mockService = (function () {
    function mockService() {
    }
    mockService.prototype.getJson = function () { };
    mockService.prototype.postJson = function () { };
    mockService.prototype.putJson = function () { };
    mockService.prototype.deleteJson = function () { };
    return mockService;
})();
describe("Base Model ", function () {
    it("is new", function () {
        var model = new BaseModel(new mockService());
        expect(model.IsNew).toBeTruthy();
    });
    it("is dirty is false", function () {
        var model = new BaseModel(new mockService());
        expect(model.IsDirty).toBeFalsy();
    });
});
var Collection = (function () {
    function Collection() {
    }
    Collection.prototype.Add = function (item) {
        this.items.push(item);
    };
    return Collection;
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
/// <reference path="lib/models/abstract/basemodel.ts" />

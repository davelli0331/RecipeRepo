var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Models;
(function (Models) {
    var RecipeModel = (function (_super) {
        __extends(RecipeModel, _super);
        function RecipeModel(controller, title, description, timeToPrepare) {
            controller = controller || new Controllers.RecipeController();
            _super.call(this, controller);
            this.Title = title;
            this.Description = description;
            this.TimeToPrepare = timeToPrepare;
        }
        return RecipeModel;
    })(Models.BaseModel);
    Models.RecipeModel = RecipeModel;
})(Models || (Models = {}));

var Controllers;
(function (Controllers) {
    var RecipeController = (function () {
        function RecipeController() {
        }
        RecipeController.prototype.getJson = function (options) {
            options = options || {};
            return new Promise(function (resolve, reject) {
                var request = new XMLHttpRequest();
                request.open('GET', '/api/Recipe', true);
                request.onload = function () {
                    if (request.status === 200) {
                        resolve(request.response);
                    }
                    reject(request.response);
                };
                request.onerror = function () {
                    reject("Network error");
                };
                request.send();
            });
        };
        RecipeController.prototype.postJson = function (json) {
            return new Promise(function (resolve, reject) { });
        };
        RecipeController.prototype.putJson = function (json) {
            return new Promise(function (resolve, reject) { });
        };
        RecipeController.prototype.deleteJson = function (json) {
            return new Promise(function (resolve, reject) { });
        };
        return RecipeController;
    })();
    Controllers.RecipeController = RecipeController;
})(Controllers || (Controllers = {}));

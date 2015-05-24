var mockController = (function () {
    function mockController() {
    }
    mockController.prototype.postJson = function (json) {
        var promise = new Promise(function (resolve, reject) {
            resolve();
        });
        return promise;
    };
    mockController.prototype.getJson = function (json) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    mockController.prototype.putJson = function (json) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    mockController.prototype.deleteJson = function (json) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    return mockController;
})();

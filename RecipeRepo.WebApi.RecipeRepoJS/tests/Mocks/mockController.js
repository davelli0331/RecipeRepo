var mockController = (function () {
    function mockController(options) {
        this.options = options;
    }
    mockController.prototype.postJson = function (json) {
        var me = this;
        var promise = new Promise(function (resolve, reject) {
            if (!me.options.postShouldFail) {
                resolve();
            }
            else {
                reject();
            }
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

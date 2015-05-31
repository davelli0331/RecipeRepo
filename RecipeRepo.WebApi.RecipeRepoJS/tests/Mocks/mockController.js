var mockController = (function () {
    function mockController(options) {
        this.options = options;
    }
    mockController.prototype.postJson = function (json) {
        var me = this;
        var promise = new Promise(function (resolve, reject) {
            if (!me.options.postOptions.postShouldFail) {
                resolve();
            }
            else {
                reject();
            }
        });
        return promise;
    };
    mockController.prototype.getJson = function (options) {
        if (!this.options.getOptions.getShouldFail) {
            return Promise.resolve(this.options.getOptions.getShouldReturn);
        }
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

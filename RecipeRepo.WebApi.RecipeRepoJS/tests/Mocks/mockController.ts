class mockController implements IController {
    private options: { postShouldFail?: boolean };

    constructor(options?: { postShouldFail?: boolean }) {
        this.options = options;
    }

    postJson(json: any) {
        var me = this;
        var promise = new Promise(function (resolve, reject) {
            if (!me.options.postShouldFail) {
                resolve();
            } else {
                reject();
            }
        });

        return promise;
    }

    getJson(json: any) {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }

    putJson(json: any) {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }

    deleteJson(json: any) {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
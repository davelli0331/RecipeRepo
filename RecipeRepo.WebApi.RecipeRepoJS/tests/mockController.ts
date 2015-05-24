class mockController implements IController {
    postJson(json: any) {
        var promise = new Promise(function (resolve, reject) {
            resolve();
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
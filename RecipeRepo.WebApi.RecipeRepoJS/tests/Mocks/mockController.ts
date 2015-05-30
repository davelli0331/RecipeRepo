class mockController implements IController {
    private options: {
        postOptions?: {
            postShouldFail?: boolean
        };

        getOptions?: {
            getShouldReturn?: any;
            getShouldFail?: boolean
        }
    };

    constructor(options?:
        {
            postOptions?: {
                postShouldFail?: boolean
            };

            getOptions?: {
                getShouldReturn?: any;
                getShouldFail?: boolean
            }
        }) {
        this.options = options;
    }

    postJson(json: any) {
        var me = this;
        var promise = new Promise(function (resolve, reject) {
            if (!me.options.postOptions.postShouldFail) {
                resolve();
            } else {
                reject();
            }
        });

        return promise;
    }

    getJson(json?: any) {
        var deferred = $.Deferred();

        deferred.resolve(this.options.getOptions.getShouldReturn);

        return deferred;
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
declare class mockController implements IController {
    private options;
    constructor(options?: {
        postOptions?: {
            postShouldFail?: boolean;
        };
        getOptions?: {
            getShouldReturn?: any;
            getShouldFail?: boolean;
        };
    });
    postJson(json: any): Promise<{}>;
    getJson(json?: any): JQueryDeferred<{}>;
    putJson(json: any): Promise<{}>;
    deleteJson(json: any): Promise<{}>;
}
